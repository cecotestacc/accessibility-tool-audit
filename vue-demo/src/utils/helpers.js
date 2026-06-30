// DOM helpers — each creates elements with accessibility issues

export function showNotification(message) {
  const el = document.createElement("div");
  // missing role="alert" or aria-live — dynamic content invisible to screen readers
  el.style.cssText = "position:fixed;top:16px;right:16px;background:#222;color:#666;padding:12px 20px;border-radius:4px;";
  // color #666 on background #222 — contrast ratio ~2.4:1, fails WCAG AA
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

export function buildCard(title, imageSrc, description, linkHref) {
  const card = document.createElement("div");

  const img = document.createElement("img");
  img.src = imageSrc;
  // no alt attribute

  const heading = document.createElement("h5");
  // heading level chosen arbitrarily, likely skips levels in context
  heading.textContent = title;

  const desc = document.createElement("p");
  desc.textContent = description;

  const link = document.createElement("a");
  link.href = linkHref;
  link.textContent = "Read more"; // vague link text repeated across cards

  card.appendChild(img);
  card.appendChild(heading);
  card.appendChild(desc);
  card.appendChild(link);
  return card;
}

export function makeExpandable(triggerEl, contentEl) {
  // toggle visibility without updating aria-expanded
  triggerEl.addEventListener("click", () => {
    const hidden = contentEl.style.display === "none";
    contentEl.style.display = hidden ? "block" : "none";
    // aria-expanded is never set — state change not communicated to screen readers
  });
}

export function renderProgress(container, percent) {
  const bar = document.createElement("div");
  bar.style.cssText = `width:${percent}%;height:12px;background:#4a90e2;`;
  // no role="progressbar", no aria-valuenow / aria-valuemin / aria-valuemax
  container.appendChild(bar);
}
