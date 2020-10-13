// Styling
// http://localhost:3000/isolated/exercise/05.js

import { blue, italic } from 'chalk'
import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div className="box box--small" style={{backgroundColor: "lightblue", fontStyle: "italic"}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: "pink", fontStyle: "italic"}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{background:"orange", fontStyle: "italic"}}>large orange box</div>

// const Box = ({className='', style, ...otherProps}) => {
//   return (
//   <div className={`box ${className}`} style={{fontStyle: "italic", ...style}} {...otherProps}/>
// )
// }

const Box = ({size, style, ...otherProps}) => {
  return (
  <div className={`box box--${size}`} style={{fontStyle: "italic", ...style}} {...otherProps}/>
)
}

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

function App() {
    return (
      <div>
        <Box size="small" style={{backgroundColor: 'lightblue'}}>
  small lightblue box
</Box>
<Box size="medium" style={{backgroundColor: 'pink'}}>
  small lightblue box
</Box>
<Box size="large" style={{backgroundColor: 'orange'}}>
  small lightblue box
</Box>
</div>
    )
  }



export default App
