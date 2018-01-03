$(document).ready(function() {
  let emptyTablePercent = [];
  let emptyTableColors = ["gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray", "gray"]
  taxChart(emptyTablePercent, emptyTableColors);

  $('#mainContainer').on('click', '.0-20', function() {
    let zeroToTwentyNoSZero = [0.4, 0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.3, -0.1, -0.1]
    let zeroToTwentyNoSZeroCol = ['green', 'green', 'green', 'green', 'green',
                                  'green', 'green', 'green','yellow', 'yellow']
    let zeroToTwentyNoSZeroText = `In 2018, your taxes will go down and your
                                  after-tax income will go up 0.4%. Looking to
                                  2027, your taxes will go up, pushing your
                                  after-tax income down 0.1%.`
    $(".text-append").empty().append(`<h4>${zeroToTwentyNoSZeroText}</h4>`);
    taxChart(zeroToTwentyNoSZero, zeroToTwentyNoSZeroCol);
  });

  $('#mainContainer').on('click', '.20-40', function() {
    let TwentyToFortyNoSZero = [1.6, 1.6, 1.5, 1.4, 1.4, 1.3, 1.3, 1.2, 0.2, -0.2,]
    let TwentyToFortyNoSZeroCol = ['green', 'green', 'green', 'green', 'green',
                                  'green', 'green', 'green','green', 'yellow']
    let TwentyToFortyNoSZeroText = `In 2018, your taxes will go down and your
                                    after-tax income will go up 1.6%. Looking
                                    to 2027, your taxes will go up, pushing your
                                    after-tax income down 0.2%.`
    $(".text-append").empty().append(`<h4>${TwentyToFortyNoSZeroText}</h4>`);
    taxChart(TwentyToFortyNoSZero, TwentyToFortyNoSZeroCol);
  });

  $('#mainContainer').on('click', '.40-75', function() {
    let FortyToSeventyFiveNoSZero = [2.7, 2.7, 2.6, 2.5, 2.5, 2.4, 2.4, 2.3, -0.2, -0.2]
    let FortyToSeventyFiveNoSZeroCol = ['green', 'green', 'green', 'green', 'green',
                                  'green', 'green', 'green', 'yellow', 'yellow']
    let FortyToSeventyFiveNoSZeroText = `In 2018, your taxes will go down and
                                        your after-tax income will go up 2.7%.
                                        Looking to 2027, your taxes will go up,
                                        pushing your after-tax income down 0.2%.`
    $(".text-append").empty().append(`<h4>${FortyToSeventyFiveNoSZeroText}</h4>`);
    taxChart(FortyToSeventyFiveNoSZero, FortyToSeventyFiveNoSZeroCol);
  });

  $('#mainContainer').on('click', '.75-125', function() {
    let SeventyFiveToOneTwentyFiveNoSZero = [3.2, 3.2, 3.1, 3.1, 3.1, 3, 3, 3, -0.3, -0.3]
    let SeventyFiveToOneTwentyFiveNoSZeroCol = ['green', 'green', 'green', 'green', 'green',
                                  'green', 'green', 'green', 'yellow', 'yellow']
    let SeventyFiveToOneTwentyFiveNoSZeroText = `In 2018, your taxes will go down and
                                         your after-tax income will go up 3.2%.
                                         Looking to 2027, your taxes will go up,
                                         pushing your after-tax income down 0.3%.`
    $(".text-append").empty().append(`<h4>${SeventyFiveToOneTwentyFiveNoSZeroText}</h4>`);
    taxChart(SeventyFiveToOneTwentyFiveNoSZero, SeventyFiveToOneTwentyFiveNoSZeroCol);
  });

  $('#mainContainer').on('click', '.125-225', function() {
    let OneTwentyFiveToTwoTwoFiveNoSZero = [3.2, 3.2, 3.2, 3.3, 3.3, 3.2, 3.2, 3.2, -0.2, -0.3]
    let OneTwentyFiveToTwoTwoFiveNoSZeroCol = ['green', 'green', 'green', 'green', 'green',
                                  'green', 'green', 'green', 'yellow', 'yellow']
    let OneTwentyFiveToTwoTwoFiveNoSZeroText = `In 2018, your taxes will go down
                                                and your after-tax income will go
                                                up 3.2%. Looking to 2027, your
                                                taxes will go up, pushing your
                                                after-tax income down 0.3%.`
    $(".text-append").empty().append(`<h4>${OneTwentyFiveToTwoTwoFiveNoSZeroText}</h4>`);
    taxChart(OneTwentyFiveToTwoTwoFiveNoSZero, OneTwentyFiveToTwoTwoFiveNoSZeroCol);
  });

  // Not high local and state taxes and itemizes and files jointly
  $('#mainContainer').on('click', '.225-500', function() {
    let TwoTwoFiveFiveZeroZeroYesSZero = [3.8, 3.6, 3.4, 3.2, 3, 2.8, 2.7, 2.5, -0.3, -0.3]
    let TwoTwoFiveFiveZeroZeroYesSZeroCol = ['green', 'green', 'green', 'green', 'green',
                                  'green', 'green', 'green', 'yellow', 'yellow']
    let TwoTwoFiveFiveZeroZeroYesSZeroText = `In 2018, your taxes will go down and
                                            your after-tax income will go up 3.8%.
                                            Looking to 2027, your taxes will go
                                            up, pushing your after-tax income
                                            down 0.3%.`
    $(".text-append").empty().append(`<h4>${TwoTwoFiveFiveZeroZeroYesSZeroText}</h4>`);
    taxChart(TwoTwoFiveFiveZeroZeroYesSZero, TwoTwoFiveFiveZeroZeroYesSZeroCol);
  });
//Not high SALT and itemizes and files jointly and has one child

  $('#mainContainer').on('click', '.500', function() {
    let FiveFiveFiveYesJOne = [3.4, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, 3.3, -0.2,-0.2,]
    let FiveFiveFiveYesJOneCol = ['green', 'green', 'green', 'green', 'green',
                                  'green', 'green', 'green', 'yellow', 'yellow']
    let FiveFiveFiveYesJOneText = `In 2018, your taxes will go down and
                                      your after-tax income will go up 3.4%.
                                      Looking to 2027, your taxes will go up,
                                      pushing your after-tax income down 0.2%.`
    $(".text-append").empty().append(`<h4>${FiveFiveFiveYesJOneText}</h4>`);
    taxChart(FiveFiveFiveYesJOne, FiveFiveFiveYesJOneCol);
  });

  // high local and state taxes and itemizes and files jointly
  // $('#mainContainer').on('click', '.225-500', function() {
  //   let TwoTwoFiveFiveZerZeroNoSZero = [3.8, 3.6, 3.4, 3.2, 3, 2.8, 2.7, 2.5, -0.3, -0.3]
  //   let TwoTwoFiveFiveZerZeroNoSZeroCol = ['green', 'green', 'green', 'green', 'green',
  //                                 'green', 'green', 'green', 'yellow', 'yellow']
  //   let TwoTwoFiveFiveZerZeroNoSZeroText = `In 2018, your taxes will go down and
  //                                           your after-tax income will go up 3.8%.
  //                                           Looking to 2027, your taxes will go
  //                                           up, pushing your after-tax income
  //                                           down 0.3%.`
  //   $(".text-append").empty().append(`<h4>${TwoTwoFiveFiveZerZeroNoSZeroText}</h4>`);
  //   taxChart(TwoTwoFiveFiveZerZeroNoSZero, TwoTwoFiveFiveZerZeroNoSZeroCol);
  // });


});



  function taxChart(percent, bgcolor) {
    let myChart = document.getElementById('myChart').getContext('2d');
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontFamily = 'gray';

    let massPopChart = new Chart(myChart, {
      type: 'horizontalBar',
      data: {
        labels: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027],
        datasets: [{
          label: "After Tax Income",
          data: percent,
          backgroundColor: bgcolor,
          borderWidth: 1,
          borderColor: 'gray',
          hoverBorderWidth: 1,
          hoverBorderColor: 'black'
        }]
      },
      options:{
        title: {
          display: true,
          text: 'MAKE YOUR SELECTION TO VIEW RESULTS',
          fontSize: 20,
        },
        scales: {
           xAxes: [{
             ticks: {
                    min: -3,
                    max: 6,
                    callback: function(value) {return value+ "%"}
                 },
               }]
             },
        layout: {
          padding: {
            left: 50,
            bottom: 0,
            top: 15,
            right: 50
          }
        },
        tooltips: {
          // enabled: false
        }
      }
    });
  }
