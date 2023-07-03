<!DOCTYPE html>
<html>
<head>
    <title>Пример HTML-страницы с JavaScript</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <h1>Привет, мир!</h1>
    <p id="demo">Это пример HTML-страницы с JavaScript.</p>

    <button onclick="changeText()">Изменить текст</button>
    <button onclick="highlightText()">Выделить текст</button>

    <script>
        function changeText() {
            var element = document.getElementById("demo");
            element.innerHTML = "Текст изменен!";
        }

        function highlightText() {
            var element = document.getElementById("demo");
            element.classList.add("highlight");
        }
    </script>
</body>
</html>
