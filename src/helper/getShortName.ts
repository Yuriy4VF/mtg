const getShortName = (name: string) => {
  const [firstName, secondName] = name.split(" ")
  if (secondName) return `${firstName} ${secondName[0]}.`
  return firstName
}

export default getShortName
