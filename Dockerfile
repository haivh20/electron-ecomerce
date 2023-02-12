FROM node:19-alpine3.15

WORKDIR /usr/src/app

COPY package*.json .

RUN  npm install

COPY . .

CMD [ "npm" , "run" , "build" ]
