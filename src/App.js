import "./App.css";
import edge_left from "./assets/edge_left.png";
import edge_right from "./assets/edge_right.png";
import Drinklist from "./Drinklist";
import GuestBook from "./GuestBook";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black p-6 flex items-center justify-center sticky top-0 text-white text-xl z-50">
        <div className="flex flex-col justify-center items-center">
          <div
            className="font-extrabold font-base italic"
            style={{ fontFamily: "'Noto Sans', sans-serif" }}
          >
            Hoppskogsfestivalen 2022
          </div>
        </div>
      </header>
      <div className="flex">
        <div
          className="bg-repeat-y relative flex-none w-[40px] lg:w-[60px] min-h-screen"
          style={{
            backgroundImage: `url(${edge_left})`,
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
          }}
        />
        <div className="flex-1" />
        <div className="mx-auto p-6 w-full max-w-3xl">
          <Drinklist />
          <GuestBook />
        </div>
        <div
          className="bg-repeat-y relative flex-none w-[40px] lg:w-[60px] min-h-screen"
          style={{
            backgroundImage: `url(${edge_right})`,
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
          }}
        />
      </div>
    </div>
  );
}

export default App;
