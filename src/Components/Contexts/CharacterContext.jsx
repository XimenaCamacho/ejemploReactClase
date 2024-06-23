// import { createContext, useState, useEffect } from "react";

// const CharacterContext = createContext();

// const CharacterProvider = ({ children }) => {
//   const [characters, setCharacters] = useState([]);
//   const [character, setCharacter] = useState(null);

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       try {
//         const response = await fetch(
//           "https://rickandmortyapi.com/api/character"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCharacters(data.results);
//       } catch (error) {
//         console.error("Error fetching characters:", error);
//       }
//     };

//     fetchCharacters();
//   }, []);

//   const fetchCharacter = async (id) => {
//     try {
//       const response = await fetch(
//         `https://rickandmortyapi.com/api/character/${id}`
//       );
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setCharacter(data);
//     } catch (error) {
//       console.error("Error fetching character:", error);
//     }
//   };

//   return (
//     <CharacterContext.Provider
//       value={{ characters, character, fetchCharacter }}
//     >
//       {children}
//     </CharacterContext.Provider>
//   );
// };

// export { CharacterProvider, CharacterContext };

import { createContext, useState, useEffect } from "react";

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]); //seteo de la lista de los personajes
  //characters recibe un array de personajes que luego recorremos para mostrarlos en nuestra app
  //setCharacters  recibe un array de personajes que actualiza characters
  //useState([]) le damos el valor de un array vacio, ya que debemos manejar un array de objetos que trae la API
  const [character, setCharacter] = useState(null); //seteo del detalle de un personaje
  //character recibe un objeto que es el detalle de un personaje. se inicia en null
  //setCharacter recibe un objeto que actualiza character para poder mostrarlo en su detalle
  //useState(null) le damos el valor de null, ya que debemos manejar el objeto personaje que requerimos a la API
  const [page, setPage] = useState(1); //seteo de la paginacion para mostrar toda la lista de personajes en pagina principal
  //page establece la pagina donde se encuentra al momento la lista de personajes. Ej: pag 1 o pag 2 o pag 40. Siempre sera la que se muestra en el navegador
  //setPage aca se guardara el valor de la pagina que se quiere mostrar y actualizara page
  //useState(1) estamos indicandole que debe comenzar mostrando la pagina 1 (le estamos dando el valor inicial de 1 a page para que cuando monte el componente aparezca esta lista de personajes)
  const [totalPages, setTotalPages] = useState(1); //seteo de cantidad de paginas para paginacion
  //totalPages almacena la cantidad de paginas en total que hay en la API - Tambien sirve para saber si se llego a la ultima pagina (o se esta en la primera pagina) y se debe deshabilitar el boton de siguiente/anterior
  //setTotalPages guarda el valor de la pagina a actualizar
  //useState(1) pone el valor en la primer pagina de personajes de la API
  const [error, setError] = useState(null); // estado para manejar errores
  //error variable para manejar el valor de los errores a medida que se desencadenen. se inicia en null con useState()
  //setError actualiza el valor de error en caso de que este exista
  //useState establece el valor inicial al montar el componente en null
  const fetchCharacters = async (page = 1) => {
    //funcion que genera la busqueda de los personajes en la pagina en la que se encuentre el usuario. mas abajo se actualiza/ejecuta con nuevos valores en useEffect
    try {
      const response = await fetch(
        //fetch nos permite realizar pedidos HTTP a una API. Debemos pasarle la API a la que queremos consultar/hacerle pedidos.
        //estos pedidos deben ser asincronicos ya que puede demorar la respuesta del servidor.
        //await le indica a javascript que espere la promesa que devuelve fetch del pedido HTTP.
        //una vez resuelto y completo el pedido HTTP, se guarda la respuesta de fetch en la variable response con todo su contenido

        `https://rickandmortyapi.com/api/character?page=${page}` //API a la cual le estamos haciendo una peticion HTTP GET para que nos envie sus datos y trabajar con ellos
      );
      if (!response.ok) {
        //ok es una propiedad del objeto response. devuelve true o false (código de estado en el rango 200-299 = true || estado fuera de rango anterior = false)
        throw new Error("No podemos mostrar la pagina solicitada"); //corta/detiene la ejecucion del codigo y muestra un error
        //throw palabra clave en JavaScript que se utiliza para lanzar una excepción. La ejecución del script actual se detiene y el control se transfiere al primer bloque catch en la cadena de llamadas.
        //new Error() es un constructor para crear un nuevo objeto de error
      }
      const data = await response.json(); //.json() es un método que convierte la respuesta en un objeto JavaScript.
      setCharacters(data.results); //le pasamos a setCharacters el valor de results de la API con la lista de los personajes de la pagina correspondiente seteada en pages
      setTotalPages(data.info.pages); //le pasamos a setTotalPages el objeto info de la API que nos indica cantidad de paginas (se puede ver aca https://rickandmortyapi.com/api/character?page)
      setError(null); // pasamos a null el error si se renderiza la lista de personajes (oea, si esta todo bien, no hay que almacenar errores que no usaremos)
    } catch (error) {
      console.error("No hemos podido obtener la lista de personajes:", error);
      setError("No pudimos cargar los personajes solicitados."); //seteamos el mensaje de error en setError
    }
  };

  const fetchCharacter = async (id) => {
    //fetchCharacter es una funcion que busca un personaje en particular por su ID. recibe como paramtero el id requerido para poder mostrar su detalle.
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}` //realizamos un pedido asincrono a la APi proporcinandole el ID que pasamos por parametro a fetchCharacter
      );
      if (!response.ok) {
        throw new Error("No se encontro el personaje solicitado");
      }
      const data = await response.json();
      setCharacter(data); //pasamos a setCharacter el onjeto que nos devuelve la solicitud HTTP almacenada en data. Recordar que es un objeto con un solo personaje y lo manejamos en el detalle
    } catch (error) {
      console.error("No se encontro el personaje solicitado", error);
      setError("No pudimos cargar el detalle de este personaje.");
    }
  };

  useEffect(() => {
    //nos permite segurarnos que se llame a la funcion fetchCharacters cada vez que sea necesario cambiar de pagina
    fetchCharacters(page);
  }, [page]);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        character,
        fetchCharacter,
        page,
        setPage,
        totalPages,
        error,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterProvider, CharacterContext };
