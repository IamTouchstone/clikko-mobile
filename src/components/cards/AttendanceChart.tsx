import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { colors } from '@/theme/colors';

interface AttendanceChartProps {
  labels: string[];
  values: number[];
}

export function AttendanceChart({ labels, values }: AttendanceChartProps) {
  return (
    <LineChart
      data={{
        labels,
        datasets: [{ data: values }],
      }}
      width={Math.min(Dimensions.get('window').width - 48, 720)}
      height={220}
      chartConfig={{
        backgroundColor: colors.card,
        backgroundGradientFrom: colors.card,
        backgroundGradientTo: colors.card,
        decimalPlaces: 0,
        color: () => colors.primary,
        labelColor: () => colors.textSecondary,
        propsForDots: {
          r: '4',
          strokeWidth: '2',
          stroke: colors.primary,
        },
      }}
      bezier
      style={{ marginLeft: -16 }}
    />
  );
}
