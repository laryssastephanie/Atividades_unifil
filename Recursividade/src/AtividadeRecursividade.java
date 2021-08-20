import java.util.Scanner;

public class AtividadeRecursividade {

    public static void main(String[] args) {

        String resp = "";

        do {

            Scanner leia = new Scanner(System.in);

            System.out.println("** Contador de caracteres **");
            System.out.println("Informe o texto: ");
            String input = leia.next();

            int qntdChar = countChar(input);

            System.out.println("O texto '" + input + "' contém " + qntdChar + " caracteres.");
            System.out.print("Deseja informar outro texto? <S/N>");
            resp = leia.next();

        } while(resp.toUpperCase().equals("S"));

    }

    public static int countChar(String texto){
        // Retornar 0 caso parâmetro for vazio
        if(texto.isEmpty()) {
            return 0;
        }
        return 1 + countChar(texto.substring(1));

    }
}