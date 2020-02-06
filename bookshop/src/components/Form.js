import React, { useState } from 'react';
 
const Form = () => {
 
   const [title, setTitle] = useState('');
   const [imageUrl, setImageUrl] = useState('');
 
   return (
       <div>
           <input placeholder='Title' onChange={(e) => { setTitle(e.target.value)}}/> <br/>
           <input placeholder='Image Url' onChange={(e) => { setImageUrl(e.target.value)}}/> <br/>
           <button>Add</button>
       </div>
   )
}
 
export default Form;
