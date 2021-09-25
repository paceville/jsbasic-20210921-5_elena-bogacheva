function factorial(n) {

  let fact;

  switch (n) {

    case (n < 0):
      fact = "undefined";
      break;

      case 0:

     // case 1:
        fact = 1;
        break;

      default:
        fact = n;

        for (let i = 1; i < n; i++) {
          fact = fact * (n - i);
        }

        break

  }

  return fact;

}
