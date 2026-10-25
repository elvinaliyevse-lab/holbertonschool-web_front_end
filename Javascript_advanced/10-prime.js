
function countPrimeNumbers() {
  let primeCount = 0;

  for (let number = 2; number <= 100; number += 1) {
    let isPrime = true;

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeCount += 1;
    }
  }

  return primeCount;
}

const startTime = performance.now();
for (let iteration = 0; iteration < 100; iteration += 1) {
  countPrimeNumbers();
}
const endTime = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
