function getMinMax(str) {
  let strArr = str.split(' ');

  let numbers = [];

  strArr.forEach(element => {
    numbers.push(parseFloat(element));
  });

  numbers = numbers.filter(element => typeof (element) === 'number' && !isNaN(element) && element != undefined);

  numbers.sort(function(a,b) { 
    return a - b
  }) 

  return obj = {
    min: numbers[0],
    max: numbers[numbers.length-1]
  }
}
