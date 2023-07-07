from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Python class that provides all of the functionality
app = FastAPI()
# Configure CORS settings
origins = [
    "http://localhost",
    "http://localhost:3001",  # Replace with your React application's URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JobPostingRequest(BaseModel):
    url: str

# Define a Path Operation Decorator?
# TODO: Read up on this: https://realpython.com/primer-on-python-decorators/#simple-decorators
@app.get("/")
# Some related additional readings: https://fastapi.tiangolo.com/async/
async def root():
    return {"message": "Hello World"}

@app.post("/find-job-posting")
async def get_job_posting_details(data: JobPostingRequest):
    # Process the URL and return the desired response
    url = data.url
    
    return {"message": "This object will have the content sourced from the linkedin page, so it can serve as default text"}