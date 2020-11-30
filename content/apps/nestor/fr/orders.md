---
title: Commandes
position: 4
layout: documentation
meta:
  title: Connexion entre Nestor et HubRise - Recevoir les commandes depuis HubRise
  description: Apprenez à gérer les commandes reçues depuis HubRise dans Nestor. Lancez l'application et suivez ces instructions.
---

À partir du moment où Nestor est connecté à HubRise et le catalogue est synchronisé, plus aucune action n'est requise de votre part. Votre logiciel de caisse va recevoir automatiquement toutes les commandes envoyées à HubRise depuis d'autres applications.

## Recevoir des commandes

Nestor vérifie toutes les 20 secondes grâce à l'utilitaire WebNES si des nouvelles commandes ont été envoyées à HubRise. Une alerte visuelle ainsi que sonore va alors vous signaler dans l'interface de Nestor de la réception de nouvelles commandes.

Cliquer sur cette alerte va vous permettre de voir la liste des commandes en attente. Vous pouvez ensuite sélectionner une commande afin d'en voir le détail et de la valider. Dans le cas où une commande contient des articles inconnus, il vous sera impossible de la valider, tant que vous n'aurez pas saisi manuellement les articles correspondants présents dans votre catalogue et supprimé ces articles inconnus. Pour cela, vous pouvez utiliser la description de l'article inconnu pour vous guider dans le choix du produit correspondant. Ce comportement est lié à des raisons comptables, puisque si l'article est inconnu, il n'est pas possible de lui appliquer un pourcentage de TVA approprié.

Lorsque le client qui a créé cette commande n'est pas connu de Nestor, une étape d'association du client va apparaître avant de pouvoir valider la commande. Deux choix s'offrent alors à vous :
- Créer un nouveau client.
- Le rattacher à un client connu d'HubRise. Dans ce cas, les informations de la commande seront écrasées par celles provenant d'HubRise.

Lors de cette étape, il vous est demandé de faire le même choix concernant l'adresse.

Après validation de la commande, il est possible que la mise à jour du statut dans HubRise ne soit pas instantanée, celle-ci peut prendre jusqu'à 20 secondes.

---

**NOTE IMPORTANTE** Il n'est pour l'instant pas possible de savoir de quelle application (LivePepper, Uber Eats, etc.) provient la commande. Cette fonctionnalité est en cours de développement.

---
