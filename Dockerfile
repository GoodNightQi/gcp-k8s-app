FROM node:latest

WORKDIR /root/demo

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]