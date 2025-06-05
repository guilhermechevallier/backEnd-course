#include <stdio.h>
#include <stdlib.h>
int xi;
int *ptr_xi;

int main() {
    xi = 10;
    ptr_xi = &xi;

    printf("Value of xi: %d\n", xi);
    printf("Address of xi: %p\n", (void*)&xi);
    printf("Value of ptr_xi: %p\n", (void*)ptr_xi);
    printf("Value pointed to by ptr_xi: %d\n", *ptr_xi);

    return 0;

}