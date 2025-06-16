#include <stdio.h>

#define MAX 100

typedef struct {
    int dados[MAX];
    int inicio;
    int fim;
    int tamanho;
} Fila;

void inicializar(Fila *f) {
    f->inicio = 0;
    f->fim = 0;
    f->tamanho = 0;
}

int estaVazia(Fila *f) {
    return f->tamanho == 0;
}

int estaCheia(Fila *f) {
    return f->tamanho == MAX;
}

int enqueue(Fila *f, int valor) {
    if (estaCheia(f)) {
        printf("Fila está cheia\n");
        return 0;
    }

    f->dados[f->fim] = valor;
    f->fim = (f->fim + 1) % MAX;
    f->tamanho++;
    return 1;
}

int peek(Fila *f) {
    if (estaVazia(f)) {
        printf("Fila está vazia\n");
        return -1;
    }

    return f->dados[f->inicio];
}

int dequeue(Fila *f, int *removido) {
    if (estaVazia(f)) {
        printf("Fila está vazia\n");
        return 0;
    }

    *removido = f->dados[f->inicio];
    f->inicio = (f->inicio + 1) % MAX;
    f->tamanho--;
    return 1;
}

int main() {
    Fila fila;
    int valor;

    inicializar(&fila);

    enqueue(&fila, 100);
    enqueue(&fila, 150);
    enqueue(&fila, 30);

    printf("Frente da fila: %d\n", peek(&fila));

    if (dequeue(&fila, &valor)) {
        printf("Removido: %d\n", valor);
    }

    printf("Nova frente da fila: %d\n", peek(&fila));

    return 0;
}