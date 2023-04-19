import { useContext } from "react";
import { signIn, signOff } from "../../firebase";
import { AppContext } from "../../App";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button className="button-one" onClick={signIn}>SignIn</button> : null}
      {user ? <span>{user.displayName}</span> : null}
      {user ? <button className="button-two" onClick={signOff}>Signut</button> : null}
    </div>
  );
}
