---
title: Pourquoi mes commandes ne sont-elles pas reçues par HubRise ?
position: 2
layout: documentation
meta:
  title: Commandes Deliveroo non reçues sur HubRise | FAQs Deliveroo | HubRise
  description: Si la configuration de votre Deliveroo Bridge est faite mais vous ne recevez pas de commandes Deliveroo, il se peut qu'il y ait des codes ref manquants.
---

Dans certains cas, il se peut que la configuration de votre Deliveroo Bridge soit correcte, mais que vous ne parveniez toujours pas à recevoir de commandes Deliveroo. Lorsqu'une nouvelle commande est envoyée de Deliveroo à HubRise, aucune nouvelle ligne n'est créée dans la page des commandes de Deliveroo Bridge, et aucun message d'erreur n'apparaît dans les fichiers journaux.

Le problème est peut-être dû à des codes ref manquants dans votre menu Deliveroo. Si un article dépourvu de code ref est ajouté à une commande Deliveroo, en pratique, Deliveroo ne parviendra pas à envoyer la totalité de la commande, auquel cas rien ne sera reçu sur HubRise.

Pour résoudre ce problème, assurez-vous que tous les produits de votre menu Deliveroo possèdent un code ref. Pour savoir comment ajouter des codes ref à vos produits Deliveroo, voir la rubrique [Association des codes ref](/apps/deliveroo/associer-codes-ref).
