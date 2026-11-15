import { useState } from "react";

export default function Propinas() {
  const [montoIngresado, setmontoIngresado] = useState<string>("");
  const [porcentaje, setPorcentaje] = useState<string>("");
  const [totalPropina, settotalPropina] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const calcularTotal = () => {
    let monto = parseFloat(montoIngresado);
    let propina = parseFloat(porcentaje) / 100;

    const totalP = monto * propina;
    settotalPropina(totalP);
    setTotal(monto + totalP);
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center min-h-screen
                    bg-indigo-200 p-4
    "
    >
      <form
        className="w-full max-w-md h-auto flex flex-col
                   gap-6 p-8 rounded-2xl
                  bg-white
                  "
      >
        <h3 className="text-3xl font-bold text-center text-green-500">
          Calculadora de Propinas
        </h3>
        <label className="text-lg font-semibold">
          {" "}
          Ingrese el monto de la factura:
        </label>
        <input
          className="bg-green-300 border-3 border-gray-300 rounded-lg text-black text-center 
          
          text-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          type="text"
          value={montoIngresado}
          onChange={(e) => setmontoIngresado(e.target.value)}
        />
        <div>
          <p className="text-left text-lg font-semibold mb-2">
            Ingrese el porcentaje de propina:{" "}
          </p>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              className="accent-green-400 w-5 h-5"
              type="radio"
              name="propina"
              value="10"
              checked={porcentaje === "10"}
              onChange={(e) => setPorcentaje(e.target.value)}
            />
            <span className="font-medium">10%</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              className="accent-green-400 w-5 h-5"
              type="radio"
              name="propina"
              value="20"
              checked={porcentaje === "20"}
              onChange={(e) => setPorcentaje(e.target.value)}
            />
            <span className="font-medium">20%</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              className="accent-green-400 w-5 h-5"
              type="radio"
              name="propina"
              value="30"
              checked={porcentaje === "30"}
              onChange={(e) => setPorcentaje(e.target.value)}
            />
            <span className="font-medium"> 30%</span>
          </label>
        </div>
        <div className="flex flex-col text-left w-full gap-2">
          <p className="text-lg font-semibold">
            La cantidad de propina es: L {totalPropina}
          </p>
          <p className="text-lg font-semibold">
            El total a pagar seria de: L{total}{" "}
          </p>
          <button
            type="button"
            onClick={calcularTotal}
            className="bg-green-600 text-white rounded-lg py-2 px-0 shadow-sm w-full
          hover:bg-green-300 hover:text-black ring-gray-400 ring-2
          "
          >
            Calcular Total
          </button>
        </div>
      </form>
    </div>
  );
}
