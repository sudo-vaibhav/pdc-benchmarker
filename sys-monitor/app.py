from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS
from flask import request
app = Flask(__name__)
from flask import Flask
from flask_socketio import SocketIO
from get_sys_info import get_sys_details
from gen_data import gen_data
from benchmark.benchmark import benchmark

app = Flask(__name__)
app.debug = True
CORS(app)
socketio = SocketIO(app,cors_allowed_origins="*")

@socketio.on('connect')
def test_connect():
    print("connected")
    socketio.emit("sys-details",get_sys_details())

@socketio.on('disconnect')
def socket_disconnect():
    print(f"Disconnected: {request.args}")

@socketio.on("run-benchmark")
def run_benchmark(data):
    print("benchmarking",data)
    process_count = data["processCount"]
    datasetSize = data["datasetSize"]
    workLoad = data["workLoad"]
    dataset = gen_data(workLoad,datasetSize)
    result = benchmark(workLoad,dataset,process_count)
    print("benchmark result",result)
    socketio.emit("benchmark-result",result)

if __name__ == '__main__':
    socketio.run(app)
    