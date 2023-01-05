import './App.css';
import AdvantageCards from './components/AdvantageCards';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import PricingCards from './components/PricingCards';
import Search from './components/Search';
import StartCompanies from './components/StartCompanies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <StartCompanies />
      <Mission />
      <AdvantageCards />
      <PricingCards />
      <Footer />
    </div>
  );
}

export default App;
