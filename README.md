# Puissance 4 Samba

L'objectif du projet est de créer un jeu de puissance 4 (hors lige) où 2 joueurs peuvent se défier en local

## Règles du P4

1. Le premier joueur choisit un pseudo
2. Le deuxième joueur choisit aussi un pseudo
3. Les 2 joueurs commencent une partie
4. Les joueurs placent des pions à tour de rôle dans une grille de 7x6
5. Un joueur gagne si 4 pions sont alignés verticalement, horizontalement ou en diagonale

## Choix des technologies

### TypeScript

Pour ce projet, nous utilisons le langage TypeScript qui permet une analyse statique de notre code et offre plus d'assurance sur le bon fonctionnement de notre application. Ce langage nous permet aussi de réutiliser des morceaux de code entre notre backend et notre frontend

### Front-end React

Pour le front-end, nous utilisons React, une librairie qui permet de mettre à jour la vue en fonction de l'état de notre partie

## Lancer le projet

1. Clonez le dépôt : `git clone https://github.com/Sambachpx/PS4.git`
2. Installez les dépendances : `npm install`
3. Lancez le serveur : `npm run dev`
4. Accédez à `http://localhost:3000`
5. Entrez un pseudo pour le joueur 1 et un pseudo pour le joueur 2
6. Jouez au Puissance 4 (en appuyant au préalable sur le bouton "Commencer à jouer" sinon la partie ne se lancera pas)
