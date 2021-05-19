"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENT_DATE_TIME = void 0;
const CURRENT_DATE_TIME = () => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
};
exports.CURRENT_DATE_TIME = CURRENT_DATE_TIME;
//# sourceMappingURL=CurrentDateTime.shared.js.map