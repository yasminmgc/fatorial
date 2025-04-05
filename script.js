<!DOCTYPE html>
<html>
<head>
    <title>Fatorial</title>
</head>
<body>
    <script>
        function fatorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            } else {
                return n * fatorial(n - 1);
            }
        }

        let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
        let resultado = fatorial(numero);
        alert("O fatorial de " + numero + " é " + resultado);
    </script>
</body>
</html>