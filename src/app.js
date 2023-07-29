const calculateBtnEl = document.getElementById('calculate-btn');
const rollThickEl = document.getElementById('roll-thick');
const veneerThickEl = document.getElementById('veneer-thick');
const totalOutputTabEl = document.getElementById('total-output-tab');

// ### EVENTS

calculateBtnEl.addEventListener('click', () => {
  totalOutputTabEl.innerHTML = calculate2(
    Number(veneerThickEl.value),
    Number(rollThickEl.value)
  );
  rollThickEl.value = '';
});

// ### CALCULATE

const calculate2 = (veneerThick, rollThick) => {
  let total = 0;
  if (veneerThick === 0.5) {
    total = 59.129 * Math.pow(rollThick, 2) + 1307.8 * rollThick + 500.31;
    return `${Math.round(total / 100)} mb`;
  } else if (veneerThick === 0.8) {
    total = 41.435 * Math.pow(rollThick, 2) + 770.66 * rollThick + 70.674;
    return `${Math.round(total / 100)} mb`;
  } else if (veneerThick === 1.0) {
    total = 40.083 * Math.pow(rollThick, 2) + 462.91 * rollThick + 983.99;
    return `${Math.round(total / 100)} mb`;
  } else if (veneerThick === 1.2) {
    total = 2.0001 * rollThick + 0.5006;
    return `${Math.round(total / 100)} mb`;
  } else if (veneerThick === 1.5) {
    total = 2.0005 * rollThick + 2.504;
    return `${Math.round(total / 100)} mb`;
  } else if (veneerThick === 2.0) {
    total = 23.048 * Math.pow(rollThick, 2) + 82.342 * rollThick + 1595.7;
    return `${Math.round(total / 100)} mb`;
  } else {
    total = 0;
  }
};
