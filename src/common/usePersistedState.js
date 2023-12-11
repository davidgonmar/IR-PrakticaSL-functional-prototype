import React from 'react';

export const usePersistedState = (name, defaultValue) => {
  const [value, setValue] = React.useState(defaultValue);
  const nameRef = React.useRef(name);

  function serialize(value) {
    return JSON.stringify({
      value,
    });
  }

  function deserialize(value) {
    if (typeof value !== 'string') return undefined;
    try {
      return JSON.parse(value).value;
    } catch {
      return value;
    }
  }

  React.useEffect(() => {
    try {
      const storedValue = deserialize(localStorage.getItem(name));
      if (storedValue !== null && storedValue != undefined)
        setValue(storedValue);
      else localStorage.setItem(name, serialize(defaultValue));
    } catch {
      setValue(defaultValue);
    }
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem(nameRef.current, serialize(value));
    } catch {}
  }, [value]);

  React.useEffect(() => {
    const lastName = nameRef.current;
    if (name !== lastName) {
      try {
        localStorage.setItem(name, serialize(value));
        nameRef.current = name;
        localStorage.removeItem(lastName);
      } catch {}
    }
  }, [name]);

  return [value, setValue];
};
