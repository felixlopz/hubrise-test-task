---
title: Associer les codes ref
position: 5
layout: documentation
meta:
  title: Associer les codes ref - Koust
  description: Importer un catalogue depuis HubRise, et retrouver les codes ref des articles.
---

Après avoir connecté Koust à votre compte HubRise, vous pouvez synchroniser leurs données. Pour cela, certaines étapes doivent être entreprises.

## Importer le catalogue

Le catalogue est importé automatiquement lorsque la connexion avec HubRise est établie. Il peut aussi être importé dans un second temps manuellement. Pour cela, suivez les étapes suivantes :

1. Depuis votre tableau de bord Koust, cliquez sur le nom de votre entreprise dans la barre de menu (en haut à droite). Un menu déroulant s'affiche.
1. Sélectionnez **Paramètres**. La page **Paramètres de l'établissement** s'affiche.
1. Sélectionnez l'onglet **Intégrations**.
   ![Associer les codes ref - Onglet Intégrations](../images/004-fr-koust-onglet-integrations-connecte.png)
1. Cliquez sur le bloc **HubRise** présent dans la liste des intégrations. Une fenêtre modale s'ouvre.
   ![Associer les codes ref - Informations](../images/005-fr-koust-hubrise-informations.png)
1. Cliquez sur **Importer le catalogue**. Le message **Catalogue importé avec succès.** s'affiche.
   ![Associer les codes ref - Catalogue importé](../images/006-fr-koust-catalogue-importe.png)

## Produits

Un produit dans HubRise correspond à un article dans Koust. Pour retrouver le code ref d'un article, suivez les étapes suivantes :

1. Dans le menu latéral, sélectionnez **Ventes - Conso.** > **Historique ventes**.
   ![Associer les codes ref - Liste des articles](../images/011-fr-koust-liste-articles.png)
1. Sélectionnez l'icône de modification ou le nom de l'article. Le code ref s'affiche dans le champ **Référence distante (SKU_REF)**.
   ![Associer les codes ref - Détail article](../images/012-fr-koust-liste-articles-detail.png)

---

**NOTE IMPORTANTE :** Vérifiez bien que la valeur de ce champ est la même que celle provenant de votre logiciel de caisse. Si ce n'est pas le cas, le mapping entre les articles provenant des commandes et ceux du catalogue HubRise ne peut pas se faire. Koust crée alors un nouvel article. Pour lier ces nouveaux articles à ceux du catalogue HubRise, consultez la page [Interface utilisateur](/apps/koust/interface-utilisateur#commandes).

---