DOCKER_CLI=docker compose

all: build up populate

up:
	${DOCKER_CLI} up --wait

populate:
	${DOCKER_CLI} exec database psql -U app -d app -f /var/postgres/init.sql

build:
	${DOCKER_CLI} build

down:
	${DOCKER_CLI} down

down-v:
	${DOCKER_CLI} down -v

exec-react:
	${DOCKER_CLI} exec react sh

exec-php:
	${DOCKER_CLI} exec php sh