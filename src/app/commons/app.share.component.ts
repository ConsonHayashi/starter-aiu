
/**
 * 类的继承体系
 * 实现了props, state, aSetOfOnOff, aSetOfList, aSetOfCalc
 */
export class AppShareComponent<T> {

  constructor(

  ){}

  // props使用泛型，可以接收一个特定对象，用以限制传参。
  public props: T;
  public state: Object;
  public chilrenProps: Object;
  public aSetOfOnOff: Object;
  public aSetOfList: Object;
  public aSetOfCalc: Object;

  public setState(obj: Object) {
    this.state = Object.assign({}, this.state, obj);
  }

  public setOnOff(obj: Object) {
    this.aSetOfOnOff = Object.assign({}, this.aSetOfOnOff, obj);
  }

  public setList(obj: Object) {
    this.aSetOfList = Object.assign({}, this.aSetOfList, obj);
  }

  public setCalc(obj: Object) {
    this.aSetOfCalc = Object.assign({}, this.aSetOfCalc, obj);
  }

  public addChildrenProp(obj: Object) {
    this.chilrenProps = Object.assign({}, this.chilrenProps, obj);
  }


}