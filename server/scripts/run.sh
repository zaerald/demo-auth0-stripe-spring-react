#/bin/bash

./gradlew build
docker build -t zaerald/demo-auth0-stripe-server .
docker run -dp 8080:8080 --name demo-server --env-file .env zaerald/demo-auth0-stripe-server
