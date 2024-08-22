function getName4(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
function handlerEvent(ele, eventName) {
    //do something
}
// handlerEvent(document.getElementById("hello"), "scroll");
// handlerEvent(document.getElementById("world"), "mouseover");
