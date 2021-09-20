import React from 'react'
import useInput from './hooks/useInput';

function Input({ labelText, value: initialValue }) {
  const { value, bind } = useInput(initialValue);

  return (
    <div>
      <label>{labelText}</label><br />
      <input type="text" value={value} {...bind } />
      <p>{ value }</p>
    </div>
  )
}

export default Input
