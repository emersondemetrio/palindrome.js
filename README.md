# Palindrome.js

 Installing

*Lines beginning with a $ mean a command to be executed in a terminalLines that starts with $ mean a command to execute in a terminal*

- Download and install nodejs ( https://nodejs.org/en/download )
- Install bower

    ```$ npm install -g bower```

- Clone the app:

    ```$ https://github.com/emersondemetrio/palindrome.js.git```

- Navigate to app foolder

    ```$ cd palindrome.js```

- Install back-end dependencies:

    ```$ npm install install```

- Install front-end dependencies:

    ```$ bower install```

Running Application:

```$ npm start```

See results using interface:

Open in your browser: ```http://localhost:3000```

See Results Using API:

Open in your browser: ```http://localhost:3000/api?word=yourString```

Replace "yourString" by the word you want to check. For example:

```http://localhost:3000/api?word=A MAN A PLAN A CANAL PANAMA```

If you see "OK", it means that your string is a palindrome and if you see "Bad Request", it means that your string is not a palindrome.