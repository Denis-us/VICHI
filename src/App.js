import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Form from './components/Form';

export default function App() {
  return (
    <div className="app">
      <Header/>
      <Navigation/>
      <Form/>
    </div>
  );
}
