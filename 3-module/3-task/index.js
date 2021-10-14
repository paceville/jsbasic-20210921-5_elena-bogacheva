function camelize(str) {

  if (str != '') {
    let strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === '-') {
        strArr[i+1] = strArr[i+1].charAt(0).toUpperCase();
        strArr.splice(i, 1);
      }
    }

    str = strArr.join('');
  }

  return str;
}