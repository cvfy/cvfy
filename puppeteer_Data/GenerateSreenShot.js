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
                width: 1600,
                height: 4600
            })
            await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle2' });
            // await page.waitFor(1000);
           await page.type("[id=email]", "alex@gmail.com");
           await page.type("[id=password]", "alex88");
           await page.click("[type=submit]")
           await page.waitFor(1000);
           await page.goto('http://localhost:3000/create-cv', { waitUntil: 'networkidle2' });
            // const localStorage = await page.evaluate(() =>  Object.assign({'CurrentCV': 'daca2eb2-5658-2e9f-17da-a503ee1cce7c'}, window.localStorage));
           await page.evaluate((resumeID) => {
                // localStorage.removeItem('currentCV');
                localStorage.setItem('currentCV', resumeID);
            }, resumeID);
            await page.goto('http://localhost:3000/create-cv',  { waitUntil: 'networkidle2' });
            await page.waitFor(3000);
            const pic = await page.$('.A4')
                await pic.screenshot({
                   path: `profile_picture/${resumeID}.jpg`,
                   type: 'jpeg',
                   quality: 100
                })
            // await page.screenshot({
            //     path: `profile_picture/screN.jpg`,
            //     type: 'jpeg',
            //     quality: 100
                
            //  });
            // await autoScroll(page)
            //  let local = await page.evaluate(() => {
            //     return localStorage.getItem('currentCV');
            // });
            //  let user = await page.evaluate(() => {
            //     return Array.from(document.querySelectorAll(".A4")).length
            // });
// console.log(local)
// console.log(user)
            //let nrOfPages = await Array.from(page.$('.A4').innerHTML)
            //console.log(nrOfPages)
            // let imgArray = []
            // for(var i=0; i<user; i++){
            //     await page.goto('http://localhost:3000/create-cv', { waitUntil: 'networkidle2' });
            //     //await page.waitFor(1000);
            //     if(i>1){await autoScroll(page)}
                
            //     await page.emulateMedia('screen');
            //     const pic = await page.$('.A4')
            //     await pic.screenshot({
            //        path: `profile_picture/${resumeID}.jpg`,
            //        type: 'jpeg',
            //        quality: 100
            //     })
            //     imgArray.push(`/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/scre${i}.jpg`)
            //     }
            //     const pic = await page.$('body').innerHTML
            //     console.log(pic)
            //     const dom = await page.$$eval(, (element) => {
            //         return element.innerHTML
            //     });
              
            //    await page.setContent('div.containerA40')                
            //    var pdfFileName =  'sample'+(i+1)+'.pdf';
            //     pdfFiles.push(pdfFileName);
            //     await page.pdf({path: pdfFileName, landscape: false, format: 'A4', scale: 0.9, printBackground: true});
            //   }
            
            // await imagesToPdf(imgArray, `/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/${resumeID}.pdf`)
            
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

const mergeMultiplePDF = (pdfFiles) => {
    return new Promise((resolve, reject) => {
        merge(pdfFiles,'samplefinal.pdf',function(err){

            if(err){
                console.log(err);
                reject(err)
            }

            console.log('Success');
            resolve()
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
module.exports = giveMeScreenShot