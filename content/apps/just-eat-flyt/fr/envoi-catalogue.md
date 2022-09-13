---
title: Envoi du catalogue
position: 6
layout: documentation
meta:
  title: Envoi du catalogue | Just Eat Flyt | HubRise
  description: Voir comment envoyer un catalogue de HubRise vers Just Eat, de quelle manière les articles et les options sont encodés, et quelles fonctionnalités sont intégrées.
---

Just Eat ne dispose pas d'un back-office permettant de remplir et personnaliser votre menu. Vous pouvez utiliser Just Eat Flyt Bridge pour extraire votre catalogue HubRise dans votre commerce Just Eat en un seul clic.

Vous pouvez également configurer la passerelle de manière à ce qu'elle extraie votre catalogue vers la plateforme chaque fois que celui-ci est mis à jour sur HubRise. Pour plus d'informations, voir la rubrique [Catalogue](/apps/just-eat-flyt/configuration#catalog).

Cette page explique comment extraire votre catalogue, et quelles informations sont envoyées à la plateforme.

## Approvisionnement d'un catalogue HubRise.

Pour pouvoir mettre à jour votre menu dans Just Eat, vous devez préalablement remplir un catalogue HubRise. De nombreuses applications connectées à HubRise, y compris des solutions d'encaissement, offrent la possibilité d'exporter le menu vers HubRise. Reportez-vous à la documentation de votre solution d'encaissement sur le site Web de HubRise.

Pour plus d'informations sur les catalogues HubRise, voir la rubrique [Catalogues](/docs/catalog/).

## Envoi du catalogue

Une fois que votre catalogue a été alimenté sur HubRise, vous pouvez l'extraire dans votre magasin Just Eat en procédant comme suit.

1. Connectez-vous à votre compte HubRise.
1. Sélectionnez le point de vente relié à votre magasin Just Eat.
1. Sélectionnez **Just Eat Flyt Bridge** dans la liste des applications connectées.
1. Dans Just Eat Flyt Bridge, cliquez sur l'onglet **Actions**, puis sélectionnez **Extraire le catalogue**.

---

**REMARQUE IMPORTANTE :** en extrayant votre catalogue HubRise dans Just Eat, vous effacerez le menu actuel de votre commerce Just Eat. Cette action est irréversible.

---

## Références techniques

Les sections suivantes décrivent en détail la manière dont les catalogues HubRise sont mis en correspondance avec les menus Just Eat.

### Images

Les images que vous chargez sur Just Eat doivent répondre aux exigences suivantes :

- Orientation paysage (et non portrait ou format carré).
- Au moins 1 024 x 768 pixels au format 4:3.
- Format de fichier JPG ou PNG.

---

**REMARQUE IMPORTANTE :** Just Eat passe en revue toutes les nouvelles photos chargées sur ses magasins. Après avoir inséré une image dans Just Eat, vous devez généralement compter entre deux et cinq jours avant que l'image n'apparaisse sur le menu. Si vos images ne respectent pas les directives, Just Eat vous invitera à les charger de nouveau.

---

### Catégories

Les catégories d'un catalogue HubRise sont mises en correspondance une à une avec les catégories de produits présentées sur Just Eat. La hiérarchie selon laquelle les catégories et les produits apparaissent dans HubRise est maintenue dans Just Eat.

Pour chaque catégorie, les champs HubRise extraits dans Just Eat sont les suivants :

- `name` : nom de la catégorie.
- `description` : description de la catégorie.

### Produits et références

Les produits contenus dans le tableau `products` d'un catalogue HubRise peuvent être associés à plusieurs références. Cette notion de produits et de références n'est pas prise en charge dans Just Eat, où chaque référence est associée à un produit individuel. Pour plus d'informations sur les produits contenus dans les catalogues HubRise, voir la rubrique [Produits](/developers/api/catalog-management/#products).

Pour chaque objet `sku` (référence) contenu dans un produit, Just Eat Flyt Bridge extrait les informations suivantes dans Just Eat :

- `ref` : code ref de la référence SKU, qui sera transmis dans les commandes.
- `name` : nom de la référence SKU.
- `description` : description du produit générique.
- `prix` : prix de la référence SKU.
- `option_list_refs` : liste des options rattachées à la référence SKU.
- `balises` : balises décrivant les caractéristiques et les restrictions du produit, telles que les allergènes ou la saveur épicée. Voir la rubrique [Balises de produits](#product-tags).
- `image` : adresse URL de l'image du produit parent.

Pour plus d'informations sur les références contenues dans les catalogues HubRise, voir la rubrique [Références SKU](/developers/api/catalog-management/#skus).

---

**REMARQUE IMPORTANTE :** les produits sans code ref ne sont pas extraits dans Just Eat. Pour plus d'informations, voir la rubrique [Pourquoi certains produits ne sont pas exportés](/apps/just-eat-flyt/faqs/products-not-exported/).

---

### Balises de produits

Le tableau ci-dessous énumère les balises qui peuvent être définies sur les produits.

| Balise                                  | Description             |
| ------------------------------------ | ----------------------- |
| `alcoholic`                          | Produit contenant de l'alcool.       |
| `spicy_1`                            | Légèrement épicé.            |
| `spicy_2`                            | Moyennement épicé.                  |
| `spicy_3`                            | Très épicé.             |
| `vegan`                              | Plat végétalien.             |
| `vegetarian`                         | Plat végétarien.        |
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

### Options

Pour chaque liste d'options contenue dans le catalogue, Just Eat Flyt Bridge extrait les informations suivantes dans Just Eat :

- `name` : nom de la liste d'options.
- `type` : nombre d'options pouvant être sélectionnées dans la liste : soit `single` (unique), soit `multiple`.

Pour chaque option contenue dans une liste, les informations envoyées à Just Eat sont les suivantes :

- `ref` : code ref de l'option.
- `name` : nom de l'option.
- `price` : prix d'une option unique.

### Promotions et remises

Les promotions et les remises ne sont pas prises en charge dans Just Eat. Les promotions et remises présentes dans votre catalogue HubRise sont donc ignorées et ne sont pas reprises dans Just Eat.

### Disponibilité

Chaque fois que vous extrayez votre catalogue HubRise dans Just Eat, vous actualisez également la disponibilité de votre menu, suivant les valeurs que vous avez définies sur la [page de configuration](/apps/just-eat-flyt/configuration/#catalog) de Just Eat Flyt Bridge.
