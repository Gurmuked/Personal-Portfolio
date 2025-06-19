import { FaAppStore,  FaJava  } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    icon: <FaAppStore size={40} className="text-orange-500 mx-auto" />,
  },
  {
    title: "App Development",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    icon: <FaAppStore size={40} className="text-orange-500 mx-auto" />,
  },
  {
    title: "Java Development",
    description: "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet consectetur",
    icon: <FaJava size={40} className="text-orange-500 mx-auto" />,
  }
];

const Service = () => {
  return (
    <section className="px-8 py-16 bg-neutral-900 h-[60vh]">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white font-bold mb-2">Services</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-neutral-800 rounded-lg p-8 flex flex-col items-center">
            <div>{service.icon}</div>
            <h3 className="text-orange-500 font-semibold text-lg mt-4 mb-2">{service.title}</h3>
            <p className="text-gray-400 text-center text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;