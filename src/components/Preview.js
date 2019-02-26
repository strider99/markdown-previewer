import React from 'react'

export default function Preview(props) {
  return (
    <div id="preview" className="col-6" >
      <h1>Preview</h1>
      <div dangerouslySetInnerHTML={{__html: props.convertedHtml }}  />

    </div>
  )
}
