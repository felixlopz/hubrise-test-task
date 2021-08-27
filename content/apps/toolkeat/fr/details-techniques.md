---
title: Informations techniques
position: 6
layout: documentation
meta:
  title: Informations techniques | Toolkeat | HubRise
  description: Informations techniques concernant l'intégration de Toolkeat à HubRise. Connectez vos applications à HubRise avec facilité et synchronisez vos données.
---

## Envoi des commandes

Lors de l'envoi d'une commande Toolkeat, ses champs sont utilisés de la façon suivante :

| Nom du champ HubRise | Utilisation dans Toolkeat                                                           |
| -------------------- | ----------------------------------------------------------------------------------- |
| `service_type`       | Indique si la commande est en livraison, sur place, à emporter, ou en consultation. |
| `service_type_ref`   | Identique à `service_type`.                                                         |
| `expected_time`      | Heure et date auxquelles la commande sera prête ou livrée.                          |
| `item.sku_ref`       | Code ref du produit.                                                                |
| `item.price`         | Prix du produit.                                                                    |
| `item.product_name`  | Nom du produit.                                                                     |
| `item.options`       | Options ajoutées au produit.                                                        |
| `discounts`          | Remises ajoutées à la commande.                                                     |
| `charges`            | Charges ajoutées à la commande.                                                     |
| `total`              | Montant total de la commande.                                                       |
| `customer`           | Informations du client.                                                             |
| `payments`           | Méthodes de paiement.                                                               |
| `customer_notes`     | Notes ajoutées à la commande par le client.                                         |
