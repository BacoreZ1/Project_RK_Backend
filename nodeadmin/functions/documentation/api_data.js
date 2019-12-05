define({
    "api": [
        {
            "type": "get",
            "url": "/auth/checkUserDataExist/:uid",
            "title": "Valida si el usuario que accedió existe en la BD.",
            "name": "checkUserDataExist",
            "group": "AuthRoutes",
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "uid",
                            "description": "<p>ID único del usuario.</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "code",
                            "description": "<p>Código de respuesta.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "html",
                            "description": "<p>Mensaje de estatus.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "JSON",
                            "optional": false,
                            "field": "account",
                            "description": "<p>Información de la cuenta del usuario.</p>"
                        }
                    ]
                }
            },
            "version": "0.0.0",
            "filename": "routes/auth_routes.js",
            "groupTitle": "AuthRoutes"
        },
        {
            "type": "get",
            "url": "/auth/checkUserTypeAndRedirect/:uid:type",
            "title": "Verifica si el tipo de cuenta permite el acceso a la página desde donde se solicita.",
            "name": "checkUserTypeAndRedirect",
            "group": "AuthRoutes",
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "uid",
                            "description": "<p>ID único del usuario.</p>"
                        },
                        {
                            "group": "Parameter",
                            "type": "Number",
                            "optional": false,
                            "field": "type",
                            "description": "<p>Indica la página actual desde donde accede el usuario.</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "code",
                            "description": "<p>Código de respuesta.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "data",
                            "description": "<p>Mensaje de estatus.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "uid",
                            "description": "<p>ID único del usuario.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "type",
                            "description": "<p>Indica el tipo de la cuenta del usuario (Administrador o usuario final).</p>"
                        }
                    ]
                }
            },
            "version": "0.0.0",
            "filename": "routes/auth_routes.js",
            "groupTitle": "AuthRoutes"
        },
        {
            "type": "get",
            "url": "/category/getCategories",
            "title": "Consulta todas las categorías registradas en la base de datos.",
            "name": "getCategories",
            "group": "CategoryRoutes",
            "success": {
                "fields": {
                    "Success 200": [
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "code",
                            "description": "<p>Código de respuesta.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "html",
                            "description": "<p>Mensaje de estatus.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Array",
                            "optional": false,
                            "field": "data",
                            "description": "<p>Lista de todas las categorías registradas en formato JSON.</p>"
                        }
                    ]
                }
            },
            "version": "0.0.0",
            "filename": "routes/category_routes.js",
            "groupTitle": "CategoryRoutes"
        },
        {
            "type": "get",
            "url": "/category/getCategoriesById",
            "title": "Consulta la información de la categoría cuyo ID sea igual al parámetro de búsqueda.",
            "name": "getCategoriesById",
            "group": "CategoryRoutes",
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "id",
                            "description": "<p>ID (único) de la categoría a buscar.</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "code",
                            "description": "<p>Código de respuesta.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "html",
                            "description": "<p>Mensaje de estatus.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Array",
                            "optional": false,
                            "field": "data",
                            "description": "<p>Información de la categoría en formato JSON (en caso de existir).</p>"
                        }
                    ]
                }
            },
            "version": "0.0.0",
            "filename": "routes/category_routes.js",
            "groupTitle": "CategoryRoutes"
        },
        {
            "type": "get",
            "url": "/category/searchCategoryByLabel",
            "title": "Consulta todas las categorías cuya etiqueta (label) incluya el parámetro de búsqueda.",
            "name": "searchCategoryByLabel",
            "group": "CategoryRoutes",
            "parameter": {
                "fields": {
                    "Parameter": [
                        {
                            "group": "Parameter",
                            "type": "String",
                            "optional": false,
                            "field": "label",
                            "description": "<p>Etiqueta de la categoría a buscar, ya sea en su totalidad o coincidencias.</p>"
                        }
                    ]
                }
            },
            "success": {
                "fields": {
                    "Success 200": [
                        {
                            "group": "Success 200",
                            "type": "Number",
                            "optional": false,
                            "field": "code",
                            "description": "<p>Código de respuesta.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "String",
                            "optional": false,
                            "field": "html",
                            "description": "<p>Mensaje de estatus.</p>"
                        },
                        {
                            "group": "Success 200",
                            "type": "Array",
                            "optional": false,
                            "field": "data",
                            "description": "<p>Lista de todas las categorías en formato JSON donde haya coincidencia con el parámetro de búsqueda.</p>"
                        }
                    ]
                }
            },
            "version": "0.0.0",
            "filename": "routes/category_routes.js",
            "groupTitle": "CategoryRoutes"
        }
    ]
});