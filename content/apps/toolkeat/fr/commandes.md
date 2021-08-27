---
title: Commandes
position: 4
layout: documentation
meta:
  title: Commandes | Toolkeat | HubRise
  description: Envoyer les commandes Toolkeat et leurs mises à jour de statuts vers HubRise. Connectez vos apps et synchronisez vos données.
---

## Envoyer des commandes

Pour voir la liste des commandes envoyées depuis Toolkeat, sélectionnez **RestroPress** > **Orders** dans le menu latéral.

### Détails de la commande

Pour voir les détails d'une commande :

1. Dans le menu latéral, sélectionnez **RestroPress** > **Orders**.
1. Cliquez sur l'icône **Preview**.

### Statut de la commande

Les statuts que Toolkeat envoie à HubRise sont les suivants :

- _Pending_ : la commande est en attente d'acceptation.
- _Accepted_ : la commande a été acceptée.
- _Processing_ : la commande est en cours de préparation.
- _Ready_ : la commande est prête.
- _In Transit_ : la commande est en cours de livraison.
- _Cancelled_ : la commande a été annulée.
- _Completed_ : la commande est terminée.

Pour modifier le statut d'une commande :

1. Dans le menu latéral, sélectionnez **RestroPress** > **Orders**.
1. Dans la colonne **Order Status**, sélectionnez le nouveau statut.

Toolkeat reçoit aussi les mises à jour de statut provenant de HubRise. La table de correspondance ci-dessous indique le mapping entre les statuts de HubRise et ceux de Toolkeat.

| HubRise               | Toolkeat     |
| --------------------- | ------------ |
| `new`                 | `pending`    |
| `received`            | `pending`    |
| `accepted`            | `accepted`   |
| `in_preparation`      | `processing` |
| `awaiting_shipment`   | `ready`      |
| `awaiting_collection` | `ready`      |
| `in_delivery`         | `transit`    |
| `completed`           | `completed`  |
| `rejected`            | `cancelled`  |
| `cancelled`           | `cancelled`  |
| `delivery_failed`     | `cancelled`  |
