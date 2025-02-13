import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
