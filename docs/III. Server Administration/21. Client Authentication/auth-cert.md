---
title: 21.12. Certificate Authentication
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


This authentication method uses SSL client certificates to perform authentication. It is therefore only available for SSL connections; see [Section 19.9.2](ssl-tcp.html#SSL-OPENSSL-CONFIG "19.9.2. OpenSSL Configuration") for SSL configuration instructions. When using this authentication method, the server will require that the client provide a valid, trusted certificate. No password prompt will be sent to the client. The `cn` (Common Name) attribute of the certificate will be compared to the requested database user name, and if they match the login will be allowed. User name mapping can be used to allow `cn` to be different from the database user name.

The following configuration options are supported for SSL certificate authentication:

`map`
    

Allows for mapping between system and database user names. See [Section 21.2](</III. Server Administration/21. Client Authentication/auth-username-maps.md>) for details.

It is redundant to use the `clientcert` option with `cert` authentication because `cert` authentication is effectively `trust` authentication with `clientcert=verify-full`.


  
