from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service

import time
import pandas as pd

# URL to scrape from Linkedin (will be input to function)
url='https://www.linkedin.com/jobs/view/3389892425/'

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
print(description.get_attribute("outerHTML"))