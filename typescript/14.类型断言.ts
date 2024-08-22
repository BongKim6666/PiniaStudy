//定义一个函数， 获取到一个数字或者字符串的长度
//类型断言：可以手动指定一个类型
//2种方式
//1. 变量 as 类型
//2.<类型> 变量
function getLength(x: string | number): number {
  //   if ((x as string).length) {
  //     return (x as string).length;
  //   } else {
  //     return x.toString().length;
  //   }

  if ((<string>x).length) {
    return (<string>x).length;
  } else {
    return x.toString().length;
  }
}

//将任何类型断言为any类型， any类型是可以访问任何属性和方法的
(window as any).a = 10;
