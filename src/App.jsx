import "./App.css";
import Header from "./components/header";
import NavigationBar from "./components/navigation_bar";

function App() {
  return (
    <>
      <div>
        <Header />
        <p className="font-bold text-green-400">MFE Test</p>
        <NavigationBar />
      </div>
    </>
  );
}

export default App;
