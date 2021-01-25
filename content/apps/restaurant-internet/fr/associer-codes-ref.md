---
title: Associer les codes ref
position: 3
layout: documentation
meta:
  title: Associer les codes ref - Restaurant-internet
  description: Synchroniser votre catalogue entre Restaurant-internet et HubRise, et retrouver les codes ref des articles.
---

## Importer le catalogue

Si vous avez exporté votre catalogue depuis votre logiciel de caisse ou d'autres applications vers HubRise, vous pouvez l'importer dans votre catalogue Restaurant-internet. Cela inclut les produits avec leur prix, leurs options, et leur catégorie. Pour importer le catalogue, suivez les étapes suivantes :

1. Depuis votre tableau de bord Restaurant-internet, dans la partie **Modules**, sélectionnez **Marketplace Autres modules**.
   ![Associer les codes ref - Marketplace](../images/005-fr-restaurant-internet-marketplace.png)
1. Sélectionnez **Hubrise - Connection Caisse Gratuit**.
   ![Associer les codes ref - Connecté à HubRise](../images/008-fr-restaurant-internet-connecte.png)
1. En bas de la page, sélectionnez **Importer ma carte**.

## Produits

Pour retrouver le code ref d'un produit :

1. Dans la barre de menu principale, sélectionnez **Carte**.
   ![Associer les codes ref - Liste des cartes](../images/009-fr-restaurant-internet-liste-cartes.png)
1. Sélectionnez le nom de votre établissement, ici **HubRise Test**.
   ![Associer les codes ref - Carte](../images/010-fr-restaurant-internet-carte.png)
1. Sélectionnez **Editer** sur le produit dont vous souhaitez retrouver le code ref. Dans la partie **Informations générales**, le code ref s'affiche dans le champ **Code réf**.
   ![Associer les codes ref - Code ref produit](../images/011-fr-restaurant-internet-produit.png)

---

**NOTE IMPORTANTE :** Ce champ n'est visible que si la connexion entre Restaurant-internet et HubRise est établie. Pour vérifier que tel est le cas, consultez la page [Connexion à HubRise](/apps/restaurant-internet/connexion-hubrise#connecter-restaurant-internet).

---

## SKU

Une SKU (*Stock Keeping Unit*) dans HubRise est un produit Restaurant-internet dans une taille donnée. Pour retrouver leur code ref, suivez tout d'abord les mêmes étapes que dans la section [Produits](/apps/restaurant-internet/associer-codes-ref#produits). Puis sur la même page, dans la partie **Tailles**, vous pouvez retrouver les valeurs de ces codes dans les champs appelés **Code réf de la taille (facultatif)*N***, N étant le numéro de la taille. Le nombre de tailles par produit est limité à 5.
   ![Associer les codes ref - Codes ref tailles](../images/012-fr-restaurant-internet-tailles.png)

## Options

Restaurant-internet supporte les options à choix unique et à choix multiple.

### Choix unique

Pour retrouver le code ref d'une option à choix unique, suivez tout d'abord les mêmes étapes que dans la section [Produits](/apps/restaurant-internet/associer-codes-ref#produits). Puis sur la même page, dans la partie **Options**, vous pouvez retrouver les valeurs de ces codes dans les différents champs.

Dans l'exemple suivant, le produit est disponible en 3 tailles, chaque choix possible pour l'option **Sauce** est donc composé de 3 codes ref différents. Pour le choix de la sauce pimentée, les codes ref **piment|sm**, **piment|md**, et **piment|lg** correspondent respectivement aux 3 tailles du produit : **petite**, **moyenne**, et **grande**.
   ![Associer les codes ref - Codes ref option à choix unique](../images/013-fr-restaurant-internet-option-choix-simple.png)

### Choix multiple

Pour retrouver le code ref d'une option à choix multiple, suivez tout d'abord les mêmes étapes que dans la section [Produits](/apps/restaurant-internet/associer-codes-ref#produits). Puis sur la même page, dans la partie **Options**, vous pouvez retrouver les valeurs de ces codes dans les différents champs.

Dans l'exemple suivant, le produit est disponible en 3 tailles, chaque choix possible pour l'option **Suppléments** est donc composé de 3 codes ref différents. Pour le choix du tofu, les codes ref **tofu|sm**, **tofu|md**, et **tofu|lg** correspondent respectivement aux 3 tailles du produit : **petite**, **moyenne**, et **grande**.
   ![Associer les codes ref - Codes ref option à choix multiple](../images/014-fr-restaurant-internet-option-choix-multiple.png)

## Remises et promotions

La fonctionnalité d'ajout de remises ou de promotions n'existe actuellement pas dans Restaurant-internet.

## Charges

Pour retrouver le code ref d'une charge, suivez les étapes suivantes :

1. Depuis votre tableau de bord Restaurant-internet, sélectionnez **Paramétrages**.
   ![Associer les codes ref - Paramétrages](../images/015-fr-restaurant-internet-parametrages.png)
1. Sélectionnez l'onglet **Commande en ligne**, ou alors, dans la partie **Commande en ligne**, sélectionnez **Retrait sur place**, **A emporter**, ou **Livraison**. Les codes ref s'affichent respectivement dans les champs **Code réf Sur place**, **Code réf À emporter**, ou **Code réf Livraison**.
   ![Associer les codes ref - Charge sur place](../images/016-fr-restaurant-internet-charge-sur-place.png)

Dans le cas où des frais de gestion sont présents pour un certain mode de livraison, c'est sur cette même page que vous pouvez retrouver le code ref correspondant.