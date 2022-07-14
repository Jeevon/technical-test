# technical-test

# Requirements
Docker - https://www.docker.com/get-started/\
Docker Compose - https://docs.docker.com/compose/install/

# App Directory Structure
- **shop**
    - _React App_
- **shop-api**
    - _Loopback 4 Api_
- **data**
    - _volume for mongodb data_

# How to run locally
    docker-compose up -d

This will spawn three docker containers. It may take a while to initialize:

    shop-db: mongo:latest
    shop-api: node:16-slim
    shop-client: node:lts-alpine3.15

The app is accessible on `http://localhost:8080`

The api is on port 3000:
    
    http://localhost:3000/
    http://localhost:3000/openapi.json
    http://localhost:3000/explorer/

Mongodb is set to default port `27017`