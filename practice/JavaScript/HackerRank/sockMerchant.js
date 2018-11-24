function sockMerchant(n, socks) {

    let sockCountsObj = countSocks(socks);

    let totalPairsOfSocks = countSockPairs(sockCountsObj);

    console.log(totalPairsOfSocks);

}

function countSocks(arr) {

    return arr.reduce((obj, color) => {

        if (obj[color] === undefined) {
            obj[color] = 1;
        } else {
            obj[color]++;
        }

        return obj;

    }, {});

}

function countSockPairs(sockCountsObj) {

    let totalPairsOfSocks = 0;
    let keysArr = Object.keys(sockCountsObj);

    keysArr.forEach(key => {
        totalPairsOfSocks += Math.floor(sockCountsObj[key] / 2);
    });

    return totalPairsOfSocks;
}

function main() {

    var n = 9;
    var socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

    sockMerchant(n, socks);

}