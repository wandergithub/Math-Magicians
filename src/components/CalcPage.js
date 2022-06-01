import Calculator from './Calculator';
import Header from './Header';
import './styles/Calculator.css';

const CalcPage = () => (
  <div>
    <Header />
    <div className="calculator-container">
      <h2>Let&apos;s do some math!</h2>
      <Calculator />
    </div>
  </div>
);

export default CalcPage;
