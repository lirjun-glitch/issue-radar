async function loadReports(){
  const response = await fetch('./data/reports.json');
  const data = await response.json();
  const reports = data.reports || [];
  const container = document.getElementById('reports');
  const search = document.getElementById('search');
  const category = document.getElementById('category');

  function render(){
    const q = (search.value || '').toLowerCase();
    const c = category.value || '';
    container.innerHTML = '';
    reports
      .filter(r => !c || (r.categories || []).includes(c))
      .filter(r => [r.date, r.title, r.thesis, ...(r.categories || []), ...(r.tags || [])].join(' ').toLowerCase().includes(q))
      .forEach(r => {
        const a = document.createElement('a');
        a.className = 'card';
        a.href = r.url;
        a.innerHTML = `<div class="date">${r.date}</div><h2>${r.title}</h2><p>${r.thesis}</p><div class="tags">${(r.categories||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
        container.appendChild(a);
      });
  }
  search.addEventListener('input', render);
  category.addEventListener('change', render);
  render();
}
loadReports().catch(err => {
  document.getElementById('reports').innerHTML = `<p>리포트 데이터를 불러오지 못했다: ${err.message}</p>`;
});
