function removeElement() {
  // استهدف العنصر مباشرة
  const target = document.querySelector("#uniconsent-config");
  if (target) {
    target.parentElement?.remove(); // نحذف الحاوية كاملة
    console.log("✅ Element removed automatically");
  }
}

// احذف عند تحميل الصفحة
window.addEventListener("load", removeElement);

// راقب DOM باستمرار (لو رجع العنصر بعد وقت)
const observer = new MutationObserver(removeElement);
observer.observe(document.body, { childList: true, subtree: true });
