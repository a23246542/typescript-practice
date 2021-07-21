import { useState } from 'react';

export const useArray = <T,>(arr: T[]) => {
  const [arrValue, setArrValue] = useState(arr);
  return {
    arrValue,
    setArrValue,
    add: (item: T) => {
      setArrValue([...arrValue, item]);
    },
    removeIndex: (index: number) => {
      const copy = [...arrValue];
      copy.splice(index, 1);
      setArrValue(copy);
    },
    clear: () => {
      setArrValue([]);
    },
  };
};
