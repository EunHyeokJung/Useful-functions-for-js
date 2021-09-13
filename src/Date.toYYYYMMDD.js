Date.prototype.toYYYYMMDD = function() {

    var MM = this.getMonth() + 1;
    var DD = this.getDate();
    var result = this.getFullYear() + ("0" + MM).slice(-2) + ("0" + DD).slice(-2);

    return result;
}
