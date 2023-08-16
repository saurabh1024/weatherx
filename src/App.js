import './App.css';
import thunderstorm from './assets/thunderstorm.png'
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className='px-5'>
      <h1 className='p-4 text-4xl font-medium cursor-pointer'>
        <img src={thunderstorm} alt="thunderstorm" className='inline-block w-12 h-10 mb-2 mr-2'/>
        Weatherx
      </h1>
      <Dashboard/>
    </div>
  );
}

export default App;
