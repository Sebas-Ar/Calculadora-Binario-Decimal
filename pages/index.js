import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Swal from 'sweetalert2'

const Home = () => {

  const [numero, setNumero] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    var numeroDividido = numero /* asignamos el numero ingresado a una variable */
    var vector = [] /* inicializamos el vector donde guardaremos los binarios */
    var contador = 0 /* inicializamos un contador, el cual indicara la posicion del vector */

    while (numeroDividido > 0) { /* implementamos un while que irá dividiendo el numero hasta que este sea menor a 0 */

      let division = numeroDividido /= 2 /* dividimos el numero entre 2 */
      if(division % 1 === 0) { /* si el resultado es un numero entero */
        vector[contador] = 0 /* asignamos un 0 a esa posicion del vector */
      } else { /* sino */
        vector[contador] = 1 /* asignamos un 1 a esa posicion del vector */
      }
      contador += 1 /* aumentamos el contador para pasar a la siguiente posicion del vector */
      numeroDividido = Math.floor(division); /* redondeamos el numero dividido por debajo, y lo reasgnamos al 
                                                valor que se leerá al principio del bucle */

    }
    setResult(vector.reverse().toString().replace(/,/g,'')) /* le damos la vuelta al vector, lo convertimos en una 
                                                             cadena de texto y retiramos las ',' */
  
  }, [numero])

  useEffect(() => {
    if (numero < 0) {
      setNumero(0)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Número incorrecto',
        footer: 'Ha ingresado un número negativo'
      })
    }

    if(numero%1 !== 0) {
      setNumero(0)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Número incorrecto',
        footer: 'Debe ingrsar un numero entero'
      })
    }
  }, [numero])

  return (
    <div className="container">
      <Head>
        <title>Teleco II</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>CALCULADORA<br/>DECIMAL A BINARIO</h1>
      <main>
        <label> Ingrese el número a Convertir:</label>
        <br/>
        <input type="number" value={numero ? numero : ''} onChange={e => { setNumero(e.target.value)}}/>
        <p>el resultado es: <br/>{numero}<br/> {result} </p>
      </main>

      <footer>
        <p>Camila Hernandez | Sebastian Arias | Camilo Duran</p>
        <a
          href="https://www.usta.edu.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universidad Santo Tomás <img src="/img/usta.png" alt="ZEIT Logo" />
        </a> <br/>
      </footer>

      <style jsx>{`

      .container {
        height: 100vh;
        display: grid;
        grid-template-rows: 250px 1fr 100px;
      }

      * {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      img {
       width: 30px; 
      }

      a {
        text-decoration: none;
        color: white;
      }

      h1 {
        text-align: center;
        justify-self: center;
        align-self: center;
        color: white;
        font-size: 40px
      }

      label, p {
        text-align: center;
        color: white;
      }

      :global(body) {
        background: linear-gradient(0deg, #2c3e50 0%, #3498db 100%);
      }

      main {
        
        justify-self: center;
        align-self: flex-start;
        background-color: #33333377;
        display: grid;
        justify-items: center;
        padding: 20px;
        border-radius: 20px;
      }

      input {
        text-align: center;
        padding: 7px 0;
        border-radius: 15px;
        border: none;
        outline: none;
      }

      button {
        padding: 10px 15px;
        border-radius: 20px;
        border: none;
        color: #3498db;
        background: white
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: grid;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

    `}</style>

      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    </div>
  )
}
  

export default Home
