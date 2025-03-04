import { logos } from "../../db/db";
import "./logos.css";

function Logos() {
  return (
    <div className="logos-container">
      {logos?.map((logo, index) => (
        <div key={index} className="logo">
          <img src={`/assets/${logo}.png`} alt={logo} />
        </div>
      ))}
    </div>
  );
}

export default Logos;



