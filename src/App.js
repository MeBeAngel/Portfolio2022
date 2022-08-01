import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.scss";
import GameBoy from "./components/GameBoy/GameBoy";

export default function App() {

  return (
    <main className="App">
      <GameBoy />
      {/* <h1>Sorry I missed you!</h1>
      <h1>Under maintenance. Will be back up shortly!</h1> */}
    </main>
  );
}
