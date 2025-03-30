"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRealFloor = void 0;
function getRealFloor(n) {
    if (n < 1) {
        return n;
    }
    else if (n < 13) {
        return n - 1;
    }
    else {
        return n - 2;
    }
}
exports.getRealFloor = getRealFloor;
//# sourceMappingURL=a_8kyu_whats_the_real_floor_module.js.map