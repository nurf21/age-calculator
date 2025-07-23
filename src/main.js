import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css'
import 'js-datepicker/dist/datepicker.min.css'
import setupUI from './ui'
import setupDatePicker from './datepicker'
import calculateAge from './ageCalculator'

// Setup HTML content
setupUI()

// Setup date picker
setupDatePicker()

// Setup event listener
document.getElementById('calculateBtn').addEventListener('click', calculateAge)