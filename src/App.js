import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <div className="headers">
        <Title />
        <Navbar />
      </div>
      <Content />
    </div>
  );
}

export default App;
