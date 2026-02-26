module.exports = ({ name, resetLink }) => `
<!DOCTYPE html>
<html>
  <body>
    <h1>Hola ${name}</h1>
    <p>Puedes resetear tu contraseña aquí:</p>
    <a href="${resetLink}">Restablecer contraseña</a>
  </body>
</html>
`;