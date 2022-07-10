import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Message from './components/Message'
import Result from './components/Result'
import Spinner from './components/Spinner'

function App() {
  // Definir el state
  const [quantity, saveQuantity] = useState(0)
  const [period, savePeriod] = useState('')
  const [total, saveTotal] = useState(0)
  const [isLoading, saveIsLoading] = useState(false)

  let component

  // Mostrar u ocultar el spinner
  if (isLoading) {
    component = <Spinner />
  }
  // Validar si se han ingresado datos en la app
  else if (total === 0) {
    // Si no se han ingresado datos se muestra un mensaje con instrucciones
    component = <Message />
  } else {
    // Si se han ingresado datos se muestra el resultado de la cotización
    component = <Result
                  total={total}
                  period={period}
                  quantity={quantity}
                />
  }

  return (
    <Fragment>
      <Header 
        title="Cotizador de seguros"
      />

      <div className="container">
        <Form 
          quantity={quantity}
          saveQuantity={saveQuantity}
          period={period}
          savePeriod={savePeriod}
          saveTotal={saveTotal}
          saveIsLoading={saveIsLoading}
        />

        <div className="messages">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
