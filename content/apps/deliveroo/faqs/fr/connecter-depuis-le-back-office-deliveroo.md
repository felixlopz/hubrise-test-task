---
title: Comment connecter HubRise depuis le back-office de Deliveroo ?
position: 5
layout: documentation
meta:
  title: Connecter HubRise depuis Deliveroo | Deliveroo FAQs | HubRise
  description: Étapes à suivre pour connecter votre restaurant Deliveroo avec HubRise directement depuis le back-office Deliveroo.
---

Pour connecter vous-même vos restaurants Deliveroo à HubRise, activer HubRise depuis le back-office Deliveroo, puis connecter Deliveroo Bridge à votre point de vente HubRise.

Pour activer HubRise, suivez ces étapes :

1. Connectez-vous à votre [back-office Deliveroo](https://restaurant-hub.deliveroo.net/).
1. Cliquer **Paramètres** > **Caisse (POS)**, ensuite cliquer **Intégrations**.
1. Depuis la page **Intégrations**, dans **Quel système POS utilisez-vous ?**, selectionner `HubRise`.
1. Sélectionner tous les établissements que vous souhaitez connecter dans la liste et pour chaque établissement, saisir **l'ID du restaurant** correspondant.
1. Dans **Webhook URL**, copier la valeur suivante : `https://deliveroo.hubrise-apps.com/deliveroo_webhook`.
1. Décider si vous souhaitez gérer votre menu Deliveroo depuis votre logiciel de caisse :
    - Pour mettre à jour votre menu en envoyant votre [catalogue HubRise](/apps/deliveroo/envoi-catalogue) vers Deliveroo, sélectionner **Oui**.
    - Pour mettre à jour votre menu manuellement depuis le back-office Deliveroo, sélectionner **Non**. Assurez-vous que tous les produits de votre menu ont un code PLU.
1. Confirmer que vos produits ont un code PLU.
1. Cliquer sur **Connecter mon système POS** pour confirmer.

Pour terminer la connexion et commencer à recevoir vos commandes Deliveroo dans HubRise, vous devez [connecter Deliveroo Bridge](/apps/deliveroo/connexion-hubrise#connecter-deliveroo-bridge) à tous les points de vente HubRise que vous souhaitez associer aux restaurants Deliveroo. Si vous avez besoin d'aide pour cette opération, contacter notre support au [support@hubrise.com](mailto:support@hubrise.com).
