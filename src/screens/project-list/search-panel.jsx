import React from "react";

export const SearchPanel = ({users, param, setParam}) => {

  return <form action="">
    <input value={param.name} onChange={evt => setParam({
      ...param,
      name: evt.target.value,
    })}/>
    <select value={param.personId} onChange={evt => setParam({
      ...param,
      personId: evt.target.value
    })}>
      <option value={''}>负责人</option>
      {
        users && users.map(user => {
          return <option value={user.id} key={user.id}>{user.name}</option>
        })
      }
    </select>
  </form>
}