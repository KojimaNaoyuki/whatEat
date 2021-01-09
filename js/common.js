console.log("common.js");

(function() {
    let info = new Info();
    let month = info.readStorage();
    console.log('month = ' + month);

    let createDayBox = new CreateDayBox(month);
    createDayBox.createMonth();
    createDayBox.create();

    document.getElementById('backMonth').addEventListener('click', function() {
        if(month != 1) {
            month--;
        } else {
            month = 12;
        }
        info.writeStorage(month);
        console.log('month = ' + month);

        createDayBox.delete();
    }, false);

    document.getElementById('nextMonth').addEventListener('click', function() {
        if(month != 12) {
            month++;
        } else {
            month = 1;
        }
        info.writeStorage(month);
        console.log('month = ' + month);

        createDayBox.delete();
    }, false);
}).call(this);