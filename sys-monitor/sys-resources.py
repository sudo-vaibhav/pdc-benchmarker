from get_sys_info import get_sys_vitals
from flask_cors import CORS
from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.debug = True
CORS(app)
socketio = SocketIO(app,cors_allowed_origins="*")

@socketio.on('request-sys-resources')
def send_sys_resources():
    socketio.emit('sys-resources', get_sys_vitals())

if __name__ == '__main__':
    socketio.run(app,port=4848)
    