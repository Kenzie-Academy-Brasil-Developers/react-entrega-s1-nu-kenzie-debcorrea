import SecondImage from "../../assets/images/index.png";
import "./style.css";

function LandingImage() {
  return (
    <div className="landingImage">
      <img src={SecondImage} alt="Cards de controle financeiro" />
    </div>
  );
}

export default LandingImage;
