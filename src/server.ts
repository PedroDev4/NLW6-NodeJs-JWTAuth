import { app } from "./app";

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

/*

    GET -> BUSCAR INFORMAÇÃO
    POST -> INSERÇÃO/CRIAÇÃO UMA INFORMAÇÃO
    PUT -> ATUALIZAR UMA INFORMAÇÃO
    DELETE -> DELEÇÃO DE UMA INFORMAÇÃO
    PATCH -> ATUALIZAR UMA INFORMALÇAO ESPECÍFICA

*/

/*
    Tipos de Parâmetros

    Route Params -> Parâmetros que fazem parte da rota. Ex: http://localhost:3000/produtos/74eseawe811a75
    Query Params -> Usada para buscas com filtros => http://localhost:3000/produtos?name=teclado&avaliacao=5
    Body Params -> Parametros usados para POST, PUT OU PATCH
    Ex: {
        "name": "Teclado Gamer Balckwindow",
        "quantity": 20,
        "description": "top"
    }

*/