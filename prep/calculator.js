(function () {
  const root = document.getElementById("prep-calculator");
  if (!root) {
    return;
  }

  const gallonsPerPerson = 1;
  const kcalPerPerson = 2000;
  const daysInput = root.querySelector("[name='days']");
  const bandInputs = Array.from(root.querySelectorAll("input[data-band]"));
  const totalEl = root.querySelector("[data-output='people']");
  const waterEl = root.querySelector("[data-output='water']");
  const caloriesEl = root.querySelector("[data-output='calories']");
  const summaryEl = root.querySelector("[data-output='summary']");
  const button = root.querySelector("[data-action='calculate']");

  function toInt(value) {
    const n = parseInt(String(value), 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }

  function formatNumber(n) {
    return n.toLocaleString("en-US");
  }

  function calculate() {
    const people = bandInputs.reduce((sum, input) => sum + toInt(input.value), 0);
    const days = Math.max(toInt(daysInput && daysInput.value), 0);
    const water = people * days * gallonsPerPerson;
    const calories = people * days * kcalPerPerson;

    if (totalEl) totalEl.textContent = formatNumber(people);
    if (waterEl) {
      waterEl.textContent = days && people ? formatNumber(water) + (water === 1 ? " gallon" : " gallons") : "—";
    }
    if (caloriesEl) {
      caloriesEl.textContent = days && people ? formatNumber(calories) + " calories" : "—";
    }
    if (summaryEl) {
      if (!people || !days) {
        summaryEl.textContent = "Enter the number of people in each age band and the number of days.";
      } else {
        summaryEl.textContent =
          "For " + formatNumber(people) + (people === 1 ? " person" : " people") +
          " over " + formatNumber(days) + (days === 1 ? " day" : " days") +
          ", plan " + formatNumber(water) + (water === 1 ? " gallon" : " gallons") +
          " of water and " + formatNumber(calories) +
          " calories (at 1 gallon and 2,000 calories per person per day). Add extra for pets and for special diets.";
      }
    }
  }

  bandInputs.concat(daysInput ? [daysInput] : []).forEach((input) => {
    input.addEventListener("input", calculate);
    input.addEventListener("change", calculate);
  });
  if (button) {
    button.addEventListener("click", calculate);
  }
  calculate();
})();
