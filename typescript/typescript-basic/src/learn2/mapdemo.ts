type MapType = {
    [id: string] : string;
}

const myMap1: MapType = {};

// ADD VALUES
myMap1['a'] = 'value1';
myMap1['b'] = 'value2';

// DELETE MAP
delete myMap1['a']


// CREATE MAP BY METHOD 2
const myMap2: Record<number, string> = {};
myMap2[1] = 'a';
myMap2[2] = 'b';


// METHOD 3
const myMap3 = new Map<string, string>();
myMap3.set('key1', 'value1');
