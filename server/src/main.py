from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

try:
    from googlesearch import search
except ImportError:
    print("No module named 'google' found.")

# Python class that provides all of the functionality
app = FastAPI()
# Configure CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",  # Replace with your React application's URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# need to change the non-strings (objects) into the write model
class JobPostingRequest(BaseModel):
    name: str
    contactMethod: str
    contactDetails: str
    # Not actually a string.
    preferredLearningStyle: str
    preferredLearningStyleLong: str
    currentJobTitle: str
    jobTitle: str
    company: str
    jobField: str
    responsibilities: str
    qualifications: str
    company_mission_familiarity: str
    behavioral_questions_familiarity: str
    areas_of_development: str
    interviewPrep: str
    description: str

# Define a Path Operation Decorator?
# TODO: Read up on this: https://realpython.com/primer-on-python-decorators/#simple-decorators

@app.get("/")
# Some related additional readings: https://fastapi.tiangolo.com/async/
async def root():
    return {"message": "Hello World"}


@app.post("/find-job-posting")
async def get_job_posting_details(data: JobPostingRequest):
    # Destructure data object so we know what we are dealing with
    return []
