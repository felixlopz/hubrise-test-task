---
title: Associer les codes ref
position: 3
layout: documentation
meta:
  title: Associer les codes ref - Kezia II
  description: Exporter un catalogue vers HubRise, et retrouver les codes ref des produits, des options et d'autres éléments.
---

Une fois votre logiciel de caisse Kezia II connecté à HubRise, une dernière étape de configuration est nécessaire. Les différents éléments présents dans Kezia II sont identifiés par des codes ref. Vous devez indiquer ces codes ref dans les applications connectées à HubRise, afin que les commandes puissent être réceptionnées dans Kezia II.

Il y a deux façons de procéder :
- Exporter le catalogue Kezia II vers HubRise, puis importer ce catalogue dans les applications connectées qui le permettent.
- Saisir manuellement les codes ref.

Ces deux méthodes sont parfois complémentaires. Seules certaines applications connectées permettent l'import d'un catalogue depuis HubRise. Pour les autres, il faudra saisir manuellement les codes ref.

Cette page explique comment exporter un catalogue et trouver les codes ref depuis Kezia II. Pour plus d'informations sur l'import d'un catalogue et la saisie des codes ref dans une application connectée, référez-vous à la documentation de l'application sur le site de HubRise.

## Exporter le catalogue

Lors de la première connexion, vous devez exporter votre catalogue manuellement vers HubRise en suivant les étapes suivantes :

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

Un produit dans HubRise correspond à un article dans Kezia II. Pour en retrouver le code ref, suivez les étapes suivantes :

1. Sur l'écran d'accueil, sélectionnez **ARTICLES**.
1. Double-cliquez sur le produit désiré.
1. Sélectionnez **Menu**.
1. Sélectionnez **EAN Multi-codes Codes comptables**. Le code ref de l'article s'affiche dans la section **Code article**, dans le champ **Code Interne**.
   ![Associer les codes ref - Code article](../images/019-fr-jdc-fiche-article-code.png)

## SKUs

Une SKU (*Stock Keeping Unit*) dans HubRise correspond au multi-tarif dans Kezia II, mais il est conseillé plutôt de créer un article différent pour chaque SKU. Par exemple, une pizza margherita en trois tailles différentes correspond dans Kezia II à trois articles distincts :
- Margherita Grande
- Margherita Medium
- Margherita Petite

## Options

Une option dans HubRise correspond à un article option dans Kezia II. Pour vérifier qu'un article est considéré comme une option, vérifiez que la case nécessaire est cochée :

1. Sur l'écran d'accueil, sélectionnez **ARTICLES**.
1. Double-cliquez sur le produit désiré.
1. Sélectionnez **Menu**.
1. Sélectionnez **Préparation**. La case **Article Option** doit être cochée.
   ![Associer les codes ref - Article option](../images/020-fr-jdc-fiche-article-option.png)

Pour trouver le code ref de cet article, suivez la même procédure que pour les [produits](/apps/kezia/associer-codes-ref#produits).