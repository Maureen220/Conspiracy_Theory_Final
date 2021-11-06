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
        age = request.form.get("age")
        religion = request.form.get("religion")
        print(age)
        print(religion)
        output = model(age, religion)
        return render_template('predictions.html', output=output)
        
    return render_template('predictions.html', output=output)

if __name__=="__main__":
    app.run(debug=True)