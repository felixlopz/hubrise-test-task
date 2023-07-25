---
title: Gérer les commandes
path_override: gerer-commandes
position: 5
layout: documentation
meta:
  title: Gérer les commandes | OrderLine | HubRise
  description: Instructions pour afficher les détails de la commande, mettre à jour le statut de la commande et imprimer un reçu. Connectez vos applications et synchronisez vos données.
---

Vous pouvez personnaliser l'enchaînement des statuts afin d'adapter la gestion des commandes à votre activité. Cette section décrit l'enchaînement des statuts par défaut, ainsi que les actions permettant d'accepter ou d'imprimer les commandes. Pour personnaliser cet enchaînement, consultez la page [Statuts de commande](/apps/orderline/configuration/#encha-nement-des-statuts-de-commande/).

## Recevoir des commandes

Lors de la réception d'une commande, OrderLine l'affiche sous l'onglet **Aujourd'hui** ou **Jours suivants** en fonction de la date de livraison.

OrderLine peut également émettre une notification sonore pour vous informer des nouvelles commandes. Pour configurer les notifications sonores, consultez la rubrique [Notifications](/apps/orderline/configuration/#notifications) de la page **Configuration**.

---

**NOTE IMPORTANTE :** Les navigateurs peuvent bloquer les notifications sonores. Pour les maintenir activées en permanence, suivez les instructions dans la FAQ [Comment puis-je garder les notifications sonores activées ?](/apps/orderline/faqs/garder-notifications-sonores-activees/).

---

Lors de la première connexion, OrderLine synchronise toutes les commandes des 30 derniers jours.

![Affichage d'une commande dans OrderLine](./images/018-2x-order-displays.png)

## Voir une commande

Pour consulter les détails de la commande, cliquez sur la carte de la commande. Pour la fermer, cliquez sur l'icône de fermeture <InlineImage width="23" height="23">!\[Icône de fermeture OrderLine\](../images/032-close.png)</InlineImage> ou n'importe où en dehors de la carte.

La carte d'une commande affiche toutes les informations nécessaires à son traitement :

- L'adresse du client. Un lien **Afficher dans Google Maps** s'affiche si des coordonnées GPS ont été associées à la commande.
- La date et l'heure de création de la commande.
- La date et l'heure souhaitées de livraison ou de récupération par le client.
- La date et l'heure confirmées, qui correspondent ce qui était prévu, jusqu'à ce qu'un utilisateur de OrderLine actualise l'heure de livraison effective de la commande.
- Type de commande, indiquant le mode de traitement : **LIVRAISON**, **EMPORTÉ** ou **SUR PLACE**.
- Liste des produits à préparer, avec les commentaires clients éventuels.
- Le statut de la commande. Vous pouvez modifier le statut d'une commande ou imprimer le reçu en sélectionnant le bouton correspondant.

![Détails de la carte de commande OrderLine](./images/019-2x-order-card-details.png)

## Mettre à jour le statut d'une commande

Pour mettre à jour le statut d'une commande, ouvrez la fiche de commande et choisissez le bouton de statut approprié.

Selon votre configuration OrderLine, vous pouvez avoir l'option d'ajouter des informations supplémentaires lors de mises à jour de statut spécifiques. Pour ajuster la configuration, consultez [Saisies complémentaires](/apps/orderline/configuration/#saisies-compl-mentaires). Ces saisies de données supplémentaires peuvent être utiles dans certaines situations, telles que :

- Renseigner un **message pour le client** lors du passage d'une commande au statut **Annulée**, pour justifier l'annulation.
- Indiquer une **heure confirmée** de livraison, lorsque la commande est marquée comme **Acceptée** mais ne peut pas être livrée à l'heure prévue. Si aucune **Heure confirmée** n'est spécifiée, l'heure initialement souhaitée pour la livraison de la commande sera utilisée.

Pour modifier l'heure de livraison ou ajouter un message pour votre client, cliquez sur l'icône stylo à côté du bouton de statut. Après avoir effectué vos ajustements, cliquez sur le bouton de statut pour confirmer.

![Exemple d'enchaînement des statuts](./images/012-2x-add-prompt-in-delivery.png)

---

**NOTE IMPORTANTE :** Votre système de commande en ligne doit prendre en charge les mises à jour des horaires de livraison et la messagerie pour que ces saisies supplémentaires soient prises en compte.

---

Certaines mises à jour de statut, comme marquer une commande comme **Terminée**, peuvent faire disparaître la commande de l'onglet **Aujourd'hui**, en fonction de votre configuration OrderLine. Pour retrouver la commande, cliquez sur **AFFICHER** sur la carte **des commandes masquées**, ou sélectionnez l'onglet **Historique des commandes**. Pour ajuster les statuts cachés, voir [Masquer les commandes](/apps/orderline/parametres/#masquer-les-commandes).

![Carte de commandes cachées de OrderLine](./images/039-2x-hidden-orders-card.png)

## Imprimer une commande

OrderLine prend en charge l'impression sur n'importe quelle imprimante reconnue par votre navigateur Web via la boîte de dialogue d'impression du système.

Pour imprimer un reçu de commande, suivez ces étapes :

1. Accédez aux détails de la commande.
1. Cliquez sur **IMPRIMER**.
1. Suivez les instructions indiquées dans la boîte de dialogue d'impression.

## Reçus

Pour une meilleure lisibilité, les reçus sont présentés sous forme de sections délimitées par un trait plein, reflétant les informations de la carte de commande. Pour plus d'informations sur les cartes de commande, consultez la rubrique [Voir une commande](#voir-une-commande).

Les reçus contiennent les informations suivantes :

- Type de commande, indiquant le mode de traitement : **LIVRAISON**, **EMPORTÉ** ou **SUR PLACE**.
- Le mode de paiement.
- L'adresse de livraison, les commentaires et les coordonnés GPS (si fournies par la solution de commande en ligne).
- La date et l'heure confirmées.
- La date et l'heure confirmées ne seront affichées que si elles diffèrent de l'heure de livraison prévue.
- Le nom des offres promotionnelles suivies des produits associés.
- Les produits commandés, regroupés avec touts les ajouts ou exclusions incluses. Les options standard qui ont été supprimées sont barrées.
- Le numéro de référence de la commande.

![Exemple de reçu de commande OrderLine](./images/030-2x-receipt-example.jpg)
