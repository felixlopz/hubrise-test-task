---
title: FAQ
position: 7
layout: documentation
meta:
  title: Connexion entre Nestor et HubRise - FAQ
  description: Foire aux questions et leur réponse concernant l'intégration de Nestor avec HubRise.
---

## J'ai plusieurs points de vente utilisant Nestor avec le même menu, dois-je tous les synchroniser avec HubRise ?

Si vous avez plusieurs points de vente avec le même menu, créez un seul catalogue sur votre compte HubRise, puis connectez tous les points de vente Nestor à celui-ci.

Pour plus d'informations sur la gestion des catalogues HubRise, consultez la page [Catalogues](/docs/catalog) (uniquement en anglais).

Toutes les mises à jour du menu doivent être effectuées depuis le même poste travail Nestor, celle-ci entraînant la mise à jour automatique du catalogue commun HubRise.

## Je viens de créer un produit dans Nestor, pourquoi n'apparaît-il pas dans mon catalogue HubRise ?

Les produits Nestor ne sont pas synchronisés automatiquement avec HubRise. Pour activer la synchronisation, veuillez suivre les étapes suivantes depuis l'interface de Nestor :
1. Sélectionnez **Gestion** dans la barre de menu. 
1. Survolez l'option **Articles**, et sélectionnez **Fiche articles**.
1. Sélectionnez le produit à synchroniser.
1. Naviguez vers l'onglet **Déclinaison**.
1. Cochez l'option **Publier sur internet**.
1. Validez la modification.

Nestor se synchronise avec HubRise toutes les 20 secondes. Attendez quelques instants puis vérifiez votre catalogue HubRise.

## Pourquoi suis-je dans l'incapacité de valider ma commande web dans Nestor ?

Une raison courante est la présence de produits non reconnus dans la commande. Pour remédier à ce problème, suivez les étapes suivantes :
1. Sélectionnez votre commande pour en voir le détail. Certaines lignes intituées **Article inconnu** sont présentes.
1. Sélectionnez la dernière ligne vide. Votre menu apparaît.
1. Sélectionnez et ajoutez le produit correspondant en vous aidant de la description de la ligne **Article inconnu**.
1. Supprimez la ligne **Article inconnu** désormais remplacée.
1. Répétez ces étapes pour chaque ligne **Article inconnu**.
1. Lorsque toutes ces lignes sont supprimées, validez la commande.

Pour éviter que ce problème se reproduise, vérifiez les codes ref de vos produits. Les articles inconnus sont causés par des codes refs invalides. Pour trouver un code ref, consultez la page [Trouver les codes ref](/apps/nestor/map-ref-codes).
