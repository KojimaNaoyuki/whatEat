console.log("fn.js");

class Info {
    constructor() {
        this.one = 31;
        this.two = 28;
        this.three = 31;
    }
    getLastDay(n) {
        switch (n) {
            case 1:
                return this.one;
                break;
            case 2:
                return this.two;
                break;
            case 3:
                return this.three;
                break;
        }
    }
}

class CreateDayBox {
    constructor(month) {
        this.info = new Info();
        this.month = month;
        this.tgElement = document.getElementById('day');
        this.tgLastDay = this.info.getLastDay(this.month);
    }
    create() {
        for(let i = 1; i < this.tgLastDay; i++) {
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
    
            let textDay = document.createTextNode(i);
            h3.appendChild(textDay);
            div.appendChild(h3);
            div.classList.add('day-box');
            this.tgElement.appendChild(div);
        }
    }
    delete() {
        this.tgElement.remove();
        let div = document.createElement('div');
        div.id = 'day';
        document.getElementById('daySection').appendChild(div);
    }
}
 
