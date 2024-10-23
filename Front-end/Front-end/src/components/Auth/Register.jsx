const Register = ({toggleRegister}) => {
  return (

      <div className="flex flex-col px-12">
        <button onClick={toggleRegister}  >X</button>
        <span>Email</span>
        <input
          type="email"
          className="w-full border rounded-md p-2 mb-4"
          name=""
          id="email"
        />
      <span>Contraseña</span>
      <input
        type="password"
        className="w-full border rounded-md p-2 mb-4"
        name=""
        id="password"
      />
      <span>Nombre del equipo</span>
      <input
        type="email"
        className="w-full border rounded-md p-2 mb-4"
        name=""
        id="name"
      />
      <span>Ubicación</span>
      <input type="..." name="" id="#" />
      
    </div>
  );
};

export default Register;
