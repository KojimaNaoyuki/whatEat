console.log("common.js");

(function() {
    let month = 1;
    let createDayBox = new CreateDayBox(month);
    createDayBox.create();

    document.getElementById('backMonth').addEventListener('click', function() {
        if(month != 0) {
            month--;
        } else {
            month = 12;
        }
        let createDayBox = new CreateDayBox(month)
        createDayBox.delete();
        createDayBox.create();
    }, false);

    document.getElementById('nextMonth').addEventListener('click', function() {
        if(month != 12) {
            month++;
        } else {
            month = 1;
        }
        let createDayBox = new CreateDayBox(month);
        createDayBox.delete();
        createDayBox.create();
    }, false);
}).call(this);