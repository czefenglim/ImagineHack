from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo import MongoClient, errors

import base64


load_dotenv()

# Flask app setup
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# MongoDB connection
try:
    client = MongoClient("mongodb+srv://czefenglim:111@cluster0.t4bpyvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
, serverSelectionTimeoutMS=5000)
    client.server_info()  # Force a call to test the connection
    print("✅ MongoDB connected successfully")
except errors.ServerSelectionTimeoutError as err:
    print("❌ MongoDB connection failed:", err)

# Define DB and collections only if connected
db = client["dapp"]
users = db["users"]
reports = db["reports"]

@app.route("/")
def home():
    return "Hi from backend"

@app.route("/api/pending-reports", methods=["GET"])
def get_pending_reports():
    reports_list = []
    for report in reports.find():
        report["_id"] = str(report["_id"])
        reports_list.append(report)
    return jsonify(reports_list)

@app.route("/api/evaluation", methods=["POST"])
def evaluation():
    """
    Sample:
    {
    Check Result: "Real",
    Detailed Analysis: "HHHH",
    Evidence Source URLS : [],
    Evidence Files: []
    }
    """
    data = request.get_json()
    position = data["Check Result"] + " Supporters"

    reports.find_one_and_update(
        {"_id": reports.find()[0]["_id"]},
        {"$push": {position: data}}
    )

    return jsonify({"msg": "Successfully added."})

if __name__ == "__main__":
    app.run(debug=True)
