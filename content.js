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
    projectsFootnote: '以代表性项目优先排序，按原作语言可筛选（不代表本人独立承担该书全部原文工作）。印次、奖项等是团队及作品成果；职责仅写有履历或公开署名支持的部分。部分书目的具体个人分工仍待补充。'
  },
  categories: ['全部作品', '法语原作', '英语原作', '待核实'],
  projects: [
    {id:'consumer',title:'制造消费者', subtitle:'消费主义全球史',category:'社会与文化',year:'2022',cover:'assets/covers/s34236568.jpg',douban:'https://book.douban.com/subject/35921760/',summary:'从商业、商品和社会想象出发，回望消费社会的形成。',roleShort:"内容产品案例 · 投资论证",resultShort:"14印 · 2022年度书单",language:"fr",role:"代表内容产品项目；个人在策划、编辑环节的具体分工仍待补充项目记录。",insight:"以消费社会的形成机制为切入口，将社会学、商业史和日常生活经验连接起来，兼顾知识门槛与市场可读性。",work:"作为工作室的代表性市场案例，被纳入集团创新创业项目申报及答辩材料；相关项目中负责核心方案、市场分析撰写及现场沟通。",result:"上市首月3印；截至简历整理时累计14印；入选豆瓣2022年度图书、汇丰·财新年度书单及《出版人》年度致敬图书等。"},
    {id:'distinction',title:'品味与阶层',subtitle:'漫画解读布尔迪厄的区分理论',category:'漫画与生活',year:'2026',cover:'assets/covers/s35546014.jpg',douban:'https://book.douban.com/subject/37491978/',summary:'以漫画形式进入品味、区分与社会阶层的议题。',roleShort:"主策划 · 印前编辑",resultShort:"2026.08已4印",language:"fr",role:"主策划；负责印前策划与编辑，未参与后续印刷、发行及宣推执行。",insight:"选择以漫画形式解读布尔迪厄的《区分》，在理论深度、阅读趣味与大众传播之间建立通路。",work:"完成选题策划、印前全部文字工作，包括书上的文案；撰写供宣传发行使用的新书信息表，整理卖点、推荐语等核心素材。",result:"2026年6月上市；截至2026年8月已4印（为作品成绩，不代表个人独立销售贡献）。"},
    {id:'oldgirl',title:'老女孩',subtitle:'另一种生活方式',category:'社会与文化',year:'2025',cover:'assets/covers/s35024573.jpg',douban:'https://book.douban.com/subject/37132581/',summary:'从个人经验展开对女性独身生活与自主选择的讨论。',roleShort:"整合营销 · IP运营",resultShort:"4印 · 80家书店联展",language:"fr",role:"整合营销与IP延伸策划；其他编辑职责待补充。",insight:"围绕独身生活与自主选择议题，将图书文本延伸为能引发讨论的线下公共事件。",work:"发起并策划覆盖全国80家独立书店的主题联展，同时延伸IP形象、表情包、文创和市集/展览物料，串联内容包装与活动落地。",result:"截至简历整理时4印；全国80家独立书店参与联展（后者为活动覆盖，不是销量）。"},
    {id:'authenticity',title:'我们为何迷恋真实',subtitle:'',category:'社会与文化',year:'2025',cover:'assets/covers/s35261475.jpg',douban:'https://book.douban.com/subject/37563515/',summary:'探讨当代文化如何制造、消费并追逐“真实”。',roleShort:"出版项目 · 分工待核",resultShort:"2印",language:"en",role:"图书编辑出版项目；具体个人分工待依据项目档案补充。",insight:"围绕当代社会对“真实”的追逐，从个人叙事进入社交平台与文化消费的讨论。",work:"项目过程材料待整理；暂不将图书内容介绍写作个人编辑贡献。",result:"截至简历整理时2印。"},
    {id:'lisbon',title:'海洋女王',subtitle:'里斯本的历史',category:'历史与纪实',year:'2024',cover:'assets/covers/s34934607.jpg',douban:'https://book.douban.com/subject/36839194/',summary:'从一座海港城市出发，观察葡萄牙的漫长历史。',roleShort:"英语原版 · 署名合译",resultShort:"2024年正式出版",language:"en",role:"署名合译者（与马雅合作）；跨文化内容处理。",insight:"以城市为入口理解葡萄牙与全球历史，将一部英语原版历史著作转化为中文读者能够进入的阅读体验。",work:"参与《海洋女王：里斯本的历史》的中文翻译，正式出版物署名可核验；翻译章节及个人负责范围待补充。",result:"2024年由广东人民出版社出版；译者署名可见于出版物及公开图书资料。"},
    {id:'behind',title:'幕后之人',subtitle:'社交媒体时代的内容审核',category:'传媒与商业',year:'2023',cover:'assets/covers/s34527520.jpg',douban:'https://book.douban.com/subject/36209209/',summary:'揭示支撑社交媒体内容治理的隐形劳动与工作现实。',language:"en",role:"",insight:"",work:"",result:""},
    {id:'children',title:'小孩共和国',subtitle:'二战遗孤的社会实验',category:'历史与纪实',year:'2023',cover:'assets/covers/s34644378.jpg',douban:'https://book.douban.com/subject/36428048/',summary:'一段关乎战后儿童自治、教育理想与社会实验的历史。',language:"fr",role:"",insight:"",work:"",result:""},
    {id:'doctor',title:'欺骗世界的医生',subtitle:'“反疫苗运动之父”与一场医学骗局',category:'历史与纪实',year:'2024',cover:'assets/covers/s34891294.jpg',douban:'https://book.douban.com/subject/36831514/',summary:'关于医学争议、新闻调查与错误信息扩散的真实事件。',language:"en",role:"",insight:"",work:"",result:""},
    {id:'succession',title:'继承之战',subtitle:'',category:'传媒与商业',year:'2024',cover:'assets/covers/s34977070.jpg',douban:'https://book.douban.com/subject/36975859/',summary:'真实传媒帝国的商业控制权、家族关系与权力角逐。',language:"en",role:"",insight:"",work:"",result:""},
    {id:'badcity',title:'沉默之恶',subtitle:'天使之城的危险与权力',category:'历史与纪实',year:'2025',cover:'assets/covers/s35032263.jpg',douban:'https://book.douban.com/subject/37155170/',summary:'围绕权力、腐败与调查报道的非虚构叙事。',language:"en",role:"",insight:"",work:"",result:""},
    {id:'influencer',title:'制造大V',subtitle:'网红经济发展简史',category:'传媒与商业',year:'2026',cover:'assets/covers/s35512546.jpg',douban:'https://book.douban.com/subject/37491974/',summary:'把内容创作者、平台与商业化放入产业发展的脉络中。',language:"en",role:"",insight:"",work:"",result:""},
    {id:'heartbeat',title:'跳动的心',subtitle:'',category:'漫画与生活',year:'待核实',cover:'assets/covers/s35601976.jpg',douban:'',doubanSearch:'https://search.douban.com/book/subject_search?search_text=%E8%B7%B3%E5%8A%A8%E7%9A%84%E5%BF%83',summary:'以图像叙事记录亲密关系与孕育新生命的经历。',language:"pending",role:"",insight:"",work:"",result:""}
  ],
  proof: [
    {value:'8',unit:'种',label:'独立策划',detail:'从选题判断到产品方案'},
    {value:'20+',unit:'种',label:'责任编辑',detail:'复杂内容编辑与交付'},
    {value:'40+',unit:'种',label:'参与项目',detail:'跨职能、跨项目协同'}
  ],
  capabilities: [
    {name:'内容产品与市场判断',evidence:'《制造消费者》首月3印、累计14印；曾将代表产品的市场表现用于集团投资论证。',target:'consumer'},
    {name:'整合营销与 IP 运营',evidence:'《老女孩》全国80家独立书店联展，延伸IP、文创和展陈物料。',target:'oldgirl'},
    {name:'跨语言研究与译介',evidence:'法语原版选题能力；《海洋女王》英语原版署名合译。',target:'lisbon'},
    {name:'项目推进与商业方案',evidence:'工作室集团创新创业项目获400万元投资；负责方案核心内容、市场分析及答辩沟通。',target:'consumer'}
  ],
  articles: [],
  about: {
    headline:'提出问题，\n完成作品。',
    lead:'从复杂信息里找到值得做的选题，再把判断推进为能够上市、传播与被检验的内容产品。',
    description:'2020—2026年在广东人民出版社·万有引力工作室从事外版图书选题策划、编辑出版和项目运营，曾参与新媒体营销、校对、发行与宣传等环节。北京外国语大学英语专业本科、香港中文大学 New Media 理学硕士；英语专八优秀，法语用于原版选题与书面工作。',
    timeline:[
      {year:'2020—2026',name:'广东人民出版社 · 万有引力',detail:'图书选题策划、编辑出版、内容项目运营'},
      {year:'2018—2019',name:'香港中文大学',detail:'New Media · Master of Science'},
      {year:'2014—2018',name:'北京外国语大学',detail:'英语专业 · 法语第二外语'}
    ]
  }
};
