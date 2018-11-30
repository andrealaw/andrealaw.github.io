function getCombinations(amount, coins){

    const combinations = new Array(amount + 1).fill(1);

    for (let coinIndex = 0; coinIndex < coins.length; coinIndex++){

        let coin = coins[coinIndex];

        for (let i = 1; i < combinations.length; i++){
        
            if (i > coin){

                combinations[i] += combinations[i - coin];

            }

        }

    }

    return combinations[amount];

}

console.log(getCombinations(10, [1,2,5]));