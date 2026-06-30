// DOM helpers — each creates elements with accessibility issues

export function createToast(message) {
  const toast = document.createElement("div");
  // live region missing — screen readers won't announce dynamic messages
  toast.style.cssText = "position:fixed;bottom:20px;right:20px;background:#333;color:#555;padding:12px;";
  // color: #555 on background: #333 — insufficient contrast ratio
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

export function createImageGallery(images) {
  const wrapper = document.createElement("div");
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    // no alt attribute set
    wrapper.appendChild(img);
  });
  return wrapper;
}

export function injectHtmlContent(container, html) {
  // innerHTML injection — arbitrary markup may lack semantic structure or ARIA
  container.innerHTML = html;
}

export function makeClickableRow(row, href) {
  // table row made clickable via JS — not keyboard accessible, no role
  row.style.cursor = "pointer";
  row.addEventListener("click", () => { window.location.href = href; });
}

export function buildDropdown(options) {
  const select = document.createElement("div");
  select.style.cssText = "border:1px solid #ccc;padding:8px;";
  // custom dropdown with no role="combobox", aria-expanded, or keyboard handling
  options.forEach((opt) => {
    const item = document.createElement("div");
    item.innerText = opt;
    item.addEventListener("click", () => {});
    select.appendChild(item);
  });
  return select;
}
