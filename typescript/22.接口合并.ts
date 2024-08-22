/* 
    接口合并

    接口中的属性在合并时会简单的合并到一个接口

    类合并和接口合并规则一样
*/

interface Cat1 {
  name: "橘猫";
  gender: "Male";
}

interface Cat1 {
  name: "橘猫"; //这里如果我写成橘猫以外的值， 比如 黑猫， 它就会报错， 要和之前的Cat1的name属性的类型保持一样
  age: 3;
}
//相当于
interface Cat1 {
  name: "橘猫";
  gender: "Male";
  age: 3;
}

const cat1: Cat1 = { name: "橘猫", gender: "Male", age: 3 };
