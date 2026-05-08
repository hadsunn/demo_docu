---
title: 21.3. Authentication Methods
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


PostgreSQL provides various methods for authenticating users:

  * [Trust authentication](</III. Server Administration/21. Client Authentication/auth-trust.md>), which simply trusts that users are who they say they are.

  * [Password authentication](</III. Server Administration/21. Client Authentication/auth-password.md>), which requires that users send a password.

  * [GSSAPI authentication](</III. Server Administration/21. Client Authentication/gssapi-auth.md>), which relies on a GSSAPI-compatible security library. Typically this is used to access an authentication server such as a Kerberos or Microsoft Active Directory server.

  * [SSPI authentication](</III. Server Administration/21. Client Authentication/sspi-auth.md>), which uses a Windows-specific protocol similar to GSSAPI.

  * [Ident authentication](</III. Server Administration/21. Client Authentication/auth-ident.md>), which relies on an “Identification Protocol” ([RFC 1413](https://datatracker.ietf.org/doc/html/rfc1413)) service on the client's machine. (On local Unix-socket connections, this is treated as peer authentication.)

  * [Peer authentication](</III. Server Administration/21. Client Authentication/auth-peer.md>), which relies on operating system facilities to identify the process at the other end of a local connection. This is not supported for remote connections.

  * [LDAP authentication](</III. Server Administration/21. Client Authentication/auth-ldap.md>), which relies on an LDAP authentication server.

  * [RADIUS authentication](</III. Server Administration/21. Client Authentication/auth-radius.md>), which relies on a RADIUS authentication server.

  * [Certificate authentication](</III. Server Administration/21. Client Authentication/auth-cert.md>), which requires an SSL connection and authenticates users by checking the SSL certificate they send.

  * [PAM authentication](</III. Server Administration/21. Client Authentication/auth-pam.md>), which relies on a PAM (Pluggable Authentication Modules) library.

  * [BSD authentication](</III. Server Administration/21. Client Authentication/auth-bsd.md>), which relies on the BSD Authentication framework (currently available only on OpenBSD).




Peer authentication is usually recommendable for local connections, though trust authentication might be sufficient in some circumstances. Password authentication is the easiest choice for remote connections. All the other options require some kind of external security infrastructure (usually an authentication server or a certificate authority for issuing SSL certificates), or are platform-specific.

The following sections describe each of these authentication methods in more detail.


  
