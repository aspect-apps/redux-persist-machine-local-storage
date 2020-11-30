/**
 * @author Luke Brandon Farrell
 * @description Declares the react-native methods for serializing then
 * loading and saving to the local storage.
 */

/**
 * Loads the state from a key
 *
 * @param key
 * @return {Promise<*>}
 */
export const loadState = async key => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }
  
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

/**
 * Saves the state to a key
 *
 * @param key
 * @param state
 * @return {Promise<void>}
 */
export const saveState = async (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    // Ignore the save errors
  }
};
