import React from 'react';
import ChatBubble from './ChatBubble';

function ChatMessages(props) {
    
    return (
        <div className={`chat `}>
            <div className={`rel flex col`}>
            
                <div className={`chatcontent`}>
                    {['', '', '', '', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', '', '', '', '', 
                    '', '', '', '', '', '', '', '', ''].map((node, index) => <ChatBubble dir={index % 2 === 0 ? 1 : 0}/>)}
                </div>
            </div>
        </div>
        
    );
}

export default ChatMessages;



