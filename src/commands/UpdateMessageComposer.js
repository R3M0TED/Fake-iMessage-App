
function UpdateMessageComposer(key){
    const messageComposerContent = document.querySelector('.message-composer-content')

    messageComposerContent.value = messageComposerContent.value + key
        const textArea = messageComposerContent
        textArea.style.height = '50px';
        textArea.style.height = `${textArea.scrollHeight}px`;
      

    messageComposerContent.focus()
}

export default UpdateMessageComposer;
