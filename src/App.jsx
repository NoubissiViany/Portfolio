import "./App.css";
import { useEffect } from "react";
import Experience from "./components/experience/Experience";
import Profile from "./components/profile/Profile";
import useAnimation from "./customHook/useAnimation";
import { isMobile } from 'react-device-detect';

function App() {
  useEffect(() => {
    const activateDesktopSite = () => {
      if (isMobile) {
        const ua = navigator.userAgent.toLowerCase();
        if (
          ua.indexOf('safari') !== -1 &&
          ua.indexOf('mobile') !== -1 &&
          ua.indexOf('chrome') === -1
        ) {
          // Open Safari in desktop mode (if running on iOS)
          window.location.href = 'http://example.com';
        } else {
          // Open Chrome in desktop mode
          const width = 1024;
          const height = 768;
          const features = `width=${width},height=${height},left=0,top=0`;
          window.open(window.location.href, '_self', features);
        }
      }
    };

    activateDesktopSite(); // Activate the desktop site view on component mount

    return () => {
      // Clean up the event listener if needed
    };
  }, []);
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
