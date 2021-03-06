import { EChartsOption } from 'echarts';

export function getChart(
  title: string,
  categories: number[],
  legends: string[],
  datas: number[][],
  ylim: number,
): EChartsOption {
  return {
    title: {
      text: title,
      left: 'center',
    },
    tooltip: {},
    legend: {
      data: legends,
      top: 'bottom',
    },
    xAxis: {
      type: 'category',
      data: categories,
    },
    yAxis: {
      type: 'value',
      max: ylim,
    },
    toolbox: {
      feature: {
        dataZoom: {},
        restore: {},
        saveAsImage: {},
      },
    },
    series: datas.map((data, idx) => ({
      type: 'bar',
      name: legends[idx],
      data,
    })),
  };
}
