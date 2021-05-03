---
title: Plateformes de livraison de repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | Nestor | HubRise
  description: Paramètres de configuration HubRise à utiliser pour connecter Nestor aux plateformes de livraison de repas suivantes : Deliveroo, Uber Eats et Just Eat.
---

Pour connecter Nestor à Deliveroo, Uber Eats, ou Just Eat, utilisez les paramètres de configuration fournis ci-dessous.

## Deliveroo

Utilisez les codes ref suivants dans Deliveroo Bridge. Pour savoir comment configurer ces codes, consultez la page de [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

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

Utilisez les codes ref suivants dans Uber Eats Bridge. Pour savoir comment configurer ces codes, consultez la page de [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

| Section             | Nom                                  | Code ref                                                          |
| ------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber              | `UELIV`                                                           |
| Types de service    | Code ref livraison par le restaurant | `UELIVR`                                                          |
| Types de service    | Code ref à emporter                  | `UEEMP`                                                           |
| Types de service    | Code ref sur place                   | `UEPLA`                                                           |
| Articles spéciaux   | Code ref jetables                    | Créer un article "Jetables" dans Nestor et utiliser son code ref. |
| Remises             | Code ref remise                      | (laisser vide)                                                    |
| Paiements           | Code ref paiement                    | (laisser vide)                                                    |
| Statuts de commande | Marquer la commande comme Acceptée   | `Lorsque le statut HubRise passe à "Reçue"`                       |
| Statuts de commande | Marquer la commande comme Rejetée    | `Lorsque le statut HubRise passe à "Rejetée"`                     |
| Statuts de commande | Marquer la commande comme Annulée    | `Lorsque le statut HubRise passe à "Annulée"`                     |

## Just Eat

Utilisez les codes ref suivants dans Just Eat Takeaway Bridge. Pour savoir comment configurer ces codes, consultez la page de [configuration de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/configuration).

| Section          | Nom                                  | Code ref       |
| ---------------- | ------------------------------------ | -------------- |
| Types de service | Code ref livraison par la plateforme | `JELIV`        |
| Types de service | Code ref livraison par le restaurant | `JELIVR`       |
| Types de service | Code ref à emporter                  | `JEEMP`        |
| Remises          | Code ref promotion                   | (laisser vide) |
| Frais            | Code ref frais de livraison          | (laisser vide) |
| Paiements        | Code ref paiement en ligne           | (laisser vide) |
| Paiements        | Code ref paiement en espèces         | (laisser vide) |
