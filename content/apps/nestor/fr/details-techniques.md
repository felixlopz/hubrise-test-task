---
title: Détails techniques
position: 7
layout: documentation
meta:
  title: Détails techniques - Nestor
  description: Détails techniques concernant l'intégration de Nestor à HubRise.
---

## Commandes

### Réception de commande

Voici comment les champs d'une commande HubRise sont utilisés lors de sa réception dans Nestor :

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