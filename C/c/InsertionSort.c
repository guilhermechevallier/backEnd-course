#include <stdio.h>

void insertionSort (int vetor[], int tamanho) {
    for (int i = 1; i < tamanho; i++) {
        int chave = vetor[i];
        int j = i - 1;

        // Move os elementos do vetor que são maiores que a chave
        // para uma posição à frente de sua posição atual
        while (j >= 0 && vetor[j] > chave) {
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = chave;
    }
}

void imprimirVetor(int vetor[], int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        printf("%d ", vetor[i]);
    }
    printf("\n");
}

int main() {
    int dados[] = {64, 34, 25, 12, 22, 11, 90};
    int tamanho = sizeof(dados) / sizeof(dados[0]);

    printf("Vetor original: \n");
    imprimirVetor(dados, tamanho);

    insertionSort(dados, tamanho);

    printf("Vetor Ordenado: \n");
    imprimirVetor(dados, tamanho);

    return 0;
}