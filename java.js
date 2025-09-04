document.addEventListener("DOMContentLoaded", () => {
  // Helper: add item to call history
  function addHistoryEntry(name, number) {
    const list = document.getElementById("historyList");
    if (
      list &&
      list.children.length === 1 &&
      list.children[0].classList.contains("text-gray-400")
    ) {
      list.innerHTML = "";
    }
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    li.innerHTML = `<div class="flex items-center justify-between"><div><div class="font-medium text-gray-800">${name}</div><div class="text-xs text-gray-500">${number}</div></div><div class="text-xs text-gray-500">${time}</div></div>`;
    list.prepend(li);
  }

  // adding button to the copy
  document.querySelectorAll(".copyBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const number = card?.dataset.number || "";
      navigator.clipboard
        .writeText(number)
        .then(() => {
          btn.classList.add("btn-success");
          btn.textContent = "Copied";
          setTimeout(() => {
            btn.classList.remove("btn-success");
            btn.textContent = "Copy";
          }, 1200);
        })
        .catch(() => {
          alert("Copy failed.");
        });
    });
  });

  // Call
  document.querySelectorAll(".callBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const name = card?.dataset.name || "Unknown";
      const number = card?.dataset.number || "";
      addHistoryEntry(name, number);
    });
  });
  // Favs
  let favCount = 0;
  document.querySelectorAll(".favBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("text-rose-500");
      const active = btn.classList.contains("text-rose-500");
      favCount += active ? 1 : -1;
      const counter = document.getElementById("favCount");
      if (counter) counter.textContent = favCount;
      btn.textContent = active ? "❤" : "♡";
    });
  });

  // history
  const clearBtn = document.getElementById("clearHistory");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      const list = document.getElementById("historyList");
      if (list) list.innerHTML = '<li class="text-gray-400">No calls yet.</li>';
    });
  }
});



















let copyCount = 0;
const copyButtons = document.querySelectorAll(".copyBtn");;
copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the number from the card
    const card = button.closest(".card-body");
    const number = card.dataset.number;

    navigator.clipboard.writeText(number).then(() => {
      copyCount = copyCount + 1;
      document.getElementById("copyCount").textContent = copyCount;
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1000);
    });
  });
});




// // Copy buttons
// let copyCount = 0; // counter
// document.querySelectorAll(".copyBtn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const card = btn.closest(".card-body"); 
//     const number = card?.dataset.number || "";
//     navigator.clipboard
//       .writeText(number)
//       .then(() => {
//         // update button UI
//         btn.classList.add("btn-success");
//         btn.textContent = "Copied";

//         // increment counter
//         copyCount++;
//         const counter = document.getElementById("copyCount");
//         if (counter) counter.textContent = copyCount;

//         setTimeout(() => {
//           btn.classList.remove("btn-success");
//           btn.textContent = "Copy";
//         }, 1200);
//       })
//       .catch(() => {
//         alert("Copy failed.");
//       });
//   });
// });
