#!/bin/bash
set -e

git clone https://github.com/Place1/react-animated-writer.git
cd react-animated-writer

docker build -t tmp-master .
docker run -d --restart unless-stopped --name master-typewriter tmp-master

git checkout features/green-background
docker build -t tmp-feature .
docker run -d --restart unless-stopped --name features-new-background-typewriter tmp-feature

sudo docker run -d -p "8080:8080" -p "80:80" -v /var/run/docker.sock:/var/run/docker.sock traefik --docker --docker.domain=codemo.com --docker.watch --web

echo 'done'
