const STAKES_STORAGE_KEY = 'howsure.stakes'

export function getSavedStakes(): string | null {
  try {
    return localStorage.getItem(STAKES_STORAGE_KEY)
  } catch {
    // Handle private mode, quota exceeded, etc.
    return null
  }
}

export function saveStakes(stakesId: string): void {
  try {
    localStorage.setItem(STAKES_STORAGE_KEY, stakesId)
  } catch {
    // Silently fail in private mode
  }
}
