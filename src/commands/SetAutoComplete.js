import React from 'react';
import ReactDOM from 'react-dom/client';

async function SetAutoComplete() {
    return new Promise(async (resolve) => {
        try {
           const messageComposer = document.querySelector('.message-composer-content')
           if (messageComposer){
            const content = messageComposer.value.trim();
            const words = content.split(" ")
            const lastWord = words[words.length - 1]
            console.log(lastWord)

           }

        } catch (error) {
            console.error('Error in AddNewDateHeader:', error);
            resolve(); 
        }
    });
}

export default SetAutoComplete;