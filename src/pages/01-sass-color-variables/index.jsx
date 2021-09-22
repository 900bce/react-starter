import React, { useState } from 'react';
import styled from 'styled-components';
import ColorCard from './ColorCard';

const initialColor = '//顏色變數\n$color_one: #123456\n$color_two: #456789\n$color_three: #7890ab\n$color_112C: #9C8412\n$color_7414C: #C16C18\n$color_2021C: #9D4815\n$color_pruple: #952789\n$color_cherryblossom: #d35478\n$color_meadow: #198812';

function SassColorVariables() {
  const [colorSetting, setColorSetting] = useState(initialColor);

  return (
    <Container>
      <Title>SASS Color Variables</Title>
      <hr />
      <Content>
        <Textarea defaultValue={colorSetting} onChange={event => setColorSetting(event.target.value)} />
        <DisplayContainer>
          {colorSetting.split('\n').filter(set => /^\$\w*:\s?#[a-fA-F0-9]{6}/.test(set)).map((set, index) => (
            <ColorCard colorName={set.split(':')[0]} colorCode={set.split(':')[1]} key={index} />
          ))}
        </DisplayContainer>
      </Content>
    </Container>
  );
}

export default SassColorVariables;

const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 3rem 0;
`;

const Content = styled.div`
  display: flex;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Textarea = styled.textarea`
  width: 33.33%;
  height: 50rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 20rem;
  }
`;

const DisplayContainer = styled.div`
  width: 66.66%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
