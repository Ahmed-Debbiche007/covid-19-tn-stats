fetch(
  "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=tunisia",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "d0d248d0a1mshcd1d6a6016c608ap1d8892jsnd365febdda89"
    }
  }
)
  .then(response => response.json())
  .then(function (response) {
    const obj = response;
    a = parseInt(obj.latest_stat_by_country[0].total_cases);
    b = parseInt(obj.latest_stat_by_country[0].active_cases);
    c = parseInt(obj.latest_stat_by_country[0].total_deaths);
    d = parseInt(obj.latest_stat_by_country[0].total_recovered);
    var data = {
      labels: [
        "Total Cases",
        "Active Cases",
        "Total Deaths",
        "Total Recovered"
      ],
      datasets: [
        {
          label: "Current Count",
          backgroundColor: "rgba(255, 255, 255,0.2)",
          borderColor: "rgba(255, 255, 255)",
          borderWidth: 3,
          hoverBackgroundColor: "rgba(0, 192, 42,0.1)",
          hoverBorderColor: "rgba(255, 255, 255)",
          data: [a, b, c, d]
        }
      ]
    };

    var options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            stacked: true,
            gridLines: {
              display: true,
              color: "rgb(255, 255, 255,0.2)"
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    };

    Chart.Bar("chart", {
      options: options,
      data: data
    });
  });
