function insert(num)
        {
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
        function clean()
        {
            document.getElementById('resultado').innerHTML = "";
            document.querySelector('#history').innerHTML = "";
            
        }
        function back()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
        }
        function calcular()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            if(resultado)
            {
                document.querySelector("#history").innerHTML = eval(resultado);
            }
            else
            {
                document.getElementById('resultado').innerHTML = "Nada..."
            }
        }

    document.addEventListener("keypress", (e) => {
        if (e.key == "1") {
            insert("1");
        }
        else if (e.key == "2") {
            insert("2");
        }
        else if (e.key == "3") {
            insert("3");
        }
        else if (e.key == "4") {
            insert("4");
        }
        else if (e.key == "5") {
            insert("5");
        }
        else if (e.key == "6") {
            insert("6");
        }
        else if (e.key == "7") {
            insert("7");
        }
        else if (e.key == "8") {
            insert("8");
        }
        else if (e.key == "9") {
            insert("9");
        }
        else if (e.key == "0") {
            insert("0");
        }
        else if (e.key == ".") {
            insert(".");
        }
        else if (e.key == "+") {
            insert("+");
        }
        else if (e.key == "-") {
            insert("-");
        }
        else if (e.key == "/") {
            insert("/");
        }
        else if (e.key == "*") {
            insert("*");

        }
        else if (e.key == "<") {
            back("<");
        }
        else if (e.key == "C") {
            clean("C");
        }
        else if (e.key == "=") {
            calcular("=");
        }
    })  

        

