# Hamburgueria API

Uma aplicação simples para gerenciar pedidos de uma hamburgueria, construída com Node.js e Express.

## Rotas

### POST /order

Esta rota recebe o pedido do cliente, o nome do cliente e o valor do pedido no corpo da requisição e registra o novo pedido em um array.

**Exemplo de corpo da requisição:**
```json
{
  "order": "X-Salada, 2 batatas grandes, 1 coca-cola",
  "clientName": "José",
  "price": 44.50
}
Exemplo de resposta:

json
Copy code
[
  {
    "id": "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    "order": "X-Salada, 2 batatas grandes, 1 coca-cola",
    "clientName": "José",
    "price": 44.50,
    "status": "Em preparação"
  }
]
GET /order
Esta rota lista todos os pedidos já feitos.

Exemplo de resposta:

json
Copy code
[
  {
    "id": "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    "order": "X-Salada, 2 batatas grandes, 1 coca-cola",
    "clientName": "José",
    "price": 44.50,
    "status": "Em preparação"
  },
  {
    "id": "b9a87544-f2ce-4d82-a012-7e05d8d91c82",
    "order": "X-Bacon, 1 batata média, 1 fanta",
    "clientName": "Maria",
    "price": 37.00,
    "status": "Pronto"
  }
]
PUT /order/:id
Esta rota altera um pedido já feito. Pode alterar um ou todos os dados do pedido. O ID do pedido deve ser enviado nos parâmetros da rota.

DELETE /order/:id
Esta rota deleta um pedido já feito com o ID enviado nos parâmetros da rota.

GET /order/:id
Esta rota recebe o ID nos parâmetros e retorna um pedido específico.

PATCH /order/:id
Esta rota recebe o ID nos parâmetros e altera o status do pedido para "Pronto".

Como Executar
Certifique-se de ter o Node.js e o npm instalados em sua máquina.
Clone este repositório: git clone https://github.com/seu-usuario/hamburgueria-api.git
Instale as dependências: npm install
Inicie o servidor: npm start
Acesse as rotas através do endereço http://localhost:3000
Tecnologias Utilizadas
Node.js
Express

