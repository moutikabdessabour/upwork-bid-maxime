import * as puppeteer from 'puppeteer';
import {Browser, Page} from 'puppeteer';
import * as fs from 'fs';

const PAGE_URL =
  "https://www.hansimmo.be/appartement-te-koop-in-borgerhout/10684";

const main = async () => {
  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();

  await page.goto(PAGE_URL);

  const items = await page.evaluate(() => {
    let $ = (selector: string) => document.querySelector(selector)  as HTMLElement | null;

    return {
      bedrooms: $(".rooms")?.innerText.trim(),
      bathrooms: $(".bathrooms")?.innerText.trim().replace('\nbadkamers', ''),
      area: $(".area")?.innerText.trim(),
      description: $("#description")?.innerText.trim().replace(/\n{2,}/g, '\n'),
      title: $("h2")?.innerText.trim(),
      price: $(".price")?.innerText.trim(),
      address: $(".address")?.innerText.trim(),
      category: $(".category")?.innerText.trim(),
    };
  });

  console.log(items);
  await page.close();
  await browser.close();
  return items;
};

main().then((data) => fs.writeFileSync('output.json', JSON.stringify(data)));
