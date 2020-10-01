FROM node:10-stretch-slim
RUN mkdir /build
COPY . /build
EXPOSE 8000
RUN cd ./build && npm install
USER node
CMD ["node", "./build/main.js"]