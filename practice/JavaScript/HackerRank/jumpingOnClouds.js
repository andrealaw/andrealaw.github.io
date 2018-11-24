/**
 * 
 * Write a function to count the minimum number
 * of steps to reach the last 0.
 * 
 * Min step per move = 1 
 * Max step per move = 2
 * 
 * Only 0 can be step on.
 * Do not step on any 1.
 * 
 * More: Jumping on the Clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * 
 * @param c - a string of integers 0 and 1
 */
function jumpingOnClouds(c) {
    
    let jumpCounts = 0;
    let cur = 0;
    let end = c.length - 1;
    
    while (cur < end){
        let next = c[cur+1];
        let nextNext = c[cur+2];
        if (next == undefined){
            return jumpCounts;
        } else if (nextNext == 0){
            jumpCounts++;
            cur++;
        } else {
            jumpCounts++;
        }
        cur++;
    }
    
    return jumpCounts;

}

function main(){
    
    jumpingOnClouds('0100'); // 2
}

main();