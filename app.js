/**************
 * MOCK DATA  *
 **************/
const DATA = {
  // Категории первого экрана
  categories: [
    { slug: "radiatory", title: "Радиаторы", image: "img/радиатор-обложка.png" },
    { slug: "truby", title: "Трубы", image: "img/Труба_металлопластиковая.png" },
    { slug: "fitingi", title: "Фитинги", image: "img/фитинг.png" },
    { slug: "armatura", title: "Запорная арматура", image: "img/запорная-арматура.png" },
    { slug: "welding_machine", title: "Сварочное оборудование", image: "img/296.png" },
    { slug: "tekhnicheskaya_teploizolyatsiya", title: "Техническая теплоизоляция", image: "img/ТЕХтепло.jpg" },
    { slug: "krany-mvi", title: "Краны MVI", image: "img/Краны_MVI.png" },
    { slug: "kollektory", title: "Коллекторы", image: "img/Коллекторы.jpg" },
    { slug: "nasosy", title: "Насосы", image: "img/Насосы.png" },
    { slug: "kontrolno-izmeritelnye-pribory", title: "Контрольно-измерительные приборы", image: "img/Манометр.jpg" },
    { slug: "truboprovodnye-sistemy", title: "Аксессуары для тёплого пола", image: "img/аксесуары.jpg" },
    { slug: "sistema-iz-otsinkovannoy-stali", title: "Система из оцинкованной стали", image: "img/Система из оцинкованной стали.jpg" }
  ],

  

  // Подкатегории 
  subcategories: {
    radiatory: [
      { slug: "alyuminievye", title: "Алюминиевые", image: "img/радиатор-алюм.png" },
      { slug: "bimetallicheskie", title: "Биметаллические", image: "img/бимет-радиатор.png" },
      { slug: "stalnye", title: "Стальные", image: "img/радиатор-обложка.png" },
    ],
    truby: [
      { slug: "polipropilenovye_truby", title: "Полипропиленовые трубы", image: "img/политрубы.png" },
      { slug: "pe-rt-pipes", title: "PE-RT Трубы", image: "img/Труба_металлопластиковая.png" },
      { slug: "truby_naruzhnoj_kanalizatsii", title: "Трубы наружной канализации", image: "img/Трубы наружной канализации.png" },
      { slug: "truby_vnutrennej_kanalizatsii", title: "Трубы внутренней канализации", image: "img/Трубы внутренней канализации.png" },
      { slug: "maloshumnaja_kanalizatsija", title: "Трубы малошумной канализации", image: "img/1828.png" },
      { slug: "pnd-pipes", title: "Трубы ПНД", image: "img/871.png" },
      { slug: "sistema_iz_nerzhaveyushchej_stali", title: "Система из нержавеющей стали", image: "img/SS_Sys4.png" },
      { slug: "sistema_trub_pex", title: "Системы полиэтиленовых труб и аксиальных фитингов", image: "img/системаполиэт.png" },
       { slug: "sistema_metalloplastikovykh_trub", title: "Система металлопластиковых труб", image: "img/системаметало.jpg" },
      
      
    ],
    fitingi: [
      { slug: "fitingi_ppr_belye", title: "Фитинги PPR белые", image: "img/1575.png" },
      { slug: "fitingi_polipropilenovye_serye", title: "Фитинги PPR серые", image: "img/1587.png" },
      { slug: "compression-fittings", title: "Компрессионные фитинги", image: "img/1435.png" },
      { slug: "fitingi_naruzhnoj_kanalizatsii", title: "Фитинги наружной канализации", image: "img/999.png" },
      { slug: "fitingi_vnutrennej_kanalizatsii", title: "Фитинги внутренней канализации", image: "img/1028.png" },
      { slug: "fitingi_maloshumnoj_kanalizatsii", title: "Фитинги малошумной канализации", image: "img/1809.png" },
      { slug: "rezbovye-latunnye-fitingi", title: "Резьбовые латунные фитинги", image: "img/латуньФитингpng.png" },
    ],
    
    tekhnicheskaya_teploizolyatsiya: [
      { slug: "trubnaya-teploizolyatsiya", title: "Трубная теплоизоляция", image: "img/тепло.jpg" },
    ],
  },


  // Списки товаров по пути "категория/подкатегория"
  productLists: {
    "radiatory/stalnye": [
      { id: "Adera-eco-500-80", title: "Радиатор стальной Adera Eco 500-80", image: "img/prod_radiator_st.png", inStock: true, brand:"Adera" },
      { id: "Adera-premium-500-80", title: "Радиатор стальной Adera Premium 500-80", image: "img/prod_radiator_st.png", inStock: true, brand:"Adera" },
      { id: "steel-compact-22", title: "Радиатор стальной Compact 22", image: "img/prod_radiator_st.png", inStock: true, brand:"Kermi" },
      { id: "steel-ventil-22", title: "Радиатор стальной Ventil 22", image: "img/prod_radiator_st.png", inStock: true, brand:"Kermi" },
      { id: "steel-universal-11", title: "Радиатор стальной Universal 11", image: "img/prod_radiator_st.png", inStock: false, brand:"Prado" },
      { id: "steel-universal-22", title: "Радиатор стальной Universal 22", image: "img/prod_radiator_st.png", inStock: true, brand:"Prado" },
    ],
    "radiatory/bimetallicheskie": [
      { id: "bi-eco-500-80", title: "Радиатор биметаллический 500-80", image: "img/prod_radiator_bi.png", inStock: true, brand:"Rifar" },
    ],
    "armatura": [
      { id: "valve-12-lammin-120-12", title: "Вентиль регулируемый прямой 1/2\" (Lammin) 120/12", image: "img/prod_radiator_bi.png", inStock: true,  brand: "Lammin" },
      { id: "ball-valve-12", title: "Кран шаровый 1/2\"", image: "img/prod_radiator_bi.png", inStock: false, brand: "Adera" }
    ],
  },

  // Детальные карточки (id -> объект)
  products: {
    "Adera-eco-500-80": {
      id:"Adera-eco-500-80",
      title:"Радиатор стальной Adera Eco 500-80",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{
        "Межосевое расстояние":"500 мм",
        "Тип":"Стальной, панельный 22",
        "Подключение":"Нижнее/боковое",
        "Рабочее давление":"10 бар",
        "Гарантия":"5 лет"
      }
    },
    "Adera-premium-500-80": {
      id:"Adera-premium-500-80",
      title:"Радиатор стальной Adera Premium 500-80",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{
        "Межосевое расстояние":"500 мм",
        "Тип":"Стальной, панельный 22",
        "Покрытие":"Порошковая эмаль",
        "Рабочее давление":"10 бар",
        "Гарантия":"7 лет"
      }
    },
    "steel-compact-22": {
      id:"steel-compact-22",
      title:"Радиатор стальной Compact 22",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{
        "Тип":"Панельный 22", "Подключение":"Боковое", "Цвет":"Белый RAL9016"
      }
    },
    "steel-ventil-22": {
      id:"steel-ventil-22",
      title:"Радиатор стальной Ventil 22",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{
        "Тип":"Панельный 22", "Подключение":"Нижнее", "Цвет":"Белый RAL9016"
      }
    },
    "steel-universal-11": {
      id:"steel-universal-11",
      title:"Радиатор стальной Universal 11",
      image:"img/prod_radiator_st.png",
      inStock:false,
      specs:{
        "Тип":"Панельный 11", "Подключение":"Боковое", "Цвет":"Белый"
      }
    },
    "steel-universal-22": {
      id:"steel-universal-22",
      title:"Радиатор стальной Universal 22",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{
        "Тип":"Панельный 22", "Подключение":"Боковое", "Цвет":"Белый"
      }
    },
    "al-eco-500-80": {
      id:"al-eco-500-80",
      title:"Радиатор алюминиевый Adera Eco 500-80",
      image:"img/prod_radiator_al.png",
      inStock:true,
      specs:{
        "Материал":"Алюминий", "Межосевое":"500 мм", "Давление":"16 бар"
      }
    },
    "al-premium-500-80": {
      id:"al-premium-500-80",
      title:"Радиатор алюминиевый Adera Premium 500-80",
      image:"img/prod_radiator_al.png",
      inStock:true,
      specs:{
        "Материал":"Алюминий", "Межосевое":"500 мм", "Давление":"16 бар"
      }
    },
    "bi-eco-500-80": {
      id:"bi-eco-500-80",
      title:"Радиатор биметаллический 500-80",
      image:"img/prod_radiator_bi.png",
      inStock:true,
      specs:{
        "Материал":"Сталь+алюминий", "Межосевое":"500 мм", "Давление":"20 бар"
      }
    }
  }
};


const SHEETS = {
  // ЗАМЕНИ на реальные ID
  SPREADSHEET_ID: '1zmVH_kfenPsV8xlCgC9Exoq0MNIon1tl6qb0SBK3c44',
  GID_LISTS: '0',
  GID_PRODUCTS: '633840799',
  GID_VARIANTS: '1471602747'
};

// GViz JSON (надёжнее, чем CSV, не ломается на запятых)
function gvizUrl(gid){
  return `https://docs.google.com/spreadsheets/d/${SHEETS.SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}`;
}

async function fetchGViz(gid){
  const res = await fetch(gvizUrl(gid), { cache: 'no-store' });
  const txt = await res.text();
  const json = JSON.parse(
    txt.replace(/^[^\n]*\n?/, '')
       .replace(/google\.visualization\.Query\.setResponse\(|\);$/g, '')
  );
  const cols = json.table.cols.map(c => c.label);
  const rows = json.table.rows.map(r => {
    const obj = {};
    r.c.forEach((cell,i)=> { obj[cols[i]] = cell ? (cell.f ?? cell.v) : null; });
    return obj;
  });
  return rows;
}

/**
 * Гидратируем DATA.productLists и DATA.products из Google Sheets.
 * Категории/подкатегории остаются как в коде.
 */
async function hydrateProductsFromSheets(){
  const [lists, prods, variantsRows] = await Promise.all([
    fetchGViz(SHEETS.GID_LISTS),
    fetchGViz(SHEETS.GID_PRODUCTS),
    SHEETS.GID_VARIANTS ? fetchGViz(SHEETS.GID_VARIANTS) : Promise.resolve([])
  ]);

// 1) Собираем productLists (с фильтрацией пустых строк)
const map = {};
for (const row of lists) {
  const cat = (row.cat_slug || '').trim();
  const sub = (row.sub_slug || '').trim();
  const id = (row.id || '').trim();
  const title = (row.title || '').trim();

  // ❗ Пропускаем мусорные строки
  if (!cat) continue;
  if (!id && !title) continue;

  const path = sub ? `${cat}/${sub}` : cat;
  if (!map[path]) map[path] = [];

  map[path].push({
    id,
    title,
    image: (row.image || '').trim(),
    inStock: String(row.inStock || '').trim().toLowerCase() === 'true',
    brand: (row.brand || '').trim()
  });
}

  Object.keys(map).forEach(key=>{
    map[key].sort((a,b)=>{
      const aSort = Number(lists.find(r=>r.id===a.id)?.sort || 0);
      const bSort = Number(lists.find(r=>r.id===b.id)?.sort || 0);
      if (aSort !== bSort) return aSort - bSort;
      return a.title.localeCompare(b.title,'ru');
    });
  });

  // 2) Детальные карточки из Products
  const prodMap = {};
  for (const row of prods) {
    let specs = {};
    try {
      specs = row.specs_json ? JSON.parse(row.specs_json) : {};
    } catch (e) {
      console.warn('Ошибка JSON в Products.specs_json для id:', row.id, e, row.specs_json);
      specs = {};
    }
    prodMap[(row.id||'').trim()] = {
      id: (row.id||'').trim(),
      title: row.title || '',
      image: row.image || '',
      inStock: String(row.inStock||'').toLowerCase()==='true',
      specs // временно — потом можем заменить вариантами
    };
  }

  // 2.1) Добавляем автогенерацию карточек из ProductLists, если их нет в Products
for (const row of lists) {
  const id = (row.id || "").trim();
  if (!id) continue;

  // если карточки нет в листе Products — создаём её автоматически
  if (!prodMap[id]) {
    prodMap[id] = {
      id,
      title: row.title || "",
      image: row.image || "",
      inStock: String(row.inStock || "").toLowerCase() === "true",
      brand: row.brand || "",
      specs: {} // можно оставить пустым
    };
  }
}

  // 3) Варианты из листа Variants (если есть)
  if (variantsRows && variantsRows.length) {
    // product_id -> массив вариантов
    const vmap = {};
    for (const r of variantsRows) {
      const pid = (r.product_id || '').trim();
      if (!pid) continue;
      if (!vmap[pid]) vmap[pid] = [];
      vmap[pid].push({
        "Вариант": r.variant_title || '',
        "Наличие": r.availability || '',
        "Код": r.code || '',
        _sort: Number(r.sort || 0)
      });
    }
    // сортировка вариантов
    Object.keys(vmap).forEach(pid=>{
      vmap[pid].sort((a,b)=>{
        if (a._sort !== b._sort) return a._sort - b._sort;
        return String(a["Вариант"]).localeCompare(String(b["Вариант"]),'ru');
      });
    });
    // подменяем specs на массив вариантов, если они есть для товара
    Object.keys(prodMap).forEach(pid=>{
      if (vmap[pid] && vmap[pid].length) {
        // Если не хочешь показывать "Код" — можно тут его удалить:
        // vmap[pid] = vmap[pid].map(x => (delete x["Код"], x));
        prodMap[pid].specs = vmap[pid].map(({_sort, ...rest}) => rest);
      }
    });
  }

  // 4) Подменяем твои хардкод-данные ТОЛЬКО по товарам/спискам
  DATA.productLists = map;
  DATA.products = prodMap;
}



/****************
 * MINI ROUTER  *
 ****************/
const app = document.getElementById("app");
const breadcrumbs = document.getElementById("breadcrumbs");

const routes = {
  "/": renderHome,
  "/category/:cat": renderCategory,
  "/category/:cat/:sub": renderProductList,
  "/product/:id": renderProductDetail,
};

function parseHash(){
  // location.hash = "#/category/truby/pnd-pipes?page=5"
  const full = location.hash.slice(1); // "/category/truby/pnd-pipes?page=5"
  if (!full) return null;

  const [path] = full.split("?");      // берём только "/category/truby/pnd-pipes"
  return path.startsWith("/") ? path : null;
}


function matchRoute(path){
  for(const [pattern, handler] of Object.entries(routes)){
    const keys = [];
    const regex = new RegExp("^" + pattern
      .replace(/\//g,"\\/").replace(/:([A-Za-z0-9_]+)/g, (_,k)=>{keys.push(k); return "([^\\/]+)";}) + "$");
    const m = path.match(regex);
    if(m){
      const params = {}; keys.forEach((k,i)=>params[k]=decodeURIComponent(m[i+1]));
      return { handler, params, pattern };
    }
  }
  return null;
}

function navigate(to){ location.hash = to; }

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", async () => {
  try {
    await hydrateProductsFromSheets(); // тянем товары из Google Sheets
  } catch(e){
    console.warn('Sheets fallback: остаёмся на локальных данных', e);
  }
  render(); // как и раньше
});


function render(){
  const path = parseHash();
  if (!path) {
    navigate("/");
    return;
  };
  const matched = matchRoute(path);
  if(!matched){ navigate("/"); return; }
  setBreadcrumbs(path, matched.params);
  matched.handler(matched.params);
  //window.scrollTo({top:0, behavior:"smooth"});
}

/********************
 * RENDER FUNCTIONS *
 ********************/
function cardHTML({title,image,href}){
  return `
    <a class="card" href="${href}">
      <div class="card-media" style="background-image:url('${image}')"></div>
      <div class="card-overlay"></div>
      <div class="card-body">
        <div class="card-title">${title}</div>
        <div class="card-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
        </div>
      </div>
    </a>
  `;
}

function renderHome() {
  app.innerHTML = `
    <div class="catalog-header">
      <h1 class="section-title main-title">Каталог</h1>
      <div class="search-wrapper">
        <input type="text" id="globalSearch" placeholder="Поиск товаров..." autocomplete="off" class="search-input"/>
        <div id="searchSuggestions" class="suggestions"></div>
      </div>
    </div>

    <div class="grid" id="categoryGrid">
      ${DATA.categories.map(c => cardHTML({
        title:c.title,
        image:c.image,
        href:`#/category/${c.slug}`
      })).join("")}
    </div>
  `;

  const search = document.getElementById("globalSearch");
  const box = document.getElementById("searchSuggestions");

  search.addEventListener("input", () => showSuggestions(search.value.trim(), box));
  search.addEventListener("focus", () => showSuggestions(search.value.trim(), box));
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrapper")) box.innerHTML = "";
  });
}

function showSuggestions(query, box) {
  if (!query) {
    box.innerHTML = "";
    return;
  }

  const q = query.toLowerCase();

  // собираем ВСЕ товары
  const allProducts = Object.values(DATA.products);

  const results = allProducts.filter(p =>
    p.title.toLowerCase().includes(q) ||
    (p.brand || "").toLowerCase().includes(q) ||
    p.id.toLowerCase().includes(q)
  ).slice(0, 8); // максимум 8 подсказок

  if (!results.length) {
    box.innerHTML = `<div class="no-result">Ничего не найдено</div>`;
    return;
  }

  box.innerHTML = results.map(p => `
    <div class="suggest-item" data-id="${p.id}">
      <img src="${p.image}" class="suggest-img">
      <div>
        <div class="suggest-title">${p.title}</div>
        <div class="suggest-brand">${p.brand || ""}</div>
      </div>
    </div>
  `).join("");

  // переход по клику
  document.querySelectorAll(".suggest-item").forEach(item => {
    item.onclick = () => {
      location.hash = `#/product/${item.dataset.id}`;
      box.innerHTML = "";
    };
  });
}

function renderCategory({cat}){
  // если для категории есть список товаров (без подкатегорий) — показываем сразу СПИСОК
  if (DATA.productLists[cat]) {
    renderProductList({ cat, sub: null });
    return;
  }

  const catObj = DATA.categories.find(c => c.slug === cat);
  const subs = DATA.subcategories[cat] || [];
  app.innerHTML = `
    <a class="back" href="#/"><i></i>Назад</a>
    <h1 class="section-title">${catObj ? catObj.title : "Категория"}</h1>
    <div class="grid">
      ${subs.map(s => cardHTML({
        title: s.title,
        image: s.image,
        href: `#/category/${cat}/${s.slug}`
      })).join("")}
    </div>
  `;
}



function renderProductList({cat, sub}) {
  const key = sub ? `${cat}/${sub}` : cat;
  const list = (DATA.productLists[key] || []).slice();

  if (!list.length && sub == null) { 
    renderCategory({cat}); 
    return; 
  }

  const ITEMS_PER_PAGE = 12;

  // ===== ЧИТАЕМ page ИЗ location.hash =====
  // пример hash: "#/category/truby/pnd-pipes?page=5"
  const hash = window.location.hash || "";
  const [, query = ""] = hash.split("?");
  const params = new URLSearchParams(query);
  let currentPage = Number(params.get("page")) || 1;

  function paginate(arr, page) {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return arr.slice(start, start + ITEMS_PER_PAGE);
  }

  function draw() {
    const arr = list.slice().sort((a,b)=>a.title.localeCompare(b.title,'ru'));
    const totalPages = Math.ceil(arr.length / ITEMS_PER_PAGE);
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages || 1;

    const pageItems = paginate(arr, currentPage);

    app.innerHTML = `
      <a class="back" href="#/${sub ? `category/${cat}` : ''}"><i></i>Назад</a>
      <h1 class="section-title">${sub ? titleSub(cat, sub) : titleFrom(cat)}</h1>

      <div class="grid">
        ${pageItems.map(p => `
          <a class="prod-card" href="#/product/${p.id}">
            <div class="prod-img" style="background-image:url('${p.image}')"></div>
            <div class="badge ${p.inStock ? "in-stock" : "out-stock"}">
              <i></i>${p.inStock ? "В наличии" : "Нет в наличии"}
            </div>
            <div class="prod-title">${p.title}</div>
            <div class="subtle">${p.brand || ""}</div>
          </a>
        `).join("")}
      </div>

      <div class="pagination-wrapper">
        ${createPagination(arr.length)}
      </div>
    `;

    attachPaginationEvents(arr.length);
  }

function createPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return "";

  let html = "";

  function pageButton(page, text = page) {
    const active = page === currentPage ? "active" : "";
    return `<button class="page-btn ${active}" data-page="${page}">${text}</button>`;
  }

  function dots() {
    return `<span class="dots">…</span>`;
  }

  // ← КНОПКА НАЗАД
  html += `<button class="page-btn prev" data-dir="-1">‹</button>`;

  // 1) ВСЕГДА показываем страницу 1
  html += pageButton(1);

  // 2) Левые точки
  if (currentPage > 4) {
    html += dots();
  }

  // 3) Левый сосед (currentPage-1)
  if (currentPage > 2) {
    html += pageButton(currentPage - 1);
  }

  // 4) ТЕКУЩАЯ страница
  if (currentPage !== 1 && currentPage !== totalPages) {
    html += pageButton(currentPage);
  }

  // 5) Правый сосед (currentPage+1)
  if (currentPage < totalPages - 1) {
    html += pageButton(currentPage + 1);
  }

  // 6) Правые точки
  if (currentPage < totalPages - 3) {
    html += dots();
  }

  // 7) ВСЕГДА показываем последнюю страницу
  if (totalPages > 1) {
    html += pageButton(totalPages);
  }

  // → КНОПКА ВПЕРЁД
  html += `<button class="page-btn next" data-dir="1">›</button>`;

  return html;
}


  function attachPaginationEvents(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const base = `#/category/${cat}` + (sub ? `/${sub}` : "");

    // номера страниц
    document.querySelectorAll(".page-btn[data-page]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const page = Number(btn.dataset.page);
        navigate(`${base}?page=${page}`);   // меняем hash -> роутер сам вызовет renderProductList заново
      });
    });

    // стрелки ‹ ›
    document.querySelectorAll(".page-btn[data-dir]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dir = Number(btn.dataset.dir);
        const page = Math.min(Math.max(1, currentPage + dir), totalPages);
        navigate(`${base}?page=${page}`);
      });
    });
  }

  draw();
}




function renderProductDetail({id}){
  const p = DATA.products[id];
  if(!p){ app.innerHTML = `<p>Товар не найден</p>`; return; }

  const img = p.image && p.image.trim() ? p.image : "img/no-photo.png";
  const specs = p.specs || {};
  const isArray = Array.isArray(specs);

  // Формируем HTML спецификаций:
  const specsHTML = isArray
  ? specs.map((v, i) => {
      const name = v["Вариант"] || v["Название"] || v["Тип"] || "Вариант";
      const code = v["Код"] ? String(v["Код"]) : "";
      const availStr = (v["Наличие"] || "").toString().toLowerCase();
      const inStockVar = availStr && !/нет/.test(availStr);

      return `
        <div class="kv-row">
          <div class="kv-left">
            <div class="kv-name">${name}</div>
            <div class="kv-availability ${inStockVar ? 'on' : 'off'}">
              <i></i><span>${inStockVar ? 'в наличии' : 'нет в наличии'}</span>
            </div>
          </div>
          ${code ? `<div class="kv-right">${code}</div>` : ''}
        </div>
      `;
    }).join("")
  : Object.entries(specs||{}).map(([k,v]) =>
      `<div class="kv-line"><span class="subtle">${k}</span><strong>${v}</strong></div>`
    ).join("");



  app.innerHTML = `
    <a class="back" href="javascript:history.back()"><i></i>Назад</a>
    <div class="detail">
      <div class="detail-img" style="background-image:url('${img}')"></div>
      <div>
        <h1 class="detail-title">${p.title}</h1>
        <div class="badge" style="margin:10px 0 20px"><i></i>${p.inStock ? "В наличии" : "Нет в наличии"}</div>
        <div class="kv">${specsHTML}</div>
        <div class="btns">
          <button class="btn primary" data-scroll="contact">Связаться</button>
          <button class="btn" onclick="alert('Скоро будет!')">Добавить в сравнение</button>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
  const detail = document.querySelector(".detail");
  if (detail) {
    const y = detail.getBoundingClientRect().top + window.pageYOffset - 80; 
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}, 0);
}


/****************
 * BREADCRUMBS  *
 ****************/
function titleFrom(cat){
  return (DATA.categories.find(c=>c.slug===cat)||{}).title || "Категория";
}
function titleSub(cat, sub){
  const list = DATA.subcategories[cat]||[];
  return (list.find(s=>s.slug===sub)||{}).title || "Подкатегория";
}

function setBreadcrumbs(path, params){
  const parts = path.split("/").filter(Boolean);
  let html = `<a href="#/">Главная</a>`;
  if(parts[0]==="category" && parts[1]){
    html += ` / <span>${titleFrom(params.cat)}</span>`;
    if(parts[2]) html += ` / <span>${titleSub(params.cat, params.sub)}</span>`;
  } else if(parts[0]==="product"){
    const p = DATA.products[params.id];
    html += ` / <span>${p ? p.title : "Товар"}</span>`;
  }
  breadcrumbs.innerHTML = html;
}


// Делегирование: ловим клики по элементам с data-scroll
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-scroll]');
  if (!btn) return;

  const id = btn.dataset.scroll;               // напр. "contact"
  const target = document.getElementById(id);
  if (!target) return;

  // Если есть фиксированный header — сделаем скролл с отступом
  const HEADER_OFFSET = 70; // подставь свою высоту шапки
  const y = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

  window.scrollTo({ top: y, behavior: 'smooth' });
});





















