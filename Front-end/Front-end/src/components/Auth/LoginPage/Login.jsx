const Login = () => {
    return (
      <div className="flex flex-col px-10 gap-1 max-w-sm mx-auto">
        <span>Email</span>
        <input type="email" className="w-full border rounded-md p-2 mb-4" name="" id="" />
        <span>Contraseña</span>
        <input type="password" className="w-full border rounded-md p-2 mb-4" name="" id="" />
        <div className="pb-2"><input type="checkbox" className="p-4 " name="" id="" /> <span>Recordar Cuenta</span></div>
        <button type="button" className="w-full border rounded-md p-2 mb-4 border-[#a1fe5e94]"> Ingresar</button>
        <div><span>¿No tienes cuenta? <a href="" className="text-[#1f4b86]">Regístrate</a></span></div>
      </div>
    );
  };
  
  export default Login;
  