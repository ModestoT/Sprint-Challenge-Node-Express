- Mention two parts of Express that you learned about this week.

    Route handlers are middleware along with everything else we write in express.
    Express is compatible with connect middleware which is a large framework for node that provides the middleware layer.

- Describe Middleware?

    middleware are functions that take in a req object, response object and a callback function next when used with express. Middleware can make changes to the req annd res objects before any other code is ran for them. 

- Describe a Resource?
    A resource is something that the client manages using end-points created by a API or server software.

- What can the API return to help clients know if a request was successful?
    
    The API can return a status code letting them know it was successful, this code would depend on the action being done but a 200 or 201 are some of them.

- How can we partition our application into sub-applications?

    We can make sub-applications by making sue of express routers. This allows us to seperate the route handler middleware into their own files 
    for a more organized code base 