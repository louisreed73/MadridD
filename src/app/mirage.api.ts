import {Server} from "miragejs";
import { request } from "http";



export let serverAPI= ()=> {

    new Server({
        routes() {
    
             this.get("https://my-json-server.typicode.com/louisreed73/fakeAPI/documentos",(schema,request)=>{
                  
             console.log(request.queryParams);
    
             if(request.queryParams.q==="madrid") {
                  console.log("estas buscando madrid!");
    
              return    [
                       {
                       "id": 3,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 5,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 8,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 16,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 22,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 24,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 27,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 28,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "escrito"
                       }
                       ]
             }
             if(request.queryParams.q==="internet") {
                  console.log("estas buscando internet!")
    
                  return [
                    {
                    "id": 14,
                    "descripcion": "internet",
                    "tipo_documental": 2,
                    "fase_procesal": 1,
                    "tipo_procedimiento": 0,
                    "magistrado": "magistrado 3",
                    "tipo": "escrito"
                    },
                    {
                    "id": 15,
                    "descripcion": "internet",
                    "tipo_documental": 2,
                    "fase_procesal": 1,
                    "tipo_procedimiento": 0,
                    "magistrado": "magistrado 3",
                    "tipo": "escrito"
                    },
                    {
                    "id": 17,
                    "descripcion": "internet",
                    "tipo_documental": 2,
                    "fase_procesal": 1,
                    "tipo_procedimiento": 0,
                    "magistrado": "magistrado 1",
                    "tipo": "escrito"
                    },
                    {
                    "id": 19,
                    "descripcion": "internet",
                    "tipo_documental": 2,
                    "fase_procesal": 1,
                    "tipo_procedimiento": 0,
                    "magistrado": "magistrado 2",
                    "tipo": "resolucion"
                    },
                    {
                    "id": 26,
                    "descripcion": "internet",
                    "tipo_documental": 2,
                    "fase_procesal": 1,
                    "tipo_procedimiento": 0,
                    "magistrado": "magistrado 2",
                    "tipo": "resolucion"
                    },
                    {
                    "id": 29,
                    "descripcion": "internet",
                    "tipo_documental": 2,
                    "fase_procesal": 1,
                    "tipo_procedimiento": 0,
                    "magistrado": "magistrado 2",
                    "tipo": "resolucion"
                    }
                    ]
             }
             if(request.queryParams.q==="digital") {
                  console.log("estas buscando digital!");
    
                  return [
                       {
                       "id": 1,
                       "descripcion": "digital",
                       "tipo_documental": 1,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 11,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 13,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 18,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 20,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 21,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 23,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 25,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "resolucion"
                       }
                       ]
             }
             if(
                  request.queryParams.q==="madrid" &&
                  request.queryParams._page==="1" &&
                  request.queryParams._limit==="5" 
    
                  ) {
                  console.log("estas buscando digital!");
    
                  return [
                       {
                       "id": 3,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 5,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 8,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 16,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 22,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       }
                       ]
             }
             if(
                  request.queryParams.q==="madrid" &&
                  request.queryParams._page==="2" &&
                  request.queryParams._limit==="5" 
    
                  ) {
                  console.log("estas buscando digital!");
    
                  return [
                       {
                       "id": 24,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 27,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 28,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "escrito"
                       }
                       ]
             }
             if(
                  request.queryParams.q==="internet" &&
                  request.queryParams._page==="1" &&
                  request.queryParams._limit==="5" 
    
                  ) {
                  console.log("estas buscando digital!");
    
                  return [
                       {
                       "id": 14,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 15,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 17,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "escrito"
                       },
                       {
                       "id": 19,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 26,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       }
                       ]
             }
             if(
                  request.queryParams.q==="internet" &&
                  request.queryParams._page==="2" &&
                  request.queryParams._limit==="5" 
    
                  ) {
                  console.log("estas buscando digital!");
    
                  return [
                       {
                       "id": 29,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       }
                       ]
             }
             if(
                  request.queryParams.q==="digital" &&
                  request.queryParams._page==="1" &&
                  request.queryParams._limit==="5" 
    
                  ) {
                  console.log("estas buscando digital!");
    
                  return [
                       {
                       "id": 1,
                       "descripcion": "digital",
                       "tipo_documental": 1,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 11,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 13,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 18,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 20,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       }
                       ]
             }
             if(
                  request.queryParams.q==="digital" &&
                  request.queryParams._page==="2" &&
                  request.queryParams._limit==="5" 
    
                  ) {
                  console.log("estas buscando digital!");
    
                  return [
                       {
                       "id": 21,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 23,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 25,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "resolucion"
                       }
                       ]
             }
    
             if(request.queryParams.q==="") {
                  return [
                       {
                       "id": 0,
                       "descripcion": "descripcion 0",
                       "tipo_documental": 0,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 1,
                       "descripcion": "digital",
                       "tipo_documental": 1,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 2,
                       "descripcion": "descripcion 2",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 3,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 4,
                       "descripcion": "descripcion 4",
                       "tipo_documental": 0,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 5,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 6,
                       "descripcion": "descripcion 6",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 7,
                       "descripcion": "descripcion 7",
                       "tipo_documental": 0,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 8,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 9,
                       "descripcion": "descripcion 9",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 10,
                       "descripcion": "descripcion 10",
                       "tipo_documental": 0,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 11,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 12,
                       "descripcion": "descripcion 12",
                       "tipo_documental": 0,
                       "fase_procesal": 2,
                       "tipo_procedimiento": 1,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 13,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 14,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 15,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 16,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 17,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "escrito"
                       },
                       {
                       "id": 18,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 19,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 20,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 21,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 22,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "escrito"
                       },
                       {
                       "id": 23,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 24,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "escrito"
                       },
                       {
                       "id": 25,
                       "descripcion": "digital",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 26,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 27,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 3",
                       "tipo": "resolucion"
                       },
                       {
                       "id": 28,
                       "descripcion": "madrid",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 1",
                       "tipo": "escrito"
                       },
                       {
                       "id": 29,
                       "descripcion": "internet",
                       "tipo_documental": 2,
                       "fase_procesal": 1,
                       "tipo_procedimiento": 0,
                       "magistrado": "magistrado 2",
                       "tipo": "resolucion"
                       }
                       ]
             }
    
             
             
             
             })







            




             this.get("/api/documentos",()=>{
                //  console.log("Alquien está pidiendo la API documentos!!!!")
                 return {
                    "result" : {
                      "status" : true,
                      "info" : null,
                      "errors" : [ ],
                      "http_code" : 200,
                      "trace_id" : null,
                      "stack_trace" : [ ],
                      "updated_elements" : 0
                    },
                    "data" : {
                      "tiposDocumentales" : [ {
                        "codigo" : "105",
                        "descripcion" : "1 fakeAPI 1"
                      }, {
                        "codigo" : "140",
                        "descripcion" : "1 fakeAPI 2"
                      }, {
                        "codigo" : "154",
                        "descripcion" : "1 fakeAPI 3"
                      }, {
                        "codigo" : "125",
                        "descripcion" : "1 fakeAPI 4"
                      }, {
                        "codigo" : "102",
                        "descripcion" : "1 fakeAPI 5"
                      } ]
                    },
                    "metadata" : {
                      "paging" : {
                        "init" : 0,
                        "limit" : 5,
                        "total" : 68,
                        "links" : {
                          "self" : {
                            "href" : "/tiposDocumentales?$init=0&$limit=5"
                          },
                          "previous" : null,
                          "next" : {
                            "href" : "/tiposDocumentales?$init=5&$limit=5"
                          },
                          "first" : {
                            "href" : "/tiposDocumentales?$init=0&$limit=5"
                          },
                          "last" : {
                            "href" : "/tiposDocumentales?$init=63&$limit=5"
                          }
                        },
                        "total_pages" : 14,
                        "num_page" : 1
                      }
                    }
                  }
                  
             })


             this.get("/api/documentos2",()=>{
                //  console.log("Alquien está pidiendo la API documentos!!!!")
                 return {
                    "result" : {
                      "status" : true,
                      "info" : null,
                      "errors" : [ ],
                      "http_code" : 200,
                      "trace_id" : null,
                      "stack_trace" : [ ],
                      "updated_elements" : 0
                    },
                    "data" : {
                      "tiposDocumentales" : [ {
                        "codigo" : "105",
                        "descripcion" : "2 fakeAPI 1"
                      }, {
                        "codigo" : "140",
                        "descripcion" : "2 fakeAPI 2"
                      }, {
                        "codigo" : "154",
                        "descripcion" : "2 fakeAPI 3"
                      }, {
                        "codigo" : "125",
                        "descripcion" : "2 fakeAPI 4"
                      }, {
                        "codigo" : "102",
                        "descripcion" : "2 fakeAPI 5"
                      } ]
                    },
                    "metadata" : {
                      "paging" : {
                        "init" : 0,
                        "limit" : 5,
                        "total" : 68,
                        "links" : {
                          "self" : {
                            "href" : "/tiposDocumentales?$init=0&$limit=5"
                          },
                          "previous" : null,
                          "next" : {
                            "href" : "/tiposDocumentales?$init=5&$limit=5"
                          },
                          "first" : {
                            "href" : "/tiposDocumentales?$init=0&$limit=5"
                          },
                          "last" : {
                            "href" : "/tiposDocumentales?$init=63&$limit=5"
                          }
                        },
                        "total_pages" : 14,
                        "num_page" : 1
                      }
                    }
                  }
                  
             })

    
    
    
             
    
             
    
     
    
             
    
    
    
       
    
        }
    })

}



