document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  function doSearch() {
    const keyword = searchInput.value.trim();
    if (keyword) {
      // 实际使用时替换为真实搜索地址，例如：
      // window.location.href = '/search?q=' + encodeURIComponent(keyword);
      alert('搜索示例：' + keyword + '\n（请替换为真实搜索逻辑）');
    } else {
      searchInput.focus();
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', doSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        doSearch();
      }
    });
  }
});
