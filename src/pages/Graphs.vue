<template>
  <q-page class="flex flex-center">
    <h2>Gráficos de Calls</h2>

    <div class="canvas">
      <BarChart />
    </div>
  </q-page>
</template>

<script>
import BarChart from 'components/ChartContainer'

export default {
  name: 'PageIndex',

  components: {
      BarChart
  },
}
</script>

<style scoped>
.canvas{

  width:1200px !important;
  height:600px !important;

}
</style>
