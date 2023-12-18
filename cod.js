function ejecutarCodigo() {
    let codigo = document.getElementById("codigoPHP").value;
    try {
        let resultado = eval(codigo);
        document.getElementById("resultado").innerText = resultado;
    } catch (error) {
        document.getElementById("resultado").innerText = "Error al ejecutar el código";
    }
}