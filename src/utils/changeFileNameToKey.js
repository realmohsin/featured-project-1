const changeFileNameToKey = fileName => {
  // changes 'featured-1-big', 'featured-2-small', etc to 'featured1Big', 'featured2Small'
  const splitInArr = fileName.split('-')
  if (splitInArr.length === 1) return splitInArr[0]
  const lastWord = splitInArr[splitInArr.length - 1]
  splitInArr[splitInArr.length - 1] =
    lastWord[0].toUpperCase() + lastWord.slice(1)
  return splitInArr.join('')
}

export default changeFileNameToKey
