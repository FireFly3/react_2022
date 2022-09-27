import './App.css'
import {Users} from "./component/Users/Users";
import {Comments} from "./component/Comments/Comments";

function App() {
    return (
        <div className='App'>

            <div className='Component'><Users/></div>
            <div className='Component'><Comments/></div>
        </div>
    );
}

export default App;
