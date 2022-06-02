import { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/header/Header';
import Weather from './components/weather/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Weather />
    </div>
  );
}

export default App;
