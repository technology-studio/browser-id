import { v4 } from 'uuid'

declare global {
  interface Window {
    browserId?: string,
  }
}

const existingId = window.localStorage.getItem('browserId')
if (!existingId) {
  const id: string = v4()
  window.localStorage.setItem('browserId', id)
  window.browserId = id
} else {
  window.browserId = existingId
}
