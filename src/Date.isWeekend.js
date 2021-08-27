Date.prototype.isWeekend = function() {
    var d = new Date().getDay();
    if(d == 0 || d == 6) {
        return true;
    } else {
        return false;
    }
}
