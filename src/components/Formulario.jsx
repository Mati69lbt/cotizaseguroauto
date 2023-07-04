const Formulario = () => {
  return (
    <>
      <form action="">
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Selecciona Marca</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Formulario;
