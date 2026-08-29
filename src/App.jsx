import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="section">
          <div className="container">
            <p className="section-label">About</p>

            <h2 className="section-title">
              About me
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;