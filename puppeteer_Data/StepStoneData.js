const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())
async function giveMeJobData(position, location, pages) {

    const result = await puppeteer.launch({
        headless: true
    }).then(async browser => {
        try {
            const page = await browser.newPage()
            await page.setViewport({
                width: 1000,
                height: 1200
            })
            console.log("calling step1")
            await page.goto(`https://www.stepstone.de/5/job-search-simple.html?stf=freeText&ns=1&companyid=0&sourceofthesearchfield=resultlistpage%3Ageneral&qs=%5B%5D&ke=${position}&ws=${location}&ra=30&suid=a2c2ed4a-e81e-44c2-bf24-afcd6383ec87&ob=relevance&action=sort_relevance`);

            const jobData = await page.evaluate(() => {
                const links = Array.from(document.querySelectorAll("a.styled__TitleLink-sc-7z1cau-0")).map(el => {
                  return el.getAttribute("href")   
                })
                // console.log(links)
                return links
            })
            let jobsArray = []
            let start = 0 + parseInt(pages)
            let end = 4 + parseInt(pages)
            for(i=start; i<end; i++){           
            await page.goto(`https://www.stepstone.de${jobData[i]}`, {
                waitUntil: "domcontentloaded"
            });

            let Data = await page.evaluate(() => {
                function verify(data) {
                    return (data !== undefined && data !== null) ? data : ""
                }
                let jobObj = {}
                jobObj.Link = location.href
                jobObj.CompanyName = verify(document.querySelector(".at-listing-nav-company-name-link").innerText)
                jobObj.JobPosition = verify(document.querySelector(".at-listing-nav-listing-title").innerText)
                jobObj.JobRequirements = verify(Array.from(document.querySelectorAll(".at-section-text-profile-content ul li")).map(el => el.innerText))
                return jobObj
                window.stop()
            }, jobData)
            jobsArray.push(Data)
            }
console.log(jobsArray)
           
            return jobsArray
        } catch (err) {
            console.error(err.message);
        } finally {
            await browser.close();
        }
    });
    console.log(result)
    return result
}


module.exports = giveMeJobData