import React from 'react'
import styled from 'styled-components';

const ColorCardBox = styled.div`
  width: 30%;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media (max-width:1000px) {
    width: 45%;
  }

  .color-display-block {
    width: 100%;
    height: 8rem;
    border-radius: 10px 10px 0 0;
  }

  .card-bottom {
    font-size: 1.2rem;
    padding: 1rem;
  }

  .color-name {
    color: #333;
  }

  .color-code {
    color: #777;
  }
`;

function ColorCard({ colorName, colorCode }) {
  return (
    <ColorCardBox>
      <div className="color-display-block" style={{ backgroundColor: colorCode }}></div>
      <div className="card-bottom">
        <p className="color-name">{colorName}</p>
        <p className="color-code">{colorCode}</p>
      </div>

    </ColorCardBox>
  )
}

export default ColorCard
