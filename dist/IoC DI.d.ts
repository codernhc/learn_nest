declare class A {
    name: string;
    constructor(name: string);
}
declare class C {
    name: string;
    constructor(name: any);
}
declare class Container {
    mo: any;
    constructor();
    provide(key: string, mo: any): void;
    get(key: string): any;
}
declare const mo: Container;
declare class B {
    a: any;
    c: any;
    constructor(mo: Container);
}
