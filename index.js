class Foo {
  static StaticProperty = 32;
  publicClassField = () => {
    // stuff
  };
  classMethod() {
    return this.publicClassField()
  }
}
