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

### Produit sans déclinaison

1. Sélectionnez **Gestion** dans la barre de menu.
1. Survolez l'option **Articles**, et sélectionnez **Fiche articles**.
1. Sélectionnez le produit désiré. Dans l'onglet **Article**, le code ref de la SKU s'affiche dans le champ **Code**.

### Produit avec déclinaisons

1. Suivez les mêmes étapes que dans la section précédente et notez le code présent dans le champ **Code**.
1. Fermez la fenêtre **Articles**.
1. Sélectionnez **Gestion** dans la barre de menu.
1. Survolez l'option **Déclinaisons**, et sélectionnez **Fiche déclinaisons**.
1. Sélectionnez la déclinaison désirée. Dans l'onglet **Déclinaison**, le code ref s'affiche dans le champ **Code**.
1. Notez le code présent dans le champ **Code**.
1. Le code ref de la SKU est composé du code de l'article suivi du code de la déclinaison, séparés par le caractère `|`, comme dans l'exemple suivant : un article *Pizza* dont le code est *PIZ*, ayant une déclinaison *Grande* dont le code est *GRA*, résulte en un code ref *PIZ|GRA*.

## Options

Les options dans HubRise correspondent aux ingrédients dans Nestor.

Pour retrouver le code ref d'une option, suivez les étapes suivantes :
1. Sélectionnez **Gestion** dans la barre de menu.
1. Survolez l'option **Ingrédients**, et sélectionnez **Fiche ingrédients**.
1. Sélectionnez l'option désirée. Dans l'onglet **Ingrédient**, le code ref s'affiche dans le champ **Code**.

## Remises = offres promotionnelles

## Promotions = menus

La démarche pour créer un menu est la même que celle pour créer un produit, à la différence qu'il est nécessaire de cocher l'option **Est un menu**, dont l'activation va permettre de présenter les options spécifiques à la création d'un menu.
