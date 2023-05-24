# Documentação de Instalação da API

## URL para API

https://cryptic-tower-387601.nw.r.appspot.com/

## Requisitos

- Node.js (versão 18.16.0 ou superior)
- Docker (opcional)

## Instalação

1. Clone o repositório da API:

```bash
git clone https://github.com/DjdogeGamer/CEN-API.git
```

2. Navegue para o diretório do projeto:

```bash
cd CEN-API
```

3. Instale as dependências:

```bash
npm install
```

## Configuração

1. Renomeie o arquivo `.env.example` para `.env`.

2. Edite o arquivo `.env` e configure as variáveis de ambiente necessárias, como URLs de banco de dados, chaves de API,
   etc.

### Desenvolvimento

1. Inicie o servidor:

```bash
npm start
```

2. Acesse a API em `http://localhost:3000`.

### Produção

1. Gere a imagem Docker:

```bash
docker build -t cen-api .
```

2. Inicie o container:

```bash
docker run -d -p 3000:3000 cen-api
```

3. Acesse a API em `http://localhost:3000`.

## Hospedagem

A API está hospedada no Google Cloud Platform (GCP) e pode ser acessada em https://cryptic-tower-387601.nw.r.appspot.com/.

### Atualização

1. Faça login no GCP:

```bash
gcloud auth login
```

2. Faça login no projeto:

```bash
gcloud config set project cryptic-tower-387601
```

3. Faça o deploy da API:

```bash
gcloud app deploy
```

## Endpoints

A seguir estão os principais endpoints da API:

- `GET /query?sqlQuery=YOUR_SQL_QUERY&fileName=db.sqlite`: Executa uma consulta SQL no banco de dados e retorna os
  resultados em formato JSON.
- `POST /asset?fileName=filename.extension`: Faz upload de um arquivo para o servidor.

## Contribuição

Se você encontrar algum problema ou tiver alguma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou enviar
um pull request.

## Licença

Este projeto está licenciado sob a Licença GNU General Public License. Veja o arquivo `LICENSE` para mais detalhes.
