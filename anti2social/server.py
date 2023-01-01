from flask import *
from flask_cors import CORS
import json,os
pics=os.listdir("pics")
app = Flask(__name__)
CORS(app)

mdb=open("final.db").read()
mixeddb=json.loads("["+mdb.replace("\n",",")[:-1]+"]")
for x in mixeddb:
    x['image']  ="http://127.0.0.1:5000/"+x['image']
pics_folder=os.listdir("pics")

def calcaulte_match(a,b):
    match=100
    if a['music']!=b['music']:match-=25
    if a['color']!=b['color']:match-=25
    if a['sport']!=b['sport']:match-=25
    if a['drink']!=b['drink']:match-=25
    return match

def sort_data(user,mixeddb):
    q1,q2,q3,q4,q5=[],[],[],[],[]
    for x in mixeddb:
        if x['name']!=user['name']:
            match=calcaulte_match(user,x)
            x['match']=match
            if match==0:
                q5.append(x)
            if match==25:
                q4.append(x)
            if match==50:
                q3.append(x)
            if match==75:
                q2.append(x)
            if match==100:
                q1.append(x)
    return q1+q2+q3+q4+q5

@app.route("/data")
def helloWorld():
    args=dict(request.args)
    if 'name' in args and args['name'] in mdb:
        person=None
        for x in mixeddb:
            if x['name']==args['name']:
                person=x|{"status":"ok"}
                break
        return json.dumps({"all":sort_data(person,mixeddb),"status":200})
    return '{"status":"error"}'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def main(path):
    if path in pics:
        return send_file("pics/"+path)

app.run(host="0.0.0.0")