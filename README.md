<div>
  <h1>Prueba de concepto para validar DNI Argentina utilizando
    <a href="https://portal.idanalyzer.com/" target="_blank">id analyzer</a>.
  </h1>


  <h3>Motivación:</h3>
  <p>
    Idealmente para realizar la validación de documentos emitidos en Argentina, DNI (documento nacional de identidad) disponemos de
    el API de Renaper, pero el proceso de autorización resulta no menos dificultoso además de que no cualquiera persona puede aplicar al mismo. Sumado a las limitaciones de costo por llamada al API.
  </p>
  <p>
    Como alternativa encontré ID Analyzer que no solo realiza el proceso de validación de un DNI, contra una foto que no necesariamente tiene que ser frontal, analiza biometricamente la validez de quien está realizando la petición al servidor.
  </p>
  <p>
    Adicionalmente, Renaper es un servicio que solo es útil para documentación emitida en el país. ID Analyzer valida documentos de decenas de países, ideales para aplicaciones que tienen un scope internacional.
  </p>


  <h3>Correr el projecto:</h3>
  <p>
    El proyecto esta basado en Node utilizando el framework NestJs, para correr el proyecto basta con tener instalado <a href="https://www.npmjs.com/" target="_blank">NPM</a>, y en el directorio donde se clono el proyecto utilizar el siguiente comando:<br>
    <code>npm install</code><br>
    Luego para inicializar el servidor:<br>
    <code>nest start</code><br>
  </p>

  <p>
    Finalmente utilizando <a href="https://insomnia.rest/download" target="_blank">Insomnia</a> o <a href="https://insomnia.rest/download" target="_blank">Postaman</a> realizar una petición http a:<br>
    <code>http://localhost:3000/analyzer-api</code><br>
    Por defecto NestJs corre en el puerto 3000.
  </p>

  <h3>Nota:</h3>
  <p>
    Adicionalmente deje dos respuestas de llamadas una realizada con mi DNI y la otra con imagenes de prueba, como archivos .json.<br>
    example_bad_result.json<br>
    example_ok_result.json
  </p>
</div>