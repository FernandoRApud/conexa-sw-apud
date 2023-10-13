export const setLocalStorage = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key) || '[]');

export const removeLocalStorage = (key: string) => localStorage.removeItem(key);

export const removeAllLocalStorage = () => localStorage.clear();
