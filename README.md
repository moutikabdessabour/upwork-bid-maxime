## Important Notes
- The `PAGE_URL` defined in the `index.js` file is no longer available [I chose a similar rentable apartement in the same city](https://www.hansimmo.be/appartement-te-koop-in-borgerhout/10684)

- Although I think using pupeteer for an SSR website is an overkill I made this code just to prove that I can passs the challenge.

### Main Task
- [x] You can find the basic puppeteer runner inside index.js file
- [x] You need to return values from page which URL defined in PAGE_URL variable
- [x] You need to save values into JSON file in the root folder of the project

```javascript
{
  bedrooms: '2',
  bathrooms: '1',
  area: '90 m²',
  description: 'Instapklaar appartement (90 m²) met 2 slaapkamers en terras (5 m²) in Borgerhout.\n' +
    'Het pand bevindt zich net buiten de Singel in Borgerhout op de grens met Deurne en Borgerhout en dit op een boogscheut van het groendomein Rivierenhof. Wat betreft bereikbaarheid geniet je hier van een goede verbinding met het openbaar vervoer, de auto en de Antwerpse velo. In de nabije omgeving beschik je verder over een uitgebreid aanbod aan supermarkten. Kortom: een uiterst gunstige locatie nabij de stad!\n' +
    'Het appartement bevindt zich op de bovenverdieping van een verzorgd gebouw van 15 hoog met lift. De vaste kosten bedragen plusminus €125/maand en omvatten verwarming (gas), water, syndicus, lift en onderhoud van de gemene delen.\n' +
    'Je komt binnen in de hal, waar de ruimtelijkheid en openheid van de woning meteen voelbaar is. Twee ingemaakte vestiairekasten zorgen hier voor extra bergruimte. Vooraan, aan de westzijde van het gebouw, treffen we de woonkamer (32 m²) waar je kan genieten van adembenemende zonsondergangen en een uniek zicht op onder andere het Centraal Station, het MAS en de Boerentoren. De aparte keuken is 8 m² groot en voorzien van een basisuitrusting. De 2 slaapkamers van 10 m² en 16 m² zijn georiënteerd naar het oosten, wat betekent dat je hier kan wakker worden met een uniek zicht op de zonsopgang! De grootste slaapkamer biedt verder toegang tot het terras (5 m²). Centraal in het appartement situeert zich nog de badkamer (5 m²) met ligbad, dubbele lavabo en wc. Verder is er ook nog een aparte wc aanwezig. Tot slot staat er een privatieve kelderberging ter beschikking. Ben jij verzot op adembenemende vergezichten en zou je graag elke dag genieten van een unieke zonsondergang en -opgang? Mis deze kans dan niet en kom met eigen ogen het appartement en het magnifieke uitzicht ontdekken! Voor meer info of een gratis schatting surf naar www.hansimmo.be',
  title: 'INSTAPKLAAR APPARTEMENT (90 M²) MET 2 SLAAPKAMERS EN TERRAS (5 M²) IN BORGERHOUT.',
  price: '€ 219.000',
  address: 'JOE ENGLISHSTRAAT 61/43, 2140 BORGERHOUT',
  category: 'Appartement'
}
```

### Bonus
- [x] Sanitize description field (you can use any library for it)
- [x] Rewrite this code to typescript.

Push your code to Github and share the link with us. Good luck with your challenge. 