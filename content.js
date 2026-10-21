/*
 * PERSONAL ARCHIVE — 本地静态网站的内容文件
 * 修改书名、分类、成果、个人工作、文章文字等，都在这里完成。
 * 图片放 assets/covers/，并修改 cover 相对路径。
 * 空字符串表示尚未填写，不会虚构成就或把豆瓣评分写成个人成绩。
 */
window.SITE_CONTENT = {
  site: {
    displayName: 'play-it-cool',
    title: 'play-it-cool',
    identity: 'WORKS · NOTES · IN PROGRESS',
    intro: '这里保存参与完成的出版作品，也给尚在生长的观察、文字与创作留出位置。不设固定主题，也不赶着把每个念头写成结论。',
    email: '',
    socialLabel: '',
    socialUrl: '',
    projectsFootnote: '这里收录过往参与的出版项目。个人职责与作品成绩正在逐项核实和补充；书籍介绍本身不等于个人业绩。'
  },
  categories: ['全部', '社会与文化', '传媒与商业', '历史与纪实', '漫画与生活'],
  projects: [
    {id:'consumer',title:'制造消费者', subtitle:'消费主义全球史',category:'社会与文化',year:'2022',cover:'assets/covers/s34236568.jpg',douban:'https://book.douban.com/subject/35921760/',summary:'从商业、商品和社会想象出发，回望消费社会的形成。',role:'',insight:'',work:'',result:''},
    {id:'behind',title:'幕后之人',subtitle:'社交媒体时代的内容审核',category:'传媒与商业',year:'2023',cover:'assets/covers/s34527520.jpg',douban:'https://book.douban.com/subject/36209209/',summary:'揭示支撑社交媒体内容治理的隐形劳动与工作现实。',role:'',insight:'',work:'',result:''},
    {id:'children',title:'小孩共和国',subtitle:'二战遗孤的社会实验',category:'历史与纪实',year:'2023',cover:'assets/covers/s34644378.jpg',douban:'https://book.douban.com/subject/36428048/',summary:'一段关乎战后儿童自治、教育理想与社会实验的历史。',role:'',insight:'',work:'',result:''},
    {id:'doctor',title:'欺骗世界的医生',subtitle:'“反疫苗运动之父”与一场医学骗局',category:'历史与纪实',year:'2024',cover:'assets/covers/s34891294.jpg',douban:'https://book.douban.com/subject/36831514/',summary:'关于医学争议、新闻调查与错误信息扩散的真实事件。',role:'',insight:'',work:'',result:''},
    {id:'lisbon',title:'海洋女王',subtitle:'里斯本的历史',category:'历史与纪实',year:'2024',cover:'assets/covers/s34934607.jpg',douban:'https://book.douban.com/subject/36839194/',summary:'从一座海港城市出发，观察葡萄牙的漫长历史。',role:'',insight:'',work:'',result:''},
    {id:'succession',title:'继承之战',subtitle:'',category:'传媒与商业',year:'2024',cover:'assets/covers/s34977070.jpg',douban:'https://book.douban.com/subject/36975859/',summary:'真实传媒帝国的商业控制权、家族关系与权力角逐。',role:'',insight:'',work:'',result:''},
    {id:'oldgirl',title:'老女孩',subtitle:'另一种生活方式',category:'社会与文化',year:'2025',cover:'assets/covers/s35024573.jpg',douban:'https://book.douban.com/subject/37132581/',summary:'从个人经验展开对女性独身生活与自主选择的讨论。',role:'',insight:'',work:'',result:''},
    {id:'badcity',title:'沉默之恶',subtitle:'天使之城的危险与权力',category:'历史与纪实',year:'2025',cover:'assets/covers/s35032263.jpg',douban:'https://book.douban.com/subject/37155170/',summary:'围绕权力、腐败与调查报道的非虚构叙事。',role:'',insight:'',work:'',result:''},
    {id:'authenticity',title:'我们为何迷恋真实',subtitle:'',category:'社会与文化',year:'2026',cover:'assets/covers/s35261475.jpg',douban:'https://book.douban.com/subject/37563515/',summary:'探讨当代文化如何制造、消费并追逐“真实”。',role:'',insight:'',work:'',result:''},
    {id:'influencer',title:'制造大V',subtitle:'网红经济发展简史',category:'传媒与商业',year:'2026',cover:'assets/covers/s35512546.jpg',douban:'https://book.douban.com/subject/37491974/',summary:'把内容创作者、平台与商业化放入产业发展的脉络中。',role:'',insight:'',work:'',result:''},
    {id:'distinction',title:'品味与阶层',subtitle:'读懂布尔迪厄的文化社会学',category:'漫画与生活',year:'2026',cover:'assets/covers/s35546014.jpg',douban:'https://book.douban.com/subject/37491978/',summary:'以漫画形式进入品味、区分与社会阶层的议题。',role:'',insight:'',work:'',result:''},
    {id:'heartbeat',title:'跳动的心',subtitle:'',category:'漫画与生活',year:'待核实',cover:'assets/covers/s35601976.jpg',douban:'',doubanSearch:'https://search.douban.com/book/subject_search?search_text=%E8%B7%B3%E5%8A%A8%E7%9A%84%E5%BF%83',summary:'以图像叙事记录亲密关系与孕育新生命的经历。',role:'',insight:'',work:'',result:''}
  ],
  articles: [],
  about: {
    headline:'保持好奇，\n也留下证据。',
    lead:'喜欢追问问题背后的结构，也在练习让思考成为能够被看见的作品。',
    description:'本科毕业于北京外国语大学英语专业，取得香港中文大学 New Media 理学硕士学位。曾在出版机构从事约六年外版人文社科图书引进与编辑工作。',
    timeline:[
      {year:'2018—2026',name:'外版图书引进与编辑',detail:'人文社科 · 内容研究与出版项目'},
      {year:'硕士',name:'香港中文大学',detail:'New Media · Master of Science'},
      {year:'本科',name:'北京外国语大学',detail:'英语专业 · 法语第二外语'}
    ]
  }
};
