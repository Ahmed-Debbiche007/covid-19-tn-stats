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
  .then(e => e.json())
  .then(function (e) {
    const obj = e;
    a = parseInt(obj.latest_stat_by_country[0].total_cases);
    b = parseInt(obj.latest_stat_by_country[0].active_cases);
    c = parseInt(obj.latest_stat_by_country[0].total_deaths);
    d = parseInt(obj.latest_stat_by_country[0].total_recovered);
    f = parseInt(obj.latest_stat_by_country[0].serious_critical);

    var data = {
      labels: [
        "Total Cases",
        "Active Cases",
        "Serious Critical",
        "Total Deaths",
        "Total Recovered"
      ],
      datasets: [
        {
          label: "Current Count",
          backgroundColor: "rgba(255, 255, 255,0.4)",
          borderColor: "rgba(255, 255, 255,0)",
          borderWidth: 3,
          hoverBackgroundColor: "rgba(255, 255, 255,0.2)",
          hoverBorderColor: "rgba(255, 255, 255,0)",
          data: [a, b, f, c, d]
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
