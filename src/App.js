import {Route, Routes} from "react-router-dom";

import {Comments, Home, Posts, Users} from "./components";
import {Choosers} from "./components/Choosers/Choosers";

function App() {

    return (
      <Routes>
          <Route  path={'/'} element={<Home/>}>
              <Route path={'users'} element={<Users/>}/>
              <Route path={'users/:id'} element={<Choosers/>}/>
              <Route path={'posts'} element={<Posts/>}/>
              <Route path={'comments'} element={<Comments/>}/>
          </Route>
      </Routes>
    );
}

export default App;
