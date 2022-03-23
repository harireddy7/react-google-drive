import React from 'react'

const Notification = ({ show }) => {
  return (
    <div className={`notification slide-${show ? 'in' : 'out'}`}>Uploaded to drive!!</div>
  )
}

export default Notification