import React from 'react';

export const usePersistedState = (name, defaultValue) => {
  const [value, setValue] = React.useState(() => {
    const persistedValue = localStorage.getItem(name);
    return persistedValue !== null ? deserialize(persistedValue) : defaultValue;
  });

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
    const listener = document.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage && event.key === name) {
        setValue(deserialize(event.newValue));
      }
    });
    return () => document.removeEventListener('storage', listener);
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem(name, serialize(value));
      console.log(`Saved ${name} to localStorage with value ${value}`);
    } catch {}
  }, [value]);

  return [value, setValue];
};
