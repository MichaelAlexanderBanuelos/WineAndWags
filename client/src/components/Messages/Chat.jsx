import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Chat = ({
  matchesPhotos, messageMode, currentMessageId, allMessages, onMessageClick,
}) => {
  const matchUserId = matchesPhotos[currentMessageId][0].user_id;
  return (
    <div>
      <button type="button" onClick={onMessageClick}>Back to Inbox</button>
      <br />
      <br />
      <div id="chat-container">
        <div id="chat-images-container">
          <img className="chat-human-photo" alt="human" src={matchesPhotos[currentMessageId][0].url} />
          <img className="chat-dog-photo" alt="dog" src={matchesPhotos[currentMessageId][1].url} />
          <div id="chat-names">Human and Dog</div>
        </div>
        <br />
        <br />
        <div id="direct-messages-container">
          CHAT HERE
        </div>
      </div>
    </div>
  );
};

Chat.propTypes = {
  matchesPhotos: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.any,
    ]),
  ),
  allMessages: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.any,
    ]),
  ),
  messageMode: PropTypes.bool,
  currentMessageId: PropTypes.string,
};

Chat.defaultProps = {
  matchesPhotos: [],
  allMessages: {},
  messageMode: false,
  currentMessageId: '',
};

export default Chat;
