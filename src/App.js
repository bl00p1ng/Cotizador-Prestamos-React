import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Message from './components/Message'
import Result from './components/Result'

function App() {
  // Definir el state
  const [quantity, saveQuantity] = useState(0)
  const [period, savePeriod] = useState('')
  const [total, saveTotal] = useState(0)

  // Validar si se han ingresado datos en la app
  let component

  if (total === 0) {
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
          total={total}
          saveTotal={saveTotal}
        />

        <div className="messages">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
