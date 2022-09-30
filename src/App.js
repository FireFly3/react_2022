import {
  Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom'

function App() {
  return (
    <div>
      <div>
        <div><Link to={'/todos'}>Todos</Link></div>
        <div><Link to={'/albums'}>Albums</Link></div>
        <div><Link to={'/comments'}>Comments</Link></div>
      </div>

    </div>
  );
}

export default App;
