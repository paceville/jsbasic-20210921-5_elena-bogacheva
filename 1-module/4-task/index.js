function checkSpam(str) {
  let newStr = str.toLowerCase();

  let strArr = newStr.split(' ');

  let spam = false;

  if (strArr.some(element => element.includes("1xbet"))
    || (strArr.some(element => element.includes("xxx")))) {
        spam = true;
    }

    return spam;
}
