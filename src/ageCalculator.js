import { DateTime } from "luxon"

export default function calculateAge() {
  const birthdateInput = document.getElementById('birthdate')
  const dateError = document.getElementById('dateError')
  const resultContainer = document.getElementById('resultContainer')
  const yearsValue = document.getElementById('yearsValue')
  const monthsValue = document.getElementById('monthsValue')
  const daysValue = document.getElementById('daysValue')

  const birthdateStr = birthdateInput.value
  if (!birthdateStr) {
    showError("Please select your birth date", dateError, resultContainer)
    return
  }

  const [day, month, year] = birthdateStr.split('/').map(Number)
  const birthdate = DateTime.local(year, month, day)
  if (!birthdate.isValid) {
    showError("Please enter a valid date in DD/MM/YYYY format", dateError, resultContainer)
    return
  }

  const now = DateTime.local()
  if (birthdate > now) {
    showError("Birth date cannot be in the future", dateError, resultContainer)
    return
  }

  const diff = now.diff(birthdate, ['years', 'months', 'days']).toObject()
  yearsValue.textContent = Math.floor(diff.years)
  monthsValue.textContent = Math.floor(diff.months)
  daysValue.textContent = Math.floor(diff.days)

  resultContainer.classList.add('show')
}

function showError(message, dateError, resultContainer) {
  dateError.textContent = message
  dateError.style.display = 'block'
  resultContainer.classList.remove('show')
}
