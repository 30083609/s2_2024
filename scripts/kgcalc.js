// Function to convert kilograms to pounds and update result
function convert() {
    // Get the value from the input field and convert to float
    const kg = parseFloat(document.getElementById("Kginput").value);

    // Check if input is a valid number and greater than zero
    if (isNaN(kg) || kg <= 0) {
        document.getElementById("result").textContent = "Please enter a valid number greater than zero.";
        return; // Exit if statement
    }

    // Convert kg to pounds using (1kg = 2.20462)
    const pounds = kg * 2.20462;

    // Update result paragraph with the conversion result, rounded to 2 decimal places.
    document.getElementById("result").textContent = `${kg} kilograms is equal to ${pounds.toFixed(2)} pounds.`;
}
