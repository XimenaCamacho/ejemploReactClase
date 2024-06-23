import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./Characters.css";
import { CharacterContext } from "./Contexts/CharacterContext";
import NotFound from "../Pages/NotFound";

const Characters = () => {
  const { characters, page, setPage, totalPages, error } =
    useContext(CharacterContext);

  if (error) {
    return <NotFound />; // si hay error, renderiza NotFound
  }

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const goToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  // Función para generar los números de página limitados
  const renderLimitedPageNumbers = () => {
    const delta = 2; // Cantidad de páginas a mostrar a cada lado de la página actual
    const start = Math.max(1, page - delta);
    const end = Math.min(totalPages, page + delta);

    let pageNumbers = [];
    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={page === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    if (start > 1) {
      pageNumbers.unshift(
        <button key={1} onClick={() => goToPage(1)}>
          1
        </button>
      );
      if (start > 2) {
        pageNumbers.unshift(<span key="ellipsis1">...</span>);
      }
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pageNumbers.push(<span key="ellipsis2">...</span>);
      }
      pageNumbers.push(
        <button key={totalPages} onClick={() => goToPage(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="characters-container">
      <div className="characters_box-container">
        {characters.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            {characters.map((character) => (
              <Link
                key={character.id}
                to={`/character/${character.id}`}
                className="list-style"
              >
                <Card character={character} />
              </Link>
            ))}
          </>
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePrevious} disabled={page === 1}>
          Previous
        </button>
        <div className="page-numbers">{renderLimitedPageNumbers()}</div>
        <button onClick={handleNext} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
