const puppeteer = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");
puppeteer.use(pluginStealth());
const merge = require("easy-pdf-merge");
const imagesToPdf = require("images-to-pdf");

async function giveMePDF(resumeID) {
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
        await page.goto("http://localhost:3000/create-cover-letter", {
          waitUntil: "networkidle2"
        });
        // const localStorage = await page.evaluate(() =>  Object.assign({'CurrentCV': 'daca2eb2-5658-2e9f-17da-a503ee1cce7c'}, window.localStorage));
        await page.evaluate(resumeID => {
          // localStorage.removeItem('currentCV');
          localStorage.setItem(
            "jwtToken",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTE1NzhlZTQ2MTM2MTYyYmM5YjZkYSIsIm5hbWUiOiJBbGV4IiwiZW1haWwiOiJhbGV4QGdtYWlsLmNvbSIsImlhdCI6MTU4NDU1MDIzOSwiZXhwIjoxNjE2MTA3MTY1fQ.PLlbsY7-c3M2riI1GeVyusl7XMZE5FncIhue__Gwb-c"
          );
          localStorage.setItem("currentCover", resumeID);
        }, resumeID);
        await page.goto("http://localhost:3000/create-cover-letter", {
          waitUntil: "networkidle2"
        });

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
  console.log(result);
  return resumeID;
}

const mergeMultiplePDF = pdfFiles => {
  return new Promise((resolve, reject) => {
    merge(pdfFiles, "samplefinal.pdf", function(err) {
      if (err) {
        console.log(err);
        reject(err);
      }

      console.log("Success");
      resolve();
    });
  });
};

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
module.exports = giveMePDF;
