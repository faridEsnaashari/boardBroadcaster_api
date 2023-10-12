# specify the node base image with your desired version node:<version>
FROM node:lts-alpine

# replace this with your application's default port
EXPOSE 3001

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install --force

COPY . .

CMD [ "npm", "run", "start:production" ]
