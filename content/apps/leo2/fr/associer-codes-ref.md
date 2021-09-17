---
title: Associer les codes ref
position: 3
layout: documentation
meta:
  title: Associer les codes ref | LEO2 | HubRise
  description: Instructions pour associer les codes ref des produits LEO2 avec d'autres applications connectées à HubRise pour la synchronisation des données.
---

Une fois votre logiciel de caisse LEO2 connecté à HubRise, vous devez configurer vos autres applications connectées, afin que les différents éléments présents dans les commandes soient bien identifiés par LEO2.

LEO2 identifie chaque élément d'une commande par un code ref. Vous devez indiquer les codes ref fournis par LEO2 dans vos autres applications, afin que les commandes puissent être réceptionnées.

Il y a deux façons de procéder :

- Vous pouvez exporter le catalogue LEO2 vers HubRise, puis importer ce catalogue dans vos autres applications.
- Ou vous pouvez saisir manuellement les codes ref dans vos autres applications.

Seules certaines applications permettent l'import d'un catalogue depuis HubRise. Pour les autres, il faudra saisir manuellement les codes ref.

## Exporter le catalogue

Pour exporter manuellement un catalogue vers HubRise, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Paramètres et Réglages**.
1. Cliquez sur **HubRise**.
   ![Associer les codes ref - Paramètres HubRise](../images/003-fr-leo2-parametres-hubrise.png)
1. Cliquez sur **Envoi catalogue**.
1. Cliquez sur **Oui**.

Vous devez maintenant importer le catalogue HubRise dans vos autres applications connectées à HubRise. Pour effectuer cette opération, référez-vous à la documentation de ces applications sur le site de HubRise.

## Produits

Pour retrouver le code ref d'un produit, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Produits**.
1. Cliquez sur **Rechercher** ou appuyez sur la touche **F1**.
   ![Associer les codes ref - Recherche d'un produit](../images/005-fr-leo2-recherche-produit.png)
1. Sélectionnez dans la liste le produit désiré. Le code ref s'affiche en haut à droite de la fenêtre **FICHE PRODUIT**, dans le champ **Clé unique**.
   ![Associer les codes ref - Détails d'un produit](../images/006-fr-leo2-details-produit.png)

## SKUs

LEO2 ne permet pas de créer de SKU. Pour remplacer cette fonctionnalité, il est nécessaire de créer un nouveau produit pour chaque variante d'un même produit.

## Options

Les options dans HubRise correspondent aux messages cuisine dans LEO2.

Pour retrouver le code ref d'une option, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Produits**.
1. Cliquez sur **Messages Cuisine**.
1. Cliquez sur **Saisie Comment**.
1. Dans le champ **Libellé**, sélectionnez la liste à laquelle appartient le message cuisine désiré. Le code ref s'affiche dans la colonne **ID**.
   ![Associer les codes ref - Messages cuisine](../images/007-fr-leo2-messages-cuisine.png)

## Promotions

Les promotions dans HubRise correspondent aux menus dans LEO2, et sont gérés comme des produits. Pour retrouver leur code ref, suivez les mêmes étapes que pour un [produit](/apps/leo2/associer-codes-ref#produits).

## Méthodes de paiement

Les méthodes de paiement dans HubRise correspondent aux modes de règlement dans LEO2. Pour retrouver leur code ref, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Paramètres et Réglages**.
1. Cliquez sur **Modes de Règlement**. Le code ref s'affiche dans la colonne **No**.
   ![Associer les codes ref - Modes de règlement](../images/008-fr-leo2-modes-reglement.png)

## Types de service

Les types de service dans HubRise correspondent aux tarifs dans LEO2. Pour retrouver leur code ref, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Ventilations et Tarifs**.
1. Sélectionnez le tarif désiré.
1. Cliquez sur **Modif**. Le code ref s'affiche dans le champ **Code**.
   ![Associer les codes ref - Tarifs](../images/009-fr-leo2-tarifs.png)
