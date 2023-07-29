import requests

def post_data(input):
    url = 'http://127.0.0.1:8000/query/'
    data = {
        'query':input
    }
    try:
        response = requests.post(url, json=data)
        response.raise_for_status()  
        return response
    except requests.exceptions.RequestException as error:
        print('Error posting data:', error)


post_data("in chemistry, what is the formula for methyl butane?")