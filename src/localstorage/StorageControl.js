const KEY = 'events.localstorage.control';

const save = (object) => {
  const serialized = JSON.stringify(object);
  localStorage.setItem(KEY, serialized);
}

const load = () => {
  const serialized = localStorage.getItem(KEY);
  return JSON.parse(serialized);
}

export { save, load };