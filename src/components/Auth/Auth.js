import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button className="button-one" onClick={logIn}>SignIn</button> : null}
      {user ? <span>{user.displayName}</span> : null}
      {user ? <button className="button-two" onClick={logOut}>SignUp</button> : null}
    </div>
  );
}
