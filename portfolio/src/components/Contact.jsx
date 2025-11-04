
const Contact = () => {
  return (
    <section id="contact" className="px-8 py-16 bg-neutral-900 h-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white font-bold mb-2">Contact me</h2>
        <p className="text-gray-400 mb-6">
          Cultivating Connections: Reach Out And Connect With Me
        </p>
      </div>
      <form className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="bg-neutral-800 text-gray-200 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500 col-span-1"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-neutral-800 text-gray-200 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500 col-span-1"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="bg-neutral-800 text-gray-200 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500 col-span-1"
        />
        <select
          className="bg-neutral-800 text-gray-400 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500 col-span-1"
          defaultValue=""
        >
          <option value="" disabled>Service Of Interest</option>
          <option>Web Development</option>
          <option>App Development</option>
          <option>Java development</option>
        </select>
        <input
          type="text"
          placeholder="Timeline"
          className="bg-neutral-800 text-gray-200 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500 col-span-1"
        />
        <textarea
          placeholder="Project Details..."
          rows={3}
          className="bg-neutral-800 text-gray-200 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-500 col-span-1 md:col-span-1"
        />
        <div className="md:col-span-2 flex justify-end">
          <button className="border border-gray-400 text-gray-200 px-8 py-2 rounded hover:bg-orange-600 transition-colors flex items-center justify-center">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
