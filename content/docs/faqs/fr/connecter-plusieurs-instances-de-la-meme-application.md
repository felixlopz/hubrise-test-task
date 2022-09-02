---
title: Comment connecter plusieurs fois la même application ?
position: 130
layout: documentation
meta:
  title: Connecter plusieurs fois la même application | HubRise
  description: Instructions pour connecter plusieurs fois la même application au même point de vente, notamment des plateformes de livraison de repas.
---

Dans certains cas, il se peut que vous ayez besoin de connecter plusieurs instances de la même application à un seul et même point de vente HubRise. Vous pouvez par exemple exploiter plusieurs magasins sur une plateforme de livraison de repas et souhaiter les connecter à la même solution d'encaissement.

Pour connecter la première instance de l'application, voir la rubrique [Connexion d'une nouvelle application](/docs/connections#connecting-a-new-app). Si vous avez déjà connecté l'application, il est inutile d'accomplir à nouveau cette étape.

Pour connecter la deuxième instance de l'application, procédez comme suit :

1. Connectez-vous à HubRise à partir de la [page de connexion à HubRise] (https://manager.hubrise.com/login?locale=fr-FR).
1. Cliquez sur **CONNEXIONS** dans la barre de navigation de gauche.
1. Sélectionnez **Voir les apps disponibles**.
1. Sélectionnez la même application que celle que vous avez installée précédemment, puis cliquez sur **Connecter**.
1. Sur la page d'autorisation, sélectionnez le point de vente HubRise correct dans le menu déroulant.
1. Cliquez sur l'adresse URL dans la barre de navigation et incluez l'instruction `device_id=BrandName&` après la portion initiale de l'URL : `https://manager.hubrise.com/oauth2/v1/authorize?`, et avant `account_id=`. Le paramètre « BrandName » dans l'instruction `device_id=BrandName&` doit être remplacé par le nom de la marque. Pour plus d'informations, voir la rubrique [Règles de nommage](#naming-rules). \![Page d'autorisation avec adresse URL comprenant la chaîne `device_id=2&`.](../../images/066-fr-autorisation-page-device-id.png)
1. Puis, appuyez sur la touche Retour de votre clavier.
1. Cliquez sur **Autoriser** pour connecter l'application.
1. Suivez les instructions à l'écran pour configurer la nouvelle instance de l'application. Pour plus de détails, cliquez sur le lien **Afficher la documentation** de l'application correspondante sur la [page des applications HubRise](/apps).

Si votre application n'est pas présente sur la page des applications HubRise mais qu'elle se connecte correctement à HubRise à partir de son propre back-office, vous pouvez toujours connecter plusieurs instances. Dans ce cas, il vous suffit de procéder selon les étapes 5 et suivantes lorsque vous êtes redirigé vers la page d'autorisation.

---

**REMARQUE IMPORTANTE** : ce processus peut être répété indéfiniment en remplaçant à chaque fois la chaîne `device_id=n&` par une valeur `n` différente. L'attribution d'une valeur pertinente au paramètre `device_id` peut vous aider à différencier vos différentes instances sur la page **CONNEXIONS**. Lorsque vous choisissez cette valeur, suivez les règles de nommage décrites ci-dessous.

---

Une fois connectée, la nouvelle instance de l'application apparaît sur la page **CONNEXIONS**. Les différentes instances se distinguent selon la valeur de l'identifiant de l'appareil que vous avez choisi au moment de la configuration.

![Les multiples instances d'une même application peuvent être distinguées selon la valeur de l'identifiant de l'appareil.](../../images/067-fr-multiple-apps-device-id.png)

## Règles de nommage

Pour identifier plus facilement les instances de votre application, vous pouvez choisir librement la valeur de l'identifiant de l’appareil lors de la configuration initiale. Dans `device_id=BrandName&`, « BrandName » peut inclure une combinaison quelconque des caractères suivants :

- Lettres majuscules et minuscules
- Chiffres
- Espaces
- Traits de soulignement
- Tirets
- Parenthèses, crochets et accolades
- Points
