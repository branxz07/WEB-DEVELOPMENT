/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

var sieve = function (n) {
    "use strict";
    var array = [], primes = [], i, j;
    for(i=2; i<n; i++)array[i]=i;
    if(n>1)primes[0]=2;
    for(i=2; i < n; i++){
        for(j=(i*2);j < n; j+=i){
            array[j]=0;
        }
    }
    for(i=0; i < n-1; i++){
        if(array[i] != 0)primes[i]=array[i];
    }
    return primes.join(' ');
};
console.log(sieve(1000000));