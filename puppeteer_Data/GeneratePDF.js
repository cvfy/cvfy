const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())
const merge = require('easy-pdf-merge');
const imagesToPdf = require("images-to-pdf")

async function giveMePDF() {

    const result = await puppeteer.launch({
        headless: true,
    }).then(async browser => {
        try {
            const page = await browser.newPage()
            await page.setViewport({
                width: 1200,
                height: 1600
            })
            await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle2' });
            await page.waitFor(2000);
           await page.type("[id=email]", "alex@gmail.com");
           await page.type("[id=password]", "alex88");
           await page.click("[type=submit]")
           await page.waitFor(3000);
           await page.goto('http://localhost:3000/create-cv', { waitUntil: 'networkidle2' });
           await page.waitFor(3000);
           await page.screenshot({
               path: `profile_picture/screNew.jpg`,
               type: 'jpeg',
               quality: 100
               
            });
            await page.evaluate(() => {
                localStorage.setItem('CurrentCV', 'daca2eb2-5658-2e9f-17da-a503ee1cce7c');
            });
            await page.goto('http://localhost:3000/create-cv', { waitUntil: 'networkidle2' });
            await page.waitFor(3000);
            await page.screenshot({
                path: `profile_picture/screN.jpg`,
                type: 'jpeg',
                quality: 100
                
             });

            for(var i=0; i<3; i++){

                await page.waitFor(2000);
                if(i>0){
                await autoScroll(page)
                }
                await page.goto('http://localhost:3000/create-cv', { waitUntil: 'networkidle2' });
                const page = await page.$(`.containerA4${i}`)
                if(page){
                const pic = await page.$(`.containerA4${i}`)
                await pic.screenshot({
                   path: `profile_picture/scre${i}.jpg`,
                   type: 'jpeg',
                   quality: 100

                 });}
            //     const pic = await page.$('body').innerHTML
            //     console.log(pic)
            //     const dom = await page.$$eval(, (element) => {
            //         return element.innerHTML
            //     });
              
            //    await page.setContent('div.containerA40')                
            //    var pdfFileName =  'sample'+(i+1)+'.pdf';
            //     pdfFiles.push(pdfFileName);
            //     await page.pdf({path: pdfFileName, landscape: false, format: 'A4', scale: 0.9, printBackground: true});
              }

        } catch (err) {
            console.error(err.message);
        } finally {
            await browser.close();
            //console.log(pdfFiles)
            //const result = await mergeMultiplePDF(pdfFiles);
            //await imagesToPdf(["/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/scre0.jpg", "/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/scre1.jpg", "/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/scre3.jpg"], "/home/dci-l144/Exercise/CVFY/cvfy/profile_picture/combinedNew.pdf")
        }
    });
    console.log(result)
    return result
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
module.exports = giveMePDF