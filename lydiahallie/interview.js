//DAZN
function fibo(n){
    if(n == 0 || n == 1){
        return 1;
    }
/*     dp = []
    dp[0] = 1
    dp[1] = 1

    for(let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2]; // 2
    }
    return dp[n]; */
    let a = 1;
    let b = 1;
    let c;
    for (let i = 2; i <= n; i++){
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}
[1, 1, 2, 3, ]

/**
 *  2 , 1 , 2, 3, 
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
console.log(fibo(6))
console.log(fibo(7))
console.log(fibo(8))