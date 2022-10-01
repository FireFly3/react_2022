import './App.css';
import {
    //1 imports
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import Users from "./components/Users/Users";
import {Home} from "./components/Home/Home";
import {UserDetails} from "./components/UserDetails/UserDetails";
import {UserDetailsV2} from "./components/UserDetailsV2/UserDetailsV2";
import {Posts} from "./components/Posts/Posts";
import {PostDetails} from "./components/PostDetails/PostDetails";

function App() {
    // 4. make links
    // 5. make Route
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to={'/'}>Home page</Link></li>
                <li>
                    <Link to={'/users'}>Users</Link></li>
                <li>
                    <Link to={'/posts'}>Posts</Link></li>
            </ul>

            <Routes>
                <Route index element={<Home/>}/>{/* 6. впроваджуемо роут яки буде відображати юзерів при натисканні на лінку хом*/}
                <Route path={'users'} element={
                    <Users/>}/> {/* 7. впроваджуемо роут яки буде відображати юзерів при натисканні на лінку Юзер, тобто п шлюху буде прописаний юзерів*/}
                <Route path={'users/:id'} element={<UserDetails/>}/>
                <Route path={'users/v2/:id'} element={<UserDetailsV2/>}/>
                <Route path={'posts'} element={<Posts/>}>
                    <Route path={':id'} element={<PostDetails/>}/>
                </Route>
            </Routes>

        </div>
    )
        ;
}

export default App;
