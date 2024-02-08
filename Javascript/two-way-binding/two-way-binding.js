const mainDiv = document.querySelector('body');
const p1 = document.createElement('p');
p1.textContent = 'First input';
mainDiv.appendChild(p1);
const input1 = document.createElement('input');
input1.addEventListener('input', updateInput2);
mainDiv.appendChild(input1);
const p2 = document.createElement('p');
p2.textContent = 'Second input';
mainDiv.appendChild(p2);
const input2 = document.createElement('input');
input2.addEventListener('input', updateInput1);
mainDiv.appendChild(input2);

function updateInput2(){
  input2.value = input1.value;
}

function updateInput1(){
  input1.value = input2.value;
}