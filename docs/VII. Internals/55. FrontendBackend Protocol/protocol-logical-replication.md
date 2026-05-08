---
title: 55.5. Logical Streaming Replication Protocol
---







Supported versions: 13 / 14 / 15 / 16 / 17


Development versions: 18 / devel


Unsupported versions: 10 / 11 / 12 / 7.1 / 7.2 / 7.3 / 7.4 / 8.0 / 8.1 / 8.2 / 8.3 / 8.4 / 9.0 / 9.1 / 9.2 / 9.3 / 9.4 / 9.5 / 9.6


---  
  


[55.5.1. Logical Streaming Replication Parameters](</VII. Internals/55. FrontendBackend Protocol/protocol-logical-replication.md#5551-logical-streaming-replication-parameters>)


[55.5.2. Logical Replication Protocol Messages](</VII. Internals/55. FrontendBackend Protocol/protocol-logical-replication.md#5552-logical-replication-protocol-messages>)


[55.5.3. Logical Replication Protocol Message Flow](</VII. Internals/55. FrontendBackend Protocol/protocol-logical-replication.md#5553-logical-replication-protocol-message-flow>)



This section describes the logical replication protocol, which is the message flow started by the `START_REPLICATION` `SLOT` _`slot_name`_ `LOGICAL` replication command.

The logical streaming replication protocol builds on the primitives of the physical streaming replication protocol.

PostgreSQL logical decoding supports output plugins. `pgoutput` is the standard one used for the built-in logical replication.

### 55.5.1. Logical Streaming Replication Parameters #

Using the `START_REPLICATION` command, `pgoutput` accepts the following options:

proto_version
    

Protocol version. Currently versions `1`, `2`, `3`, and `4` are supported. A valid version is required.

Version `2` is supported only for server version 14 and above, and it allows streaming of large in-progress transactions.

Version `3` is supported only for server version 15 and above, and it allows streaming of two-phase commits.

Version `4` is supported only for server version 16 and above, and it allows streams of large in-progress transactions to be applied in parallel.

publication_names
    

Comma separated list of publication names for which to subscribe (receive changes). The individual publication names are treated as standard objects names and can be quoted the same as needed. At least one publication name is required.

binary
    

Boolean option to use binary transfer mode. Binary mode is faster than the text mode but slightly less robust.

messages
    

Boolean option to enable sending the messages that are written by `pg_logical_emit_message`.

streaming
    

Boolean option to enable streaming of in-progress transactions. It accepts an additional value "parallel" to enable sending extra information with some messages to be used for parallelisation. Minimum protocol version 2 is required to turn it on. Minimum protocol version 4 is required for the "parallel" option.

two_phase
    

Boolean option to enable two-phase transactions. Minimum protocol version 3 is required to turn it on.

origin
    

Option to send changes by their origin. Possible values are "none" to only send the changes that have no origin associated, or "any" to send the changes regardless of their origin. This can be used to avoid loops (infinite replication of the same data) among replication nodes.

### 55.5.2. Logical Replication Protocol Messages #

The individual protocol messages are discussed in the following subsections. Individual messages are described in [Section 55.9](</VII. Internals/55. FrontendBackend Protocol/protocol-logicalrep-message-formats.md>).

All top-level protocol messages begin with a message type byte. While represented in code as a character, this is a signed byte with no associated encoding.

Since the streaming replication protocol supplies a message length there is no need for top-level protocol messages to embed a length in their header.

### 55.5.3. Logical Replication Protocol Message Flow #

With the exception of the `START_REPLICATION` command and the replay progress messages, all information flows only from the backend to the frontend.

The logical replication protocol sends individual transactions one by one. This means that all messages between a pair of Begin and Commit messages belong to the same transaction. Similarly, all messages between a pair of Begin Prepare and Prepare messages belong to the same transaction. It also sends changes of large in-progress transactions between a pair of Stream Start and Stream Stop messages. The last stream of such a transaction contains a Stream Commit or Stream Abort message.

Every sent transaction contains zero or more DML messages (Insert, Update, Delete). In case of a cascaded setup it can also contain Origin messages. The origin message indicates that the transaction originated on different replication node. Since a replication node in the scope of logical replication protocol can be pretty much anything, the only identifier is the origin name. It's downstream's responsibility to handle this as needed (if needed). The Origin message is always sent before any DML messages in the transaction.

Every DML message contains a relation OID, identifying the publisher's relation that was acted on. Before the first DML message for a given relation OID, a Relation message will be sent, describing the schema of that relation. Subsequently, a new Relation message will be sent if the relation's definition has changed since the last Relation message was sent for it. (The protocol assumes that the client is capable of remembering this metadata for as many relations as needed.)

Relation messages identify column types by their OIDs. In the case of a built-in type, it is assumed that the client can look up that type OID locally, so no additional data is needed. For a non-built-in type OID, a Type message will be sent before the Relation message, to provide the type name associated with that OID. Thus, a client that needs to specifically identify the types of relation columns should cache the contents of Type messages, and first consult that cache to see if the type OID is defined there. If not, look up the type OID locally.


  
