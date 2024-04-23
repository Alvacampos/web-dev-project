import Highcharts from 'highcharts';

import { calculateDates, loadLanguages } from '../../utils/utils.js';

(async function renderChart() {
  const COLOR_CODE = [
    '#d73a49', // Red
    '#e36209', // Orange
    '#dbab09', // Yellow
    '#a37114', // Brown
    '#6f42c1', // Indigo
    '#1f6feb', // Blue
    '#388d3c', // Dark Green
    '#2ea44f', // Green
    '#07948d', // Teal
    '#2b2b2b', // Dark Gray
    '#9be9a8', // Light Green
    '#c9d1d9', // Gray
    '#b392f0', // Purple
    '#d1578f', // Pink
    '#f0f6fc', // White
  ];

  const TEXT_COLOR = '#f0f6fc';

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
            color: TEXT_COLOR,
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Years',
          style: {
            color: TEXT_COLOR,
          },
        },

        labels: {
          style: {
            color: TEXT_COLOR,
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
          color: TEXT_COLOR,
        },
      },
      plotOptions: {
        series: {
          borderColor: '#303030',
        },
      },
      series: [
        {
          name: 'Years of Experience',
          colors: COLOR_CODE,
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
