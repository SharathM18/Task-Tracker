const useLocalStorage = () => {
  const setItem = (key, item) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {}
  };

  const getItem = (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {}
  };

  const removeItem = (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {}
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
