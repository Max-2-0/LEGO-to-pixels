# LEGO to pixel

Un petit convertisseur pour passer d’une mesure LEGO en centimètres à son équivalent en pixels. Pratique pour préparer des stickers personnalisés dans un logiciel de dessin.

## Utilisation

1. Ouvrez [`lego-to-pixel.html`](./lego-to-pixel.html) dans votre navigateur.
2. Saisissez une mesure en centimètres.
3. Cliquez sur **Convertir** pour obtenir le résultat en pixels.

Aucune installation n’est nécessaire.

## Conversion

Le calcul utilise la référence de **96 pixels par pouce** :

```text
pixels = centimètres × (96 ÷ 2,54)
```

Par exemple, **1 cm correspond à 37,80 px**. Le résultat est affiché avec deux décimales. La saisie accepte actuellement les chiffres entiers uniquement.

## Fichiers

- [`lego-to-pixel.html`](./lego-to-pixel.html) — page du convertisseur
- [`style.css`](./style.css) — mise en forme
- [`script.js`](./script.js) — conversion et interactions

---

# LEGO to pixel

A simple converter that turns LEGO measurements in centimeters into their pixel equivalent. Useful for preparing custom stickers in a drawing app.

## How to use

1. Open [`lego-to-pixel.html`](./lego-to-pixel.html) in your browser.
2. Enter a measurement in centimeters.
3. Click **Convertir** to get the result in pixels.

No installation is required.

## Conversion

The calculation uses the standard reference of **96 pixels per inch**:

```text
pixels = centimeters × (96 ÷ 2.54)
```

For example, **1 cm equals 37.80 px**. The result is displayed to two decimal places. The input currently accepts whole numbers only.

## Files

- [`lego-to-pixel.html`](./lego-to-pixel.html) — converter page
- [`style.css`](./style.css) — styling
- [`script.js`](./script.js) — conversion and interactions
