// d3.csv("../Resources/cleaned_data_removed_outliers.csv").then(function(data){
//     console.log(data);
//   });

//   function refresh() {
//         const prediction_button = document.getElementById("predict");
//         prediction_button.onclick = function (event) {
//             event.preventDefault();
//             $.ajax({
//                 url: '/predict',
//                 type: 'post',
//                 data: $('#selectionForm').serialize(),
//                 success: function (data) {
//                     console.log(data)
//                     $("#prediction").html(data)
//                 }
//             });
//         }
//     }
//     refresh()

// // d3.csv("../Resources/cleaned_data_removed_outliers.csv").then(makeChart);

// function makeChart(genders){
//     var male = genders.map(function(d) {return d.gender == 1});
//     var female = genders.map(function(d) {return d.gender == 2});
//     var other = genders.map(function(d) {return d.gender == 3});

//     var chart = ('chart', {
//         type: 'bar', 
//         data: [male, female, other]

//     })
// }

// // Request data using D3
// d3.csv("../Resources/cleaned_data_removed_outliers.csv")
//   .then(makeChart);