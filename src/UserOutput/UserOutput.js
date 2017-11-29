import React from 'react'

const userOutput = props => {
  const styles = {
    borderRadius: '0.6rem',
    border: '1px solid #383a42'
  }
  return (
    <div style={styles}>
      <p>Username: {props.userName}</p>
      <p>This is just a placeholder</p>
    </div>
  )
}

export default userOutput
