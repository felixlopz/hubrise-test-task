---
title: Informations techniques
position: 6
layout: documentation
meta:
  title: Informations techniques | My Lemonade | HubRise
  description: Informations techniques concernant l'intégration de My Lemonade à HubRise. Connectez vos applications à HubRise avec facilité et synchronisez vos données.
---

## Envoi des commandes

Lors de l'envoi d'une commande My Lemonade, ses champs sont utilisés de la façon suivante :

| Nom du champ HubRise                  | Utilisation dans My Lemonade                                                        |
| ------------------------------------- | ----------------------------------------------------------------------------------- |
| `service_type`                        | Indique si la commande est en livraison, sur place, à emporter, ou en consultation. |
| `service_type_ref`                    | Identique à `service_type`.                                                         |
| `expected_time`                       | Heure et date auxquelles la commande sera prête ou livrée.                          |
| `item.sku_ref`                        | Code ref du produit.                                                                |
| `item.price`                          | Prix du produit.                                                                    |
| `item.product_name`                   | Nom du produit.                                                                     |
| `item.options`                        | Options ajoutées au produit.                                                        |
| `deals`                               | Promotions ajoutées à la commande.                                                  |
| `charges`                             | Charges ajoutées à la commande.                                                     |
| `total`                               | Montant total de la commande.                                                       |
| `collection_code`                     | Code permettant de récupérer la commande.                                           |
| `customer`                            | Informations du client.                                                             |
| `payment.type`                        | Méthode de paiement.                                                                |
| `custom_fields.restaurant.table_name` | Référence de la table.                                                              |
