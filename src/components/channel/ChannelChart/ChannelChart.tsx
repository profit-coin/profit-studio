import { InternalChannel } from '../../../data/channels';
import Chart from 'react-apexcharts';
import styles from './ChannelChart.module.scss';

interface ChannelChartProps {
  channel: InternalChannel;
}

function ChannelChart ({ channel }: ChannelChartProps) {
  if (!channel.stats) {
    return null;
  }

  const options = {
    chart: {
      toolbar: {
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },

    grid: {
      borderColor: 'rgba(255, 255, 255, 0.2)',
      strokeDashArray: 2,
    },

    yaxis: {
      labels: {
        show: false,
      }
    },

    xaxis: {
      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      categories: channel.stats.labels,

      labels: {
        show: false,
      },
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        colors: '#FFFFFF',
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <Chart
        options={options}
        series={[
          {
            name: 'series-1',
            data: channel.stats.series,
          },
        ]}
        type="area"
        height={220}
      />
    </div>
  );
}

export default ChannelChart;
