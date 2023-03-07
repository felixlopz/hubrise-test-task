---
title: Dépannage
position: 8
layout: documentation
meta:
  title: Dépannage | Deliveroo Bridge | HubRise
  description: Dépannage de la connexion Deliveroo Bridge avec HubRise pour que votre caisse et d'autres applications fonctionnent comme un tout cohérent. Synchronisez vos données.
---

## Problèmes de menus

### Le menu ne se met pas à jour

Lorsque vous envoyez un menu, s'il ne se met pas à jour sur votre page Deliveroo et qu'il n'y a pas d'erreur dans le bridge, cela peut être dû à un problème de mise en cache de Deliveroo.

Pour résoudre le problème, apportez une petite modification au menu, par exemple en modifiant le nom d'un produit, puis publiez à nouveau le menu.

### Invalid Site Assignment (tâche invalide sur le site)

Lorsque vous envoyez un menu, vous pouvez voir l'erreur suivante dans la réponse de Deliveroo Bridge :

```
{
  "error": "invalid site assignment: one or more sites IDs are missing from the current site_ids array. Before removing a site from a menu, please reassign the site to another menu to avoid this error. Invalid site_ids: XXXXX"
}
```

Cette erreur est un bug de Deliveroo sur lequel ils travaillent. La solution temporaire consiste à créer un nouveau menu dans Deliveroo.

Pour créer un nouveau menu, procéder comme suit :

- Dans Deliveroo Bridge, ouvrir l'onglet  **Configuration**.
- Dans la section **Catalogue**, choisir un nouveau nom pour **Identifiant du menu**. Ce nom doit être différent du nom du menu qui a causé l'erreur.
- Cliquer sur **Enregistrer**.
- Ouvrir l'onglet **Actions** et envoyer le catalogue.

Si vous rencontrez toujours des problèmes après avoir essayé cette solution pour le contourner, contacter [support@hubrise.com](mailto:support@hubrise.com).

## Commandes non reçues

Lorsque Deliveroo Bridge est configuré correctement et que vous ne recevez pas de commandes Deliveroo sur HubRise, vous pouvez rencontrer l'un des problèmes suivants.

### Codes de ref manquants

Si un article dépourvu de code ref est ajouté à une commande, Deliveroo ne parviendra pas à envoyer la totalité de la commande, auquel cas rien ne sera reçu sur HubRise.

Pour résoudre ce problème, assurez-vous que tous les produits de votre menu Deliveroo possèdent un code ref. Pour savoir comment ajouter des codes ref à vos produits Deliveroo, voir la rubrique [Association des codes ref](/apps/deliveroo/associer-codes-ref).

### Commandes rejetées par Deliveroo

Lorsque l'acceptation automatique n'est pas activée, chaque commande doit être acceptée manuellement sur la tablette Deliveroo, sinon elle sera rejetée par Deliveroo et rien ne sera reçu sur HubRise.

Pour éviter cela, nous recommandons d'[activer auto-accept](/apps/deliveroo/faqs/auto-accept).
