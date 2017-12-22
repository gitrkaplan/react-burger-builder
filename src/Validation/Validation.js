import React from 'react'

const validation = props => {
  return (
    <div>
      {props.inputLength > 5 ? (
        <p>Text is long enough.</p>
      ) : (
        <p>Text too short!</p>
      )}
    </div>
  )
}

export default validation
