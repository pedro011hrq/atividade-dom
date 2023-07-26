function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }
  
    const imc = weight / (height * height);
    displayResult(imc);
  }
  
  function displayResult(imc) {
    let resultText = '';
    if (imc < 18.5) {
      resultText = 'Magreza.';
    } else if (imc < 24.9) {
      resultText = 'Normal.';
    } else if (imc < 29.9) {
      resultText = 'Sobrepeso.';
    } else if (imc < 34.9) {
      resultText = 'Obesidade grau I.';
    } else if (imc < 39.9) {
      resultText = 'Obesidade grau II.';
    } else {
      resultText = 'Obesidade grau III.';
    }
  
    document.getElementById('result').textContent = `Seu IMC é ${imc.toFixed(2)}. ${resultText}`;
  }