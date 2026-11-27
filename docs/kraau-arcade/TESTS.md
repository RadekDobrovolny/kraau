# Testování 0.2.0

- Datová kontrola: 19 kompetencí, 61 unikátních kritérií z PDF; všech 61 má alespoň jednu tematickou vazbu. Všech 19 kompetencí se objevuje jako primární vazba v Souvislostech i ve Sborovně. Ověřeny existující identifikátory a 16 odlišných karet na sadu.
- Node: syntaktická kontrola arcade.js bez chyby.
- Chromium/Playwright: průchod 24 dilematy, 10 herními dny, omezením počtu akcí a návratem do rozehrané hry v herně; 390px viewport. Všech pět sad Souvislostí vyřešeno podle klíče, zobrazeny odkazy na kritéria; správné slovo dne přijato a zobrazen zdroj. Didaktris otevřen. Bez zachycené JS chyby.
- Omezení: testy využily vložené HTML a náhradní localStorage. Skutečné uložení přes obnovu stránky, produkční Astro build, dostupnost PDF odkazů na živém webu, původní Slučovačka a odborná revize nejsou ověřeny. Pokrytí znamená tematické mapování, ne validaci her jako pedagogického nástroje.
