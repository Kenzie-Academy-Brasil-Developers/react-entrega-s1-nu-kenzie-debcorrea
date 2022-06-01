import "./style.css";

function TotalMoney({ listTransactions }) {
  const editedTransactions = listTransactions?.map((transaction) => {
    return {
      description: transaction.description,
      type: transaction.type,
      value:
        transaction.type === "Entrada"
          ? transaction.value
          : transaction.value * -1,
      id: transaction.id,
    };
  });

  const totalValue = editedTransactions?.reduce(
    (previousValue, currentValue) => {
      return previousValue + Number(currentValue.value);
    },
    0
  );

  return (
    <section className="section">
      <div className="totalValueContainer">
        <h3>Valor total:</h3>
        <span>
          {totalValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="spanContainer">
        <span>O valor se refere ao saldo</span>
      </div>
    </section>
  );
}

export default TotalMoney;
