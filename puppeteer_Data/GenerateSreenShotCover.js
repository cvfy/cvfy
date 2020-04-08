// IMPORTED PACKAGES
const puppeteer = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");
puppeteer.use(pluginStealth());

// FUNCTION THAT GOES TO OUR WEBSITE, RETRIEVES THE COVER LETTER WITH REQUESTED ID AND MAKES A SCREENSHOT OF THE CURRENT SAVED VERSION OF THIS COVER LETTER
async function giveMeScreenShot(coverID) {
// LUNCH PUPPETEER
  const result = await puppeteer
    .launch({
      headless: true
    })
    .then(async browser => {
      try {
        const page = await browser.newPage();
        await page.setViewport({
          width: 1000,
          height: 1400
        });
// GOT TO CREATE COVER LETTER PAGE AND SET IN LOCAL STORAGE AS CURRENT COVER LETTER THE ID GIVEN AS ARGUMENT TO THE MAIN FUNCTION
        await page.goto("http://localhost:3000/create-cover-letter");
        await page.evaluate((coverID) => {
          localStorage.setItem(
            "jwtToken",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTE1NzhlZTQ2MTM2MTYyYmM5YjZkYSIsIm5hbWUiOiJBbGV4IiwiZW1haWwiOiJhbGV4QGdtYWlsLmNvbSIsImlhdCI6MTU4NTIyMjY1MCwiZXhwIjoxNjE2Nzc5NTc2fQ.gNAOrDj09Ys7J74BtEKF1XbLH3nUoMXxJsMYhBgWbrk"
          );
          localStorage.setItem("currentCover", coverID);
        }, coverID);
// ONCE THE NECESSARY COVER LETTER IS SET AS CURRENT IT MAKES A SCREENSHOT OF FIRST PAGE OF THIS COVER LETTER
        await page.goto("http://localhost:3000/create-cover-letter");
        await page.waitFor(1000);
        const pic = await page.$("#container");
        await pic.screenshot({
          path: `profile_picture/${coverID}.jpg`,
          type: "jpeg",
          quality: 100
        });
      } catch (err) {
        console.error(err.message);
      } finally {
        await browser.close();
      }
    });
  // RETURN COVER LETTER ID WHEN FINISHED (IT WILL BE USED TO ACCES THE SCREENSHOT FROM THE STATIC EXPRESS FILE SHRING WITH IMPLEMENTED IN SERVER.JS)
  return coverID;
}
// EXPORT MAIN FUNCTION
module.exports = giveMeScreenShot;
