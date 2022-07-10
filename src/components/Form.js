import React, {useState} from 'react'

const Form = ({quantity, saveQuantity, period, savePeriod}) => {
  // Crear state para un mensaje de error
  const [error, saveError] = useState(false)

  // Calcular el total a pagar por el préstamo
  const calculateLoan = e => {
      e.preventDefault()

      // Validar form
      if (quantity === 0 || period === '') {
        saveError(true)
      }
  }

  return (
    <form onSubmit={ calculateLoan }>
      <div className="row">
        <div>
          <label>Cantidad Prestamo</label>
          <input 
            className="u-full-width" 
            type="number" 
            placeholder="Ejemplo: 3000" 
            onChange={ e => saveQuantity(parseInt(e.target.value)) }
          />
        </div>
        <div>
          <label>Plazo para Pagar</label>
          <select 
            className="u-full-width"
            onChange={ e => savePeriod(parseInt(e.target.value)) }
          >
            <option value="">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>
          <div>
            <input 
              type="submit" 
              value="Calcular" 
              className="button-primary u-full-width" 
            />
          </div>
      </div>
    </form>
  )
}

export default Form