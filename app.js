(() => {
  'use strict';
  const data=window.SITE_CONTENT;
  const $=id=>document.getElementById(id);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeUrl=v=>typeof v==='string'&&/^https:\/\/(book|search)\.douban\.com\//.test(v)?v:'';
  const ids=['home','works','writing','about','contact'];
  const titles=['INTRODUCTION / 个人档案','PUBLICATIONS / 出版作品','WRITING / 文字','PROFILE / 关于','CONTACT / 联系'];
  let active='home',filter='全部作品',lastFocus=null;
  if(!data)return;
  document.title=`${data.site.title}｜Personal Archive`;
  $('site-intro').textContent=data.site.intro;
  $('projects-notice').textContent=data.site.projectsFootnote;
  $('footer-year').textContent=new Date().getFullYear();
  $('footer-name').textContent=data.site.displayName;
  $('about-headline').textContent=data.about.headline;
  $('about-lead').textContent=data.about.lead;
  $('about-description').textContent=data.about.description;
  const languageLabels={fr:'法语原作',en:'英语原作',pending:'原作待核实'};
  const categoryToLanguage={'全部作品':null,'法语原作':'fr','英语原作':'en','待核实':'pending'};
  $('proof-ribbon').innerHTML=data.proof.map(x=>`<div class="proof-stat"><div class="proof-value">${esc(x.value)}<span>${esc(x.unit)}</span></div><strong>${esc(x.label)}</strong><p>${esc(x.detail)}</p></div>`).join('');
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
    const chosen=data.projects.filter(p=>!categoryToLanguage[filter]||p.language===categoryToLanguage[filter]);
    $('projects-grid').innerHTML=chosen.map((p,i)=>`<article class="project-card">
      <button class="card-cover" type="button" data-project="${esc(p.id)}" aria-label="展开《${esc(p.title)}》项目档案"><img alt="《${esc(p.title)}》图书封面" loading="eager" src="${esc(p.cover)}"></button>
      <div class="card-index"><span>${esc(languageLabels[p.language]||p.category)}</span><span>${esc(p.year)}</span></div>
      <h3>${esc(p.title)}</h3>${p.roleShort?`<p class="project-role">${esc(p.roleShort)}</p>`:''}<p class="project-subtitle">${esc(p.subtitle||' ')}</p><p class="project-summary">${esc(p.summary)}</p>
      ${p.result?`<div class="achievement"><strong>成绩 /</strong><em>${esc(p.resultShort||p.result)}</em></div>`:`<div class="achievement achievement-pending"><strong>档案 /</strong><em>个人分工待补录</em></div>`}
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
  function fieldBlock(number,label,value){return value?`<div class="detail-block"><h3>${number} / ${label}</h3><p>${esc(value)}</p></div>`:'';}
  function openProject(p){
    $('detail-content').innerHTML=`<div class="detail-grid"><div><img class="detail-cover" src="${esc(p.cover)}" alt="《${esc(p.title)}》封面"></div><div>
       <p class="eyebrow">PROJECT / ${esc(languageLabels[p.language]||p.category)} · ${esc(p.year)}</p><h2 class="detail-title" id="detail-title">${esc(p.title)}</h2><div class="detail-sub">${esc(p.subtitle)}</div><p class="detail-summary">${esc(p.summary)}</p>
       ${fieldBlock('01','我的职责',p.role)}
       ${fieldBlock('02','项目判断',p.insight)}
       ${fieldBlock('03','具体工作',p.work)}
       ${fieldBlock('04','作品成绩',p.result)}
       ${safeUrl(p.douban)?`<a class="detail-link" href="${esc(p.douban)}" target="_blank" rel="noopener noreferrer">前往豆瓣图书页 ↗</a>`:safeUrl(p.doubanSearch)?`<a class="detail-link" href="${esc(p.doubanSearch)}" target="_blank" rel="noopener noreferrer">在豆瓣搜索该书 ↗</a>`:''}
       <div class="detail-notice">${p.role?'作品成绩为团队或图书成果，不应等同个人独立贡献。信息据本人履历及公开出版资料整理。':'这本书的个人分工尚未整理完毕，暂不将内容介绍当作个人工作业绩。'}</div>
      </div></div>`;openDialog();
  }
  function renderArticles(){
    if (!data.articles.length) {
      $('article-list').innerHTML='<div class="writing-empty"><span>FILE 000 / TO BE WRITTEN</span><h3>这里暂时没有公开的文字。</h3><p>一些碎片、随笔和完整的创作，会慢慢在这里归档。</p></div>';
      return;
    }
    $('article-list').innerHTML=data.articles.map(a=>`<button type="button" class="article-item" data-article="${esc(a.id)}"><div class="article-meta"><span>${esc(a.tag)}</span><span>${esc(a.date)}</span></div><div><h3 class="article-heading">${esc(a.title)}</h3><p class="article-excerpt">${esc(a.excerpt)}</p></div><span class="article-arr">↗</span></button>`).join('');
    $('article-list').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
      const a=data.articles.find(x=>x.id===b.dataset.article);if(!a)return;
      $('detail-content').innerHTML=`<div class="article-dialog"><p class="eyebrow">THE NOTEBOOK / ${esc(a.tag)}</p><h2 class="detail-title" id="detail-title">${esc(a.title)}</h2><p class="detail-sub">${esc(a.date)}</p>${a.subtitle?`<p><em>${esc(a.subtitle)}</em></p>`:''}${a.paragraphs.map(line=>`<p>${esc(line).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</p>`).join('')}${a.demo?'<p class="detail-notice">此文章为演示占位稿，尚非真实公开作品。</p>':''}</div>`;openDialog();
    }));
  }
  $('about-timeline').innerHTML=data.about.timeline.map(x=>`<div class="timeline-item"><span class="timeline-year">${esc(x.year)}</span><div><strong>${esc(x.name)}</strong><p>${esc(x.detail)}</p></div></div>`).join('');
  const email=data.site.email||'',label=data.site.socialLabel||'',url=data.site.socialUrl||'';
  const emailOK=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const urlOK=/^https?:\/\//.test(url);
  $('contact-area').innerHTML=(emailOK?`<a class="contact-email" href="mailto:${esc(email)}">${esc(email)} ↗</a>`:'<p class="contact-pending">如果你是从我的简历来到这里，请通过简历所留渠道联系我。</p>')+(label&&urlOK?`<p><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a></p>`:'');
  $('capability-list').innerHTML=data.capabilities.map((c,i)=>{
    const body=`<span class="capability-num">${String(i+1).padStart(2,'0')}</span><span class="capability-body"><strong>${esc(c.name)}</strong><span>${esc(c.evidence)}</span></span><span class="capability-arrow">${c.target?'↗':'·'}</span>`;
    return c.target
      ?`<button type="button" class="capability-item" data-proof-target="${esc(c.target)}" aria-label="查看${esc(c.name)}对应的出版项目">${body}</button>`
      :`<div class="capability-item capability-static">${body}</div>`;
  }).join('');
  $('capability-list').addEventListener('click',e=>{const btn=e.target.closest('[data-proof-target]');if(!btn)return;const p=data.projects.find(x=>x.id===btn.dataset.proofTarget);if(p)openProject(p);});
  document.querySelectorAll('[data-featured-project]').forEach(btn=>btn.addEventListener('click',()=>{const p=data.projects.find(x=>x.id===btn.dataset.featuredProject);if(p)openProject(p);}));
  renderFilters();renderProjects();renderArticles();
  const start=location.hash.slice(1);if(ids.includes(start))goto(start,{updateHash:false});
})();
