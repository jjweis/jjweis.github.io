var bikeRides = [
  {date: new Date(2019,1,14) , count: 1 },
  {date: new Date(2019,2,26) , count: 1 },
  {date: new Date(2019,2,27) , count: 1 },
  {date: new Date(2019,3,2) , count: 1 },
  {date: new Date(2019,3,3) , count: 1 },
  {date: new Date(2019,3,5) , count: 1 },
  {date: new Date(2019,3,8) , count: 1 },
  {date: new Date(2019,3,9) , count: 1 },
  {date: new Date(2019,3,10) , count: 1 },
  {date: new Date(2019,3,12) , count: 1 },
  {date: new Date(2019,3,15) , count: 1 },
  {date: new Date(2019,3,16) , count: 1 },
  {date: new Date(2019,3,19) , count: 1 },
  {date: new Date(2019,3,22) , count: 1 },
  {date: new Date(2019,3,23) , count: 1 },
  {date: new Date(2019,4,3) , count: 1 },
  {date: new Date(2019,4,6) , count: 1 },
  {date: new Date(2019,4,8), count: 1 },
  {date: new Date(2019,4,14), count: 1 },
  {date: new Date(2019,4,22), count: 1 },
  {date: new Date(2019,4,24), count: 1 },
  {date: new Date(2019,4,28), count: 1 },
  {date: new Date(2019,4,31), count: 1 },
  {date: new Date(2019,5,3), count: 1 },
  {date: new Date(2019,5,4), count: 1 },
  {date: new Date(2019,5,6), count: 1 },
  {date: new Date(2019,5,7), count: 1 },
  {date: new Date(2019,5,11), count: 1 },
  {date: new Date(2019,5,12), count: 1 },
  {date: new Date(2019,5,13), count: 1 },
  {date: new Date(2019,5,14), count: 1 },
  {date: new Date(2019,5,18), count: 1 },
  {date: new Date(2019,5,21), count: 1 },
  {date: new Date(2019,5,26), count: 1 },
  {date: new Date(2019,5,27), count: 1 },
  {date: new Date(2019,6,3), count: 1 },
  {date: new Date(2019,6,8), count: 1 },
  {date: new Date(2019,6,9), count: 1 },
  {date: new Date(2019,6,10), count: 1 },
  {date: new Date(2019,6,11), count: 1 },
  {date: new Date(2019,6,12), count: 1 },
  {date: new Date(2019,6,15), count: 1 }
];

var rideChart = calendarHeatmap()
              .data(bikeRides)
              .startDate(new Date(2019,0,1))
              .tooltipUnit('ride')
              .colorRange(['#D8E6E7', '#218380'])
              .tooltipEnabled(true)
              .onClick(function (data) {
                console.log('onClick callback. Data:', data);
              });
