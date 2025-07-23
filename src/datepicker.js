import datepicker from 'js-datepicker'

export default function setupDatePicker() {
  const dateError = document.getElementById('dateError')

  datepicker('#birthdate', {
    formatter: (input, date) => {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      input.value = `${day}/${month}/${year}`
    },
    customDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    customMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'],
    startDay: 1,
    position: 'br',
    overlayPlaceholder: 'Enter a 4-digit year',
    overlayButton: 'Select',
    disableMobile: false,
    onSelect: () => {
      dateError.style.display = 'none'
    }
  })
}
