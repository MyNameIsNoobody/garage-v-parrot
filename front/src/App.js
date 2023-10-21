import Typography from '@mui/joy/Typography';

import './App.css';
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* bg-gray-200 max-w-max space-x-auto */}
        <Nav />
      </header>

      <section className="App-title">
        <img></img>
        <div>
          <Typography level="h1">Garrage V. Parrot</Typography>
          <p>À Toulouse depuis 2021</p>
        </div>
      </section>

      <section className="App-services">

      </section>

      <section className="App-reviews">

      </section>
    </div>
  );
}

export default App;
