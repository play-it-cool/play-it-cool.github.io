(() => {
  'use strict';
  const data=window.SITE_CONTENT;
  const $=id=>document.getElementById(id);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl=v=>typeof v==='string'&&/^https:\/\/(book|search)\.douban\.com\//.test(v)?v:'';
  const ids=['home','works','writing','about','contact'];
  const titles=['INTRODUCTION / 个人档案','PUBLICATIONS / 出版作品','WRITING / 文字','PROFILE / 关于','CONTACT / 联系'];
  let active='home',filter='全部',lastFocus=null;
  if(!data)return;
  document.title=`${data.site.title}｜Personal Archive`;
  $('site-intro').textContent=data.site.intro;
  $('projects-notice').textContent=data.site.projectsFootnote;
  $('footer-year').textContent=new Date().getFullYear();
  $('footer-name').textContent=data.site.displayName==='你的名字'?data.site.title:data.site.displayName;
  $('about-headline').textContent=data.about.headline;
  $('about-lead').textContent=data.about.lead;
  $('about-description').textContent=data.about.description;
  function goto(id,{focus=false,updateHash=true}={}){
    if(!ids.includes(id))id='home';
    const old=$('page-'+active),fresh=$('page-'+id);
    old.hidden=true;old.classList.remove('is-current');
    fresh.hidden=false;fresh.classList.remove('is-current');void fresh.offsetWidth;fresh.classList.add('is-current');
    active=id;
    document.querySelectorAll('[role="tab"]').forEach(b=>{const is=b.dataset.go===id;b.classList.toggle('active',is);b.setAttribute('aria-selected',is?'true':'false');b.tabIndex=is?0:-1;});
    $('paper-category').textContent=titles[ids.indexOf(id)];
    $('paper-num').textContent=`SHEET ${String(ids.indexOf(id)+1).padStart(2,'0')} — 05`;
    if(updateHash){try{history.replaceState(null,'','#'+id);}catch(err){location.hash=id;}}
    if(focus)$('tab-'+id).focus({preventScroll:true});
    window.scrollTo({top:0,behavior:'instant'});
  }
  document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();goto(btn.dataset.go)}));
  $('file-tabs').addEventListener('keydown',e=>{
    if(!['ArrowDown','ArrowRight','ArrowLeft','ArrowUp','Home','End'].includes(e.key))return;
    e.preventDefault();let at=ids.indexOf(active),i=e.key==='Home'?0:e.key==='End'?4:(at+(e.key==='ArrowRight'||e.key==='ArrowDown'?1:4))%5;
    goto(ids[i],{focus:true});
  });
  $('prev-tab').addEventListener('click',()=>goto(ids[(ids.indexOf(active)+4)%5]));
  $('next-tab').addEventListener('click',()=>goto(ids[(ids.indexOf(active)+1)%5]));
  window.addEventListener('hashchange',()=>{const id=location.hash.substring(1);if(ids.includes(id)&&id!==active)goto(id,{updateHash:false});});
  function renderFilters(){
    $('filters').innerHTML=data.categories.map(c=>`<button class="filter-btn" type="button" aria-pressed="${c===filter}" data-category="${esc(c)}">${esc(c)}</button>`).join('');
    $('filters').querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{filter=btn.dataset.category;renderFilters();renderProjects();}));
  }
  function link(item){
    if(safeUrl(item.douban))return `<a target="_blank" rel="noopener noreferrer" href="${esc(item.douban)}" aria-label="在豆瓣查看《${esc(item.title)}》">豆瓣详情 ↗</a>`;
    if(safeUrl(item.doubanSearch))return `<a target="_blank" rel="noopener noreferrer" class="unverified" href="${esc(item.doubanSearch)}" title="尚未确认图书详情页，此处仅打开搜索结果">豆瓣搜索 ↗</a>`;
    return `<span class="unverified">豆瓣链接待核对</span>`;
  }
  function renderProjects(){
    const chosen=data.projects.filter(p=>filter==='全部'||p.category===filter);
    $('projects-grid').innerHTML=chosen.map((p,i)=>`<article class="project-card">
      <button class="card-cover" type="button" data-project="${esc(p.id)}" aria-label="展开《${esc(p.title)}》项目档案"><img alt="《${esc(p.title)}》图书封面" loading="eager" src="${esc(p.cover)}"></button>
      <div class="card-index"><span>${esc(p.category)}</span><span>${esc(p.year)}</span></div>
      <h3>${esc(p.title)}</h3><p class="project-subtitle">${esc(p.subtitle||' ')}</p><p class="project-summary">${esc(p.summary)}</p>
      <div class="achievement"><strong>成绩 /</strong><em>${esc(p.result||'待补充（销量、榜单、获奖等）')}</em></div>
      <div class="card-actions"><button type="button" data-project="${esc(p.id)}">查看项目档案 →</button>${link(p)}</div>
    </article>`).join('');
    $('project-count').textContent=`${chosen.length} / ${data.projects.length} PUBLICATIONS · END OF FILE`;
    $('projects-grid').querySelectorAll('button[data-project]').forEach(btn=>btn.addEventListener('click',()=>{
      const p=data.projects.find(x=>x.id===btn.dataset.project);if(p)openProject(p);
    }));
  }
  function openDialog(){lastFocus=document.activeElement;if(typeof $('detail-dialog').showModal==='function')$('detail-dialog').showModal();else $('detail-dialog').setAttribute('open','');$('dialog-close').focus();document.body.style.overflow='hidden';}
  function closeDialog(){if(typeof $('detail-dialog').close==='function')$('detail-dialog').close();else $('detail-dialog').removeAttribute('open');document.body.style.overflow='';if(lastFocus?.focus)lastFocus.focus();}
  $('dialog-close').addEventListener('click',closeDialog);
  $('detail-dialog').addEventListener('click',e=>{if(e.target===$('detail-dialog'))closeDialog()});
  $('detail-dialog').addEventListener('close',()=>{document.body.style.overflow='';if(lastFocus?.focus)lastFocus.focus()});
  function field(value,placeholder){return value?`<p>${esc(value)}</p>`:`<p class="detail-placeholder">${esc(placeholder)}</p>`;}
  function openProject(p){
    $('detail-content').innerHTML=`<div class="detail-grid"><div><img class="detail-cover" src="${esc(p.cover)}" alt="《${esc(p.title)}》封面"></div><div>
       <p class="eyebrow">PROJECT / ${esc(p.category)} · ${esc(p.year)}</p><h2 class="detail-title" id="detail-title">${esc(p.title)}</h2><div class="detail-sub">${esc(p.subtitle)}</div><p class="detail-summary">${esc(p.summary)}</p>
       <div class="detail-block"><h3>01 / 我的职责</h3>${field(p.role,'待补充：负责的具体环节与工作边界。')}</div>
       <div class="detail-block"><h3>02 / 项目判断</h3>${field(p.insight,'待补充：为什么选择它？项目最重要的判断或取舍是什么？')}</div>
       <div class="detail-block"><h3>03 / 具体工作</h3>${field(p.work,'待补充：你真正推动或解决的问题，不强行拆成几项固定流程。')}</div>
       <div class="detail-block"><h3>04 / 作品成绩</h3>${field(p.result,'待补充：销售表现、重印、奖项、媒体评价、榜单等可核实结果。')}</div>
       ${safeUrl(p.douban)?`<a class="detail-link" href="${esc(p.douban)}" target="_blank" rel="noopener noreferrer">前往豆瓣图书页 ↗</a>`:safeUrl(p.doubanSearch)?`<a class="detail-link" href="${esc(p.doubanSearch)}" target="_blank" rel="noopener noreferrer">在豆瓣搜索该书 ↗</a>`:''}
       <div class="detail-notice">个人工作与业绩尚待核实填写；页面不将示例文字当作工作成果。</div>
      </div></div>`;openDialog();
  }
  function renderArticles(){
    $('article-list').innerHTML=data.articles.map(a=>`<button type="button" class="article-item" data-article="${esc(a.id)}"><div class="article-meta"><span>${esc(a.tag)}</span><span>${esc(a.date)}</span></div><div><h3 class="article-heading">${esc(a.title)}</h3><p class="article-excerpt">${esc(a.excerpt)}</p></div><span class="article-arr">↗</span></button>`).join('');
    $('article-list').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
      const a=data.articles.find(x=>x.id===b.dataset.article);if(!a)return;
      $('detail-content').innerHTML=`<div class="article-dialog"><p class="eyebrow">THE NOTEBOOK / ${esc(a.tag)}</p><h2 class="detail-title" id="detail-title">${esc(a.title)}</h2><p class="detail-sub">${esc(a.date)}</p>${a.paragraphs.map(line=>`<p>${esc(line)}</p>`).join('')}${a.demo?'<p class="detail-notice">此文章为演示占位稿，尚非真实公开作品。</p>':''}</div>`;openDialog();
    }));
  }
  $('about-timeline').innerHTML=data.about.timeline.map(x=>`<div class="timeline-item"><span class="timeline-year">${esc(x.year)}</span><div><strong>${esc(x.name)}</strong><p>${esc(x.detail)}</p></div></div>`).join('');
  const email=data.site.email||'',label=data.site.socialLabel||'',url=data.site.socialUrl||'';
  const emailOK=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const urlOK=/^https?:\/\//.test(url);
  $('contact-area').innerHTML=(emailOK?`<a class="contact-email" href="mailto:${esc(email)}">${esc(email)} ↗</a>`:'<p class="contact-pending">联系方式暂未填写 · 即将开放</p>')+(label&&urlOK?`<p><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a></p>`:'');
  renderFilters();renderProjects();renderArticles();
  const start=location.hash.slice(1);if(ids.includes(start))goto(start,{updateHash:false});
})();
