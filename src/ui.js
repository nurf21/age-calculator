export default function setupUI() {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>Age Calculator</h1>
      <div class="input-group">
        <label for="birthdate">Enter your birth date:</label>
        <div>
          <input type="text" id="birthdate" class="date-input" placeholder="DD/MM/YYYY" readonly>
          <i class="fas fa-calendar-alt calendar-icon"></i>
        </div>
        <div id="dateError" class="error-message"></div>
      </div>
      <button id="calculateBtn" class="btn">Calculate Your Age</button>
      <div id="resultContainer" class="result-container">
        <div class="result-title">Your age is:</div>
        <div class="age-breakdown">
          <div class="age-unit">
            <div id="yearsValue" class="unit-value">0</div>
            <div class="unit-label">YEARS</div>
          </div>
          <div class="age-unit">
            <div id="monthsValue" class="unit-value">0</div>
            <div class="unit-label">MONTHS</div>
          </div>
          <div class="age-unit">
            <div id="daysValue" class="unit-value">0</div>
            <div class="unit-label">DAYS</div>
          </div>
        </div>
      </div>
    </div>
  `
}