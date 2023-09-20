from locust import HttpUser, task, between
from bs4 import BeautifulSoup
import random

class HubRiseUser(HttpUser):
    wait_time = between(1, 5)
    pages_to_visit = set(["/"])
    visited_pages = set()
    downloaded_assets = set()

    def download_assets(self, soup, current_page):
        # Download CSS
        for link in soup.find_all('link', {'rel': 'stylesheet'}):
            css_url = link.get('href')
            if css_url and css_url not in self.downloaded_assets:
                self.client.get(css_url)
                self.downloaded_assets.add(css_url)

        # Download JS
        for script in soup.find_all('script', {'src': True}):
            js_url = script.get('src')
            if js_url and js_url not in self.downloaded_assets:
                self.client.get(js_url)
                self.downloaded_assets.add(js_url)

        # Download Images
        for img in soup.find_all('img', {'src': True}):
            img_url = img.get('src')
            if img_url and img_url not in self.downloaded_assets:
                self.client.get(img_url)
                self.downloaded_assets.add(img_url)

    @task
    def browse(self):
        # Remove already visited pages from pages_to_visit
        self.pages_to_visit.difference_update(self.visited_pages)

        if not self.pages_to_visit:
            print("No more pages to visit. Script has completed.")
            return

        next_page = self.pages_to_visit.pop()
        self.visited_pages.add(next_page)

        response = self.client.get(next_page)
        soup = BeautifulSoup(response.text, 'html.parser')

        # Download assets for new pages
        self.download_assets(soup, next_page)

        # Extract and add new internal links to pages_to_visit
        links = [link.get('href') for link in soup.find_all('a') if link.get('href') and link.get('href').startswith('/')]
        self.pages_to_visit.update(links)

# Run this file with: locust -f locustfile.py --host=https://www.hubrise.com
