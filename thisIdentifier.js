function foo(){
    console.log(this.bar)
}

var bar = "global"

var obj1 = {
    bar: "Aloo",
    foo:foo
}

var obj2 = {
    bar: "obj2",
}

foo()
obj1.foo()
foo.call(obj2)
new foo()