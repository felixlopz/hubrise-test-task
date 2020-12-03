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

Nestor vérifie toutes les 20 secondes grâce à l'utilitaire WebNES si des nouvelles commandes ont été envoyées à HubRise. Une alerte visuelle et sonore vous signale l'arrivée d'une nouvelle commande dans Nestor.

Pour voir la liste des commandes en attente, cliquez sur l'alerte. Pour voir le détail de la commande et la valider, cliquez sur la ligne correspondante.

Dans le cas où une commande contient des lignes intitulées **Article inconnu**, il n'est pas possible de valider la commande. Pour remédier à ce problème, suivez les étapes suivantes :
1. Sélectionnez votre commande pour en voir le détail. Certaines lignes intituées **Article inconnu** sont présentes.
1. Sélectionnez la dernière ligne vide. Votre menu apparaît.
1. Sélectionnez et ajoutez le produit correspondant en vous aidant de la description de la ligne **Article inconnu**.
1. Supprimez la ligne **Article inconnu** désormais remplacée.
1. Répétez ces étapes pour chaque ligne **Article inconnu**.
1. Lorsque toutes ces lignes sont supprimées, validez la commande.

Pour éviter que ce problème se reproduise, vérifiez les codes ref de vos produits. Les articles inconnus sont causés par des codes refs invalides. Pour trouver un code ref, consultez la page [Trouver les codes ref](/apps/nestor/map-ref-codes).

Lorsque le client qui a créé cette commande n'est pas connu de Nestor, une étape d'association du client apparaît avant celle de validation de la commande. Deux choix s'offrent alors à vous :
- Créer un nouveau client.
- Le rattacher à un client connu d'HubRise. Dans ce cas, les informations de la commande seront écrasées par celles provenant d'HubRise.

Lors de cette étape, il vous est demandé de faire le même choix concernant l'adresse.

Après validation de la commande, il est possible que la mise à jour du statut dans HubRise ne soit pas instantanée, celle-ci peut prendre jusqu'à 20 secondes.

## Envoyer les commandes

## Fonctionnalité prévue

Il n'est pour l'instant pas possible de savoir de quelle application (LivePepper, Uber Eats, etc.) provient la commande. Cette fonctionnalité est en cours de développement. Si elle est nécessaire à votre utilisation de Nestor, écrivez à info@svitex.com.
