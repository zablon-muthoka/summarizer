from flask import Flask, render_template, request ,jsonify
from summary import summarizer
from flask_cors import CORS
import json
app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    print("am running")
    return render_template("index.html")


@app.route('/analyze', methods=['GET', 'POST'])
def analyze():
    if request.method == 'POST':
        rawtext = request.form['rawtext']
        summary, original_txt, len_orig_txt, len_summary = summarizer(rawtext)

        return  json.dumps({"summary":summary, "len_orig_txt":len_orig_txt, "len_summary":len_summary})
    return render_template('summary.html', summary=summary, original_txt=original_txt, len_orig_txt=len_orig_txt, len_summary=len_summary)
 

if __name__ == "__main__":
    app.run(debug=False,host='0.0.0.0')