import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Routs from "./routs/routs.jsx";




function App() {
  return (
    <>
    <div className="overflow-x-hidden">
    <Header />
     <Routs />
      <Footer />

    </div>

    </>
  );
}

export default App;
