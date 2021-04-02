import React from 'react'

export default (props) => {
  const style = { textColor: props.content.textColor }
  
  return (
    <div>
        <p style="{style}">I am a custom element !</p>
    </div>
  )
}

