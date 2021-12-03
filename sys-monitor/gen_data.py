import lipsum
import random
from benchmark.gaussian_blur.index import img_names
def split(a, n):
    k, m = divmod(len(a), n)
    return [a[i*k+min(i, m):(i+1)*k+min(i+1, m)] for i in range(n)]

def gen_data(preset, quantity):
    if preset == "Word Count":
        return [lipsum.generate_paragraphs(1) for _ in range(quantity)]
    elif preset == "Image Processing":
        return [random.choice(img_names) for _ in range(min(quantity,16))]
    elif preset == "Factorial Product":
        return [random.randint(1,500) for _ in range(quantity)]