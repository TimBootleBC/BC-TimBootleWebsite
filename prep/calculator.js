(function () {
  const gallonsPerPerson = 1;
  const kcalPerPerson = 2000;
  const supplyDays = [3, 7, 30];

  function toInt(value) {
    const n = parseInt(String(value), 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }

  function formatNumber(n) {
    return n.toLocaleString("en-US");
  }

  function formatGallons(n) {
    return formatNumber(n) + (n === 1 ? " gallon" : " gallons");
  }

  function formatCalories(n) {
    return formatNumber(n) + " calories";
  }

  function bindHouseholdCalculator() {
    const root = document.getElementById("prep-calculator");
    if (!root) {
      return;
    }

    const daysInput = root.querySelector("[name='days']");
    const bandInputs = Array.from(root.querySelectorAll("input[data-band]"));
    const totalEl = root.querySelector("[data-output='people']");
    const waterEl = root.querySelector("[data-output='water']");
    const caloriesEl = root.querySelector("[data-output='calories']");
    const summaryEl = root.querySelector("[data-output='summary']");
    const button = root.querySelector("[data-action='calculate']");

    function calculate() {
      const people = bandInputs.reduce((sum, input) => sum + toInt(input.value), 0);
      const days = Math.max(toInt(daysInput && daysInput.value), 0);
      const water = people * days * gallonsPerPerson;
      const calories = people * days * kcalPerPerson;

      if (totalEl) totalEl.textContent = formatNumber(people);
      if (waterEl) {
        waterEl.textContent = days && people ? formatGallons(water) : "—";
      }
      if (caloriesEl) {
        caloriesEl.textContent = days && people ? formatCalories(calories) : "—";
      }
      if (summaryEl) {
        if (!people || !days) {
          summaryEl.textContent = "Enter the number of people in each age band and the number of days.";
        } else {
          summaryEl.textContent =
            "For " + formatNumber(people) + (people === 1 ? " person" : " people") +
            " over " + formatNumber(days) + (days === 1 ? " day" : " days") +
            ", plan " + formatGallons(water) +
            " of water and " + formatCalories(calories) +
            " (at 1 gallon and 2,000 calories per person per day). Add extra for pets and for special diets.";
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
  }

  function bindSupplyCalculator() {
    const root = document.getElementById("prep-supply-calculator");
    if (!root) {
      return;
    }

    const adultsInput = root.querySelector("[name='adults']");
    const childrenInput = root.querySelector("[name='children']");
    const petsInput = root.querySelector("[name='pets']");
    const form = root.querySelector("form");
    const button = root.querySelector("[data-action='calculate']");
    const summaryEl = root.querySelector("[data-output='summary']");
    const petRows = Array.from(root.querySelectorAll("[data-pets-row]"));

    function setCell(key, text) {
      const el = root.querySelector("[data-out='" + key + "']");
      if (el) el.textContent = text;
    }

    function calculate() {
      const adults = toInt(adultsInput && adultsInput.value);
      const children = toInt(childrenInput && childrenInput.value);
      const pets = toInt(petsInput && petsInput.value);
      const people = adults + children;
      const hasPets = pets > 0;

      petRows.forEach((row) => {
        row.hidden = !hasPets;
      });

      supplyDays.forEach((days) => {
        const waterPeople = people * days * gallonsPerPerson;
        const waterPets = pets * days * gallonsPerPerson;
        const calories = people * days * kcalPerPerson;
        setCell("water-people-" + days, people ? formatGallons(waterPeople) : "—");
        setCell("water-pets-" + days, hasPets ? formatGallons(waterPets) : "—");
        setCell("water-total-" + days, hasPets && people ? formatGallons(waterPeople + waterPets) : hasPets ? formatGallons(waterPets) : "—");
        setCell("calories-" + days, people ? formatCalories(calories) : "—");
      });

      if (summaryEl) {
        if (!people && !pets) {
          summaryEl.textContent = "Enter the number of adults, children, and, if you have them, pets.";
        } else if (!people) {
          summaryEl.textContent =
            "For " + formatNumber(pets) + (pets === 1 ? " pet" : " pets") +
            ", plan " + formatGallons(pets * 3) + " of water for 3 days, " +
            formatGallons(pets * 7) + " for 7 days, and " +
            formatGallons(pets * 30) + " for 30 days (at 1 gallon per pet per day). Add the food your animals already eat.";
        } else {
          let text =
            "For " + formatNumber(people) + (people === 1 ? " person" : " people") +
            ", plan " + formatGallons(people * 3) + " of water and " + formatCalories(people * 3 * kcalPerPerson) +
            " for 3 days; " + formatGallons(people * 7) + " and " + formatCalories(people * 7 * kcalPerPerson) +
            " for 7 days; and " + formatGallons(people * 30) + " and " + formatCalories(people * 30 * kcalPerPerson) +
            " for 30 days (at 1 gallon and 2,000 calories per person per day).";
          if (hasPets) {
            text +=
              " Add " + formatGallons(pets * 3) + ", " + formatGallons(pets * 7) +
              ", and " + formatGallons(pets * 30) + " of water for " +
              formatNumber(pets) + (pets === 1 ? " pet" : " pets") +
              " (1 gallon per pet per day). Pack the food your animals already eat.";
          }
          summaryEl.textContent = text;
        }
      }
    }

    [adultsInput, childrenInput, petsInput].forEach((input) => {
      if (!input) return;
      input.addEventListener("input", calculate);
      input.addEventListener("change", calculate);
    });
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        calculate();
      });
    }
    if (button) {
      button.addEventListener("click", calculate);
    }
    calculate();
  }

  bindHouseholdCalculator();
  bindSupplyCalculator();
})();
