(function () {
  const gallonsPerPerson = 1;
  const kcalPerPerson = 2000;
  const supplyDays = [3, 14];
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
        if (hasPets) {
          row.hidden = false;
          row.removeAttribute("hidden");
          row.style.display = "table-row";
        } else {
          row.hidden = true;
          row.setAttribute("hidden", "");
          row.style.display = "none";
        }
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

      function joinHorizons(parts) {
        if (parts.length <= 1) return parts[0] || "";
        if (parts.length === 2) return parts[0] + " and " + parts[1];
        return parts.slice(0, -1).join("; ") + "; and " + parts[parts.length - 1];
      }

      if (summaryEl) {
        if (!people && !hasPets) {
          summaryEl.textContent = "Enter the number of adults, children, and, if you have them, pets by size.";
        } else if (!people) {
          const petParts = supplyDays.map((days, index) => {
            const amount = formatGallons(gallonsFromOz(pets.waterOzPerDay * days));
            const horizon = "for " + formatNumber(days) + (days === 1 ? " day" : " days");
            if (index === 0) return amount + " of water " + horizon;
            return amount + " " + horizon;
          });
          summaryEl.textContent =
            "For " + formatNumber(pets.totalPets) + (pets.totalPets === 1 ? " pet" : " pets") +
            ", plan " + joinHorizons(petParts) +
            ". Add the food your animals already eat.";
        } else {
          const peopleParts = supplyDays.map((days, index) => {
            const water = formatGallons(people * days);
            const food = formatCalories(people * days * kcalPerPerson);
            const horizon = "for " + formatNumber(days) + (days === 1 ? " day" : " days");
            if (index === 0) return water + " of water and " + food + " " + horizon;
            return water + " and " + food + " " + horizon;
          });
          let text =
            "For " + formatNumber(people) + (people === 1 ? " person" : " people") +
            ", plan " + joinHorizons(peopleParts) +
            " (at 1 gallon and 2,000 calories per person per day).";
          if (hasPets) {
            const petAmounts = supplyDays.map((days) => formatGallons(gallonsFromOz(pets.waterOzPerDay * days)));
            text +=
              " Add " + joinHorizons(petAmounts) + " of water for " +
              formatNumber(pets.totalPets) + (pets.totalPets === 1 ? " pet" : " pets") +
              ". Pack the food your animals already eat.";
          }
          summaryEl.textContent = text;
        }
      }
    }

    const fieldEvents = ["input", "change", "keyup", "blur"];
    [adultsInput, childrenInput].concat(Object.values(petInputs)).forEach((input) => {
      if (!input) return;
      fieldEvents.forEach((evt) => input.addEventListener(evt, calculate));
    });
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        calculate();
      });
      fieldEvents.forEach((evt) => {
        form.addEventListener(evt, (event) => {
          if (event.target && event.target.matches("input")) {
            calculate();
          }
        }, true);
      });
    }
    if (button) {
      button.addEventListener("click", calculate);
    }
    calculate();
  }

  bindSupplyCalculator();
})();
