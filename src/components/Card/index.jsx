import { FaTrash } from "react-icons/fa";
import "./style.css";

function Card({ transaction, removeTransaction }) {
  return (
    <section
      className="containerCard"
      style={{
        borderColor: transaction.type === "Entrada" ? "#03b898" : "#E9ECEF",
      }}
    >
      <div className="containerBeginning">
        <h3>{transaction.description}</h3>
        <span>{transaction.type}</span>
      </div>
      <div className="containerEnd">
        <span>R$ {transaction.value}</span>
        <button onClick={() => removeTransaction(transaction)}>
          <FaTrash />
        </button>
      </div>
    </section>
  );
}

export default Card;
