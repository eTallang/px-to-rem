export class Spark {
  private readonly dir = Math.round(Math.random()) * 2 - 1;
  private readonly hpReducedPerTick = Math.max(0.0015, Math.random() * 0.0025);
  private hpLeft = 1;
  private size = this.getRandomSize();
  private sinCounter = Math.random() * 2 - 1;
  private maxHeight = this.getRandomMaxHeight();

  private readonly styles = getComputedStyle(document.documentElement);
  private color = this.styles.getPropertyValue("--spark-color");
  private glowColor = this.styles.getPropertyValue("--primary-color");

  constructor(private ctx: CanvasRenderingContext2D, private posX: number) {
    this.hpLeft = Math.random();
  }

  reRender() {
    this.updateValues();
    this.createSpark();
  }

  updateValues() {
    this.hpLeft = Math.max(0, this.hpLeft - this.hpReducedPerTick);
    this.sinCounter = this.sinCounter + 0.05;

    if (this.hpLeft <= 0) {
      this.size = this.getRandomSize();
      this.maxHeight = this.getRandomMaxHeight();
      this.sinCounter = Math.random() * 2 - 1;
      this.hpLeft = 1;
    }
  }

  private getRandomSize() {
    return 1 + Math.random() * 2;
  }

  private getRandomMaxHeight() {
    const windowHeight = window.innerHeight;
    return 300 + Math.random() * windowHeight;
  }

  private createSpark() {
    const calculatedSize = this.size * this.hpLeft;
    const posY = (1 - this.hpLeft) * this.maxHeight;
    const xPosWithOffset =
      this.posX + Math.sin(this.sinCounter) * this.dir * 10 * calculatedSize;

    this.ctx.beginPath();
    this.ctx.arc(xPosWithOffset, posY, calculatedSize, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.shadowColor = this.glowColor;
    this.ctx.shadowBlur = 10;
  }
}
