import mr4mp
import time
def measure_time(mapper,reducer,dataset,process_count):
    print("running serial execution benchmark")
    t1 = time.time()
    pool = mr4mp.pool(1)
    pool.mapreduce(mapper,reducer,dataset)
    pool.close()
    t2 = time.time()
    print("serial execution done in ",t2-t1," with ",str(len(pool))," processes")
    print("running parallel execution benchmark")
    pool = mr4mp.pool(process_count)
    pool.mapreduce(mapper,reducer,dataset)
    pool.close()
    t3 = time.time()

    print("parallel execution done ",t3-t2," with ",str(len(pool))," processes")
    return {
        "serial":t2-t1,
        "parallel":t3-t2
    }

