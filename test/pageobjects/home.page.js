import Page from "./page.js";

class homePage extends Page {

    get listExamples() {
        return $$('ul li');
    }

 open() {
        return super.open('');
//        return super.open('home');
    }
}

//module.exports = new homePage();
export default new homePage();