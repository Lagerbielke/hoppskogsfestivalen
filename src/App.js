import "./App.css";
// import bg from "./assets/nor24.jpeg";
import edge_left from "./assets/edge_left.png";
import edge_right from "./assets/edge_right1.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black p-6 flex items-center justify-center sticky top-0 text-white text-3xl z-50">
        Hoppskogsfestivalen 2022
      </header>
      <div className="flex">
        <div
          className="bg-repeat-y relative flex-none w-[60px] min-h-screen"
          style={{
            backgroundImage: `url(${edge_left})`,
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
          }}
        />
        <div className="flex-1" />
        <div
          className="bg-repeat-y relative flex-none w-[60px] min-h-screen"
          style={{
            backgroundImage: `url(${edge_right})`,
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
          }}
        />
      </div>
      {/* <div
        className="flex items-center justify-center flex-col bg-black bg-opacity-50 py-48 bg-center bg-cover"
        style={{
          backgroundImage: ` url(${bg})`,
          backgroundBlendMode: "darken",
        }}
      >
        <div className="w-full max-w-3xl mx-auto flex flex-col px-6">
          <div className="text-white font-bold text-xl lg:text-4xl mb-2">
            Välkommen till
          </div>
          <h1>Hoppskogsfestivalen 2022</h1>
          <div className="text-white font-bold text-xl lg:text-4xl mt-2">
            2 juli 2022
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
