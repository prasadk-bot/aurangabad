import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export function LineChartComponent({ billingHistoryScreen }) {
  const screenWidth = Dimensions.get('window').width;
  let newData = [];
  let newBillDates = [];
  let billMonth = [];
  let billYear = [];
  let result = [];
  let resultArray = [];

  console.log('from custom code', billingHistoryScreen);

  if (billingHistoryScreen.length) {
    newData = billingHistoryScreen.map(item => item.BillUnits);
    billMonth = billingHistoryScreen.map(item => item.BillMonth);
    billYear = billingHistoryScreen.map(item => item.BillYear);
    convertMonthNoToMonthName(billMonth);
    function convertMonthNoToMonthName(billMonth) {
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      for (const monthNumber of billMonth) {
        if (monthNumber >= 1 && monthNumber <= 12) {
          result.push(monthNames[monthNumber - 1]);
        }
      }
      appendWithHyphen(result, billYear);
      function appendWithHyphen(result, billYear) {
        return result.map((element, index) => element + '-' + billYear[index]);
      }
      resultArray = appendWithHyphen(result, billYear);
      console.log(resultArray);
    }
    newBillDates = resultArray.reverse(); // Reverse the x-axis labels array
    newData = newData.reverse(); // Reverse the y-axis values array
  }

  const data = {
    labels: newBillDates,
    datasets: [
      {
        data: newData,
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      },
    ],
    legend: ['Billed Units(KWH / KVAH)'],
  };

  return (
    <View style={{ flex: 1 }}>
      <LineChart
        data={data}
        width={screenWidth}
        height={350}
        verticalLabelRotation={60}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(42, 42, 42, ${opacity})`,
        }}
        bezier
        style={{
          marginVertical: 12,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
