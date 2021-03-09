import React, {useState} from 'react';
import {Head} from './head';
import {List} from './list';

export const TodoList = () => {
  const [param, setParam] = useState([]);
  return (
    <div>
      <Head param={param} setParam={setParam}/>
      <List param={param} setParam={setParam}/>
    </div>
  )
}