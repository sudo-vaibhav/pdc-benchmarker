from .measure_time import measure_time
from .gaussian_blur.index import process_images_mapper,process_images_reducer

# def squared_number_sum_mapper(num):
#     return pow(num,10)

# def squared_number_sum_reducer(num1,num2):
#     return num1+num2

def word_count_mapper(para:str):
    word_count = dict()
    for word in para.split():
        word_count[word] = word_count.get(word,0) + 1
    return word_count

def word_count_reducer(word_count1, word_count2):
    combined_word_count = dict()
    for key in word_count1.keys():
        combined_word_count[key] = combined_word_count.get(key,0) + word_count1.get(key,0)
    for key in word_count2.keys():
        combined_word_count[key] = combined_word_count.get(key,0) + word_count2.get(key,0)
    return combined_word_count

# def sales_totalling_mapper(entries):
#     s = 0
#     for entry in entries:
#         s += entry.get("price")*entry.get("quantity")
#     return s

# def sales_totalling_reducer(entry1,entry2):
#     return entry1+entry2

def factorial_mapper(num:tuple):
    
    temp = 1
    for i in range(1,num+1):
        temp *= i
    return temp

def factorial_reducer(num1,num2):
    return num1*num2

def benchmark(workLoad,dataset,process_count:int):
    
    mapper = {
        # "Squared Number Sum" : squared_number_sum_mapper,
        "Word Count" : word_count_mapper,
        "Image Processing":process_images_mapper,
        "Factorial Product":factorial_mapper
        # "Sales Totalling" : sales_totalling_mapper
    }[workLoad]
    
    reducer={
        # "Squared Number Sum" : squared_number_sum_reducer,
        "Word Count" : word_count_reducer,
        "Image Processing":process_images_reducer,
        "Factorial Product":factorial_reducer
        # "Sales Totalling" : sales_totalling_reducer
    }[workLoad]

    return measure_time(mapper,reducer,dataset,process_count)

