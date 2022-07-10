// Calcular el valor total de la cotización
export function calculateTotal(quantity, period) {
    /* Interes del préstamo con base en la cantidad prestada:
    -> 0 - 1000 = 25%
    -> 1001 - 5000 = 20%
    -> 5001 - 10000 = 15%
    -> +10000 = 10%
     */

    let totalQuantity;

    if (quantity <= 1000) {
        totalQuantity = quantity * .25
    } else if (quantity > 1000 && quantity <= 5000) {
        totalQuantity = quantity * .20;
    } else if (quantity > 5000 && quantity <= 10000) {
        totalQuantity = quantity * .15;
    } else {
        totalQuantity = quantity * .10;
    }

    /* Interes del préstamo con base en los meses del plazo:
    -> 3 meses = 5%
    -> 6 meses = 10%
    -> 12 meses = 15%
    -> 24 meses = 20%
     */

    let totalPeriod = 0

    switch (period) {
        case 3:
            totalPeriod = quantity * .05
            break;
        case 6:
            totalPeriod = quantity * .10
            break;
        case 12:
            totalPeriod = quantity * .15
            break;
        case 24:
            totalPeriod = quantity * .20
            break;
        default:
            break;
    }

    return totalQuantity + totalPeriod + quantity
}