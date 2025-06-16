// Função que simula o processamento de um pedido
function processarPedido(pedido, callback) {
  console.log(`Processando pedido #${pedido.id} para ${pedido.cliente}...`);

  // Simulando tempo de processamento com setTimeout
  setTimeout(() => {
    console.log("Pedido processado com sucesso!");
    
    // Agora chamamos o callback para enviar o e-mail
    callback(pedido);
  }, 2000); // 2 segundos de "processamento"
}
  
// Função que envia um e-mail de confirmação (callback)
function enviarEmailConfirmacao(pedido) {
  console.log(`Enviando e-mail de confirmação para ${pedido.cliente} no endereço ${pedido.email}...`);
  console.log(`Assunto: Pedido #${pedido.id} confirmado`);
}
  
// Simulando um pedido
const pedidoExemplo = {
  id: 1024,
  cliente: "Maria Fernandes",
  email: "maria.fernandes@empresa.com"
}

// Chamando a função com o callback
processarPedido(pedidoExemplo, enviarEmailConfirmacao);  