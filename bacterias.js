// Obtener el canvas donde se mostrará la gráfica
var ctx2 = document.getElementById('myChart').getContext('2d');

// Inicializar la gráfica
var chart = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Crecimiento de la Población',
      data: [],
      borderColor: 'red',
      borderWidth: 1,
      fill: true
    }]
  },
  options: {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Tiempo (en días)'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Cantidad'
        }
      }
    }
  }
});

// Función para actualizar la gráfica cuando se cambia el valor del deslizador
document.getElementById('slider').addEventListener('input', function() {
  var time = parseFloat(this.value); // Obtener el tiempo en días
  updateChart(time);
});

// Función para actualizar la gráfica con el nuevo tiempo
function updateChart(time) {
  var data = chart.data.datasets[0].data;
  var labels = chart.data.labels;
  data.length = 0;
  labels.length = 0;

  var population0 = 100; // Población inicial
  var growthRate = 0.2; // Tasa de crecimiento

  // Calcular la población en función del tiempo y agregar los puntos a los datos de la gráfica
  for (var t = 0; t <= time; t += 0.1) {
    var population = population0 * Math.exp(growthRate * t); // Ecuación de crecimiento: P = P0 * e^(rt)
    data.push(population);
    labels.push(t.toFixed(1));
  }

  chart.update(); // Actualizar la gráfica
}

// Actualizar la gráfica inicial con el valor predeterminado del deslizador
var initialTime = parseFloat(document.getElementById('slider').value);
updateChart(initialTime);