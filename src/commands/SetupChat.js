import SetChatName from "./SetChatName";
import SetTime from "./SetTime";
import SetUnreadMessageCount from "./SetUnreadMessageCount";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function SetChatProperties(name, time, unreadMessageCount){
    SetChatName(name);
    SetTime(time);
    SetUnreadMessageCount(unreadMessageCount);
    await delay(3000); // Wait for 3 seconds before ending
}

export default SetChatProperties;