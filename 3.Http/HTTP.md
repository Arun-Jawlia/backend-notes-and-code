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
