---
title: Plateformes de livraison de repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | Nestor | HubRise
  description: Connecter Nestor à des plateformes de livraison de repas nécessite de spécifier des codes ref dans la page de configuration du bridge de la plateforme.
---

Pour connecter Nestor à Deliveroo, Uber Eats, ou Just Eat, utilisez les paramètres de configuration fournis ci-dessous.

## Deliveroo

Pour correctement recevoir vos commandes, spécifiez ces codes ref dans la page de configuration du Deliveroo Bridge. Pour plus de détails sur la manière d'accéder à cette page et de la modifier, consultez la page de [configuration de Deliveroo](/apps/deliveroo/configuration).

| Section          | Nom                                  | Code ref       |
| ---------------- | ------------------------------------ | -------------- |
| Types de service | Code ref livraison par Deliveroo     | `DVLIV`        |
| Types de service | Code ref livraison par le restaurant | `DVLIVR`       |
| Types de service | Code ref à emporter                  | `DVEMP`        |
| Remises          | Code ref promotion                   | (laisser vide) |
| Frais            | Code ref frais de livraison          | (laisser vide) |
| Frais            | Code ref surcharge                   | (laisser vide) |
| Paiements        | Code ref paiement sur Deliveroo      | (laisser vide) |
| Paiements        | Code ref paiement en espèces         | (laisser vide) |

## Uber Eats

Pour correctement recevoir vos commandes, spécifiez ces codes ref dans la page de configuration du Uber Eats Bridge. Pour plus de détails sur la manière d'accéder à cette page et de la modifier, consultez la page de [configuration de Uber Eats](/apps/uber-eats/configuration).

| Section             | Nom                                  | Code ref                                      |
| ------------------- | ------------------------------------ | --------------------------------------------- |
| Types de service    | Code ref livraison Uber              | `UELIV`                                       |
| Types de service    | Code ref livraison par le restaurant | `UELIVR`                                      |
| Types de service    | Code ref à emporter                  | `UEEMP`                                       |
| Types de service    | Code ref sur place                   | `UEPLA`                                       |
| Articles spéciaux   | Code ref jetables                    | (laisser vide)                                |
| Remises             | Code ref remise                      | (laisser vide)                                |
| Paiements           | Code ref paiement                    | (laisser vide)                                |
| Statuts de commande | Marquer la commande comme Acceptée   | `Dès qu'elle est envoyée à HubRise`           |
| Statuts de commande | Marquer la commande comme Rejetée    | `Lorsque le statut HubRise passe à "Rejetée"` |
| Statuts de commande | Marquer la commande comme Annulée    | `Lorsque le statut HubRise passe à "Annulée"` |

## Just Eat

Pour correctement recevoir vos commandes, spécifiez ces codes ref dans la page de configuration du Just Eat Flyt Bridge.

| Section          | Nom                                  | Code ref       |
| ---------------- | ------------------------------------ | -------------- |
| Types de service | Code ref livraison Just Eat          | `JELIV`        |
| Types de service | Code ref livraison par le restaurant | `JELIVR`       |
| Types de service | Code ref à emporter                  | `JEEMP`        |
| Frais            | Code ref frais de livraison          | (laisser vide) |
| Frais            | Code ref frais de service            | (laisser vide) |
| Paiements        | Code ref paiement sur Just Eat       | (laisser vide) |
| Paiements        | Code ref paiement en espèces         | (laisser vide) |