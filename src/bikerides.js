var bikeRides = [
  {date: new Date(2019,14,1) , count: 1 },
  {date: new Date(2019,26,2) , count: 1 },
  {date: new Date(2019,27,2) , count: 1 },
  {date: new Date(2019,2,3) , count: 1 },
  {date: new Date(2019,3,3) , count: 1 },
  {date: new Date(2019,5,3) , count: 1 },
  {date: new Date(2019,8,3) , count: 1 },
  {date: new Date(2019,9,3) , count: 1 },
  {date: new Date(2019,10,3) , count: 1 },
  {date: new Date(2019,12,3) , count: 1 },
  {date: new Date(2019,15,3) , count: 1 },
  {date: new Date(2019,16,3) , count: 1 },
  {date: new Date(2019,19,3) , count: 1 },
  {date: new Date(2019,22,3) , count: 1 },
  {date: new Date(2019,23,3) , count: 1 },
  {date: new Date(2019,3,4) , count: 1 },
  {date: new Date(2019,6,4) , count: 1 },
  {date: new Date(2019,8,4), count: 1 },
  {date: new Date(2019,14,4), count: 1 },
  {date: new Date(2019,22,3), count: 1 }
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
