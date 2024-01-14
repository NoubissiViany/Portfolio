import "./App.css";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="cover cover-left"></div>
        <div className="cover cover-right turn"></div>
        <div className="book">
          <Profile />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
