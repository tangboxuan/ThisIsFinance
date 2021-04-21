import os
from flask import Flask, redirect, render_template, request, send_from_directory

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route("/cs50")
def cs50():
    return render_template("cs50.html")

@app.route("/me")
def me():
    return render_template("boxuan.html")

@app.route("/coursework")
def coursework():
    return render_template("coursework.html")

@app.route("/taxes")
def taxes():
    return render_template("taxes.html")

@app.route("/cpf")
def cpf():
    return render_template("cpf.html")

@app.route("/fire", methods=["GET", "POST"])
def fire():
    if request.method == "GET":
        return render_template("fire.html")
    else:
        if not request.form.get("worth"):
            return render_template("fire.html", error="Current Net Worth Was Blank!")
        if not request.form.get("expend"):
            return render_template("fire.html", error="Monthly Expenditure in Retirement was Blank!")
        if not request.form.get("returns"):
            return render_template("fire.html", error="Expected Investment Returns was Blank!")
        if not request.form.get("years"):
            return render_template("fire.html", error="Years to Retirement was Blank!")

        networth = float(request.form.get("worth"))
        expend = float(request.form.get("expend"))
        returns = float(request.form.get("returns")) / 100
        years = int(request.form.get("years"))
        total = 12 * expend / returns
        monthly = (returns * (total - networth * ( (1 + returns) ** years) ) ) / (12 * ( ( (1 + returns) ** years ) - 1) )
        calculation = []
        retire = 0
        if not monthly < 0:
            for i in range(1, years + 1):
                old_nw = networth
                investments = networth * returns
                networth = old_nw + investments + 12 * monthly
                calculation.append([i, '{0:.2f}'.format(old_nw), '{0:.2f}'.format(investments), '{0:.2f}'.format(networth)])
        else:
            retire = 1
        savings = '{0:.2f}'.format(monthly*12)

        return render_template("fire.html", table=calculation, savings=savings, month='{0:.2f}'.format(monthly), total='{0:.2f}'.format(total), retire=retire)

if __name__ == "__main__":
    from waitress import serve
    app.debug = True
    port = int(os.environ.get("PORT", 5000))
    serve(app, host="0.0.0.0", port=port)
