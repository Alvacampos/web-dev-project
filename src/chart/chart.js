import Highcharts from 'highcharts';

import { calculateDates, loadLanguages } from '../../utils/utils.js';

(async function renderChart() {
  try {
    const { SKILL_CHART_DATA } = await loadLanguages();

    const chartData = SKILL_CHART_DATA.map((data) => [
      data.name,
      calculateDates(data.startDate, null, true, true),
    ]);

    Highcharts.chart('container-chart', {
      chart: {
        type: 'bar',
        backgroundColor: '#0d1117',
      },
      credits: {
        enabled: false,
      },
      title: {
        text: '',
      },
      xAxis: {
        type: 'category',
        labels: {
          autoRotation: [-45, -90],
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
            color: '#f0f6fc',
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Years',
          style: {
            color: '#f0f6fc',
          },
        },

        labels: {
          style: {
            color: '#f0f6fc',
          },
        },
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        pointFormat: '<b>{point.y:.3f}</b>',
        backgroundColor: '#333333',
        style: {
          color: '#f0f6fc',
        },
      },
      series: [
        {
          name: 'Years of Experience',
          colors: [
            '#216e39',
            '#58a6ff',
            '#1f6feb',
            '#8b949e',
            '#30363d',
            '#21262d',
            '#2ea44f',
            '#d73a49',
            '#6f42c1',
            '#d0d8e5',
          ],
          colorByPoint: true,
          groupPadding: 0,
          dataSorting: {
            enabled: true,
          },
          data: chartData,
        },
      ],
    });
  } catch (e) {
    console.log('Fatal error', e);
  }
})();
