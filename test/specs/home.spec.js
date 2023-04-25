import homePage from "../pageobjects/home.page.js"

describe('Exercise 11', () => {
    it('should verify list items', async() => {     
        await homePage.open();
        await browser.pause(3000);
        await expect(homePage.listExamples).toBeElementsArrayOfSize(44);

    })
    it('should fail array size of 45', async() => {
        await expect(homePage.listExamples).not.toBeElementsArrayOfSize(45);



    })
})