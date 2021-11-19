import psutil
import multiprocessing

def get_sys_details():
    return {
        "processCount" : multiprocessing.cpu_count()
    }

def get_sys_vitals():
    r=psutil.virtual_memory().percent
    c=psutil.cpu_percent()
    return {
        "ram":r,
        "cpu":c
    }
    # Get system vitals
    # cpu_percent = psutil.cpu_percent(interval=1)
    # cpu_count = psutil.cpu_count()
    # cpu_freq = psutil.cpu_freq()
    # cpu_times = psutil.cpu_times()
    # cpu_times_percent = psutil.cpu_times_percent()
    # virtual_memory = psutil.virtual_memory()
    # swap_memory = psutil.swap_memory()
    # disk_usage = psutil.disk_usage('/')
    # disk_partitions = psutil.disk_partitions()
    # disk_io_counters = psutil.disk_io_counters()
    # net_io_counters = psutil.net_io_counters()
    # net_connections = psutil.net_connections()