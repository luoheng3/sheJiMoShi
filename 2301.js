/*
Created by 14486 on 2019/8/31.
*/
/*
快速排序
    找到一个数为基点,大于它放右边,小于放左边;
    也就是这个基数也就可以确定位置了;
    算法复杂度 O(n*log2N)
*/

let arr2 = [31,42,3452,4231,34,35,3231,42,453,5,6];
let arr1 = [31,42,3452,4231,34,35,3231,42,453,5,6];

function quickSort(arr) {
    let len = arr.length;
    quick(arr,0,len-1);
}
function quick(arr,left,right) {
    let point = left;
    let index = point+1;
    let len = arr.length;
    for (var i = index; i <= right; i++) {
        if(arr[i]<arr[point]){
            wrap(arr,i,index);
            index++;
        }
    }
    wrap(arr,point,index-1);
    index--;
    let leftE = index -1;
    let rightB = index + 1;
    if(leftE > left){
        quick(arr,point,leftE)
    }
    if(rightB < right){
        quick(arr,rightB,right)
    }
}
function wrap(arr,i,j) {
    let num = arr[i];
    arr[i] = arr[j];
    arr[j] = num;
}
quickSort(arr1);
console.log(arr1);

/*
堆排序
    有点类似二叉树这种算法思想
    将一个初始数组想象成为一个二叉树
    对于每一个子树,将最大值放入树顶,
    依次放完,最大的树顶就一定是最大值了;
        关于二叉树的一些规律
            1: 那些树有儿子
                Math.floor(length/2)-1 都有儿子;
            2: 左儿子的序号
                i*2 + 1;
            3: 右儿子序号
                i*2 + 2; i是根节点的序号;
    复杂度: O()
*/
function heapSort(arr) {
    let length = arr.length;
    for (let j = length; j > 1 ; j--) {
        let i = Math.floor(j/2) - 1;
        heap(arr,i,j)
    }
}
function heap(arr,i,length) {
    while (i >= 0){
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
        wrap(arr,i,maxIndex);
        i--;
    }
    wrap(arr,0,length-1)
}
heapSort(arr2);
console.log(arr2);