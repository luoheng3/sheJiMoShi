/*
Created by 14486 on 2019/9/2.
*/
// 验证表单功能的需求
function checkName() {} // 验证姓名
function checkEmail() {} // 验证邮箱
function checkPassword() {}// 验证密码
/*
 * 缺点:
 *   创建了很多全局变量,如果别人也写了这个变量就会覆盖掉;
*/
// 解决方案一 : 用对象收编变量
let checkObject = {
    checkName:function () {},
    checkEmail:function () {}
};
// 解决方案2: 对象的另一种创建方式
let checkObject1 = function () {
    return {
        checkName(){},
        checkEmail(){}
    }
};