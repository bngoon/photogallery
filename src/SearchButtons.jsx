import React from 'react'
import "./button.css"
function SearchButtons() {
  return (
    <div className="myBtnContainer">
    <button className="btn" onclick=""> Landscape</button>
    <button className="btn" onclick=""> Nature</button>
    <button className="btn" onclick=""> Cars</button>
    <button className="btn" onclick=""> People</button>
    <button className="btn" onclick=""> Food</button>
  </div>
  )
}

export default SearchButtons