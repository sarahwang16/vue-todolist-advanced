export default {
  getLocalStorageItem (STORAGE_KEY) {
    //console.log(localStorage.getItem(STORAGE_KEY))
    //console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    return JSON.parse(localStorage.getItem(STORAGE_KEY))
  },
  setLocalStorageItem (STORAGE_KEY, item) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(item))
  }
}
