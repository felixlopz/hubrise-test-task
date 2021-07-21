---
title: Interface utilisateur
position: 3
layout: documentation
meta:
  title: Interface utilisateur | Expedy | HubRise
  description: Interface utilisateur permettant de configurer et visualiser les impressions. Connectez vos apps et synchronisez vos données.
---

Le back-office de Expedy permet de visualiser et de configurer les paramètres d'impression.

## Impressions

L'impression se fait dès réception de la commande si l'imprimante est sous tension, ou alors mise en attente jusqu'à mise sous tension de l'imprimante.

Expedy affiche un graphique permettant de visualiser le volume d'impression en 30 jours, ainsi que les détails des 10 dernières commandes reçues. Pour y accéder, suivez les étapes suivantes :

1. Depuis la page d'accueil de votre back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante concernée.
   ![Interface utilisateur - Graphique des impressions](../images/003-fr-expedy-graphique-impressions.png)

## Paramètres HubRise

Pour paramétrer les actions à réaliser lorsqu'une commande est reçue depuis HubRise, suivez les étapes suivantes :

1. Depuis la page d'accueil de votre back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante concernée.
1. Faites défiler vers le bas jusqu'à la section **HubRise**.
   ![Interface utilisateur - Paramètres HubRise](../images/002-fr-expedy-hubrise-connecte.png)

Vous pouvez configurer des actions supplémentaires selon le statut de la commande reçue depuis HubRise, comme le décrit le tableau suivant :

| A la réception d'une commande              | Effectuer une des actions supplémentaires suivante ? | Description                                                                           |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| L'imprimer si elle est NOUVELLE (new)      | Non                                                  | Nouvelles commandes automatiquement imprimées                                         |
| L'imprimer si elle est NOUVELLE (new)      | Marquer comme RECUE (received)                       | Nouvelles commandes automatiquement imprimées et notées comme "reçues" sur HubRise    |
| L'imprimer si elle est NOUVELLE (new)      | Marquer comme ACCEPTEE (accepted)                    | Nouvelles commandes automatiquement imprimées et notées comme "acceptées" sur HubRise |
| L'imprimer si elle est RECUE (received)    | Non                                                  | Commandes "reçues" sur HubRise automatiquement imprimées                              |
| L'imprimer si elle est RECUE (received)    | Marquer comme ACCEPTEE (accepted)                    | Commandes "reçues" automatiquement imprimées et notées comme "acceptées" sur HubRise  |
| L'imprimer si elle est ACCEPTEE (accepted) | Non                                                  | Commandes "acceptées" sur HubRise automatiquement imprimées                           |

Pour enregistrer vos modifications, cliquez sur **SAUVEGARDER**.

## Paramètres d'impression

Pour configurer l'entête et le pied de page d'impression, suivez les étapes suivantes :

1. Depuis la page d'accueil de votre back-office Expedy, cliquez sur **Imprimantes**.
1. Cliquez sur le nom de l'imprimante concernée.
1. Faites défiler vers le bas jusqu'à la section **PARAMETRES D'IMPRESSION POUR HUBRISE / SHOPIFY / WIX**.
   ![Interface utilisateur - Paramètres d'impression](../images/004-fr-expedy-parametres-impression.png)
