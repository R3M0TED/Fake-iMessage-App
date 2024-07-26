function SetUnreadMessageCount(count){
    const chatName = document.querySelector('.return-unread-container')
    chatName.innerHTML = count
}

export default SetUnreadMessageCount;
