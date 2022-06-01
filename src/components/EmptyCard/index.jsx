import "./style.css";
import Card from "./../../assets/images/Empty.png";

function EmptyCard() {
  return (
    <>
      <h2 className="emptyCard">Você ainda não possui nenhum lançamento</h2>
      <img className="emptyCardImage" src={Card} alt="Card branco vazio com linhas cinzas" />
    </>
  );
}

export default EmptyCard;
