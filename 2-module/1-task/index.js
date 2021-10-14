function sumSalary(salaries) {
  let salary = 0;

  for (let element in salaries) {

    if (typeof salaries[element] === 'number'
      && !Number.isNaN(salaries[element]) 
      && salaries[element] != undefined
      && salaries[element] != Infinity
      && salaries[element] != -Infinity) {
      
      salary = salary + salaries[element];
    }
  }

  return salary;
}
