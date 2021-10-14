function isEmpty(obj) {

  let empty = false;

  if (Object.keys(obj).length == 0) {
    empty = true;
  }

  return empty;
}
