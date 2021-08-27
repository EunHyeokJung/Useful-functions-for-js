Date.prototype.toYYYYMMDD = function() {

    var MM = this.getMonth() + 1;
    var DD = this.getDate();
    var result = this.getFullYear() + "" + (MM > 9 ? "":"0") + MM + (DD > 9 ? "":"0") + DD;

    return result;
}
