export class Spark {
  private xOrigin = 0;
  private y = 0;
  private dy = 1 + Math.random() * 3;
  private temperature = 0.01 + this.dy / 100;

  private dx = 0;
  private radius = this.getRandomRadius();
  private color = "";
  private glowColor = "";

  constructor(private ctx: CanvasRenderingContext2D, private x: number) {
    const styles = getComputedStyle(document.documentElement);
    this.color = styles.getPropertyValue("--spark-color");
    this.glowColor = styles.getPropertyValue("--primary-color");
    this.xOrigin = this.x;
  }

  reRender() {
    this.updateValues();
    this.createSpark();
  }

  updateValues() {
    this.dx += this.temperature;
    this.x += Math.sin(this.dx) * 1.4;
    this.y += this.dy;
    this.radius = this.radius - this.temperature * 0.2;

    if (this.radius <= 0) {
      this.radius = this.getRandomRadius();
      this.y = 0;
      this.x = this.xOrigin;
      this.dx = 0;
    }
  }

  private getRandomRadius() {
    return 1 + Math.random() * 3;
  }

  private createSpark() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.shadowColor = this.glowColor;
    this.ctx.shadowBlur = 10;
  }
}
