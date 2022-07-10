import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'

function App() {
  // Definir el state
  const [quantity, saveQuantity] = useState(0)
  const [period, savePeriod] = useState(0)

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
        />
      </div>
    </Fragment>
  );
}

export default App;
