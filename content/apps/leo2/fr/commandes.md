---
title: Commandes
position: 4
layout: documentation
meta:
  title: Commandes | LEO2 | HubRise
  description: Réceptionner et modifier le statut des commandes HubRise reçues dans LEO2. Connectez vos apps et synchronisez vos données.
---

Lorsque LEO2 est connecté à HubRise, les commandes envoyées à HubRise arrivent automatiquement dans votre logiciel de caisse. Si cela n'est pas le cas, vérifiez que votre serveur HubRise est bien lancé.

## Recevoir des commandes

LEO2 vérifie l'arrivée de nouvelles commandes toutes les 30 secondes.

Pour voir la liste des commandes, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Caisse**.
1. Sélectionnez un vendeur.
1. Cliquez sur la flèche grise en bas de l'écran pour faire défiler les actions possibles, puis cliquez sur **Fonction**.
1. Cliquez sur **Leo2Click - Commandes**.

### Commande avec des produits inconnus

Pour que LEO2 prenne en compte les produits dont le code ref n'est pas reconnu, vous devez créer un produit de remplacement et configurer LEO2 pour que ce dernier remplace les produits inconnus. Sans cette configuration, les produits dont le code ref n'est pas reconnu sont supprimés de la commande. Pour faire cette configuration, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Paramètres et Réglages**.
1. Cliquez sur **HubRise**.
1. Dans le champ **Produit de remplacement pour les codes non trouvés**, cliquez sur l'icône en forme de loupe pour accéder à l'écran **Recherche Article**.
1. Sélectionnez le produit de remplacement. Ce produit remplace chaque produit dont le code ref n'est pas reconnu contenu dans une commande, et prend toutes les informations du produit inconnu, telles que son nom et son prix.

### Produits avec des prix différents

Lorsqu'une commande contient des produits dont le prix ne correspond pas à celui de LEO2, le prix du produit envoyé par HubRise remplace celui de LEO2.

### Détails de la commande

Pour voir les détails d'une commande :

1. Depuis l'écran d'accueil, cliquez sur **Caisse**.
1. Sélectionnez un vendeur.
1. Cliquez sur la flèche grise en bas de l'écran pour faire défiler les actions possibles, puis cliquez sur **Cde Client**.

### Statut de la commande

Les statuts que LEO2 envoie à HubRise sont les suivants :

- *Reçue* : la commande a été reçue.
- *Validée* : la commande a été acceptée.
- *En préparation* : la commande est en cours de préparation.
- *A récupérer* : la commande est prête à être récupérée.
- *En livraison* : la commande est en cours de livraison.
- *Annulée* : la commande a été annulée.
- *Soldée* : la commande a été payée.

Pour modifier le statut d'une commande :

1. Suivez les étapes décrites dans [Recevoir des commandes](/apps/leo2/commandes#recevoir-des-commandes) pour accéder à la liste des commandes.
1. Cliquez sur la colonne **Etat**.
1. Sélectionnez le nouveau statut de la commande.

La mise à jour du statut dans HubRise peut prendre jusqu'à 30 secondes.

## Envoyer les commandes

Cette fonctionnalité est en cours de développement et sera disponible prochainement.