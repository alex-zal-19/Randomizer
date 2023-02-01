
    function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    let min = parseInt(prompt("Enter the lower bound: "));
    let max = parseInt(prompt("Enter the upper bound: "));
    
    let randomNumber = getRandomBetween(min, max);
    
    document.body.innerHTML = "<h1>Random number between " + min + " and " + max + ": " + randomNumber + "</h1>";

  