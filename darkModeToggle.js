document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const darkModeIcon = document.getElementById('darkModeIcon');
  const lightModeIcon = document.getElementById('lightModeIcon');

  // Function to update icons based on the current mode
  function updateIcons() {
    if (document.body.classList.contains('dark-mode')) {
      darkModeIcon.style.display = 'inline';
      lightModeIcon.style.display = 'none';
    } else {
      darkModeIcon.style.display = 'none';
      lightModeIcon.style.display = 'inline';
    }
  }

  // Check for saved user preference in local storage
  const userPreference = localStorage.getItem('darkMode');
  if (userPreference === 'enabled') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  updateIcons();

  // Toggle dark mode on button click
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    updateIcons();
  });
});

