let tom = {
    name: "Tom",
    age: 18,
    job: "teacher",
    hobby: "soccer", // 对应了这部分 [propName: string]: any; 因为定义接口时，还不知道该属性该起什么名称
    sex: "male",
};
// tom.sex = "female"; // readonly和const比较相似， readonly 用于属性或数组元素，确保数据不可变；
const numbers = [1, 2, 3];
// numbers[0] = 5; //readonly一旦赋值便不可修改值
console.log(tom);
