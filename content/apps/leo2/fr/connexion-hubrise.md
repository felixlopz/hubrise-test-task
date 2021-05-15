---
title: Connexion à HubRise
position: 2
layout: documentation
meta:
  title: Connexion | LEO2 | HubRise
  description: Étapes pour établir une connexion entre LEO2 et HubRise. Connectez votre caisse et synchronisez vos données avec d'autres applications.
---

Pour connecter LEO2 à HubRise, il suffit de suivre quelques étapes.

## Connecter LEO2

Pour établir la connexion entre un point de vente LEO2 et HubRise, vous devez activer le module Vente Externe lors de votre demande de licence LEO2. Suivez ensuite les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
   ![Connexion - Écran de gestion](../images/002-fr-leo2-menu-gestion.png)
1. Cliquez sur **Paramètres et Réglages**.
1. Cliquez sur **HubRise**.
   ![Connexion - Paramètres HubRise](../images/003-fr-leo2-parametres-hubrise.png)
1. Si les champs **Nom de l'enseigne** et **Localisation (Ville)** sont vides, remplissez-les.
1. Cliquez sur **Obtenir un code d'authentification**. Vous êtes redirigé vers l'interface HubRise.
1. Choisissez le point de vente que vous désirez connecter et cliquez sur **Autoriser** pour donner à Nestor l'accès à vos informations. Si plusieurs listes de clients ou catalogues sont disponibles, cliquez sur **Suivant** afin d'afficher les listes déroulantes correspondantes, sélectionnez l'option voulue, puis cliquez sur **Autoriser**.
1. Copiez le code affiché et collez-le dans la fenêtre **Paramétrage interface HubRise** de LEO2.
1. Cliquez sur **Etablir Connexion**.
1. Cliquez sur **OK**.
   ![Connexion - HubRise connecté](../images/004-fr-leo2-hubrise-connecte.png)
1. Cliquez sur **Enregistrer**.
1. En cas de besoin, l'éditeur du logiciel LEO2 peut vous venir en aide. Pour leur donner accès à votre compte HubRise, [ajoutez les permissions nécessaires](/apps/leo2/connexion-hubrise#donner-acc-s-au-support-de-leo2).

---

**REMARQUE IMPORTANTE :** Vous devrez vous connecter à un compte HubRise existant, ou créer un nouveau compte pour terminer d'établir la connexion. Pour plus d'informations sur la manière de créer un profil utilisateur ou vous connecter à HubRise, consultez notre [Guide de prise en main](/docs/getting-started/).

---

## Donner accès au support de LEO2

Il est conseillé de donner à l'éditeur du logiciel LEO2 l'accès à votre compte HubRise. En cas de besoin, ils pourront ainsi vous venir en aide plus facilement. Pour cela, suivez les étapes suivantes :

1. Depuis votre espace HubRise, sélectionnez **CONFIGURATION** > **COMPTES** dans le menu de gauche. La liste de vos comptes s'affiche.
1. Sélectionnez le compte auquel votre point de vente est rattaché.
1. Dans la section **Points de vente**, sélectionnez votre point de vente.
1. Dans la section **Permissions**, ajoutez *atoo@atoosarl.fr* en sélectionnant l'option **Manager** (et non **Admin**) dans la liste déroulante des rôles, puis cliquez sur l'icône *+*. L'ajout d'un utilisateur est le moyen recommandé de donner accès à un tiers à votre point de vente, le partage de mot de passe est déconseillé pour des raisons de sécurité.

## Déconnecter LEO2

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Paramètres et Réglages**.
1. Cliquez sur **HubRise**.
1. Cliquez sur **Déconnecter**.