---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Deliveroo Connection to HubRise - Instructions
  description: See how to connect your Deliveroo online store to HubRise. Connection is simple. Send the link of your Deliveroo page to HubRise and follow a few steps to connect.
---

La connexion de Deliveroo à HubRise s'effectue en quelques étapes simples.

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, commencez par en ouvrir un sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup). L'inscription ne prend que quelques minutes !

---

## 1\. Activez HubRise sur Deliveroo

Dans un premier temps, l'intégration de HubRise doit être activée sur votre compte Deliveroo.

Contactez-nous par e-mail à l'adresse [support@hubrise.com](mailto:support@hubrise.com) en précisant les informations suivantes :

- Le lien URL du magasin Deliveroo que vous souhaitez connecter. Exemple : [https://deliveroo.co.uk/menu/london/clapham/camile-thai-clapham](https://deliveroo.co.uk/menu/london/clapham/camile-thai-clapham).
- L'identifiant de restaurant Deliveroo de votre magasin. Pour plus de détails, reportez-vous à notre FAQ : [Comment trouver mon identifiant de restaurant Deliveroo](/apps/deliveroo/faqs/find-deliveroo-restaurant-id).
- L'adresse e-mail avec laquelle vous vous connectez au back-office de Deliveroo.
- L'adresse e-mail de votre gestionnaire de compte Deliveroo.
- Le nom et l'identifiant de votre point de vente HubRise. Exemple : `Fast Pizza Baker Street z6q31-0`.
- Le type de services Deliveroo que vous souhaitez associer à votre point de vente HubRise. Pour une description des types de services Deliveroo, y compris la livraison effectuée par Deliveroo ou en restaurant, reportez-vous à notre page [Terminologie](/apps/deliveroo/terminology#service-types).

Avec ces informations en main, l'équipe d'intégration de Deliveroo pourra activer la connexion HubRise de votre magasin. Les nouvelles connexions sont approuvées les mardis et les jeudis uniquement.

---

**REMARQUE IMPORTANTE :** si certains codes de référence de produits sont manquants, Deliveroo n'activera pas la connexion HubRise. Pour plus de détails, voir la page [Mappage des codes de référence](/apps/deliveroo/map-ref-codes/).

---

## 2\. Connectez l'instance Bridge

---

**REMARQUE IMPORTANTE :** Deliveroo Bridge se connecte à HubRise au niveau du point de vente. Pour plus d'informations, voir la page [Points de vente](/docs/locations/).

---

Pour connecter Deliveroo Bridge à HubRise, procédez comme suit :

1. Connectez-vous à votre compte HubRise.
1. Sélectionnez le point de vente que vous souhaitez connecter dans le menu déroulant.
1. Sélectionnez **CONNEXIONS**, puis **Voir les apps disponibles**.
1. Dans la liste des apps, sélectionnez **Deliveroo**.
1. Cliquez sur **Connecter**.
1. Cliquez sur **Autoriser** pour octroyer à Deliveroo Bridge l'accès au point de vente de votre restaurant référencé dans HubRise. Pour les comptes associés à plusieurs points de vente, développez **Tous les points de vente** afin de choisir l'entrée correcte en premier, puis cliquez sur **Autoriser**.
1. Une nouvelle page vous demande d'indiquer votre identifiant de restaurant Deliveroo. Entrez l'identifiant, puis cliquez sur **Enregistrer** pour terminer le processus de connexion.

![Identifiant de restaurant Deliveroo](../images/001-en-deliveroo-restaurant-id.png)

## 3\. Configurez vos préférences

Une fois la connexion de l'instance Bridge effectuée, vous devez modifier quelques paramètres sur la page Configuration afin de permettre l'envoi correct des commandes à votre EPOS.

Pour plus d'informations sur la page Configuration et la manière d'y accéder, voir la rubrique [Interface utilisateur](/apps/deliveroo/user-interface/#configuration-page). Pour plus de détails sur la configuration des paramètres de Deliveroo Bridge, voir la rubrique [Configuration](/apps/deliveroo/configuration).

## 4\. Mappez les produits avec des codes de référence

Si vous utilisez Deliveroo avec un EPOS, vous devez associer tous les produits de votre menu Deliveroo aux codes de référence correspondants. Vous permettrez ainsi à votre EPOS d'identifier correctement chaque article.

Pour savoir comment mapper les codes de référence sur Deliveroo, voir la rubrique [Mappage des codes de référence](/apps/deliveroo/map-ref-codes).
