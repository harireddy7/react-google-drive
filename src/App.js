import React, { useState } from 'react'
import FileUpload from './FileUpload';
import Notification from './Notification';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='App'>
      <Notification show={show} />
      <FileUpload notify={setShow} />
    </div>
  )
}

export default App