import React, {Fragment} from 'react'

const Header = ({title, description}) => {
  // Aquí va código estándar de JS
  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{description}</p>
    </Fragment>
  )
}

export default Header