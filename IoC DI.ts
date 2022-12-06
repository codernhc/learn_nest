class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class C {
  name: string
  constructor(name) {
    this.name = name
  }
}

class Container {
  mo: any
  constructor() {
    this.mo = {}
  }

  provide(key: string, mo: any) {
    console.log(key, mo);
    this.mo[key] = mo
  }

  get(key: string) {
    console.log(key);
    return this.mo[key]
  }
}

const mo = new Container()

mo.provide('a', new A('hello a'))
mo.provide('c', new A('hello c'))

class B {
  a: any
  c: any
  constructor(mo: Container) {
    this.a = mo.get('a')
    this.c = mo.get('c')
  }
}