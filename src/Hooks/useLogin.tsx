import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import type { formularioProps } from "../Modelos/formulario";
import Swal from "sweetalert2";

const useLogin = () => {
  const registroIniciado: formularioProps = {
    name: "",
    email: "",
    password: "",
  };

  const [formulario, setFormulario] =
    useState<formularioProps>(registroIniciado);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const [cargando, setcargando] = useState<boolean>(false);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setcargando(false);
    setTimeout(() => {
      if (
        !formulario.name.trim() ||
        !formulario.email.trim() ||
        !formulario.password.trim()
      ) {
        Swal.fire({
          title: "Datos Incompletos",
          text: "Uno de los datos ingresados esta faltante, intenta de nuevo",
          icon: "warning",
        });
      } else {
        Swal.fire({
          title: "Bienvenido Caballero",
          text: `¡Bienvenido Estimado: ${formulario.name}`,
          icon: "success",
          timer: 2000,
        });
        setFormulario(registroIniciado);
      }
    }, 2000);
  };
  return {
    formulario,
    cargando,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
