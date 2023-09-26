try:
    from googlesearch import search
except ImportError:
    print("No module named 'google' found.")

# Google Search
def perform_google_search(query, tld="co.in", num=3, stop=2, pause=2):
    results = []
    for url in search(query, tld=tld, num=num, stop=stop, pause=pause):
        results.append(url)
    return results
