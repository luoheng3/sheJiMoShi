/**
 * Created by 14486 on 2019/8/31.
 */
let arr = [31,42,3452,4231,34,35,3231,42,453,5,6];
let arr1 = [31,42,3452,4231,34,35,3231,42,453,5,6];
// 插入排序
// 拿出当前一位 依次和前面的值进行比较 如果比他大 往后面排 (交换位置)
function insert(arr) {
    let length = arr.length;
    let mid;
    for (var i = 1; i < length; i++) {
        for (var j = 0; j < i; j++) {
            if(arr[j]>arr[i]){
                mid = arr[j];
                arr[j] = arr[i];
                arr[i] = mid;
            }
        }
    }
}
/*
归并排序 稳定排序 O(n*log2N) 时间复杂度要好一点
    3 1 2 7 6 5 8 10
    分成两边  3 1 2 7   ||  6 5 8 10; 多一个少一个无所谓
    在分成两边 3 1 || 2 7   6 5 || 8 10; 直到只有两个数为止
    1 3  2 7     5 9  8 12
    1 2 3 7;
    用递归的思想来做
*/
// 这是自己写的也是准确的
function mergeSort(arr) {
    let length = arr.length;
    let mid = Math.floor(length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    if(left.length>1){
        left = mergeSort(left);
    }
    if(right.length>1){
        right = mergeSort(right);
    }
    return merge(left,right);
}

// 这是标准答案
function mergeSort1(arr) {
    let length = arr.length;
    if(length<2){
        return arr;
    }
    let mid = Math.floor(length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort1(left),mergeSort1(right));
}
function merge(left,right) {
    let res = [];
    while (left.length>0 && right.length>0){
        if(left[0]>right[0]){
            res.push(right.shift());
        }else{
            res.push(left.shift());
        }
    }
    while(left.length){
        res.push(left.shift());
    }
    while(right.length){
        res.push(right.shift());
    }
    return res;
}
let arr2 = mergeSort1(arr);
let arr3 = mergeSort(arr1);
console.log(arr2);
console.log(arr3);