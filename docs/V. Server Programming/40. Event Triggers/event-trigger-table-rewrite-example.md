---
title: 40.5. A Table Rewrite Event Trigger Example
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


Thanks to the `table_rewrite` event, it is possible to implement a table rewriting policy only allowing the rewrite in maintenance windows.

Here's an example implementing such a policy.
    
    
    CREATE OR REPLACE FUNCTION no_rewrite()
     RETURNS event_trigger
     LANGUAGE plpgsql AS
    $$
    ---
    --- Implement local Table Rewriting policy:
    ---   public.foo is not allowed rewriting, ever
    ---   other tables are only allowed rewriting between 1am and 6am
    ---   unless they have more than 100 blocks
    ---
    DECLARE
      table_oid oid := pg_event_trigger_table_rewrite_oid();
      current_hour integer := extract('hour' from current_time);
      pages integer;
      max_pages integer := 100;
    BEGIN
      IF pg_event_trigger_table_rewrite_oid() = 'public.foo'::regclass
      THEN
            RAISE EXCEPTION 'you''re not allowed to rewrite the table %',
                            table_oid::regclass;
      END IF;
    
      SELECT INTO pages relpages FROM pg_class WHERE oid = table_oid;
      IF pages > max_pages
      THEN
            RAISE EXCEPTION 'rewrites only allowed for table with less than % pages',
                            max_pages;
      END IF;
    
      IF current_hour NOT BETWEEN 1 AND 6
      THEN
            RAISE EXCEPTION 'rewrites only allowed between 1am and 6am';
      END IF;
    END;
    $$;
    
    CREATE EVENT TRIGGER no_rewrite_allowed
                      ON table_rewrite
       EXECUTE FUNCTION no_rewrite();
    


  
