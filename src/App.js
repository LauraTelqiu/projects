import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import About from './screens/about/About'
import Projects from './screens/projects/Projects';
import Header from './screens/header/Header'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <About />
      <Projects />

    </div>
  );
}

export default App;
