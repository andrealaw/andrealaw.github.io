function countingValleys(n, s) {

    let level = 0;
    let count = 0;
    
    for (let i = 0; i < n; i++){
        var direction = s[i];
        if (direction === 'D'){ 
            level--; 
        } else { 
            level++;
            if (level === 0){
                count++;
            }
        }
    }
    return count;
}