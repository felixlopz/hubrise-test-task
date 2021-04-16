---
title: Why Are My Orders Not Received on HubRise?
position: 2
layout: documentation
meta:
  title: Connect Deliveroo to HubRise - Orders Not Received
  description: If you think your Deliveroo Bridge configuration is correct and you still do not receive orders from Deliveroo, there might be products with missing ref codes in your menu.
---

Dans certains cas, il se peut que la configuration de votre Deliveroo Bridge soit correcte, mais que vous ne parveniez toujours pas à recevoir de commandes Deliveroo. Lorsqu'une nouvelle commande est envoyée de Deliveroo à HubRise, aucune nouvelle ligne n'est créée dans la page des commandes de Deliveroo Bridge, et aucun message d'erreur n'apparaît dans les fichiers journaux.

Le problème est peut-être dû à des codes de référence manquants dans votre menu Deliveroo. Si un article dépourvu de code de référence est ajouté à une commande Deliveroo, en pratique, Deliveroo ne parviendra pas à envoyer la totalité de la commande, auquel cas rien ne sera reçu sur HubRise.

Pour résoudre ce problème, assurez-vous que tous les produits de votre menu Deliveroo possèdent un code de référence. Pour savoir comment ajouter des codes de référence à vos produits Deliveroo, voir la rubrique [Mappage des codes de référence](/apps/deliveroo/map-ref-codes).
