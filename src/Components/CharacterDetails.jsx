import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CharacterContext } from "./Contexts/CharacterContext";
import NotFound from "../Pages/NotFound";
import "./CharacterDetails.css";

const CharacterDetails = () => {
  const { id } = useParams();
  const { character, fetchCharacter, error } = useContext(CharacterContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCharacter(id);
  }, [id, fetchCharacter]);

  useEffect(() => {
    if (error) {
      navigate("/notfound");
    }
  }, [error, navigate]);
  if (error) {
    return <NotFound />; // Renderizar NotFound si hay un error
  }

  if (!character) {
    return <div>Loading...</div>; // Mostrar mensaje de carga mientras se obtiene el personaje
  }
  const { name, status, species, type, gender, image } = character;

  return (
    <div className="character-details">
      <div className="character-card">
        <div className="button_container-nav">
          <button
            onClick={() =>
              navigate(`/character/${parseInt(id) > 1 ? parseInt(id) - 1 : 1}`)
            }
            className="character_detail-button-nav"
          >
            &#60;
          </button>
        </div>
        <div>
          <div>
            <img src={image} alt={name} className="character-image" />
            <h2>{name}</h2>
            <p>
              <strong>Status:</strong> {status}
            </p>
            <p>
              <strong>Species:</strong> {species}
            </p>
            <p>
              <strong>Type:</strong> {type || "Unknown"}
            </p>
            <p>
              <strong>Gender:</strong> {gender}
            </p>
          </div>
          <div className="button-container">
            <button
              onClick={() => navigate("/ejemploReactClase")}
              className="character_detail-button"
            >
              Volver al inicio
            </button>
          </div>
        </div>
        <div className="button_container-nav">
          <button
            onClick={() => navigate(`/character/${parseInt(id) + 1}`)}
            className="character_detail-button-nav"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
