import React from 'react';
import { Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 10000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <Alert variant={variant} className='text-center'>
      {children}
    </Alert>
  );
};

Message.defaultProps = { variant: 'info' };

export default Message;
