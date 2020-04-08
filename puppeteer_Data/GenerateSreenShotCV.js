// IMPORTED PACKAGES
const puppeteer = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");
puppeteer.use(pluginStealth());

// FUNTCTION THAT GOES TO OUR WEBSITE, RETRIEVES THE CV WITH REQUESTED ID AND MAKES A SCREENSHOT OF THE CURRENT SAVED VERSION OF THIS CV
async function giveMeScreenShot(resumeID) {

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
// GOT TO CREATE CV PAGE AND SET IN LOCAL STORAGE AS CURRENT CV THE ID GIVEN AS ARGUMENT TO THE MAIN FUNCTION
        await page.goto("http://localhost:3000/create-cv");
        await page.evaluate(resumeID => {
          localStorage.setItem(
            "jwtToken",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTE1NzhlZTQ2MTM2MTYyYmM5YjZkYSIsIm5hbWUiOiJBbGV4IiwiZW1haWwiOiJhbGV4QGdtYWlsLmNvbSIsImlhdCI6MTU4NDU1MDIzOSwiZXhwIjoxNjE2MTA3MTY1fQ.PLlbsY7-c3M2riI1GeVyusl7XMZE5FncIhue__Gwb-c"
          );
          localStorage.setItem("currentCV", resumeID);
        }, resumeID);
// ONCE THE NECESSARY CV IS SET AS CURRENT IT MAKES A SCREENSHOT OF FIRST PAGE OF THIS CV
        await page.goto("http://localhost:3000/create-cv");
        await page.waitFor(1000);
        const pic = await page.$(".A4");
        await pic.screenshot({
          path: `profile_picture/${resumeID}.jpg`,
          type: "jpeg",
          quality: 100
        });
      } catch (err) {
        console.error(err.message);
      } finally {
        await browser.close();
      }
    });
// RETURN CV ID WHEN FINISHED (IT WILL BE USED TO ACCES THE SCREENSHOT FROM THE STATIC EXPRESS FILE SHRING WITH IMPLEMENTED IN SERVER.JS)
  return resumeID;
}
// EXPORT MAIN FUNCTION
module.exports = giveMeScreenShot;
