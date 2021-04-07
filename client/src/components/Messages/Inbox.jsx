import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chat from './Chat';

const Inbox = ({
  currentUser, matches, matchesPhotos, allMessages,
}) => {
  const [messageMode, setMessageMode] = useState(false);
  const [currentMessageId, setCurrentMessageId] = useState(null);

  const onMessageClick = (e) => {
    setMessageMode(!messageMode);
    setCurrentMessageId(Number(e.target.getAttribute('name')));
  };

  return (
    <div id="inbox-container">
      <br />
      {!messageMode
        ? (
          <div>
            <div id="matches-container">
              {matchesPhotos.map((match, index) => (
                <div className="match-container" key={match[0].user_id}>
                  <span>Human and Dog</span>
                  <br />
                  <div className="match-photos-container">
                    <img
                      className="human-photos"
                      alt="human"
                      src={match[0].url}
                      name={index}
                      onClick={onMessageClick}
                    />
                    <img
                      className="dog-photos"
                      alt="dog"
                      src={match[1].url}
                      name={index}
                      onClick={onMessageClick}
                    />
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <div id="messages-outer-container">
              <div id="messages-container">
                Message Queue (
                {matches.length}
                )
                {matchesPhotos.map((match, index) => (
                  <div className="message-container" key={match[0].user_id} name={match[0].user_id} onClick={onMessageClick}>
                    <div className="messages-photos-container" name={index} onClick={onMessageClick}>
                      <img
                        className="human-photos-small"
                        alt="human"
                        src={match[0].url}
                        name={index}
                        onClick={onMessageClick}
                      />
                      <img
                        className="dog-photos-small"
                        alt="dog"
                        src={match[1].url}
                        name={index}
                        onClick={onMessageClick}
                      />
                    </div>
                    <div className="name-message-container" name={index} onClick={onMessageClick}>
                      {/* {console.log('allmessages at userid', allMessages[match[0].user_id])} */}
                      <div name={index} onClick={onMessageClick} style={{ fontWeight: 'bold' }}>Human name and Dog name</div>
                      <div>
                        {(allMessages[match[0].user_id].length !== 0)
                          ? (
                            <div name={index} onClick={onMessageClick} >
                              {allMessages[match[0].user_id][0].body}
                            </div>
                          )
                          : <div name={index} onClick={onMessageClick} >Make the first move! Be bold, and write your own story...</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
        :
        (
          <Chat
            matchesPhotos={matchesPhotos}
            messageMode={messageMode}
            currentMessageId={currentMessageId}
            allMessages={allMessages}
            onMessageClick={onMessageClick}
            currentUser={currentUser}
          />
        )
        }
    </div>
  );
};

Inbox.propTypes = {
  currentUser: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.any,
    ]),
  ),
  dogsImg: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.any,
    ]),
  ),
  humanPhoto: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.any,
    ]),
  ),
  matches: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.any,
    ]),
  ),
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
};

Inbox.defaultProps = {
  currentUser: {},
  dogsImg: [],
  humanPhoto: [],
  matches: [],
  matchesPhotos: [],
  allMessages: {},
};

export default Inbox;
