import './styles.css';

//Fibonacci code

function fibs(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    }
  
    const fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray;
};

function fibsRec(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const prevFib = fibs(n - 1);
      return [...prevFib, prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2]];
    }
};


console.log(fibs(5));
console.log(fibsRec(5));