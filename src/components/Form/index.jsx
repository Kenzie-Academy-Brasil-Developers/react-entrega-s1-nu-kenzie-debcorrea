import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions, id }) {
  const [description, setDescription] = useState("");

  const [option, setOption] = useState("Entrada");

  const [value, setValue] = useState();

  const transaction = {
    description: description,
    type: option,
    value: value,
    id: id
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="form">
      <div className="descriptionContainer">
        <label htmlFor="description">Descrição</label>
        <input
          id="description"
          type="text"
          value={description}
          required
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="valueContainer">
        <div className="value">
          <label htmlFor="value">Valor</label>
          <input
            id="value"
            type="number"
            value={value}
            min={0}
            required
            placeholder="1 R$"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="valueType">
          <label htmlFor="valueType">Tipo de valor</label>
          <select
            value={option}
            onChange={(event) => setOption(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
        <button
          onClick={() => {
            setListTransactions([...listTransactions, transaction]);
            setDescription("");
            setOption("Entrada");
            setValue("");
          }}
          type="submit"
        >
          Inserir valor
        </button>
      </div>
    </form>
  );
}

export default Form;
