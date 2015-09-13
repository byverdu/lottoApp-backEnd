## Domain model for LottoApp

Node server app that will scrape a website to find the latest results for the Spanish lotteries and manipulate the data so it can be stored in a Mongo database.

#### Lotto Schema

The main Schema will be Lotto, from this schema we'll create 3 different instances, **euromillions, primitiva and bonoloto.** The will share the same properties.

> Schema extensible for another lotteries in the future.

These are the properties for the Schema:
  1. date: String,
  1. lastResult: Array of Strings for the last result (length depending instance Lotto),
  1. mostRepeated: Array of Strings for the most repeated values (length depending instance Lotto),
  1. statistics: Array of Objects that will keep a count for the number of repetitions for each number.

The Schema will have several methods attached to help to convert the initial data into a more appropriate format so it can be stored and retrieve easily.

Some methods:

```javaScript
var euromillions = new Lotto();
euromillions.setNewDate() // will be called when a new result is available
```

#### Lotto Schema for the money results

This Schema will handle the information for winners and money prices. Will not have any dependency on the other Schema but will be dependent from the same lottery that shares data.

These are the properties for the Schema:
  1. date: String,
  1. lastResult: Array of Objects with the winners and money prices,
  1. extraInfo: Array of Strings wit information for the next lottery drawing.




<!-- https://github.com/byverdu/kitchen_flow/blob/master/domain_model.md
https://en.wikipedia.org/wiki/Domain_model -->
<!-- https://en.wikipedia.org/wiki/Class-responsibility-collaboration_card -->
