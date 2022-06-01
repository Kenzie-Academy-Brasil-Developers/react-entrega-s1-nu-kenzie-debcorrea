import "./style.css";
import Card from "./../Card";

function List({ listTransactions, filter, removeTransaction }) {
  const filtered = () => {
    const filteredTransactions = listTransactions.filter((transaction) => {
      if (filter === "Todos") {
        return listTransactions;
      } else {
        return transaction.type === filter;
      }
    });

    return filteredTransactions;
  };

  return (
    <ul className="cardList">
      {filtered().map((transaction, index) => (
        <li key={index}>
          <Card transaction={transaction} removeTransaction={removeTransaction}/>
        </li>
      ))}
    </ul>
  );
}

export default List;
