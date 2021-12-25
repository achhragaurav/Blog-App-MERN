import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "./singlepost.css"
import { Link } from 'react-router-dom';
import axios from "axios"
import { Context } from '../../context/Context';

const SinglePost = (props) => {
const [post, setPost] = useState({})
const {user}= useContext(Context)
const PF = "http://localhost:5000/images/"
const {postId} = useParams()
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [updateMode, setUpdateMode] = useState(false);


useEffect(() =>{
const getPost = async() =>{
  const res =await axios.get(`/posts/${postId}`);
  setPost(res.data)
  setTitle(res.data.title)
  setDesc(res.data.description)
}
getPost()
},[postId])

const handleDelete =async () =>{
  try {
    await axios.delete(`/posts/${postId}` ,{data: {username: user.username}})
    window.location.replace("/")
  } catch (error) {
    console.log(error);
  }
}
const handleUpdate = async () =>{
  try {
    await axios.put(`/posts/${postId}` ,
    {username: user.username, 
      title: title,
      description: desc
    })
setUpdateMode(false)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
          {post.photo && <img src={PF + post.photo} className='singlePostImage' alt="" />}
          {updateMode ? <input type="text" value={title} autoFocus className='singlePostTitleInput'  
          onChange={(e) =>setTitle(e.target.value)} /> : 
          <h1 className="singlePostTitle">
              {title}
              {post.username === user?.username &&
              <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(!updateMode)}></i>
              <i className="singlePostIcon fas fa-trash-alt" onClick={handleDelete}></i>
              </div>
              }
          </h1>
          }
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
          </div>
          {updateMode ? <textarea className='singlePostDescriptionInput' onChange={(e) =>setDesc(e.target.value)} value={desc}/>:
          <p className='singlePostDescription'>{desc}
            </p>
        }
      {updateMode &&  <>
       <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        <button className="singlePostCancelButton" onClick={() =>setUpdateMode(false)}>Discard</button></>}
      </div>
    </div>
  );
}

export default SinglePost;
