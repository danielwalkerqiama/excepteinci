const markDef = {
    align: 'center',
    color: 'blue'
};

const config = {
    align: 'left',
    color: 'red'
};

// Retrieve the 'align' property, preferring markDef over config
const a = getMarkPropOrConfig('align', markDef, config);

console.log(a);  // Output: 'center'
