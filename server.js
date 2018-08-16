//Primer ejemplo
//var variable=require("IUSH"); 
//console.log(variable);

//Almacenar una libreria enuna variable(usar comando npm install express)
var express=require("express");
var app = express(); //app es una instancioa del objeto express
var path = require("path");//vanantes de listen

app.get("/",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.send("Hola"); //se envia una respuesta
});
app.get("/index",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.send("Index"); //se envia una respuesta
});
app.get("/iush",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.sendFile(
        path.join(
            __dirname, '/src/views/iush.html'
        )
    ); 
});
app.get("/formulario",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.sendFile(
        path.join(
            __dirname, '/src/views/index.html'
        )
    ); 
});
app.get("/preguntas",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.sendFile(
        path.join(
            __dirname, '/src/views/preguntas.html'
        )
    ); 
});

app.listen(3000, function(){ //definirelpuerto 3000 para escuchar la app
    console.log("funcione!");
});