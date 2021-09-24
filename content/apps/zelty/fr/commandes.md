---
title: Commandes
position: 4
layout: documentation
meta:
  title: Commandes | Zelty | HubRise
  description: Réceptionner et modifier le statut des commandes HubRise reçues dans Zelty. Connectez vos apps et synchronisez vos données.
---

Une fois que HubRise est connecté à Zelty et que les codes ref ont été associés, aucune autre action n'est nécessaire. Votre solution d'encaissement Zelty recevra automatiquement toutes les commandes envoyées à HubRise par d'autres applications.

## Recevoir des commandes

Lorsque vous recevez une nouvelle commande dans votre solution d'encaissement, une notification apparaît et la commande devient disponible dans la liste des commandes.

Pour afficher la liste des commandes :

1. Accédez au **Tableau de bord**.
1. Cliquez sur **Statistiques**.
1. Sélectionnez l'onglet **Tickets**.

Si vous avez correctement connecté Zelty à HubRise et associé tous les codes ref sur d'autres applications, mais que les commandes ne sont pas reçues automatiquement et que vous souhaitez en connaître la raison, consultez la section [Dépannage](/apps/zelty/depannage). Vous pouvez également vérifier chaque transaction dans les logs de HubRise. Pour plus d'informations, consultez la section [Logs](/docs/data/#logs) du guide de l'utilisateur de HubRise.

## Données des commandes

Lorsque le client choisit de payer à la livraison ou à l'enlèvement, aucune information de paiement ne doit être envoyée à la solution d’encaissement de Zelty, puisque cela mettrait fin à la transaction.
