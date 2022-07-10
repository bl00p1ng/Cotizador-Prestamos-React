import React, {useState, Fragment} from 'react'
import { calculateTotal } from '../helpers'

const Form = (props) => {
  const {quantity, saveQuantity, period, savePeriod, saveTotal, saveIsLoading} = props
 
  // Crear state para un mensaje de error
  const [error, saveError] = useState(false)

  // Calcular el total a pagar por el préstamo
  const calculateLoan = e => {
      e.preventDefault()

      // Validar form
      if (quantity === 0 || period === '') {
        saveError(true)
        return;
      }

      // Eliminar error previo
      saveError(false)

      // Habilitar el spinner
      saveIsLoading(true)

      // Calcular cotización
      setTimeout(() => {
        const total = calculateTotal(quantity, period)
  
        // Una vez calculado, guradar el total
        saveTotal(total)

      // Deshabilitar el spinner
      saveIsLoading(false)
      }, 3000);

  }

  return (
    <Fragment>
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

      {/* Validar si se muestra o no el error */}
      {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}
    </Fragment>
  )
}

export default Form