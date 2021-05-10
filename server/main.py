from fastapi import FastAPI
from dotenv import dotenv_values
import json
import setproctitle as spt

spt.setproctitle("pyapi")
print("Current process title: ", spt.getproctitle())

app = FastAPI()

environment = dotenv_values('.env')

@app.get('/api/appinfo/server/version')
async def get_server_version():
    return [{
        "responseType":"Data",
        "server_version":environment['SERVER_VERSION']
    }]

@app.get('/api/appinfo/client/version')
async def get_client_version():
    return [{
        "responseType":"Data",
        "client_version":environment['CLIENT_VERSION']
    }]

@app.get('/api/appinfo/server/last_update')
async def get_date_of_server_last_update():
    return [{
        "responseType":"Data",
        "server_last_update":environment['SERVER_LAST_UPDATE']
    }]

@app.get('/api/appinfo/client/last_update')
async def get_date_of_client_last_update():
    return [{
        "responseType":"Data",
        "client_last_update":environment['CLIENT_LAST_UPDATE']
    }]

@app.get('/api/appinfo/developers')
async def get_developers():
    return [{
        "responseType":"Data",
        "Team Lead":"Абрамов Кирилл Дмитриевич",
        "Database Engineers":["Корчагин Петр Петрович","Абрамов Кирилл Дмитриевич"],
        "Frontend Developers":["Кротков Владимир Денисович",
                               "Иванов Сергей Юрьевич",
                               "Бужлаков Никита Сергеевич"],
        "Backend Developers":["Корчагин Петр Петрович"]}]




