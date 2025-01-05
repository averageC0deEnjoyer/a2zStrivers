function factor(n) {
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(i);
      if (n / i !== i) {
        console.log(n / i);
      }
    }
  }
}
factor(36);
