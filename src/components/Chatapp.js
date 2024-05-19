import React, { useEffect, useState } from 'react'

const Chatapp = ({user}) => {
    const[messages,setmessages]=useState([]);
    const[input,setinput]=useState('');
    const [users,setusers]=useState('');
    const Content=input;
    const from =user.email;
    const[to,setto]=useState('')
    const fetchchats=async()=>{
        await fetch(`http://127.0.0.1:3000/getchat/?from=${from}&to=${to}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          
          })
         .then (response => (
           //get token from response
           response.json()
         )).then(data=>{
            console.log(data)
            setmessages(data);
         })
         .catch(err => console.log(err));
        
       
    }

     async function fetchusers(){
        await fetch(`http://127.0.0.1:3000/getusers/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          
          })
         .then (response => (
           //get token from response
           response.json()
         )).then(data=>{
            console.log(data)
            setusers(data);
         })
         .catch(err => console.log(err));
     } 
    useEffect(()=>{
        fetchusers();
    },[])
    useEffect(()=>{
        fetchchats();
    },[to])
   async function handleSubmit (e){
    e.preventDefault();
    await fetch('http://127.0.0.1:3000/sendchat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({to,from,Content}),
      })
     .then (response => (
       //get token from response
       response.json()
     )).then(data=>{
        console.log(data)
        
       //set JWT token to local
     

     })
     .catch(err => console.log(err));
      fetchchats();
    }
  return (
    <>
    <div>
    {  users? (users.map((m)=>{
        return(<div onClick={()=>{
            setto(m.email);}} style={{cursor:'pointer'}}>{m.email}</div>)
    })):(<div>no users found</div>)
           
        }
    </div>
        <div style={{ width:200,textAlign:'center',backgroundColor:'red'}}>{to}</div>
    <div style={{height:150,width:200,backgroundColor:"green"}}>
        {  messages.length==0? (<div>no messages</div>):( messages.map((m)=>{
                return(<div>{m.Content}</div>)
            }))
           
        }
    </div>
    <form>
             <input value={to} onChange={(e)=>setto(e.target.value)} placeholder='to' type='text'/>
            <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder='message' type='text'/>
        </form>
        <button type='submit' onClick={handleSubmit}>Send</button>
        </>
        
    
  )
}

export default Chatapp