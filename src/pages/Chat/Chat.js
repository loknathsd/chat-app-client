import React, { useEffect, useState } from 'react';
import axios from 'axios';

  
const Chat = () => {
    const [chats,setChats] = useState([])

    const fetchChats = async()=>{
        const {data} = await axios.get('/api/chat');
        console.log(data)
        setChats(data);

    }

    useEffect(()=>{
        fetchChats();
    },[])

    return (
        <div>
            <h1>this is chat page</h1>
            {
              chats.map(chat=><div key={chat._id}>{chat.chatName}</div>)
            }
            
        </div>
    );
};

export default Chat;