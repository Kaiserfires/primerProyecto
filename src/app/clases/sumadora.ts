export class Sumadora {
  public numero1: number;
  public numero2: number;
  public resultado: number;
  public operacion: number = 0;

  constructor() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  public calcular() {
    this.operacion = parseInt(this.operacion.toString());
    switch (this.operacion) {
      case 1:
        this.resultado = this.numero1 + this.numero2;
        break;
      case 2:
        this.resultado = this.numero1 - this.numero2;
        break;
      case 3:
        this.resultado = this.numero1 / this.numero2;
        break;
      case 4:
        this.resultado = this.numero1 * this.numero2;
        break;
      default:
        this.resultado = 0;
    }
    this.numero1 = this.resultado;
    this.numero2 = 0;
  }

  public concatenar(valor: number) {
    this.numero2 = this.numero2 * 10 + parseInt(valor.toString());
  }

  public limpiar() {
    this.numero2 = 0;
  }

  public realizarOperacion(operacion: number) {
    this.operacion = parseInt(operacion.toString());
    this.numero1 = this.numero2;
    this.limpiar();
  }

}