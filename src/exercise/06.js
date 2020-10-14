// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  
  // 🐨 add the onSubmit handler to the <form> below
  
  // 🐨 replace input's name attribute with id attribute
  // 🐨 make sure to associate the label to the input. 
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
    
  //  // *** Normal ***
  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     onSubmitUsername(event.target.elements.username.value)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="username">Username:</label>
  //         <input id="username" type="text"/>
  //       </div>
  //       <button type="submit" >Submit</button>
  //     </form>
  //   )
  // }


  //   // *** Extra Credit 1 ***
  //   const usernameInput = React.useRef(null)
  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     onSubmitUsername(usernameInput.current.value)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="username">Username:</label>
  //         <input ref={usernameInput} id="username" type="text"/>
  //       </div>
  //       <button type="submit" >Submit</button>
  //     </form>
  //   )
  // }


  // // *** Extra Credit 2 ***
  // const [error, setError] = React.useState(null)

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   onSubmitUsername(event.target.elements.username.value)
  // }

  // const handleChange = (event) => {
  //   const {value} = event.target
  //   const isValid = value === value.toLowerCase()
  //   setError(isValid ? null : 'Username must be lower case')
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input onChange={handleChange} id="username" type="text"/>
  //     </div>
  //     <button id="usernameButton" type="submit" disabled={Boolean(error)}>Submit</button>
  //     <p role="alert" style={{color: 'red'}}>{error}</p>
  //   </form>
  // )


  // *** Extra Credit 3 ***
  const [username, setUsername] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    // input value on form will always be username state so we can just submit the username from the state
    onSubmitUsername(username)
  }

  const handleChange = (event) => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} id="username" type="text" value={username}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )


}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
