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


class JobPostingRequest(BaseModel):
    jobTitle: str
    company: str
    jobField: str
    description: str

# Define a Path Operation Decorator?
# TODO: Read up on this: https://realpython.com/primer-on-python-decorators/#simple-decorators

# Query: String we are searching for
# TLD stands for the top-level domain which means we want to search our results on google.com or google. in or some other domain.
# lang: lang stands for language.
# num: Number of results we want.
# stop: The last result to retrieve. Use None to keep searching forever.
# pause: Lapse to wait between HTTP requests. Lapse too short may cause Google to block your IP. Keeping significant lapses will make your program slow but it’s a safe and better option.
# Return: Generator (iterator) that yields found URLs. If the stop parameter is None the iterator will loop forever.


def perform_google_search(query, tld="co.in", num=2, stop=10, pause=2):
    results = []
    for url in search(query, tld=tld, num=num, stop=stop, pause=pause):
        results.append(url)
    return results


@app.get("/")
# Some related additional readings: https://fastapi.tiangolo.com/async/
async def root():
    return {"message": "Hello World"}


@app.post("/find-job-posting")
async def get_job_posting_details(data: JobPostingRequest):
    title = data.jobTitle
    jobField = data.jobField
    company = data.company
    description = data.description

    url_lists = {
        url_title: [],
        url_jobField: [],
        url_company: [],
        url_description: []
    }

    return {"message": "This object will have the content sourced from the linkedin page, so it can serve as default text"}
