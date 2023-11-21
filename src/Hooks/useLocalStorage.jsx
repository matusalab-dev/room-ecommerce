// import { useState, useEffect } from "react";

// const useLocalStorage = (key, defaultValue = null) => {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);
//     if (saved !== null) {
//       return JSON.parse(saved);
//     }
//     return defaultValue;
//   });

//   const setItem = (newValue) => {
//     const serializedValue = JSON.stringify(newValue);
//     localStorage.setItem(key, serializedValue);
//     // setValue(serializedValue);
//     setValue(serializedValue);
//   };

//   return [value, setItem];
// };

// export default useLocalStorage;

import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue : initialValue;
  });

  console.log(value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, setValue]);

  return [value, setValue];
};
