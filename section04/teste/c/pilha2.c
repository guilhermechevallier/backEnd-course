#include <stdio.h>
 
#define MAX 5
 
typedef struct{
    int dados[MAX];
    int topo;
} Pilha;
 
void inicializar(Pilha *p){
    p->topo = -1;
}
 
int estaVazia(Pilha *p){
    return p->topo == -1;
}
 
int estaCheia(Pilha *p){
    return p->topo == MAX-1;
}
 
int push(Pilha *p, int val){
    if (estaCheia(p)){
        printf("Pilha está cheia!");
        return 0;
    }
    //printf("Antes de incrementar topo: %d\n", p->topo);
    p->topo++;
    //printf("Após  incrementar topo: %d\n", p->topo);
    p->dados[p->topo] = val;
    //printf("Após empilhar: %d\n", p->dados[p->topo]);
    return 1;
}
 
int peek(Pilha *p){
    if (estaVazia(p)){
        printf("Pilha está vazia!");
        return -1;
    }    
    return p->dados[p->topo];
}
 
int pop(Pilha *p, int *removido){
    if (estaVazia(p)){
        printf("Pilha está vazia!");
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
    push(&pilha, 550);
    printf("Peek 1: %d\n", peek(&pilha));
    pop(&pilha, &valor);
    printf("Removido: %d\n", valor);
    printf("Peek 2: %d\n", peek(&pilha));
    pop(&pilha, &valor);
    printf("Removido: %d\n", valor);
    printf("Peek 2: %d\n", peek(&pilha));    

    return 0;
}