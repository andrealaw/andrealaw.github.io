function repeatedString(s, n) {

    let countA = getCount(s, n);    
    let totalCount = 0;
    
    let lengthLeft = n % s.length;
    let countALeft = getCount(s.substr(0, lengthLeft));
    
    totalCount = Math.floor(n / s.length) * countA + countALeft;
    
    return totalCount;

}

function getCount(s){
    let count = 0;
    let length = s.length;
    
    for (let i = 0; i < length; i++){
        if (s[i] === 'a'){
            count++;
        }
    }
    return count;
}