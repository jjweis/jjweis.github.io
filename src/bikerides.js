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
  {date: new Date(2018,4,15) , count: 1 }

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
