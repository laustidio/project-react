import "./App.css";
import Form from "./components/ui/Form/Form";
import ParticlesBackground from "./components/ui/layouts/background/ParticlesBackground";

function App() {
  return (
    <>
      <div
        className={`w-screen h-screen flex items-center justify-center relative`}
      >
        <ParticlesBackground />
        <Form />
      </div>
    </>
  );
}

export default App;
