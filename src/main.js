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
        datasets: [{
            label: 'Participantes estimados',
            data: [28, 34, 22],
            borderWidth: 1
        }]
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

evaluateButton.addEventListener('click', () => {
    mostrarDiagnosticoRapido();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form));

    const name = data.studentName ? data.studentName.trim() : '';
    const email = data.studentEmail ? data.studentEmail.trim() : '';
    const workshop = data.workshop || '';
    const phone = data.phone ? data.phone.trim() : '';
    const accepted = document.querySelector('#acceptTerms').checked;

    if (!name || !email || !workshop || !phone) {
        showMessage('Debes completar todos los campos.', 'error');
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        showMessage(
            'El teléfono debe contener exactamente 10 dígitos.',
            'error'
        );
        return;
    }

    if (!accepted) {
        showMessage(
            'Debes aceptar los términos y condiciones para continuar.',
            'error'
        );
        return;
    }

    showMessage(
        `Inscripción realizada correctamente. ${name}, quedaste registrado en el taller ${workshop}.`,
        'success'
    );

    form.reset();
});

function showMessage(message, type) {
    formMessage.className =
        type === 'success' ?
        'message-success mt-3' :
        'message-error mt-3';

    formMessage.textContent = message;
}

function mostrarDiagnosticoRapido() {
    alert(
        'Diagnóstico completado. Se detectaron oportunidades de mejora en accesibilidad, usabilidad y optimización.'
    );
}