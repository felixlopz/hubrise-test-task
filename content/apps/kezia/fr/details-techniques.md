---
title: Informations techniques
position: 7
layout: documentation
meta:
  title: Informations techniques | Kezia II | HubRise
  description: Informations techniques concernant l'intégration de Kezia II à HubRise. Connectez vos applications à HubRise avec facilité et synchronisez vos données.
---

## Réception des commandes

Les champs d'une commande HubRise sont utilisés de la façon suivante dans Kezia II :

| Nom du champ HubRise | Utilisation dans Kezia II                                                   |
| ---------------------| --------------------------------------------------------------------------- |
| `service_type`       | Permet de savoir si la commande est en livraison, sur place, ou à emporter. |
| `service_type_ref`   | Non utilisé.                                                                |
| `expected_time`      | Heure et date auxquelles la commande sera prête ou livrée.                  |
| `total`              | Total de la commande.                                                       |
| `collection_code`    | Code de collection.                                                         |
| `created_by`         | Solution d'origine de la commande.                                          |
| `item.sku_ref`       | Code permettant de retrouver l'article dans le catalogue Kezia II.          |
| `item.price`         | Prix de l'article.                                                          |
| `item.product_name`  | Permet de donner un nom au nouvel article créé dans le catalogue Kezia II si le `item.sku_ref` n'est pas reconnu. |
| `charges`            | Permet de créer l'article *FRAIS DE PORT TTC* dans le catalogue Kezia II, correspondant au forfait livraison (seul type de frais accepté). |
| `customer`           | Informations du client.                                                     |
| `payment.type`       | Moyen de paiement. S'il est égal à `cash`, la commande est considérée comme non payée. Sinon, elle est considérée comme déjà payée. |
| `discounts`          | Remises de la commande.                                                     |
| `deals`              | Promotions de la commande.                                                  |
