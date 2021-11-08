from flask import Flask, render_template, request
import joblib

app = Flask(__name__)
model= joblib.load('random_forest.joblib')

@app.route("/", methods=["GET", 'POST'])
def index():
    return render_template("index.html") 


@app.route("/predict", methods=["GET", 'POST'])
def predict():
    output = "Your value here!"
    #If you have the user submit a form
    if request.method == 'POST': 
        """
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
"""
        age=request.json.get("age")
        religion=request.json.get("religion")
        family_size=request.json.get("family_size")
        urban=request.json.get("urban")
        gender=request.json.get("gender")
        education=request.json.get("education")
        engant=request.json.get("engant")
        hand_orientation=request.json.get("hand_orientation")
        orientation=request.json.get("orientation")
        race=request.json.get("race")
        voted=request.json.get("voted")
        married=request.json.get("married")
        pred=model.predict([[education, urban, gender, engant, age, hand_orientation, religion, orientation, race, voted, married, family_size]])

        print(pred)
        # return render_template('predictions.html', output=output)
        return {"Prediction": pred[0]}
        
    return render_template('predictions.html', output=output)

if __name__=="__main__":
    app.run(debug=True)