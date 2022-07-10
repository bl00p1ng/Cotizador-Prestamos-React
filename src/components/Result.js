import React from 'react'

const Result = ({total, period, quantity}) => (
    <div className='u-full-width result'>
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: ${quantity}</p>
        <p>Plazo para pagar: {period} meses</p>
        <p>Su pago mensual es de: ${(total / period).toFixed(2)}</p>
        <p>El total a pagar es: ${(total).toFixed(2)}</p>
    </div>
)

export default Result