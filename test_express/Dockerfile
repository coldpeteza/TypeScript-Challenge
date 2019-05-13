FROM node:latest
MAINTAINER Peter Ziersch
LABEL name=pclocs
VOLUME /data
WORKDIR /data
ADD package.json /data/app/package.json
CMD npm install
COPY . /data/app
EXPOSE 3000
WORKDIR /data/app
ENTRYPOINT npm start

