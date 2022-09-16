---
title: Configuration
position: 4
layout: documentation
meta:
  title: Configuration | LEO2 | HubRise
  description: Configurer votre connexion HubRise depuis la page de configuration LEO2. HubRise vous permet de synchroniser vos commandes, clients et produits entre LEO2 et les logiciels de votre choix.
---

---

**REMARQUE IMPORTANTE :** Toute modification de la configuration nécessite le redémarrage du serveur HubRise pour être prise en compte. Pour redémarrer le serveur, double-cliquez sur le raccourci vers le serveur, créé en suivant les étapes décrites dans la section [Créer un raccourci sur le bureau](/apps/leo2/interface-utilisateur/#cr-er-un-raccourci-sur-le-bureau).

---

Pour consulter ou modifier la configuration de l'intégration, ouvrez la page de Paramétrage de l'interface de LEO2. Pour y accéder, voir la rubrique [Paramétrage de l'interface](/apps/leo2/interface-utilisateur/#param-trage-de-l-interface).

Cette page est divisée en plusieurs sections.

![Connexion - Paramètres HubRise](../images/017-fr-leo2-parametres-hubrise.png)

## Connexion à HubRise

Cette section permet d'établir la connexion entre LEO2 et HubRise.

- Si la connexion est déjà établie, le contenu de la section apparaît en grisé.
- Si la connexion n'est pas établie, reportez-vous à la section [Connexion à HubRise](/apps/leo2/connexion-hubrise) pour plus d'informations sur la procédure de connexion.

## Informations de connexion

Cette section indique les identifiants du point de vente, du catalogue et de la liste de clients utilisés par la connexion HubRise.

La section vous permet également d'accéder aux actions suivantes :

- **Accès à HubRise** : ouvre le back-office HubRise dans une page de votre navigateur.
- **Envoi catalogue** : envoie votre menu depuis LEO2 vers HubRise. Pour plus d'informations, voir la section [Exporter le catalogue](/apps/leo2/associer-codes-ref#exporter-le-catalogue).
- **Déconnecter** : déconnecte le point de vente de HubRise. Pour plus d'informations, voir la section [Déconnecter ubRise](/apps/leo2/connexion-hubrise#d-connecter-leo2).

## Paramètres

Les cases à cocher permettent de configurer l'automatisation des tâches :

- **Lancement automatique du serveur HubRise** : lance le serveur automatiquement au démarrage de LEO. Il est recommandé de cocher cette option.
- **Création automatique des clients inexistants dans LEO** : lors de la réception d'une commande HubRise, si la référence du client n'existe pas dans LEO, ajoute automatiquement ce dernier au fichier clients de LEO. Si cette option n'est pas cochée, la commande sera affectée au client "Divers".
- **Impression automatique des documents** : lors de la réception d'une commande HubRise, imprime automatiquement le document (commande, bon de livraison ou ticket).
- **Générer vente (Ticket / Facture) si commande réglée et livraison prévue le jour même dans les "m" minutes** : si la
  commande est réglée intégralement, que la date de livraison prévue est le jour même, que la durée entre l'heure de livraison prévue
  et l'heure actuelle est inférieure de "Nb minutes Max", génère automatiquement le bon de livraison et la facture (si client LEO) ou le ticket (si client Divers).
- **Envoi des commandes LEO vers HubRise** : envoie vers HubRise les commandes créées et modifiées dans LEO2.
- **Création automatique des clients inexistants dans HubRise** : lors de l'envoi d'une commande, si la référence du client n'existe pas dans HubRise, crée automatiquement ce dernier dans HubRise.
- **Envoi des stocks vers HubRise** : envoie les stocks LEO2 en temps réel vers HubRise.
