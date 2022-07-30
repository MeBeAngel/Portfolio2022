//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.scss";
import GameBoy from "./components/GameBoy/GameBoy";
import Resume from './components/Screens/ResumeScreen/ResumeScreen';

export default function App() {

  const test = 0;
  return (
    <main className="App">
      {/* <div className="gameboy-shell">

        <div className="inner-top">
          <div className="screen">
            <Resume resumeSlideNum={test} />
          </div>
        </div>

        <div className="inner-bottom">
          <div className="d-pad"></div>
          <div className="play-btns"></div>
        </div>

      </div> */}
      <h1>Sorry I missed you!</h1>
      <h1>Under maintenance. Will be back up shortly!</h1>
    </main>
  );
}
