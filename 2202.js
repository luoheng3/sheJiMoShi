/**
 * Created by 14486 on 2019/8/30.
 */
/*
冒泡排序
    两两作比较,大的往后面排
    稳定性: 两个值一样不会进行交换,称为稳定排序
    冒泡排序是一个稳定排序
*/
let arr = [31,42,3452,4231,34,35,3231,42,453,5,6];
let arr1 = [31,42,3452,4231,34,35,3231,42,453,5,6];
arr.sort(function (x,y) {
    // x y 代表数组每一项的值;
    return x - y;
});
console.log(arr);
function bubble(arr) {
    let length = arr.length;
    let mid;
    for (var i = 0; i < length-1; i++) { // 外面要进行多少轮
        for (var j = 0; j < length-1-i; j++) { // 因为后面的一定是最大的值,就不用在比较了 所以减去i
            // 每一轮相邻两位进行比较, 大的放后面;
            if(arr[j]>arr[j+1]){
                mid = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = mid;
            }
        }
    }
}
//bubble(arr1);
// O(n²)

// 选择排序 稳定排序
// 第一个值和后面的所有比较大小 找到 小的 交换位置
// 每次循环找出最小的值 放到前面
function filter(arr) {
    let length = arr.length;
    let mid;
    for (var i = 0; i < length; i++) {
        for (var j = i+1; j < length; j++) {
            if(arr[j]<arr[i]){ // 如果小于交换位置 放在最前面
                mid = arr[j];
                arr[j] = arr[i];
                arr[i] = mid;
            }
        }
    }
}
filter(arr1);
console.log(arr1);