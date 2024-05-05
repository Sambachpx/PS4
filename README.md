L'objectif du projet est de créer un jeu de puissance 4 connecté ou 2 joueurs peuvent se défier.

Le premier utilisateur choisit un pseudo et obtient l'URL à partager pour inviter les autres joueurs
Le joueur 2 choisit aussi un pseudo et rejoint la partie
Les 2 joueurs choisissent une partie
Le créateur de la partie lance la partie
Les joueurs place des pions à tour de rôle dans une grille de 7x6
Un joueur gagne si 4 pions sont alignés verticalement / horizontalement ou en diagonal
Choix technologiques
Avant de nous lancer dans le code de notre jeu en ligne il est important de poser en amont les choix technologiques

TypeScript
Pour ce projet nous allons utiliser le langage TypeScript qui permettra d'avoir une analyse statique de notre code et un peu plus d'assurance sur le bon fonctionnement de notre application. Ce langage nous permettra aussi de réutiliser des morceaux de code entre notre backend et notre frontend.

Machine à états
Pour représenter la logique de notre jeu nous allons utiliser une machine à états. Cela permet de représenter notre jeu comme une série d'états finie (Lobby d'attente, phase de jeu, victoire...) avec des transitions permettant de passer d'un état à un autre. Cette approche convient parfaitement à un jeu de société qui fonctionne souvent avec des étapes prédéfinie et des actions spécifiques définies par les règles du jeu.

Pour créer cette machine nous allons utiliser Xstate qui offre un très bon support de TypeScript.

Front-end React
Pour le front end nous allons utiliser une librairie qui permettra de mettre à jour la vue en fonction de l'état de notre partie. On pourrait utiliser n'importe quelle librairie ici mais j'ai fait le choix de React car c'est le plus populaire (et qui intérèssera le plus de monde).

NodeJS & WebSocket
Pour permettre à nos 2 joueurs de jouer ensemble nous allons utiliser un serveur pour gérer l'état de notre jeu et synchroniser les actions. Nous allons utiliser la technologie NodeJS qui nous permettra de partager un maximum de code entre notre backend et notre frontend. La communication elle peut se faire au travers de différents protocoles

HTTP, permet une communication client -> serveur
Server Sent Event, permet une communication serveur -> client
WebSocket, permet une communication dans les 2 sens serveur <-> client
WebRTC, permet une communication direct entre 2 clients
Dans notre situation les websockets sont le meilleurs choix car l'utilisateur doit pouvoir envoyer ses actions au serveur mais aussi recevoir les mises à jours de l'état de notre jeu.

Test EndToEnd
Si vous voulez vous aventurez à créer un jeu voici le test playwright
