---
layout: home
---

<script>
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang.startsWith('zh')) {
    window.location.href = "/zh/";
  } else {
    window.location.href = "/en/";
  }
</script>