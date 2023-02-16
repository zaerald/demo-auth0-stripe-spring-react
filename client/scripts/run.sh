#/bin/bash

npm run build
docker build -t zaerald/demo-auth0-stripe-client .
docker run -dp 3000:80 --name demo-client zaerald/demo-auth0-stripe-client

