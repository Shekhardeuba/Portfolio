import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import './App.css'
import FloatingDiv from "./Components/FloatingDiv/FloatingDiv";
import Servics from "./Components/Servics/Servics";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <FloatingDiv/>
     <Servics/>
    </div>
  );
}

export default App;
