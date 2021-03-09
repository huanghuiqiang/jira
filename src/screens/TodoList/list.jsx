import React from 'react';

export const List = ({param, setParam}) => {
  
  return (
    <form action="from">
      <li>TodoList</li>
      {
        param.map((item, index) => {
          return <li key={index} onClick={() => {
            const paramList = [...param];
            paramList.splice(index, 1);
            setParam(paramList);
          }}>{item}</li>
        })
      }
    </form>
  )
}