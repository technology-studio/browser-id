import { v4 } from 'uuid'

declare global {
  interface Window {
    TXO_BROWSER_ID?: string,
  }
}

const existingId = window.localStorage.getItem('TXO_BROWSER_ID')
if (!existingId) {
  const id: string = v4()
  window.localStorage.setItem('TXO_BROWSER_ID', id)
  window.TXO_BROWSER_ID = id
} else {
  window.TXO_BROWSER_ID = existingId
}
