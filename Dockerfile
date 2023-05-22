# Use a imagem base do Windows Server Core
FROM node:latest

# Crie o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json (se houver)
COPY package.json .
COPY package-lock.json .

# Defina a variável de ambiente LD_LIBRARY_PATH temporariamente
ENV LD_LIBRARY_PATH="/usr/local/lib64/:$LD_LIBRARY_PATH"

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que a aplicação utiliza
EXPOSE 3000

# Comando para executar a aplicação
CMD ["npm", "start"]

