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
    MM = (MM <= 9 ? '0'+ MM : MM);
    var dd = day.getDate();
    dd = (dd <= 9 ? '0'+ dd : dd);
    var HH = day.getHours();
    HH = (HH <= 9 ? '0' + HH : HH);
    var mm = day.getMinutes();
    mm = (mm <= 9 ? '0' + mm : mm);
    var ss = day.getSeconds();
    ss = (ss <= 9 ? '0' + ss : ss);

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
