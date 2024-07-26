import React from 'react';
import Header from './header';
import MessageContainer from './message-container';
import Footer from './footer';
import Keyboard from './keyboard';
import FooterBar from './footer-bar';

function IMessageWindow() {
  return (
    <div className="main">
      <Header></Header>
      <MessageContainer></MessageContainer>
      <Footer></Footer>
      <FooterBar></FooterBar>
    </div>  );
}

export default IMessageWindow;