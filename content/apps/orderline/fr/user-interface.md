---
title: Interface utilisateur
path_override: interface-utilisateur
position: 4
layout: documentation
meta:
  title: Interface utilisateur | OrderLine | HubRise
  description: Les onglets Aujourd'hui, Jours suivants et Historique sont disponibles afin de faciliter l'accès à OrderLine. Synchronisez les données.
---

## Commandes pour Aujourd'hui

L'onglet **Aujourd'hui** affiche toutes les commandes dont la date de livraison correspond à la date d'aujourd'hui. L'onglet affiche un compteur de commandes pour indiquer le nombre de commandes reçues.

Les commandes sont triées en fonction de leur heure de livraison de collecte souhaitée, avec les commandes à traiter le plus vite en haut de la liste.

Les commandes peuvent être masquées, selon l'état du paramètre **Masquer le statut de la commande**. Vous pouvez retrouver ces commandes masquées en ouvrant l'onglet **Aujourd'hui** et en cliquant sur **VOIR** dans la dernière carte. Pour plus d'informations, voir la rubrique [Enchaînement des statuts de commande](/apps/orderline/parametres/#encha-nement-des-statuts-de-commande/).

![Onglet Aujourd'hui de OrderLine](./images/006-todays-orders.png)

## Jours suivants

L'onglet **Jours suivants** affiche toutes les commandes avec une date de livraison supérieure à la date d'aujourd'hui. L'onglet affiche un compteur de commandes pour indiquer le nombre de commandes reçues.

![Onglet Jours suivants de OrderLine](./images/007-future-orders.png)

## Historique des commandes

OrderLine agrège les commandes d'aujourd'hui, les commandes futures et les commandes passées dans une liste. Pour consulter ce dernier onglet, cliquez sur **HISTORIQUE**.

Les commandes sont classées par ordre décroissant de date, la commande la plus récente apparaissant en premier.

Vous pouvez filtrer les commandes en combinant :

- Le nom du client ou la référence de la commande.
- La plage de dates de livraison.

![Onglet Historique des commandes de OrderLine](./images/008-orders-history.png)
