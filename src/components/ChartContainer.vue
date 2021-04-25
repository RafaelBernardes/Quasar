<template>
  <div class="container">
    <bar-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>



<script>
import BarChart from './Chart.vue'

export default {
  name: 'BarChartContainer',
  components: { BarChart },

  data: () => ({
    loaded: false,
    chartdata: null,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
            xAxes: [{
                ticks: {
                    display: false //this will remove only the label
                }
            }]
        }
    }
  }),
  async mounted () {
    this.loaded = false
    try {
     this.$axios.get('http://localhost:8000/api/calls')
      .then((response) => {
        this.chartdata = response.data
        this.loaded = true
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })

    } catch (e) {
      console.error(e)
    }
  }
}
</script>


