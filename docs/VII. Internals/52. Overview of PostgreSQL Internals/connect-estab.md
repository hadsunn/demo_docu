---
title: 52.2. How Connections Are Established
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


PostgreSQL implements a “process per user” client/server model. In this model, every [](glossary.html#GLOSSARY-CLIENT)[client process](glossary.html#GLOSSARY-CLIENT "Client \(process\)") connects to exactly one [](glossary.html#GLOSSARY-BACKEND)[backend process](glossary.html#GLOSSARY-BACKEND "Backend \(process\)"). As we do not know ahead of time how many connections will be made, we have to use a “supervisor process” that spawns a new backend process every time a connection is requested. This supervisor process is called [](glossary.html#GLOSSARY-POSTMASTER)[postmaster](glossary.html#GLOSSARY-POSTMASTER "Postmaster \(process\)") and listens at a specified TCP/IP port for incoming connections. Whenever it detects a request for a connection, it spawns a new backend process. Those backend processes communicate with each other and with other processes of the [](glossary.html#GLOSSARY-INSTANCE)[instance](glossary.html#GLOSSARY-INSTANCE "Instance") using _semaphores_ and [](glossary.html#GLOSSARY-SHARED-MEMORY)[shared memory](glossary.html#GLOSSARY-SHARED-MEMORY "Shared memory") to ensure data integrity throughout concurrent data access.

The client process can be any program that understands the PostgreSQL protocol described in [Chapter 55](</VII. Internals/55. FrontendBackend Protocol/55. FrontendBackend Protocol.md>). Many clients are based on the C-language library libpq, but several independent implementations of the protocol exist, such as the Java JDBC driver.

Once a connection is established, the client process can send a query to the backend process it's connected to. The query is transmitted using plain text, i.e., there is no parsing done in the client. The backend process parses the query, creates an _execution plan_ , executes the plan, and returns the retrieved rows to the client by transmitting them over the established connection.


  
