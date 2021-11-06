from flask import Flask, render_template, request
import joblib

app = Flask(__name__)

@app.route("/", methods=["POST", 'GET'])
def index():
    return render_template("index.html") 


@app.route("/predict", methods=["POST", 'GET'])
def predict():
    if request.method =="POST":
        print('I posted')
        # age = request.form.get("age")
        # print(age)
        ## SAVE THE MODEL LIBRARY
        # import joblib
        # # load, no need to initialize the loaded_rf
        # loaded_rf = joblib.load(open("random_forest.joblib"))
        # loaded_pred = loaded_rf.predict
        # loaded_pred
        return render_template('predictions.html')
    return render_template('predictions.html')

if __name__=="__main__":
    app.run(debug=True)