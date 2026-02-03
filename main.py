from fastapi import FastAPI
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

client = MongoClient("mongodb://192.168.204.5:27017/")
db = client["microservice"]
collection = db["items"]

class Item(BaseModel):
    name: str

@app.post("/items")
def create_item(item: Item):
    result = collection.insert_one({"name": item.name})
    output="Python API called Output"
    return {"success":output,"id": str(result.inserted_id), "name": item.name}

@app.get("/items")
def get_items():
    return [{"id": str(doc["_id"]), "name": doc["name"]} for doc in collection.find()]
