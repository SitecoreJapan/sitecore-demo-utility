ARG PARENT_IMAGE

FROM ${PARENT_IMAGE} 

WORKDIR /app
COPY . /app

RUN cd /app \ 
    && npm install \
    && npm run build

CMD ["npm","run","start"]