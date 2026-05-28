import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import { Chart } from 'chart.js/auto';
import './styles.css';

const form = document.querySelector('#registrationForm');
const formMessage = document.querySelector('#formMessage');
const evaluateButton = document.querySelector('#btnEvaluar');

const chartElement = document.querySelector('#participationChart');

new Chart(chartElement, {
  type: 'bar',
  data: {
    labels: ['Agricultura', 'Tecnologia', 'Emprendimiento'],
    datasets: [
      {
        label: 'Participantes estimados',
        data: [28, 34, 22],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0
        }
      }
    }
  }
});

// Problema intencional: al hacer clic se ejecuta una funcion que no existe.
// Tu mision: revisa la consola, corrige el error y cambia el texto del boton por uno mas claro.
evaluateButton.addEventListener('click', () => {
  mostrarDiagnosticoRapido();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(form));
  const name = data.studentName?.trim();
  const email = data.studentEmail?.trim();
  const workshop = data.workshop;
  const phone = data.phone?.trim();
  const accepted = document.querySelector('#acceptTerms').checked;

  // Problemas intencionales:
  // 1. La validacion del telefono es demasiado debil.
  // 2. No se valida si el usuario acepto los terminos.
  // 3. El mensaje podria ser mas claro para el usuario.
  if (!name || !email || !workshop || !phone) {
    showMessage('Debes completar todos los campos.', 'error');
    return;
  }

  if (phone.length < 7) {
    showMessage('El telefono no parece valido.', 'error');
    return;
  }

  showMessage(`Registro recibido para ${name}. Taller seleccionado: ${workshop}.`, 'success');
  form.reset();
});

function showMessage(message, type) {
  formMessage.className = type === 'success' ? 'message-success mt-3' : 'message-error mt-3';
  formMessage.textContent = message;
}
