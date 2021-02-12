---
title: Commandes
position: 4
layout: documentation
meta:
  title: Recevoir les commandes HubRise - Nestor
  description: Réceptionner et modifier le statut des commandes HubRise reçues dans Nestor.
---

Lorsque Nestor est connecté à HubRise, les commandes envoyées à HubRise arrivent automatiquement dans votre logiciel de caisse.

## Recevoir des commandes

Nestor vérifie l'arrivée de nouvelles commandes toutes les 20 secondes grâce à l'utilitaire WebNES. Une alerte visuelle et sonore signale l'arrivée d'une nouvelle commande.
   ![Commandes - Alerte commande web](../images/012-fr-nestor-alerte-commande.png)

Pour voir la liste des commandes en attente, cliquez sur l'alerte. Pour voir le détail de la commande et la valider, cliquez sur la ligne correspondante.
   ![Commandes - Commandes web](../images/013-fr-nestor-commandes-web.png)

### Commande avec des articles inconnus

Lorsqu'une commande contient des produits dont le code ref n'est pas reconnu, ces derniers sont remplacés par des produits nommés **Article inconnu**. Il est alors impossible de valider la commande. Pour remédier à ce problème, suivez les étapes suivantes :
1. Sélectionnez votre commande pour en voir le détail. Certaines lignes intituées **Article inconnu** sont présentes.
1. Sélectionnez la dernière ligne vide. Votre menu apparaît.
   ![Commandes - Article inconnu](../images/014-fr-nestor-commande-article-inconnu.png)
1. Sélectionnez et ajoutez le produit correspondant en vous aidant de la description de la ligne **Article inconnu**.
1. Supprimez la ligne **Article inconnu** désormais remplacée.
   ![Commandes - Commande sans article inconnu](../images/015-fr-nestor-commande-validable.png)
1. Répétez ces étapes pour chaque ligne **Article inconnu**.
1. Validez la commande.

Pour éviter que ce problème se reproduise, assurez-vous que les codes ref de vos produits ont bien été saisis. Pour plus d'informations, consultez la page [Associer les codes ref](/apps/nestor/associer-codes-ref).

### Produits avec des prix différents

Lorsqu'une commande contient des produits dont le prix ne correspond pas à celui de Nestor, une remise en pourcentage est appliquée automatiquement.

Par exemple, si une *Margarita Grande* est à 11.00 € dans la commande, mais que son prix est 12.00 € dans le catalogue Nestor, un champ *Remise* égal à 91,67% sera indiqué dans le détail de la commande.
   ![Commandes - Produit avec remise](../images/018-fr-nestor-remise.png)

### Enregistrement d'un client

Si le client qui a passé la commande n'est pas connu de Nestor, une étape d'association du client apparaît avant celle de validation de la commande. Deux choix sont alors proposés :
- Créer un nouveau client.
- Le rattacher à un client connu de Nestor. Dans ce cas, les informations du client seront écrasées par celles provenant d'HubRise.

Lors de cette étape, les même choix sont proposés pour l'adresse.
   ![Commandes - Associer client et adresse](../images/016-fr-nestor-associer-client-adresse.png)

### Statut de la commande

Le statut de la commande dans HubRise évolue de la façon suivante :
1. *New* : la commande vient d'être créée.
1. *Received* : la commande a été reçue dans Nestor.
1. *Accepted* : la commande a été validée dans Nestor.

La mise à jour du statut dans HubRise peut prendre jusqu'à 20 secondes.

### Détails de la commande

Vous pouvez retrouver toutes vos commandes en suivant les étapes suivantes.
1. Dans la barre de menu Nestor, sélectionnez **Actions**.
1. Sélectionnez l'option **Carnet de commandes**. La fenêtre des commandes s'ouvre.
1. Sélectionnez l'onglet correspondant au type de commande que vous souhaitez visualiser : *En cours*, *Web*, *Annulées*, *Différées*, *Tickets / Factures*.
1. Double-cliquez sur la ligne correspondant à la commande désirée. La fenêtre détaillant ses informations s'ouvre.

**Interprétation technique**

Les champs d'une commande HubRise sont utilisés de la façon suivante dans Nestor :

| Nom du champ HubRise                   | Utilisation dans Nestor                                                     |
| -------------------------------------- | --------------------------------------------------------------------------- |
| `service_type`                         | Permet de savoir si la commande est en livraison, sur place, ou à emporter. |
| `service_type_ref`                     | Non utilisé.                                                                |
| `expected_time`                        | Heure et date auxquelles la commande sera prête ou livrée.                  |
| `item.sku_ref`                         | Code permettant de retrouver l'article dans le catalogue Nestor.            |
| `item.price`                           | Prix de l'article. Si celui-ci est différent de celui du catalogue Nestor, le pourcentage du champ *Remise* est complété en fonction. |
| `item.product_name` et `item.sku_name` | Permettent de remplir la description d'un article inconnu si le `item.sku_ref` n'est pas reconnu. |
| `charges`                              | Permet de remplir le forfait livraison (seul type de frais accepté).        |
| `discounts`                            | Liste des offres promotionnelles.                                           |
| `deals`                                | Liste des menus, considérés comme des articles dans la commande.            |
| `customer`                             | Informations du client. L'id venant d'HubRise est utilisé pour identifier si le client existe déjà dans Nestor. Si l'id n'est pas encore stocké, des propositions de clients déjà existants sont faites en fonction du nom ou de l'email. L'email est utilisé dans le cas d'une demande d'envoi de ticket. |
| `payment.type`                         | Moyen de paiement. S'il est égal à `cash`, la commande est considérée comme non payée, et s'il est égal à une autre valeur, elle est considérée comme payée en ligne. | 

**Fonctionnalité prévue :** Il n'est pour l'instant pas possible de connaître l'origine d'une commande. Cette fonctionnalité est en cours de développement. Si elle est nécessaire à votre utilisation de Nestor, contactez l'éditeur de Nestor.

## Envoyer les commandes

Cette fonctionnalité est en cours de développement et sera disponible prochainement.

## Temps de préparation

Nestor permet de configurer les temps de préparation en livraison (*L), sur place (*P) et à emporter (*E). La valeur par défaut est de 30 minutes pour ces trois paramètres. Seul le temps de préparation en livraison est remonté vers HubRise.

Pour modifier les temps de préparation, sélectionnez le bouton avec un icône en forme d'horloge en bas à gauche de Nestor.
![Commandes - Configurer temps de préparation](../images/017-fr-nestor-configurer-temps.png)
