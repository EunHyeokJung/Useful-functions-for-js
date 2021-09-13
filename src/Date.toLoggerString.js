Date.prototype.toLoggerString = function (type) {

    if(typeof this != "object") {
        function Half_packageTypeError(message) {
            this.name = "Uncaught TypeError";
            this.message = message;
        }
        throw new Half_packageTypeError("Uncaught")
    }

    var day = this;

    var YYYY = day.getFullYear();
    var MM = day.getMonth() + 1;
    MM = ("0" + MM).slice(-2);
    var dd = day.getDate();
    dd = ("0" + dd).slice(-2);
    var HH = day.getHours();
    HH = ("0" + HH).slice(-2);
    var mm = day.getMinutes();
    mm = ("0" + mm).slice(-2);
    var ss = day.getSeconds();
    ss = ("0" + ss).slice(-2);

    if(type == null || type == 0) {
        return "[" + YYYY + "-" + MM + "-" + dd + " " + HH + ":" + mm + ":" + ss + "]";
    } else if(type == 1) {
        return "[" + YYYY + "/" + MM + "/" + dd + " " + HH + ":" + mm + ":" + ss + "]";
    } else if(type == 2) {
        return "[" + YYYY + "." + MM + "." + dd + "/" + HH + ":" + mm + ":" + ss + "]";
    } else {
        function ModuleUsageExeption(message) {
            this.name = "ModuleUsageExeption";
            this.message = message;
        }
        throw new ModuleUsageExeption("Unexpected type '" + type + "'");
    }
}
