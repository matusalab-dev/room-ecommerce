import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, setValue]);

  return { value, setValue };
};

// export const useLocalStorage = (key) => {
//   useEffect(() => {
//     const setItem = (value) => {
//       try {
//         window.localStorage.setItem(key, JSON.stringify(value));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   }, [key, value]);

//   const getItem = () => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : undefined;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const removeItem = () => {
//     try {
//       window.localStorage.removeItem(key);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return { setItem, getItem, removeItem };
// };

export default useLocalStorage;
