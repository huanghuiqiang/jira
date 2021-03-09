import React, {useState} from 'react';

export const Head = ({param, setParam}) => {

  const [inputValue, setInputvalue] = useState('');

  return (
    <div>
      <input type="text" value={inputValue} onChange={evt => setInputvalue(evt.target.value)}/>
      <button onClick={() => {
        setParam([...param, inputValue])
        setInputvalue('')
      }}>add</button>
    </div>
  )
}