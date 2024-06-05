function generatePattern() {
  const patternType = document.getElementById('patternType').value;
  const patternSize = parseInt(document.getElementById('patternSize').value);
  const clearButton = document.getElementById('clear-button');
  const copyButton = document.getElementById('copy-button');
  const delay = parseFloat(document.getElementById('delay').value);


  clearButton.addEventListener('click', clearOutput);
  copyButton.addEventListener('click', copyCode);



  let pattern = "";

  switch (patternType) {
    case 'rectangle':
      pattern = generateRectangle(patternSize);
      break;
    case 'hollowRectangle':
      pattern = generateHollowRectangle(patternSize);
      break;
    case 'triangle':
      pattern = generateTriangle(patternSize);
      break;
    case 'pyramid':
      pattern = generatePyramid(patternSize);
      break;
    case 'flag':
      pattern = generateFlag(patternSize);
      break;
    case 'hollowtriangle':
      pattern = generateHollowTriangle(patternSize);
      break;
    case 'hollowpyramid':
      pattern = generateHollowPyramid(patternSize);
      break;
    default:
      pattern = "Invalid pattern type";
  }

  document.getElementById('pattern').innerHTML = pattern;


}


function generateRectangle(size) {
  let pattern = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      pattern += "* ";
    }
    pattern += "<br>";
  }
  return pattern;
}

function generateHollowRectangle(size) {
  let pattern = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        pattern += "* ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "<br>";
  }
  return pattern;
}

function generateTriangle(size) {
  let pattern = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "<br>";
  }
  return pattern;
}


function generateHollowTriangle(size) {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (i === size || j === 1 || j === i) {
        pattern += '*';
      } else {
        pattern += ' ';
      }
    }
    pattern += "<br>";
  }
  return pattern;
}




function generatePyramid(size) {
  let pattern = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      pattern += "  ";
    }
    for (let k = 0; k <= i * 2; k++) {
      pattern += "* ";
    }
    pattern += "<br>";
  }
  return pattern;
}


function generateHollowPyramid(size) {
  let pattern = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size - i; j++) {
      pattern += ' ';
    }
    for (j = 1; j <= 2 * i - 1; j++) {
      if (i === size || j === 1 || j === 2 * i - 1) {
        pattern += '*';
      } else {
        pattern += ' ';
      }
    }
    pattern += "<br>";
  }
  return pattern;
}

function generateFlag(size) {
  let pattern = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "* ";
    }
    pattern += "<br>";
  }
  for (let i = 0; i < size; i++) {
    for (let j = size - 1; j >= i; j--) {
      pattern += "* ";
    }
    pattern += "<br>";
  }
  return pattern;
}




function clearOutput() {
  document.getElementById('pattern').innerHTML = '';
}

function showCode() {
  const code = document.getElementById('pattern').innerHTML;
  const codeElement = document.createElement('pre');
  codeElement.getElementById('pattern').innerHTML = code;
  document.getElementById('pattern').innerHTML = ''; // Clear previous output
  document.getElementById('pattern').appendChild(codeElement);
}

function copyCode() {
  navigator.clipboard.writeText(document.getElementById('pattern').innerHTML)
    .then(() => {
      alert('Pattern code copied!');

    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
}

