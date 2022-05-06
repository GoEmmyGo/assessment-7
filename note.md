Results for the extraLargeArray
insert 956.3323 ms
append 2.6867 ms

Results for the largeArray
insert 11.0183 ms
append 605.8 μs

Results for the mediumArray
insert 154.7 μs
append 135.8 μs

Results for the smallArray
insert 40.8 μs
append 98.4 μs

Results for the tinyArray
insert 37.6 μs
append 73 μs

Results for the reallyTinyArray
insert 34.6 μs
append 116.4 μs

Results for the veryTinyArray
insert 33 μs
append 81 μs



|     ARRAY      |     INSERT     |     APPEND     |
|----------------|----------------|----------------|
|extraLargeArray |956.3323 ms     |2.6867 ms       |
|largeArray      |11.0183 ms      |605.8 μs        |
|mediumArray     |154.7 μs        |135.8 μs        |
|smallArray      |40.8 μs         |98.4 μs         |
|tinyArray       |37.6 μs         |73 μs           |
|reallyTinyArray |34.6 μs         |116.4 μs        |
|veryTinyArray   |33 μs           |81 μs           |


Insert method has a negative correlation with runtime, as does the append method. However, append appears to reach a consant length of if runtime while insert appears to get closer and closer to zero in a logarithmic fashion, which can be explained by what is happening in these fucntions. In the insert function, the new items are added to the beginning of the array, causing each item to be pushed over to the end of the array leaving the runtime exponential depending on the number of items added. Conversely, the append function simply adds each new itm onto the end of the array, meaning no items need to be rearranged or moved and leaving the function a constant. Although the runtimes are similar side-by-side, upon closer look it is evident a dichotomy is present.



