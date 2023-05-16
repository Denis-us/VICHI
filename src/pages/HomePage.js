import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Form from '../components/Form';


export default function HomePage() {

    return(
        <div className="app">
            <Header/>
            <Navigation/>
            <Form/>
        </div>
    )
}