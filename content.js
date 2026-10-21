/*
 * PERSONAL ARCHIVE — 本地静态网站的内容文件
 * 修改书名、分类、成果、个人工作、文章文字等，都在这里完成。
 * 图片放 assets/covers/，并修改 cover 相对路径。
 * 空字符串表示尚未填写，不会虚构成就或把豆瓣评分写成个人成绩。
 */
window.SITE_CONTENT = {
  site: {
    displayName: '你的名字',
    title: '个人作品与研究',
    identity: 'EDITOR · RESEARCHER · WRITER',
    intro: '六年外版人文社科图书编辑经历。这里保存已经成为实物的作品，也收集尚在生长的想法。',
    email: '',
    socialLabel: '',
    socialUrl: '',
    projectsFootnote: '书封为过往提供的真实出版物图片。个人职责及出版成绩尚待逐项核实、补写；书籍介绍不代表个人业绩。'
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
  articles: [
    {id:'note-1',tag:'阅读与出版',date:'内容待补充',title:'一本好书，为什么未必是一个好选题？',excerpt:'文学价值、知识价值和出版价值，未必是重叠的标准。',paragraphs:['【示例文章】此处仅作版式测试，并非正式发表的文章。','一本书值得阅读，与一本书值得出版，是两个不同的问题。对受众、时机、竞品和呈现方式的判断，会改变编辑决策。'],demo:true},
    {id:'note-2',tag:'叙事研究',date:'内容待补充',title:'故事在什么时候让人想看下一章？',excerpt:'从章节结尾的悬念，到人物关系的渐进变化。',paragraphs:['【示例文章】此处仅作版式测试，并非正式发表的文章。','叙事不只是发生了什么，也包括作者在何时交代、保留或改变某条信息。'],demo:true},
    {id:'note-3',tag:'个人札记',date:'内容待补充',title:'把想法留在现实里',excerpt:'如果问题有答案，那么这些答案能否留下一点可见的痕迹？',paragraphs:['【示例文章】此处仅作版式测试，并非正式发表的文章。','这份个人档案是一种实验：尝试把分散的阅读、工作与思考，整理成能够被检索、被分享、被延续的成果。'],demo:true}
  ],
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
