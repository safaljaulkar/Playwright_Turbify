const { expect } = require('@playwright/test')


class SentData {

    constructor(page) {
        this.page = page;

         //this.punchInMail = "Punch-In Time: 08 Augudt 2025, 10:30 AM";
       this.punchOutMail = "Punch-Out Time: 07 August  2025, 8:05 PM";

    }
}
module.exports = { SentData };