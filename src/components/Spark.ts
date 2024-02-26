export class Spark {
  private readonly dir = Math.round(Math.random()) * 2 - 1;
  private readonly hpReducedPerTick = Math.max(0.0015, Math.random() * 0.0025);
  private hpLeft = Math.random();
  private size = this.getRandomSize();
  private sinCounter = Math.random() * 2 - 1;
  private maxHeight = this.getRandomMaxHeight();

  private color = ''
  private glowColor = '';

  constructor(private ctx: CanvasRenderingContext2D, private posX: number) {
    const styles = getComputedStyle(document.documentElement);
    this.color = styles.getPropertyValue("--spark-color");
    this.glowColor = styles.getPropertyValue("--primary-color");
  }

  update() {
    this.hpLeft = Math.max(0, this.hpLeft - this.hpReducedPerTick);
    this.sinCounter = this.sinCounter + 0.05;

    if (this.hpLeft <= 0) {
      this.hpLeft = 1;
      this.sinCounter = Math.random() * 2 - 1;
      this.size = this.getRandomSize();
      this.maxHeight = this.getRandomMaxHeight();
    }

    this.createSpark();
  }

  private getRandomSize() {
    return 0.5 + Math.random() * 1.5;
  }

  private getRandomMaxHeight() {
    const windowHeight = window.innerHeight;
    return 300 + Math.random() * windowHeight * 1.5;
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
