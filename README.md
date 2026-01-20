<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NagrikNeeti</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar">
  <h2>NagrikNeeti</h2>
  <div>
    <a href="#candidates">Candidates</a>
    <a href="#dashboard">Dashboard</a>
    <a href="#compare">Compare</a>
    <a href="#feedback">Feedback</a>
  </div>
</nav>

<header class="hero">
  <h1>Civic Awareness & Candidate Transparency</h1>
  <p>Clear. Verified. Citizen-First Electoral Information.</p>
</header>

<!-- SEARCH & FILTER -->
<div class="filters">
  <input type="text" id="search" placeholder="Search candidate">
  <select id="partyFilter">
    <option value="all">All Parties</option>
    <option value="People's Front">People's Front</option>
    <option value="National Alliance">National Alliance</option>
  </select>
</div>


<!-- CANDIDATES -->
<section id="candidates" class="section">
  <h2>Candidate Report Cards</h2>
  <div id="candidateList" class="card-container"></div>
</section>

<!-- COMPARISON -->
<section id="compare" class="section light">
  <h2>Candidate Comparison</h2>
  <div class="compare-box" id="compareBox">
    <p>Select two candidates to compare</p>
  </div>
</section>

<!-- DASHBOARD -->
<div class="stat success">Funds Utilized<br><strong>65%</strong></div>
<div class="stat warning">Ongoing Projects<br><strong>8</strong></div>
<div class="stat danger">Pending Works<br><strong>3</strong></div>

<!-- FEEDBACK -->
<section id="feedback" class="section light">
  <h2>Citizen Feedback</h2>
  <textarea placeholder="Feedback (Verified Citizens only)"></textarea>
  <button>Submit</button>
  <p class="badge">✔ Verified Citizen</p>
</section>

<footer>
  <p>© 2026 NagrikNeeti | Transparency • Accountability • Democracy</p>
</footer>

<script src="script.js"></script>
</body>
</html>

