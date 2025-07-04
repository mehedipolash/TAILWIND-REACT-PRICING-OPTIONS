import { Suspense } from 'react';
import './App.css';
import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navbar from './Components/Navbar/Navbar';
import PricingOptions from './Components/PricingOptions/PricingOptions';
import ResultsChart from './Components/ResultsChart/ResultsChart';
import Practicerchart from './Components/ResultsChart/Practicerchart';
import PracticeChart2 from './Components/ResultsChart/PracticeChart2';
import axios from 'axios';
import Markschart from './Components/MarksChart/Markschart';

const pricingPromise = fetch('PricingData.json').then(res => res.json());
const marksPromise = axios.get('Marksdata.json');
function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <Markschart marksPromise={marksPromise}></Markschart>
        </Suspense>

        <ResultsChart></ResultsChart>
        <Practicerchart></Practicerchart>
        <PracticeChart2></PracticeChart2>
      </main>
    </>
  );
}

export default App;
