# Tutorial de Utilização da API

## Criar Usuário

### POST /rota/users

Cria um novo usuário.

Fornecer essas informações no formato JSON:

```json
{
    "name": "string",
    "username": "string",
    "age": "number",
    "email": "string",
    "password": "string"
}

Criar Post
POST /rota/posts
Cria um novo post.

Fornecer essas informações no formato JSON:

{
    "title": "string",
    "content": "string"
}

Listar Usuários
GET /rota/users
Lista todos os usuários.

Atualizar Usuário
PUT /rota/users/:id
Atualiza os dados de um usuário.

Fornecer o email nos parâmetros e essas informações no formato JSON:

{
    "username": "string",
    "name": "string",
    "age": "number",
    "password": "string"
}

Deletar Usuário
DELETE /rota/users/:id
Deleta um usuário.

Fornecer o ID do usuário nos parâmetros.

Adicionar Comentário a um Post
POST /rota/comments/:postID
Adiciona um comentário a um post.

Fornecer o ID do post nos parâmetros e essa informação no formato JSON:

{
    "content": "string"
}

Buscar Todos os Posts
GET /rota/posts
Busca todos os posts.

Buscar Post Específico
GET /rota/posts/:id
Busca o post com o ID especificado.

Fornecer o ID do post nos parâmetros.

Criar Post Associado a um Usuário
POST /rota/userPost
Cria um post, associando-o a um usuário.

Fornecer o email do usuário nos parâmetros e essas informações no formato JSON:
{
    "title": "string",
    "content": "string"
}
