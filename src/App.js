
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Projects />
    </div>
  );
}

export default App;
