function getIndex (array) {
  return Math.floor(array.length * Math.random())
}


function convertWeightedArray (array) {
  if (typeof(array[0]) !== 'object') return array

  let newArray = []

  for (let idx in array) {
    let weight = array[idx].hasOwnProperty('weight') ? array[idx].weight : 1

    for (var i = 0; i < weight; i++) {
      newArray.push(array[idx].value)
    }
  }

  return newArray
}


function rollOn (array, ignore = -1) {
  array = convertWeightedArray(array)
  index = getIndex(array)

  while (index == ignore) {
    index = getIndex(array)
  }

  let entry = array[index]

  return entry
}

function rollEither (array1, array2) {
  return Math.random() < .5 ? rollOn(array1) : rollOn(array2)
}

function maybeGetEntryFromList () {
  if (Math.random() * 3 > 2)
    return rollOn(arguments[0]) + " "
  else
    return ""
}
