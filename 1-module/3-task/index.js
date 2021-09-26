function ucFirst(str) {
  let strArr = str.split('');

  if (strArr.every(element => element != '')) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  } else {
    return '';
  }
}