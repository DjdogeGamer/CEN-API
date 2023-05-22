# from base image node
FROM node:8.11-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copying all the files from your file system to container file system
COPY package.json .

# install all dependencies and set LD_LIBRARY_PATH temporarily
RUN export LD_LIBRARY_PATH="/usr/local/lib64/:$LD_LIBRARY_PATH"
RUN npm install

# copy other files as well
COPY ./ .

# expose the port
EXPOSE 3000

# command to run when instantiating an image
CMD ["npm", "start"]
