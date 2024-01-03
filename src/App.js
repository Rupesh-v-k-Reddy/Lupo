import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex" >
        <Navbar />
      <main className="ml-20 p-4" >
      <Home/>
      </main>
    </div>
  );
}

export default App;
