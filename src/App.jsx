import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="about" className="section">
          <div className="container">
            <p className="section-label">About</p>
            <h1 className="section-title">
              Karthik Yannabathina
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;