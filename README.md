
# Instagram Giveaway Code

Programa Node.js para fazer sorteio em uma publicação do Instagram


## Referência

 - [Vídeo explicativo da Adriana Saty](https://www.youtube.com/watch?v=qe9rIetOBeA)


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu __.env__

`INSTAGRAM_SESSION_ID` (O id da sessão ativa no Instagram. Você pode visualizar nos cookies da sessão).


## Como executar

Clone o projeto

```bash
  git clone https://github.com/lucivaldo/instagram-giveaway-code
```

Entre no diretório do projeto

```bash
  cd instagram-giveaway-code
```

Instale as dependências

```bash
  yarn
```

Execute a aplicação

```bash
  node index.js [postId]
```

Será criado o arquivo __goldenTicket.json__ com as informações do ganhador do sorteio.

## Uso/Exemplos

- Com o Instagram aberto, clique em alguma publicação que você queira sortear algum comentário.
- Copie o código da publicação que está na URL do navegador.
- Execute o comando abaixo com o código da publicação (Deve substituir o código de exemplo abaixo pelo código que você copiou).

```bash
node index.js CbXfY6GO8GG
```

Consultar o arquivo __goldenTicket.json__ para ver o ganhador do sorteio.
