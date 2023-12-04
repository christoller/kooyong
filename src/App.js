import logo from './logo.svg';
import './App.css';
import { OrderForm } from './components/OrderForm';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                The Kooyong General Wholesale Order Form
            </header>
            <OrderForm />
        </div>
    );
}

export default App;
