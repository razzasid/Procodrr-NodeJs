## Reading and writing a buffer

- For reading `arrayBuffer` content we need to create an another object.

- `Dataview` is a constructor function it require arrayBuffer as first argument.

- It gives a bunch of methods for setting and getting the data in buffer.

Ex: view.setInt8(1, 70)

- The setInt8 method takes index and the data to write as argument



#### What is byteOffset ?

- It means how much byteControl the DataView has.

- It take second argument for byteOffset, by default it is 0.

- For reading data we use `.getInt8(index)` this reads as signed value

- `.getUint8(index)` this reads as Unsigned value.