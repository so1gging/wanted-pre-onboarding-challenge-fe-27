const STORAGE_KEY = 'wanted-pre-onboarding'

class tokenStorage {
  constructor() {}
  public set(token: string) {
    localStorage.setItem(STORAGE_KEY, token)
  }
  public get() {
    return localStorage.getItem(STORAGE_KEY)
  }
  public clear() {
    localStorage.removeItem(STORAGE_KEY)
  }
}

export default new tokenStorage()
