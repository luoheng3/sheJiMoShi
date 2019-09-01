/**
 * Created by 14486 on 2019/9/1.
 */
// 桶排序 相当于计数排序的升级版 只能正数
function bucketSort(arr) {
    let length = arr.length;
    let size = 10;
    let newArr = [];
    for (let i = 0; i < length; i++) {
        let index = Math.floor(arr[i]/10);
        if(!newArr[index]){
            newArr[index] = [];
        }
        newArr[index].push(arr[i]);
    }
    let j = 0;
    for (let i = 0,len = newArr.length; i < len; i++) {
        let item = newArr[i];
        if(!item){
            continue
        }
        quickSort(item);
        item.forEach(function (val) {
            arr[j] = val;
            j++;
        })
    }
}
let arr2 = [31,42,3452,4231,34,35,3231,42,453,5,6];
// 基数排序   先比较各位数 从小到大 然后十位数 从小到大
function fn(arr) {
    let max = Math.max.apply(null,arr);
    let length = arr.length;
    // 得到最大数值的长度, 也就是接下来要进行几轮循环;
    let maxFlag = max.toString().length;
    let res = [];
    let x =10,y=1;
    for (var i = 0; i < maxFlag; i++) {
        for (let j = 0; j < length; j++) {
            let val = Math.floor(arr[j] % x / y)
            if(!res[val]){
                res[val] = [];
            }
            res[val].push(arr[j]);
        }
        x*=10;
        y*=10;
        let index = 0;
        for (let j = 0,length = res.length; j < length; j++) {
            let item = res[j];
            if(!res[j]){
                continue;
            }
            res[j].forEach(function (val) {
                arr[index++] = val;
            })
        }
        res = [];
    }
}
fn(arr2);
console.log(arr2);