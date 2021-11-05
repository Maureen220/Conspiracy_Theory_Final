from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", prediction= "static/images/mind_control.gif")


@app.route("/predict", methods=["post"])
def predict():
    if request.method =="POST":
        occ_pos = request.form.get("occ_pos")
        print(occ_pos)
        ## SAVE THE MODEL LIBRARY
        import joblib
        # load, no need to initialize the loaded_rf
        loaded_rf = joblib.load("./random_forest.joblib")
        loaded_pred = loaded_rf.predict
        loaded_pred
    return f"{occ_pos} DONE!"

if __name__=="__main__":
    app.run(debug=True)