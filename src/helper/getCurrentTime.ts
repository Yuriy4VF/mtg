const getCurrentTime = () => {
  return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(11, 8)
}

export default getCurrentTime
