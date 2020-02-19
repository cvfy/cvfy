const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())
async function giveMeData(profile) {

    const result = await puppeteer.launch({
        headless: false
    }).then(async browser => {
        try {
            const page = await browser.newPage()
            await page.setViewport({
                width: 800,
                height: 600
            })
            await page.goto("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin");
            await page.type("[id=username]", "saneacool@yahoo.com");
            await page.type("[id=password]", "Griskevici1988");
            await page.click("[type=submit]")
            await page.waitFor(3000);
            await page.goto(profile);

            //Login form
            await page.waitFor(2000);
            await autoScroll(page)
            //await page.click('section.experience-section button')

            if ((await page.$('section.education-section button.pv-profile-section__see-more-inline')) !== null) {
                await page.click('section.education-section button.pv-profile-section__see-more-inline')
            }
            if ((await page.$('section.pv-skill-categories-section button')) !== null) {
                await page.click('section.pv-skill-categories-section button')
            }
            if ((await page.$('section.pv-accomplishments-section button')) !== null) {
                await page.click('section.pv-accomplishments-section button')
            }
            if ((await page.$('section.pv-about-section a')) !== null) {
                await page.click('section.pv-about-section a')
            }
            await page.waitFor(2000);
            const cvData = await page.evaluate(() => {
                let obj = {};

                function verify(data) {
                    return (data !== undefined && data !== null) ? data : ""
                }
                obj.profileImage = verify(document.querySelectorAll("img.pv-top-card-section__photo")[0]).src
                obj.profileFullName = verify(document.querySelectorAll("li.t-24")[0]).innerText
                obj.profileHeadline = verify(document.querySelectorAll("h2.t-18")[0]).innerText
                obj.profileLocation = verify(document.querySelectorAll("ul.pv-top-card-v3--list-bullet li")[0]).innerText
                obj.profileAbout = [];
                Array.from(document.querySelectorAll("section.pv-about-section span")).forEach((item) => {
                    obj.profileAbout.push(item.innerText)
                })
                obj.profileExperience = [];
                obj.profileEducation = [];
                Array.from(document.querySelectorAll("section.experience-section button")).forEach(el => el.click())
                const ExpLength = Array.from(document.querySelectorAll("section.experience-section ul li.pv-entity__position-group-pager")).length
                console.log(ExpLength)

                for (let i = 0; i < ExpLength; i++) {
                    if ((document.querySelectorAll("section.experience-section ul li.pv-entity__position-group-pager")[i]).querySelector("p.pv-entity__secondary-title")) {
                        //let jobLocationD = verify(document.querySelectorAll("section.experience-section ul li h4.pv-entity__location span + span")[i])
                        var detailedExp = {
                            jobTitle: verify(document.querySelectorAll("section.experience-section ul li h3")[i]).innerText,
                            jobEmployer: verify(document.querySelectorAll("section.experience-section ul li p.pv-entity__secondary-title")[i]).innerText,
                            jobPeriod: verify(document.querySelectorAll("section.experience-section ul li h4.pv-entity__date-range span + span")[i]).innerText,
                            jobLocation: verify(document.querySelectorAll("section.experience-section ul li h4.pv-entity__location span + span")[i]).innerText,
                            jobDescription: verify(document.querySelectorAll("section.experience-section ul li p.pv-entity__description")[i]).innerText

                        }
                        obj.profileExperience.push(detailedExp)
                    } else {

                        var detailedExp = {
                            jobEmployer: verify(document.querySelectorAll("section.experience-section ul li.pv-entity__position-group-pager")[i].querySelector("h3 span + span")).innerText,
                            jobsDesc: []

                        }
                        document.querySelectorAll("section.experience-section ul li.pv-entity__position-group-pager")[i].querySelectorAll("ul li").forEach((item) => {
                            detailedExp.jobsDesc.
                            push({
                                jobTitle: verify(item.querySelector("h3 span + span")).innerText,
                                jobPeriod: verify(item.querySelector("h4 span + span")).innerText,
                                jobPeriodDuration: verify(item.querySelector("h4 + h4 span + span")).innerText,
                                jobLocation: verify(item.querySelector("div + h4 span + span")).innerText,
                                jobDescription: verify(item.querySelector("p.pv-entity__description")).innerText
                            })
                        })
                        obj.profileExperience.push(detailedExp)
                    }
                }
                const eduLength = Array.from(document.querySelectorAll("section.education-section ul li")).length
                console.log(eduLength)

                for (let j = 0; j < eduLength; j++) {
                    //let jobLocationD = verify(document.querySelectorAll("section.experience-section ul li h4.pv-entity__location span + span")[i])
                    var detailedEdu = {
                        educationInstitution: verify(document.querySelectorAll("section.education-section ul li h3.pv-entity__school-name")[j]).innerText,
                        educationType: [],
                        educationPeriod: verify(document.querySelectorAll("section.education-section ul li p.pv-entity__dates span + span")[j]).innerText,
                        educationHighlights: verify(document.querySelectorAll("section.education-section ul li p.pv-entity__description")[j]).innerText

                    }
                    Array.from(document.querySelectorAll("section.education-section ul li")[j].querySelectorAll("span.pv-entity__comma-item")).forEach((item) => {
                        detailedEdu.educationType.push(item.innerText)
                    })
                    obj.profileEducation.push(detailedEdu)
                }
                obj.skills = verify(Array.from(document.querySelectorAll("span.pv-skill-category-entity__name-text")).map(el => el.innerText))
                obj.accomplishments = []

                Array.from(document.querySelectorAll("section.pv-accomplishments-section div.pv-accomplishments-block__content")).forEach(el => {
                    let accompObj = {
                        accomplishmentType: verify(el.querySelector("h3").innerText),
                        accomplishmentList: verify(Array.from(el.querySelectorAll("ul li")).map((r) => {
                            //if(r.querySelector("span").innerText){return r.querySelector("span").innerText } 
                            return (r.querySelector("h4 span")) ? r.querySelector("h4").innerText : r.innerText
                        }))
                    }
                    obj.accomplishments.push(accompObj)
                })

                return obj
            });
            //console.log(cvData)
            //console.log(cvData.profileExperience[1].jobsDesc)
            //console.log(cvData.profileEducation[0].educationType)
            //console.log(cvData.accomplishments[0].accomplishmentList)
            //console.log(cvData.accomplishments[1].accomplishmentList)
            //console.log(cvData.accomplishments[2].accomplishmentList)
            return cvData
        } catch (err) {
            console.error(err.message);
        } finally {
            await browser.close();
        }
    });
    console.log(result)
    return result
}
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

module.exports = giveMeData