/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fiveBill = 0;
    let tenBill = 0;

    for (let i = 0; i < bills.length; i++) {
        let bill = bills[i];
        if (bill == 5) {
            fiveBill++;
        } else if (bill == 10) {
            if (fiveBill === 0) {
                return false;
            }
            fiveBill--;
            tenBill++;
        } else {
            if (tenBill > 0 && fiveBill > 0) {
                tenBill--;
                fiveBill--;
            } else if (fiveBill >= 3) {
                fiveBill -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};
