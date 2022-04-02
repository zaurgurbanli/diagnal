export const formatArray = (data, numColumns, searchText) => {
  const regex = new RegExp(searchText, 'i');
  const newArray = data.filter(i => !i?.empty && regex.test(i?.name));

  const numberOfFullRows = Math.floor(newArray.length / numColumns);
  let numberOfElementsLastRow = newArray.length - numberOfFullRows * numColumns;

  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    newArray.push({empty: true});
    numberOfElementsLastRow++;
  }

  return newArray;
};
