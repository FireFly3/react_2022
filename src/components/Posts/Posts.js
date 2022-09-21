// import React from 'react';
//
// import {useEffect, useState} from "@types/react";
// import {getPostsAxios} from "../services/users.api.axios.service";
// import Post from "../Post/Post";
//
// const Posts = () => {
//
//     let [posts, setPosts] = useState(null)
//
//     const lift = (id) => {
//         setPosts(id);
//     }
//
//     useEffect(()=>{
//         getPostsAxios(posts.id).then(value => setPosts(value))
//     },[posts.id])
//
//     return (
//         <div>
//             <div>{posts.map((post, index)=>(<Post post={post} key={index} lift={lift}/>))}</div>
//         </div>
//     );
// };
//
// export default Posts;