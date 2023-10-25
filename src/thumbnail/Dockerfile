FROM node:20-bullseye

WORKDIR /usr/app
COPY . /usr/app

RUN cd /usr/app \ 
    && npm install \
    && npm run build

CMD ["npm","run","dev"]