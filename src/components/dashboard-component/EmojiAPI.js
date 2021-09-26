import PropTypes from 'prop-types';

import React from 'react';
import Picker from 'emoji-picker-react';

EmojiAPI.propTypes = {
  updateIcon: PropTypes.func
};

export default function EmojiAPI({ updateIcon }) {
  const onEmojiClick = (event, emojiObject) => {
    updateIcon(emojiObject.emoji);
  };

  return <Picker onEmojiClick={onEmojiClick} />;
}
