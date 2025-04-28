<?php
  
  $nome = "Victor Araujo";
  $idade = 33;
  $cpf = "050.698.741-45";
  echo "Nome: ".$nome." <br> Idade: ".$idade." <br>CPF: ".$cpf."<br>";
  #Estrutura de controle
  //Outra forma de comentar 
  if ($idade > 33) {
    echo "A idade é maior que 33 anos.";
   } elseif ($idade == 33) {
    echo "A idade é igual a 33 anos.";
   } else {
    echo "A idade é menor que 33 anos.";
   }
  echo "<hr>";

  #Estrutura de Repetição
   for ($i = 0; $i <= $idade; $i++) {
    echo "$i|";
    }
  
 


?>