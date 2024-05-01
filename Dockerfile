FROM node:alpine

WORKDIR /usr/src/api

COPY . .
COPY ./.env.prod ./.env

RUN npm install --quiet --no-option --no-fund --loglevel=error

RUN npm run build

EXPOSE 5278

CMD ["npm", "run", "start:prod"]
