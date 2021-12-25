import axios from 'axios';
import React, { useContext, useState } from 'react';
import "./write.css"
import { Context } from '../../context/Context';

const Write = () => {
const [title, setTitle] = useState();
const [desc, setDesc] = useState();
const [file, setFile] = useState();
const {user} = useContext(Context)

const handleSubmit = async (e) =>{
e.preventDefault();
const newPost = {title, description: desc,username: user.username }
if(file){
  const data = new FormData();
  const filename = Date.now() + file.name;
  data.append("name", filename)
  data.append("file", file)
  newPost.photo = filename;
  try {
    await axios.post("/upload",data )
    
  } catch (error) {
    console.log(error);
  }
}
try {
const res =  await axios.post("/posts", newPost);
window.location.replace("/post/" + res.data._id)
} catch (error) {
  
}
};

  return (
    <div className='write'>
        {file && <img src={URL.createObjectURL(file)} className='writeImage' alt="" />}
      <form className='writeForm' onSubmit={handleSubmit}>
          <div className="writeFormGroup">
              <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
              </label>
              <input type="file" id='fileInput' style={{display: "none"}} onChange={e=>setFile(e.target.files[0])}/>
              <input onChange={e=>setTitle(e.target.value)} type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
              <textarea onChange={e=>setDesc(e.target.value)} placeholder='Tell me your story' type='text' className='writeInput writeText'></textarea>
          </div>
          <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
