---
title: Paramètres
position: 7
layout: documentation
meta:
  title: Guide de paramétrage d'OrderLine
  description: Instructions permettant de modifier les préférences linguistiques, le flux des statuts de commande et les options d'impression dans OrderLine.
---

La section Paramètres vous permet de personnaliser OrderLine de sorte que l'app réponde le mieux à vos besoins. Les utilisateurs peuvent actualiser l'affichage et le fonctionnement d'OrderLine depuis le menu **Paramètres**. Pour accéder à la section Paramètres, sélectionnez l'icône en forme de roue dentée <InlineImage width="20" height="20">![Icône des paramètres d'OrderLine](../images/035-settings.jpg)</InlineImage> dans le coin supérieur droit.

<video controls title="OrderLine Access Settings">
  <source src="../images/031-en-access-settings.webm" type="video/webm"/>
</video>

Le menu **Paramètres** comporte les options suivantes :

- Général
- Statuts de commande
- Notifications
- Impression

## Paramètres généraux

Le menu **Paramètres** > **Général** comporte les options suivantes :

- **Déconnecter** : permet à l'utilisateur de mettre fin à la session OrderLine.
- **Langue** : permet à l'utilisateur de sélectionner sa langue préférée. OrderLine prend en charge l'**anglais**, le **français** et le **russe**.

![Paramètres généraux](../images/009-fr-parametres-general.png)

## Flux des statuts de commande

La gestion des commandes s'effectue d'après leur statut. Dans **Paramètres** > **STATUTS DE COMMANDE**, les utilisateurs peuvent définir le flux des statuts afin de personnaliser la gestion des commandes.

![Paramètres/statuts](../images/014-fr-parametres-statuts-commande.png)

Les statuts permettent de faire passer les commandes d'un état à un autre, un peu à la manière d'un diagramme de flux. Les commandes débutent toujours par le statut **Nouvelle**, mais elles peuvent évoluer de différentes manières selon le flux de statuts configuré par l'utilisateur. Une commande peut par exemple être **Acceptée**, puis **En livraison**, et s'achever par le statut **Terminée**. Dans chaque cas, sauf pour le statut **Terminée**, la commande peut se voir affecter le statut **Rejetée** :

![Exemple de flux de statuts](../images/010-fr-flux-statuts-exemple.png)

Les utilisateurs peuvent sélectionner le flux de statuts standard d'OrderLine, le simplifier, ou le personnaliser entièrement de manière à ce qu'il corresponde à leur façon de travailler dans leur établissement.

Les statuts disponibles sont les suivants :

- Nouvelle
- Reçue
- Acceptée
- En préparation
- Attente livraison
- Attente récupération
- En livraison
- Terminée
- Rejetée
- Annulée
- Échec livraison

Pour définir le flux des statuts d'une commande, procédez comme suit :

1. Sélectionnez le statut à mettre à jour.
1. Sélectionnez <InlineImage width="40" height="42">![Icône d'ajout d'OrderLine](../images/034-orderline-status-add-specific.jpg)</InlineImage> pour définir les statuts qu'une commande peut adopter à partir de son statut en cours. La coche <InlineImage width="40" height="40">![Icône de validation d'ajout de statut dans OrderLine](../images/037-orderline-status-added.jpg)</InlineImage> indique que le statut a déjà été sélectionné. Pour supprimer toutes les options, sélectionnez **Tout décocher**.

Dans l'exemple qui suit, le statut **Échec livraison** est ajouté en tant que flux de statuts possible pour le statut **En livraison**.

<video controls title="OrderLine Set Status Flow Example">
  <source src="../images/011-en-set-status-flow.webm" type="video/webm"/>
</video>

## Saisies complémentaires

Lorsqu'une commande est configurée selon un statut spécifique, OrderLine peut demander à l'utilisateur de mettre à jour l'**heure de livraison**, ou d'ajouter un **commentaire**.

---

**REMARQUE IMPORTANTE :** OrderLine n'envoie pas d'e-mails ni de mises à jour directement aux clients. Ces informations sont envoyées par votre solution de commande en ligne, sous deux conditions : Que la messagerie de votre client soit intégrée à HubRise. Que la messagerie de votre client soit intégrée à HubRise. Avant de mettre en place cette fonctionnalité, vérifiez que ces deux conditions sont remplies. Il est recommandé de créer une commande fictive afin de vérifier que le client reçoit bien la nouvelle heure de livraison et les commentaires.

---

Pour inviter l'utilisateur à mettre à jour l'**heure de livraison** en fonction du statut, procédez comme suit :

1. Sous l'option **Saisir une heure de livraison lorsque la commande passe dans l'un des statuts suivants**, sélectionnez la liste des statuts.
1. Sélectionnez <InlineImage width="40" height="42">![Icône d'ajout d'OrderLine](../images/034-orderline-status-add-specific.jpg)</InlineImage> pour définir un statut pouvant être sélectionné par l'utilisateur. Pour supprimer toutes les options, sélectionnez **Tout décocher**. La coche <InlineImage width="40" height="40">![Icône de validation d'ajout de statut dans OrderLine](../images/037-orderline-status-added.jpg)</InlineImage> indique que le statut a déjà été sélectionné.

Les indications qui suivent montrent comment ajouter une invite d'heure de livraison lorsqu'une commande est définie sur le statut **En livraison**.

<video controls title="OrderLine in Delivery Prompt">
  <source src="../images/012-en-add-prompt-in-delivery.webm" type="video/webm"/>
</video>

Les utilisateurs peuvent être invités à ajouter un commentaire lorsqu'une commande est définie sur un statut spécifique lié au client. Pour inviter les utilisateurs à saisir un commentaire en fonction du nouveau statut de la commande, procédez comme suit :

1. Dans la section **Saisir un commentaire lorsque la commande passe dans l'un des statuts suivants**, sélectionnez la liste des statuts.
1. Sélectionnez <InlineImage width="40" height="42">![Icône d'ajout d'OrderLine](../images/034-orderline-status-add-specific.jpg)</InlineImage> pour définir un statut pouvant être sélectionné par l'utilisateur. Pour supprimer toutes les options, sélectionnez **Tout décocher**. La coche <InlineImage width="40" height="40">![Icône de validation d'ajout de statut dans OrderLine](../images/037-orderline-status-added.jpg)</InlineImage> indique que le statut a déjà été sélectionné.

Dans l'exemple qui suit, l'utilisateur est invité à saisir un commentaire lorsque les commandes adoptent le statut **TERMINÉE**.

<video controls title="OrderLine Prompt Comment Example">
  <source src="../images/013-en-add-prompt-user-comment.webm" type="video/webm"/>
</video>

## Masquer les commandes

Les commandes qui correspondent à un statut spécifique peuvent être masquées dans la liste **Aujourd'hui**. Pour afficher les commandes qui sont masquées dans la liste **Aujourd'hui**, sélectionnez la carte de la commande masquée.

Pour masquer des commandes dans la liste **Aujourd'hui**, procédez comme suit :

1. Dans la section **Masquer les commandes de l'onglet 'Aujourd'hui' qui se trouvent dans l'un des statuts suivants**, sélectionnez la liste des statuts.
1. Sélectionnez <InlineImage width="40" height="42">![Icône d'ajout d'OrderLine](../images/034-orderline-status-add-specific.jpg)</InlineImage> pour masquer une commande ayant ce statut. Pour supprimer toutes les options, sélectionnez **Tout décocher**. La coche <InlineImage width="40" height="40">![Icône de validation d'ajout de statut dans OrderLine](../images/037-orderline-status-added.jpg)</InlineImage> indique que le statut a déjà été sélectionné.

L'exemple qui suit montre comment masquer les commandes ayant le statut **Terminée**.

<video controls title="OrderLine Status Hide Example">
  <source src="../images/015-en-setting-hidden-completed.webm" type="video/webm"/>
</video>

## Notifications

Les utilisateurs peuvent être avertis par un son lorsque de nouvelles commandes sont récupérées par OrderLine en fonction des paramètres de notification. Cette option s'applique à la fois aux rubriques **Aujourd'hui** et **Jours suivants**.

![Paramètres de notification](../images/016-fr-parametres-notifications.png)

Les paramètres disponibles sont les suivants :

| Paramètres | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| Répéter   | Nombre de fois où la notification sonore est émise.                          |
| Intervalle | Délai d'attente avant que OrderLine ne réémette la notification sonore. |
| Mélodie | Musique entendue lors de la notification sonore.                           |

Certaines mélodies ont une sonorité plus aiguë que d'autres. Choisissez la tonalité qui convient le mieux à vos goûts et à votre environnement. Le volume se règle dans les paramètres de votre appareil et non dans OrderLine.

Pour voir un exemple de paramétrage des notifications, consultez la vidéo suivante.

<video controls title="OrderLine Set Notifications Settings Examples">
  <source src="../images/025-en-settings-notifications.webm" type="video/webm"/>
</video>

## Impression

### Imprimante locale

OrderLine peut imprimer sur n'importe quelle imprimante reliée à l'appareil, via la boîte de dialogue d'impression du navigateur. Les commandes reçues sont validées et imprimées manuellement. Cette procédure est recommandée pour accuser réception des commandes.

### Auto-impression via Google Cloud Print

Google Cloud Print permet d'imprimer automatiquement un reçu pour la commande dès que celle-ci est reçue, sans interaction manuelle.

---

**REMARQUE IMPORTANTE :** Google Cloud Print n'est plus pris en charge depuis le 31 décembre 2020.

---

### Enregistrement de l'imprimante dans Google Cloud Print

Vous devez être en possession d'un ordinateur :

- Allumé en permanence.
- Connecté à internet.
- Sur lequel le navigateur Google Chrome est installé.
- Relié à une imprimante allumée.
- Dont les paramètres d'impression du système d'exploitation indiquent que l'imprimante est visible.

Pour ajouter votre imprimante à votre compte Google, procédez comme suit :

1. Ouvrez Google Chrome.
1. Dans la barre d'adresse, saisissez **chrome://devices**, puis appuyez sur Entrée.
1. Dans la section **Nouveaux périphériques**, recherchez votre imprimante.
1. Près du nom de votre imprimante, cliquez sur **Gérer**.
1. Dans la fenêtre **Confirmer l'enregistrement**, cliquez sur **Enregistrer**.
1. Sur l'écran de votre imprimante, suivez les étapes pour terminer l'enregistrement. Il se peut que vous deviez vérifier l'accès en sélectionnant un bouton intitulé **Enregistrer** ou **OK**.
1. Pour vérifier que votre imprimante est bien enregistrée, accédez à [https://www.google.com/cloudprint](https://www.google.com/cloudprint) et cliquez sur **Imprimantes**.

<video controls title="OrderLine Add Google Cloud Printer">
  <source src="../images/026-en-add-google-cloud-printer.webm" type="video/webm"/>
</video>

Si vous souhaitez configurer les paramètres de Google Cloud Print, rendez-vous dans [https://www.google.com/cloudprint](https://www.google.com/cloudprint).

### Connecter OrderLine à Google Cloud Print

Une fois la procédure d'inscription de votre imprimante à Google Cloud Print terminée, vous devez connecter OrderLine à Google Cloud Print. Procédez comme suit :

1. Allez dans **Paramètres**, ou cliquez sur l'icône <InlineImage width="46" height="46">![Icône des paramètres d'OrderLine](../images/035-settings.jpg)</InlineImage> des paramètres.
1. Dans le menu des paramètres, sélectionnez **IMPRESSION**.
1. Cliquez sur **Connecter**.
1. Google Cloud Print vous demande l'autorisation de connecter l'application HubRise. **Remarque** : Google affichera HubRise en tant qu'application non enregistrée. HubRise ne sera pas enregistré auprès de Google, puisque le service Google Cloud Print n'est plus pris en charge depuis décembre 2020.
1. Cliquez sur **Avancé**, puis **Aller sur hubrise-apps.com**.
1. Google vous demandera d'octroyer l'accès de HubRise à votre périphérique Google Cloud Print. Cliquez sur **Autoriser** pour accomplir la procédure.

<video controls title="OrderLine Grant HubRise Google Printer Access">
  <source src="../images/027-en-register-google-cloud-printer.webm" type="video/webm"/>
</video>

Une fois que vous avez accordé à HubRise l'autorisation d'utiliser votre périphérique Google Cloud Print, configurez l'impression automatique. Pour cela, procédez comme suit :

1. Cliquez sur **Paramètres** > **Sélectionner l'imprimante**, puis cliquez sur la flèche de développement.
1. Dans la liste déroulante, choisissez d'imprimer à partir de votre imprimante connectée à internet.

<video controls title="Orderline Set Automatic Printing">
  <source src="../images/028-en-setting-automatic-printer.webm" type="video/webm"/>
</video>
