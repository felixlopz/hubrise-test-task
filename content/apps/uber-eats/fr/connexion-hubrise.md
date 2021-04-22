---
title: Connexion à HubRise
position: 2 
layout: documentation
meta:
  title: Instructions pour connecter Uber Eats à HubRise
  description: Voir comment connecter votre restaurant Uber Eats à HubRise. Envoyez le lien de votre page Deliveroo à HubRise et suivez quelques étapes pour vous connecter.
---

La connexion d'Uber Eats à HubRise s'effectue en quelques étapes simples.

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, commencez par en ouvrir un sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup). L'inscription ne prend que quelques minutes !

---

## 1. Activez HubRise dans Uber Eats

Dans un premier temps, l'intégration de HubRise doit être activée sur votre compte Uber Eats.

Contactez-nous par e-mail à l'adresse [support@hubrise.com](mailto:support@hubrise.com) en précisant les informations suivantes :

- Le lien URL du magasin Uber Eats que vous souhaitez connecter. Exemple : [https://www.ubereats.com/dijon/food-delivery/911-pizza-%2526-burger-darcy/IeJDe6o4SASA6EMABBbPZw](https://www.ubereats.com/dijon/food-delivery/911-pizza-%2526-burger-darcy/IeJDe6o4SASA6EMABBbPZw).
- Le nom et l'identifiant de votre point de vente HubRise. Exemple : `Fast Pizza Paris z6q31-0`.
- Le mode d'acceptation des commandes que vous souhaitez utiliser pour votre magasin : manual accept (acceptation manuelle) ou offered state (état proposé). Pour plus de détails, reportez-vous à notre [FAQ](/apps/uber-eats/faqs/envoyer-les-commandes-en-caisse-sans-tablette).
- La prestation de service fournie par Uber Eats, avec ou sans livraison.
- Si vous utilisez des commentaires sur les produits dans votre boutique Uber Eats, informez-nous de votre souhait de continuer à les utiliser. Sinon, ils seront désactivés par défaut. Pour plus d'informations sur la gestion des commentaires de produits dans HubRise, voir la rubrique [Commentaires sur les produits](/apps/uber-eats/associer-codes-ref#commentaires-au-niveau-du-produit).

Avec ces informations en main, l'équipe d'intégration d'Uber Eats pourra activer la connexion HubRise de votre magasin. HubRise vous fournira l'UUID de de magasin Uber Eats nécessaire à la connexion et vous indiquera l'étape suivante.

## 2. Connectez l'instance Bridge

---

**REMARQUE IMPORTANTE :** Uber Eats Bridge se connecte à HubRise au niveau du point de vente. Pour plus d'informations, voir la page [Points de vente (en anglais)](/docs/locations/).

---

Maintenant que vous disposez de votre UUID de magasin Uber Eats, vous pouvez connecter Uber Eats Bridge :

1. Connectez-vous à votre compte HubRise.
1. Sélectionnez le point de vente que vous souhaitez connecter dans le menu déroulant.
1. Sélectionnez **CONNEXIONS**, puis **Voir les apps disponibles**.
1. Dans la liste des apps, sélectionnez **Uber Eats**.
1. Cliquez sur **Connecter**.
1. Cliquez sur **Autoriser** pour octroyer à Uber Eats Bridge l'accès au point de vente de votre restaurant référencé dans HubRise. Pour les comptes associés à plusieurs points de vente, développez **Tous les points de vente** afin de choisir l'entrée correcte en premier, puis cliquez sur **Autoriser**.
1. Une nouvelle page vous demande d'indiquer votre UUID de magasin Uber Eats. Entrez l'UUID de magasin, puis cliquez sur **Enregistrer** pour terminer le processus de connexion.

![UUID de magasin Uber Eats](../images/001-fr-store-uuid.png)

## 3. Configurez vos préférences

Une fois la connexion de l'instance Bridge effectuée, vous devez modifier quelques paramètres sur la page Configuration afin de permettre l'envoi correct des commandes à votre solution d'encaissement.

Pour plus d'informations sur la page Configuration et la manière d'y accéder, voir la rubrique [Interface utilisateur](/apps/uber-eats/interface-utilisateur/#page-de-configuration). Pour plus de détails sur la configuration des paramètres d'Uber Eats Bridge, voir la rubrique [Configuration](/apps/uber-eats/configuration).

## 4. Mappez les produits avec des codes ref

Si vous utilisez Uber Eats avec une solution d'encaissement, vous devez associer tous les produits de votre menu Uber Eats aux codes ref correspondants. Vous permettrez ainsi à votre solution d'encaissement d'identifier correctement chaque article.

Pour savoir associer les codes ref sur Uber Eats, voir la rubrique [Association des codes ref](/apps/uber-eats/associer-codes-ref).

## 5. Testez la réception des commandes

Nous vous recommandons, avant de commencer à recevoir des commandes de clients réels, de tester l'ensemble du flux d'intégration.

Il convient de passer quelques commandes sur votre restaurant Uber Eats, de vous assurer qu'elles sont correctement reçues par votre solution d'encaissement, puis de les annuler afin d'en obtenir le remboursement. Ainsi, vous aurez l'assurance que votre restaurant est prêt à être mis en ligne.

Vous pourrez également, si vous le souhaitez, laisser de côté de votre tablette Uber Eats en passant à une intégration directe. Pour plus de détails, voir la rubrique [Les commandes peuvent-elles être envoyées directement sur ma solution d'encaissement sans passer par les tablettes Uber Eats ?](/apps/uber-eats/faqs/envoyer-les-commandes-en-caisse-sans-tablette).

Si vous rencontrez des difficultés durant ces tests, contactez-nous à l'adresse : support@hubrise.com.
