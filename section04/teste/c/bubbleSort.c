// Online C compiler to run C program online
#include <stdio.h>

void trocar( int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
}

void bubbleSort(int vetor[], int tamanho){
    for (int i = 0; i < tamanho - 1; i++){
        int trocou = 0;
        
        for (int j = 0; j < tamanho - i - 1; j++){
            if (vetor[j] > vetor[j + 1]){
                trocar(&vetor[j], &vetor[j + 1]);
                trocou = 1;
            }
        }
        if (!trocou) break;
    }
}

void imprimirVetor( int vetor[], int tamanho){
    for (int i = 0; i < tamanho; i++){
        printf("%d ", vetor[i]);
    }
    printf("\n");
}

int main() {
    int dados[] = {64, 34, 25, 12, 22, 11, 90};
    int tamanho = sizeof(dados) / sizeof(dados[0]);
    
    printf("Vetor original: \n");
    imprimirVetor(dados, tamanho);
    
    bubbleSort(dados, tamanho);
    
    printf("Vetor Ordenado: \n");
    imprimirVetor(dados, tamanho);
    
    return 0;
}