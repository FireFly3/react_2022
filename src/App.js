import './App.css';
import {
    BrowserRouter, //1 imports
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import Users from "./components/Users/Users";

function App() {
    return (
        <div className="App">
            <Users/>
        </div>
    );
}

export default App;
