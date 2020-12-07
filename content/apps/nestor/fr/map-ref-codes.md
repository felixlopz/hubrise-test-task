---
title: Trouver les codes ref
position: 5
layout: documentation
meta:
  title: Connexion entre Nestor et HubRise - Trouver les codes ref
  description: Apprenez comment trouver les codes ref de vos produits sur Nestor. Lancez l'application et suivez ces instructions.
---

Après avoir connecté votre logiciel de caisse Nestor à votre compte HubRise, vous pouvez synschroniser leurs données. Pour cela, certaines étapes doivent être entreprises. Les différents éléments présents dans Nestor sont identifiés par des codes uniques. Quand vous mettez en place la connexion entre HubRise et d'autres applications, vous devez fournir ces codes.

## Exporter le catalogue

Le catalogue est exporté automatiquement vers HubRise dans les deux cas suivants :
- Lorsque la connexion est établie.
- Lorsque le catalogue est édité.

Il n'est pas possible d'exporter manuellement le catalogue.

## SKUs

Une SKU (*Stock Keeping Unit*) dans HubRise est un produit dans Nestor dans une déclinaison donnée. Par exemple, le produit *Margarita* dans une déclinaison *Grande* correspond à la SKU *Margarita Grande*.

Pour retrouver le code ref d'un SKU, deux cas peuvent se présenter selon que le produit a des déclinaisons ou non.

### Produits sans déclinaison

1. Sélectionnez **Gestion** dans la barre de menu.
1. Survolez l'option **Articles**, et sélectionnez **Fiche articles**.
1. Sélectionnez le produit désiré. Dans l'onglet **Article**, le code ref de la SKU s'affiche dans le champ **Code**.
   ![Codes ref - Produits sans déclinaison](../images/006-fr-nestor-code-article.png)

### Produits avec déclinaisons

1. Suivez les mêmes étapes que dans la section précédente et notez le code présent dans le champ **Code**.
1. Fermez la fenêtre **Articles**.
1. Sélectionnez **Gestion** dans la barre de menu.
1. Survolez l'option **Déclinaisons**, et sélectionnez **Fiche déclinaisons**.
1. Sélectionnez la déclinaison désirée. Dans l'onglet **Déclinaison**, le code ref s'affiche dans le champ **Code**.
1. Notez le code présent dans le champ **Code**.
1. Le code ref de la SKU est composé du code de l'article suivi du code de la déclinaison, séparés par le caractère `|`, comme dans l'exemple suivant : un article *Pizza* dont le code est *PIZ*, ayant une déclinaison *Grande* dont le code est *GRA*, résulte en un code ref *PIZ|GRA*.
   ![Codes ref - Produits avec déclinaisons](../images/007-fr-nestor-code-declinaison.png)

## Options

Les options dans HubRise correspondent aux ingrédients dans Nestor.

Pour retrouver le code ref d'une option, suivez les étapes suivantes :
1. Sélectionnez **Gestion** dans la barre de menu.
1. Survolez l'option **Ingrédients**, et sélectionnez **Fiche ingrédients**.
1. Sélectionnez l'option désirée. Dans l'onglet **Ingrédient**, le code ref s'affiche dans le champ **Code**.
   ![Codes ref - Options](../images/008-fr-nestor-code-ingredient.png)

## Remises

Les remises dans HubRise correspondent aux offres promotionnelles dans Nestor. Celles-ci ne sont pas encore synchronisées avec HubRise, cette fonctionnalité est en cours de développement et sera disponible très prochainement.

Pour retrouver le code ref d'une remise, suivez les étapes suivantes :
1. Sélectionnez **Gestion** dans la barre de menu.
1. Sélectionnez **Offres promotionnelles**.
1. Sélectionnez la remise désirée. Dans l'onglet **Générale**, le code ref s'affiche dans le champ **Code**.
   ![Codes ref - Remises](../images/009-fr-nestor-code-offre-promotionnelle.png)

## Promotions

Les promotions dans HubRise correspondent aux menus dans Nestor. Pour retrouver le code ref d'un menu, suivez les mêmes étapes que pour un [produit sans déclinaison](/apps/nestor/map-ref-codes#produit-sans-d-clinaison). Dans Nestor, un menu est considéré comme un article dont l'option **Est un menu**, dans l'onglet **Déclinaison**, est cochée.
   ![Codes ref - Promotions](../images/010-fr-nestor-est-un-menu.png)

## Méthodes de paiement

Les méthodes de paiement dans HubRise correspondent aux moyens de paiement dans Nestor. Leurs codes ref ne sont pas encore synchronisés, cette fonctionnalité est en cours de développement et sera disponible prochainement.

## Types de service

Les codes ref des types de service ne sont pas encore supportés par Nestor. Cette fonctionnalité est en cours de développement et sera disponible prochainement.
