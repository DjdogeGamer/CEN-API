# Use a imagem do ECR
FROM mcr.microsoft.com/windows/servercore:ltsc2019

# Crie o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json (se houver)
COPY package.json .
COPY package-lock.json .

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que a aplicação utiliza
EXPOSE 3000

# Comando para executar a aplicação
CMD ["npm", "start"]

