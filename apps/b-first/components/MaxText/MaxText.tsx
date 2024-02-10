import React from 'react';

const MaxText = (text: string, length = 10) => {
    if (text.length > length) {
        return `${text.substr(0, length)}...`;
      }
      return text;
};

export default MaxText;