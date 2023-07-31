import spacy

# load the language model instance in spaCy
nlp = spacy.load("en_core_web_sm")

# process input
# construct a doc object {sequence of lexical tokens: https://en.wikipedia.org/wiki/Lexical_analysis#Token}
# each token has information about a particular piece

desc = nlp(
    """
    We are seeking technically oriented application developers who are passionate about coding and relentless in the pursuit of excellence. Daily responsibilities include Python programming, analysis and database design. You will work on new development projects and existing systems in a 24/7 transaction-processing environment.
    Role & Responsibilities:
    Write quality, clean and maintainable Python code using programming best practices
    Build new features and fix bugs in Python and other programming languages like Java and C++
    Write server-side Python code that powers the user interface
    Implement proof of concept, prototypes and production-grade software
    Trouble-shoot software issues and implement bug fixes
    Translate functional requirements into conceptual and detailed designs
    Provide estimates for development efforts
    Required Knowledge, Skills & Abilities
    Experience in writing client / server database applications using Object Oriented languages
    Hands-on experience with Python is an asset
    Demonstrated experience in applications development in UNIX environment
    UNIX networking experience with strong knowledge of NetBSD, PostgreSQL and Linux
    Application development experience in the financial industry, including: POS devices, debit/credit card terminals, and communication protocols
    Understanding of Extreme Programming practices and rules
    Strong database design skills and fluent in SQL statements
    Methodical, organized and able to multi-task
    B.S. in Computer Science / Co-op Software Engineering Stream / Mathematics
    Fast learner, self-starter, solution oriented and productive worker
    Ability to work independently, as a team player and in a fast paced environment
    """
)
print(type(desc))
# iterating over Doc object
print([token.text for token in desc])
