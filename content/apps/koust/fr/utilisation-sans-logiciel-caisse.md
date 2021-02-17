---
title: Utilisation sans logiciel de caisse
position: 6
layout: documentation
meta:
  title: Utilisation sans logiciel de caisse - Koust
  description: Conseils de configuration de vos articles si votre entreprise n'utilise pas de logiciel de caisse.
---

Si votre entreprise n'utilise pas de logiciel de caisse, vous devez utiliser un autre moyen pour renseigner les codes ref des produits dans Koust. La fonctionnalité d'import manuel via un fichier CSV répond à ce besoin.

## Import CSV

Utilisez un fichier CSV comme source des codes ref de vos produits. Remplissez manuellement ce fichier, puis importez-le dans Koust grâce à la fonctionnalité d'import manuel. Pour réaliser cet import, suivez les étapes suivantes :

1. Dans le menu latéral, sélectionnez **Ventes - Conso.**.
   ![Utilisation sans logiciel de caisse - Aucun article](../images/012-fr-koust-aucun-article.png)
1. Cliquez sur **+ Articles caisse**. Une boîte de dialogue s'affiche.
1. Dans le champ **Caisse**, sélectionnez l'option **Import manuel**.
   ![Utilisation sans logiciel de caisse - Sélection du fichier d'import](../images/013-fr-koust-import-choisir-fichier.png)
1. Sélectionnez le fichier CSV à importer. Vous pouvez vous inspirer du fichier exemple fourni par Koust. Passez à l'étape suivante en sélectionnant **Suivant**.
   ![Utilisation sans logiciel de caisse - Affichage des données](../images/014-fr-koust-import-colonnes.png)
1. Si les données sont affichées correctement, cliquez sur **Suivant**.
   ![Utilisation sans logiciel de caisse - Validation des données](../images/015-fr-koust-import-valider.png)
1. Cliquez sur **Importer**.
   ![Utilisation sans logiciel de caisse - Données importées](../images/016-fr-koust-import-reussi.png)
1. Cliquez sur **Terminer**.
   ![Utilisation sans logiciel de caisse - Liste des articles](../images/017-fr-koust-articles-apres-import.png)

Il n'est pas possible de modifier le code ref d'un article après un import manuel, seuls les produits importés depuis le catalogue HubRise ont cette fonctionnalité. Si vous désirez le modifier, la seule solution est de supprimer l'article puis de l'importer de nouveau en suivant la procédure détaillée précédemment.

---

**NOTE IMPORTANTE :** Afin d'éviter les erreurs d'encodage et pour que les accents soient pris en compte, pensez à enregistrer votre fichier CSV en encodage UTF-8.

---