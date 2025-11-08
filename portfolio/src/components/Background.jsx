import React, { useRef, useEffect } from 'react';

// Background component supporting three modes:
// - 'image' : full-screen background image (use public/ for assets)
// - 'video' : looping muted video
// - 'particles' : canvas-based particle system (recommended)
// Props: mode, src, poster, overlay (0..1), particleCount, particleColor

export default function Background({
  mode = 'particles',
  src = '/bg.png',
  poster,
  overlay = 0.0,
  particleCount = 80,
  particleColor = '255,255,255', // white in RGB
  backgroundColor = '#000000',
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (mode !== 'particles') return;

    // If user prefers reduced motion, don't run the particle animation; fall back to a static background.
    if (prefersReduced) {
      // nothing to initialize for particles
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;

    const devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

  // particle count responsive (allow large counts from props)
  const baseCount = Math.max(12, particleCount);
    const count = width < 640 ? Math.round(baseCount * 0.35) : width < 1024 ? Math.round(baseCount * 0.6) : baseCount;

  // initialize particles
    const particles = [];
    for (let i = 0; i < count; i++) {
      // smaller radii and subtler alpha for many small particles
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.35 + Math.random() * 0.9, // smaller base radius
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: 0.04 + Math.random() * 0.18,
      });
    }
    particlesRef.current = particles;

    resize();
    window.addEventListener('resize', resize);

    let last = performance.now();

    function step(now) {
      const dt = Math.min(40, now - last);
      last = now;

      // clear to black background so particles are visible
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.fillRect(0, 0, width, height);

      // draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * (dt * 0.06);
        p.y += p.vy * (dt * 0.06);

        // wrap edges
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

  const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
  grad.addColorStop(0, `rgba(${particleColor}, ${p.alpha})`);
  grad.addColorStop(0.6, `rgba(${particleColor}, ${p.alpha * 0.12})`);
  grad.addColorStop(1, `rgba(${particleColor}, 0)`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        // draw a tighter soft dot for smaller particles
        ctx.arc(p.x, p.y, Math.max(0.8, p.r * 1.8), 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    }

  // debug helper: indicate particle system started
  // console.debug('Particles background initialized', { count: particles.length });
  rafRef.current = requestAnimationFrame(step);

    // pause animation when page hidden to save CPU
    const handleVis = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else {
        last = performance.now();
        rafRef.current = requestAnimationFrame(step);
      }
    };
    document.addEventListener('visibilitychange', handleVis);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVis);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mode, particleCount, particleColor, prefersReduced]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      {mode === 'video' ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          src={src}
        />
      ) : mode === 'image' ? (
        <div
          className="w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${src})` }}
        />
      ) : mode === 'color' ? (
        // accept either a CSS color or a full gradient string in backgroundColor prop
        <div
          className="w-full h-full"
          style={{ background: typeof backgroundColor === 'string' ? backgroundColor : Array.isArray(backgroundColor) ? backgroundColor.join(',') : '#000' }}
        />
      ) : (
        // particles canvas
        <canvas ref={canvasRef} className="w-full h-full block" />
      )}

      {/* Optional overlay to ensure contrast. Set overlay=0 to disable. */}
      {overlay > 0 && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${overlay})` }}
        />
      )}
    </div>
  );
}
