import React from 'react'

export default function Preview(props) {
  return (
    <div id="preview" className="col-6" >
      <h1>Preview</h1>
      <h5>
        {props.convertedHtml}
      </h5>
    </div>
  )
}
