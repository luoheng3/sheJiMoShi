/**
 * Created by 14486 on 2019/4/5.
 */
/*
面试题:给你一个数字k和字符窜s找到仅包含k
    不同字符串的最长的子串
    ag:
        s="abcba" k=2 =>bcb
 function findLong(str,k) {
 // 定义毛毛虫
 class meta{
 constructor(){
 // 字典,目前这段包含的字符和对应此字符的数量
 this.disc = {};
 // 总长度,用于比较出最大结果
 this.totalLen = 0;
 // 字符个数 用于避免超出k
 this.totalchar = 0;
 }
 // 头是否可以向前移动
 canAdd(i){
 if(this.totalchar<k) return true;
 if(this.totalchar==k){
 return !!this.disc[s[i]]
 }
 }
 // 头向前移动到i
 add(i){
 let char = s[i];
 this.totalLen++;
 if(!this.disc[char]){
 this.disc[char] = 1;
 this.totalchar++;
 return;
 }
 this.disc[char]++;
 }
 // 尾巴向前移动到i
 remove(i){
 let char = s[i];
 this.totalLen--;
 this.disc[char]--;
 ifi(!this.disc[char]){
 this.totalchar--;
 }
 }
 }
 }
 function cat(str,k) {
 // 要返回的字符串
 class Fn{
 constructor(){
 // 限制最大值 不能超过k
 this.max = 0;
 // 定义最长子串的长度
 this.totalLen = 0;
 }
 canAdd(i){
 let s = "";
 let char = s[i];
 if(s.indexOf(char)===-1){
 this.max++;
 }
 s += char;
 if(this.max<=k){
 return true;
 }else{
 this.max = 0;
 this.totalLen = s.length;
 return false;
 }
 }
 }
 }
*/
// 使用滑动窗口 就像一只毛毛虫在树枝上爬(树枝是参数s)

