<?php
    $nome = "lucas";
    $idade = 21;
    $cpf = "123.456.789-00";
    
    echo "$nome";
    echo $nome.$idade;
    
    
    #Estrutura de controle
    
    if ($idade >= 18) {
        echo "maior de idade";
        } else {
            echo "menor de idade";
    }
    
    #Estrutura de repetição
    
    for ($i = 0; $i <= $idade; $i++) {
        echo "$i";
    }
        
?>
