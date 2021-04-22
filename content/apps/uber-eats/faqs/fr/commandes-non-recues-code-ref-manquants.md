---
title: Pourquoi mes commandes ne sont-elles pas reçues par HubRise ?
position: 2
layout: documentation
meta:
  title: FAQ - Commandes Uber Eats non reçues sur HubRise
  description: Si la configuration de votre Uber Eats Bridge est faite mais vous ne recevez pas de commandes Uber Eats, il se peut qu'il y ait des codes ref manquants.
---

Dans certains cas, il se peut que la configuration de votre Uber Eats Bridge soit correcte, mais que vous ne parveniez toujours pas à recevoir de commandes Uber Eats. Lorsqu'une nouvelle commande est envoyée d'Uber Eats à HubRise, aucune nouvelle ligne n'est créée dans la page des commandes d'Uber Eats Bridge, et aucun message d'erreur n'apparaît dans les fichiers journaux.

Le problème est peut-être dû à des codes ref manquants dans votre menu Uber Eats. Si un article dépourvu de code ref est ajouté à une commande Uber Eats, en pratique, Uber Eats ne parviendra pas à envoyer la totalité de la commande, auquel cas rien ne sera reçu sur HubRise.

Pour résoudre ce problème, assurez-vous que tous les produits de votre menu Uber Eats possèdent un code ref. Pour savoir comment associer les codes ref sur Uber Eats, voir la rubrique [Association des codes ref](/apps/uber-eats/associer-codes-ref).

