// Obtener el canvas donde se mostrará la gráfica
var ctx = document.getElementById('myChart2').getContext('2d');

// Inicializar la gráfica
var chart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Posición Angular del Péndulo',
      data: [],
      borderColor: 'blue',
      borderWidth: 1,
      fill: false
    }]
  },
  options: {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Tiempo (en segundos)'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Posición Angular (en radianes)'
        },
        suggestedMin: -1.5,
        suggestedMax: 1.5
      }
    }
  }
});

// Función para actualizar la gráfica cuando se cambia el valor del deslizador
document.getElementById('slider2').addEventListener('input', function() {
  var time = parseFloat(this.value); // Obtener el tiempo en segundos
  updateChart2(time);
});

// Función para actualizar la gráfica con el nuevo tiempo
function updateChart2(time) {
  var data = chart2.data.datasets[0].data;
  var labels = chart2.data.labels;
  data.length = 0;
  labels.length = 0;

  var amplitude = 1; // Amplitud del péndulo
  var period = 2; // Período del péndulo

  // Calcular la posición angular en función del tiempo y agregar los puntos a los datos de la gráfica
  for (var t = 0; t <= time; t += 0.1) {
    var angularPosition = amplitude * Math.cos((2 * Math.PI * t) / period); // Ecuación de oscilación: θ = A * cos(2πt / T)
    data.push(angularPosition);
    labels.push(t.toFixed(1));
  }

  chart2.update(); // Actualizar la gráfica
}

// Actualizar la gráfica inicial con el valor predeterminado del deslizador
var initialTime = parseFloat(document.getElementById('slider2').value);
updateChart2(initialTime);