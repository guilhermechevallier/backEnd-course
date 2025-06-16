#include <stdio.h>
#include <stdlib.h>


//JUNTA OS PEDACOS NUM NOVO VETOR ORDENADO;

void junta(int vec[], int tam) {
    int i, j, k;
    int meio;
    int* tmp;
    
    tmp = (int*)malloc(tam * sizeof(int));
    
    if (tmp == NULL){
        exit(1);
    }
    meio = tam / 2;
    i = 0;
    j = meio;
    k = 0;
    
    while (i < meio && j < tam){
        if (vec[i] < vec[j]) {
            tmp[k] = vec[i];
            ++i;
        } else {
            tmp[k] = vec[j];
            ++j;
        }
        ++k;
    }
    
    if (i == meio){
        while (j < tam) {
            tmp[k] = vec[j];
            
            ++j;
            
            ++k;
        }
    } else {
        while (i < meio) {
            tmp[k] = vec[i];
            ++i;
            ++k;
        }
    }
    
    for (i = 0; i < tam; ++i) {
        vec[i] = tmp[i];
    }
    
    free(tmp);
}

//APLICA O MODO MERGESORT;
int mergeSort(int vec[], int tam, int qtd){
    int meio;
    
    if (tam > 1){
        meio = tam / 2;
        qtd = mergeSort(vec, meio, qtd);
        qtd = mergeSort(vec + meio, tam - meio, qtd);
        junta(vec, tam);
    }
    
    return (qtd+1);
}

int main() {
    int vetor[] = {100, 30, 27, 230, 43, 3, 9, 81, 10};
    int tam = sizeof(vetor) / sizeof(vetor[0]);
    int i;
    int chamadasRecursivas = 0;
    
    printf("Vetor original: ");
    for (i = 0; i < tam; i++) {
        printf("%d ", vetor[i]);
    }
    
    chamadasRecursivas = mergeSort(vetor, tam, 0);
    
    printf("\nVetor ordenado: ");
    for (i = 0; i < tam; i++){
        printf("%d ", vetor[i]);
    }
    
    printf("\nNúmero de chamadas recursivas: %d\n", chamadasRecursivas);
    
    return 0;
}