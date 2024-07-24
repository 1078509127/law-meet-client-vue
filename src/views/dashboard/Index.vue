<template>
    <div>
        <div id="mychart" style="width: 600px;height:400px;"></div>
    </div>
</template>
<script>
    import * as echarts from "echarts";
    export default {
        data() {
            return {}
        },
        mounted() {
            this.getMyChart();
        },
        methods: {
            getMyChart() {
                var chartDom = document.getElementById('mychart');
                var myChart = echarts.init(chartDom);
                var option;
                option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: 'line'
                        }
                    ]
                };
                option && myChart.setOption(option);
            }
        }
    }
</script>
<style>

</style>