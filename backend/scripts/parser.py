from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

import time
import pandas as pd
import markdownify

# URL to scrape from Linkedin (will be input to function)
url='https://www.linkedin.com/jobs/view/3389892425/'

def get_job_description(url):
    # Set up a web driver
    s = Service('../chromedriver.exe')
    browser = webdriver.Chrome(service=s)
    # Get the url and load it up
    browser.get(url)

    # Open show more button 
    show_more_btn = browser.find_element(By.CLASS_NAME, 'show-more-less-html__button')
    show_more_btn.click()

    # Need to find description
    description = browser.find_element(By.CLASS_NAME, 'show-more-less-html__markup')

    return description

def save_job_description(job_description):
    formatted_description = markdownify.markdownify(job_description, heading_style="ATX")
    f = open("description.md", "w")
    f.write(formatted_description)
    f.close()

    with open('description.md') as f:
        for line in f:
            print(line.strip())

def parse_description():
    # TO-DO Find keywords from markdown file
    file = open("description.md", "r")

    # Control which section we are in
    is_responsibility = False
    is_required_skill = False
    is_preferred_skill = False

    # Array to store all the responsibilities, skills etc.
    responsibilities = []
    required_skills = []
    preferred_skills = []

    # For loop needs to be better planed out
    for line in file:
        # Check if we find responsibilities
        if '**Responsibilities:**' in line:
            is_responsibility = True
            continue
        elif '**Required Skills and Qualifications:**' in line:
            is_required_skill = True
            continue
        elif '**Preferred Skills and Qualifications:**' in line:
            is_preferred_skill = True
            continue
        if is_responsibility == True:
            if (line[0] == '*' and line[1] == ' '):
                responsibilities.append(line[2:-1])
            elif len(line.strip()) != 0:
                is_responsibility = False
        if is_required_skill == True:
            if (line[0] == '*' and line[1] == ' '):
                required_skills.append(line[2:-1])
            elif len(line.strip()) != 0:
                is_required_skill = False
        if is_preferred_skill == True:
            if (line[0] == '*' and line[1] == ' '):
                preferred_skills.append(line[2:-1])
            elif len(line.strip()) != 0:
                is_preferred_skill = False
    return responsibilities, required_skills, preferred_skills

def main():
    # Get job description from url
    print("MAIN")
    job_description = get_job_description(url).get_attribute('outerHTML')
    print(job_description)
    # Save it in a file to be read later on, might need to pass this to UI
    save_job_description(job_description)
    # Parse out responsibilities, skills etc.
    responsibilities, required_skills, preferred_skills = parse_description()
