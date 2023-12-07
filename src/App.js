import './App.css';
import { OrderForm } from './components/OrderForm';
import kooyonglogo from '../src/images/kooyonglogo.jpeg';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img
                    src={kooyonglogo}
                    width={100}
                    alt='The Kooyong General Store Logo'
                    style={{ borderRadius: '50%' }}></img>
            </header>
            <OrderForm />
        </div>
    );
}

export default App;
