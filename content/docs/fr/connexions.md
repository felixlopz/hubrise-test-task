---
title: Apps and Connections
position: 4
layout: documentation
meta:
  title: Apps and Connections | HubRise
  description: How connections to HubRise can be managed.
---

Vous pouvez connecter de nouvelles applications et visualiser les applications connectées à votre compte HubRise depuis la page **CONNEXIONS**. Cette page vous permet également d'afficher l'activité et les journaux des applications, ou de bloquer et déconnecter des applications.

## Applications disponibles

HubRise vous permet de connecter un écosystème de solutions en constante évolution : solutions d'encaissement, plateformes de livraison de repas (dont Deliveroo, Uber Eats et Just Eat), solutions de gestion de livreurs ou de services de livraison, solutions d'e-marketing (SMS/e-mailing) et de business intelligence, systèmes de gestion de stock et de fidélisation client, et bien d'autres encore. Le nombre d'applications compatibles augmente chaque mois.

Vous pouvez connecter toutes les applications disponibles sur la page [Applications](/apps) de HubRise. Si une application que vous souhaitez connecter n'apparaît pas sur cette page, veuillez contacter [contact@hubrise.com](mailto:contact@hubrise.com) pour savoir si une intégration est prévue.

## Connecter une nouvelle application

Les applications sont connectées soit à un compte HubRise, soit à un point de vente. Le niveau de connexion dépend des données que vous devez partager avec l'application : à titre d'exemple, les solutions d'encaissement ou de commande en ligne se connectent généralement aux points de vente, tandis que les solutions de marketing se connectent indifféremment aux comptes ou aux points de vente.

Certaines applications sont connectables directement depuis le back-office de HubRise, tandis que d'autres exigent une configuration depuis l'application avant l'établissement de la connexion. Pour plus de détails, veuillez consulter la documentation de l'application sur la page [Applications](/apps) de HubRise.

Pour connecter une nouvelle application à votre compte HubRise à partir du back-office de HubRise, procédez comme suit :

1. Connectez-vous à HubRise à partir de la [page de connexion à HubRise] (https://manager.hubrise.com/login).
1. Cliquez sur **CONNEXIONS** dans la barre de navigation de gauche.
1. Sélectionnez **Voir les apps disponibles**.
1. Sélectionnez **Tous les points de vente**, ou sélectionnez le **point de vente** à connecter.
1. Sélectionnez l'application que vous souhaitez installer. Si l'application ne figure pas dans cette liste, consultez la documentation relative à l'application sur la page [Applications](/apps) de HubRise.
1. Consultez les instructions relatives à l'application spécifique et cliquez sur **Connecter**. Lors de l'installation d'une nouvelle application, il vous sera demandé d'octroyer à l'application l'accès à votre compte HubRise.

Certaines applications doivent être connectées au niveau de **tous les points de vente**, tandis que d'autres se connectent à un point de vente spécifique. Si vous n'avez pas sélectionné le niveau correspondant, le bouton **Connecter** apparaîtra grisé.

---

**REMARQUE IMPORTANTE** : si vous devez connecter plusieurs instances de la même application à un point de vente HubRise unique, consultez la section [Connexion de plusieurs instances de la même application](/docs/faqs/connect-multiple-instances-same-app).

---

## Ouvrir une application

Certaines applications sont accessibles depuis HubRise. Si tel est le cas, vous pouvez ouvrir l'application en cliquant sur **CONNEXIONS** et en sélectionnant **Ouvrir** pour l'application en question. Celle-ci s'ouvrira alors dans une nouvelle fenêtre de navigateur.

![Connexion à HubRise - Ouvrir une application](../images/011-fr-2x-connections-open-app.png)

## Afficher l'activité de connexion

Pour afficher un graphique linéaire indiquant le nombre de transactions accomplies au cours des 30 derniers jours, sélectionnez **CONNEXIONS** > **Actions** > **Afficher l'activité**. Il s'agit d'un moyen pratique de voir si des transactions transitent via la connexion.

![Connexion à HubRise - Activité affichée](../images/080-fr-connection-activity.png)

---

**Questions fréquentes associées** : <Link to="/docs/faqs/check-connection-between-my-system-and-hubrise/">Comment vérifier que la connexion entre mon système et HubRise fonctionne correctement ?</Link>

---

## Afficher les journaux de connexion

Des journaux sont consignés pour chaque application qui a été connectée. Vous pouvez utiliser ces journaux afin de mieux cerner les communications entre les systèmes et détecter les incidents éventuels.

Pour afficher les journaux relatifs à une connexion, sélectionnez **CONNEXIONS** > **Actions** > **Afficher les journaux** pour l'application en question.

Les journaux consignent les requêtes de connexion adressées à HubRise par une application. Chaque requête constitue une transaction entre une application et HubRise, telle qu'une commande, l'enregistrement d'un nouveau client ou toute autre communication entre une application et HubRise.

![Journaux de connexion à HubRise](../images/050-fr-2x-connection-logs.png)

### Informations générales

En haut de la page du journal figurent des informations générales relatives à la connexion :

- **Jeton d'accès** : jeton utilisé par l'application pour s'authentifier sur HubRise.
- **Portée** : autorisations de connexion, par exemple le fait que la connexion accède au compte ou à un point de vente unique, l'accès en lecture/écriture défini sur les données, etc.
- **Liste des clients** et **Catalogue** : selon la portée, des lignes supplémentaires peuvent indiquer l'identifiant des ressources auxquelles l'accès a été octroyé, telles que la liste de clients ou le catalogue.

![Journaux d'informations générales de HubRise](../images/051-fr-2x-general-information-logs.png)

### Filtre

Les journaux peuvent être filtrés par ressource et par méthode en procédant comme suit :

1. Sélectionnez **Modifier**.
1. Sélectionnez les ressources et les méthodes que vous souhaitez afficher. Pour afficher tous les enregistrements du journal, désélectionnez l'ensemble des ressources et des méthodes, ou cliquez sur **Réinitialiser**.

![Filtre de connexion à HubRise](../images/052-fr-2x-filter-logs.png)

### Journaux

La page des journaux affiche une liste récapitulative des requêtes par ordre chronologique inverse.

Chaque enregistrement de journal comprend les informations suivantes :

- **DATE** : date et heure de la requête.
- **Ressource** : cible de la requête.
- **Méthode** : méthode HTTP utilisée pour communiquer la requête.
- **Chemin d'accès** : adresse URL d'accès à la requête.
- **Réponse** : code de réponse HTTP.

Vous pouvez afficher des détails supplémentaires en cliquant sur un journal, notamment la requête et la réponse correspondante. Pour télécharger la requête ou la réponse, sélectionnez l'icône de téléchargement. <InlineImage width="15" height="14">![Icône de téléchargement](../images/058-download.png)</InlineImage>. La requête ou la réponse sélectionnée sera délivrée sous forme de fichier JSON.

Pour plus d'informations, voir la rubrique [Interprétation des journaux dans HubRise](/docs/hubrise-logs). Pour une référence complète sur l'API HubRise, voir la [page de référence de l'API HubRise](/developers/api/general-concepts).

---

**Questions fréquentes associées** : <Link to="/docs/faqs/check-connection-between-my-system-and-hubrise/">Comment vérifier que la connexion entre mon système et HubRise fonctionne correctement ?</Link>

---

## Bloquer ou déconnecter une application

Le blocage d'une application empêche temporairement celle-ci d'accéder à l'API de HubRise. Vous pouvez débloquer l'application à tout moment afin de rétablir l'accès.

La déconnexion d'une application supprime la connexion entre celle-ci et HubRise. L'application est informée de la déconnexion, ce qui peut entraîner la réinitialisation ou la suppression de votre compte dans l'application.

---

**REMARQUE IMPORTANTE** : si vous êtes susceptible de réutiliser l'application, il convient de la bloquer plutôt que de la déconnecter.

---

Pour bloquer ou déconnecter une application dans HubRise, procédez comme suit :

1. Rendez-vous dans **CONNEXIONS**.
2. Recherchez l'application souhaitée, puis cliquez sur **Actions** > **Bloquer** or **Déconnecter**.
3. Cliquez sur **Confirmer**.

![Connexion à HubRise - Supprimer une application](../images/014-fr-2x-connections-disconnect-app.png)
