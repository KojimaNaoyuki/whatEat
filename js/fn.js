console.log("fn.js");

class Info {
    constructor() {
        //月ごとの日数
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

        //ご飯いらない時
        // [朝, 昼, 夕]  0 = いる | 1 = 分からない | 2 = いらない
        this.month1_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0]
        ];
        this.month2_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0]
        ];
        this.month3_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0]
        ];
        this.month4_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
        ];
        this.month5_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0]
        ];
        this.month6_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
        ];
        this.month7_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0]
        ];
        this.month8_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0]
        ];
        this.month9_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
        ];
        this.month10_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0]
        ];
        this.month11_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
        ];
        this.month12_DoYoyEat = [
            [0, 0, 1], [0, 0, 0], [1, 0, 1], [2, 0, 1], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
            [0, 0, 0]
        ];

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
    getEatDat(n) {
        switch (n) {
            case '1':
                return this.month1_DoYoyEat;
                break;
            case '2':
                return this.month2_DoYoyEat;
                break;
            case '3':
                return this.month3_DoYoyEat;
                break;
            case '4':
                return this.month4_DoYoyEat;
                break;
            case '5':
                return this.month5_DoYoyEat;
                break;
            case '6':
                return this.month6_DoYoyEat;
                break;
            case '7':
                return this.month7_DoYoyEat;
                break;
            case '8':
                return this.month8_DoYoyEat;
                break;
            case '9':
                return this.month9_DoYoyEat;
                break;
            case '10':
                return this.month10_DoYoyEat;
                break;
            case '11':
                return this.month11_DoYoyEat;
                break;
            case '12':
                return this.month12_DoYoyEat;
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
        this.tgEatDat = this.info.getEatDat(this.month);
    }
    create() {
        this.tgElement = document.getElementById('day');
        for(let i = 1; i < this.tgLastDay+1; i++) {
            let eatDatDay = this.tgEatDat[i-1]; //month1_DoYoyEat　データ取得[i番目][]

            //タグを作成
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let h4One = document.createElement('h4');
            let h4Two = document.createElement('h4');
            let h4Three = document.createElement('h4');

            //テキストノードを作成
            let textDay = document.createTextNode(i);
            let textEat1 = document.createTextNode('朝食');
            let textEat2 = document.createTextNode('昼食');
            let textEat3 = document.createTextNode('夕食');

            //テキストノードをタグに追加
            h3.appendChild(textDay);
            h4One.appendChild(textEat1);
            h4Two.appendChild(textEat2);
            h4Three.appendChild(textEat3);

            //タグをdivタグに追加
            div.appendChild(h3);
            div.appendChild(h4One);
            div.appendChild(h4Two);
            div.appendChild(h4Three);

            //クラスを付与
            div.classList.add('day-box');
            for(let j = 0; j < 3; j++) {
                if(eatDatDay[j] == 2) {
                    if(j == 0) {
                        h4One.classList.add('day-red');
                    } else if(j == 1) {
                        h4Two.classList.add('day-red');
                    } else if(j == 2) {
                        h4Three.classList.add('day-red');
                    }
                }
                if(eatDatDay[j] == 1) {
                    if(j == 0) {
                        h4One.classList.add('day-yellow');
                    } else if(j == 1) {
                        h4Two.classList.add('day-yellow');
                    } else if(j == 2) {
                        h4Three.classList.add('day-yellow');
                    }
                }
            }

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
 
