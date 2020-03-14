const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())
async function giveMeOneJob(link) {

    const result = await puppeteer.launch({
        headless: true
    }).then(async browser => {
        try {
            const page = await browser.newPage()
            await page.setViewport({
                width: 1200,
                height: 1600
            })
            await page.goto(`https://www.stepstone.de${link}`);
            const jobData = await page.evaluate(() => {
                function verify(data) {
                                         return (data !== undefined && data !== null) ? data : ""
                                     }
                let jobObj = {}
                jobObj.Link = `https://www.stepstone.de${link}`
                jobObj.CompanyName = verify(document.querySelector(".at-listing-nav-company-name-link").innerText)
                jobObj.JobPosition = verify(document.querySelector(".at-listing-nav-listing-title").innerText)
                jobObj.JobRequirements = verify(Array.from(document.querySelectorAll(".at-section-text-profile-content ul li")).map(el => el.innerText))
                return jobObj
                })
                // console.log(links)
                
      

           
            return jobData
        } catch (err) {
            console.error(err.message);
        } finally {
            await browser.close();
        }
    });
    console.log(result)
    return result
}


module.exports = giveMeOneJob