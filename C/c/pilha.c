// Online C compiler to run C program online
#include <stdio.h>

#define MAX 5

typedef struct {
    int dados[MAX];
    int topo;
}Pilha;

void inicializar (Pilha *p){
    p->topo = -1;    
}

int estaVazia(Pilha *p){
    return p->topo == -1;
}

int estaCheia(Pilha *p){
    return p->topo == MAX-1;
}

int push(Pilha *p, int valor){
    if (estaCheia(p)){
        printf("Pilha esta cheia!");
        return 0;
    }
    
    printf("ANTES DE INCREMENTAR TOPO: %d\n", p->topo);
    p->topo++;
    
    printf("APOS DE INCREMENTAR TOPO: %d\n", p->topo);
    p->dados[p->topo] = valor;
    
    printf("APOS EMPILHAR: %d\n", p->dados[p->topo]);
    return 1;
}

int peek(Pilha *p){
    if(estaVazia(p)){
        printf("Pilha esta vazia");
        return -1;
    }
    return p->dados[p->topo];
}

int pop(Pilha *p, int *removido){
    if(estaVazia(p)){
        printf("Pilha esta vazia");
        return 0;
    }
    
    *removido = p->dados[p->topo];
    p->topo--;
    
    return 1;
}

int main() {
    Pilha pilha;
    int valor;
    
    inicializar(&pilha);    
    
    push(&pilha, 100);
    push(&pilha, 250);
    push(&pilha, 500);
    
    printf("VALOR 1: %d\n", peek(&pilha));

    pop(&pilha, valor);
    printf("REMOVIDO: %d\n", &valor);
    printf("VALOR 1: %d\n", peek(&pilha));
    
    
    return 0;
}