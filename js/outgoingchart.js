fetch('https://my.api.mockaroo.com/outgoingchart?key=5c7af600')
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(function(data) {
        console.log('Data from API:', data); // Log the received data

        // Extract y values from the received data
        const yValues = data.map(item => item.yValues); // Replace 'y' with the actual property name in your data

        console.log('yValues:', yValues); // Log extracted yValues

        // Fixed x values
        const xValues = ["2u","1u45m","1u30m","1u15m","1u","45m","30m","15m","NU"];

        // Create the chart using the received data
        new Chart("myOutChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: "#0CF513",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: yValues
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Uitgaande Trafiek',
                },
                legend: {
                    display: false,
                    position: 'top',
                    labels: {
                        fontcolor: 'black',
                        fontsize: 12,
                    }
                }
            }
        });
    })
    .catch(function(error) {
        console.error('Error fetching or processing data:', error);
    });
