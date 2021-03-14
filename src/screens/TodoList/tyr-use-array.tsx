import React, { useState } from "react";
// import { useMount } from 'utils';

export const ListOutput = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);

  // useMount()

  return (
    <div>
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person, index) => {
        return (
          <div>
            <span style={{ color: "red" }}>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        );
      })}
    </div>
  );
};

const useArray = <T,>(Inist: T[]) => {
  const [value, setValue] = useState(Inist);

  return {
    value: value,
    add: (person: T) => {
      setValue([...value, person]);
    },
    clear: () => {
      setValue([]);
    },
    removeIndex: (index: number) => {
      const param = [...value];
      param.splice(index, 1);
      setValue(param);
    },
  };
};
