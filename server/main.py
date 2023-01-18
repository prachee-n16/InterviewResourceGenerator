# main.py

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

from typing import Union
from fastapi import FastAPI, Query

# Create Fast API Instance
app = FastAPI()

# Patch operation decorator
@app.get("/app")
# Take Linkedin URL as parameter with some validation checks
async def root(url: str = Query(default=None, min_length=10, regex="^https:\\/\\/[a-z]{2,3}\\.linkedin\\.com\\/.*$")):
    return {"app_name": "up-work"}