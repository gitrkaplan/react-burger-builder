import React from 'react'

const userOutput = props => {
  console.log(props.userName)
  return (
    <div>
      <p>Username: {props.userName}</p>
      <p>This is just a placeholder</p>
    </div>
  )
}

export default userOutput
