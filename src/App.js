import {Cats, Dogs} from "./components";


function App() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Cats/>
            <Dogs/>
        </div>
    );
}

export default App;
