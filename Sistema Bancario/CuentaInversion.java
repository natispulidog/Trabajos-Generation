public class CuentaInversion extends CuentaBancaria {

    private double tasaAnual;
    private int plazoMeses;
    private double penalizacionRetiroAnticipado;

    public CuentaInversion(String numeroCuenta, String titular, double saldo,
                           double tasaAnual, int plazoMeses, double penalizacion) {
        super(numeroCuenta, titular, saldo);
        this.tasaAnual = tasaAnual;
        this.plazoMeses = plazoMeses;
        this.penalizacionRetiroAnticipado = penalizacion;
    }

    @Override
    public String describir() {
        return super.describir() +
                " | Plazo: " + plazoMeses + " meses | Tasa anual: " + tasaAnual + "%";
    }

    @Override
    public double calcularComision() {
        return penalizacionRetiroAnticipado;
    }

    // SOBRECARGA
    public double calcularComision(int mesesTranscurridos) {
        return mesesTranscurridos >= plazoMeses ? 0.0 : penalizacionRetiroAnticipado;
    }

    @Override
    public void realizarRetiro(double monto) {
        setSaldo(getSaldo() - monto - penalizacionRetiroAnticipado);
    }
}