function render() {
    const r = this; // Capture the current 'this' context

    // Now 'r' can be used instead of 'this' within this function
    console.log(r); // Outputs the current object or context

    // Use 'r' to access properties or call methods of the current object
    r.method(); // Example method call using 'r'
}

// Example usage of the 'render' function
const obj = {
    method() {
        console.log("Method called");
    },
    render: render
};

obj.render(); // This will output the current object and call its method
