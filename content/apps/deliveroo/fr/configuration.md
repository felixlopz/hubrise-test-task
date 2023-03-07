---
title: Configuration
position: 4
layout: documentation
meta:
  title: Configuration | Deliveroo | HubRise
  description: Configurer Deliveroo Eats Bridge pour recevoir vos commandes Deliveroo dans votre logiciel de caisse ou d'autres applications connectées à HubRise.
---

La page de configuration permet de personnaliser le comportement de Deliveroo Bridge. Elle est divisée en plusieurs sections pour faciliter la navigation.

![Page de configuration de Deliveroo Bridge](../images/014-fr-configuration-page-cropped.png)

## Langue

Choisir la langue à utiliser pour les éléments génériques tels que les `Frais de livraison`. Ces noms peuvent apparaître dans votre logiciel de caisse et sur les reçus des clients.

## Commandes

### Types de service

Les types de service tels que la livraison par Deliveroo, la livraison par le restaurant ou la vente à emporter peuvent nécessiter la saisie du code ref correspondant. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise pour vérifier.

Cette section vous permet également de marquer les commandes Deliveroo comme étant à livrer ou à emporter. Cette option est utile si vous votre entreprise est soumise à des exigences spécifiques en matière de rapports financiers.

### Remises

Cette section permet de spécifier le code ref de la remise appliquée à vos produits, dans le cas où vous auriez une remise active sur Deliveroo. Pour obtenir le code ref correspondant, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Les promotions disponibles sur Deliveroo apparaissent sur la page **Toutes les offres** de votre back-office Deliveroo.

![Exemple de page "Toutes les offres" dans le back-office Deliveroo](../images/013-fr-deliveroo-offer.png)

### Frais

Si des frais s'appliquent, un code ref peut être nécessaire. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise pour vérifier.

Dans cette section, vous pouvez spécifier le code ref des frais de livraison, ainsi que des suppléments appliqués aux commandes inférieures au prix minimum.

### Paiements

Les clients de Deliveroo peuvent régler leur commande en espèces lorsque le restaurant prend en charge la livraison.

Cette section de la page de configuration permet de spécifier les codes ref pour les paiements en ligne et en espèces. Pour connaître les codes à utiliser, consultez la documentation de votre logiciel de caisse sur le site internet de HubRise.

### Statuts de commande

Deliveroo vous demande d'accuser réception de chaque commande que vous recevez. Dans cette section, vous pouvez sélectionner le statut HubRise qui envoie une confirmation de commande à Deliveroo. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise pour vérifier la valeur correcte.

## Catalogue

![Page de configuration de Deliveroo Bridge, section Catalogue](../images/015-fr-configuration-page-menu.png)

Dans cette section, sélectionner l'identifiant de la marque et l'identifiant du menu du menu Deliveroo dans lequel vous souhaitez envoyer votre catalogue HubRise. Les valeurs par défaut fonctionnent généralement pour la plupart des utilisateurs.

De plus, choisissez si vous souhaitez pousser votre catalogue HubRise vers Deliveroo chaque fois qu'il est modifié sur HubRise. Par défaut, cette option est désactivée.

Enfin, inclure la description du menu et l'URL de l'image de bannière que vous souhaitez afficher sur votre restaurant Deliveroo.

Pour obtenir une URL publique pour votre image de bannière, envoyez un e-mail à  [support@hubrise.com](mailto:support@hubrise.com) en incluant une image avec les caractéristiques suivantes :

- Au moins 1920x1080 pixels, format 16:9.
- Format JPG ou PNG.
- Moins de 2 Mo.

---

**REMARQUE IMPORTANTE :** La description du menu et l'image de la bannière sont nécessaires pour pousser avec succès votre catalogue vers Deliveroo.

---

## Inventaire

Vous pouvez envoyer les données d'inventaire dans Deliveroo à partir de la page **Actions**. Lorsque vous le faites, les produits définis comme étant en rupture de stock dans HubRise sont masqués sur Deliveroo.

Vous pouvez également configurer Deliveroo Bridge pour envoyer automatiquement l'inventaire à Deliveroo chaque fois que votre inventaire HubRise est mis à jour. Cela se fait en cochant la case **Activer l'envoi automatique du catalogue**.

## Enregistrer la configuration

Lorsque vous êtes satisfait de la configuration de Deliveroo Bridge, cliquez sur **Enregistrer** en haut de la page pour revenir à la page **Dernières opérations**.

## Réinitialiser la configuration

Si vous souhaitez réinitialiser la configuration et effacer ses valeurs, cliquez sur **Réinitialiser la configuration** en bas de la page.

---

**REMARQUE IMPORTANTE :** la réinitialisation de la configuration effacera également votre identifiant de restaurant Deliveroo. Pour recevoir à nouveau les commandes Deliveroo, vous devrez resaisir votre identifiant de restaurant.

---

La réinitialisation de la configuration ne supprime pas les fichiers journaux des opérations affichés sur la page principale.
