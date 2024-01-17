import "./App.css";
import Experience from "./components/experience/Experience";
import Profile from "./components/profile/Profile";
import useAnimation from "./customHook/useAnimation";

function App() {
  useAnimation();
  return (
    <div className="body">
      <div className="wrapper">
        <div className="cover cover-left"></div>
        <div className="cover cover-right"></div>
        <div className="book">
          <Profile />
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
