//Componente React
import React from "react";

//Componentes CSS
import "../Player/Player.css";

const Player = ({ image, name, titles, titles2, titles3, titles4,position, number, stats, life }) => {
  return (
    <ul className="player-list">
      <li className="player-info">
        <div className="player-image">
          <img src={image} className="img-section-jogadores" alt={name} />
        </div>
        <div className="player-text">
          <h3 className="player-h">{name}</h3>
          <h4 className="player-titles">{titles}</h4>
          <h4 className="player-titles">{titles2}</h4>
          <h4 className="player-titles">{titles3}</h4>
          <h4 className="player-titles">{titles4}</h4>

          <div className="player-details">
            <div className="player-position">{position}</div>
            <div className="player-number">Número: {number}</div>
          </div>
          <h5 className="player-stats">{stats}</h5>
          {life.map((paragraph, index) => (
            <p key={index} className="player-life">{paragraph}</p>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default Player;

