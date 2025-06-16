# Lord of the Rings LCG Assets

A collection of visual assets for the Lord of the Rings LCG that I initially created while working on **[LotR.CardGame.Tools](https://lotr.cardgame.tools)**.

## Icons

The Lord of the Rings LCG uses many, many different icons.

### Expansion Symbols

These symbols are featured in the bottom right of all cards, next to the card number, and help identify which product the cards came from.

### Encounter Set Icons

These symbols are featured on the encounter cards, indicating which encounter set they are part of.

These symbols were orginally sourced from [El Refugio del Dúnadan](https://geografiaesdlalcg.wordpress.com/descargas/).

### Game Icons

These are icons used on cards for stats, spheres, etc.

## Fonts

The Lord of the Rings LCG uses a variety of fonts on the cards, in the rulebooks, etc.

### Vafthrudnir-Ext

The Vafthrudnir font is mainly used for the title / name of cards.
Some of the card names feature diacritics (eg: accents) on certain characters, which were not included in any of the versions of the font I could find, so I added them.

## Contribution guidelines

If you want to contribute, you can find the list of open issues here: https://github.com/KevBelisle/lotr-lcg-assets/issues

### Icons

For consistency reasons, all SVG icons/symbols should follow these guidelines:

- the artboard should be sized to 1 in x 1 in
- the actual icon should be centered and approximately 0.9 in x 0.9 in
- all `<path>` components should have the `fill="currentColor"` property (this allows easily setting the color in CSS)

Before sending a PR, please run the following commands to normalize all SVGs:

- `npm install`
- `npm run normalize-svgs`

### Vafthrudnir-Ext

This is an extended version of the Vafthrundir font, which includes accented characters as well as the german ß glyph.

To contribute, load the `Vafthrudnir-Ext - Glyphr Studio Project.gs2` file into [GlyphrStudio](https://www.glyphrstudio.com/app/) and make your edits, and open a pull request with:

- the updated `Vafthrudnir-Ext - Glyphr Studio Project.gs2` file
- the updated `.otf` font file
