interface IOptions {
  scene: string | HTMLElement;
}
export default class DrawChart {
  static defaultOptions: IOptions = {
    scene: document.querySelector('body'),
  };
  private snap: Snap;
  private svgEl: HTMLElement;
  private sceneEl: HTMLElement;
  private options: IOptions;

  constructor(options: IOptions) {
    this.options = Object.assign({}, DrawChart.defaultOptions, options);
    const { scene } = this.options;
    this.setSceneEl(scene);
    this.createSvgContainer(this.sceneEl);
    this.createSnap(this.svgEl);
  }

  /**
   * 设置scene对象
   * @param id
   */
  private setSceneEl(id: string | HTMLElement) {
    if (typeof id === 'string') {
      const el: HTMLElement = document.querySelector(`#${id}`);
      if (!el) throw `指定的${id}不存在`;
      this.sceneEl = el;
    } else if (id instanceof HTMLElement) {
      this.sceneEl = id;
    } else {
      throw `请指定HTML元素为scene`;
    }
  }

  /**
   * 创建svg容器
   * @param el HTMLElement
   */
  public createSvgContainer(el: HTMLElement) {
    const svgEl: HTMLElement = document.createElement('svg');
    svgEl.style.width = '100%';
    svgEl.style.height = '100%';
    el.appendChild(svgEl);
    this.svgEl = svgEl;
  }

  public createSnap(el: HTMLElement) {
    this.snap = new Snap(el);
  }
  public draw() {}
}
