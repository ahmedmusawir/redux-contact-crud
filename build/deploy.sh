#!/bin/bash

docker build -t moosedev/contact-redux-react-nginx .
docker push moosedev/contact-redux-react-nginx

ssh moose@142.93.105.156 << EOF 
docker pull moosedev/contact-redux-react-nginx:latest
docker stop contact-redux || true
docker rm contact-redux || true
docker rmi moosedev/contact-redux-react-nginx:current || true
docker tag moosedev/contact-redux-react-nginx:latest moosedev/contact-redux-react-nginx:current
docker run -d --restart always --name contact-redux -p 8003:80 moosedev/contact-redux-react-nginx
EOF
