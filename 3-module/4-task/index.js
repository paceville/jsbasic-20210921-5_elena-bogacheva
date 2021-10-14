function showSalary(users, age) {

  let result = '';

  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      if (result !== '') {
        result = result + '\n';
      } 

      result =  result + users[i].name + ', ' + users[i].balance;
    }
  }

  return result;
}
