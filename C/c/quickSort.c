#include <stdio.h>
#include <stdlib.h>

//TROCA DOIS ELMENTOS DE LUGAR;
void troca(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

//PARTICIONA O VETOR E RETORNA O INDICE DO PIVÔ;
int particiona(int vec[], int baixo, int alto){
    int pivo = vec[alto]; //PIVO E O ULITMO ELEMENTO;
    int i = baixo - 1;
    
    for (int j = baixo; j < alto; j++){
        if (vec[j] < pivo){
            i++;
            troca(&vec[i], &vec[j]);
        }
    }
    
    troca(&vec[i + 1], &vec[alto]);
    return i + 1;
}
//FUNCAO QUICKSORT RECURSIVA COM CONTADOR DE CHAMADAS;
int quickSort(int vec[], int baixo, int alto, int qtd){
    if (baixo < alto){
        int pi = particiona(vec, baixo, alto);
        qtd = quickSort(vec, baixo, pi - 1, qtd);
        qtd = quickSort(vec, pi + 1, alto, qtd);
    }
    return qtd + 1;
}


//FUNCAO PRINCIPAL PARA TESTAR;
int main () {
    int vetor[] = {38, 27, 3, 9, 82, 18};
    int tam = sizeof(vetor) / sizeof(vetor[0]);
    int i;
    int chamadasRecursivas = 0;
    
    printf("Vetor original: ");
    for (i = 0; i < tam; i++) {
        printf("%d ", vetor[i]);
    }

    chamadasRecursivas = quickSort(vetor, 0, tam - 1, 0);

    printf("\nVetor ordenado: ");
    for (i = 0; i < tam; i++) {
        printf("%d ", vetor[i]);
    }

    printf("\nNúmero de chamadas recursivas: %d\n", chamadasRecursivas);

    return 0;
}