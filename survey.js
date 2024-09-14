document.addEventListener('DOMContentLoaded', () => {
    // Get all input fields
    let inputs = document.querySelectorAll('input[type="number"]');
  
    inputs.forEach((input, index) => {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent form submission on Enter
          let nextIndex = index + 1;
  
          if (nextIndex < inputs.length) {
            // Move focus to the next input field
            inputs[nextIndex].focus();
          }
        }
      });
    });
  });
  
  function validateAndCalculateSport() {
    // Clear previous warnings
    document.querySelectorAll('.warning').forEach(span => span.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('invalid'));
  
    // Retrieve user input values
    let values = {
      endurance: parseInt(document.getElementById('endurance').value),
      agility: parseInt(document.getElementById('agility').value),
      speed: parseInt(document.getElementById('speed').value),
      power: parseInt(document.getElementById('power').value),
      strength: parseInt(document.getElementById('strength').value),
      awareness: parseInt(document.getElementById('awareness').value),
      coordination: parseInt(document.getElementById('coordination').value),
      focus: parseInt(document.getElementById('focus').value),
      reflexes: parseInt(document.getElementById('reflexes').value),
      teamwork: parseInt(document.getElementById('teamwork').value)
    };
  
    // Validate inputs
    let isValid = true;
    let allFilled = true;
  
    for (let key in values) {
      let inputField = document.getElementById(key);
      let warningSpan = document.getElementById(`${key}-warning`);
  
      if (isNaN(values[key]) || values[key] < 1 || values[key] > 5) {
        warningSpan.textContent = 'Enter rate between 1 to 5';
        inputField.classList.add('invalid');
        isValid = false;
      }
  
      if (values[key] === undefined || values[key] === null || values[key] === '') {
        allFilled = false;
      }
    }
  
    if (!allFilled) {
      document.getElementById('result').innerHTML = '<span style="color: #ff0000;">Please fill all the surveys</span>';
      document.getElementById('rankings').innerHTML = '';
      scrollToElement('result');
      return;
    }
  
    if (!isValid) return;
  
    // Calculate the score for each sport
    let scores = {
      football: values.endurance * 2 + values.agility * 1 + values.speed * 1 + values.power * 2 + values.strength * 2,
      basketball: values.endurance * 2 + values.agility * 2 + values.speed * 2 + values.power * 1 + values.strength * 1,
      sprinting: values.endurance * 1 + values.agility * 1 + values.speed * 5 + values.power * 3 + values.strength * 2,
      badminton: values.endurance * 2 + values.agility * 3 + values.speed * 2 + values.power * 1 + values.strength * 1,
      kabaddi: values.endurance * 3 + values.agility * 2 + values.speed * 2 + values.power * 2 + values.strength * 3
    };
  
    // Sort sports based on scores in descending order
    let sortedSports = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  
    // Get the ranking results
    let result = "Based on your ranking, Best Suited Sports for you are:<br>";
    let rankings = "";
  
    sortedSports.forEach((sport, index) => {
      let explanation = "";
      switch (sport) {
        case 'football':
          explanation = "Requires a balance of endurance, strength, and power.";
          break;
        case 'basketball':
          explanation = "Demands high agility and teamwork along with endurance.";
          break;
        case 'sprinting':
          explanation = "Focuses on speed and explosive power.";
          break;
        case 'badminton':
          explanation = "Requires agility and quick reflexes.";
          break;
        case 'kabaddi':
          explanation = "Needs high endurance and strength with strategic awareness.";
          break;
      }
      rankings += `<p>${index + 1}. <strong>${sport.charAt(0).toUpperCase() + sport.slice(1)}:</strong> ${explanation}</p>`;
    });
  
    // Display results
    document.getElementById('result').innerHTML = result;
    document.getElementById('rankings').innerHTML = rankings;
    scrollToElement('result');
  }
  
  function scrollToElement(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  