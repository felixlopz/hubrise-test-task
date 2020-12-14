---
title: Se connecter à HubRise
position: 2
layout: documentation
meta:
  title: Instructions pour connecter Nestor à HubRise
  description: La connexion entre Nestor et HubRise se fait simplement grâce à l'utilitaire WebNES, inclus dans l'installation de Nestor sur votre poste Windows.
---

Connecter Nestor à HubRise peut être fait en seulement quelques étapes.

## Se connecter

Pour établir la connexion entre un point de vente Nestor et HubRise :

1. Lancez l'application **WebNES**, incluse dans l'installation de Nestor, depuis votre poste Windows.
1. Cliquez sur le menu **Configuration** dans la barre de menu.
1. Cliquez sur **HubRise**. Une fenêtre nommée **Configuration HubRise** s'ouvre.
   ![Connexion à HubRise - Configuration HubRise](../images/001-fr-nestor-configuration-hubrise.png)

1. Cliquez sur **Connecter**. Vous êtes redirigés vers l'interface HubRise.
1. Choisissez le point de vente que vous désirez connecter et cliquez sur **Autoriser** pour donner à Nestor l'accès à vos informations. Si plusieurs listes de clients ou catalogues sont disponibles, cliquez sur **Suivant** afin d'afficher les listes déroulantes correspondantes avant de cliquer sur **Autoriser**.

---

**NOTE IMPORTANTE** Vérifiez bien le choix du catalogue avant d'autoriser la connexion car celui-ci est écrasé dès que la connexion est établie.

---

   ![Connexion à HubRise - Choix du point de vente](../images/002-fr-nestor-connexion-location.png)

1. Copiez le code affiché et collez-le dans la fenêtre **Configuration HubRise** de l'utilitaire WebNES.
   ![Connexion à HubRise - Affichage du code](../images/003-fr-nestor-connexion-code.png)

1. Cliquez sur **Valider**. L'interface WebNES affiche **Connecté à HubRise**, ainsi que toutes les informations de votre point de vente.
   ![Connexion à HubRise - Informations du point de vente](../images/004-fr-nestor-connecte.png)

1. En cas de besoin, l'éditeur du logiciel Nestor peut vous venir en aide. Pour permettre cela, [donnez les accès nécessaires au support de Nestor](/apps/nestor/connect-hubrise#donner-acc-s-au-support-de-nestor).

---

**NOTE IMPORTANTE** Vous devrez vous connecter à un compte HubRise existant, ou créer un nouveau compte pour terminer d'établir la connexion. Pour plus d'informations sur la manière de créer un profil utilisateur ou vous connecter à HubRise, veuillez consulter notre [Guide de prise en main](/docs/getting-started/).

---

## Donner accès au support de Nestor

Il est conseillé de donner à l'éditeur du logiciel Nestor les droits nécessaires pour vous venir en aide en cas de besoin. Pour cela, suivez les étapes suivantes depuis votre espace HubRise :

1. Dans le menu de gauche, sélectionnez **SETTINGS** > **ACCOUNTS**. La liste de vos comptes s'affiche.
1. Sélectionnez le compte auquel votre point de vente est rattaché.
1. Dans l'espace **Locations**, sélectionnez votre point de vente.
1. Dans l'espace **Permissions**, ajoutez *info@svitex.com* en sélectionnant l'option **Manager** (et non **Admin**) dans la liste déroulante des rôles, puis cliquez sur l'icône *+*. L'ajout d'un utilisateur est le moyen recommandé de donner accès à un tiers à votre point de vente, le partage de mot de passe est déconseillé pour des raisons de sécurité.

## Se déconnecter

1. Ouvrez l'application **WebNES**.
1. Sélectionnez **Configuration** dans la barre de menu.
1. Sélectionnez **HubRise**. Une fenêtre nommée **Configuration HubRise** s'ouvre.
1. Cliquez sur **Déconnecter**.
   ![Connexion à HubRise - Déconnexion](../images/005-fr-nestor-deconnecte.png)
