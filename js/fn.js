console.log("fn.js");

class Info {
    constructor() {
        this.month1 = 31;
        this.month2 = 28;
        this.month3 = 31;
        this.month4 = 30;
        this.month5 = 31;
        this.month6 = 30;
        this.month7 = 31;
        this.month8 = 31;
        this.month9 = 30;
        this.month10 = 31;
        this.month11 = 30;
        this.month12 = 31;
    }
    getLastDay(n) {
        switch (n) {
            case '1':
                return this.month1;
                break;
            case '2':
                return this.month2;
                break;
            case '3':
                return this.month3;
                break;
            case '4':
                return this.month4;
                break;
            case '5':
                return this.month5;
                break;
            case '6':
                return this.month6;
                break;
            case '7':
                return this.month7;
                break;
            case '8':
                return this.month8;
                break;
            case '9':
                return this.month9;
                break;
            case '10':
                return this.month10;
                break;
            case '11':
                return this.month11;
                break;
            case '12':
                return this.month12;
                break;
        }
    }
    writeStorage(item) {
        storage.month = item;
        console.log('finshed save');
    }
    readStorage() {
        if(!localStorage.getItem('month')) {
            storage.setItem('month', '1');
        }
        return storage.month;
    }
    deleteStorage() {
        storage.removeItem('month');
    }
}

class CreateDayBox {
    constructor(month) {
        this.info = new Info();
        this.month = month;
        this.tgLastDay = this.info.getLastDay(this.month);
    }
    create() {
        this.tgElement = document.getElementById('day');
        for(let i = 1; i < this.tgLastDay+1; i++) {
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
    
            let textDay = document.createTextNode(i);
            h3.appendChild(textDay);
            div.appendChild(h3);
            div.classList.add('day-box');
            this.tgElement.appendChild(div);
        }
    }
    createMonth() {
        this.tgElement = document.getElementById('displayMonth');
        this.tgElement.innerHTML = this.month + '月';
    }
    delete() {
        document.location.reload();
    }
}
 
