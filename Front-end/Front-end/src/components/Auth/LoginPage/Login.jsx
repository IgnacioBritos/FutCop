import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../app/user";

const Login = ({ register, toggleRegister }) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user))
    
  };

  return (
    <div className="flex flex-col px-10 gap-1 max-w-sm mx-auto">
      <form onSubmit={handleSubmit}>
        <span>Email</span>
        <input
          type="email"
          onChange={handleChange}
          className="w-full border rounded-md p-2 mb-4"
          name="email"
          id="email"
        />
        <span>Contraseña</span>
        <input
          type="password"
          onChange={handleChange}
          className="w-full border rounded-md p-2 mb-4"
          name="password"
          id="password"
        />
        <div className="pb-2">
          <input
            type="checkbox"
            className="p-4 "
            name="checkbox"
            onChange={handleChange}
            id="checkbox"
          />{" "}
          <span>Recordar Cuenta</span>
        </div>
        <button
          type="submit "
          className="w-full border rounded-md p-2 mb-4 border-[#a1fe5e94]"
        >
          {" "}
          Ingresar
        </button>
      </form>
      <div>
        <span>
          ¿No tienes cuenta?{" "}
          <button onClick={toggleRegister} className="text-[#1f4b86]">
            Regístrate
          </button>
        </span>
      </div>
    </div>
  );
};

export default Login;
