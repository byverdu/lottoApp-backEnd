## Classes
<dl>
<dt><a href="#HelperString">HelperString</a></dt>
<dd><p>Class for String manipulation</p>
</dd>
<dt><a href="#HelperArray">HelperArray</a></dt>
<dd><p>Class for Array manipulation</p>
</dd>
<dt><a href="#HelperObject">HelperObject</a></dt>
<dd><p>Class for Object manipulation</p>
</dd>
<dt><a href="#HelperNumber">HelperNumber</a></dt>
<dd><p>Class for Number manipulation</p>
</dd>
<dt><a href="#HelperDate">HelperDate</a></dt>
<dd><p>Converts Date into a custom format</p>
</dd>
<dt><a href="#GlobalHelper">GlobalHelper</a></dt>
<dd><p>Helper Class that will act on the global scope,</p>
</dd>
<dt><a href="#SchemaHelper">SchemaHelper</a></dt>
<dd><p>Helper Class that interacts with the Lotto Schema, uses other helpers.
References on each method</p>
</dd>
<dt><a href="#lottoSchema">lottoSchema</a></dt>
<dd><p>Main mongoose Schema</p>
</dd>
</dl>
<a name="HelperString"></a>
## HelperString
Class for String manipulation

**Kind**: global class  

* [HelperString](#HelperString)
  * [.this.deleteWhiteSpace(elem)](#HelperString.this.deleteWhiteSpace) ⇒ <code>String</code>
  * [.this.addStringNumZero(elem)](#HelperString.this.addStringNumZero) ⇒ <code>String</code>
  * [.this.orderString(elem, sortMethod, concatMethod)](#HelperString.this.orderString) ⇒ <code>String</code>

<a name="HelperString.this.deleteWhiteSpace"></a>
### HelperString.this.deleteWhiteSpace(elem) ⇒ <code>String</code>
Deletes white spaces for the element passed

**Kind**: static method of <code>[HelperString](#HelperString)</code>  
**Returns**: <code>String</code> - - trimmed element  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>String</code> | string with a white space |

**Example**  
```js
console.log(HelperString.deleteWhiteSpace(' 09')); // '09'
```
<a name="HelperString.this.addStringNumZero"></a>
### HelperString.this.addStringNumZero(elem) ⇒ <code>String</code>
Adds '0' for numbers that are smaller than 10 and with one digit

**Kind**: static method of <code>[HelperString](#HelperString)</code>  
**Returns**: <code>String</code> - - formatted number if condition applies  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>String</code> | numbers as a String type |

**Example**  
```js
console.log(HelperString.addStringNumZero('9')); // '09'
```
<a name="HelperString.this.orderString"></a>
### HelperString.this.orderString(elem, sortMethod, concatMethod) ⇒ <code>String</code>
Sorts an string in descendent order

**Kind**: static method of <code>[HelperString](#HelperString)</code>  
**Returns**: <code>String</code> - - ordered numbers  
**See**

- sortMethod() => [HelperArray.sortArrayFromFirstToLast](#HelperArray.this.sortArrayFromFirstToLast)
- concatMethod() => [HelperArray.concatToSingleString](#HelperArray.this..concatToSingleString)


| Param | Type | Description |
| --- | --- | --- |
| elem | <code>String</code> | unordered string of numbers |
| sortMethod | <code>function</code> | method that sorts an array |
| concatMethod | <code>function</code> | method that concats strings |

<a name="HelperArray"></a>
## HelperArray
Class for Array manipulation

**Kind**: global class  

* [HelperArray](#HelperArray)
  * [.this.sortArrayFromFirstToLast(array)](#HelperArray.this.sortArrayFromFirstToLast) ⇒ <code>Array</code>
  * [.this.sortArrayByCount(array)](#HelperArray.this.sortArrayByCount) ⇒ <code>Array</code>
  * [.this.concatToSingleString(array)](#HelperArray.this.concatToSingleString) ⇒ <code>String</code>
  * [.this.splitArray(array)](#HelperArray.this.splitArray) ⇒ <code>Array</code>
  * [.this.sliceArrayByCount(array, count)](#HelperArray.this.sliceArrayByCount) ⇒ <code>Array</code>

<a name="HelperArray.this.sortArrayFromFirstToLast"></a>
### HelperArray.this.sortArrayFromFirstToLast(array) ⇒ <code>Array</code>
Sorts an array in descendent order

**Kind**: static method of <code>[HelperArray](#HelperArray)</code>  
**Returns**: <code>Array</code> - - Sorted array  
**Link{helperstring}**:   

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array of numbers as a String type |

**Example**  
```js
console.log(HelperArray.sortArrayFromFirstToLast(['29', '11'])) // ['11', '29']
```
<a name="HelperArray.this.sortArrayByCount"></a>
### HelperArray.this.sortArrayByCount(array) ⇒ <code>Array</code>
Sorts an array by object property

**Kind**: static method of <code>[HelperArray](#HelperArray)</code>  
**Returns**: <code>Array</code> - - Array with objects ordered by "count" property  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array of objects |

**Example**  
```js
console.log(HelperArray.sortArrayByCount([{index: '07', count: 1},{index: '12', count: 4}]))
// [{index: '12', count: 4},{index: '07', count: 1}]
```
<a name="HelperArray.this.concatToSingleString"></a>
### HelperArray.this.concatToSingleString(array) ⇒ <code>String</code>
Concats an array to String

**Kind**: static method of <code>[HelperArray](#HelperArray)</code>  
**Returns**: <code>String</code> - - Concated string from array passed  
**Link{helperstring}**:   

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array of numbers as a String type |

**Example**  
```js
console.log(HelperArray.concatToSingleString(['29', '11'])) // '11,29'
```
<a name="HelperArray.this.splitArray"></a>
### HelperArray.this.splitArray(array) ⇒ <code>Array</code>
Splits array content

**Kind**: static method of <code>[HelperArray](#HelperArray)</code>  
**Returns**: <code>Array</code> - - Array populated with strings  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array with a single string of numbers separated by ',' |

**Example**  
```js
console.log(HelperArray.splitArray(['29,11'])) // ['11','29']
```
<a name="HelperArray.this.sliceArrayByCount"></a>
### HelperArray.this.sliceArrayByCount(array, count) ⇒ <code>Array</code>
Slices an array [result from sortArrayByCount] using the value passed as parameter

**Kind**: static method of <code>[HelperArray](#HelperArray)</code>  
**Returns**: <code>Array</code> - - Array sliced by the count specified  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array with objects ordered by "count" property |
| count | <code>Number</code> | Number of items to slice |

**Example**  
```js
console.log(HelperArray.sliceArrayByCount([{index: '12', count: 4},{index: '07', count: 8}]))
// [{index: '07', count: 8},{index: '12', count: 4}]
```
<a name="HelperObject"></a>
## HelperObject
Class for Object manipulation

**Kind**: global class  

* [HelperObject](#HelperObject)
  * [.this.objectColorProperty](#HelperObject.this.objectColorProperty)
  * [.this.extractValueByIndex(array)](#HelperObject.this.extractValueByIndex) ⇒ <code>Array</code>
  * [.this.setColorProperty(object, objColor, thisColor)](#HelperObject.this.setColorProperty) ⇒ <code>Object</code>

<a name="HelperObject.this.objectColorProperty"></a>
### HelperObject.this.objectColorProperty
Container for color values

**Kind**: static property of <code>[HelperObject](#HelperObject)</code>  
<a name="HelperObject.this.extractValueByIndex"></a>
### HelperObject.this.extractValueByIndex(array) ⇒ <code>Array</code>
Gets value from a property

**Kind**: static method of <code>[HelperObject](#HelperObject)</code>  
**Returns**: <code>Array</code> - - Array populated with values of property "index"  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array with objects ordered by "index" property |

**Example**  
```js
console.log(HelperObject.extractValueByIndex([{index: '07', count: 8},{index: '12', count: 4}])) // ['07','12']
```
<a name="HelperObject.this.setColorProperty"></a>
### HelperObject.this.setColorProperty(object, objColor, thisColor) ⇒ <code>Object</code>
Adds new "color" property to an object

**Kind**: static method of <code>[HelperObject](#HelperObject)</code>  
**Returns**: <code>Object</code> - - Object with new color property  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | Object containing other properties |
| objColor | <code>Object</code> | Container with color values |
| thisColor | <code>String</code> | Reference value as index for the container |

**Example**  
```js
console.log(HelperObject.setColorProperty({ index: '12', count: 4 }, HelperObject.objectColorProperty, 'green'))
// { index: '12', count: 4 , color: 'greenItem' }
```
<a name="HelperNumber"></a>
## HelperNumber
Class for Number manipulation

**Kind**: global class  
<a name="HelperNumber.this.findFractionNumber"></a>
### HelperNumber.this.findFractionNumber(array, fraction) ⇒ <code>Number</code>
Divides a number

**Kind**: static method of <code>[HelperNumber](#HelperNumber)</code>  
**Returns**: <code>Number</code> - - Biggest number possible from the division  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array with values |
| fraction | <code>Number</code> | Number value to divide the array length |

**Example**  
```js
var array = new Array(49);
console.log(HelperNumber.findFractionNumber(array, 3)) // 17
```
<a name="HelperDate"></a>
## HelperDate
Converts Date into a custom format

**Kind**: global class  

* [HelperDate](#HelperDate)
  * _static_
    * [.this.buildSpanishDate()](#HelperDate.this.buildSpanishDate) ⇒ <code>String</code>
  * _inner_
    * [~spanishValues](#HelperDate..spanishValues) : <code>Object</code>
    * [~getSpanishValues(array, index)](#HelperDate..getSpanishValues) ⇒ <code>String</code>
    * [~getValuesNewDate()](#HelperDate..getValuesNewDate) ⇒ <code>Object</code>

<a name="HelperDate.this.buildSpanishDate"></a>
### HelperDate.this.buildSpanishDate() ⇒ <code>String</code>
Formats a Date instance to a custom string, uses all inner variables

**Kind**: static method of <code>[HelperDate](#HelperDate)</code>  
**Returns**: <code>String</code> - - A formatted Spanish date e.g 'Lunes, 12-Oct-2015'  
<a name="HelperDate..spanishValues"></a>
### HelperDate~spanishValues : <code>Object</code>
Container for the Spanish date values

**Kind**: inner property of <code>[HelperDate](#HelperDate)</code>  
<a name="HelperDate..getSpanishValues"></a>
### HelperDate~getSpanishValues(array, index) ⇒ <code>String</code>
Returns value per index

**Kind**: inner method of <code>[HelperDate](#HelperDate)</code>  
**Returns**: <code>String</code> - - Spanish value  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array with Spanish values |
| index | <code>Number</code> | numeric value from getValuesNewDate() |

<a name="HelperDate..getValuesNewDate"></a>
### HelperDate~getValuesNewDate() ⇒ <code>Object</code>
Getter for Date values [day,month...]

**Kind**: inner method of <code>[HelperDate](#HelperDate)</code>  
**Returns**: <code>Object</code> - Container with numeric values from calling Date() methods  
<a name="GlobalHelper"></a>
## GlobalHelper
Helper Class that will act on the global scope,

**Kind**: global class  

* [GlobalHelper](#GlobalHelper)
  * [.this.compare2arrays(firstArray, secondArray, lottoCount)](#GlobalHelper.this.compare2arrays) ⇒ <code>Boolean</code>
  * [.this.customFindOneMongoose(Model, ObjectQuery, callback)](#GlobalHelper.this.customFindOneMongoose)
  * [.this.getPricesInfo(lottoObject)](#GlobalHelper.this.getPricesInfo) ⇒ <code>Array</code>
  * [.this.hackyDate()](#GlobalHelper.this.hackyDate) ⇒ <code>String</code>

<a name="GlobalHelper.this.compare2arrays"></a>
### GlobalHelper.this.compare2arrays(firstArray, secondArray, lottoCount) ⇒ <code>Boolean</code>
Compares if two arrays has the same items

**Kind**: static method of <code>[GlobalHelper](#GlobalHelper)</code>  
**Returns**: <code>Boolean</code> - - true or false  

| Param | Type | Description |
| --- | --- | --- |
| firstArray | <code>Array</code> | Array with numbers |
| secondArray | <code>Array</code> | Array with numbers |
| lottoCount | <code>Integer</code> | determines the count of items that need to be equal |

**Example**  
```js
console.log(GlobalHelper.compare2arrays(['23','34'],['23','35'],2)) // false
console.log(GlobalHelper.compare2arrays(['23','34'],['23','34'],2)) // true
```
<a name="GlobalHelper.this.customFindOneMongoose"></a>
### GlobalHelper.this.customFindOneMongoose(Model, ObjectQuery, callback)
Callback for findOne mongoDB method, so it can be stored in a variable

**Kind**: static method of <code>[GlobalHelper](#GlobalHelper)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Model | <code>Schema</code> | Schema to query against |
| ObjectQuery | <code>Object</code> | Object that will contain the field to query |
| callback | <code>function</code> | Callback function to execute |

<a name="GlobalHelper.this.getPricesInfo"></a>
### GlobalHelper.this.getPricesInfo(lottoObject) ⇒ <code>Array</code>
Iterates over arrays in order to get the data

**Kind**: static method of <code>[GlobalHelper](#GlobalHelper)</code>  
**Returns**: <code>Array</code> - - Array with objects formatted and ordered  

| Param | Type | Description |
| --- | --- | --- |
| lottoObject | <code>Object</code> | Object containing arrays |

<a name="GlobalHelper.this.hackyDate"></a>
### GlobalHelper.this.hackyDate() ⇒ <code>String</code>
Creates a new Date

**Kind**: static method of <code>[GlobalHelper](#GlobalHelper)</code>  
**Returns**: <code>String</code> - - Formatted date.  
**Example**  
```js
console.log(GlobalHelper.hackyDate()) // "Thu Oct 22 2015 22:44:54"
```
<a name="SchemaHelper"></a>
## SchemaHelper
Helper Class that interacts with the Lotto Schema, uses other helpers.
References on each method

**Kind**: global class  

* [SchemaHelper](#SchemaHelper)
  * [.this.setNewFormatedDate()](#SchemaHelper.this.setNewFormatedDate) ⇒ <code>String</code>
  * [.this.setXrayArrayToSave(array)](#SchemaHelper.this.setXrayArrayToSave) ⇒ <code>String</code>
  * [.this.setAllResulstArrayToCount(array)](#SchemaHelper.this.setAllResulstArrayToCount) ⇒ <code>Array</code>
  * [.this.createObjectCount(index, count)](#SchemaHelper.this.createObjectCount) ⇒ <code>Object</code>
  * [.this.findMostRepeatedValues(array, count)](#SchemaHelper.this.findMostRepeatedValues) ⇒ <code>String</code>
  * [.this.orderStringMostRepeated(string)](#SchemaHelper.this.orderStringMostRepeated) ⇒ <code>String</code>
  * [.this.modifyExtras(array)](#SchemaHelper.this.modifyExtras) ⇒ <code>String</code>
  * [.this.setColorPropertyStatistics(array)](#SchemaHelper.this.setColorPropertyStatistics) ⇒ <code>Array</code>
  * [.this.setKindOfLotto(array, kind, lottoMethod, starsMethod)](#SchemaHelper.this.setKindOfLotto) ⇒ <code>Array</code>

<a name="SchemaHelper.this.setNewFormatedDate"></a>
### SchemaHelper.this.setNewFormatedDate() ⇒ <code>String</code>
Creates a new Spanish date

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>String</code> - - Spanish date.  
**See**: [HelperDate](#HelperDate).buildSpanishDate()  
<a name="SchemaHelper.this.setXrayArrayToSave"></a>
### SchemaHelper.this.setXrayArrayToSave(array) ⇒ <code>String</code>
Formats array of numbers to a single String

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>String</code> - - Ordered and concatenated String from the array values  
**See**

- [HelperString.deleteWhiteSpace](#HelperString.this.deleteWhiteSpace)
- [HelperString.addStringNumZero](#HelperString.this.addStringNumZero)
- [HelperArray.concatToSingleString](#HelperArray.this.concatToSingleString)
- [HelperArray.sortArrayFromFirstToLast](#HelperArray.this.sortArrayFromFirstToLast)


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array from Xray scrapper |

<a name="SchemaHelper.this.setAllResulstArrayToCount"></a>
### SchemaHelper.this.setAllResulstArrayToCount(array) ⇒ <code>Array</code>
Manipulates an array with strings separated by comma

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>Array</code> - - Array containing all the values from the initial Array  
**See**

- [HelperArray.splitArray](#HelperArray.this.splitArray)
- [HelperArray.sortArrayFromFirstToLast](#HelperArray.this.sortArrayFromFirstToLast)


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Every index contains a string with numbers separated by comma |

**Example**  
```js
console.log(SchemaHelper.setAllResulstArrayToCount(["07,09","37,40","18,28","30,30","34,40"]))
//[ '07', '09', '18', '28', '30', '30', '34', '37', '40', '40' ]
```
<a name="SchemaHelper.this.createObjectCount"></a>
### SchemaHelper.this.createObjectCount(index, count) ⇒ <code>Object</code>
Creates an object within the values passed

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>Object</code> - - Formatted object with index and count properties with the respective values  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>String</code> | Number that represent each raffle ball |
| count | <code>Integer</code> | Repeated times that a ball appears |

<a name="SchemaHelper.this.findMostRepeatedValues"></a>
### SchemaHelper.this.findMostRepeatedValues(array, count) ⇒ <code>String</code>
Finds most repeated values for a raffle game

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>String</code> - - String made with numbers separated by comma with the same length than the count parameter  
**See**

- [HelperArray.sortArrayByCount](#HelperArray.this.sortArrayByCount)
- [HelperArray.sliceArrayByCount](#HelperArray.this.sliceArrayByCount)
- [HelperObject.extractValueByIndex](#HelperObject.this.extractValueByIndex)
- [HelperArray.concatToSingleString](#HelperArray.this.concatToSingleString)


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array of objects with data from statistics |
| count | <code>Integer</code> | Number of balls for the raffle |

**Example**  
```js
var statistics = [ { index: '12', count: 4 },{ index: '16', count: 3 },{ index: '23', count: 3 },{ index: '28', count: 3 },{ index: '15', count: 3 }]
console.log(SchemaHelper.findMostRepeatedValues(statistics, 3));
// '12,15,16'
```
<a name="SchemaHelper.this.orderStringMostRepeated"></a>
### SchemaHelper.this.orderStringMostRepeated(string) ⇒ <code>String</code>
Sorts a string of numbers in ascendent order, splits the string then sorts it and at the end concats

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>String</code> - - ordered string of numbers  
**See**

- [HelperString.orderString](#HelperString.this.orderString)
- [HelperArray.sortArrayFromFirstToLast](#HelperArray.this.sortArrayFromFirstToLast)
- [HelperArray.concatToSingleString](#HelperArray.this.concatToSingleString)


| Param | Type | Description |
| --- | --- | --- |
| string | <code>String</code> | unordered string of numbers |

<a name="SchemaHelper.this.modifyExtras"></a>
### SchemaHelper.this.modifyExtras(array) ⇒ <code>String</code>
Copycat from setXrayArrayToSave but for the extra info data

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>String</code> - - Ordered and concatenated String from the array values  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array from Xray scrapper |

<a name="SchemaHelper.this.setColorPropertyStatistics"></a>
### SchemaHelper.this.setColorPropertyStatistics(array) ⇒ <code>Array</code>
Modifies an Array of Objects by adding a new 'color' property, heavy internally use of other Helpers. Divides the array in 3 and to each third adds the 'green', 'orange' and 'red' properties respectively.

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>Array</code> - - Single array with all the new properties populated  
**See**

- [HelperNumber.findFractionNumber](#HelperNumber.this.findFractionNumber)
- [HelperObject.setColorProperty](#HelperObject.this.setColorProperty)
- [HelperObject.objectColorProperty](#HelperObject.this.objectColorProperty)


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array of objects from the statistics |

<a name="SchemaHelper.this.setKindOfLotto"></a>
### SchemaHelper.this.setKindOfLotto(array, kind, lottoMethod, starsMethod) ⇒ <code>Array</code>
Switch statement that assigns a get method to the 'array' parameter depending on the 'kind' parameter passed

**Kind**: static method of <code>[SchemaHelper](#SchemaHelper)</code>  
**Returns**: <code>Array</code> - - Array containing the selection  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array of strings with all repeated balls |
| kind | <code>String</code> | Kind of lotto |
| lottoMethod | <code>function</code> | Gets all values for lotto |
| starsMethod | <code>function</code> | Gets all values for lotto |

<a name="LottoSchema"></a>
## LottoSchema
Main mongoose Schema

**Kind**: global class  

* [LottoSchema](#LottoSchema)
  * [new LottoSchema({lottoID: lottoID})](#new_LottoSchema_new)
  * [.this.setNewDate()](#LottoSchema.this.setNewDate) ⇒ <code>String</code>
  * [.this.setLastResult(array)](#LottoSchema.this.setLastResult) ⇒ <code>String</code>
  * [.this.setExtras(array)](#LottoSchema.this.setExtras) ⇒ <code>String</code>
  * [.this.setLastResultStars(array)](#LottoSchema.this.setLastResultStars) ⇒ <code>String</code>
  * [.this.setMostRepeated(count)](#LottoSchema.this.setMostRepeated) ⇒ <code>String</code>
  * [.this.setMostRepeatedStars(count)](#LottoSchema.this.setMostRepeatedStars) ⇒ <code>String</code>
  * [.this.setAllResults(lastResult)](#LottoSchema.this.setAllResults) ⇒ <code>Array</code>
  * [.this.setAllResultStars(lastResult)](#LottoSchema.this.setAllResultStars) ⇒ <code>Array</code>
  * [.this.setStatistics(array, kind)](#LottoSchema.this.setStatistics) ⇒ <code>Array</code>
  * [.this.setStatisticStars(array, kind)](#LottoSchema.this.setStatisticStars) ⇒ <code>Array</code>
  * [.this.setStatisticsAfterColorSet(array)](#LottoSchema.this.setStatisticsAfterColorSet) ⇒ <code>Array</code>
  * [.this.getLastResult()](#LottoSchema.this.getLastResult) ⇒ <code>String</code>
  * [.this.getAllResults()](#LottoSchema.this.getAllResults) ⇒ <code>Array</code>
  * [.this.getAllResultsStars()](#LottoSchema.this.getAllResultsStars) ⇒ <code>Array</code>
  * [.this.getCountAllResults(array, kind)](#LottoSchema.this.getCountAllResults) ⇒ <code>Array</code>
  * [.this.getStatistics()](#LottoSchema.this.getStatistics) ⇒ <code>Object</code>
  * [.this.getStatisticStars()](#LottoSchema.this.getStatisticStars) ⇒ <code>Object</code>

<a name="new_LottoSchema_new"></a>
### new LottoSchema({lottoID: lottoID})

| Param | Type | Description |
| --- | --- | --- |
| lottoID | <code>String</code> | Unique identifier |
| date | <code>String</code> | Last result date |
| extras | <code>String</code> | Extra raffle numbers |
| lastResult | <code>String</code> | Last result raffle |
| mostRepeated | <code>String</code> | Most repeated numbers for that raffle |
| statistics | <code>Array</code> | Array with objects for each raffle ball, |
| allResults | <code>Array</code> | Storage for all the results |
| stars | <code>Object</code> | Just for Euromillions |
| lastResult- | <code>String</code> | Last result raffle |
| mostRepeated | <code>String</code> | Most repeated numbers for that raffle |
| statistics | <code>Array</code> | Array with objects for each raffle ball, |
| allResults | <code>Array</code> | Storage for all the results |

<a name="LottoSchema.this.setNewDate"></a>
### LottoSchema.this.setNewDate() ⇒ <code>String</code>
Sets date property for Schema

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>String</code> - - Formatted Date (this.date)  
**See**: [SchemaHelper.setNewFormatedDate](#SchemaHelper.this.setNewFormatedDate)  
<a name="LottoSchema.this.setLastResult"></a>
### LottoSchema.this.setLastResult(array) ⇒ <code>String</code>
Sets lastResult property for Schema

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>String</code> - - Array converted to a single String (this.lastResult)  
**See**: [schemaHelper.setXrayArrayToSave](#SchemaHelper.this.setXrayArrayToSave)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array result from Xray |

<a name="LottoSchema.this.setExtras"></a>
### LottoSchema.this.setExtras(array) ⇒ <code>String</code>
Sets last result extras for Schema

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>String</code> - - Array converted to a single String (this.extras)  
**See**: [schemaHelper.modifyExtras](#schemaHelper.this.modifyExtras)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array result from Xray |

<a name="LottoSchema.this.setLastResultStars"></a>
### LottoSchema.this.setLastResultStars(array) ⇒ <code>String</code>
Sets last result stars for Schema and euromillions instance

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>String</code> - - Array converted to a single String (this.stars.lastResult)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array result from Xray |

<a name="LottoSchema.this.setMostRepeated"></a>
### LottoSchema.this.setMostRepeated(count) ⇒ <code>String</code>
Sets most repeated values for a lotto kind, internally sets new statistics with color property

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>String</code> - - String of numbers with the most repeated values for a raffle (this.mostRepeated)  
**See**

- [SchemaHelper.findMostRepeatedValues](#SchemaHelper.this.findMostRepeatedValues)
- [SchemaHelper.orderStringMostRepeated](#SchemaHelper.this.orderStringMostRepeated)
- [LottoSchema.setStatisticsAfterColorSet](#LottoSchema.this.setStatisticsAfterColorSet)


| Param | Type | Description |
| --- | --- | --- |
| count | <code>Integer</code> | Number of balls for a raffle |

<a name="LottoSchema.this.setMostRepeatedStars"></a>
### LottoSchema.this.setMostRepeatedStars(count) ⇒ <code>String</code>
Sets most repeated values for euro stars, internally sets new statistics with color property

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>String</code> - - String of numbers with the most repeated values for a raffle (this.stars.mostRepeated)  
**See**

- [SchemaHelper.findMostRepeatedValues](#SchemaHelper.this.findMostRepeatedValues)
- [SchemaHelper.orderStringMostRepeated](#SchemaHelper.this.orderStringMostRepeated)
- [LottoSchema.setStatisticsAfterColorSet](#LottoSchema.this.setStatisticsAfterColorSet)


| Param | Type | Description |
| --- | --- | --- |
| count | <code>Integer</code> | Number of balls for a raffle |

<a name="LottoSchema.this.setAllResults"></a>
### LottoSchema.this.setAllResults(lastResult) ⇒ <code>Array</code>
Sets all results by adding the las result every time

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Array</code> - - this.allResults + lastResult  

| Param | Type | Description |
| --- | --- | --- |
| lastResult | <code>String</code> | this.lastResult |

<a name="LottoSchema.this.setAllResultStars"></a>
### LottoSchema.this.setAllResultStars(lastResult) ⇒ <code>Array</code>
Sets all stars by adding the las result every time

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Array</code> - - this.allResults + lastResult  

| Param | Type | Description |
| --- | --- | --- |
| lastResult | <code>String</code> | this.lastResult |

<a name="LottoSchema.this.setStatistics"></a>
### LottoSchema.this.setStatistics(array, kind) ⇒ <code>Array</code>
Sets first data for the statistics, internally calls this.getCountAllResults

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Array</code> - - Array with objects (this.statistics)  
**See**: [LottoSchema.getCountAllResults](#LottoSchema.this.getCountAllResults)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | All the result numbers as a single strings |
| kind | <code>String</code> | type of lotto to interact with |

<a name="LottoSchema.this.setStatisticStars"></a>
### LottoSchema.this.setStatisticStars(array, kind) ⇒ <code>Array</code>
Sets first data for the statistics, internally calls this.getCountAllResults

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Array</code> - - Array with objects (this.stars.statistics)  
**See**: [LottoSchema.getCountAllResults](#LottoSchema.this.getCountAllResults)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | All the result stars as a single strings |
| kind | <code>String</code> | type of lotto to interact with |

<a name="LottoSchema.this.setStatisticsAfterColorSet"></a>
### LottoSchema.this.setStatisticsAfterColorSet(array) ⇒ <code>Array</code>
Sets new statistics with color property

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Array</code> - - Same array but with the new values  
**See**: [SchemaHelper.setColorPropertyStatistics](#SchemaHelper.this.setColorPropertyStatistics)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array of objects containing the previous statistics |

<a name="LottoSchema.this.getLastResult"></a>
### LottoSchema.this.getLastResult() ⇒ <code>String</code>
Gets the last result

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>String</code> - - this.lastResult  
<a name="LottoSchema.this.getAllResults"></a>
### LottoSchema.this.getAllResults() ⇒ <code>Array</code>
Gets all the results and formats them for a better data structure

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Array</code> - - this.allResults split for each single number as string and sorted in ascendent order  
<a name="LottoSchema.this.getAllResultsStars"></a>
### LottoSchema.this.getAllResultsStars() ⇒ <code>Array</code>
Gets all the stars and formats them for a better data structure

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Array</code> - - this.stars.allResults split for each single number as string and sorted in ascendent order  
<a name="LottoSchema.this.getCountAllResults"></a>
### LottoSchema.this.getCountAllResults(array, kind) ⇒ <code>Array</code>
Gets the total number of repetitions for every single number

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Summary**: Internally calls this.getAllResults() or this.getAllResultsStars() depending on the &#x27;kind&#x27; parameter  
**Returns**: <code>Array</code> - - Array of objects with the total count for each number  
**See**

- [SchemaHelper.setKindOfLotto](#SchemaHelper.this.setKindOfLotto)
- [SchemaHelper.createObjectCount](#SchemaHelper.this.createObjectCount)


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to interact with, the value will depend on the 'kind' parameter |
| kind | <code>String</code> | The type of lotto |

<a name="LottoSchema.this.getStatistics"></a>
### LottoSchema.this.getStatistics() ⇒ <code>Object</code>
Gets the statistics

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Object</code> - - this.statistics  
<a name="LottoSchema.this.getStatisticStars"></a>
### LottoSchema.this.getStatisticStars() ⇒ <code>Object</code>
Gets the stars statistics

**Kind**: static method of <code>[LottoSchema](#LottoSchema)</code>  
**Returns**: <code>Object</code> - - this.stars.statistics  
