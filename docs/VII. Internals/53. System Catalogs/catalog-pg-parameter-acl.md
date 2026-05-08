---
title: 53.36. `pg_parameter_acl`
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


---  
  


The catalog `pg_parameter_acl` records configuration parameters for which privileges have been granted to one or more roles. No entry is made for parameters that have default privileges.

Unlike most system catalogs, `pg_parameter_acl` is shared across all databases of a cluster: there is only one copy of `pg_parameter_acl` per cluster, not one per database.

**Table  53.36. `pg_parameter_acl` Columns**

Column Type Description  
---  
`oid` `oid` Row identifier  
`parname` `text` The name of a configuration parameter for which privileges are granted  
`paracl` `aclitem[]` Access privileges; see [Section 5.7](</II. The SQL Language/5. Data Definition/ddl-priv.md>) for details  
  
  



  
