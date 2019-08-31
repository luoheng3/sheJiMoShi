/**
 * Created by 14486 on 2019/8/31.
 */
function bubble(arr) {
    let length = arr.length;
    let mid;
    for (var i = 1; i < length-1; i++) {
        for (var j = 0; j < i; j++) {
            if( arr[i] < arr[j] ){
                mid = arr[j];
                arr[j] = arr[i];
                arr[i] = mid;
            }
        }
    }
}
let arr = [31,42,3452,4231,34,35,3231,42,453,5,6];
bubble(arr);
console.log(arr);