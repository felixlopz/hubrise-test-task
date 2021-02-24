---
title: Informations techniques
position: 7
layout: documentation
meta:
  title: Informations techniques - Kezia II
  description: Informations techniques concernant l'intégration de Kezia II à HubRise.
---

## Réception des commandes

Les champs d'une commande HubRise sont utilisés de la façon suivante dans Kezia II :

| Nom du champ HubRise                   | Utilisation dans Kezia II                                                   |
| -------------------------------------- | --------------------------------------------------------------------------- |
| `service_type`                         | Permet de savoir si la commande est en livraison, sur place, ou à emporter. |
| `service_type_ref`                     | Non utilisé.                                                                |
| `expected_time`                        | Heure et date auxquelles la commande sera prête ou livrée.                  |
| `item.sku_ref`                         | Code permettant de retrouver l'article dans le catalogue Kezia II.          |
| `item.price`                           | Prix de l'article.                                                          |
| `item.product_name`                    | Permet de donner un nom au nouvel article créé dans le catalogue Kezia II si le `item.sku_ref` n'est pas reconnu. |
| `charges`                              | Permet de créer l'article *FRAIS DE PORT TTC* dans le catalogue Kezia II, correspondant au forfait livraison (seul type de frais accepté). |
| `customer`                             | Informations du client. L'id ou l'adresse e-mail sont utilisés pour identifier si le client existe déjà dans Kezia II. Si ces données sont inconnues, un nouveau client est créé dans Kezia II. Si le client n'a ni id, ni adresse e-mail, le client générique *Anonyme* de Kezia II est utilisé. |
| `payment.type`                         | Moyen de paiement. S'il est égal à `cash`, la commande est considérée comme non payée, et s'il est égal à `online`, elle est considérée comme payée en ligne. |