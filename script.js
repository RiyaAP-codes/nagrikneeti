const candidates = [
  {
    name: "Aarav Sharma",
    party: "People's Front",
    education: "Post Graduate",
    cases: 0,
    assets: "3.2 Cr",
    promises: 80,
    timeline: "2019–2024"
  },
  {
    name: "Meera Joshi",
    party: "National Alliance",
    education: "Graduate",
    cases: 1,
    assets: "5.8 Cr",
    promises: 55,
    timeline: "2018–2024"
  }
];

const list = document.getElementById("candidateList");
const compareBox = document.getElementById("compareBox");
let selected = [];

function render(data) {
  list.innerHTML = "";
  data.forEach(c => {
    const trustScore = 100 - (c.cases * 20) - (100 - c.promises) * 0.3;
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${c.name}</h3>
      <p>${c.party}</p>
      <p>Education: ${c.education}</p>
      <p>Cases: ${c.cases}</p>
      <p>Assets: ${c.assets}</p>
      <p class="score">Trust Score: <strong>${Math.round(trustScore)}</strong></p>
      <button onclick="compare('${c.name}')">Compare</button>
    `;
    list.appendChild(div);
  });
}

function compare(name) {
  if (selected.length < 2) {
    selected.push(candidates.find(c => c.name === name));
  }
  if (selected.length === 2) {
    compareBox.innerHTML = `
      <div>${selected[0].name}<br>Promises: ${selected[0].promises}%<br>Cases: ${selected[0].cases}</div>
      <div>${selected[1].name}<br>Promises: ${selected[1].promises}%<br>Cases: ${selected[1].cases}</div>
    `;
    selected = [];
  }
}

document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  render(candidates.filter(c => c.name.toLowerCase().includes(val)));
});

document.getElementById("partyFilter").addEventListener("change", e => {
  render(e.target.value === "all" ? candidates : candidates.filter(c => c.party === e.target.value));
});

render(candidates);
