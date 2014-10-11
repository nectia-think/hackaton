Hackaton
========

Objetivo generar una especificación que permitiera mejorar la comunicación entre cliente y servicios RESTFull. 


# SmartJS-msg

Nombre de fantasía para juntar un componente cliente ('smartjs-front') y el componente servidor ('smartjs-server') que acuerdan comunicarse a través de una especificación basada en Restfull y formato JSON. 

Se entiende que la API Rest expondrá un recurso y operaciones posibles de realizar sobre éste, utilizando convensión sobre nomenclatura. El uso de palabras en singular hacen referencia a una instancia de dicho recurso. Su versión plural hace referencia a listas de instancias del mismo recurso. 


La siguiente lista describe la convención de URLs, en donde se ilustra la distinción entre singular y particular. 
La prueba de concepto realizada utiliza un único recurso: Persona, con dos propiedades: rut y amigos. Amigos es una lista de personas.

## Singular

'''
GET /persona
'''
Retorna la estructura del recurso, que permita a una interfaz externa tener información suficiente para solicitar agregar/crear una nueva instancia de este recurso.

'''
GET /persona/{id}
'''
Retorna el estado actual del recurso particular identificado por 'id'. 

'''
POST /persona
'''
Recibe en el cuerpo del mensaje la estructura del recurso persona, con todas las propiedades requeridas para ser registradas en el sistema. Las propiedades deben haber sido antes consultadas, ver servicio más arriba. De todas maneras el servicio debiera realizar una segunda validación. 
Retorna cabecera estándar de HTTP código 201. 
Retorna en el cuerpo URL en donde se encuentra disponible el recurso. 


'''
DELETE /persona/{id}
'''
Retorna mensajería estandar de HTTP, código 200. 

'''
PUT /persona/{id}
'''
Actualiza estado del recurso. Recibe en el cuerpo del 'request', representación JSON del recurso, con las propiedades a actualizar. 


'''
GET /personas?[limit=10&[sort-asc|sort-desc]=propiedad]
'''
Obtiene lista de personas disponibles. 




