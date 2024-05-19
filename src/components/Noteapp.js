import React from 'react'
import { useEffect, useState } from 'react';


const Noteapp = ({user}) => {
 
    const[Content,setContent]=useState("");
    const [notes,setnotes]=useState([]);
    const email=user.email

    
    useEffect(()=>{
      fetchData(); },[]);
    
      const fetchData = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:3000/getall/?email=${email}`,{
            method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
          }); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setnotes(jsonData);
          console.log(jsonData)
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
    
      const deletenote= async (id)=>{
        console.log("deleting")
        try {
          const response = await fetch(`http://127.0.0.1:3000/deletenote/${id}`, {
            method: 'DELETE'
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Remove the deleted note from the data array
          setnotes(notes.filter(item => item._id !== id));
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      }
      const createnote=async()=>{
          try{
           const response= await fetch("http://localhost:3000/createnote",{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({Content,email})
            })
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const newNote = await response.json();
          setnotes([...notes, newNote]);
          }catch (error) {
            console.error('Error creating note:', error);
          }
      }
      return (
        <div>
      <input type="text"value={Content} onChange={(e)=>{setContent(e.target.value)}}></input>
      <button onClick={createnote} >create Notes</button>
      <div>
     
            {notes.map(item => (
              <div key={item._id} notetext={item.Content} deletefunc={deletenote} itemid={item._id}>
                {item.Content}
                <button onClick={()=>deletenote(item._id)}>delete</button>
              </div>
            ))}
          
      </div>
        </div>
      );
  
}

export default Noteapp;