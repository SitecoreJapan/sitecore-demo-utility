ARG PARENT_IMAGE

FROM ${PARENT_IMAGE} 

WORKDIR /usr/app
COPY . /usr/app

ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

RUN cd /usr/app \ 
    && npm install \
    && npm run build

CMD ["npm","run","start"]