var bikeRides = [
  {date: new Date(2018,0,26) , count: 1 },
  {date: new Date(2018,1,14) , count: 1 },
  {date: new Date(2018,3,11) , count: 1 },
  {date: new Date(2018,3,12) , count: 1 },
  {date: new Date(2018,3,13) , count: 1 },
  {date: new Date(2018,3,18) , count: 1 },
  {date: new Date(2018,3,19) , count: 1 },
  {date: new Date(2018,3,20) , count: 1 },
  {date: new Date(2018,3,24) , count: 1 },
  {date: new Date(2018,3,26) , count: 1 },
  {date: new Date(2018,3,27) , count: 1 },
  {date: new Date(2018,3,30) , count: 1 },
  {date: new Date(2018,4,2) , count: 1 },
  {date: new Date(2018,4,4) , count: 1 },
  {date: new Date(2018,4,7) , count: 1 },
  {date: new Date(2018,4,8) , count: 1 },
  {date: new Date(2018,4,10) , count: 1 },
  {date: new Date(2018,4,11) , count: 1 },
  {date: new Date(2018,4,15) , count: 1 },
  {date: new Date(2018,4,16) , count: 1 },
  {date: new Date(2018,4,17) , count: 1 },
  {date: new Date(2018,4,31) , count: 1 },
  {date: new Date(2018,5,1) , count: 1 },
  {date: new Date(2018,5,4) , count: 1 },
  {date: new Date(2018,5,5) , count: 1 },
  {date: new Date(2018,5,6) , count: 1 },
  {date: new Date(2018,5,7) , count: 1 },
  {date: new Date(2018,5,13), count: 1 },
  {date: new Date(2018,5,14), count: 1 },
  {date: new Date(2018,5,15), count: 1 },
  {date: new Date(2018,5,18), count: 1 },
  {date: new Date(2018,5,27), count: 1 },
  {date: new Date(2018,5,28), count: 1 },
  {date: new Date(2018,6,2), count: 1 },
  {date: new Date(2018,6,3), count: 1 },
  {date: new Date(2018,6,6), count: 1 },
  {date: new Date(2018,6,9), count: 1 },
  {date: new Date(2018,6,10), count: 1 },
  {date: new Date(2018,6,11), count: 1 },
  {date: new Date(2018,6,12), count: 1 },
  {date: new Date(2018,6,13), count: 1 },
  {date: new Date(2018,6,17), count: 1 },
  {date: new Date(2018,6,18), count: 1 },
  {date: new Date(2018,6,23), count: 1 },
  {date: new Date(2018,6,24), count: 1 },
  {date: new Date(2018,6,25), count: 1 },
  {date: new Date(2018,6,26), count: 1 },
  {date: new Date(2018,6,27), count: 1 },
  {date: new Date(2018,7,1), count: 1 },
  {date: new Date(2018,7,2), count: 1 },
  {date: new Date(2018,7,3), count: 1 },
  {date: new Date(2018,7,6), count: 1 },
  {date: new Date(2018,7,8), count: 1 },
  {date: new Date(2018,7,9), count: 1 },
  {date: new Date(2018,7,10), count: 1 },
  {date: new Date(2018,7,14), count: 1 },
  {date: new Date(2018,7,17), count: 1 },
  {date: new Date(2018,7,22), count: 1 },
  {date: new Date(2018,7,23), count: 1 },
  {date: new Date(2018,7,24), count: 1 },
  {date: new Date(2018,8,4), count: 1 },
  {date: new Date(2018,8,5), count: 1 },
  {date: new Date(2018,8,6), count: 1 },
  {date: new Date(2018,8,10), count: 1 },
  {date: new Date(2018,8,11), count: 1 },
  {date: new Date(2018,8,12), count: 1 },
  {date: new Date(2018,8,13), count: 1 },
  {date: new Date(2018,8,14), count: 1 },
  {date: new Date(2018,8,17), count: 1 },
  {date: new Date(2018,8,18), count: 1 },
  {date: new Date(2018,8,19), count: 1 },
  {date: new Date(2018,8,20), count: 1 },
  {date: new Date(2018,8,24), count: 1 },
  {date: new Date(2018,8,26), count: 1 },
  {date: new Date(2018,8,28), count: 1 },
  {date: new Date(2018,9,1), count: 1 }
];

var rideChart = calendarHeatmap()
              .data(bikeRides)
              .startDate(new Date(2018,0,1))
              .tooltipUnit('ride')
              .colorRange(['#D8E6E7', '#218380'])
              .tooltipEnabled(true)
              .onClick(function (data) {
                console.log('onClick callback. Data:', data);
              });
