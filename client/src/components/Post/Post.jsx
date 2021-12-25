import React from 'react';
import { Link } from 'react-router-dom';
import "./post.css"

const Post = ({post}) => {
const PF = "http://localhost:5000/images/"

  return (
    <div className='post'>
     {post.photo && <img src={PF + post.photo} className='postImage' alt="" />}
     <div className="postInfo">
         <div className="postCats">
           {post.categories.map((category) =>(<span className='postCat'> <Link className='link' to={`/?cat=${category}`}>{category}</Link></span>))}
         </div>
         <Link to={`/post/${post._id}`} className='link'>
         <span className="postTitle">
              {post.title}
         </span>
         </Link>
         <hr />
         <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
     </div>
     <p className='postDesc'>
    {post.description}
         </p>
    </div>
  );
}

export default Post;
