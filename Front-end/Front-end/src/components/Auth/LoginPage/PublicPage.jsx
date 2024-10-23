import { useState } from "react";
import Login from "./Login";
import Register from "../Register";

const PublicPage = () => {
  const [register, setRegister] = useState(false);
  const toggleRegister = () => {
    setRegister(!register);
    console.log(register);
  };
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg-dark">
      {register ? (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-[rgba(37,37,37,0.7)]">
          <div className="bg-[#92a2b6] rounded-md border  border-[#c8c8c864] p-2 justify-between w-4/5 sm:w-1/2 lg:w-1/3">
            <Register toggleRegister={toggleRegister} />
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Contenedor principal que ocupa el 80% del ancho de la pantalla */}
      <div className="flex w-4/5 bg-[#c9def767] rounded-md border  border-[#c8c8c864] p-2 justify-between">
        {/* Primera columna (lado izquierdo) */}
        <div className="w-1/2 p-6 pr-4 border-r border-[#ffffff38]">
          <h1 className="text-4xl font-bold">FutCop</h1>
          <p className="mt-4">
            FutCop es una plataforma diseñada para facilitar la reserva de
            canchas de fútbol. Permitiendo que el equipo indique cuántos
            jugadores tienen disponibles y las fechas en las que desean jugar.
            La aplicación ofrece una experiencia sencilla para gestionar las
            reservas de manera eficiente, conectando equipos con clubes y
            asegurando que encuentren el mejor horario para sus partidos.
          </p>
        </div>
        {/* Segunda columna (lado derecho) */}
        <div className="w-1/2 p-6 pl-4">
          {/* Puedes añadir contenido aquí */}
          <Login toggleRegister={toggleRegister}></Login>
        </div>
      </div>
    </main>
  );
};

export default PublicPage;
