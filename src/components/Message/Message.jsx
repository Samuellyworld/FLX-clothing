import React from 'react';
import './Message.scss';

const Message = ({children, error, valid}) => (
   <div className={`${error ? 'error' : ''} ${valid ? 'valid' : ''}`}>
    {children}
   </div>
	)

export default Message;