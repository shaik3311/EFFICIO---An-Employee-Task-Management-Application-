

export const getFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
