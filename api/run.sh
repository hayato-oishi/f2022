#!/bin/bash

case $1 in
    up)
        docker-compose up -d --build
        docker logs -f app
    ;;
    down)
        docker-compose down -v
    ;;
esac