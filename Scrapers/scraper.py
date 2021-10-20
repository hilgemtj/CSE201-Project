import play_scraper
import json

from pprint import pprint
from jsonmerge import merge


apps=play_scraper.search('popular apps', page=1)
apps2=play_scraper.search('popular apps', page=2)

merged = merge(apps, apps2)

with open('results.json', 'w') as f:
    json.dump(merged, f)
