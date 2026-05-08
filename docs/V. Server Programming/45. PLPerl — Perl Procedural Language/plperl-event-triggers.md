---
title: 45.7. PL/Perl Event Triggers
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


PL/Perl can be used to write event trigger functions. In an event trigger function, the hash reference `$_TD` contains information about the current trigger event. `$_TD` is a global variable, which gets a separate local value for each invocation of the trigger. The fields of the `$_TD` hash reference are:

`$_TD->{event}`
    

The name of the event the trigger is fired for.

`$_TD->{tag}`
    

The command tag for which the trigger is fired.

The return value of the trigger function is ignored.

Here is an example of an event trigger function, illustrating some of the above:
    
    
    CREATE OR REPLACE FUNCTION perlsnitch() RETURNS event_trigger AS $$
      elog(NOTICE, "perlsnitch: " . $_TD->{event} . " " . $_TD->{tag} . " ");
    $$ LANGUAGE plperl;
    
    CREATE EVENT TRIGGER perl_a_snitch
        ON ddl_command_start
        EXECUTE FUNCTION perlsnitch();
    


  
