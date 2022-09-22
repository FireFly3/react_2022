import {Posts, Users} from "./components";
import {useState} from "react";
import {postAxiosService} from "./services";


const App = () => {

    const [posts, setPosts] = useState([]);

    const userIdLift = (userId)=>{
        postAxiosService.getUserPosts(userId).then(({data})=> setPosts(data))
    }

    return (
        <div>
            <Users userIdLift={userIdLift}/>
            <Posts posts={posts}/>
        </div>
    );
};

export default App;