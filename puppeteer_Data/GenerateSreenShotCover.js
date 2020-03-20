const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())
const merge = require('easy-pdf-merge');
const imagesToPdf = require("images-to-pdf")

async function giveMeScreenShot(resumeID) {

    const result = await puppeteer.launch({
        headless: true,
    }).then(async browser => {
        try {
            const page = await browser.newPage()
            await page.setViewport({
                width: 1000,
                height: 1400
            })
        //     await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle2' });
        //     // await page.waitFor(1000);
        //    await page.type("[id=email]", "alex@gmail.com");
        //    await page.type("[id=password]", "alex88");
        //    await page.click("[type=submit]")
        //    await page.waitFor(1000);
           await page.goto('http://localhost:3000/create-cover-letter', { waitUntil: 'networkidle2' });
            // const localStorage = await page.evaluate(() =>  Object.assign({'CurrentCV': 'daca2eb2-5658-2e9f-17da-a503ee1cce7c'}, window.localStorage));
           await page.evaluate((resumeID) => {
                // localStorage.removeItem('currentCV');
                localStorage.setItem('jwtToken', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNTE1NzhlZTQ2MTM2MTYyYmM5YjZkYSIsIm5hbWUiOiJBbGV4IiwiZW1haWwiOiJhbGV4QGdtYWlsLmNvbSIsImlhdCI6MTU4NDU1MDIzOSwiZXhwIjoxNjE2MTA3MTY1fQ.PLlbsY7-c3M2riI1GeVyusl7XMZE5FncIhue__Gwb-c");
                localStorage.setItem('currentCover', resumeID);
            }, resumeID);
            await page.goto('http://localhost:3000/create-cover-letter',  { waitUntil: 'networkidle2' });
            await page.waitFor(1000);
            const pic = await page.$('#container')
                await pic.screenshot({
                   path: `profile_picture/${resumeID}.jpg`,
                   type: 'jpeg',
                   quality: 100
                })
         e.emulateMedia('screen');
          f({path: pdfFileName, landscape: false, format: 'A4', scale: 0.9, printBackground: true});
           
        } catch (err) {
            console.error(err.message);
        } finally {
            await browser.close();
            //console.log(pdfFiles)
            //const result = await mergeMultiplePDF(pdfFiles);
        }
    });
    // console.log(result)
    return resumeID
}


module.exports = giveMeScreenShot