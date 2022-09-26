const n= prompt();

var getPrimeFactors = function (n) {
    "use strict";

    var i, sequence = [];

    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    for( i = 2; i <= n; i++) {
        if(n % i == 0 && isPrime(i)) {
            sequence.push(i);
        }
    }
    return(sequence);

};

// number for user to put
console.log(getPrimeFactors(n));

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));


