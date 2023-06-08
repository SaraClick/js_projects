let billTotal = document.querySelector('#billTotal');
let tipPercent = document.getElementsByClassName('percentage');
const btn = document.querySelector('button')
let tipTotal = document.querySelector('#tipTotal')

// console.log(billTotal);
console.log(tipPercent);

// console.log(btn);
// console.log(tipTotal.innerText);


btn.addEventListener('click', function() {
  const bill = billTotal.value;
  for (i = 0; i < tipPercent.length; i++) {
    if (tipPercent[i].checked == true) {
      percent = tipPercent[i].value
    }
  };
  // console.log(bill);
  // console.log(percent);
  tipTotal.innerText = bill * (percent/100);
});
