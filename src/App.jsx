import "./App.css";
import Header from "./components/header";
import NavigationBar from "./components/navigation_bar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-primary min-w-screen">
        <Header />
        <div className="flex-grow">hi</div>
        <NavigationBar />
      </div>
    </>
  );
}

export default App;
