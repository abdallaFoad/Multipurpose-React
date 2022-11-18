import './App.css';
import About from './sections/About';
import Blogs from './sections/Blogs';
import Starter from './sections/Starter';
import Testimonials from './sections/Testimonials';
import Why from './sections/Why';

function App() {
  return (
    <div className="App">
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Blogs />
    </div>
  );
}

export default App;
