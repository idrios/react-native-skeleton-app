export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function dateTimeNow() {
  return new Date()
}

export function dateTimeNowFormatted() {
  return new Date().toLocaleString() + ""
}