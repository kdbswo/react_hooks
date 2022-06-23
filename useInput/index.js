import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//useClick React 16.8v이상버전
import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      if (typeof onClick !== "function") {
        return;
      }
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return typeof onClick !== "function" ? element : undefined;
  };
};

export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}