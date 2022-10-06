import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Users} from "./components";
import {Route, Routes} from "react-router-dom";

function App() {

    // let state = useSelector(state => state.userReducer);
    // console.log(state);
    // let dispatch = useDispatch();
    //
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             dispatch({type: 'LOAD_USERS', payload: value})
    //         });
    // }, [])

    return (
      <Routes>
          <Route path={'/'} element></Route>
      </Routes>
    );
}

export default App;
