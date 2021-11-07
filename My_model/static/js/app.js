
function make_pred(){
    let age= document.getElementById("age").value;
    // let religion= 1
    // let family_size= 1
    // let urban= 1
    // let gender= 1
    // let education= 1
    // let engant= 1
    // let hand_orientation= 1
    // let orientation= 1
    // let race= 1
    // let voted= 1
    // let married= 1
    let religion= document.getElementById("religion").value;
    let family_size= document.getElementById("fam_size").value;
    let urban= document.getElementById("urban").value;
    let gender= document.getElementById("gender").value;
    let education= document.getElementById("education").value;
    let engant= document.getElementById("engant").value;
    let hand_orientation= document.getElementById("hand_orientation").value;
    let orientation= document.getElementById("orientation").value;
    let race= document.getElementById("race").value;
    let voted= document.getElementById("voted").value;
    let married= document.getElementById("married").value;
    console.log("age",age) 
    console.log("religion",religion)
    console.log("family_size",family_size)
    console.log("urban",urban)
    console.log("gender",gender)
    console.log("education",education)  
    console.log("engant",engant)
    console.log("hand_orientation",hand_orientation)
    console.log("orientation",orientation)
    console.log("race",race)
    console.log("voted",voted)
    console.log("married",married)
    fetch("/predict", {
        method: "POST", 
        body: JSON.stringify({
            age: age,
            religion: religion,
            family_size: family_size,
            urban: urban,
            gender: gender,
            education: education,
            engant: engant,
            hand_orientation: hand_orientation,
            orientation: orientation, 
            race: race,
            voted: voted,
            married: married



        }),
        headers:{
            "Content-type":"application/json;charset=UTF-8"

        } 
    }).then(resp=>{
        return resp.json()
    }).then(resp=>{
        console.log(resp)
        document.getElementById("prediction").innerHTML=resp.Prediction
        if (resp.Preditction=="Not"){
            document.getElementById("dummy").src="data:image/jpeg;base64,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"
            
        
        }
        else if (resp.Preditction=="GM"){
            document.getElementById("dummy").src="../images/alien.jpeg"
        }

        // for each subtype

        // else 
   
    })
}
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
    

