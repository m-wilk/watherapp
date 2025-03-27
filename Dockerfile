FROM node:22-alpine

WORKDIR /code/app

COPY app/package.json package.json

RUN npm install

COPY ./app .

CMD ["npm", "start"]