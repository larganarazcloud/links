import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp, FaEnvelope, FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("Cargando...");

  useEffect(() => {
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    setDate(today.toLocaleDateString("es-ES", options));

    fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&current_weather=true")
      .then(response => response.json())
      .then(data => setTemperature(`${data.current_weather.temperature}°C`))
      .catch(() => setTemperature("No disponible"));
  }, []);

  const links = [
    { href: "fb://profile/100093493054810", icon: <FaFacebookF />, text: "Facebook", bg: "bg-blue-600" },
    { href: "https://www.linkedin.com/in/leandro-arga%C3%B1araz-641490160", icon: <FaLinkedinIn />, text: "LinkedIn", bg: "bg-blue-500" },
    { href: "https://www.instagram.com/leandromatias.ar/", icon: <FaInstagram />, text: "Instagram", bg: "bg-pink-500" },
    { href: "https://github.com/larganarazcloud", icon: <FaGithub />, text: "GitHub", bg: "bg-gray-800" },
    { href: "https://wa.me/5491161025292", icon: <FaWhatsapp />, text: "WhatsApp", bg: "bg-green-500" },
    { href: "mailto:leandromatiasarganaraz@gmail.com", icon: <FaEnvelope />, text: "Enviar Email", bg: "bg-blue-400" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-purple-900 text-gray-900 p-6 font-montserrat">
      <div className="text-center mb-8">
        <motion.h1 
          className="text-4xl font-bold bg-clip-text text-transparent"
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ backgroundImage: "linear-gradient(90deg, #38bdf8, #a78bfa, #38bdf8)", backgroundSize: "200% 100%" }}
        >
          LEANDRO ARGAÑARAZ
        </motion.h1>
        <p className="text-xl font-semibold flex items-center justify-center mt-2">
          Software Developer <FaLaptop className="ml-2" />
        </p>
        <p className="text-lg mt-2">{date}</p>
        <p className="text-lg">Ubicación: Buenos Aires</p>
        <p className="text-lg">Temperatura: {temperature}</p>
      </div>
      <div className="w-full max-w-md">
        {links.map(({ href, icon, text, bg }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer"
             className={`flex items-center justify-center w-full p-4 my-2 text-white text-lg rounded-lg shadow-md transform transition duration-300 hover:scale-105 ${bg}`}>
            {icon} <span className="ml-3">{text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
