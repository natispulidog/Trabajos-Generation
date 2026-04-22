public class Ejercicio3 {
    public static void main(String[] args) {
        char categoria = 'F';

        switch (categoria) {
            case 'B':
                System.out.println("Bebida caliente - IVA 0%");
                break;
            case 'F':
                System.out.println("Bebida fría - IVA 5%");
                break;
            case 'C':
                System.out.println("Comida - IVA 8%");
                break;
            case 'P':
                System.out.println("Postre - IVA 8%");
                break;
            default:
                System.out.println("Categoría no reconocida");
        }
    }
}