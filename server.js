//Primer ejemplo
//var variable=require("IUSH"); 
//console.log(variable);

//Almacenar una libreria enuna variable(usar comando npm install express)
var express=require("express");
var app = express(); //app es una instancioa del objeto express
app.get("/",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.send("Hola"); //se envia una respuesta
});
app.get("/index",function(req,res){ //.get es un metodo el objeto en donde se le asignan diferentes parametros incluso otro tipo funcion
    res.send("Index"); //se envia una respuesta
});

app.listen(3000, function(){
    console.log("funcione!");
});