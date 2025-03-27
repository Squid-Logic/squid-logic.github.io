// Function to calculate age based on birthdate
function updateAge() {
    const birthdate = new Date('2005-12-01'); // Replace with your birthdate
    const today = new Date();
    
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();

    // Check if birthday has passed this year
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    // Check if it's December 1st GMT to increment the age
    if (today.getMonth() === 11 && today.getDate() === 1) {
        age++; // Increment age on December 1st
    }

    // Display the updated age
    document.getElementById("age").textContent = age;
}

// Run updateAge on page load
window.onload = updateAge;

