import "./style.css";

function TotalMoney({ listTransactions }) {
  const totalValue = listTransactions?.reduce((previousValue, currentValue) => {
    return previousValue + Number(currentValue.value);
  }, 0);

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
