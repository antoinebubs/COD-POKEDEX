import {useEffect, useRef, useState} from 'react';

export const useDebounceValue = (value, time) => {
  const [_value, setValue] = useState(value);
  const timeRef = useRef(null);

  const cancel = () => {
    if (timeRef.current) window.clearTimeout(timeRef.current);
  };

  useEffect(() => {
    cancel();
    timeRef.current = window.setTimeout(() => {
      setValue(value);
    }, time);
  }, [value, time]);

  useEffect(() => {
    return cancel;
  }, []);

  return [_value, cancel];
};
