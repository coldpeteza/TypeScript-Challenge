## SOLUTION

Please document your solution here

###Build the docker image from the file
- docker build -t pclocs:latest . 

####Run the container as a temporary item
- docker container run -it --rm --name pclocs pclocs bash

####Run the container in the background
- docker container run -dit --name pclocs pclocs

####Run the container mapping the ports
- docker container run -dit --name pclocs -p 3000:3000 pclocs bash

####Run autoreload
- npm run nodemon
- docker network create --driver bridge test-net

####mongo load
- docker container run -dit --name mongo --network container:pclocs mongo
- docker container run -dit --name mongo -p 27017:27017 mongo

docker-compose up
docker-compose stop
docker-compse rm | y
