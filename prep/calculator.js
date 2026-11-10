(function () {
  const gallonsPerPerson = 1;
  const kcalPerPerson = 2000;
  const supplyDays = [3, 7, 30];
  // Planning amounts from the AKC ~1 fl oz/lb/day rule, with a little margin.
  const PET_OZ_PER_DAY = {
    "pets-small": 32,   // 0.25 gal (1 quart)
    "pets-medium": 64,  // 0.5 gal
    "pets-large": 128,  // 1 gal
  };
  const OZ_PER_GALLON = 128;

  function toInt(value) {
    const n = parseInt(String(value), 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }

  function formatNumber(n) {
    return n.toLocaleString("en-US");
  }

  function formatGallons(n) {
    const rounded = Math.round(n * 100) / 100;
    return formatNumber(rounded) + (rounded === 1 ? " gallon" : " gallons");
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
    const petInputs = {
      "pets-small": root.querySelector("[name='pets-small']"),
      "pets-medium": root.querySelector("[name='pets-medium']"),
      "pets-large": root.querySelector("[name='pets-large']"),
    };
    const form = root.querySelector("form");
    const button = root.querySelector("[data-action='calculate']");
    const summaryEl = root.querySelector("[data-output='summary']");
    const petRows = Array.from(root.querySelectorAll("[data-pets-row]"));

    function setCell(key, text) {
      const el = root.querySelector("[data-out='" + key + "']");
      if (el) el.textContent = text;
    }

    function petCounts() {
      const counts = {};
      let totalPets = 0;
      let waterOzPerDay = 0;
      Object.keys(PET_OZ_PER_DAY).forEach((name) => {
        const n = toInt(petInputs[name] && petInputs[name].value);
        counts[name] = n;
        totalPets += n;
        waterOzPerDay += n * PET_OZ_PER_DAY[name];
      });
      return { counts, totalPets, waterOzPerDay };
    }

    function gallonsFromOz(oz) {
      return oz / OZ_PER_GALLON;
    }

    function calculate() {
      const adults = toInt(adultsInput && adultsInput.value);
      const children = toInt(childrenInput && childrenInput.value);
      const pets = petCounts();
      const people = adults + children;
      const hasPets = pets.totalPets > 0;

      petRows.forEach((row) => {
        row.hidden = !hasPets;
      });

      supplyDays.forEach((days) => {
        const waterPeople = people * days * gallonsPerPerson;
        const waterPets = gallonsFromOz(pets.waterOzPerDay * days);
        const calories = people * days * kcalPerPerson;
        setCell("water-people-" + days, people ? formatGallons(waterPeople) : "—");
        setCell("water-pets-" + days, hasPets ? formatGallons(waterPets) : "—");
        setCell("water-total-" + days, hasPets && people ? formatGallons(waterPeople + waterPets) : hasPets ? formatGallons(waterPets) : "—");
        setCell("calories-" + days, people ? formatCalories(calories) : "—");
      });

      if (summaryEl) {
        if (!people && !hasPets) {
          summaryEl.textContent = "Enter the number of adults, children, and, if you have them, pets by size.";
        } else if (!people) {
          summaryEl.textContent =
            "For " + formatNumber(pets.totalPets) + (pets.totalPets === 1 ? " pet" : " pets") +
            ", plan " + formatGallons(gallonsFromOz(pets.waterOzPerDay * 3)) + " of water for 3 days, " +
            formatGallons(gallonsFromOz(pets.waterOzPerDay * 7)) + " for 7 days, and " +
            formatGallons(gallonsFromOz(pets.waterOzPerDay * 30)) +
            " for 30 days, using the size-based planning amounts. Add the food your animals already eat.";
        } else {
          let text =
            "For " + formatNumber(people) + (people === 1 ? " person" : " people") +
            ", plan " + formatGallons(people * 3) + " of water and " + formatCalories(people * 3 * kcalPerPerson) +
            " for 3 days; " + formatGallons(people * 7) + " and " + formatCalories(people * 7 * kcalPerPerson) +
            " for 7 days; and " + formatGallons(people * 30) + " and " + formatCalories(people * 30 * kcalPerPerson) +
            " for 30 days (at 1 gallon and 2,000 calories per person per day).";
          if (hasPets) {
            text +=
              " Add " + formatGallons(gallonsFromOz(pets.waterOzPerDay * 3)) + ", " +
              formatGallons(gallonsFromOz(pets.waterOzPerDay * 7)) +
              ", and " + formatGallons(gallonsFromOz(pets.waterOzPerDay * 30)) + " of water for " +
              formatNumber(pets.totalPets) + (pets.totalPets === 1 ? " pet" : " pets") +
              ", using the size-based planning amounts. Pack the food your animals already eat.";
          }
          summaryEl.textContent = text;
        }
      }
    }

    [adultsInput, childrenInput].concat(Object.values(petInputs)).forEach((input) => {
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
