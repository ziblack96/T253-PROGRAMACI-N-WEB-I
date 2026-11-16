import useLogin from "../Hooks/useLogin";

export const FormularioRegistro = () => {
  const { formulario, cargando, handleChange, handleSubmit } = useLogin();

  return (
    <div className="w-full min-h-screen bg-blue-500 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full h-auto max-w-md bg-orange-300 rounded-lg shadow-sm 
                  flex flex-col items-center gap-6 p-8 border-2 border-black
                  space-y-4
                  "
      >
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Formulario de Registro
        </h2>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-bold mb-2">
            {" "}
            Ingrese su nombre:
            <input
              className=" text-left bg-white w-full rounded-lg px-3 border-2 border-gray-400"
              id="name"
              type="text"
              placeholder="Cristhian Mauricio"
              name="name"
              value={formulario.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-lg font-bold">
            {" "}
            Ingrese su correo electronico:
            <input
              className="text-left bg-white w-full rounded-lg px-3 border-2 border-gray-400"
              id="email"
              type="email"
              placeholder="micorreoelectronico@gmail.com"
              name="email"
              value={formulario.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-lg font-bold">
            {" "}
            Ingrese su contraseña:
            <input
              className="text-left bg-white w-full rounded-lg px-3 border-2 border-gray-400"
              id="password"
              type="password"
              name="password"
              placeholder="********"
              value={formulario.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex w-full">
          <button
            type="submit"
            disabled={cargando}
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg w-full
              hover:bg-indigo-400 hover:text-black border-2 border-white
            "
          >
            {cargando ? "Verificando..." : "Registrar"}
          </button>
        </div>
      </form>
    </div>
  );
};
