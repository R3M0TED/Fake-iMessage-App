import './App.css';
import IMessageWindow from './elements/imessage-window';
import SendMessage from './commands/SendMessage';
import RecieveMessage from './commands/RecieveMessage';
import OpenKeyboard from './commands/OpenKeyboard';
import CloseKeyboard from './commands/CloseKeyboard';
import ShowTypingIndicator from './commands/ShowTypingIndicator';
import SetChatProperties from './commands/SetupChat';
import AddNewChatDateHeader from './commands/AddNewChatDateHeader';
import AddOldSentMessage from './commands/AddOldSentMessage';
import AddOldRecievedMessage from './commands/AddOldRecievedMessage';
function App() {


  const SetupChat = async () => {
    await AddOldSentMessage("This is old")
    await AddOldRecievedMessage("This is old")
    await AddOldSentMessage("This is old")
    await AddOldRecievedMessage("This is old")
    await AddOldRecievedMessage("This is old")
    await AddOldSentMessage("This is old")
    await AddOldSentMessage("This is old")
    await SetChatProperties("Josh", "01:30", "5")
  };

  const exchangeMessages = async () => {
    //await SetupChat()
    await SendMessage('hey you there', 50); // Relaxed
    await RecieveMessage('ya whats up', 50); // Relaxed
    await SendMessage('u home?', 50); // Relaxed
    await RecieveMessage('nope still at work wbu', 50); // Relaxed
    await SendMessage('can u check the cams', 40); // Slightly concerned
    await RecieveMessage('why whats wrong', 40); // Slightly concerned
    await SendMessage('been hearing noises upstairs like footsteps', 30); // Concerned
    await RecieveMessage('maybe its the house settling', 40); // Reassuring
    await SendMessage('no def footsteps slow n creepy', 20); // More concerned
    await RecieveMessage('ok gimme a sec ill check', 30); // Calm but attentive
    await SendMessage('john hurry up im freaking out', 15); // Panicked
    await RecieveMessage('nothing in the living room checking hallway', 30); // Attentive
    await SendMessage('swear i heard something again like someones walking', 20); // Panicked
    await RecieveMessage('hallway clear checking upstairs', 30); // Attentive
    await SendMessage('john i think i heard the bedroom door creak open', 15); // Very panicked
    await RecieveMessage('bedroom cam shows nothing u sure ur not imagining it', 30); // Calm but questioning
    await SendMessage('im not crazy john i know what i heard', 20); // Defensive
    await RecieveMessage('ok checking spare room', 40); // Focused
    await RecieveMessage('wait what the hell', 50); // Shocked
    await SendMessage('what', 20); // Panicked
    await RecieveMessage('theres someone in the spare room just standing facing the wall', 30); // Shocked
    await SendMessage('omg what do they look like', 15); // Panicked
    await RecieveMessage('cant see their face theyre in a black hoodie', 30); // Descriptive
    await SendMessage('call the cops', 10); // Very panicked
    await RecieveMessage('dialing now stay on the line', 30); // Calm but urgent
    await SendMessage('john theyre moving i hear them coming down the stairs', 10); // Panicked
    await RecieveMessage('lock yourself in a room now', 20); // Urgent
    await SendMessage('in the bathroom door locked', 15); // Panicked but slightly calmer
    await RecieveMessage('cops r on their way stay quiet', 30); // Reassuring
    await SendMessage('i hear them theyre right outside the door', 10); // Very panicked
    await RecieveMessage('dont make a sound police will be there soon', 30); // Reassuring
    await SendMessage('john theyre trying to open the door', 10); // Very panicked
    await RecieveMessage('stay calm help is almost there', 30); // Reassuring
    await SendMessage('oh god john theyre inside', 5); // Extremely panicked
    await RecieveMessage('alice', 40); // Concerned
    await RecieveMessage('alice u there', 40); // Concerned
    await RecieveMessage('answer me', 30); // Panicked
    await RecieveMessage('police just arrived searching the house', 50); // Calm and informative
    await SendMessage('alice', 30); // Concerned
    await RecieveMessage('they didnt find anyone but found a message on the bathroom mirror', 40); // Calm and informative
    await SendMessage('what did it say', 20); // Curious and concerned
    await RecieveMessage('see you soon', 50); // Ominous
    await SendMessage('john that wasnt me i havent been home all day', 10); // Very panicked
  };


  return (
    <div className="window">
        <IMessageWindow></IMessageWindow>
        <button className="button" onClick={OpenKeyboard}>Open keyboard</button>
        <button className="button" onClick={CloseKeyboard}>Close keyboard</button>
        <button className="button" onClick={exchangeMessages}>Conversate</button>

    </div>
  );
}

export default App;
