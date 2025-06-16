#include <stdio.h>

//funcao para realizar o shell sort;
void shellSort(int vetor[], int tamanho) {

    //comeca com um intervalo grande, depois vai diminiuindo;
    for (int gap = tamanho / 2; gap > 0; gap /= 2) {
        //faz uma ordernacao por insercao para cada subvetor criado pelo gap;
        for (int i = gap; i < tamanho; i++) {

            int temp = vetor[i];
            int j = i;

            for (j = i; j >= gap && vetor[j - gap] > temp; j -= gap) {
                vetor[j] = vetor[j - gap];
            }

            vetor[j] = temp;
        }
    }
}

//funcao para imprimir o vetor;
void imprimirVetor(int vetor[], int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");
}

//funcao principal;
int main() {
    int dados[] = {64, 34, 25, 12, 22, 11, 90, 18};
    int tamanho = sizeof(dados) / sizeof(dados[0]);

    printf("Vetor original: \n");
    imprimirVetor(dados, tamanho);

    shellSort(dados, tamanho);

    printf("Vetor Ordenado: \n");
    imprimirVetor(dados, tamanho);

    return 0;
}
