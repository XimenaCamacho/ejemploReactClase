import React, { Component } from "react";
import "./Card.css";

const Card = ({ character }) => {
  const { name, status, species, type, gender, image } = character;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>
        <strong>Estatus:</strong> {status}
      </p>
      <p>
        <strong>Especie:</strong> {species}
      </p>
      <p>
        <strong>Tipo:</strong> {type || "Unknown"}
      </p>
      <p>
        <strong>Genero:</strong> {gender}
      </p>
    </div>
  );
};

export default Card;

// class Card extends Component {
//   render() {
//     const { name, status, species, type, gender, image } = this.props.character;

//     return (
//       <div className="card">
//         <img src={image} alt={name} className="card-image" />
//         <h2>{name}</h2>
//         <p>
//           <strong>Estatus:</strong> {status}
//         </p>
//         <p>
//           <strong>Especie:</strong> {species}
//         </p>
//         <p>
//           <strong>Tipo:</strong> {type || "Unknown"}
//         </p>
//         <p>
//           <strong>Genero:</strong> {gender}
//         </p>
//       </div>
//     );
//   }
// }

// export default Card;
