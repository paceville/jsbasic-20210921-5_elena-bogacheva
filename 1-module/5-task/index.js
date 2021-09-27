function truncate(str, maxlength) {
  let strArr = str.split('');

  if (strArr.length > maxlength) {
    strArr.splice(maxlength - 1, strArr.length - maxlength + 1, "…");
    let newStr = strArr.join('');
    return newStr;
    
  } else {
    return str;
  }
}
