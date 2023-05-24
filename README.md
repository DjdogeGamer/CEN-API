# API Install Instructions Documentation | Instruções da API para instalação   

## API URL | URL da API

* https://cen-api.nw.r.appspot.com

## Requirements | Requisitos

- Node Version Manager - NVM (optional)
- Node.js (18.16.0 or superior)
- Docker (optional)

## Instalation | Instalação

1. Clone the API repository | Clone o repositório da API:

```bash
git clone https://github.com/DjdogeGamer/CEN-API.git
```

2. Navigate to the API directory | Navegue até o diretório da API:

```bash
cd CEN-API
```

3. Install dependencies | Instale as dependências:

```bash
npm install
```

## Configuration | Configuração

1. Rename the `.env.example` file to `.env` | Renomeie o arquivo `.env.example` para `.env`

2. Edit the `.env` file and set the following variables | Edite o arquivo `.env` e defina as seguintes variáveis:

### Development | Desenvolvimento

1. Start the Server | Inicie a Server:

```bash
npm start
```

2. Acesse a API em `http://localhost:3000`.

### Production | Produção

1. Build the Docker image | Construa a imagem Docker:

```bash
docker build -t cen-api .
```

2. Run the Docker image | Execute a imagem Docker:

```bash
docker run -d -p 3000:3000 cen-api
```

3. Access in | Acesse Em `http://localhost:3000`.

## Deployment | Implantação

A API está hospedada no Google Cloud Platform (GCP) e pode ser acessada em:   
The API is hosted at Google Cloud Platform (GCP) and it can be accessed in:   

* https://cen-api.nw.r.appspot.com

### Update the API | Atualize a API

1. Login to the GCP Account | Faça login no GCP Account:

```bash
gcloud auth login
```

2. Set the GCP Project | Defina o projeto GCP:

```bash
gcloud config set project cryptic-tower-387601
```

3. Deploy the API | Implante a API:

```bash
gcloud app deploy
```

## Endpoints

### Available endpoints | Endpoints disponíveis:

- `GET /query?sqlQuery=YOUR_SQL_QUERY&fileName=db.sqlite`: Executa uma query no banco de dados e retorna o resultado em um arquivo JSON | Execute a query in the database and return the result in a JSON file.

- `GET /asset?fileName=filename.extension`: Retorna um arquivo de mídia | Returns a media file.

## Contributing | Contribuindo

Se você encontrar algum problema ou tiver alguma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request. | If you find any problems or have any suggestions for improvement, feel free to open an issue or send a pull request.

## License | Licença

[General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)
