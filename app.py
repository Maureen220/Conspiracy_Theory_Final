from flask import Flask, render_template, request
import joblib

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", prediction= "static/images/aliens.gif")


@app.route("/predict", methods=["POST"])
def predict():
    if request.method =="POST":
        occ_pos = request.form.get("occ_pos")
        print(occ_pos)
        ## SAVE THE MODEL LIBRARY
        import joblib
        # load, no need to initialize the loaded_rf
        loaded_rf = joblib.load(open("random_forest.joblib"))
        loaded_pred = loaded_rf.predict
        loaded_pred
    return f"{occ_pos} DONE!"

if __name__=="__main__":
    app.run(debug=True)