/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {

  let validName = false;

  if (name != null) {
    let arr = name.split('');

    if ((arr.length > 3)
    && (arr.every(element => element != ''))
    && (arr.every(element => element != ' '))) {
      validName = true;
    }
  }

  return validName;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}