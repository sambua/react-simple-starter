import { DateTime } from "luxon";

/**
 * Get from the local storage based on key name
 *
 * @param {string} key
 * @returns {any|null}
 */
export const getStorageKey = (key: string): any | null => {
  try {
    const serialized = localStorage.getItem(key);

    if (serialized === null) return null;

    const store: { validTill?: number} = JSON.parse(serialized);
    if (typeof store.validTill !== 'undefined')
      if (store.validTill < DateTime.now().valueOf())
        return removeStorageKey(key);

    return store;
  } catch (err) {
    console.warn(err);
    return null;
  }
};

/**
 * Will save serialized data to local storage
 * @param key
 * @param state
 */
export const saveStorageKey = (key: string, state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.warn(err);
  }
};

/**
 * Remove existing
 * @param key
 * @returns {null}
 */
export const removeStorageKey = (key: string):void | null => {
  try {
    if (localStorage.getItem(key)) localStorage.removeItem(key);
    return null;
  } catch (err) {
    console.warn(err);
  }
};
