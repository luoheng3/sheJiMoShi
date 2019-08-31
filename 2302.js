/**
 * Created by 14486 on 2019/8/31.
 */
// 堆排序另一种思路 和前面差不多
let arr2 = [31,42,3452,4231,34,35,3231,42,453,5,6];
let arr1 = [31,42,3452,4231,34,35,3231,42,453,5,6];
function heapSort(arr) {
    let length = arr.length;
    for (let j = Math.floor(length/2)-1; j >=0 ; j--) {
        heap(arr,j,length)
    }
    for (let i = length-1; i > 0; i--) {
        wrap(arr,0,i);
        length--;
        heap(arr,0,length)
    }
}
function heap(arr,i,length) {
    let left = i*2 + 1,
        right = i*2 + 2;
    let max = arr[i];
    let maxIndex = i;
    if (left < length && arr[left] > max){
        max = arr[left];
        maxIndex = left;
    }
    if (right < length && arr[right] > max){
        maxIndex = right;
    }
    if (maxIndex !== i){
        wrap(arr,i,maxIndex);
        heap(arr,maxIndex,length)
    }
}
function wrap(arr,i,j) {
    let num = arr[i];
    arr[i] = arr[j];
    arr[j] = num;
}
heapSort(arr1);
console.log(arr1);
// 计数排序
// 适用于 重复值多,正整数和0 最大值不是特别大
function countSort(arr) {
    let res = [];
    arr.forEach(function (item) {
        res[item] || (res[item]=0);
        res[item]++;
    });
    let j = 0;
    res.forEach(function (item,index) {
        while (item>0){
            arr[j] = index;
            item--;
            j++;
        }
    })
}
countSort(arr2);
console.log(arr2);