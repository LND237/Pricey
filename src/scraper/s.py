import re
from playwright.sync_api import sync_playwright
import sys
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
)


def extract_price(page):
    selectors = ["div[class*='current-']", "div", "span"]
    for selector in selectors:
        for element in page.locator(selector).element_handles():
            text = element.text_content() or ""
            text = " ".join(text.split())
            match = re.search(r"₪\s*([0-9]{1,3}(?:,[0-9]{3})*(?:\.\d+)?)", text)
            if match:
                return match.group(1)
    raise RuntimeError("Could not find a price element")


def has_json_ld(page):
    return any("application/ld+json" in script.lower() for script in page.locator("script").all_inner_texts())


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent=USER_AGENT,
            locale="he-IL",
            viewport={"width": 1366, "height": 768},
            extra_http_headers={"Accept-Language": "he-IL,he;q=0.9,en;q=0.8"},
        )
        context.add_init_script(
            "Object.defineProperty(navigator, 'webdriver', {get: () => undefined})"
        )
        page = context.new_page()
        response = page.goto(sys.argv[1], wait_until="networkidle")
        page.wait_for_timeout(3000)
        price = extract_price(page)
        print(f"status: {response.status}")
        print(f"price: {price}")
        print(f"supports application/ld+json: {has_json_ld(page)}")
        browser.close()


if __name__ == "__main__":
    main()
