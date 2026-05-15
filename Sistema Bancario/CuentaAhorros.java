public class CuentaAhorros extends CuentaBancaria {

    private double tasaInteresMensual;
    private double saldoMinimo;

    public CuentaAhorros(String numeroCuenta, String titular,
                         double saldo, double tasaInteresMensual, double saldoMinimo) {
        super(numeroCuenta, titular, saldo);
        this.tasaInteresMensual = tasaInteresMensual;
        this.saldoMinimo = saldoMinimo;
    }

    @Override
    public String describir() {
        return super.describir() +
                " | Tasa mensual: " + tasaInteresMensual + "%";
    }

    @Override
    public double calcularComision() {
        return getSaldo() >= saldoMinimo ? 0.0 : 12000.0;
    }

    // SOBRECARGA
    public void realizarRetiro(double monto, boolean esUrgente) {
        realizarRetiro(monto);
        if (esUrgente && getSaldo() < saldoMinimo) {
            setSaldo(getSaldo() - calcularComision());
        }
    }

    public double calcularInteresDelMes() {
        return getSaldo() * tasaInteresMensual / 100;
    }
}
