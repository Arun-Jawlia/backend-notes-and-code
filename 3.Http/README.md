# Client - Server Model
- The client-server model is a distributed computing architecture that divides the responsibilities and tasks between two types of entities: clients and servers.
  
- This model is commonly used in network-based applications where multiple users (clients) request services or resources from a central provider (server).
  
-  Here's an overview of the client-server model:

1. **Client** 
   - A client is a user device or application that initiates requests for services, resources, or information.
   - Clients are typically end-user devices such as computers, smartphones, tablets, or software applications.
   - Clients are responsible for making requests to servers and handling the presentation of data to users.

2. **Server**
   - A server is a central computing system or software application that provides services, resources, or information in response to client requests.
   - Servers are dedicated machines optimized for handling requests from multiple clients concurrently.
   - Servers can offer various services, such as file storage, web pages, databases, or application processing.


3. **Communication:**
   - Communication between clients and servers occurs over a network, which can be a local network (intranet) or the internet.
   - Clients and servers communicate using network protocols, with the most common being the Transmission Control Protocol (TCP) and the Internet Protocol (IP).
  
4. **Request-Response Model:**
     - Clients send requests to servers, and servers respond to those requests by providing the requested services or resources.
    - Requests and responses typically follow a standardized format defined by the communication protocol being used.

5. **Concurrency:**
    -The client-server model supports concurrent connections, allowing multiple clients to interact with the server simultaneously.
    -This concurrency is facilitated through mechanisms such as multithreading or asynchronous programming.

6. **Scalability:**
    - The client-server architecture is scalable, meaning additional clients can be added without requiring significant changes to the server.
    - Servers can be scaled horizontally (adding more servers) or vertically (increasing the resources of existing servers) to handle increased demand.

Examples:
**Web Servers:** In the context of the web, a web server (e.g., Apache, Nginx) serves web pages to clients (browsers).

**Database Servers:** Database servers (e.g., MySQL, PostgreSQL) handle database queries and data storage for client applications.

**Application Servers:** Application servers (e.g., Node.js, Java EE) process and respond to requests from client applications.

7. **Security:**
    - Security measures, such as authentication and encryption, are often implemented to protect communication between clients and servers.
    - The client-server model provides a modular and scalable approach to building distributed systems. It allows for the centralization of resources and services, making it easier to manage and maintain complex applications, particularly in networked environments.





# HTTP and HTTPS

**HTTP** (Hypertext Transfer Protocol) and **HTTPS**(Hypertext Transfer Protocol Secure) are protocols used for communication between a client (typically a web browser) and a server over a computer network. They are the foundation of data communication on the World Wide Web.

## HTTP (Hypertext Transfer Protocol):

**Purpose:**

- HTTP is designed for transferring hypertext, which includes HTML documents, images, videos, and other resources.
  Communication:

- It follows a client-server model, where the client sends requests to the server, and the server responds with the requested data.
  Stateless Protocol:

- HTTP is a stateless protocol, meaning each request from a client to a server is independent, and the server doesn't retain information about previous requests.
  Default Port:

- The default port for HTTP is 80.

**Security:**

- HTTP does not provide a secure way to transmit data. The information exchanged between the client and server is not encrypted, making it vulnerable to interception and tampering.
  URL Format:

- URLs for HTTP typically start with http://.

## HTTPS (Hypertext Transfer Protocol Secure):

**Purpose:**

- HTTPS is an extension of HTTP but with an added layer of security.
  Encryption:

- HTTPS uses SSL/TLS (Secure Sockets Layer/Transport Layer Security) protocols to encrypt the data transmitted between the client and server. This encryption ensures that the data remains confidential and secure from eavesdroppers.
  Authentication:

- HTTPS provides a level of authentication by using digital certificates. This helps the client verify that it is connecting to the intended server and not a malicious one.
  Default Port:

- The default port for HTTPS is 443.

URL Format: URLs for HTTPS start with https://.

**Secure Communication:**

- By encrypting the data during transmission, HTTPS ensures that sensitive information such as login credentials, personal details, and financial transactions are secure from unauthorized access.

## Key Differences:

1. Security:
   - HTTP is not secure and transmits data in plaintext, while HTTPS encrypts data using SSL/TLS, providing a secure and encrypted connection.

2. Authentication:
   - HTTPS uses digital certificates for authentication, helping verify the identity of the server. HTTP does not include this level of authentication.

3. Port:
   - HTTP uses port 80 by default, while HTTPS uses port 443.

4. URL Format:
   - URLs for HTTP start with http://, and URLs for HTTPS start with https://.




## 3 Ways Handshake for server
1. Client express it's intent to the server ( Synchconize)
   
2. Server acknowledge it's client intent ( Synchronize-Acknowledge )
   
3. Client says - its's what I want ( Acknowledge )






## HTTP Verbs/Method 
1. GET -to get/read something on the server
2. PUT -replace the whole thing
3. PATCH -modify - will modify the specific thing in the whole thing
4. DELETE - to delete on the server
5. POST - to add/post/share one the server




## Nodemon : helps restart server again again if made changes in the selected file




## HTTP Statuses
- Every HTTP request returns a response code in return. 
- The codes are never random. they always have meanings. 
- eg, 404 Not Found the most widely used status code. that means, if client request for a 'resource' and if it doesn't exist on server, server will send a status code 404. now client doesn't need to parse any other information. by just looking at this statuscode client knows that server couldn't find the requested entity.

- The codes always lie in some range. 
  1. 100-199: Information Content. eg: 100: Continue ()
  2. 200-299: Success. Eg: 200: OK, 201: Created 
  3. 300-399: Redirection. Eg: 307: Temporary Redirect
  4. 400-499: Client Error. eg: 403:Forbidden, 404: Not found, 400: Bad request
  5.   500-599: Server Error. eg: 500: Internal Server Error

All these statuses are really helpful to understand what exactly happened with the requested resource.


## Headers
Every single request and Every single response has 'headers' properties. a header is nothing but a key value pair that represents more information about request or response itself.

Eg: if a server sending following response back: Hello world. server can send an header content-type with it. if the value of content-type is text/plain the client who received the reponse will now know that it has received plain text reponse and it doesn't need to parse it etc.




# BenchMarking 

  - Benchmarking is the process of evaluating the performance of a system, component, or process by comparing it against a set of standard metrics or the performance of other systems or components.
  
  -  The goal of benchmarking is to assess and measure the capabilities, efficiency, and reliability of a system, often in the context of software development, hardware performance, or overall system functionality.
  
  -   It helps in identifying areas for improvement and making informed decisions based on performance data.

- Testing the limits of the something
- Request per second - Load on the server
- Use  `AutoCannon`  to do benchmarking

### How to Execute **AutoCannon** or **Benchmarking**
1. `npx autocannon http-url`