---
title: Associer les codes ref
position: 3
layout: documentation
meta:
  title: Associer les codes ref | Kezia II | HubRise
  description: Instructions pour associer les codes ref des produits Kezia II avec d'autres applications connectées à HubRise pour la synchronisation des données.
---

Une fois votre logiciel de caisse Kezia II connecté à HubRise, vous devez configurer vos autres applications connectées, afin que les différents éléments présents dans les commandes soient bien identifiés par Kezia II.

Kezia II identifie chaque élément d'une commande par un code ref. Vous devez indiquer les codes ref fournis par Kezia II dans vos autres applications, afin que les commandes puissent être réceptionnées.

Il y a deux façons de procéder :

- Vous pouvez exporter le catalogue Kezia II vers HubRise, puis importer ce catalogue dans vos autres applications.
- Ou vous pouvez saisir manuellement les codes ref dans vos autres applications.

Seules certaines applications permettent l'import d'un catalogue depuis HubRise. Pour les autres, il faudra saisir manuellement les codes ref.

## Exporter le catalogue

Pour exporter manuellement un catalogue vers HubRise, suivez les étapes suivantes :

1. Sur l'écran d'accueil, sélectionnez **CAISSE**.
   ![Associer les codes ref - Ouverture caisse](../images/011-fr-jdc-ouverture-caisse.png)
1. Sélectionnez un vendeur.
   ![Associer les codes ref - Caisse avec vendeur sélectionné](../images/012-fr-jdc-vendeur-selectionne.png)
1. Cliquez sur **Paramètres Web**.
   ![Associer les codes ref - Choix de la plateforme](../images/013-fr-jdc-choix-plateforme.png)
1. Cliquez sur **HubRise**.
   ![Associer les codes ref - Paramètres d'envoi](../images/014-fr-jdc-parametres-envoi.png)
1. Dans l'onglet **E/S**, sélectionnez **Envoi Articles sur HubRise**.

Les informations client et les commandes sont envoyées automatiquement. En cas de problème avec la synchronisation automatique, vous pouvez vous rendre dans cet onglet pour faire ces exports manuellement.

Vous devez maintenant importer le catalogue HubRise dans vos autres applications connectées à HubRise. Pour effectuer cette opération, référez-vous à la documentation de ces applications sur le site de HubRise.

Les produits que vous créez ou modifiez dans votre catalogue ne sont pas systématiquement exportés vers HubRise. Pour que ce soit le cas, cochez l'option correspondante en suivant les étapes suivantes :

1. Sur l'écran d'accueil, sélectionnez **ARTICLES**.
   ![Associer les codes ref - Sélection article](../images/015-fr-jdc-selection-article.png)
1. Double-cliquez sur le produit à synchroniser.
   ![Associer les codes ref - Fiche article](../images/016-fr-jdc-fiche-article.png)
1. Sélectionnez **Menu**.
   ![Associer les codes ref - Onglets fiche article](../images/017-fr-jdc-fiche-article-onglets.png)
1. Sélectionnez **Paramètres**.
1. Cochez l'option **Publication WEB**.
   ![Associer les codes ref - Onglets fiche article](../images/018-fr-jdc-fiche-article-publication-web.png)
1. Sélectionnez **Appliq.**.

Vous pouvez ensuite exporter de nouveau votre catalogue en suivant les étapes décrites au début de [cette partie](/apps/kezia/associer-codes-ref#exporter-le-catalogue).

## Produits

Un produit dans HubRise correspond à un article dans Kezia II. Pour en retrouver le code ref, sur l'écran d'accueil, sélectionnez **ARTICLES**. Le code ref de l'article s'affiche dans la colonne **IDART**. Ce code est généré automatiquement lors de la création d'un article et n'est pas modifiable.

## SKUs

Une SKU (*Stock Keeping Unit*) dans HubRise correspond au multi-tarif dans Kezia II, mais il est conseillé plutôt de créer un article différent pour chaque SKU. Par exemple, une pizza margherita en trois tailles différentes correspond dans Kezia II à trois articles distincts :
- Margherita Grande
- Margherita Medium
- Margherita Petite

Pour trouver le code ref d'un article, suivez la procédure décrite dans la partie [Produits](/apps/kezia/associer-codes-ref#produits).

## Options

Une option dans HubRise correspond à un article option dans Kezia II. Pour vérifier qu'un article est considéré comme une option, vérifiez que la case nécessaire est cochée :

1. Sur l'écran d'accueil, sélectionnez **ARTICLES**.
1. Double-cliquez sur le produit désiré.
1. Sélectionnez **Menu**.
1. Sélectionnez **Préparation**. La case **Article Option** doit être cochée.
   ![Associer les codes ref - Article option](../images/019-fr-jdc-fiche-article-option.png)

Pour trouver le code ref de cet article, suivez la procédure décrite dans la partie [Produits](/apps/kezia/associer-codes-ref#produits).

## Remises

Une remise dans Kezia II peut seulement être créée lorsque le vendeur enregistre une commande. Les remises ne peuvent donc pas être synchronisées avec HubRise.

## Promotions

Une promotion dans HubRise correspond à un menu dans Kezia II. Pour retrouver le code ref d'un menu, dans la barre de menu, sélectionnez **Article** > **Menus** > **Liste**. Le code ref du menu s'affiche dans la colonne **Idart** et correspond au code ref de l'article attribué au menu lors de sa création.