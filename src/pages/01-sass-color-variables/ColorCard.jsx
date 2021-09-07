import React from 'react'

function ColorCard({ colorName, colorCode }) {
  return (
    <div className="color-card">
      <div className="color-display-block" style={{ backgroundColor: colorCode }}></div>
      <div className="card-bottom">
        <p className="color-name">{colorName}</p>
        <p className="color-code">{colorCode}</p>
      </div>

    </div>
  )
}

export default ColorCard
