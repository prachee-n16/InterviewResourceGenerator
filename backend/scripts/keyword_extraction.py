# Import variables
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize 
from nltk import tokenize
from operator import itemgetter
import math

# Ehh??

# Sample data
responsibilities = """
This is your opportunity to join AXIS Capital a trusted global provider of specialty lines insurance and reinsurance. We stand apart for our outstanding client service, intelligent risk taking and superior risk adjusted returns for our shareholders. We also proudly maintain an entrepreneurial, disciplined and ethical corporate culture. As a member of AXIS, you join a team that is among the best in the industry.  

At AXIS, we believe that we are only as strong as our people. We strive to create an inclusive and welcoming culture where employees of all backgrounds and from all walks of life feel comfortable and empowered to be themselves. This means that we bring our whole selves to work.  

All qualified applicants will receive consideration for employment without regard to race, color, religion or creed, sex, pregnancy, sexual orientation, gender identity or expression, national origin or ancestry, citizenship, physical or mental disability, age, marital status, civil union status, family or parental status, or any other characteristic protected by law. Accommodation is available upon request for candidates taking part in the selection process.  

The  Application Developer SharePoint  is a member of the SharePoint Delivery Team within the Workplace Productivity Center of Excellence. This role will be accountable for developing solutions from business requirements and testing those solutions, and transition them to production. They will assist in optimizing delivery processes and collaborate with a team of offshore resources through the SDLC in the delivery of application enhancements. A successful candidate will combine hands on functional technical skills with the ability to deliver a technical solution. The senior Developer must ensure the end to end application supports the business needs from a project delivery, an architecture standard and compliance, and audit perspective. They will be a self starter, effective collaborator, and a strong team member providing deep technical expertise in SharePoint On Prem Online design and implementation, SharePoint customization.  

 Responsibilities:    

  Involved in all aspects of delivery team
  Collaborate and partner with vendors, creating a blended   unified team
  Act as a delivery point of contact for key project initiatives within the application domain, or as the lead over a work stream in a multifaceted program.
  Contributes to the Application Delivery or Solution Architecture for their application domain, working with the Delivery Lead and other Domain Leads, CoEs for small to medium sized initiatives.
  Assure code meets business requirements through quality assurance.
  Participate in the introduction and change control process (e.g., transition from project development team to the application maintenance team) of a new application or capability.
  Analyze and tune application performance, supportability, and manageability.
  Along with their team, act as tier 3 resources for incidents   production support issues, consult and act to resolve on behalf of the business.
  Designs, develops, debugs, tests, deploys, maintains and documents SharePoint Online On prem solutions using out of the box functionality when possible and custom code as needed. This includes web parts, InfoPath forms, templates, page layouts, and master pages.
  Expected to be available to work in the office as needed.

 Required Skills and Qualifications: 
  Minimum of bachelors degree in Business or Computer Science or relevant work experience
  years of experience in solutioning, creating, developing and implementing technology solutions to support the business.
  Relevant experience in the following technologies and business domain:
  Strong knowledge of SharePoint 2016 2019 and SharePoint Online
  Thorough knowledge of web related technologies such as HTML, CSS, JavaScript, JQuery, Web Services, AJAX, React and Angular JS and associated development   testing techniques
  Webservice development and integration   API publishing concepts
  Strong knowledge of (C#) ASP.NET Development within the .NET framework, including instrumentation, exception handling, security, and threading.

 Preferred Skills and Qualifications:   

    years experience in P&C Insurance industry in a technology role preferred
  Dedicated and detail oriented
  Dedicated and conscientious team player
  Ability to communicate effectively and efficiently across the organization on a regular basis
  Excellent Analytical skills
  Ability to motivate, mentor, and grow resource skills within a team environment
"""

# Remove stopwords (words of no significance)
# Using nltk library
stop_words = set(stopwords.words('english'))

# Find total number of sentences
total_sentences = tokenize.sent_tokenize(responsibilities)
total_sent_len = len(total_sentences)
total_word_length = 0
print(total_sent_len)

# Is word present in a sentence list
def check_sent(word, sentences):
    # What is this syntax?
    final = [all([w in x for w in word]) for x in sentences] 
    sent_len = [sentences[i] for i in range(0, len(final)) if final[i]]
    return int(len(sent_len))

# Get top words
def get_top_n(dict_elem, n):
    result = dict(sorted(dict_elem.items(), key = itemgetter(1), reverse = True)[:n]) 
    return result

# Calculate TF for each word
tf_score = {}
for sentence in total_sentences:
    total_words = sentence.split()
    total_word_length += len(total_words)
    for word in total_words:
        word = word.replace('.','')
        if word not in stop_words:
            if word in tf_score:
                tf_score[word] += 1
            else:
                tf_score[word] = 1

# Dividing by total_word_length for each dictionary element
tf_score.update((x, y/int(total_word_length)) for x, y in tf_score.items())

idf_score = {}
for sentence in total_sentences:
    total_words = sentence.split()
    for word in total_words:
        word = word.replace('.','')
        if word not in stop_words:
            if word in idf_score:
                idf_score[word] = check_sent(word, total_sentences)
            else:
                idf_score[word] = 1

# Performing a log and divide
idf_score.update((x, math.log(int(total_sent_len)/y)) for x, y in idf_score.items())

tf_idf_score = {key: tf_score[key] * idf_score.get(key, 0) for key in tf_score.keys()}

print(tf_idf_score)