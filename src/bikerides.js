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
  {date: new Date(2019,4,22), count: 1 }
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
