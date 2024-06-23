import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-profile">
      <h2>Perfil de Usuario</h2>
      <p>Nombre de usuario: </p>
      <p>{user.username}</p>
      <p>Correo electrónico: </p>
      <p>{user.email}</p>
      {user.isAdmin && <p>Dueña del BANHAMMER!!</p>}
    </div>
  );
};

export default Profile;
