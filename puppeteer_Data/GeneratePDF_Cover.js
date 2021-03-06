// IMPORTED PACKAGES
const puppeteer = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");
puppeteer.use(pluginStealth());
const imagesToPdf = require("images-to-pdf");

// FUNCTION THAT GOES TO OUR WEBSITE, RETRIEVES THE COVER LETTER WITH REQUESTED ID AND MAKES A PDF FILE OF THE CURRENT SAVED VERSION OF THIS COVER LETTER
async function giveMePDFCover(resumeID) {
// LUNCH PUPPETEER
  const result = await puppeteer
    .launch({
      headless: true
    })
    .then(async browser => {
      try {
        const page = await browser.newPage();
        await page.setViewport({
          width: 1600,
          height: 4600
        });
// GOT TO CREATE COVER LETTER PAGE AND SET IN LOCAL STORAGE AS CURRENT COVER LETTER THE ID GIVEN AS ARGUMENT TO THE MAIN FUNCTION
        await page.goto("http://localhost:3000/create-cover-letter");
        await page.evaluate(resumeID => {
          localStorage.setItem(
            "jwtToken",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTE1NzhlZTQ2MTM2MTYyYmM5YjZkYSIsIm5hbWUiOiJBbGV4IiwiZW1haWwiOiJhbGV4QGdtYWlsLmNvbSIsImlhdCI6MTU4NDU1MDIzOSwiZXhwIjoxNjE2MTA3MTY1fQ.PLlbsY7-c3M2riI1GeVyusl7XMZE5FncIhue__Gwb-c"
          );
          localStorage.setItem("currentCover", resumeID);
        }, resumeID);
// ONCE THE NECESSARY COVER LETTER IS SET AS CURRENT IT MAKES A PDF FILE OF THIS COVER LETTER
        await page.goto("http://localhost:3000/create-cover-letter");

        await autoScroll(page);

        let user = await page.evaluate(() => {
          return Array.from(document.querySelectorAll("#container")).length;
        });

        let imgArray = [];
        for (var i = 0; i < user; i++) {
          if (i > 1) {
            await autoScroll(page);
          }
          await page.emulateMedia("screen");
          const pic = await page.$$("#container");
          await pic[i].screenshot({
            path: `${__dirname}/profile_picture/screC${i}.jpg`,
            type: "jpeg",
            quality: 100
          });

          imgArray.push(`${__dirname}/profile_picture/screC${i}.jpg`);
        }

        await imagesToPdf(
          imgArray,
          `${__dirname}/profile_picture/${resumeID}.pdf`
        );
      } catch (err) {
        console.error(err.message);
      } finally {
        await browser.close();
      }
    });
// RETURN CV ID WHEN FINISHED (IT WILL BE USED TO ACCES THE PDF FILE FROM THE STATIC EXPRESS FILE SHRING WITH IMPLEMENTED IN SERVER.JS)
  return resumeID;
}

// HELPING FUNCTION TO IMPLEMENT AUTOSCROLL
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}
// EXPORT MAIN FUNCTION
module.exports = giveMePDFCover;
