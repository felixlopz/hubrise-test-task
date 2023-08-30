---
title: Configuration
path_override: configuration
position: 3
layout: documentation
meta:
  title: Configuration | Smood | HubRise
  description: Instructions simples pour configurer Smood afin que la plateforme fonctionne parfaitement avec le logiciel de caisse ou d'autres applications connectées à HubRise.
---

## Ouvrir la page de configuration

Sur la page de configuration, vous pouvez configurer la façon dont vos commandes sont envoyées à votre logiciel de caisse, ainsi que d'autres paramètres.

![Page de configuration Smood](./images/003-configuration.png)

Pour ouvrir la page de configuration, suivez ces étapes :

- Connectez-vous à votre [back-office Smood](https://manager.smood.ch/).
- Sélectionnez le restaurant dans le menu déroulant de la barre latérale gauche.
- Cliquez sur l'onglet **Paramètres**, puis dans la section **Intégrations**, cliquez sur **Éditer références POS**.

Vous êtes également redirigé vers la page de configuration lorsque vous connectez Smood à HubRise. Pour plus d'informations, voir la rubrique [Connexion à HubRise](/apps/smood/connexion-hubrise).

## Configurer vos paramètres

### Types de service

Les types de service tels que la livraison via Smood, la livraison par le restaurant ou la vente à emporter peuvent nécessiter la saisie du code ref correspondant. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise pour vérifier. Pour plus d'informations sur les types de service pris en charge par Smood, voir la rubrique [Types de service](/apps/smood/terminologie#types-de-service).

Cette section vous permet également de marquer les commandes Smood comme étant à livrer ou à emporter. Les commandes livrées par le restaurant sont toujours identifiées comme des commandes en livraisons.

### Remises

Dans cette section, vous pouvez configurer les codes ref à utiliser pour les remises et promotions envoyées à HubRise :

- **Remise** : remises qui s'appliquent à l'intégralité de la commande, par exemple une remise de 10 %.
- **Promotion** : remises qui s'appliquent à un ensemble d'articles, par exemple un menu.

### Frais

Des frais de livraison s'appliquent aux commandes livrées par le restaurant. Dans cette section, vous pouvez configurer le code ref à utiliser.

### Paiements

Toutes les commandes Smood sont payables en ligne. Les commandes envoyées au logiciel de caisse incluent un paiement. Dans cette section, vous pouvez configurer le code ref à utiliser.

### Paramètres de synchronisation

Les cases à cocher de cette section permettent de configurer le flux de synchronisation entre Smood et HubRise :

- **Enable automatic sync of the catalog** (Activer la synchronisation automatique du catalogue) : cochez la case pour que le menu Smood soit automatiquement mis à jour à chaque modification du catalogue HubRise.
- **Enable automatic sync of the inventory** (Activer la synchronisation automatique de l'inventaire) : cochez la case pour que les articles en rupture de stock dans l'inventaire HubRise soient automatiquement supprimés du menu Smood.
- **Activer la synchronisation automatique du statut de Smood à HubRise** : cochez la case pour que Smood mette à jour le statut des commandes dans HubRise.

### Enregistrer vos modifications

Une fois vos paramètres configurés, cliquez sur <InlineImage width="24" height="24">!\[icône Sauvegarder\](../images/save-icon.png)</InlineImage>&nbsp;**Sauvegarder**.
