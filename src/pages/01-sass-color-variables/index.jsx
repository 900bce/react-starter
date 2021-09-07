import React, { useState } from 'react';
import ColorCard from './ColorCard';
import './style.css';

const initialColor = '//顏色變數\n$color_one: #123456\n$color_two: #456789\n$color_three: #7890ab\n$color_112C: #9C8412\n$color_7414C: #C16C18\n$color_2021C: #9D4815\n$color_pruple: #952789\n$color_cherryblossom: #d35478\n$color_meadow: #198812';

function SassColorVariables() {
  const [colorSetting, setColorSetting] = useState(initialColor);

  return (
    <div className="container">
      <h1 className="title">SASS Color Variables</h1>
      <hr />
      <div className="content">
        <textarea className="textarea" defaultValue={colorSetting} onChange={event => setColorSetting(event.target.value)} />
        <div className="display-container">
          {colorSetting.split('\n').filter(set => /^\$\w*:\s?#[a-fA-F0-9]{6}/.test(set)).map((set, index) => (
            <ColorCard colorName={set.split(':')[0]} colorCode={set.split(':')[1]} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SassColorVariables;
