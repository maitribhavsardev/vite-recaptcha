import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import reCAPTCHA from "react-google-recaptcha";

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name123</label>
        <input type="text" id="name" className="input" />
        <reCAPTCHA
          sitekey="6LcAUmwnAAAAANxDsJ73xJpJAPSrBOxwVLaX0gP6"
          // ref={captchaRef}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
