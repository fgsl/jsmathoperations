export function multiplicar(numero1,numero2)
{
    let contador1 = 0;
    let contador2 = 0;
    let produto = 0;


    while (contador1 < numero1) {
        contador2 = 0;
        while (contador2 < numero2) {
            produto++; // $produto = $produto + 1;
            contador2++;
        }
        contador1++;
    }
}
