#!/bin/bash

case $1 in
    up)
        docker-compose up -d --build
    ;;
    down)
        docker-compose down -v
    ;;
esac