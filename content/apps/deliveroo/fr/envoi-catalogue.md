---
title: Envoi du catalogue
position: 6
layout: documentation
meta:
  title: Envoi du catalogue | Deliveroo | HubRise
  description: Voir comment envoyer un catalogue de HubRise vers Deliveroo, de quelle manière les articles et les options sont encodés, et quelles fonctionnalités sont intégrées.
---

Avec Deliveroo Bridge, vous pouvez envoyer votre catalogue HubRise dans votre restaurant Deliveroo en un seul clic.

Vous pouvez également configurer la passerelle de manière à ce qu'elle envoie votre catalogue vers Deliveroo chaque fois que celui-ci est mis à jour sur HubRise. Pour plus d'informations, voir la rubrique [Catalogue](/apps/deliveroo/configuration#catalogue).

Cette page explique comment envoyer votre catalogue et quelles informations sont envoyées à Deliveroo.

## Recevoir un catalogue

Pour mettre à jour votre Deliveroo, vous devez préalablement avoir un catalogue dans HubRise. De nombreuses applications connectées à HubRise, y compris des logiciels de caisse, offrent la possibilité d'envoyer leur catalogue vers HubRise. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise pour vérifier.

Vous pouvez aussi alimenter un catalogue HubRise en aspirant votre menu Uber Eats.

Pour plus d'informations sur les catalogues HubRise, voir la rubrique [Catalogues](/docs/catalogues/).

## Envoi manuel du catalogue

Une fois que votre catalogue a été alimenté sur HubRise, vous pouvez l'envoyer dans votre restaurant Deliveroo en procédant comme suit :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com?locale=fr-FR).
1. Sélectionner le compte HubRise et le point de vente connecté à votre restaurant Deliveroo.
1. Ouvrir la page **CONNEXIONS**, puis sélectionner **Deliveroo Bridge** dans la liste des applications connectées.
1. Dans Deliveroo Bridge, cliquer sur l'onglet **Actions**, puis sélectionner **Envoyer le catalogue**.
1. Vérifier votre menu en ligne sur la plateforme Deliveroo.

---

**REMARQUE IMPORTANTE :** en envoyant votre catalogue HubRise dans Deliveroo, vous effacerez le menu Deliveroo actuel. L'envoi du catalogue mettra également à jour la **Description du menu** Deliveroo et la **Bannière du menu**, comme décrit dans la page **Configuration** du Deliveroo Bridge. Cette action est irréversible.

---

## Envoi automatique du catalogue

Deliveroo Bridge peut envoyer automatiquement votre catalogue HubRise dans Deliveroo à chaque mise à jour. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com?locale=fr-FR).
1. Sélectionner le compte HubRise et le point de vente connecté à votre restaurant Deliveroo.
1. Ouvrir la page **CONNEXIONS**, puis sélectionner **Deliveroo Bridge** dans la liste des applications connectées.
1. Dans Deliveroo Bridge, sélectionner **l'onglet Configuration**.
1. Dans la rubrique **Catalogue**, cocher la case **Activer l'envoi automatique du catalogue**.
1. Cliquer sur **Enregistrer**.

## Informations envoyées à Deliveroo

Les rubriques suivantes fournissent plus de détails sur la façon dont votre catalogue HubRise est associé à Deliveroo.

### Description du menu et de la bannière

Vous pouvez spécifier la description du menu et fournir l'URL de l'image qui vous sert de bannière depuis la page [Configuration](/apps/deliveroo/configuration).

Deliveroo Bridge envoie ces informations à Deliveroo à chaque envoi de catalogue.

### Catégories

Deliveroo Bridge établit une correspondance entre les catégories HubRise et les catégories de produits sur Deliveroo.

Le nom de la catégorie, le code ref et la description sont envoyés à Deliveroo.

### Produits et skus

Deliveroo Bridge établit une correspondance entre les produits sku uniques et les produits sur Deliveroo, en envoyant les informations suivantes :

- Nom du sku
- Code ref du sku
- Description
- Images
- Prix
- Options

Pour les produits avec plusieurs skus, Deliveroo Bridge crée un produit, une liste de modificateurs et un modificateur pour chaque sku. Les options sont attachées à chaque sku comme une couche supplémentaire de modificateurs.

### Liste d'options et options

Deliveroo Bridge associe les listes d'options et les options individuellement sur Deliveroo.

### Promotions

Deliveroo Bridge associe les promotions HubRise aux produits avec des modificateurs Deliveroo.

### Images

Deliveroo exige que les images soient de 1200x800 pixels.

## Référence technique

Les sections suivantes décrivent en détail comment Deliveroo Bridge établit une correspondance entre les catalogues HubRise et ceux de Deliveroo.

### Catégories

Pour chaque catégorie, Deliveroo Bridge envoie les champs HubRise suivants à Deliveroo :

- `name` : nom de la catégorie.
- `ref` : code ref de la catégorie.
- `description` : description de la catégorie.

La hiérarchie selon laquelle les catégories et les produits apparaissent dans HubRise est maintenue dans Deliveroo.

### Produits et skus

Pour chaque [produit ](/developers/api/catalog-management/#products) avec plusieurs skus, Deliveroo Bridge envoie les informations suivantes à Deliveroo :

- `ref` : la valeur `MULTISKU` est utilisée pour tous les produits.
- `name` : le nom de la référence produit.
- `description` : la description du produit.
- `price` : le prix minimum de tous les skus.
- `tags` : balises décrivant les caractéristiques et les restrictions du produit, telles que les allergènes ou la saveur épicée. Voir la rubrique [Balises de produits](#balises-de-produits).
- `image` : adresse URL de l'image du produit parent.

La liste des skus est jointe au produit sous la forme d'une table de modification.

Pour chaque objet `sku` d'un produit, Deliveroo Bridge envoie les informations suivantes à Deliveroo :

- `ref` : code ref de la référence sku, qui sera transmis dans les commandes.
- `name` : nom de la référence sku.
- `price` : la différence de prix avec le produit principal, si présent.
- `option_list_refs` : liste des options rattachées à la référence sku.

Pour plus d'informations sur les références contenues dans les catalogues HubRise, voir la rubrique [Références SKU](/developers/api/catalog-management/#skus) (en anglais).

### Balises de produits

Le tableau ci-dessous énumère les balises qui peuvent être définies sur les produits.

| Balise                                  | Description             |
| ------------------------------------ | ----------------------- |
| `alcoholic`                          | Produit contenant de l'alcool.       |
| `allergen_celery`                    | Contient l'allergène indiqué. |
| `allergen_crustaceans`               | Contient l'allergène indiqué. |
| `allergen_eggs`                      | Contient l'allergène indiqué. |
| `allergen_fish`                      | Contient l'allergène indiqué. |
| `allergen_gluten`                    | Contient l'allergène indiqué. |
| `allergen_lupin`                     | Contient l'allergène indiqué. |
| `allergen_milk`                      | Contient l'allergène indiqué. |
| `allergen_molluscs`                  | Contient l'allergène indiqué. |
| `allergen_mustard`                   | Contient l'allergène indiqué. |
| `allergen_nuts`                      | Contient l'allergène indiqué. |
| `allergen_peanuts`                   | Contient l'allergène indiqué. |
| `allergen_sesame_seeds`              | Contient l'allergène indiqué. |
| `allergen_soybeans`                  | Contient l'allergène indiqué. |
| `allergen_sulphur_dioxide_sulphites` | Contient l'allergène indiqué. |

Si un produit ne contient aucun allergène, Deliveroo Bridge ajoute automatiquement la balise `no_allergens`.

### Options

Pour chaque liste d'options du catalogue, Deliveroo Bridge envoie les informations suivantes à Deliveroo :

- `name` : nom de la liste d'options.
- `min_selections` : le nombre minimum d'options que les clients peuvent sélectionner.
- `max_selections` : le nombre maximum d'options que les clients peuvent sélectionner.

Pour chaque option d'une liste d'options, Deliveroo Bridge envoie les informations suivantes à Deliveroo :

- `ref` : code ref de l'option.
- `name` : nom de l'option.
- `price` : prix d'une option unique.

### Promotions

Pour chaque promotion du catalogue, Deliveroo Bridge crée un produit Deliveroo avec les détails suivants :

- `name` : le nom de l'offre devient le nom du produit.
- `category_ref` : s'il est vide, Deliveroo Bridge crée une catégorie par défaut dans Deliveroo appelée "Offres".
- `ref` : le code ref de l'offre devient la ref du produit, précédé de `DEAL-`. Exemple, pour une promotion avec le code red `abc123`, Deliveroo Bridge crée un produit Deliveroo avec le PLU `DEAL-abc123`.
- `lines` : pour chaque objet du tableau, Deliveroo Bridge crée une liste de modificateurs, avec `lines.name` pour nom.
