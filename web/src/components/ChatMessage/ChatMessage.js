import React from 'react';
import './ChatMessage.css';
import Avatar from '../../assets/avatar';


export const ChatMessage = ({message})=>{
   //condicional que verifica se o usuario é user o chatgpt e adicona uma classe a mais  caso for chatgpt
   return(
   <div className={`chat-message ${message.user === 'gpt'} && "chatgpt"`}> 
        <div className="chat-message-center">
            <div className={`avatar ${message.user ==='gpt' && "chatgpt"}`}>
                {message.user === 'gpt' && (
                    <Avatar/>
                )}
            </div>

            <div className="message">{message.message}</div>
    
        </div>
   </div>
)
}