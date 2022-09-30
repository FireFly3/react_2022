import {
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom'
import {Albums, Todos} from "./components";
import {Comments} from "./components/Comments/Comments";


function App() {
    return (
        <div>
            <div>
                <div><Link to={'/todos'}>Todos</Link></div>
                <div><Link to={'/albums'}>Albums</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>
            </div>
            <Routes>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}/>
            </Routes>

        </div>
    );
}

export default App;
