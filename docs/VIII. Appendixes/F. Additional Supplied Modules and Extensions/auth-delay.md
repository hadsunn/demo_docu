---
title: F.3. auth_delay — pause on authentication failure
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[F.3.1. Configuration Parameters](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/auth-delay.md#f31-configuration-parameters>)


[F.3.2. Author](</VIII. Appendixes/F. Additional Supplied Modules and Extensions/auth-delay.md#f32-author>)



`auth_delay` causes the server to pause briefly before reporting authentication failure, to make brute-force attacks on database passwords more difficult. Note that it does nothing to prevent denial-of-service attacks, and may even exacerbate them, since processes that are waiting before reporting authentication failure will still consume connection slots.

In order to function, this module must be loaded via [shared_preload_libraries](runtime-config-client.html#GUC-SHARED-PRELOAD-LIBRARIES) in `postgresql.conf`.

### F.3.1. Configuration Parameters #

`auth_delay.milliseconds` (`integer`) 
    

The number of milliseconds to wait before reporting an authentication failure. The default is 0.

These parameters must be set in `postgresql.conf`. Typical usage might be:
    
    
    # postgresql.conf
    shared_preload_libraries = 'auth_delay'
    
    auth_delay.milliseconds = '500'
    

### F.3.2. Author #

KaiGai Kohei `<[kaigai@ak.jp.nec.com](mailto:kaigai@ak.jp.nec.com)>`


  
