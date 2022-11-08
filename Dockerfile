FROM node:14-alpine

WORKDIR /app
ENV PATH /app/node_modules/


COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@4.0.3 -g --silent

COPY  . ./
CMD [ "npm","start" ]