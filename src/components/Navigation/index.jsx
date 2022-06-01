import "./style.css";

function Navigation({ setFilter }) {
  return (
    <div className="navigationArea">
      <h3>Resumo Financeiro</h3>
      <nav>
        <ul className="navigationList">
          <li className="listItem">
            <button className="filterAll" onClick={() => setFilter("Todos")}>
              Todos
            </button>
          </li>
          <li className="listItem">
            <button className="filterEntries" onClick={() => setFilter("Entrada")}>
              Entradas
            </button>
          </li>
          <li className="listItem">
            <button className="filterExpenses" onClick={() => setFilter("Saída")}>
              Despesas
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
