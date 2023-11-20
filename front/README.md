# Projet Garage V.Parrot
Ce projet étudiant m'a fait découvrir différentes technologies telles que Docker, React ou encore Symfony. Elle a pour rôle pédagogique de démontrer les différentes compétences propres aux métiers du développement web, allant de la conception à la réalisation complète d'un site web.

## Prérequis

- Installer [Docker](https://docs.docker.com/get-docker/)

## Démarrer le projet en local

### Étape 1 :
Lancer la commande
```
make all
```
Cette commande lancera les containers et initialisera la base de données.

### Étape 2:

Le certificat SSL du back étant auto-signé, il faut accepter les risques en allant sur la page de l'API [https://localhost/api](https://localhost/api).

### Étape 3:

Se rendre sur le localhost [http://localhost:3000](http://localhost:3000) dans votre navigateur pour accéder au site.

## État du projet :

La construction du site étant toujours en cours, la partie authentification n'est pas encore gérée. Pour accéder au dashboard administrateur, il faut passer par l'url [https://localhost:3000/admin](http:s//localhost:3000/admin) pour y accéder.

## Quelques commandes utiles:
```
make up
```
Permet de démarrer les containers.
```
make down
```
Permet de stopper les containers.
```
make down -v
```
Permet aussi de supprimer les volumes.
```
make build
```
Permet de créer les images.

Auteur : [Sami Noirot](https://github.com/MyNameIsNoobody)