import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import About from './screens/about/About'
import Projects from './screens/projects/Projects';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <About />
      <Projects />

    </div>
  );
}

export default App;
