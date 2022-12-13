<script lang='js'>
import {
  Doughnut
} from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: {
    statistic: {
      type: Array,
    }
  },
  data () {
    return {
      labels: [],
      data: [],
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    for (let k = 0; k < this.statistic.length; k++) {
      this.labels.push(this.statistic[k].name);
      this.data.push(this.statistic[k].count);
    }
    
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 181)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 300)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient4 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient5 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient6 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient7 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient8 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 50)
    this.gradient.addColorStop(0, 'rgba(54, 215, 232, 1)')
    this.gradient.addColorStop(1, 'rgba(177, 148, 250, 1)')
    this.gradient2.addColorStop(0, 'rgba(6, 185, 157, 1)')
    this.gradient2.addColorStop(1, 'rgba(132, 217, 210, 1)')
    this.gradient3.addColorStop(0, 'rgba(255, 191, 150, 1)')
    this.gradient3.addColorStop(1, 'rgba(254, 112, 150, 1)')
    this.gradient4.addColorStop(0, 'rgba(231, 235, 240, 1)')
    this.gradient4.addColorStop(1, 'rgba(134, 142, 150, 1)')
    this.gradient5.addColorStop(0, 'rgba(218, 140, 255, 1)')
    this.gradient5.addColorStop(1, 'rgba(154, 85, 255, 1)')
    this.gradient6.addColorStop(0, 'rgba(244, 244, 244, 1)')
    this.gradient6.addColorStop(1, 'rgba(228, 228, 233, 1)')
    this.gradient7.addColorStop(0, 'rgba(94, 113, 136, 1)')
    this.gradient7.addColorStop(1, 'rgba(62, 75, 91, 1)')
    this.gradient8.addColorStop(0, 'rgba(36, 206, 61, 1)')
    this.gradient8.addColorStop(1, 'rgba(21, 21, 127, 1)')
    this.renderChart({
      labels: this.labels,
      datasets: [{
        label: 'Revenue',
        data: this.data,
        backgroundColor: [
            this.gradient,
            this.gradient2,
            this.gradient3,
            this.gradient4,
            this.gradient5,
            this.gradient6,
            this.gradient7,
            this.gradient8
          ],
        borderWidth: 0
      }]
    }, {
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true
      },
      legend: false
    })
  }
}
</script>

<style scoped lang='scss'>
  .trafficSourceChart {

  }
</style>
