(function () {
  const grid = document.getElementById("product-grid");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("search-input");
  const audienceSelect = document.getElementById("audience-filter");
  const sortSelect = document.getElementById("sort-filter");
  const categoryList = document.getElementById("category-list");
  const resultsCount = document.getElementById("results-count");
  const clearFiltersBtn = document.getElementById("clear-filters");
  const yearEl = document.getElementById("current-year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const state = {
    category: "todas",
    audience: "todos",
    search: "",
    sort: "relevancia",
  };

  function renderCategoryList() {
    const items = [{ id: "todas", label: "Todas as categorias", icon: "⭐" }, ...CATEGORIES];
    categoryList.innerHTML = items
      .map((cat) => {
        const count = cat.id === "todas" ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat.id).length;
        const active = state.category === cat.id ? "active" : "";
        return `
          <button class="category-pill ${active}" data-category="${cat.id}" type="button">
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-label">${cat.label}</span>
            <span class="cat-count">${count}</span>
          </button>
        `;
      })
      .join("");

    categoryList.querySelectorAll(".category-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.category;
        renderCategoryList();
        renderProducts();
      });
    });
  }

  function getFiltered() {
    let list = PRODUCTS.slice();

    if (state.category !== "todas") {
      list = list.filter((p) => p.category === state.category);
    }

    if (state.audience !== "todos") {
      list = list.filter((p) => p.audience === state.audience || p.audience === "unissex");
    }

    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.keywords.toLowerCase().includes(q)
      );
    }

    if (state.sort === "az") {
      list.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    } else if (state.sort === "za") {
      list.sort((a, b) => b.name.localeCompare(a.name, "pt-BR"));
    } else if (state.sort === "categoria") {
      list.sort((a, b) => a.category.localeCompare(b.category));
    }

    return list;
  }

  function categoryLabel(id) {
    const found = CATEGORIES.find((c) => c.id === id);
    return found ? found.label : id;
  }

  function audienceLabel(a) {
    return { adulto: "Adulto", infantil: "Infantil", unissex: "Todas as idades" }[a] || a;
  }

  function renderProducts() {
    const list = getFiltered();
    resultsCount.textContent = `${list.length} produto${list.length === 1 ? "" : "s"} encontrado${
      list.length === 1 ? "" : "s"
    }`;

    if (list.length === 0) {
      grid.innerHTML = "";
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    grid.innerHTML = list
      .map((p) => {
        const cat = CATEGORIES.find((c) => c.id === p.category);
        const link = buildAmazonLink(p.keywords);
        return `
          <article class="product-card">
            <div class="product-card-media">
              <span class="product-icon" aria-hidden="true">${cat ? cat.icon : "⚽"}</span>
              <span class="badge badge-audience">${audienceLabel(p.audience)}</span>
            </div>
            <div class="product-card-body">
              <span class="badge badge-category">${categoryLabel(p.category)}</span>
              <h3 class="product-title">${p.name}</h3>
              <p class="product-desc">${p.desc}</p>
            </div>
            <div class="product-card-footer">
              <a class="btn-buy" href="${link}" target="_blank" rel="nofollow sponsored noopener">
                Ver na Amazon <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderProducts();
  });

  audienceSelect.addEventListener("change", (e) => {
    state.audience = e.target.value;
    renderProducts();
  });

  sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  clearFiltersBtn.addEventListener("click", () => {
    state.category = "todas";
    state.audience = "todos";
    state.search = "";
    state.sort = "relevancia";
    searchInput.value = "";
    audienceSelect.value = "todos";
    sortSelect.value = "relevancia";
    renderCategoryList();
    renderProducts();
  });

  function renderShortcuts() {
    const shortcutGrid = document.getElementById("shortcut-grid");
    if (!shortcutGrid) return;

    shortcutGrid.innerHTML = CATEGORIES.map(
      (c) => `
        <button class="shortcut-card" data-jump-category="${c.id}" type="button">
          <span class="icon" aria-hidden="true">${c.icon}</span>
          <span class="label">${c.label}</span>
        </button>`
    ).join("");

    shortcutGrid.querySelectorAll("[data-jump-category]").forEach((el) => {
      el.addEventListener("click", () => {
        state.category = el.getAttribute("data-jump-category");
        renderCategoryList();
        renderProducts();
        document.getElementById("loja").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  const statProducts = document.getElementById("stat-products");
  const statCategories = document.getElementById("stat-categories");
  if (statProducts) statProducts.textContent = PRODUCTS.length;
  if (statCategories) statCategories.textContent = CATEGORIES.length;

  renderShortcuts();
  renderCategoryList();
  renderProducts();
})();
