---
title: Plateformes de livraison de repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | POS HELPER | HubRise
  description: HubRise permet de connecter POS HELPER à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

HubRise permet de recevoir les commandes des plateformes de livraison de repas dans votre logiciel de caisse POS HELPER.

Pour plus d'informations, consultez les pages d'aide de ces plateformes depuis notre [page Apps](/apps/plateformes-de-livraison-de-repas).

Vous trouverez ci-dessous les paramètres à utiliser pour connecter ces plateformes avec POS HELPER.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans POS HELPER, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Deliveroo Bridge, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants :

| Section             | Nom                                               | Code ref                                      |
| ------------------- | ------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  | `Plateforme`                                  |
| Types de service    | Code ref livraison par le restaurant              | `Restaurant`                                  |
| Types de service    | Code ref à emporter                               | `A emporter`                                  |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                        |
| Remises             | Code ref promotion                                | (laisser vide)                                |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                |
| Frais               | Code ref surcharge                                | (laisser vide)                                |
| Paiements           | Code ref paiement sur Deliveroo                   | `ONLINE`                                      |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"` |

## Just Eat

Pour recevoir les commandes de Just Eat dans POS HELPER, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Just Eat Flyt Bridge, consultez l'aide sur la <Link to="/apps/just-eat-flyt/configuration" addLocalePrefix={false}>configuration de Just Eat Flyt Bridge (en anglais)</Link>.

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les codes ref suivants :

| Section             | Nom                                                   | Code ref                                      |
| ------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | `Plateforme`                                  |
| Types de service    | Code ref livraison par le restaurant                  | `Livraison`                                   |
| Types de service    | Code ref à emporter                                   | `A emporter`                                  |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                        |
| Remises             | Code ref promotion                                    | (laisser vide)                                |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                |
| Paiements           | Code ref paiement en ligne                            | `ONLINE`                                      |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"` |

## Uber Eats

Pour recevoir les commandes Uber Eats dans POS HELPER, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Uber Eats Bridge, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

Dans la page de configuration Uber Eats Bridge, utilisez les codes ref suivants :

| Section             | Nom                                               | Code ref                                                              |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber                           | `Plateforme`                                                          |
| Types de service    | Code ref livraison par le restaurant              | `Livraison`                                                           |
| Types de service    | Code ref à emporter                               | `A emporter`                                                          |
| Types de service    | Code ref sur place                                | `Sur place`                                                           |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes à emporter`                                                |
| Articles spéciaux   | Code ref jetables                                 | Créer un article `Jetables` dans POS HELPER et utiliser son code ref. |
| Remises             | Code ref remise                                   | (laisser vide)                                                        |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                                        |
| Frais               | Code ref supplément petite commande               | (laisser vide)                                                        |
| Frais               | Code ref pourboire                                | (laisser vide)                                                        |
| Paiements           | Code ref paiement                                 | `ONLINE`                                                              |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                         |
| Menu                | Activer les notes de préparation sur les articles | Laisser la case décochée                                              |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

---

**REMARQUE IMPORTANTE :** Les notes de préparation sur les articles ne sont pas supportées par POS HELPER. Si vous utilisez ces notes pour des instructions de cuisson ou de service (par exemple, "Moyen rare cuisson", ou "Coupez en tranches"), vous devez ajouter les options correspondantes dans votre EPOS et les inclure dans votre menu Uber Eats.

---
