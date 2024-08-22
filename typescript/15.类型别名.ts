type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName4(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

//字符串字面量类型  用来约束取值只能是某几个字符串中的一个
type EventNames = "click" | "dblClick" | "scroll";
function handlerEvent(ele: Element, eventName: EventNames) {
  //do something
}

// handlerEvent(document.getElementById("hello"), "scroll");
// handlerEvent(document.getElementById("world"), "mouseover");
