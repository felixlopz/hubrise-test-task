---
title: Gérer les commandes
position: 5
layout: documentation
meta:
  title: Gérer les commandes avec OrderLine
  description: Affichez le détail des commandes, actualisez le statut et imprimez un reçu.
---

Les utilisateurs d'OrderLine peuvent modifier le flux de statuts afin d'adapter la gestion des commandes à leur activité. Cette section décrit le flux de statuts par défaut, qui permet d'accepter ou d'imprimer le reçu de la commande via le bouton correspondant. Pour personnaliser ce flux, voir la rubrique [Définir le statut des commandes](/apps/orderline/settings/#set-order-statuses).

## Voir la commande

Pour consulter les détails de la commande, sélectionnez la carte de commande. Cliquez sur l'icône Fermer <InlineImage width="23" height="23">![Icône "Fermer OrderLine"](../images/032-close.png)</InlineImage> ou n'importe où en dehors de la carte de commande pour refermer celle-ci.

<video controls title="OrderLine Open and Close Orders Example">
  <source src="../images/018-en-order-card-open-close.webm" type="video/webm"/>
</video>

La vue Carte de commande affiche toutes les informations relatives au traitement de la commande :

- Adresse du client. Un lien **Afficher dans Google Maps** s'affiche si la solution de commande en ligne envoie les coordonnées GPS à HubRise.
- Date et heure de création de la commande.
- Date et heure prévues pour la livraison ou la récupération par le client.
- La date et l'heure qui sont confirmées correspondent à l'horaire prévu jusqu'à ce qu'un utilisateur d'OrderLine actualise l'heure de livraison effective de la commande.
- Le type indique le mode de traitement de la commande. Les types possibles sont **LIVRAISON**, **RÉCUPÉRATION** ou **SUR PLACE**.
- Statut actuel de la commande. L'utilisateur peut actualiser le statut d'une commande ou imprimer le reçu en sélectionnant le bouton correspondant.

![Détails de la carte de commande OrderLine](../images/019-en-order-card-details.png)

## Accepter une commande

Pour accepter une commande, ouvrez la carte de commande et cliquez sur **ACCEPTÉE**.

Les utilisateurs peuvent ajouter un message personnalisé destiné au client, ajuster le délai de livraison et communiquer ces mises à jour au client. Pour actualiser la date ou ajouter un commentaire, cliquez sur l'icône de stylo <InlineImage width="44" height="38">![Icône de stylo d'OrderLine](../images/036-pen.jpg)</InlineImage>, ajustez la date et l'heure, rédigez votre message, puis cliquez sur **ACCEPTÉE**. Le client recevra alors un e-mail automatisé contenant votre message et la nouvelle heure de livraison.

---

**REMARQUE IMPORTANTE** : les mises à jour des heures de livraison, ainsi que les messages, doivent être pris en charge par votre système de commande en ligne. Pour plus d'informations sur la configuration, voir la rubrique [Saisies complémentaires](/apps/orderline/settings/##additional-data-prompt).

---

Une fois qu'une commande a été acceptée, son statut passe à « Acceptée ». Vous pouvez imprimer le reçu de la commande et modifier à nouveau le statut lorsque vous êtes prêt.

<video controls title="OrderLine Accept Order Example">
  <source src="../images/020-en-accept-order.webm" type="video/webm"/>
</video>

## Rejeter une commande

Pour rejeter une commande, accédez aux détails de la commande et cliquez sur **REJETÉE**. Vous pouvez ajouter un commentaire lors du rejet de la commande. Pour plus d'informations, voir la rubrique [Saisies complémentaires](/apps/orderline/settings/#additional-data-prompt).

Une fois qu'une commande a été rejetée, elle n'apparaît plus dans la liste **Aujourd'hui** et est masquée. Cliquez sur la carte masquée dans l'onglet **Aujourd'hui** afin de visualiser toutes les commandes et les rouvrir si nécessaire.

<video controls title="OrderLine Reject Order Example">
  <source src="../images/021-en-reject-order.webm" type="video/webm"/>
</video>

## Marquer la commande pour livraison

Lorsque la commande doit être livrée au client, sélectionnez **EN LIVRAISON** pour la commande ayant le statut Acceptée.

<video controls title="OrderLine Order in Delivery Example">
  <source src="../images/022-en-order-set-status-in-delivery.webm" type="video/webm"/>
</video>

## Terminer la commande

Les commandes ayant le statut En livraison » peuvent être mises à jour comme suit :

- Une fois la commande livrée, cliquez sur **TERMINÉE**. Une fois la commande terminée, vous pouvez imprimer le reçu de la commande, mais vous ne pouvez plus en modifier le statut.
- Si la commande n'a pas pu être livrée, cliquez sur **ÉCHEC LIVRAISON**.

Les commandes terminées sont, par défaut, masquées dans la liste **Aujourd'hui**. Cliquez sur la carte masquée dans l'onglet **Aujourd'hui** pour faire réapparaître la commande.

<video controls title="OrderLine Complete Order Example">
  <source src="../images/023-en-order-set-completed.webm" type="video/webm"/>
</video>

## Marquer la commande en échec

Pour les commandes ayant le statut **En livraison**, vous pouvez imprimer le reçu de commande.

<video controls title="OrderLine Failed Delivery Example">
  <source src="../images/024-en-order-set-delivery-failed.webm" type="video/webm"/>
</video>

## Imprimer la commande

OrderLine se connecte aux imprimantes reconnues par le système d'exploitation et imprime les reçus via la boîte de dialogue d'impression du système d'exploitation.

Pour imprimer un reçu de commande sur une imprimante locale, procédez comme suit :

1. Affichez les détails de la commande.
2. Cliquez sur **IMPRIMER**.
3. Suivez les instructions contenues dans la boîte de dialogue d'impression du navigateur.

OrderLine imprime également les reçus de commande de façon automatique dès la réception de la commande, sans passer par la boîte de dialogue d'impression. L'impression automatique nécessite que l'imprimante soit enregistrée dans Google Cloud Print. Pour plus de détails, voir la rubrique [Impression](/apps/orderline/settings/#printing).

Pour une meilleure lisibilité, les reçus sont présentés sous forme de sections délimitées par un trait plein. Ces sections contiennent les mêmes informations que dans la carte de commande. Pour plus d'informations sur les cartes de commande, voir la rubrique [Visualiser une commande OrderLine](#view-order).

![Exemple de reçu de commande OrderLine](../images/030-en-2x-receipt-example.jpg)

Les reçus contiennent les informations suivantes :

- Le type de commande. Les types possibles sont **LIVRAISON**, **RÉCUPÉRATION** ou **SUR PLACE**.
- Le mode de paiement.
- L'adresse et les commentaires de livraison, ainsi que les coordonnées GPS (si la solution de commande en ligne transmet les coordonnées GPS à HubRise).
- L'heure de livraison confirmée par les utilisateurs, qui correspond à l'heure de livraison réelle (si cette donnée est prise en charge par le système EPOS). Pour plus d'informations, voir la rubrique [Saisies complémentaires](/apps/orderline/settings/#additional-data-prompt).
- Les promotions sont énumérées avec leur nom, suivi de la liste des produits qu'elles contiennent.
- Les produits commandés par le client sont regroupés. Les ajouts ou exclusions sont indiqués dans une liste à puces :
  - Les articles standard retirés du produit sont biffés par un trait plein.
  - Options.
  - Garnitures ou autres suppléments.
- La référence indique le numéro de commande. La date et l'heure de livraison s'affichent uniquement si l'heure de livraison confirmée est différente de l'heure de livraison d'origine.
