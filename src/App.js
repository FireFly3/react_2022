import {Route, Routes} from "react-router-dom";

import {Comments, Home, Posts, Users} from "./components";

function App() {

    return (
      <Routes>
          <Route  path={'/'} element={<Home/>}>
              <Route path={'users'} element={<Users/>}/>
              <Route path={'posts'} element={<Posts/>}/>
              <Route path={'comments'} element={<Comments/>}/>
          </Route>
      </Routes>
    );
}

export default App;
