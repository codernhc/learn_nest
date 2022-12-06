class A {
    constructor(name) {
        this.name = name;
    }
}
class C {
    constructor(name) {
        this.name = name;
    }
}
class Container {
    constructor() {
        this.mo = {};
    }
    provide(key, mo) {
        console.log(key, mo);
        this.mo[key] = mo;
    }
    get(key) {
        console.log(key);
        return this.mo[key];
    }
}
const mo = new Container();
mo.provide('a', new A('hello a'));
mo.provide('c', new A('hello c'));
class B {
    constructor(mo) {
        this.a = mo.get('a');
        this.c = mo.get('c');
    }
}
//# sourceMappingURL=IoC%20DI.js.map