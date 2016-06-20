// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Teste seus conhecimentos!!",
        "main":    "<p>Será que você aproveitou o curso?</p>",
        "results": "<h5>Frase do dia</h5><p>'Todo mundo tem cliente. Só traficante e analista de sistemas é que tem usuário.' ~Bill Gates</p>",
        "level1":  "Muito bom!",
        "level2":  "Foi por pouco!",
        "level3":  "Está bem hein !",
        "level4":  "Pode melhorar!",
        "level5":  "Volte pra escola!..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "A estrutura condicional pode assumir quais formatos ?",
            "a": [
                {"option": "Simples e Composta",      "correct": true},
                {"option": "Apenas Simples",     "correct": false},
                {"option": "Apenas Composta",      "correct": false},
                {"option": "Rígida e forte",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Está certo!</span> </p>",
            "incorrect": "<p><span>Ops!</span> Você errou! " // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "O que é uma variável?",
            "a": [
                {"option": "Algo que varia.",               "correct": false},
                {"option": "Uma variável é uma espaço na memória do computador para armazenar um tipo de dado determinado",   "correct": true},
                {"option": "uma peça de lego",               "correct": false},
                {"option": "um item decorativo no código", "correct": false} // no comma here
            ],
            "select_any": false,
            "correct": "<p><span>Está certo!</p>",
            "incorrect": "<p><span>Hmmm.</span> Você errou! </p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "O que é um vetor?",
            "a": [
                {"option": "Um vetor é uma variável que permite agrupar dados do mesmo tipo sob um só nome.",           "correct": true},
                {"option": "é um tipo de linguagem",                  "correct": false},
                {"option": "é uma flecha",  "correct": false},
                {"option": "Um tipo de operador",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Está certo!</p>",
            "incorrect": "<p>Você errou! </p>" // no comma here
        },
        { // Question 4
            "q": "Qual software foi usado na video aula sobre vetores?",
            "a": [
                {"option": "Norton",    "correct": false},
                {"option": "scratch",   "correct": true},
                {"option": "Netbeans",  "correct": false},
                {"option": "Potato",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Está certo!</p>",
            "incorrect": "<p>Você errou! </p>" // no comma here
        },
        { // Question 5
            "q": "Algoritmo é uma sequência de passos para se executar uma função",
            "a": [
                {"option": "Verdadeiro",    "correct": true},
                {"option": "Falso",         "correct": false} // no comma here
            ],
            "correct": "<p><span>Está certo!</p>",
            "incorrect": "<p>Você errou! </p>" // no comma here
        } // no comma here
    ]
};
