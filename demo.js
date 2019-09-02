/**
 * Created by 14486 on 2019/8/31.
 */
let num1 = 0;
let num2 = 0;
function fn(n) {
    if(n==1) return 1;
    return n*fn(n-1);
}
function fn2(n) {
        let sum = 1;
        for (var i = 1; i <= n; i++) {
            sum*=i;
        }
        return sum;
}
console.log(fn(10));
console.log(fn2(10));
console.log(num1,num2);