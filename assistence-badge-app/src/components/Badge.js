import React from "react";
import confLog from "../images/el-planeta-tierra.svg";
import imgAvatar from "../images/girl.svg";
import "./styles/Badge.css";
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLog} alt="Logo conferencie" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://avatars.githubusercontent.com/u/47069950?v=4" alt="avatar" />

          <h1>
            Maria <br />
            Gomez
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Estudiante de Biologia</h3>
          <div>@soyEco</div>
        </div>
        <div className="Badge__footer">#savearth</div>
      </div>
    );
  }
}

export default Badge;
