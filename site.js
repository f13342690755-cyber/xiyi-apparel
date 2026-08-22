const contact = {
  phone: "+86 135 5666 9879",
  phoneRaw: "+8613556669879",
  email: "f13712167325@gmail.com",
  whatsapp: "8613556669879",
  addressEn: "Room 801, Building 1, Laser Valley, No. 58 Zhongxing Road, Beizha Village, Humen Town, Dongguan, Guangdong, China",
  addressZh: "广东省东莞市虎门镇北栅村中兴路58号激光谷1号楼801室"
};

const products = [
  {
    id: "hoodies",
    navEn: "Custom Hoodies",
    navZh: "卫衣定制",
    titleEn: "Custom Hoodies & Sweatshirts",
    titleZh: "卫衣 / 套头衫定制",
    image: "assets/products/hoodies/washed-oversized-boxy-hoodie/01-front-black.webp",
    shortEn: "Pullover hoodies, zip hoodies, crewnecks, sets, rib details, drawcords, printing and embroidery.",
    shortZh: "套头卫衣、拉链卫衣、圆领卫衣、套装、罗纹、抽绳、印花和刺绣。",
    detailsEn: "Suitable for brand drops, streetwear collections, team programs and repeatable casualwear orders.",
    detailsZh: "适合品牌上新、街头休闲系列、团队项目和可持续返单的休闲男装订单。",
    tagsEn: ["Fleece", "French terry", "Embroidery", "Puff print"],
    tagsZh: ["抓绒", "毛圈", "刺绣", "发泡印花"],
    styles: [
      ["Washed heavyweight oversized hoodie", "重磅宽松洗水连帽卫衣", "assets/products/hoodies/washed-oversized-boxy-hoodie/01-front-black.webp"],
      ["Washed deconstructed panel hoodie", "水洗解构拼接连帽卫衣", "assets/products/hoodies/deconstructed-panel-washed-hoodie/01-front-view.webp"],
      ["Raw-edge washed patchwork hoodie", "毛边水洗拼接连帽卫衣", "assets/products/hoodies/washed-distressed-panel-hoodie/01-front-view.webp"],
      ["Graphite gray reconstructed hoodie", "石墨灰解构做旧连帽卫衣", "assets/products/hoodies/gray-distressed-panel-hoodie/01-front-view.webp"],
      ["Acid wash destroyed patchwork hoodie", "酸洗磨破拼接做旧连帽卫衣", "assets/products/hoodies/black-gray-destroyed-distressed-hoodie/01-front-view.webp"],
      ["Red streetwear oversized zip hoodie", "红色街头宽松拉链连帽卫衣", "assets/products/hoodies/red-oversized-zip-hoodie/01-model-collage.webp"]
    ]
  },
  {
    id: "tshirts",
    navEn: "Custom T-Shirts",
    navZh: "T恤定制",
    titleEn: "Custom T-Shirts & Polo Shirts",
    titleZh: "T恤 / Polo 衫定制",
    image: "assets/products/tshirts/series-washed-heavyweight-tshirt/01-blue-model-front.webp",
    shortEn: "Basic tees, graphic tees, polo shirts, color programs, labels and logo craft placement.",
    shortZh: "基础T恤、图案T恤、Polo衫、颜色系列、领标和Logo工艺位置。",
    detailsEn: "A practical category for brand basics, e-commerce drops, private-label programs and repeat production.",
    detailsZh: "适合品牌基础款、跨境上新、品牌贴牌和稳定返单的基础品类。",
    tagsEn: ["Cotton jersey", "Polo", "Screen print", "Private label"],
    tagsZh: ["针织棉", "Polo", "丝网印", "贴牌"],
    styles: [
      ["Washed heavyweight T-shirt series", "水洗重磅T恤系列", "assets/products/tshirts/series-washed-heavyweight-tshirt/01-blue-model-front.webp"],
      ["Vintage colorblock washed T-shirt", "复古水洗拼色T恤", "assets/products/tshirts/vintage-washed-colorblock-tshirt/04-olive-model-front.webp"],
      ["Garage car heavyweight T-shirt", "车库汽车主题重磅T恤", "assets/products/tshirts/vintage-garage-car-heavyweight-tshirt/01-main-front.webp"],
      ["Urban archive graphic T-shirt", "城市档案图案T恤", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/01-black-model-front-back.webp"],
      ["Art association back graphic T-shirt", "艺术协会后背图案T恤", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/01-black-model-back.webp"],
      ["Vintage motor club T-shirt", "复古机车俱乐部T恤", "assets/products/tshirts/vintage-motor-club-tshirt/01-navy-model-front-back.webp"],
      ["Smoke gray tech graphic T-shirt", "烟灰色科技图案T恤", "assets/products/tshirts/smoke-gray-tech-graphic-tshirt/01-front-view.webp"],
      ["Vintage cream analog signal T-shirt", "奶油白模拟信号T恤", "assets/products/tshirts/vintage-cream-analog-signal-tshirt/01-front-view.webp"],
      ["White portrait back graphic T-shirt", "白色后背人物大图T恤", "assets/products/tshirts/white-portrait-back-graphic-tshirt/01-front-view.webp"],
      ["Dark streetwear heavyweight T-shirt", "暗黑街头重磅T恤", "assets/products/tshirts/dark-streetwear-heavyweight-tshirt/01-front-view.png"],
      ["Vintage black gray heavyweight T-shirt", "复古黑灰重磅T恤", "assets/products/tshirts/vintage-black-gray-heavyweight-tshirt/01-front-view.png"],
      ["Music tour heavyweight T-shirt", "音乐巡演重磅T恤", "assets/products/tshirts/music-tour-heavyweight-tshirt/01-front-view.jpg"],
      ["American vintage acid wash T-shirt", "美式复古酸洗T恤", "assets/products/tshirts/american-vintage-acid-wash-tshirt/01-front-view.jpg"],
      ["Black serpent sun badge T-shirt", "黑巨蛇太阳徽章T恤", "assets/products/tshirts/black-serpent-sun-badge-tshirt/01-front-view.jpg"],
      ["Distressed gothic hardware T-shirt", "破洞哥特重工T恤", "assets/products/tshirts/distressed-gothic-hardware-tshirt/01-front-view.jpg"],
      ["Studded fake two-piece T-shirt", "铆钉假两件T恤", "assets/products/tshirts/studded-fake-two-piece-tshirt/01-front-view.jpg"],
      ["Cyberpunk heavyweight T-shirt", "赛博朋克重磅T恤", "assets/products/tshirts/cyberpunk-heavyweight-tshirt/01-front-view.png"],
      ["Washed charcoal hooded camo logo T-shirt", "水洗炭黑迷彩Logo短袖连帽T恤", "assets/products/tshirts/washed-charcoal-camo-logo-hooded-tshirt/01-front-view.webp"]
    ]
  },
  {
    id: "sweatpants",
    navEn: "Custom Sweatpants",
    navZh: "卫裤定制",
    titleEn: "Custom Sweatpants & Casual Pants",
    titleZh: "卫裤 / 休闲裤定制",
    image: "review-assets/pdf-images/menswear-p14-104-588x795.jpg",
    shortEn: "Joggers, sweatpants, shorts, elastic waistbands, drawcords, side panels and pocket details.",
    shortZh: "卫裤、束脚裤、短裤、松紧腰、抽绳、侧拼条和口袋细节。",
    detailsEn: "Good for coordinated hoodie sets, sports casual programs and fast repeat orders after sample approval.",
    detailsZh: "适合卫衣套装、运动休闲系列，以及样衣确认后的快速返单。",
    tagsEn: ["Joggers", "Elastic waist", "Side panel", "Wash effect"],
    tagsZh: ["束脚", "松紧腰", "侧拼", "水洗效果"],
    styles: [
      ["Flame logo wide-leg sweatpants", "火焰Logo宽腿卫裤", "assets/products/sweatpants/flame-logo-wide-leg-sweatpants/01-front-view.png"],
      ["Skull graphic wide-leg sweatpants", "骷髅图案宽腿卫裤", "assets/products/sweatpants/skull-graphic-wide-leg-sweatpants/01-front-view.png"],
      ["Side-panel sweatpants", "侧拼条卫裤", "review-assets/pdf-images/menswear-p14-104-588x795.jpg"],
      ["Casual jogger pants", "休闲束脚裤", "review-assets/pdf-images/menswear-p14-102-351x553.jpg"],
      ["Coordinated tracksuit bottom", "套装下装", "review-assets/pdf-images/menswear-p14-101-415x604.jpg"],
      ["Loose fit sweatpants", "宽松卫裤", "review-assets/pdf-images/menswear-p14-106-402x1148.jpg"],
      ["Elastic-waist casual pants", "松紧腰休闲裤", "review-assets/pdf-images/menswear-p15-113-471x628.jpg"],
      ["Wide-leg work pants", "宽松工装休闲裤", "review-assets/pdf-images/menswear-p15-118-744x743.jpg"]
    ]
  },
  {
    id: "teamwear",
    navEn: "Custom Teamwear",
    navZh: "球服定制",
    titleEn: "Custom Jerseys & Teamwear",
    titleZh: "球服 / 运动队服定制",
    image: "assets/company/jersey-teamwear.png",
    shortEn: "Team jerseys, breathable panels, color blocking, numbers, names, logos and performance fabric direction.",
    shortZh: "球衣队服、透气拼片、撞色裁片、号码、名字、Logo和运动面料方向。",
    detailsEn: "Built for clubs, corporate teams, events, street-sport capsules and customized uniform programs.",
    detailsZh: "适合俱乐部、企业团队、活动服、运动街头系列和定制服装项目。",
    tagsEn: ["Mesh fabric", "Numbers", "Color blocking", "Logo print"],
    tagsZh: ["网眼面料", "号码", "拼色", "Logo印花"],
    styles: [
      ["Green V-neck mesh team jersey", "绿色V领网眼球服", "assets/products/teamwear/green-v-neck-mesh-team-jersey/01-front-view.jpg"],
      ["Retro sport applique polo jersey", "复古运动贴布Polo球服", "assets/products/teamwear/retro-sport-applique-polo-jersey/01-front-view.png"],
      ["Blokecore football collar jersey", "Blokecore复古足球翻领球服", "assets/products/teamwear/blokecore-football-collar-jersey/01-front-view.jpg"],
      ["V-neck team jersey", "V领队服", "assets/company/jersey-teamwear.png"],
      ["Long-sleeve team top", "长袖队服上衣", "review-assets/pdf-images/menswear-p08-35-369x480.jpg"],
      ["Track jacket and pants set", "运动套装定制", "review-assets/pdf-images/menswear-p14-102-351x553.jpg"],
      ["All-over print sport tee", "满版印花运动T恤", "review-assets/pdf-images/menswear-p08-36-754x878.jpg"],
      ["Color-blocked track set", "撞色运动套装", "review-assets/pdf-images/menswear-p14-101-415x604.jpg"],
      ["Side-tape track suit", "织带运动套装", "review-assets/pdf-images/menswear-p14-110-261x513.jpg"]
    ]
  },
  {
    id: "baseball-jackets",
    navEn: "Baseball Jackets",
    navZh: "棒球服定制",
    titleEn: "Custom Baseball & Varsity Jackets",
    titleZh: "棒球服 / Varsity 外套定制",
    image: "review-assets/pdf-images/menswear-p11-68-689x785.jpg",
    shortEn: "Contrast sleeves, snap buttons, rib trims, patch embroidery, chenille effects and lining details.",
    shortZh: "撞色袖、四合扣、罗纹、章仔刺绣、毛巾绣效果和里布细节。",
    detailsEn: "A strong fit for brand statement pieces, school/team programs and complex craft development.",
    detailsZh: "适合品牌主推款、校队团队服，以及需要复杂工艺的外套开发。",
    tagsEn: ["Varsity", "Rib trim", "Patch", "Embroidery"],
    tagsZh: ["棒球服", "罗纹", "章仔", "刺绣"],
    styles: [
      ["Patch varsity jacket", "章仔棒球服", "review-assets/pdf-images/menswear-p11-68-689x785.jpg"],
      ["Contrast sleeve jacket", "撞色袖棒球服", "review-assets/pdf-images/menswear-p11-67-596x784.jpg"],
      ["Graphic varsity jacket", "图案棒球外套", "review-assets/pdf-images/menswear-p11-71-554x667.jpg"],
      ["College style jacket", "学院风棒球服", "review-assets/pdf-images/menswear-p11-72-637x713.jpg"],
      ["Hooded varsity jacket", "连帽棒球服", "review-assets/pdf-images/menswear-p09-51-683x775.jpg"],
      ["Grey patch varsity jacket", "灰色章仔棒球服", "review-assets/pdf-images/menswear-p11-66-477x750.jpg"]
    ]
  },
  {
    id: "jackets",
    navEn: "Jackets & Outerwear",
    navZh: "夹克外套",
    titleEn: "Custom Jackets & Outerwear",
    titleZh: "夹克 / 外套定制",
    image: "review-assets/pdf-images/menswear-p13-90-804x898.jpg",
    shortEn: "Zip jackets, work jackets, casual outerwear, lining, zippers, pockets and special fabric handling.",
    shortZh: "拉链夹克、工装外套、休闲外套、里布、拉链、口袋和特殊面料处理。",
    detailsEn: "Useful for higher-value orders that need material matching, construction review and quality control.",
    detailsZh: "适合面料匹配、结构确认和品质把控要求更高的外套订单。",
    tagsEn: ["Zip jacket", "Workwear", "Lining", "Special fabric"],
    tagsZh: ["拉链夹克", "工装", "里布", "特殊面料"],
    styles: [
      ["Corduroy zip jacket", "灯芯绒拉链夹克", "review-assets/pdf-images/menswear-p13-90-804x898.jpg"],
      ["Sherpa casual jacket", "羊羔绒休闲外套", "review-assets/pdf-images/menswear-p13-92-870x896.jpg"],
      ["Patch utility jacket", "章仔工装夹克", "review-assets/pdf-images/menswear-p13-89-822x855.jpg"],
      ["Quilted bomber jacket", "绗棉棒球夹克", "review-assets/pdf-images/menswear-p12-88-675x519.jpg"],
      ["Rib-collar casual jacket", "罗纹领休闲夹克", "review-assets/pdf-images/menswear-p13-91-750x888.jpg"],
      ["Washed utility jacket", "水洗工装外套", "review-assets/pdf-images/menswear-p13-95-632x646.jpg"]
    ]
  },
];

const productItems = [
  {
    id: "future-academy-heavyweight-oversized-hoodie",
    productId: "hoodies",
    categoryEn: "Custom Hoodies",
    categoryZh: "卫衣定制",
    titleEn: "Future Academy Heavyweight Oversized Hoodie",
    titleZh: "未来学院风重磅宽松连帽卫衣",
    image: "assets/products/hoodies/future-academy-heavyweight-hoodie/01-main-front.webp",
    shortEn: "420GSM brushed fleece hoodie with dropped shoulders, 3-panel hood, kangaroo pocket and front/back academy graphics.",
    shortZh: "420GSM 重磅抓绒连帽卫衣，落肩宽松版型、三片式立体帽、袋鼠口袋，前胸和后背学院建筑图案。",
    filters: ["hoodies", "oem", "custom", "test", "repeat", "heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "screen-print", "embroidery", "rib-trim"],
    tagsEn: ["420GSM fleece", "Oversized fit", "Screen print", "Embroidery option"],
    tagsZh: ["420GSM抓绒", "宽松版型", "丝网印花", "可做刺绣"],
    gallery: [
      ["Model front view", "模特正面", "assets/products/hoodies/future-academy-heavyweight-hoodie/01-main-front.webp"],
      ["Side fit view", "侧面版型", "assets/products/hoodies/future-academy-heavyweight-hoodie/02-side-view.webp"],
      ["Front and back artwork", "正反面图案", "assets/products/hoodies/future-academy-heavyweight-hoodie/03-front-back-flat.webp"],
      ["Heavy rib cuff detail", "加厚罗纹袖口", "assets/products/hoodies/future-academy-heavyweight-hoodie/04-rib-cuff-detail.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料结构", "Heavyweight cotton brushed fleece", "重磅棉抓绒卫衣布"],
      ["Composition", "面料成分", "80% cotton / 20% polyester", "80%棉 / 20%聚酯纤维"],
      ["Weight", "克重", "420GSM, recommended range 400-450GSM", "420GSM，建议范围 400-450GSM"],
      ["Fit", "版型", "Dropped shoulder, wide sleeve, boxy fit", "落肩、宽袖、箱型宽松版型"],
      ["Craft", "图案工艺", "Screen print, embroidery or chenille patch can be reviewed by artwork", "可按图案评估丝网印花、刺绣或毛巾绣贴布"]
    ],
    features: [
      ["Premium fleece structure", "重磅抓绒结构", "Smooth cotton face, dense knit body and brushed interior support a premium streetwear hand feel.", "表层平整棉面、中层高密织造、内层细腻抓绒，适合高级街头卫衣手感。"],
      ["Oversized pattern direction", "宽松版型方向", "Dropped shoulder, wider sleeve and boxy proportion help create the relaxed fit preferred by overseas streetwear customers.", "落肩、宽袖和箱型比例，适合海外街头潮牌客户偏好的宽松廓形。"],
      ["Structured hood and rib", "帽型与罗纹结构", "3-panel hood construction and heavy rib cuffs help the garment keep shape after repeated wear.", "三片式立体帽和加厚罗纹袖口，帮助成衣保持帽型和袖口回弹。"],
      ["Artwork craft options", "图案工艺选择", "Front artwork can use high-density screen print with local embroidery; back artwork can use heavier screen print or vintage crack print.", "前胸可做高密丝网印配局部刺绣，后背可做厚版丝网印或复古裂纹印效果。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "420 +/- 5% GSM", "420 +/- 5% GSM"],
      ["Shrinkage", "缩水率", "Target <= 5% after pre-shrink treatment", "预缩处理后目标 <= 5%"],
      ["Color fastness", "色牢度", "Target grade 4 or above", "目标 4 级以上"],
      ["Measurement tolerance", "尺寸公差", "+/- 1.5 cm reference, confirm by size chart", "参考 +/- 1.5cm，按尺码表确认"],
      ["Stitch density", "针距", "About 11 stitches per inch, confirmed by sample", "约 11 针/英寸，按样衣确认"],
      ["Finishing", "后整理", "Garment wash, softener and thread trimming can be confirmed before bulk", "成衣水洗、柔软处理和线头清理可在大货前确认"]
    ]
  },
  {
    id: "future-street-tech-zip-hoodie",
    productId: "hoodies",
    categoryEn: "Custom Hoodies",
    categoryZh: "卫衣定制",
    titleEn: "Future Street Tech Zip Hoodie",
    titleZh: "未来街头机能连帽拉链卫衣",
    image: "assets/products/hoodies/future-street-tech-zip-hoodie/01-main-front.webp",
    shortEn: "360GSM heavyweight cotton fleece zip hoodie with oversized drop-shoulder fit, metal full zip, structured hood and blue energy sleeve artwork.",
    shortZh: "360GSM 重磅纯棉抓绒拉链卫衣，落肩宽松版型、金属全开拉链、立体帽型和蓝色能量袖部图案。",
    filters: ["hoodies", "oem", "custom", "test", "repeat", "heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "zip-up", "screen-print", "embroidery", "garment-wash", "rib-trim"],
    tagsEn: ["360GSM fleece", "Zip hoodie", "Oversized fit", "Print / embroidery"],
    tagsZh: ["360GSM抓绒", "拉链连帽", "宽松版型", "印花/刺绣"],
    gallery: [
      ["Front zip hoodie view", "正面拉链卫衣", "assets/products/hoodies/future-street-tech-zip-hoodie/01-main-front.webp"],
      ["Back energy artwork", "后背能量图案", "assets/products/hoodies/future-street-tech-zip-hoodie/02-back-artwork.webp"],
      ["Rib cuff and sleeve print", "罗纹袖口与袖部印花", "assets/products/hoodies/future-street-tech-zip-hoodie/03-rib-cuff-detail.webp"],
      ["Chest embroidery and sleeve artwork", "胸前刺绣与袖子图案", "assets/products/hoodies/future-street-tech-zip-hoodie/04-chest-sleeve-craft.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料结构", "3-thread heavyweight cotton fleece", "三线重磅纯棉抓绒卫衣布"],
      ["Composition", "面料成分", "100% cotton recommended; 80% cotton / 20% polyester can be reviewed", "推荐 100% 棉；也可评估 80% 棉 / 20% 聚酯耐穿版本"],
      ["Weight", "克重", "360GSM, recommended range 320-420GSM", "360GSM，建议范围 320-420GSM"],
      ["Fit", "版型", "Oversized drop shoulder, wide sleeve and boxy proportion", "落肩宽肩、宽袖管、短宽箱型廓形"],
      ["Closure", "拉链", "No.5 metal full zip with reinforced stitching", "5号金属全开拉链，车线加固"],
      ["Hood", "帽子结构", "3-panel structured double-layer hood", "三片式立体双层帽"],
      ["Craft", "图案工艺", "Blue sleeve screen print, chest embroidery and optional 3D silicone print can be reviewed", "袖部蓝色丝网印花、胸前刺绣，可评估3D硅胶印花"],
      ["Finishing", "后整工艺", "Garment wash, enzyme wash or softener finish can be reviewed", "可评估成衣水洗、酵素洗或硅油柔软后整"]
    ],
    features: [
      ["Heavyweight fleece construction", "重磅抓绒结构", "A 3-thread fleece structure gives the garment a dense face, soft brushed interior and enough body for an oversized streetwear silhouette.", "三线抓绒结构让成衣表面更紧实、内里更柔软，并能支撑宽松街头廓形。"],
      ["Oversized streetwear fit", "宽松街头版型", "Dropped shoulders, wide sleeves and a short-wide proportion create the structured relaxed shape shown in the reference images.", "落肩、宽袖管和短宽比例，形成参考图中的结构感宽松廓形。"],
      ["Metal zip and structured hood", "金属拉链与立体帽", "The full front zipper, reinforced zipper stitching and 3-panel hood are key construction points to confirm during sampling.", "全开拉链、拉链加固车线和三片式帽型，是打样时需要确认的关键结构。"],
      ["Blue energy artwork route", "蓝色能量图案工艺", "Sleeve artwork can be reviewed for high-elastic screen print; raised silicone print can be discussed for a more premium streetwear effect.", "袖部图案可评估高弹丝网印花；如需更高级潮牌效果，也可讨论立体硅胶印花。"],
      ["Rib and washing finish", "罗纹与水洗后整", "Heavy 2x2 rib, garment wash, enzyme wash and softener finish can help improve hand feel, recovery and vintage surface effect.", "加厚2x2罗纹、成衣水洗、酵素洗和柔软后整，可帮助提升手感、回弹和复古表面效果。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "360GSM +/- 5%", "360GSM +/- 5%"],
      ["Shrinkage", "缩水率", "Target <= 5% after pre-shrink or wash test", "预缩或洗水测试后目标 <= 5%"],
      ["Color fastness", "色牢度", "Target grade 4 or above", "目标 4 级以上"],
      ["Pilling", "起球等级", "Target grade 3.5 or above", "目标 3.5 级以上"],
      ["Stitch density", "针距", "About 11-12 stitches per inch, confirmed by sample", "约 11-12 针/英寸，按样衣确认"],
      ["Rib recovery", "罗纹回弹", "Target recovery above 95%", "目标回弹 95% 以上"],
      ["Size standard", "尺码标准", "Oversized size chart confirmed before bulk production", "大货前确认宽松版尺码表"]
    ]
  },
  {
    id: "vintage-garage-car-heavyweight-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Vintage Garage Car Heavyweight T-Shirt",
    titleZh: "复古车库汽车主题重磅T恤",
    cardTitleEn: "Custom Vintage Garage Car Heavyweight T-Shirt with Distressed Screen Print",
    cardTitleZh: "定制复古车库汽车主题重磅T恤 / 做旧丝网印花",
    image: "assets/products/tshirts/vintage-garage-car-heavyweight-tshirt/01-main-front.webp",
    shortEn: "280GSM heavyweight cotton jersey T-shirt with oversized drop-shoulder fit, vintage garage car artwork, garment wash and distressed screen print direction.",
    shortZh: "280GSM 重磅棉单面汗布T恤，落肩宽松版型、复古车库汽车图案、成衣水洗和做旧丝网印花方向。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "embroidery", "rib-trim"],
    tagsEn: ["280GSM jersey", "Vintage wash", "Screen print", "Oversized fit"],
    tagsZh: ["280GSM汗布", "水洗做旧", "丝网印花", "宽松版型"],
    gallery: [
      ["Model front view", "模特正面", "assets/products/tshirts/vintage-garage-car-heavyweight-tshirt/01-main-front.webp"],
      ["Model back view", "模特背面", "assets/products/tshirts/vintage-garage-car-heavyweight-tshirt/02-back-view.webp"],
      ["Print, badge and fabric details", "印花、徽章和面料细节", "assets/products/tshirts/vintage-garage-car-heavyweight-tshirt/03-craft-details.webp"],
      ["Flat front product view", "正面平铺产品图", "assets/products/tshirts/vintage-garage-car-heavyweight-tshirt/04-flat-front.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料结构", "Heavyweight single jersey", "重磅单面汗布"],
      ["Composition", "面料成分", "100% combed cotton; organic cotton or open-end yarn can be reviewed", "100%精梳棉；可评估有机棉或复古气流纺棉"],
      ["Weight", "克重", "280GSM reference, range 260-320GSM", "280GSM参考，建议范围260-320GSM"],
      ["Fit", "版型", "Oversized drop shoulder, wide sleeve and slight boxy body", "落肩宽松、宽袖、微箱型衣身"],
      ["Craft", "图案工艺", "Water-based screen print, distressed crack print and small embroidery or chenille patch can be reviewed", "可评估水浆丝网印、裂纹做旧印、小面积刺绣或毛巾章"],
      ["Finishing", "后整工艺", "Heavy garment wash, enzyme wash and silicone softener can be reviewed", "可评估重水洗、酵素洗和硅油柔软处理"]
    ],
    features: [
      ["Heavyweight cotton jersey", "重磅棉汗布", "280GSM single jersey gives the T-shirt enough body for an oversized fit while keeping a natural cotton drape.", "280GSM 单面汗布能支撑宽松版型，同时保留自然棉质垂坠感。"],
      ["Vintage garage artwork", "复古车库汽车图案", "The garage car graphic can use water-based screen print with distressed or crack-print effects for a worn-in vintage look.", "车库汽车图案可采用水浆丝网印，并叠加做旧或裂纹印效果，形成复古穿旧感。"],
      ["Garment wash direction", "成衣水洗方向", "Heavy wash, enzyme wash and softener treatment can help reduce shrinkage, soften the surface and create a faded charcoal tone.", "重水洗、酵素洗和柔软处理可帮助降低缩水、改善手感，并形成炭灰褪色效果。"],
      ["Oversized construction", "宽松版型结构", "Dropped shoulder, wide sleeve, rib collar, shoulder tape and cover-stitch hem are key points to confirm before sampling.", "落肩、宽袖、罗纹领、肩带加固和下摆双针车，是打样前需要确认的结构重点。"],
      ["Premium detail options", "高级细节选择", "A small chest badge can be reviewed as chenille patch, embroidery or 3D puff embroidery depending on artwork and budget.", "胸前小徽章可按图稿和预算评估毛巾章、电脑刺绣或3D立体刺绣。"]
    ],
    quality: [
      ["Shrinkage", "缩水率", "Target <= 5% after wash test", "洗水测试后目标 <= 5%"],
      ["Color fastness", "色牢度", "Target grade 4 or above", "目标 4 级以上"],
      ["GSM tolerance", "克重误差", "Target +/- 5%", "目标 +/- 5%"],
      ["Neck shape", "领口变形", "No obvious deformation after repeated wash test", "多次洗涤后目标无明显变形"],
      ["Print durability", "印花牢度", "Print route confirmed by artwork and wash test", "按图稿和洗水测试确认印花牢度"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by size chart", "参考 +/- 1.5cm，按尺码表确认"]
    ]
  },
  {
    id: "track-code-tech-varsity-jacket",
    productId: "baseball-jackets",
    categoryEn: "Custom Varsity Jackets",
    categoryZh: "棒球服定制",
    titleEn: "Tech Code Chenille Varsity Jacket",
    titleZh: "科技线路毛巾绣棒球服",
    cardTitleEn: "Custom Tech Code Varsity Jacket with Chenille Patches and PU Sleeves",
    cardTitleZh: "定制科技线路棒球服 / 毛巾绣章仔与PU袖",
    image: "assets/products/baseball-jackets/track-code-tech-varsity-jacket/01-main-front.webp",
    shortEn: "Heavyweight oversized varsity jacket with wool-blend body, matte PU leather sleeves, chenille embroidery patches, striped rib and circuit-line sleeve craft direction.",
    shortZh: "重磅宽松棒球夹克，羊毛混纺大身、哑光PU仿皮袖、毛巾绣章仔、条纹罗纹和袖部线路图案工艺方向。",
    filters: ["baseball-jackets", "oem", "custom", "test", "repeat", "varsity-fit", "oversized", "contrast-sleeve", "rib-trim", "lined-jacket", "melton-wool", "leather-sleeve", "poly-lining", "rib-knit", "chenille-patch", "embroidery", "applique", "snap-button", "laser-emboss"],
    tagsEn: ["Wool blend body", "PU leather sleeves", "Chenille patch", "Laser emboss"],
    tagsZh: ["羊毛混纺", "PU仿皮袖", "毛巾绣章", "激光压花"],
    gallery: [
      ["Clean front product view", "白底正面产品图", "assets/products/baseball-jackets/track-code-tech-varsity-jacket/01-main-front.webp"],
      ["Back chenille artwork", "后背毛巾绣图案", "assets/products/baseball-jackets/track-code-tech-varsity-jacket/02-back-view.webp"],
      ["Sleeve circuit-line detail", "袖部线路图案细节", "assets/products/baseball-jackets/track-code-tech-varsity-jacket/03-sleeve-circuit-detail.webp"],
      ["Chenille embroidery detail", "毛巾绣字母细节", "assets/products/baseball-jackets/track-code-tech-varsity-jacket/04-chenille-embroidery-detail.webp"],
      ["Front view with texture background", "质感背景正面图", "assets/products/baseball-jackets/track-code-tech-varsity-jacket/05-front-texture-bg.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "10-20 days, confirmed by quantity and craft", "参考 10-20 天，按数量和工艺确认"],
      ["Body fabric", "大身面料", "70% wool / 30% polyester double-faced wool blend, 430-480 g/sqm reference", "70%羊毛 / 30%聚酯纤维双面呢，参考 430-480 g/㎡"],
      ["Sleeve fabric", "袖子面料", "Matte PU leather with polyester base, 320-360 g/sqm reference", "哑光PU仿皮，聚酯底基布，参考 320-360 g/㎡"],
      ["Lining", "里布", "High-density polyester plain lining, 70-90 g/sqm reference", "高密聚酯平纹里布，参考 70-90 g/㎡"],
      ["Padding", "填充层", "Light polyester padding, 60-80 g/sqm reference", "轻薄聚酯棉，参考 60-80 g/㎡"],
      ["Rib", "罗纹", "Polyester / spandex striped rib, 650-750 g/sqm reference", "聚酯 / 氨纶条纹罗纹，参考 650-750 g/㎡"],
      ["Fit", "版型", "Oversized drop shoulder varsity silhouette", "Oversized落肩棒球服廓形"],
      ["Craft", "图案工艺", "Chenille patch, applique base, dense embroidery edge, sleeve laser emboss with local flat embroidery can be reviewed", "可评估毛巾绣、贴布绣打底、高密平绣包边、袖部激光压花配局部平绣"],
      ["Closure", "门襟", "Metal snap buttons with reinforced placket stitching", "金属四合扣门襟，门襟压线加固"]
    ],
    features: [
      ["Heavy varsity structure", "重磅棒球服结构", "A wool-blend body, light padding and smooth polyester lining support an oversized fall-winter varsity jacket shape without making the garment too bulky.", "羊毛混纺大身、轻薄填充和干净里布，能支撑秋冬宽松棒球服廓形，同时避免成衣过厚。"],
      ["PU leather circuit sleeves", "PU袖线路图案", "For the circuit-line artwork, laser embossing plus local flat embroidery is a cleaner production route than dense full embroidery on PU sleeves.", "袖子线路图案建议用激光压花配局部平绣，比在PU袖上做高密全刺绣更平整。"],
      ["Layered chest patches", "多层胸章工艺", "The large front letter patch can use applique placement, chenille filling and dense embroidery edging to keep the outline clear after washing.", "前胸大字母可先贴布定位，再做毛巾绣填充和高密平绣包边，帮助轮廓更清晰耐洗。"],
      ["Back statement embroidery", "后背大面积绣花", "Back artwork can be reviewed as wide chenille lettering with double embroidery edging; the artwork width should be controlled before sampling.", "后背图案可评估大面积毛巾绣字母配双层包边，打样前需要控制图案宽度。"],
      ["Rib and placket details", "罗纹与门襟细节", "Striped collar, cuff and hem rib, metal snap placket, slanted pockets and reinforced seams are key points to confirm before bulk production.", "条纹领口袖口下摆罗纹、金属四合扣、斜插袋和加固缝位，是大货前需要确认的重点。"]
    ],
    quality: [
      ["Fabric matching", "面料匹配", "Body wool blend, PU sleeve, rib, lining and padding should be approved together before bulk", "大身、PU袖、罗纹、里布和填充建议组合确认后再做大货"],
      ["Patch placement", "章仔位置", "Chest patches and back lettering positions confirmed by sample and measurement points", "胸章和后背字母位置按样衣和定位尺寸确认"],
      ["PU sleeve craft", "PU袖工艺", "Laser embossing depth and embroidery density reviewed to reduce wrinkling and needle-hole concentration", "确认压花深度和刺绣密度，降低起皱和针孔集中风险"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by size chart", "参考 +/- 1.5cm，按尺码表确认"],
      ["Snap durability", "四合扣牢度", "Snap button pull force and placket reinforcement checked before bulk", "大货前确认四合扣拉力和门襟加固"],
      ["Finished weight", "成衣重量", "M size reference about 1.25-1.45 kg, confirmed by final material package", "M码参考约 1.25-1.45 kg，按最终面辅料组合确认"]
    ]
  },
  {
    id: "black-gray-patchwork-varsity-jacket",
    productId: "baseball-jackets",
    categoryEn: "Custom Varsity Jackets",
    categoryZh: "棒球服定制",
    titleEn: "Black & Gray Chenille Patch Varsity Jacket",
    titleZh: "黑灰拼接毛巾绣章仔棒球服",
    cardTitleEn: "Custom Black & Gray Varsity Jacket with Chenille Letter Patches",
    cardTitleZh: "定制黑灰拼接棒球服 / 毛巾绣字母章仔",
    image: "assets/products/baseball-jackets/black-gray-patchwork-varsity-jacket/01-main-front.webp",
    shortEn: "Black wool-blend body with gray matte PU sleeves, chenille front lettering, sleeve patches, vertical sleeve slogan and striped rib for custom varsity jacket programs.",
    shortZh: "黑色羊毛混纺大身配灰色哑光PU袖，前胸毛巾绣大字母、袖章、袖子竖向文字和黑白条纹罗纹，适合棒球服定制项目。",
    filters: ["baseball-jackets", "oem", "custom", "test", "repeat", "varsity-fit", "oversized", "contrast-sleeve", "rib-trim", "lined-jacket", "melton-wool", "leather-sleeve", "poly-lining", "rib-knit", "chenille-patch", "embroidery", "applique", "snap-button"],
    tagsEn: ["Melton wool blend", "Matte PU sleeves", "Chenille lettering", "Sleeve patches"],
    tagsZh: ["麦尔登羊毛混纺", "哑光PU袖", "毛巾绣大字母", "袖章系统"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/baseball-jackets/black-gray-patchwork-varsity-jacket/01-main-front.webp"],
      ["Back product view", "背面产品图", "assets/products/baseball-jackets/black-gray-patchwork-varsity-jacket/02-back-view.webp"],
      ["Rib cuff and patch details", "罗纹袖口与章仔细节", "assets/products/baseball-jackets/black-gray-patchwork-varsity-jacket/03-rib-patch-detail.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Body fabric", "大身面料", "Heavy Melton wool blend; 50% wool / 50% polyester or 70% wool / 30% polyester can be reviewed", "重磅麦尔登羊毛混纺；可评估50%羊毛/50%聚酯或70%羊毛/30%聚酯"],
      ["Body weight", "大身克重", "500-600GSM reference, 550GSM recommended for premium varsity structure", "参考500-600GSM，推荐550GSM做高级棒球服结构"],
      ["Sleeve fabric", "袖子面料", "Matte PU leather, 0.8-1.0mm reference with stable gray tone", "哑光PU仿皮，参考0.8-1.0mm，灰色稳定色调"],
      ["Lining", "里布", "Black 100% polyester taffeta lining, 210T / 230T reference", "黑色100%聚酯塔夫绸里布，参考210T / 230T"],
      ["Rib", "罗纹", "Heavy black-and-white striped rib, polyester / spandex blend", "黑白双色厚罗纹，聚酯/氨纶混纺"],
      ["Fit", "版型", "Oversized unisex varsity fit with drop shoulder and short body proportion", "Oversized中性棒球服版型，落肩、宽松胸围、短款比例"],
      ["Craft", "图案工艺", "Chenille embroidery, tackle twill, mixed embroidery sleeve patches and flat embroidery sleeve slogan can be reviewed", "可评估毛巾绣、贴布绣、袖章电脑绣和袖子文字高密平绣"],
      ["Closure", "门襟", "Matte black metal snap button closure, 15-17mm reference", "哑光黑金属四合扣，参考15-17mm"]
    ],
    features: [
      ["Wool body and PU sleeve panels", "羊毛大身与PU袖拼接", "The black wool-blend body and gray PU sleeves create a high-contrast varsity structure, with reinforced armhole seams to reduce bulk at thick joining points.", "黑色羊毛混纺大身和灰色PU袖形成强对比棒球服结构，袖窿拼接建议加固，减少厚料鼓包。"],
      ["Chenille front lettering", "前胸毛巾绣大字母", "The PLAYERS UNITE artwork can use chenille embroidery with tackle twill base and dense embroidery edging for a raised collectible look.", "PLAYERS UNITE图案可用贴布绣打底、毛巾绣主体和高密平绣包边，形成收藏级立体效果。"],
      ["Sleeve patch system", "袖章系统", "Achievement, level and champion patches can be reviewed as mixed embroidery patches with heat-cut edges and overlock finishing.", "成就章、等级章和冠军章可评估电脑绣混合章仔，热切边和锁边收口。"],
      ["Flat embroidery sleeve slogan", "袖子文字平绣", "The vertical sleeve slogan is better reviewed as high-density flat embroidery to keep cost stable and reduce stiffness on the PU sleeve.", "竖向袖子文字建议用高密平绣评估，成本稳定，也能减少PU袖弯曲位置僵硬。"],
      ["Rib, pocket and snap details", "罗纹、口袋与四合扣细节", "Striped rib, welt pockets with PU binding and matte snap buttons are key details to confirm before sampling.", "黑白条纹罗纹、PU包边斜插袋和哑光四合扣，是打样前需要确认的关键细节。"]
    ],
    quality: [
      ["Fabric tests", "面料测试", "GSM, color fastness, pilling, rubbing fastness and shrinkage should be reviewed before bulk", "大货前建议确认克重、色牢度、起球、摩擦牢度和缩水率"],
      ["Embroidery quality", "刺绣质量", "Logo edges, stitch breaks, skipped stitches and distortion checked by approved sample", "按确认样检查字体边缘、断线、跳针和变形"],
      ["PU sleeve surface", "PU袖表面", "No cracking, peeling, obvious crease marks or color mismatch on approved material", "确认面料要求无爆裂、脱皮、明显折痕和色差"],
      ["Panel joining", "拼接位置", "Shoulder and armhole seams reinforced to avoid bulky joins", "肩部和袖窿拼接位置建议加固，避免厚料拼接鼓包"],
      ["Snap durability", "四合扣牢度", "Snap pull force and placket reinforcement checked before bulk", "大货前确认四合扣拉力和门襟加固"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by size chart", "参考 +/- 1.5cm，按尺码表确认"]
    ]
  },
  {
    id: "retro-patchwork-varsity-jacket",
    productId: "baseball-jackets",
    categoryEn: "Custom Varsity Jackets",
    categoryZh: "棒球服定制",
    titleEn: "Retro Orange Chenille Patch Varsity Jacket",
    titleZh: "复古橙黑拼接毛巾绣棒球服",
    cardTitleEn: "Custom Retro Orange Varsity Jacket with Chenille and Twill Applique",
    cardTitleZh: "定制复古橙黑棒球服 / 毛巾绣与贴布绣",
    image: "assets/products/baseball-jackets/retro-patchwork-varsity-jacket/01-main-front.webp",
    shortEn: "Burnt-orange wool-blend varsity jacket with black PU sleeves, oversized boxy fit, NV chenille patch, 87 twill applique and classic sports patch system.",
    shortZh: "焦糖橙羊毛混纺棒球服，黑色PU袖、宽松短宽版型、NV毛巾绣、87贴布绣和经典美式运动章仔系统。",
    filters: ["baseball-jackets", "oem", "custom", "test", "repeat", "varsity-fit", "oversized", "boxy-fit", "contrast-sleeve", "rib-trim", "lined-jacket", "melton-wool", "leather-sleeve", "poly-lining", "rib-knit", "chenille-patch", "embroidery", "applique", "tackle-twill", "snap-button", "garment-wash"],
    tagsEn: ["Burnt orange wool", "PU sleeves", "Chenille patch", "Twill applique"],
    tagsZh: ["焦糖橙羊毛", "PU皮袖", "毛巾绣章", "贴布绣"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/baseball-jackets/retro-patchwork-varsity-jacket/01-main-front.webp"],
      ["Back product view", "背面产品图", "assets/products/baseball-jackets/retro-patchwork-varsity-jacket/02-back-view.webp"],
      ["Angled front view", "斜侧正面图", "assets/products/baseball-jackets/retro-patchwork-varsity-jacket/03-angle-front.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Body fabric", "大身面料", "60% wool / 35% polyester / 5% nylon Melton wool blend, 650-700GSM reference", "60%羊毛 / 35%聚酯 / 5%锦纶麦尔登羊毛混纺，参考650-700GSM"],
      ["Sleeve fabric", "袖子面料", "Matte PU leather with polyester knitted backing, 380-450GSM reference", "哑光PU仿皮，聚酯针织底布，参考380-450GSM"],
      ["Lining", "里布", "100% polyester satin or quilted lining, 70-100GSM reference", "100%聚酯缎面或菱格绗棉里布，参考70-100GSM"],
      ["Rib", "罗纹", "Heavy 7-gauge or 9-gauge striped rib with high recovery", "7针或9针厚条纹罗纹，高弹回复"],
      ["Finished weight", "成衣重量", "M size reference about 1.5-1.7 kg, confirmed by final material package", "M码参考约1.5-1.7kg，按最终面辅料组合确认"],
      ["Fit", "版型", "Oversized relaxed fit with drop shoulder and boxy hip-length proportion", "Oversized宽松版型，落肩、短宽比例、衣长至胯部"],
      ["Craft", "图案工艺", "Chenille patch, twill applique, double-layer sleeve patch, chain stitch and satin stitch can be reviewed", "可评估毛巾绣、斜纹贴布绣、双层袖号贴布、链目绣和平绣包边"],
      ["Optional finish", "可选后整", "Light vintage aging finish can be reviewed by sample", "可按样衣评估轻微复古旧化处理"]
    ],
    features: [
      ["Classic Letterman structure", "经典美式棒球服结构", "The burnt-orange wool body and black PU sleeves create a vintage varsity direction with enough weight for an oversized boxy silhouette.", "焦糖橙羊毛大身和黑色PU袖形成复古美式棒球服方向，克重能支撑宽松短宽廓形。"],
      ["NV chenille patch", "NV毛巾绣章", "The front NV artwork can use cream chenille with black embroidery edging, fixed by backing glue and stitching.", "前胸NV可做米白毛巾绣配黑色包边刺绣，背胶定位后车缝固定。"],
      ["87 and 26 applique numbers", "87与26贴布号码", "The 87 front number and 26 sleeve number can use twill applique with satin-stitch edging for a raised varsity look.", "前胸87和袖子26号码可用斜纹贴布配缎面包边，形成经典校队立体效果。"],
      ["Sports patch system", "运动章仔系统", "Shield, football and Northvale lettering details can be reviewed by chain stitch, satin stitch and applique placement.", "盾牌、橄榄球和Northvale字母细节可按链目绣、平绣包边和贴布定位评估。"],
      ["Optional vintage finish", "可选复古后整", "For premium streetwear programs, light brushing, localized aging or old-tone dyeing can be tested carefully before bulk.", "如做高级街头版本，可谨慎测试轻微磨毛、局部旧化或旧感染色。"]
    ],
    quality: [
      ["Color control", "颜色控制", "Burnt orange body shade and black PU sleeve color should be approved by fabric swatches", "焦糖橙大身和黑色PU袖颜色建议按面料色卡确认"],
      ["Patch placement", "章仔定位", "NV, 87, sleeve 26 and back lettering placement checked by sample measurement points", "NV、87、袖子26和后背字母位置按样衣定位尺寸确认"],
      ["PU performance", "PU性能", "Anti-crack surface, soft hand feel and fold resistance reviewed before bulk", "大货前确认PU防爆裂表面、柔软手感和耐折表现"],
      ["Rib recovery", "罗纹回弹", "Collar, cuff and hem rib recovery checked after stretch test", "领口、袖口和下摆罗纹需做拉伸回弹检查"],
      ["Pocket durability", "口袋牢度", "Diagonal welt pocket, PU binding and inner pocket reinforcement checked by sample", "斜插袋、PU包边和内袋加固按样衣检查"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by size chart", "参考 +/- 1.5cm，按尺码表确认"]
    ]
  },
  {
    id: "urban-utility-varsity-jacket",
    productId: "baseball-jackets",
    categoryEn: "Custom Varsity Jackets",
    categoryZh: "棒球服定制",
    titleEn: "Urban Utility Reflective Varsity Jacket",
    titleZh: "城市机能反光拼接棒球服",
    cardTitleEn: "Custom Urban Utility Varsity Jacket with Reflective Piping",
    cardTitleZh: "定制城市机能棒球服 / 反光条与防泼面料",
    image: "assets/products/baseball-jackets/urban-utility-varsity-jacket/01-main-front.webp",
    shortEn: "Lightweight urban varsity jacket with high-density matte nylon body, charcoal matte PU raglan sleeves, reflective piping, waterproof zipper pockets and striped rib.",
    shortZh: "轻量城市机能棒球服，高密哑光尼龙身片、炭黑哑光PU插肩袖、反光包边、防水拉链袋和三色条纹罗纹。",
    filters: ["baseball-jackets", "oem", "custom", "test", "repeat", "varsity-fit", "oversized", "boxy-fit", "contrast-sleeve", "rib-trim", "lined-jacket", "nylon-poly", "leather-sleeve", "poly-lining", "rib-knit", "embroidery", "snap-button", "reflective-piping", "zipper-hardware", "water-repellent"],
    tagsEn: ["Matte nylon", "PU raglan sleeves", "Reflective piping", "Zipper pockets"],
    tagsZh: ["哑光尼龙", "PU插肩袖", "反光包边", "拉链口袋"],
    gallery: [
      ["Clean front product view", "白底正面产品图", "assets/products/baseball-jackets/urban-utility-varsity-jacket/01-main-front.webp"],
      ["Angled front view", "斜侧正面图", "assets/products/baseball-jackets/urban-utility-varsity-jacket/02-angle-front.webp"],
      ["Rib, snap and sleeve detail", "罗纹、按扣与袖部细节", "assets/products/baseball-jackets/urban-utility-varsity-jacket/03-trim-detail.webp"],
      ["Front and back structure view", "正反面结构图", "assets/products/baseball-jackets/urban-utility-varsity-jacket/04-front-back-view.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Body fabric", "身片面料", "100% high-density matte nylon woven fabric; optional DWR water-repellent finish", "100%高密哑光尼龙梭织面料；可选DWR环保拒水整理"],
      ["Yarn / denier", "纱支规格", "40D-70D high-density nylon filament reference", "参考40D-70D高密尼龙长丝"],
      ["Sleeve fabric", "袖子面料", "Matte PU coating with 100% polyester knitted backing", "哑光PU涂层，100%聚酯针织底布"],
      ["Lining", "里布", "190T 100% polyester taffeta lining", "190T 100%聚酯塔夫绸里布"],
      ["Weight", "克重", "Body 120-140GSM; PU sleeve 450-600GSM; rib 650-750GSM reference", "身片参考120-140GSM；PU袖450-600GSM；罗纹650-750GSM"],
      ["Fit", "版型", "Oversized urban fit with raglan sleeve, cropped body and wide sleeve", "Oversized城市机能版型，插肩袖、微短款、宽袖"],
      ["Craft", "工艺", "Reflective piping, waterproof zipper pockets, high-density embroidery, matte snap buttons and reinforced seam construction can be reviewed", "可评估反光包边、防水拉链袋、高密刺绣、哑黑四合扣和加固车缝"]
    ],
    features: [
      ["Matte nylon body", "哑光尼龙身片", "High-density matte nylon keeps the jacket lightweight, clean and structured, with optional DWR finish for an urban utility direction.", "高密哑光尼龙让衣身轻量、干净、有挺度，也可按项目评估DWR拒水后整理，适合城市机能方向。"],
      ["PU raglan sleeve construction", "PU插肩袖结构", "Charcoal matte PU sleeves use curved raglan panel cutting, so the shoulder line, reflective piping and sleeve panel need to be confirmed together by sample.", "炭黑哑光PU袖采用曲线插肩裁片，肩线、反光包边和袖片弧度建议通过样衣一起确认。"],
      ["Reflective piping detail", "反光包边细节", "Reflective piping is inserted along the shoulder seam and extended toward the sleeve, adding a subtle night-reflective utility detail.", "反光包边沿肩缝夹入并延伸至袖口方向，形成轻微夜间反光的机能细节。"],
      ["Waterproof zipper pockets", "防水拉链插袋", "Hidden side zipper pockets can be developed with waterproof zipper tape, pocket topstitching and reinforced pocket bags.", "两侧隐藏式拉链袋可按防水拉链贴条、袋口压线和内袋加固方式开发。"],
      ["Striped rib and snap placket", "条纹罗纹与按扣门襟", "Three-color rib at collar, cuff and hem, plus matte black snap buttons, keeps the product recognizably varsity while moving it toward street utility.", "领口、袖口和下摆三色罗纹，加上哑黑四合扣，让款式保留棒球服识别度，同时更偏街头机能。"]
    ],
    quality: [
      ["Material confirmation", "面料确认", "Nylon shade, matte finish, PU hand feel, fold resistance and lining smoothness should be confirmed by swatch or sample", "尼龙颜色、哑光效果、PU手感、耐折表现和里布顺滑度建议按色卡或样衣确认"],
      ["Piping alignment", "包边顺直度", "Reflective piping alignment along the raglan seam should be checked before bulk production", "反光包边沿插肩缝的顺直度和左右对称性建议在大货前确认"],
      ["Pocket function", "口袋功能", "Zipper opening, pocket bag strength and waterproof tape placement checked by approved sample", "拉链开合、袋布牢度和防水拉链贴条位置按确认样检查"],
      ["Snap durability", "四合扣牢度", "Matte snap button pull force and placket reinforcement should be reviewed before bulk", "哑黑四合扣拉力和门襟加强底布建议在大货前确认"],
      ["Rib recovery", "罗纹回弹", "Collar, cuff and hem rib recovery checked after stretch test", "领口、袖口和下摆罗纹做拉伸回弹检查"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考 +/- 1.5cm，按最终尺码表确认"]
    ]
  },
  {
    "id": "dark-green-patchwork-varsity-jacket",
    "productId": "baseball-jackets",
    "categoryEn": "Custom Varsity Jackets",
    "categoryZh": "棒球服定制",
    "titleEn": "Dark Green City-Grid Varsity Jacket",
    "titleZh": "墨绿色城市图案拼接棒球服",
    "cardTitleEn": "Custom Dark Green Varsity Jacket with City-Grid Back Artwork",
    "cardTitleZh": "定制墨绿色拼接棒球服 / 城市图案后背工艺",
    "image": "assets/products/baseball-jackets/dark-green-patchwork-varsity-jacket/01-main-front.webp",
    "shortEn": "Dark green wool-blend Melton varsity jacket with cream PU sleeves, matte snap closure, striped rib and city-grid back artwork.",
    "shortZh": "墨绿色羊毛混纺呢料棒球服，米色PU袖、哑黑四合扣、条纹罗纹和后背城市线稿图案。",
    "filters": [
      "baseball-jackets",
      "oem",
      "custom",
      "test",
      "repeat",
      "varsity-fit",
      "oversized",
      "contrast-sleeve",
      "rib-trim",
      "lined-jacket",
      "melton-wool",
      "leather-sleeve",
      "poly-lining",
      "rib-knit",
      "embroidery",
      "screen-print",
      "snap-button"
    ],
    "tagsEn": [
      "Wool blend",
      "PU sleeves",
      "City graphic",
      "Snap button"
    ],
    "tagsZh": [
      "羊毛混纺",
      "PU皮袖",
      "城市图案",
      "四合扣"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/baseball-jackets/dark-green-patchwork-varsity-jacket/01-main-front.webp"
      ],
      [
        "Back city-grid artwork",
        "后背城市线稿图案",
        "assets/products/baseball-jackets/dark-green-patchwork-varsity-jacket/02-back-view.webp"
      ],
      [
        "Collar and snap button detail",
        "领口与按扣细节",
        "assets/products/baseball-jackets/dark-green-patchwork-varsity-jacket/03-collar-snap-detail.webp"
      ],
      [
        "Back artwork close-up",
        "后背图案细节",
        "assets/products/baseball-jackets/dark-green-patchwork-varsity-jacket/04-back-artwork-detail.webp"
      ],
      [
        "Rib cuff detail",
        "罗纹袖口细节",
        "assets/products/baseball-jackets/dark-green-patchwork-varsity-jacket/05-rib-cuff-detail.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Body fabric",
        "身片面料",
        "50% wool / 45% polyester / 5% other wool-blend Melton, 550-650GSM reference",
        "50%羊毛 / 45%聚酯 / 5%其他纤维羊毛混纺呢料，参考550-650GSM"
      ],
      [
        "Sleeve fabric",
        "袖子面料",
        "Water-based PU sleeve with polyester backing, 0.8-1.0mm reference",
        "水性PU仿皮袖，聚酯底布，参考0.8-1.0mm"
      ],
      [
        "Lining",
        "里布",
        "100% polyester twill or taffeta lining, 80-100GSM reference",
        "100%聚酯斜纹或塔夫绸里布，参考80-100GSM"
      ],
      [
        "Fit",
        "版型",
        "Oversized varsity fit with relaxed body, dropped shoulder and rib hem",
        "宽松棒球服版型，落肩结构、下摆罗纹收口"
      ],
      [
        "Craft",
        "工艺",
        "Small 3D chest embroidery, city-grid screen print, partial embroidery or reflective print and matte snap buttons can be reviewed",
        "可评估前胸小面积立体刺绣、后背城市线稿印花、局部刺绣或反光印和哑黑四合扣"
      ]
    ],
    "features": [
      [
        "Varsity structure",
        "棒球服结构",
        "Body fabric, sleeve fabric, rib, lining and closure should be checked as one full material package.",
        "身片、袖子、罗纹、里布和门襟建议作为一套完整面辅料方案确认。"
      ],
      [
        "Patch and embroidery system",
        "章仔与刺绣系统",
        "Patch size, stitch density, applique layer and placement can be reviewed by artwork and sample.",
        "章仔尺寸、针法密度、贴布层次和位置可按图案和样衣评估。"
      ],
      [
        "Sleeve and shoulder joining",
        "袖子与肩部拼接",
        "Armhole curve, shoulder seam reinforcement and sleeve symmetry are key checks before bulk production.",
        "袖窿弧度、肩缝加固和左右袖对称是大货前重点检查点。"
      ],
      [
        "Rib and closure details",
        "罗纹与门襟细节",
        "Collar, cuff, hem rib recovery and button or zipper durability should be tested by sample.",
        "领口、袖口、下摆罗纹回弹，以及按扣或拉链牢度建议按样衣测试。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "navy-vintage-college-varsity-jacket",
    "productId": "baseball-jackets",
    "categoryEn": "Custom Varsity Jackets",
    "categoryZh": "棒球服定制",
    "titleEn": "Navy College Chenille Varsity Jacket",
    "titleZh": "海军蓝学院风毛巾绣棒球服",
    "cardTitleEn": "Custom Navy College Varsity Jacket with Chenille Badge System",
    "cardTitleZh": "定制海军蓝学院风棒球服 / 毛巾绣章仔系统",
    "image": "assets/products/baseball-jackets/navy-vintage-college-varsity-jacket/01-main-front.webp",
    "shortEn": "Heavy navy wool-blend varsity jacket with cream PU sleeves, chenille badge system, multi-layer back artwork, striped rib and matte snap buttons.",
    "shortZh": "海军蓝重磅羊毛混纺棒球服，奶油白PU袖、毛巾绣徽章系统、多层后背图案、条纹罗纹和哑光按扣。",
    "filters": [
      "baseball-jackets",
      "oem",
      "custom",
      "test",
      "repeat",
      "varsity-fit",
      "oversized",
      "contrast-sleeve",
      "rib-trim",
      "lined-jacket",
      "melton-wool",
      "leather-sleeve",
      "poly-lining",
      "rib-knit",
      "chenille-patch",
      "embroidery",
      "applique",
      "tackle-twill",
      "snap-button"
    ],
    "tagsEn": [
      "Heavy Melton",
      "Chenille patches",
      "PU sleeves",
      "College style"
    ],
    "tagsZh": [
      "重磅毛呢",
      "毛巾绣章",
      "PU皮袖",
      "学院风"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/baseball-jackets/navy-vintage-college-varsity-jacket/01-main-front.webp"
      ],
      [
        "Back patch artwork",
        "后背章仔图案",
        "assets/products/baseball-jackets/navy-vintage-college-varsity-jacket/02-back-view.webp"
      ],
      [
        "Chenille and sleeve detail",
        "毛巾绣与袖章细节",
        "assets/products/baseball-jackets/navy-vintage-college-varsity-jacket/03-chenille-patch-detail.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Body fabric",
        "身片面料",
        "Heavy Melton wool blend, 70% wool / 30% polyester or 50/50 cost-control version",
        "重磅麦尔登羊毛混纺，可选70%羊毛/30%聚酯或50/50成本平衡版本"
      ],
      [
        "Weight",
        "克重",
        "Body fabric 750-850GSM reference; finished garment about 1.4-1.8kg by size",
        "身片参考750-850GSM；成衣约1.4-1.8kg，按尺码确认"
      ],
      [
        "Sleeve fabric",
        "袖子面料",
        "Premium semi-matte PU synthetic leather with polyester backing, 0.8-1.0mm reference",
        "高级半哑光PU仿皮袖，聚酯底布，参考0.8-1.0mm"
      ],
      [
        "Lining",
        "里布",
        "190T/210T polyester taffeta or satin lining can be reviewed",
        "可评估190T/210T涤塔夫或缎面里布"
      ],
      [
        "Craft",
        "工艺",
        "Chenille embroidery, twill applique, PU leather applique, satin stitch and reinforced snap placket can be reviewed",
        "可评估毛巾绣、贴布绣、PU皮贴、缎面包边绣和加固四合扣门襟"
      ]
    ],
    "features": [
      [
        "Varsity structure",
        "棒球服结构",
        "Body fabric, sleeve fabric, rib, lining and closure should be checked as one full material package.",
        "身片、袖子、罗纹、里布和门襟建议作为一套完整面辅料方案确认。"
      ],
      [
        "Patch and embroidery system",
        "章仔与刺绣系统",
        "Patch size, stitch density, applique layer and placement can be reviewed by artwork and sample.",
        "章仔尺寸、针法密度、贴布层次和位置可按图案和样衣评估。"
      ],
      [
        "Sleeve and shoulder joining",
        "袖子与肩部拼接",
        "Armhole curve, shoulder seam reinforcement and sleeve symmetry are key checks before bulk production.",
        "袖窿弧度、肩缝加固和左右袖对称是大货前重点检查点。"
      ],
      [
        "Rib and closure details",
        "罗纹与门襟细节",
        "Collar, cuff, hem rib recovery and button or zipper durability should be tested by sample.",
        "领口、袖口、下摆罗纹回弹，以及按扣或拉链牢度建议按样衣测试。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "western-racing-suede-varsity-jacket",
    "productId": "baseball-jackets",
    "categoryEn": "Custom Varsity Jackets",
    "categoryZh": "棒球服定制",
    "titleEn": "Western Racing Suede Varsity Jacket",
    "titleZh": "西部赛车麂皮拼接棒球服",
    "cardTitleEn": "Custom Western Racing Varsity Jacket with Suede-Look Body and Patch Artwork",
    "cardTitleZh": "定制西部赛车棒球服 / 麂皮质感与章仔图案",
    "image": "assets/products/baseball-jackets/western-racing-suede-varsity-jacket/01-main-front.webp",
    "shortEn": "Vintage brown suede-look varsity jacket with cream PU sleeves, racing and western patch system, oversized fit and heavy striped rib.",
    "shortZh": "复古棕色仿麂皮棒球服，米色PU袖、西部赛车章仔系统、宽松版型和重磅条纹罗纹。",
    "filters": [
      "baseball-jackets",
      "oem",
      "custom",
      "test",
      "repeat",
      "varsity-fit",
      "oversized",
      "contrast-sleeve",
      "rib-trim",
      "lined-jacket",
      "suede",
      "leather-sleeve",
      "rib-knit",
      "chenille-patch",
      "embroidery",
      "applique",
      "snap-button"
    ],
    "tagsEn": [
      "Suede look",
      "Racing patches",
      "PU sleeves",
      "Heavy rib"
    ],
    "tagsZh": [
      "仿麂皮",
      "赛车章仔",
      "PU皮袖",
      "重磅罗纹"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/baseball-jackets/western-racing-suede-varsity-jacket/01-main-front.webp"
      ],
      [
        "Back western racing artwork",
        "后背西部赛车图案",
        "assets/products/baseball-jackets/western-racing-suede-varsity-jacket/02-back-view.webp"
      ],
      [
        "Patch and rib detail board",
        "章仔与罗纹细节图",
        "assets/products/baseball-jackets/western-racing-suede-varsity-jacket/03-patch-detail-board.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Body fabric",
        "身片面料",
        "92% polyester / 8% spandex suede or 100% polyester micro suede, 350-420GSM reference",
        "92%聚酯/8%氨纶仿麂皮或100%聚酯微纤麂皮，参考350-420GSM"
      ],
      [
        "Sleeve fabric",
        "袖子面料",
        "Textured cream PU sleeve with polyester backing, 0.8-1.0mm reference",
        "米色纹理PU仿皮袖，聚酯底布，参考0.8-1.0mm"
      ],
      [
        "Lining",
        "里布",
        "190T/210T polyester taffeta; quilted lining can be reviewed for heavier programs",
        "190T/210T涤塔夫里布；重磅版本可评估绗缝里布"
      ],
      [
        "Weight",
        "克重",
        "Finished M size reference about 1.4-1.7kg, confirmed by material package",
        "M码成衣参考约1.4-1.7kg，按最终面辅料确认"
      ],
      [
        "Craft",
        "工艺",
        "Chenille patch, leather applique, laser-cut patch, chain stitch, 3D embroidery and reinforced patch sewing can be reviewed",
        "可评估毛巾绣、皮贴、激光切割章、链目绣、立体刺绣和章仔加固车缝"
      ]
    ],
    "features": [
      [
        "Varsity structure",
        "棒球服结构",
        "Body fabric, sleeve fabric, rib, lining and closure should be checked as one full material package.",
        "身片、袖子、罗纹、里布和门襟建议作为一套完整面辅料方案确认。"
      ],
      [
        "Patch and embroidery system",
        "章仔与刺绣系统",
        "Patch size, stitch density, applique layer and placement can be reviewed by artwork and sample.",
        "章仔尺寸、针法密度、贴布层次和位置可按图案和样衣评估。"
      ],
      [
        "Sleeve and shoulder joining",
        "袖子与肩部拼接",
        "Armhole curve, shoulder seam reinforcement and sleeve symmetry are key checks before bulk production.",
        "袖窿弧度、肩缝加固和左右袖对称是大货前重点检查点。"
      ],
      [
        "Rib and closure details",
        "罗纹与门襟细节",
        "Collar, cuff, hem rib recovery and button or zipper durability should be tested by sample.",
        "领口、袖口、下摆罗纹回弹，以及按扣或拉链牢度建议按样衣测试。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "vintage-outdoor-heavy-wool-varsity-jacket",
    "productId": "baseball-jackets",
    "categoryEn": "Custom Varsity Jackets",
    "categoryZh": "棒球服定制",
    "titleEn": "Olive Outdoor Heavy Wool Varsity Jacket",
    "titleZh": "橄榄绿户外重磅羊毛棒球服",
    "cardTitleEn": "Custom Olive Outdoor Varsity Jacket with Heavy Wool Body and Cargo Pockets",
    "cardTitleZh": "定制橄榄绿户外棒球服 / 重磅羊毛与工装口袋",
    "image": "assets/products/baseball-jackets/vintage-outdoor-heavy-wool-varsity-jacket/01-main-front.webp",
    "shortEn": "Olive heavy wool varsity jacket with outdoor heritage patches, cargo flap pockets, striped rib, metal snap buttons and optional quilted lining.",
    "shortZh": "橄榄绿重磅羊毛棒球服，户外复古章仔、立体袋盖、条纹罗纹、金属按扣和可选绗缝里布。",
    "filters": [
      "baseball-jackets",
      "oem",
      "custom",
      "test",
      "repeat",
      "varsity-fit",
      "oversized",
      "rib-trim",
      "lined-jacket",
      "melton-wool",
      "poly-lining",
      "rib-knit",
      "chenille-patch",
      "embroidery",
      "applique",
      "snap-button",
      "garment-wash",
      "quilted-lining"
    ],
    "tagsEn": [
      "550GSM wool",
      "Outdoor patches",
      "Cargo pockets",
      "Vintage wash"
    ],
    "tagsZh": [
      "550GSM羊毛",
      "户外章仔",
      "工装口袋",
      "复古水洗"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/baseball-jackets/vintage-outdoor-heavy-wool-varsity-jacket/01-main-front.webp"
      ],
      [
        "Back outdoor artwork",
        "后背户外主题图案",
        "assets/products/baseball-jackets/vintage-outdoor-heavy-wool-varsity-jacket/02-back-view.webp"
      ],
      [
        "Pocket and patch detail",
        "口袋与章仔细节",
        "assets/products/baseball-jackets/vintage-outdoor-heavy-wool-varsity-jacket/03-pocket-patch-detail.webp"
      ],
      [
        "Rib and logo detail board",
        "罗纹与Logo细节图",
        "assets/products/baseball-jackets/vintage-outdoor-heavy-wool-varsity-jacket/04-rib-logo-detail-board.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Body fabric",
        "身片面料",
        "Heavy Melton wool blend, 70% wool / 30% polyester or 80% wool / 20% nylon version",
        "重磅麦尔登羊毛呢，可选70%羊毛/30%聚酯或80%羊毛/20%尼龙版本"
      ],
      [
        "Weight",
        "克重",
        "Main wool fabric 550GSM +/-30GSM; heavy rib 900-1000GSM reference",
        "主身羊毛参考550GSM +/-30GSM；重磅罗纹参考900-1000GSM"
      ],
      [
        "Lining",
        "里布",
        "Polyester satin lining or quilted polyester padding can be reviewed",
        "可评估涤纶缎面里布或绗缝铺棉里布"
      ],
      [
        "Fit",
        "版型",
        "Relaxed varsity fit with dropped shoulder and structured cargo pockets",
        "宽松棒球服版型，落肩结构和立体工装口袋"
      ],
      [
        "Craft",
        "工艺",
        "Chenille patch, leather debossed patch, leather applique, flat embroidery and vintage wash can be reviewed",
        "可评估毛巾绣章、压凹皮牌、皮贴、平绣和复古水洗"
      ]
    ],
    "features": [
      [
        "Varsity structure",
        "棒球服结构",
        "Body fabric, sleeve fabric, rib, lining and closure should be checked as one full material package.",
        "身片、袖子、罗纹、里布和门襟建议作为一套完整面辅料方案确认。"
      ],
      [
        "Patch and embroidery system",
        "章仔与刺绣系统",
        "Patch size, stitch density, applique layer and placement can be reviewed by artwork and sample.",
        "章仔尺寸、针法密度、贴布层次和位置可按图案和样衣评估。"
      ],
      [
        "Sleeve and shoulder joining",
        "袖子与肩部拼接",
        "Armhole curve, shoulder seam reinforcement and sleeve symmetry are key checks before bulk production.",
        "袖窿弧度、肩缝加固和左右袖对称是大货前重点检查点。"
      ],
      [
        "Rib and closure details",
        "罗纹与门襟细节",
        "Collar, cuff, hem rib recovery and button or zipper durability should be tested by sample.",
        "领口、袖口、下摆罗纹回弹，以及按扣或拉链牢度建议按样衣测试。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "black-heavyweight-street-varsity-jacket",
    "productId": "baseball-jackets",
    "categoryEn": "Custom Varsity Jackets",
    "categoryZh": "棒球服定制",
    "titleEn": "Black Tonal Heavyweight Varsity Jacket",
    "titleZh": "黑色同色章仔重磅棒球服",
    "cardTitleEn": "Custom Black Heavyweight Varsity Jacket with Tonal Chenille Artwork",
    "cardTitleZh": "定制黑色重磅棒球服 / 同色毛巾绣章仔",
    "image": "assets/products/baseball-jackets/black-heavyweight-street-varsity-jacket/01-main-front.webp",
    "shortEn": "Black heavyweight varsity jacket with wool-blend body, matte PU sleeves, tonal chenille and applique artwork, striped rib and gunmetal snap buttons.",
    "shortZh": "黑色重磅棒球服，羊毛混纺身片、哑光PU袖、同色系毛巾绣与贴布图案、条纹罗纹和枪色四合扣。",
    "filters": [
      "baseball-jackets",
      "oem",
      "custom",
      "test",
      "repeat",
      "varsity-fit",
      "oversized",
      "boxy-fit",
      "contrast-sleeve",
      "rib-trim",
      "lined-jacket",
      "melton-wool",
      "leather-sleeve",
      "poly-lining",
      "rib-knit",
      "chenille-patch",
      "embroidery",
      "applique",
      "snap-button"
    ],
    "tagsEn": [
      "Black wool",
      "Matte PU sleeves",
      "Tonal patches",
      "Heavyweight"
    ],
    "tagsZh": [
      "黑色毛呢",
      "哑光PU袖",
      "同色系章仔",
      "重磅"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/baseball-jackets/black-heavyweight-street-varsity-jacket/01-main-front.webp"
      ],
      [
        "Back tonal artwork",
        "后背同色系图案",
        "assets/products/baseball-jackets/black-heavyweight-street-varsity-jacket/02-back-view.webp"
      ],
      [
        "Embroidery and sleeve detail",
        "刺绣与袖部细节",
        "assets/products/baseball-jackets/black-heavyweight-street-varsity-jacket/03-tonal-patch-detail.webp"
      ],
      [
        "Detail board",
        "细节说明图",
        "assets/products/baseball-jackets/black-heavyweight-street-varsity-jacket/04-detail-board.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Body fabric",
        "身片面料",
        "70% wool / 30% polyester heavy Melton wool blend, 550GSM reference",
        "70%羊毛/30%聚酯重磅麦尔登毛呢，参考550GSM"
      ],
      [
        "Sleeve fabric",
        "袖子面料",
        "Matte black PU leather with dense polyester backing, 0.8-1.0mm reference",
        "哑光黑PU仿皮袖，高密聚酯底布，参考0.8-1.0mm"
      ],
      [
        "Finished weight",
        "成衣重量",
        "M size reference about 1.8-2.2kg, confirmed by final artwork and lining",
        "M码参考约1.8-2.2kg，按最终图案和里布确认"
      ],
      [
        "Fit",
        "版型",
        "Oversized streetwear fit with drop shoulder, wide sleeve and boxy cropped proportion",
        "街头宽松版型，落肩、宽袖筒和短身箱型比例"
      ],
      [
        "Craft",
        "工艺",
        "Tonal chenille patch, multi-layer applique, PU sleeve patch, metal snap button and reinforced pocket construction can be reviewed",
        "可评估同色系毛巾绣、多层贴布、PU袖章、金属四合扣和加固口袋结构"
      ]
    ],
    "features": [
      [
        "Varsity structure",
        "棒球服结构",
        "Body fabric, sleeve fabric, rib, lining and closure should be checked as one full material package.",
        "身片、袖子、罗纹、里布和门襟建议作为一套完整面辅料方案确认。"
      ],
      [
        "Patch and embroidery system",
        "章仔与刺绣系统",
        "Patch size, stitch density, applique layer and placement can be reviewed by artwork and sample.",
        "章仔尺寸、针法密度、贴布层次和位置可按图案和样衣评估。"
      ],
      [
        "Sleeve and shoulder joining",
        "袖子与肩部拼接",
        "Armhole curve, shoulder seam reinforcement and sleeve symmetry are key checks before bulk production.",
        "袖窿弧度、肩缝加固和左右袖对称是大货前重点检查点。"
      ],
      [
        "Rib and closure details",
        "罗纹与门襟细节",
        "Collar, cuff, hem rib recovery and button or zipper durability should be tested by sample.",
        "领口、袖口、下摆罗纹回弹，以及按扣或拉链牢度建议按样衣测试。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "navy-retro-satin-varsity-jacket",
    "productId": "baseball-jackets",
    "categoryEn": "Custom Varsity Jackets",
    "categoryZh": "棒球服定制",
    "titleEn": "Navy Retro Satin Varsity Jacket",
    "titleZh": "海军蓝复古缎面棒球服",
    "cardTitleEn": "Custom Navy Satin Varsity Jacket with Retro Club Embroidery",
    "cardTitleZh": "定制海军蓝缎面棒球服 / 复古俱乐部刺绣",
    "image": "assets/products/baseball-jackets/navy-retro-satin-varsity-jacket/01-main-front.webp",
    "shortEn": "Navy nylon satin varsity jacket with cream sleeves, burgundy lining direction, zipper closure, chenille sleeve numbers and retro club embroidery.",
    "shortZh": "海军蓝尼龙缎面棒球服，米色袖、酒红里布方向、拉链门襟、毛巾绣袖号和复古学院刺绣图案。",
    "filters": [
      "baseball-jackets",
      "oem",
      "custom",
      "test",
      "repeat",
      "varsity-fit",
      "regular-fit",
      "contrast-sleeve",
      "rib-trim",
      "lined-jacket",
      "satin",
      "nylon-poly",
      "leather-sleeve",
      "poly-lining",
      "rib-knit",
      "chenille-patch",
      "embroidery",
      "applique",
      "zipper-hardware",
      "water-repellent"
    ],
    "tagsEn": [
      "Nylon satin",
      "Chenille numbers",
      "Metal zipper",
      "Water repellent"
    ],
    "tagsZh": [
      "尼龙缎面",
      "毛巾绣袖号",
      "金属拉链",
      "防泼水"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/baseball-jackets/navy-retro-satin-varsity-jacket/01-main-front.webp"
      ],
      [
        "Back club artwork",
        "后背学院章图案",
        "assets/products/baseball-jackets/navy-retro-satin-varsity-jacket/02-back-view.webp"
      ],
      [
        "Side sleeve view",
        "侧面袖型图",
        "assets/products/baseball-jackets/navy-retro-satin-varsity-jacket/03-side-view.webp"
      ],
      [
        "Rib and logo detail board",
        "罗纹与Logo细节图",
        "assets/products/baseball-jackets/navy-retro-satin-varsity-jacket/04-rib-logo-detail-board.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Body fabric",
        "身片面料",
        "100% high-density nylon satin, 160-180GSM, 228T/320T reference with water-repellent finish",
        "100%高密尼龙缎面，参考160-180GSM、228T/320T，可做防泼水整理"
      ],
      [
        "Sleeve option",
        "袖子方案",
        "PU synthetic leather sleeve for standard programs; genuine leather can be reviewed for premium programs",
        "常规可做PU仿皮袖，高端项目可评估真皮袖"
      ],
      [
        "Lining",
        "里布",
        "100% polyester taffeta lining, burgundy direction, 60-70GSM reference",
        "100%涤塔夫里布，酒红色方向，参考60-70GSM"
      ],
      [
        "Filling option",
        "填充选项",
        "80-100GSM light padding or 120-150GSM warmer padding can be reviewed",
        "可评估80-100GSM轻保暖填充或120-150GSM加厚填充"
      ],
      [
        "Craft",
        "工艺",
        "Chain stitch embroidery, chenille sleeve numbers, applique back patch, metal zipper and welt pockets can be reviewed",
        "可评估链目绣、毛巾绣袖号、后背贴布章、金属拉链和嵌线口袋"
      ]
    ],
    "features": [
      [
        "Varsity structure",
        "棒球服结构",
        "Body fabric, sleeve fabric, rib, lining and closure should be checked as one full material package.",
        "身片、袖子、罗纹、里布和门襟建议作为一套完整面辅料方案确认。"
      ],
      [
        "Patch and embroidery system",
        "章仔与刺绣系统",
        "Patch size, stitch density, applique layer and placement can be reviewed by artwork and sample.",
        "章仔尺寸、针法密度、贴布层次和位置可按图案和样衣评估。"
      ],
      [
        "Sleeve and shoulder joining",
        "袖子与肩部拼接",
        "Armhole curve, shoulder seam reinforcement and sleeve symmetry are key checks before bulk production.",
        "袖窿弧度、肩缝加固和左右袖对称是大货前重点检查点。"
      ],
      [
        "Rib and closure details",
        "罗纹与门襟细节",
        "Collar, cuff, hem rib recovery and button or zipper durability should be tested by sample.",
        "领口、袖口、下摆罗纹回弹，以及按扣或拉链牢度建议按样衣测试。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "washed-heavyweight-street-tshirt",
    "productId": "tshirts",
    "categoryEn": "Custom T-Shirts",
    "categoryZh": "T恤定制",
    "titleEn": "Washed Black High-Density Print T-Shirt",
    "titleZh": "水洗黑高密仿旧印花T恤",
    "cardTitleEn": "Custom Washed Black Heavyweight T-Shirt with High-Density Distressed Print",
    "cardTitleZh": "定制水洗黑重磅T恤 / 高密度仿旧印花",
    "image": "assets/products/tshirts/washed-heavyweight-street-tshirt/01-main-front-back.webp",
    "shortEn": "260GSM washed heavyweight cotton jersey T-shirt with oversized boxy fit, faded black wash and high-density distressed screen print.",
    "shortZh": "260GSM加厚水洗纯棉T恤，宽松箱型版型、炭黑褪色水洗和高密度仿旧丝网印花。",
    "filters": [
      "tshirts",
      "crew-neck",
      "oem",
      "custom",
      "test",
      "repeat",
      "cotton-jersey",
      "heavyweight-jersey",
      "oversized",
      "boxy-fit",
      "screen-print",
      "puff-print",
      "garment-wash",
      "rib-trim"
    ],
    "tagsEn": [
      "260GSM cotton",
      "Mineral wash",
      "Screen print",
      "Boxy fit"
    ],
    "tagsZh": [
      "260GSM纯棉",
      "矿物水洗",
      "丝网印花",
      "箱型版型"
    ],
    "gallery": [
      [
        "Front and back product view",
        "正反面产品图",
        "assets/products/tshirts/washed-heavyweight-street-tshirt/01-main-front-back.webp"
      ],
      [
        "Print and fabric detail board",
        "印花与面料细节图",
        "assets/products/tshirts/washed-heavyweight-street-tshirt/02-detail-board.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Fabric",
        "面料",
        "100% combed cotton heavyweight single jersey, 260GSM reference",
        "100%精梳棉重磅单面汗布，参考260GSM"
      ],
      [
        "Wash",
        "水洗",
        "Enzyme wash, garment wash or mineral wash can be reviewed by target color effect",
        "可按目标颜色效果评估酵素洗、成衣水洗或矿物洗"
      ],
      [
        "Fit",
        "版型",
        "Oversized boxy fit with drop shoulder, wide body and longer sleeve proportion",
        "Oversized箱型版型，落肩、宽身和偏长袖口比例"
      ],
      [
        "Collar",
        "领口",
        "2.2-2.5cm heavy rib collar with shoulder tape and double-needle topstitch",
        "2.2-2.5cm加厚罗纹圆领，肩部加固带和双针压线"
      ],
      [
        "Print",
        "印花",
        "High-density screen print with vintage crack texture can be reviewed",
        "可评估高密度丝网印花和仿旧裂纹效果"
      ]
    ],
    "features": [
      [
        "Heavyweight cotton body",
        "重磅纯棉面料",
        "The fabric weight and yarn choice can be adjusted by target hand feel, drape and selling position.",
        "可根据目标手感、垂感和销售定位调整克重与纱支。"
      ],
      [
        "Washed vintage surface",
        "水洗复古表面",
        "Garment wash effects should be tested by sample first to control shade, shrinkage and fabric twisting.",
        "水洗效果建议先打样测试，控制颜色、缩水率和扭曲率。"
      ],
      [
        "Screen print direction",
        "丝网印花方向",
        "Artwork size, color count, crack effect and print hand feel can be confirmed before bulk production.",
        "图案尺寸、颜色数量、裂纹效果和印花手感可在大货前确认。"
      ],
      [
        "Oversized fit control",
        "宽松版型控制",
        "Shoulder width, chest ease, sleeve opening and collar rib recovery are key points for this T-shirt program.",
        "肩宽、胸围放量、袖口宽度和领口罗纹回弹是这类T恤的重点。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "heavyweight-vintage-tshirt",
    "productId": "tshirts",
    "categoryEn": "Custom T-Shirts",
    "categoryZh": "T恤定制",
    "titleEn": "Off-White Architectural Line-Art T-Shirt",
    "titleZh": "米白建筑线稿重磅T恤",
    "cardTitleEn": "Custom Off-White Heavyweight T-Shirt with Architectural Line-Art Print",
    "cardTitleZh": "定制米白重磅T恤 / 建筑线稿印花",
    "image": "assets/products/tshirts/heavyweight-vintage-tshirt/01-main-front-back.webp",
    "shortEn": "240GSM off-white heavyweight cotton jersey T-shirt with oversized fit, soft vintage wash and architectural line-art print direction.",
    "shortZh": "240GSM米燕麦色重磅纯棉T恤，宽松版型、柔软复古水洗和建筑线稿印花方向。",
    "filters": [
      "tshirts",
      "crew-neck",
      "oem",
      "custom",
      "test",
      "repeat",
      "cotton-jersey",
      "heavyweight-jersey",
      "oversized",
      "boxy-fit",
      "screen-print",
      "digital-print",
      "garment-wash",
      "rib-trim"
    ],
    "tagsEn": [
      "240GSM cotton",
      "Vintage wash",
      "Line-art print",
      "Rib collar"
    ],
    "tagsZh": [
      "240GSM纯棉",
      "复古柔洗",
      "线稿印花",
      "罗纹圆领"
    ],
    "gallery": [
      [
        "Front and back product view",
        "正反面产品图",
        "assets/products/tshirts/heavyweight-vintage-tshirt/01-main-front-back.webp"
      ],
      [
        "Collar and fabric detail",
        "领口与面料细节",
        "assets/products/tshirts/heavyweight-vintage-tshirt/02-collar-detail.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Fabric",
        "面料",
        "100% cotton heavyweight single jersey, 16S/1 or 18S/1 reference",
        "100%纯棉重磅单面汗布，参考16S/1或18S/1"
      ],
      [
        "Weight",
        "克重",
        "240GSM +/-5% reference for balanced structure and hand feel",
        "参考240GSM +/-5%，兼顾挺度和手感"
      ],
      [
        "Wash",
        "水洗",
        "Enzyme wash and silicone softener can be reviewed for a soft vintage finish",
        "可评估酵素洗和硅油柔软处理，形成柔软复古手感"
      ],
      [
        "Fit",
        "版型",
        "Oversized boxy fit with drop shoulder, wide sleeve and slightly cropped proportion",
        "宽松箱型版型，落肩、宽袖和微短比例"
      ],
      [
        "Print",
        "印花",
        "Water-based screen print or DTG can be reviewed for fine line-art graphics",
        "细线稿图案可评估水浆丝网印或数码直喷"
      ]
    ],
    "features": [
      [
        "Heavyweight cotton body",
        "重磅纯棉面料",
        "The fabric weight and yarn choice can be adjusted by target hand feel, drape and selling position.",
        "可根据目标手感、垂感和销售定位调整克重与纱支。"
      ],
      [
        "Washed vintage surface",
        "水洗复古表面",
        "Garment wash effects should be tested by sample first to control shade, shrinkage and fabric twisting.",
        "水洗效果建议先打样测试，控制颜色、缩水率和扭曲率。"
      ],
      [
        "Screen print direction",
        "丝网印花方向",
        "Artwork size, color count, crack effect and print hand feel can be confirmed before bulk production.",
        "图案尺寸、颜色数量、裂纹效果和印花手感可在大货前确认。"
      ],
      [
        "Oversized fit control",
        "宽松版型控制",
        "Shoulder width, chest ease, sleeve opening and collar rib recovery are key points for this T-shirt program.",
        "肩宽、胸围放量、袖口宽度和领口罗纹回弹是这类T恤的重点。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "vintage-college-heavyweight-washed-tshirt",
    "productId": "tshirts",
    "categoryEn": "Custom T-Shirts",
    "categoryZh": "T恤定制",
    "titleEn": "Vintage College Washed Heavyweight T-Shirt",
    "titleZh": "复古学院运动水洗重磅T恤",
    "cardTitleEn": "Custom Vintage College Washed T-Shirt with Distressed Athletic Graphic",
    "cardTitleZh": "定制复古学院运动T恤 / 水洗仿旧图案",
    "image": "assets/products/tshirts/vintage-college-heavyweight-washed-tshirt/01-main-front-back.webp",
    "shortEn": "300GSM vintage college T-shirt with mineral wash, oversized boxy fit, aged rib collar and distressed athletic screen print.",
    "shortZh": "300GSM复古学院风T恤，矿物水洗、宽松箱型版型、做旧罗纹领和运动风仿旧丝网印花。",
    "filters": [
      "tshirts",
      "crew-neck",
      "oem",
      "custom",
      "test",
      "repeat",
      "cotton-jersey",
      "heavyweight-jersey",
      "oversized",
      "boxy-fit",
      "screen-print",
      "garment-wash",
      "rib-trim"
    ],
    "tagsEn": [
      "300GSM cotton",
      "Mineral wash",
      "College graphic",
      "Distressed edge"
    ],
    "tagsZh": [
      "300GSM纯棉",
      "矿物水洗",
      "学院图案",
      "边位做旧"
    ],
    "gallery": [
      [
        "Front and back product view",
        "正反面产品图",
        "assets/products/tshirts/vintage-college-heavyweight-washed-tshirt/01-main-front-back.webp"
      ],
      [
        "Distressed collar and sleeve detail",
        "领口袖口做旧细节",
        "assets/products/tshirts/vintage-college-heavyweight-washed-tshirt/02-distressed-detail.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Fabric",
        "面料",
        "100% cotton heavyweight single jersey, 300GSM reference",
        "100%纯棉重磅单面汗布，参考300GSM"
      ],
      [
        "Wash",
        "水洗",
        "Vintage mineral wash plus enzyme wash can be reviewed by sample",
        "可按样衣评估复古矿物洗加酵素洗"
      ],
      [
        "Fit",
        "版型",
        "Oversized boxy fit with dropped shoulder and wide half sleeve",
        "Oversized箱型版型，落肩和宽松五分袖比例"
      ],
      [
        "Edge finish",
        "边位处理",
        "Light abrasion at collar, sleeve opening and hem can be reviewed without damaging garment strength",
        "可评估领口、袖口和下摆轻磨做旧，但不影响结构牢度"
      ],
      [
        "Print",
        "印花",
        "Discharge screen print or vintage crack screen print can be reviewed for the college artwork",
        "学院图案可评估拔染丝印或仿旧裂纹丝网印"
      ]
    ],
    "features": [
      [
        "Heavyweight cotton body",
        "重磅纯棉面料",
        "The fabric weight and yarn choice can be adjusted by target hand feel, drape and selling position.",
        "可根据目标手感、垂感和销售定位调整克重与纱支。"
      ],
      [
        "Washed vintage surface",
        "水洗复古表面",
        "Garment wash effects should be tested by sample first to control shade, shrinkage and fabric twisting.",
        "水洗效果建议先打样测试，控制颜色、缩水率和扭曲率。"
      ],
      [
        "Screen print direction",
        "丝网印花方向",
        "Artwork size, color count, crack effect and print hand feel can be confirmed before bulk production.",
        "图案尺寸、颜色数量、裂纹效果和印花手感可在大货前确认。"
      ],
      [
        "Oversized fit control",
        "宽松版型控制",
        "Shoulder width, chest ease, sleeve opening and collar rib recovery are key points for this T-shirt program.",
        "肩宽、胸围放量、袖口宽度和领口罗纹回弹是这类T恤的重点。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "black-gray-vintage-denim-workwear-jacket",
    "productId": "jackets",
    "categoryEn": "Custom Jackets & Outerwear",
    "categoryZh": "夹克外套定制",
    "titleEn": "Black Gray Vintage Denim Workwear Jacket",
    "titleZh": "黑灰复古牛仔工装夹克",
    "cardTitleEn": "Custom Black Gray Denim Workwear Jacket with Vintage Washed Finish",
    "cardTitleZh": "定制黑灰牛仔工装夹克 / 复古洗水后整",
    "image": "assets/products/jackets/black-gray-vintage-denim-workwear-jacket/01-main-front.webp",
    "shortEn": "Black gray vintage workwear jacket with heavy washed cotton canvas, corduroy collar, metal zipper, large utility pockets and back flat embroidery.",
    "shortZh": "黑灰色复古工装夹克，重磅水洗棉帆布、灯芯绒拼领、金属拉链、大贴袋和后背平绣图案。",
    "filters": [
      "jackets",
      "oem",
      "custom",
      "test",
      "repeat",
      "workwear-fit",
      "outerwear-fit",
      "canvas",
      "corduroy",
      "poly-lining",
      "zipper-hardware",
      "patch-label",
      "embroidery",
      "garment-wash"
    ],
    "tagsEn": [
      "Washed canvas",
      "Corduroy collar",
      "Metal zipper",
      "Back embroidery"
    ],
    "tagsZh": [
      "水洗帆布",
      "灯芯绒领",
      "金属拉链",
      "后背刺绣"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/jackets/black-gray-vintage-denim-workwear-jacket/01-main-front.webp"
      ],
      [
        "Back embroidery artwork",
        "后背刺绣图案",
        "assets/products/jackets/black-gray-vintage-denim-workwear-jacket/02-back-view.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Fabric",
        "面料",
        "100% cotton heavy washed canvas, 500GSM +/-20GSM reference",
        "100%棉重磅水洗帆布，参考500GSM +/-20GSM"
      ],
      [
        "Collar",
        "领子",
        "100% cotton corduroy collar, 8W-14W, 280-320GSM reference",
        "100%棉灯芯绒拼领，8W-14W，参考280-320GSM"
      ],
      [
        "Lining",
        "里布",
        "Polyester quilted lining or lightweight taffeta lining can be reviewed",
        "可评估涤纶绗缝里布或轻薄塔夫绸里布"
      ],
      [
        "Wash",
        "水洗",
        "Acid wash, enzyme wash, hand brushing and pre-shrink finishing can be reviewed",
        "可评估酸洗、酵素洗、手擦边位和预缩定型"
      ],
      [
        "Craft",
        "工艺",
        "Back flat embroidery, antique zipper, snap pocket flap and double-needle workwear stitching can be reviewed",
        "可评估后背平绣、古铜拉链、袋盖四合扣和双针工装车线"
      ]
    ],
    "features": [
      [
        "Heavy workwear fabric",
        "重磅工装面料",
        "Canvas weight, wash level and collar contrast material can be adjusted by the target workwear direction.",
        "可根据目标工装方向调整帆布克重、水洗程度和拼领材料。"
      ],
      [
        "Vintage wash control",
        "复古水洗控制",
        "Wash shade, abrasion level and shrinkage should be tested before bulk to avoid unstable color difference.",
        "大货前建议测试水洗颜色、磨损程度和缩水率，避免色差不稳定。"
      ],
      [
        "Embroidery and hardware",
        "刺绣与五金",
        "Back embroidery, zipper teeth, snap finish and pocket reinforcement can be confirmed through the approved sample.",
        "后背刺绣、拉链牙色、四合扣表面和口袋加固可通过确认样确认。"
      ],
      [
        "Workwear construction",
        "工装结构",
        "Double-needle stitching, bar tack reinforcement and lining construction are key production details.",
        "双针明线、打枣加固和里布结构是重点生产细节。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "vintage-heavy-washed-canvas-workwear-jacket",
    "productId": "jackets",
    "categoryEn": "Custom Jackets & Outerwear",
    "categoryZh": "夹克外套定制",
    "titleEn": "Vintage Heavy Washed Canvas Workwear Jacket",
    "titleZh": "复古重磅水洗帆布工装夹克",
    "cardTitleEn": "Custom Heavy Washed Canvas Workwear Jacket with Multi-Pocket Construction",
    "cardTitleZh": "定制重磅水洗帆布夹克 / 多口袋工装结构",
    "image": "assets/products/jackets/vintage-heavy-washed-canvas-workwear-jacket/01-main-front.webp",
    "shortEn": "Heavy washed duck canvas workwear jacket with brown corduroy collar, antique metal zipper, vintage fading and flat embroidery artwork.",
    "shortZh": "重磅水洗帆布工装夹克，深咖灯芯绒领、古铜金属拉链、复古褪色和高密平绣图案。",
    "filters": [
      "jackets",
      "oem",
      "custom",
      "test",
      "repeat",
      "workwear-fit",
      "outerwear-fit",
      "canvas",
      "corduroy",
      "poly-lining",
      "zipper-hardware",
      "patch-label",
      "embroidery",
      "garment-wash"
    ],
    "tagsEn": [
      "Duck canvas",
      "Heavy wash",
      "Corduroy collar",
      "Flat embroidery"
    ],
    "tagsZh": [
      "鸭帆布",
      "重水洗",
      "灯芯绒领",
      "平绣"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/jackets/vintage-heavy-washed-canvas-workwear-jacket/01-main-front.webp"
      ],
      [
        "Back workwear artwork",
        "后背工装图案",
        "assets/products/jackets/vintage-heavy-washed-canvas-workwear-jacket/02-back-view.webp"
      ],
      [
        "Corduroy collar and zipper detail",
        "灯芯绒领与拉链细节",
        "assets/products/jackets/vintage-heavy-washed-canvas-workwear-jacket/03-collar-zip-detail.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Fabric",
        "面料",
        "100% cotton heavy duck canvas, 480-520GSM reference",
        "100%棉重磅鸭帆布，参考480-520GSM"
      ],
      [
        "Collar",
        "领子",
        "8W dark brown cotton corduroy collar, 280-320GSM reference",
        "8W深咖棉灯芯绒领，参考280-320GSM"
      ],
      [
        "Lining",
        "里布",
        "60-80GSM polyester taffeta or 80-120GSM quilted padding can be reviewed",
        "可评估60-80GSM涤塔夫或80-120GSM绗缝铺棉"
      ],
      [
        "Wash",
        "水洗",
        "Enzyme wash, stone wash, light sanding and localized vintage fading can be reviewed",
        "可评估酵素洗、石磨洗、轻砂洗和局部复古褪色"
      ],
      [
        "Craft",
        "工艺",
        "High-density flat embroidery, antique metal zipper, metal snap and reinforced pocket stitching can be reviewed",
        "可评估高密平绣、古铜金属拉链、金属四合扣和口袋加固车缝"
      ]
    ],
    "features": [
      [
        "Heavy workwear fabric",
        "重磅工装面料",
        "Canvas weight, wash level and collar contrast material can be adjusted by the target workwear direction.",
        "可根据目标工装方向调整帆布克重、水洗程度和拼领材料。"
      ],
      [
        "Vintage wash control",
        "复古水洗控制",
        "Wash shade, abrasion level and shrinkage should be tested before bulk to avoid unstable color difference.",
        "大货前建议测试水洗颜色、磨损程度和缩水率，避免色差不稳定。"
      ],
      [
        "Embroidery and hardware",
        "刺绣与五金",
        "Back embroidery, zipper teeth, snap finish and pocket reinforcement can be confirmed through the approved sample.",
        "后背刺绣、拉链牙色、四合扣表面和口袋加固可通过确认样确认。"
      ],
      [
        "Workwear construction",
        "工装结构",
        "Double-needle stitching, bar tack reinforcement and lining construction are key production details.",
        "双针明线、打枣加固和里布结构是重点生产细节。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "washed-distressed-pullover-hoodie",
    "productId": "hoodies",
    "categoryEn": "Custom Hoodies",
    "categoryZh": "卫衣定制",
    "titleEn": "Washed Distressed Graphic Pullover Hoodie",
    "titleZh": "水洗做旧图案套头连帽卫衣",
    "cardTitleEn": "Custom Washed Distressed Pullover Hoodie with Vintage Graphic Print",
    "cardTitleZh": "定制水洗做旧套头卫衣 / 复古图案印花",
    "image": "assets/products/hoodies/washed-distressed-pullover-hoodie/01-main-front-back.webp",
    "shortEn": "Washed charcoal pullover hoodie with heavyweight cotton terry, drop-shoulder fit, chest chain stitch badge and vintage back screen print.",
    "shortZh": "炭黑水洗做旧套头卫衣，重磅棉毛圈、落肩版型、胸前链目绣徽章和后背复古丝网印花。",
    "filters": [
      "hoodies",
      "oem",
      "custom",
      "test",
      "repeat",
      "heavyweight-fleece",
      "french-terry",
      "cotton-fleece",
      "oversized",
      "boxy-fit",
      "screen-print",
      "embroidery",
      "garment-wash",
      "rib-trim"
    ],
    "tagsEn": [
      "450GSM terry",
      "Garment wash",
      "Chain stitch",
      "Back print"
    ],
    "tagsZh": [
      "450GSM毛圈",
      "成衣水洗",
      "链目绣",
      "后背印花"
    ],
    "gallery": [
      [
        "Front and back product view",
        "正反面产品图",
        "assets/products/hoodies/washed-distressed-pullover-hoodie/01-main-front-back.webp"
      ],
      [
        "Multi-angle hoodie view",
        "多角度卫衣图",
        "assets/products/hoodies/washed-distressed-pullover-hoodie/02-multi-view.webp"
      ],
      [
        "Rib cuff detail",
        "罗纹袖口细节",
        "assets/products/hoodies/washed-distressed-pullover-hoodie/03-rib-cuff-detail.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Fabric",
        "面料",
        "100% cotton heavyweight French terry, or 80% cotton / 20% polyester fleece by target hand feel",
        "100%棉重磅毛圈，或按手感选择80%棉/20%聚酯抓绒"
      ],
      [
        "Weight",
        "克重",
        "Main fabric 420-460GSM, 450GSM recommended; rib 380-450GSM reference",
        "主身参考420-460GSM，推荐450GSM；罗纹参考380-450GSM"
      ],
      [
        "Wash",
        "水洗",
        "Enzyme wash, light stone wash or localized vintage spray effect can be reviewed",
        "可评估酵素洗、轻石磨洗或局部喷马骝做旧效果"
      ],
      [
        "Construction",
        "结构",
        "Dropped shoulder, double-layer hood, kangaroo pocket, rib cuff and hem with reinforced stress points",
        "落肩、双层帽、袋鼠袋、袖口下摆罗纹和受力位加固"
      ],
      [
        "Craft",
        "工艺",
        "Chest chain stitch plus flat embroidery and water-based vintage back screen print can be reviewed",
        "可评估胸前链目绣加平绣，以及后背水性仿旧丝网印花"
      ]
    ],
    "features": [
      [
        "Heavy hoodie fabric",
        "重磅卫衣面料",
        "Fabric weight, terry or fleece backing and wash effect can be adjusted by the target season and hand feel.",
        "可根据目标季节和手感调整克重、毛圈或抓绒底面以及水洗效果。"
      ],
      [
        "Structured hood and rib",
        "立体帽型与罗纹",
        "Double-layer hood, cuff rib and hem rib should be confirmed by sample for shape and recovery.",
        "双层帽、袖口罗纹和下摆罗纹建议通过样衣确认立体度和回弹。"
      ],
      [
        "Artwork development",
        "图案工艺开发",
        "Chest embroidery, screen print and vintage cracking can be reviewed by artwork, fabric and sample comments.",
        "胸前刺绣、丝网印花和仿旧裂纹效果可按图案、面料和样衣意见评估。"
      ],
      [
        "Reinforced sewing",
        "加固车缝",
        "Shoulder seam, hood joining, pocket opening and rib joining are reinforced for repeat wear.",
        "肩线、帽子连接、口袋开口和罗纹拼接位需要加固，提升耐穿性。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    "id": "burgundy-heavyweight-pullover-hoodie",
    "productId": "hoodies",
    "categoryEn": "Custom Hoodies",
    "categoryZh": "卫衣定制",
    "titleEn": "Burgundy Heavyweight Graphic Pullover Hoodie",
    "titleZh": "酒红色重磅图案连帽卫衣",
    "cardTitleEn": "Custom Burgundy Heavyweight Hoodie with Front Graphic and Rib Detail",
    "cardTitleZh": "定制酒红色重磅连帽卫衣 / 前幅图案与罗纹细节",
    "image": "assets/products/hoodies/burgundy-heavyweight-pullover-hoodie/01-main-front.webp",
    "shortEn": "Burgundy 450GSM heavyweight cotton fleece hoodie with oversized boxy fit, double-layer hood, vintage athletic screen print and heavy rib.",
    "shortZh": "酒红色450GSM重磅棉抓绒卫衣，宽松箱型版型、双层帽、复古运动风丝网印花和加厚罗纹。",
    "filters": [
      "hoodies",
      "oem",
      "custom",
      "test",
      "repeat",
      "heavyweight-fleece",
      "cotton-fleece",
      "oversized",
      "boxy-fit",
      "screen-print",
      "garment-wash",
      "rib-trim"
    ],
    "tagsEn": [
      "450GSM fleece",
      "Boxy fit",
      "Double hood",
      "Vintage print"
    ],
    "tagsZh": [
      "450GSM抓绒",
      "箱型版型",
      "双层帽",
      "复古印花"
    ],
    "gallery": [
      [
        "Clean front product view",
        "白底正面产品图",
        "assets/products/hoodies/burgundy-heavyweight-pullover-hoodie/01-main-front.webp"
      ],
      [
        "Back athletic artwork",
        "后背学院图案",
        "assets/products/hoodies/burgundy-heavyweight-pullover-hoodie/02-back-view.webp"
      ],
      [
        "Side hood fit view",
        "侧面帽型版型",
        "assets/products/hoodies/burgundy-heavyweight-pullover-hoodie/03-side-view.webp"
      ],
      [
        "Rib and hem detail",
        "罗纹与下摆细节",
        "assets/products/hoodies/burgundy-heavyweight-pullover-hoodie/04-rib-hem-detail.webp"
      ]
    ],
    "specs": [
      [
        "MOQ",
        "起订量",
        "From 200 pcs",
        "200件起"
      ],
      [
        "Sampling",
        "打样时间",
        "3-7 days reference",
        "参考 3-7 天"
      ],
      [
        "Bulk lead time",
        "大货周期",
        "7-20 days, confirmed by quantity and craft",
        "参考 7-20 天，按数量和工艺确认"
      ],
      [
        "Fabric",
        "面料",
        "100% premium cotton heavyweight fleece, 3-thread fleece structure",
        "100%优质棉重磅抓绒，三线卫衣布结构"
      ],
      [
        "Weight",
        "克重",
        "Main fabric 450GSM reference; rib 650-750GSM reference",
        "主身参考450GSM；罗纹参考650-750GSM"
      ],
      [
        "Fit",
        "版型",
        "Oversized boxy fit with dropped shoulder, wide sleeve and slightly cropped proportion",
        "Oversized箱型版型，落肩、宽袖和微短衣长比例"
      ],
      [
        "Hood",
        "帽子",
        "Double-layer hood without drawcord, structured hood shape and reinforced hood seam",
        "无抽绳双层帽，立体帽型和帽缝加固"
      ],
      [
        "Craft",
        "工艺",
        "Vintage distressed screen print, enzyme wash and reinforced four-needle/six-thread seam construction can be reviewed",
        "可评估复古仿旧丝网印花、酵素洗和四针六线加固车缝"
      ]
    ],
    "features": [
      [
        "Heavy hoodie fabric",
        "重磅卫衣面料",
        "Fabric weight, terry or fleece backing and wash effect can be adjusted by the target season and hand feel.",
        "可根据目标季节和手感调整克重、毛圈或抓绒底面以及水洗效果。"
      ],
      [
        "Structured hood and rib",
        "立体帽型与罗纹",
        "Double-layer hood, cuff rib and hem rib should be confirmed by sample for shape and recovery.",
        "双层帽、袖口罗纹和下摆罗纹建议通过样衣确认立体度和回弹。"
      ],
      [
        "Artwork development",
        "图案工艺开发",
        "Chest embroidery, screen print and vintage cracking can be reviewed by artwork, fabric and sample comments.",
        "胸前刺绣、丝网印花和仿旧裂纹效果可按图案、面料和样衣意见评估。"
      ],
      [
        "Reinforced sewing",
        "加固车缝",
        "Shoulder seam, hood joining, pocket opening and rib joining are reinforced for repeat wear.",
        "肩线、帽子连接、口袋开口和罗纹拼接位需要加固，提升耐穿性。"
      ]
    ],
    "quality": [
      [
        "Material confirmation",
        "面辅料确认",
        "Fabric shade, GSM, hand feel and approved accessory package should be confirmed before bulk.",
        "大货前确认面料颜色、克重、手感和面辅料组合。"
      ],
      [
        "Artwork placement",
        "图案定位",
        "Logo, patch, print and embroidery placement should follow the approved sample and measurement points.",
        "Logo、章仔、印花和刺绣位置按确认样和定位尺寸执行。"
      ],
      [
        "Craft quality",
        "工艺品质",
        "Check skipped stitches, loose threads, patch edge, print hand feel and color matching by sample standard.",
        "按样衣标准检查跳针、线头、章仔边缘、印花手感和颜色匹配。"
      ],
      [
        "Seam reinforcement",
        "车缝加固",
        "Shoulder, armhole, pocket, placket, collar and rib joining points should be reinforced where needed.",
        "肩部、袖窿、口袋、门襟、领口和罗纹拼接位按需要加固。"
      ],
      [
        "Wash and shrinkage",
        "水洗与缩水",
        "Washed styles should confirm shade band, shrinkage and twisting before bulk production.",
        "水洗款建议大货前确认色差范围、缩水率和扭曲率。"
      ],
      [
        "Measurement tolerance",
        "尺寸误差",
        "+/- 1.5 cm reference, confirm by final size chart",
        "参考 +/- 1.5cm，按最终尺码表确认"
      ]
    ]
  },
  {
    id: "series-washed-heavyweight-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Washed Heavyweight Back-Print T-Shirt Series",
    titleZh: "系列水洗重磅后背印花T恤",
    cardTitleEn: "Custom Washed Heavyweight T-Shirt Series with Architectural Back Print",
    cardTitleZh: "定制水洗重磅T恤系列 / 建筑线稿后背印花",
    image: "assets/products/tshirts/series-washed-heavyweight-tshirt/01-blue-model-front.webp",
    hoverImage: "assets/products/tshirts/series-washed-heavyweight-tshirt/03-blue-flat-back.webp",
    shortEn: "270GSM heavyweight cotton jersey T-shirt series with oversized drop-shoulder fit, soft enzyme wash and front/back architectural screen print direction.",
    shortZh: "270GSM重磅纯棉汗布T恤系列，落肩宽松版型、柔软酵素水洗，前胸小Logo和后背建筑线稿丝网印花方向。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["270GSM cotton", "Enzyme wash", "Screen print", "Oversized fit"],
    tagsZh: ["270GSM纯棉", "酵素水洗", "丝网印花", "宽松版型"],
    gallery: [
      ["Blue model front view", "蓝色上身正面", "assets/products/tshirts/series-washed-heavyweight-tshirt/01-blue-model-front.webp"],
      ["Blue flat front view", "蓝色平铺正面", "assets/products/tshirts/series-washed-heavyweight-tshirt/02-blue-flat-front.webp"],
      ["Blue back artwork", "蓝色后背图案", "assets/products/tshirts/series-washed-heavyweight-tshirt/03-blue-flat-back.webp"],
      ["Black model front view", "黑色上身正面", "assets/products/tshirts/series-washed-heavyweight-tshirt/04-black-model-front.webp"],
      ["Black flat front view", "黑色平铺正面", "assets/products/tshirts/series-washed-heavyweight-tshirt/05-black-flat-front.webp"],
      ["Black back artwork", "黑色后背图案", "assets/products/tshirts/series-washed-heavyweight-tshirt/06-black-flat-back.webp"],
      ["Green model front view", "绿色上身正面", "assets/products/tshirts/series-washed-heavyweight-tshirt/07-green-model-front.webp"],
      ["Green flat front view", "绿色平铺正面", "assets/products/tshirts/series-washed-heavyweight-tshirt/08-green-flat-front.webp"],
      ["Green back artwork", "绿色后背图案", "assets/products/tshirts/series-washed-heavyweight-tshirt/09-green-flat-back.webp"],
      ["Three color lineup", "三色系列展示", "assets/products/tshirts/series-washed-heavyweight-tshirt/10-color-lineup.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "Heavyweight cotton single jersey, compact knit construction", "重磅纯棉单面汗布，紧密针织结构"],
      ["Composition", "面料成分", "100% cotton or 100% combed cotton can be reviewed", "可评估100%棉或100%精梳棉"],
      ["Weight", "克重", "270GSM +/-5GSM recommended; 260-280GSM range", "推荐270GSM +/-5GSM，范围260-280GSM"],
      ["Fit", "版型", "Oversized relaxed fit, drop shoulder, wide sleeve and longer body", "宽松落肩版型，宽袖，衣长比常规T恤略长"],
      ["Craft", "图案工艺", "Water-based chest print and high-precision screen print for back line artwork", "前胸水浆小Logo，后背线稿图案可做高精度丝网印花"]
    ],
    features: [
      ["Series color direction", "系列颜色方向", "Blue, black and green washed colorways support a clean streetwear series presentation for made-to-order programs.", "蓝色、黑色和绿色水洗配色适合做成系列化街头T恤定制项目。"],
      ["Heavyweight cotton hand feel", "重磅纯棉手感", "The recommended 270GSM jersey balances structure, drape and comfort for oversized short-sleeve T-shirts.", "推荐270GSM汗布，兼顾挺度、垂感和宽松短袖T恤的穿着舒适度。"],
      ["Wash finishing route", "水洗后整路线", "Pre-shrink, light enzyme wash and soft silicone finishing can be reviewed to control shrinkage and improve hand feel.", "可评估预缩、轻酵素水洗和硅油柔软后整，帮助控制缩水并提升手感。"],
      ["Architectural print development", "建筑线稿印花开发", "Back artwork with fine lines should be sampled first to confirm line clarity, color matching and print hand feel.", "后背细线稿图案建议先打样确认线条清晰度、颜色匹配和印花手感。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 270GSM +/-5GSM", "目标270GSM +/-5GSM"],
      ["Shrinkage", "缩水率", "Target <=3% after pre-shrink and wash testing", "预缩和水洗测试后目标<=3%"],
      ["Print clarity", "印花清晰度", "Fine line artwork should be checked by approved sample", "细线图案按确认样检查清晰度"],
      ["Collar recovery", "领口回弹", "1x1 rib collar and back neck tape should be confirmed by sample", "1x1罗纹领和后领包边按样衣确认"],
      ["Stitch density", "针距", "About 11 stitches per inch reference", "参考约11针/英寸"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "vintage-washed-colorblock-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Vintage Washed Colorblock Athletic T-Shirt",
    titleZh: "复古水洗拼色学院运动T恤",
    cardTitleEn: "Custom Vintage Washed Colorblock T-Shirt with Athletic Club Graphic",
    cardTitleZh: "定制复古水洗拼色T恤 / 学院运动图案",
    image: "assets/products/tshirts/vintage-washed-colorblock-tshirt/04-olive-model-front.webp",
    hoverImage: "assets/products/tshirts/vintage-washed-colorblock-tshirt/03-olive-flat-back.webp",
    shortEn: "270GSM vintage washed colorblock T-shirt with boxy oversized fit, contrast rib collar and distressed athletic screen print direction.",
    shortZh: "270GSM复古水洗拼色T恤，宽松箱型版型、撞色罗纹领，搭配仿旧学院运动风丝网印花方向。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["270GSM cotton", "Colorblock panels", "Vintage wash", "Boxy fit"],
    tagsZh: ["270GSM纯棉", "拼色裁片", "复古水洗", "箱型版型"],
    gallery: [
      ["Three color lineup", "三色系列展示", "assets/products/tshirts/vintage-washed-colorblock-tshirt/01-color-lineup.webp"],
      ["Olive flat front", "橄榄色平铺正面", "assets/products/tshirts/vintage-washed-colorblock-tshirt/02-olive-flat-front.webp"],
      ["Olive back artwork", "橄榄色后背图案", "assets/products/tshirts/vintage-washed-colorblock-tshirt/03-olive-flat-back.webp"],
      ["Olive model front", "橄榄色上身正面", "assets/products/tshirts/vintage-washed-colorblock-tshirt/04-olive-model-front.webp"],
      ["Navy back artwork", "藏蓝色后背图案", "assets/products/tshirts/vintage-washed-colorblock-tshirt/05-navy-flat-back.webp"],
      ["Navy flat front", "藏蓝色平铺正面", "assets/products/tshirts/vintage-washed-colorblock-tshirt/06-navy-flat-front.webp"],
      ["Navy model front", "藏蓝色上身正面", "assets/products/tshirts/vintage-washed-colorblock-tshirt/07-navy-model-front.webp"],
      ["Charcoal back artwork", "炭灰色后背图案", "assets/products/tshirts/vintage-washed-colorblock-tshirt/08-charcoal-flat-back.webp"],
      ["Charcoal flat front", "炭灰色平铺正面", "assets/products/tshirts/vintage-washed-colorblock-tshirt/09-charcoal-flat-front.webp"],
      ["Charcoal model front", "炭灰色上身正面", "assets/products/tshirts/vintage-washed-colorblock-tshirt/10-charcoal-model-front.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "Heavyweight cotton jersey for body and sleeves", "衣身与袖片使用重磅棉汗布"],
      ["Composition", "面料成分", "100% combed cotton body; 95% cotton / 5% spandex rib can be reviewed", "衣身100%精梳棉；领口可评估95%棉/5%氨纶罗纹"],
      ["Weight", "克重", "270GSM reference for main fabric; 320-360GSM rib reference", "主布参考270GSM；罗纹参考320-360GSM"],
      ["Fit", "版型", "Unisex oversized boxy fit with drop shoulder and wide sleeve", "中性宽松箱型版型，落肩宽袖"],
      ["Craft", "图案工艺", "Panel dyeing, garment wash and distressed screen print can be reviewed", "可评估裁片染色、成衣水洗和仿旧丝网印花"]
    ],
    features: [
      ["Colorblock sewing route", "拼色车缝路线", "Body and sleeve panels can be dyed separately before sewing to keep a clearer colorblock effect.", "衣身和袖片可先分开染色再车缝，帮助保持更清晰的拼色效果。"],
      ["Vintage wash texture", "复古水洗质感", "Enzyme wash and light vintage fading can create a natural worn surface while keeping the fabric structured.", "酵素水洗和轻度复古褪色可形成自然旧化表面，同时保留面料骨感。"],
      ["Athletic club artwork", "学院运动图案", "The Northline style artwork is better suited to thin distressed screen print instead of heavy raised printing.", "此类学院运动图案更适合薄层仿旧丝网印，不建议做过厚立体印花。"],
      ["Rib and seam reinforcement", "罗纹与拼缝加固", "Contrast rib collar, shoulder seams and sleeve joining points should be reinforced for repeated wear and washing.", "撞色罗纹领、肩缝和袖片拼接位建议加固，适合反复穿着和水洗。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 270GSM +/-5%", "目标270GSM +/-5%"],
      ["Shrinkage", "缩水率", "Target around +/-3% after garment wash", "成衣水洗后目标约+/-3%"],
      ["Color matching", "颜色匹配", "Panel shades and rib color should be approved by sample", "裁片颜色和罗纹颜色按确认样执行"],
      ["Print hand feel", "印花手感", "Distressed print should stay soft and flexible after washing", "仿旧印花水洗后应保持柔软和弹性"],
      ["Seam strength", "拼缝强度", "Colorblock shoulder and sleeve seams should be checked carefully", "拼色肩缝和袖片拼接处重点检查"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "urban-memory-archive-vintage-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Urban Archive Vintage Graphic T-Shirt",
    titleZh: "城市档案复古图案T恤",
    cardTitleEn: "Custom Urban Archive Graphic T-Shirt with Vintage Crack Screen Print",
    cardTitleZh: "定制城市记忆档案复古T恤 / 裂纹丝网印花",
    image: "assets/products/tshirts/urban-memory-archive-vintage-tshirt/01-black-model-front-back.webp",
    shortEn: "260GSM premium combed cotton archive graphic T-shirt with oversized streetwear fit, vintage wash and crack screen print direction.",
    shortZh: "260GSM精梳棉档案图案T恤，宽松街头版型、复古水洗和裂纹丝网印花方向。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["260GSM cotton", "Archive graphic", "Crack print", "Oversized fit"],
    tagsZh: ["260GSM纯棉", "档案图案", "裂纹印花", "宽松版型"],
    gallery: [
      ["Black model front and back", "黑色上身正反面", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/01-black-model-front-back.webp"],
      ["Black flat front", "黑色平铺正面", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/02-black-flat-front.webp"],
      ["Black back artwork", "黑色后背图案", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/03-black-flat-back.webp"],
      ["Cream model front and back", "米色上身正反面", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/04-cream-model-front-back.webp"],
      ["Cream flat front", "米色平铺正面", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/05-cream-flat-front.webp"],
      ["Cream back artwork", "米色后背图案", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/06-cream-flat-back.webp"],
      ["Navy model front and back", "藏蓝色上身正反面", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/07-navy-model-front-back.webp"],
      ["Navy flat front", "藏蓝色平铺正面", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/08-navy-flat-front.webp"],
      ["Navy back artwork", "藏蓝色后背图案", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/09-navy-flat-back.webp"],
      ["Three color lineup", "三色系列展示", "assets/products/tshirts/urban-memory-archive-vintage-tshirt/10-color-lineup.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% premium combed cotton heavyweight single jersey", "100%精梳棉重磅单面汗布"],
      ["Yarn", "纱支", "21S compact yarn reference", "参考21S紧密纺纱"],
      ["Weight", "克重", "260GSM +/-5% recommended", "推荐260GSM +/-5%"],
      ["Fit", "版型", "Oversized streetwear fit, drop shoulder, wide sleeve and straight hem", "宽松街头版型，落肩、宽袖和平下摆"],
      ["Craft", "图案工艺", "Vintage crack screen print with soft-hand ink can be reviewed", "可评估柔软手感油墨和复古裂纹丝网印花"]
    ],
    features: [
      ["Archive poster graphic", "档案海报图案", "The back graphic uses architectural and archive elements, suitable for a multi-color vintage screen print route.", "后背图案包含建筑与档案元素，适合做多色复古丝网印花。"],
      ["Premium cotton base", "高级纯棉底布", "260GSM combed cotton single jersey provides a clear surface for detailed artwork while keeping a natural drape.", "260GSM精梳棉单面汗布适合承载细节图案，同时保持自然垂感。"],
      ["Washed vintage finish", "水洗复古后整", "Vintage enzyme wash and softener can create faded black, cream and navy color directions.", "复古酵素洗和柔软处理可形成黑色、米色、藏蓝色等旧化颜色方向。"],
      ["Oversized fit control", "宽松版型控制", "Drop shoulder amount, sleeve opening, body length and collar rib recovery should be checked in the sample stage.", "落肩量、袖口宽度、衣长和领口罗纹回弹建议在打样阶段确认。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "260GSM +/-5% reference", "参考260GSM +/-5%"],
      ["Shrinkage", "缩水率", "Target <=3% after pre-shrink treatment", "预缩处理后目标<=3%"],
      ["Print color", "印花颜色", "Warm white, dusty red and charcoal gray should be matched by approved sample", "米白、灰红和炭灰等颜色按确认样匹配"],
      ["Print durability", "印花耐洗", "Crack effect should be controlled without obvious peeling", "裂纹效果需受控，不应明显脱落"],
      ["Reinforcement", "加固工艺", "Shoulder tape, back neck tape and double-needle hems can be reviewed", "可评估肩带、后领包边和双针下摆"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "art-association-heavyweight-washed-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Art Society Washed Back-Graphic T-Shirt",
    titleZh: "艺术社团水洗后背图案T恤",
    cardTitleEn: "Custom Art Society Washed T-Shirt with Back Graphic",
    cardTitleZh: "定制艺术社团水洗T恤 / 后背艺术图案",
    image: "assets/products/tshirts/art-association-heavyweight-washed-tshirt/01-black-model-back.webp",
    shortEn: "260GSM heavyweight washed cotton T-shirt with oversized fit, art society back graphic, distressed screen print and vintage colorways.",
    shortZh: "260GSM重磅水洗纯棉T恤，宽松版型、艺术协会后背图案、仿旧丝网印花和复古颜色方向。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["260GSM cotton", "Garment wash", "Distressed print", "Rib collar"],
    tagsZh: ["260GSM纯棉", "成衣水洗", "仿旧印花", "罗纹圆领"],
    gallery: [
      ["Black model back view", "黑色上身背面", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/01-black-model-back.webp"],
      ["Black flat front", "黑色平铺正面", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/02-black-flat-front.webp"],
      ["Black back artwork", "黑色后背图案", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/03-black-flat-back.webp"],
      ["Grey model front", "灰色上身正面", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/04-grey-model-front.webp"],
      ["Grey flat front", "灰色平铺正面", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/05-grey-flat-front.webp"],
      ["Grey back artwork", "灰色后背图案", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/06-grey-flat-back.webp"],
      ["Green model front", "绿色上身正面", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/07-green-model-front.webp"],
      ["Green flat front", "绿色平铺正面", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/08-green-flat-front.webp"],
      ["Green back artwork", "绿色后背图案", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/09-green-flat-back.webp"],
      ["Three color lineup", "三色系列展示", "assets/products/tshirts/art-association-heavyweight-washed-tshirt/10-color-lineup.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% cotton heavyweight combed cotton single jersey", "100%棉重磅精梳棉单面汗布"],
      ["Weight", "克重", "260GSM reference", "参考260GSM"],
      ["Fit", "版型", "Unisex oversized fit, drop shoulder, wide sleeve and straight hem", "中性宽松版型，落肩、宽袖和平下摆"],
      ["Wash", "水洗", "Enzyme wash with light stone or vintage wash can be reviewed", "可评估酵素洗、轻石磨或复古水洗"],
      ["Craft", "图案工艺", "Water-based or plastisol screen print with distressed crack effect", "可做水浆或胶浆丝网印花，并评估仿旧裂纹效果"]
    ],
    features: [
      ["Art society visual route", "艺术社团视觉方向", "The back artwork is suited for premium vintage streetwear programs with black, grey and forest green colorways.", "后背艺术社团图案适合高级复古街头T恤项目，可开发黑色、灰色和森林绿方向。"],
      ["Washed color control", "水洗颜色控制", "Vintage washed black, stone grey and washed forest green should be confirmed by lab dip or sample before production.", "复古水洗黑、石灰色和水洗森林绿建议通过色样或样衣确认。"],
      ["Print texture development", "印花质感开发", "Distressed screen print can create a poster-like aged texture while keeping the print hand feel comfortable.", "仿旧丝网印花能形成海报旧化质感，同时保持穿着手感。"],
      ["T-shirt construction", "T恤结构工艺", "High-density rib collar, shoulder-to-shoulder tape and double-needle hems are key details for this style.", "高密罗纹领、肩到肩压条和袖口下摆双针车是这款的结构重点。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "260GSM +/-5% reference", "参考260GSM +/-5%"],
      ["Shrinkage", "缩水率", "Target around +/-3% after garment wash", "成衣水洗后目标约+/-3%"],
      ["Color fastness", "色牢度", "Target grade 4 or above by sample standard", "按样衣标准目标4级以上"],
      ["Print check", "印花检查", "Check print color, crack texture and hand feel against approved sample", "按确认样检查印花颜色、裂纹质感和手感"],
      ["Sewing", "车缝", "Shoulder tape, overlock and double-needle hems should be clean and even", "肩带、包缝和双针下摆应干净均匀"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "vintage-motor-club-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Vintage Motor Club Washed Graphic T-Shirt",
    titleZh: "复古机车俱乐部水洗图案T恤",
    cardTitleEn: "Custom Vintage Motor Club T-Shirt with Faded Wash & Crack Print",
    cardTitleZh: "定制复古机车俱乐部T恤 / 成衣染洗裂纹印花",
    image: "assets/products/tshirts/vintage-motor-club-tshirt/01-navy-model-front-back.webp",
    shortEn: "260GSM heavyweight combed cotton motor club T-shirt with oversized relaxed fit, garment dye wash and vintage cracked screen print.",
    shortZh: "260GSM重磅精梳棉机车俱乐部T恤，宽松版型、成衣染洗和复古裂纹丝网印花方向。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["260GSM cotton", "Motor graphic", "Vintage wash", "Screen print"],
    tagsZh: ["260GSM纯棉", "机车图案", "复古水洗", "丝网印花"],
    gallery: [
      ["Navy model front and back", "藏蓝色上身正反面", "assets/products/tshirts/vintage-motor-club-tshirt/01-navy-model-front-back.webp"],
      ["Navy flat front", "藏蓝色平铺正面", "assets/products/tshirts/vintage-motor-club-tshirt/02-navy-flat-front.webp"],
      ["Navy back artwork", "藏蓝色后背图案", "assets/products/tshirts/vintage-motor-club-tshirt/03-navy-flat-back.webp"],
      ["Black model front and back", "黑色上身正反面", "assets/products/tshirts/vintage-motor-club-tshirt/04-black-model-front-back.webp"],
      ["Black flat front", "黑色平铺正面", "assets/products/tshirts/vintage-motor-club-tshirt/05-black-flat-front.webp"],
      ["Black back artwork", "黑色后背图案", "assets/products/tshirts/vintage-motor-club-tshirt/06-black-flat-back.webp"],
      ["Green model front and back", "绿色上身正反面", "assets/products/tshirts/vintage-motor-club-tshirt/07-green-model-front-back.webp"],
      ["Green flat front", "绿色平铺正面", "assets/products/tshirts/vintage-motor-club-tshirt/08-green-flat-front.webp"],
      ["Green back artwork", "绿色后背图案", "assets/products/tshirts/vintage-motor-club-tshirt/09-green-flat-back.webp"],
      ["Three color lineup", "三色系列展示", "assets/products/tshirts/vintage-motor-club-tshirt/10-color-lineup.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "Heavyweight combed cotton jersey", "重磅精梳棉汗布"],
      ["Composition", "面料成分", "100% combed cotton", "100%精梳棉"],
      ["Weight", "克重", "260GSM reference, tolerance by sample standard", "参考260GSM，公差按样衣标准确认"],
      ["Fit", "版型", "Oversized relaxed boxy fit with drop shoulder and wide sleeves", "宽松箱型版型，落肩宽袖"],
      ["Craft", "图案工艺", "Garment dye wash, enzyme wash and 3-color vintage screen print can be reviewed", "可评估成衣染洗、酵素洗和三色复古丝网印花"]
    ],
    features: [
      ["Motor club artwork", "机车俱乐部图案", "The back artwork uses motor culture typography and map details, suitable for vintage cracked screen print.", "后背图案结合机车文化字体和地图细节，适合复古裂纹丝网印花。"],
      ["Heavy streetwear fabric", "重磅街头面料", "260GSM combed cotton jersey supports a premium streetwear hand feel without making the T-shirt too stiff.", "260GSM精梳棉汗布能做出高级街头手感，同时不会让T恤过硬。"],
      ["Garment dye wash route", "成衣染洗路线", "Faded navy, washed black and faded forest green can be reviewed through garment dye, enzyme wash and softener finish.", "褪色藏蓝、水洗黑和褪色森林绿可通过成衣染色、酵素洗和柔软处理评估。"],
      ["Durable construction", "耐穿结构", "A high-density rib collar, shoulder reinforcement and double-needle hems help the style hold shape after repeated wear.", "高密罗纹领、肩部加固和双针下摆有助于反复穿着后保持版型。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 260GSM +/-5%", "目标260GSM +/-5%"],
      ["Shrinkage", "缩水率", "Target <=5% after wash testing", "水洗测试后目标<=5%"],
      ["Color fastness", "色牢度", "Target grade 4 or above by sample standard", "按样衣标准目标4级以上"],
      ["Print durability", "印花耐洗", "Target no obvious peeling after repeated wash testing", "反复水洗测试后目标无明显脱落"],
      ["Pilling and twisting", "起球与扭曲", "Fabric surface and side seam twisting should be checked after wash", "水洗后检查布面起球和侧缝扭曲"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "smoke-gray-tech-graphic-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Smoke Gray Signal Core Graphic T-Shirt",
    titleZh: "烟灰色信号核心图案T恤",
    cardTitleEn: "Custom Smoke Gray Washed T-Shirt with Signal Core Graphic",
    cardTitleZh: "定制烟灰色水洗T恤 / 信号核心图案",
    image: "assets/products/tshirts/smoke-gray-tech-graphic-tshirt/01-front-view.webp",
    hoverImage: "assets/products/tshirts/smoke-gray-tech-graphic-tshirt/02-back-view.webp",
    shortEn: "260GSM washed black cotton jersey T-shirt with unisex oversized boxy fit, rib crew neck and high-detail signal waveform graphic for screen print or DTG sampling.",
    shortZh: "260GSM水洗黑纯棉汗布T恤，中性宽松箱型版型、罗纹圆领，搭配高细节科技声波图案，可评估高精度丝印或DTG打样。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "digital-print", "garment-wash", "rib-trim"],
    tagsEn: ["260GSM cotton", "Washed black", "Tech graphic", "Boxy fit"],
    tagsZh: ["260GSM纯棉", "水洗黑", "科技图案", "箱型版"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/smoke-gray-tech-graphic-tshirt/01-front-view.webp"],
      ["Back product view", "背面产品图", "assets/products/tshirts/smoke-gray-tech-graphic-tshirt/02-back-view.webp"],
      ["Waveform print detail", "声波图案细节", "assets/products/tshirts/smoke-gray-tech-graphic-tshirt/03-print-detail.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity", "参考 7-20 天，按数量确认"],
      ["Fabric", "面料", "100% cotton combed single jersey, heavyweight construction", "100%棉精梳单面针织布，重磅Jersey结构"],
      ["Weight", "克重", "260GSM reference", "参考260GSM"],
      ["Wash", "水洗", "Washed black finish with light vintage fading; pre-shrink and garment wash recommended", "水洗黑轻做旧效果，建议预缩加成衣洗水"],
      ["Fit", "版型", "Unisex oversized boxy fit, dropped shoulder, wide chest and sleeve, controlled body length", "男女同款宽松箱型版型，落肩、胸宽袖肥，衣长控制不拖沓"],
      ["Collar", "领口", "2x1 high-density rib crew neck, about 2.2-2.8cm wide, with back neck tape", "2x1高密罗纹圆领，宽度约2.2-2.8cm，后领内侧加肩颈压条"],
      ["Print", "印花", "High-detail tech graphic can be reviewed by CMYK screen print plus spot purple, or DTG for sampling", "高细节科技图案可评估CMYK丝印加紫色专色，样衣可用DTG数码直喷"]
    ],
    features: [
      ["Washed black streetwear base", "水洗黑街头底色", "The washed black body gives the T-shirt a vintage surface while keeping a clean independent-brand direction.", "水洗黑衣身形成复古表面，同时保持独立品牌常用的干净街头感。"],
      ["Oversized boxy silhouette", "宽松箱型版型", "Shoulder width, chest ease, sleeve width and body length should be balanced so the fit stays wide but not overly long.", "肩宽、胸围放量、袖肥和衣长需要平衡，做到宽松但不变成长款大码T恤。"],
      ["High-detail signal artwork", "高细节声波图案", "The artwork includes fine lines, grids, waveforms, gradients and purple accents, so sample proofing is important before bulk production.", "图案包含细线、网格、波形、渐变和紫色点缀，大货前建议先打样确认还原度。"],
      ["Print route flexibility", "印花方案灵活", "For bulk orders, high-mesh screen print with matte ink is practical; for samples or complex gradients, DTG can be reviewed first.", "大货可评估高目数哑光丝印；样衣或复杂渐变可先用DTG数码直喷测试。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 260GSM +/-5%", "目标260GSM +/-5%"],
      ["Shrinkage", "缩水率", "Pre-shrink and garment wash should control shrinkage before bulk", "建议预缩和成衣洗水后控制缩水"],
      ["Print detail", "印花细节", "Fine lines, grid dots, waveform clarity and purple spot color should match the approved sample", "细线、网点、声波清晰度和紫色专色按确认样匹配"],
      ["Collar recovery", "领口回弹", "High-density rib collar and back neck tape should hold shape after washing", "高密罗纹领和后领压条需保证水洗后不易变形"],
      ["Sewing finish", "车缝做工", "Shoulder seams, sleeve opening and hem should use clean double-needle or reinforced stitching", "肩缝、袖口和下摆建议做干净双针或加固车线"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "vintage-cream-analog-signal-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Vintage Cream Analog Signal Graphic T-Shirt",
    titleZh: "奶油白模拟信号图案T恤",
    cardTitleEn: "Custom Vintage Cream T-Shirt with Analog Signal Archive Graphic",
    cardTitleZh: "定制奶油白重磅T恤 / 模拟信号档案图案",
    image: "assets/products/tshirts/vintage-cream-analog-signal-tshirt/01-front-view.webp",
    hoverImage: "assets/products/tshirts/vintage-cream-analog-signal-tshirt/02-back-view.webp",
    shortEn: "270GSM vintage cream combed cotton jersey T-shirt with unisex oversized boxy fit, heavy 2x2 rib crew neck, distressed halftone front graphic and small back-neck text.",
    shortZh: "270GSM复古奶油白精梳棉汗布T恤，男女同款宽松箱型版型、2x2厚罗纹圆领，搭配做旧网点前幅大图和后领小字。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["270GSM cotton", "Vintage cream", "Halftone print", "Boxy fit"],
    tagsZh: ["270GSM纯棉", "复古奶油白", "网点印花", "箱型版"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/vintage-cream-analog-signal-tshirt/01-front-view.webp"],
      ["Back product view", "背面产品图", "assets/products/tshirts/vintage-cream-analog-signal-tshirt/02-back-view.webp"],
      ["Analog signal print detail", "模拟信号印花细节", "assets/products/tshirts/vintage-cream-analog-signal-tshirt/03-print-detail.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% combed cotton single jersey", "100%精梳棉单面针织汗布"],
      ["Weight", "克重", "270GSM reference, 260-280GSM can be reviewed", "参考270GSM，可评估260-280GSM"],
      ["Color", "颜色", "Vintage cream / off-white", "复古奶油白 / 米白"],
      ["Fit", "版型", "Unisex oversized boxy fit with dropped shoulder and wide sleeve", "男女同款宽松箱型版型，落肩宽袖"],
      ["Collar", "领口", "2x2 cotton rib, about 2.2-2.5cm wide, with back neck tape", "2x2棉罗纹，宽约2.2-2.5cm，后领加压条"],
      ["Print", "印花", "Water-based screen print with distressed halftone effect and four-color artwork", "水浆丝网印花，做旧网点效果，约四色图案"]
    ],
    features: [
      ["Vintage cream base", "复古奶油白底色", "The off-white body gives the graphic a softer vintage tone and works well for brand capsule collections.", "米白衣身能让图案更有复古感，适合品牌胶囊系列和上新款。"],
      ["Analog signal artwork", "模拟信号图案", "The front artwork combines dark red, charcoal, smoke grey and cobalt blue with distressed halftone details.", "前幅图案结合暗红、炭黑、烟灰和钴蓝，并带做旧网点细节。"],
      ["Back-neck small print", "后领小字", "A small back-neck text placement adds detail without making the style too busy.", "后领小字增加细节感，同时不会让整件衣服过满。"],
      ["Soft but structured hand feel", "柔软但有骨感", "Pre-shrink and light enzyme wash can help control shrinkage while keeping a comfortable heavyweight hand feel.", "预缩和轻酵素洗可帮助控制缩水，同时保留重磅T恤的舒适手感。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 270GSM +/-5%", "目标270GSM +/-5%"],
      ["Shrinkage", "缩水率", "Target within +/-3% after pre-shrink and wash test", "预缩和洗水测试后目标控制在+/-3%以内"],
      ["Print proofing", "印花打样", "Halftone dots, distressed texture and color matching should be confirmed by sample before production", "网点、做旧肌理和颜色需要先打样确认"],
      ["Collar recovery", "领口回弹", "2x2 rib collar and back neck tape should hold shape after washing", "2x2罗纹领和后领压条需保证水洗后不易变形"],
      ["Sewing finish", "车缝做工", "Sleeve opening and hem should use clean double-needle stitching", "袖口和下摆建议做干净双针车线"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "white-portrait-back-graphic-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "White Portrait Back-Print Heavyweight T-Shirt",
    titleZh: "白色人物后背大图重磅T恤",
    cardTitleEn: "Custom White Heavyweight T-Shirt with Portrait Back Graphic",
    cardTitleZh: "定制白色重磅T恤 / 后背人物大图",
    image: "assets/products/tshirts/white-portrait-back-graphic-tshirt/01-front-view.webp",
    hoverImage: "assets/products/tshirts/white-portrait-back-graphic-tshirt/02-back-view.webp",
    shortEn: "280GSM white combed cotton jersey T-shirt with oversized boxy fit, small gothic chest logo and large halftone portrait back print.",
    shortZh: "280GSM白色精梳棉重磅汗布T恤，宽松箱型版型，前胸哥特小标与后背大幅半色调人物图案。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "digital-print", "rib-trim"],
    tagsEn: ["280GSM cotton", "Back graphic", "Halftone portrait", "Boxy fit"],
    tagsZh: ["280GSM纯棉", "后背大图", "半色调人物", "箱型版"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/white-portrait-back-graphic-tshirt/01-front-view.webp"],
      ["Back product view", "背面产品图", "assets/products/tshirts/white-portrait-back-graphic-tshirt/02-back-view.webp"],
      ["Front logo detail", "前胸小标细节", "assets/products/tshirts/white-portrait-back-graphic-tshirt/03-front-logo-detail.webp"],
      ["Back portrait print detail", "后背人物图案细节", "assets/products/tshirts/white-portrait-back-graphic-tshirt/04-back-print-detail.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% combed cotton single jersey", "100%精梳棉单面针织汗布"],
      ["Weight", "克重", "280GSM reference, 260-280GSM can be reviewed", "参考280GSM，可评估260-280GSM"],
      ["Color", "颜色", "Pure white / vintage white", "纯白 / 复古白"],
      ["Fit", "版型", "Unisex oversized boxy fit with dropped shoulder and straight hem", "男女同款宽松箱型版型，落肩直下摆"],
      ["Collar", "领口", "1x1 rib, about 2.2-2.5cm wide, with back neck tape", "1x1罗纹，宽约2.2-2.5cm，后领加压条"],
      ["Print", "印花", "Small two-color chest logo and large black/red halftone back graphic", "前胸双色小标，后背黑红半色调大图"]
    ],
    features: [
      ["Large back artwork", "后背大图重点", "The large portrait graphic is the core visual, so print size, placement and halftone clarity should be confirmed before production.", "后背人物大图是核心视觉，大货前需确认尺寸、位置和半色调清晰度。"],
      ["Clean white heavyweight base", "白色重磅底衫", "A heavier 280GSM cotton jersey helps support the large back print and gives the T-shirt a more structured look.", "280GSM重磅棉汗布能支撑后背大图，并让整件T恤更有骨感。"],
      ["Front chest logo", "前胸小标", "The front uses a smaller gothic logo with a red number accent, keeping the front clean while echoing the back graphic.", "前胸使用哥特字体小标和红色数字点缀，正面更干净，同时呼应后背图案。"],
      ["Sample-first print route", "先打样确认印花", "DTG can be reviewed for sampling, while screen print with halftone separation is more practical for production.", "样衣可评估DTG数码直喷，大货更建议按半色调分色做丝网印花。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 280GSM +/-5%", "目标280GSM +/-5%"],
      ["Shrinkage", "缩水率", "Target within +/-3% after pre-shrink testing", "预缩测试后目标控制在+/-3%以内"],
      ["White fabric handling", "白色面料处理", "White fabric should avoid yellowing, staining and heavy wash effects during finishing", "白色面料后整需避免发黄、沾污和过重洗水效果"],
      ["Print detail", "印花细节", "Portrait face detail, gothic text and red accent color should match the approved sample", "人物脸部细节、哥特文字和红色点缀按确认样匹配"],
      ["Collar and shoulder", "领口与肩部", "Rib collar, shoulder tape and shoulder seams should stay flat after washing", "罗纹领、肩颈压条和肩缝水洗后需保持平整"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "dark-streetwear-heavyweight-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Dark Streetwear Heavyweight T-Shirt",
    titleZh: "暗黑街头重磅T恤",
    cardTitleEn: "Custom Dark Streetwear Heavyweight T-Shirt with Distressed Screen Print",
    cardTitleZh: "定制暗黑街头重磅T恤 / 做旧丝网印花",
    image: "assets/products/tshirts/dark-streetwear-heavyweight-tshirt/01-front-view.png",
    hoverImage: "assets/products/tshirts/dark-streetwear-heavyweight-tshirt/02-back-view.png",
    shortEn: "260GSM washed black compact cotton jersey T-shirt with unisex oversized boxy fit, small distressed chest logo and large gothic back artwork for dark streetwear collections.",
    shortZh: "260GSM水洗黑重磅紧密精梳棉T恤，男女同款宽松箱型版型，前胸做旧小Logo与后背哥特大图，适合暗黑街头系列开发。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["260GSM cotton", "Washed black", "Distressed print", "Dark streetwear"],
    tagsZh: ["260GSM纯棉", "水洗黑", "做旧印花", "暗黑街头"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/dark-streetwear-heavyweight-tshirt/01-front-view.png"],
      ["Back product view", "背面产品图", "assets/products/tshirts/dark-streetwear-heavyweight-tshirt/02-back-view.png"],
      ["Chest logo print detail", "胸前Logo印花细节", "assets/products/tshirts/dark-streetwear-heavyweight-tshirt/03-chest-print-detail.png"],
      ["Back cracked print detail", "后背裂纹印花细节", "assets/products/tshirts/dark-streetwear-heavyweight-tshirt/04-back-print-detail.png"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% cotton heavyweight compact combed single jersey", "100%棉重磅紧密精梳棉单面布"],
      ["Weight", "克重", "260GSM reference", "参考260GSM"],
      ["Color", "颜色", "Washed black / vintage black", "水洗黑 / 复古黑"],
      ["Fit", "版型", "Unisex premium oversized boxy fit with dropped shoulder, wide chest and wide sleeves", "男女同款高级宽松箱型版型，落肩、宽胸、宽袖"],
      ["Collar", "领口", "1x1 rib crew neck, about 2-2.5cm wide, with shoulder-to-shoulder neck tape", "1x1罗纹圆领，宽约2-2.5cm，后领建议加肩到肩包条"],
      ["Print", "印花", "Distressed screen print with off-white, oxidized silver and muted burgundy accents", "做旧丝网印花，可评估骨白、氧化银灰和暗酒红点缀"]
    ],
    features: [
      ["Dark streetwear direction", "暗黑街头方向", "The washed black base and gothic artwork fit metal, punk and gothic streetwear capsule collections.", "水洗黑底色配合哥特图案，适合Metal、Punk、Gothic暗黑街头胶囊系列。"],
      ["Cracked back artwork", "裂纹后背大图", "The large back graphic can be developed with crack print effect, distressed ink and controlled ink breakage.", "后背大图可按裂纹效果、做旧油墨和局部不规则掉浆方向开发。"],
      ["Premium boxy fit", "高级箱型版型", "A slightly shorter oversized boxy body keeps the garment wide and structured without becoming a long basic band tee.", "略短的宽松箱型衣身让版型更宽、更有骨感，避免做成普通长款Band Tee。"],
      ["Durable heavyweight construction", "耐穿重磅结构", "Double-needle sleeve opening and hem, reinforced shoulder seams and pre-shrink finishing help reduce twisting after wash.", "双针袖口和下摆、肩缝加固和预缩处理，有助于减少水洗后扭曲变形。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 260GSM +/-5%", "目标260GSM +/-5%"],
      ["Shrinkage", "缩水率", "Pre-shrink and garment wash should control shrinkage before bulk", "建议预缩和成衣洗水后控制缩水"],
      ["Wash effect", "洗水效果", "Vintage black should stay clean and premium, avoiding heavy snow-wash unless confirmed by sample", "复古黑效果建议保持高级干净，除非样衣确认，否则不做明显雪花洗"],
      ["Print durability", "印花耐洗", "Crack texture, distressed ink and fine text should be checked after wash testing", "裂纹肌理、做旧油墨和小字细节需做水洗测试确认"],
      ["Collar stability", "领口稳定", "Rib collar, neck tape and double-needle stitching should hold shape after repeated washing", "罗纹领、肩颈包条和双针压线需保证反复水洗后稳定"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "vintage-black-gray-heavyweight-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Vintage Black Gray Heavyweight T-Shirt",
    titleZh: "复古黑灰重磅T恤",
    cardTitleEn: "Custom Vintage Black Gray Heavyweight T-Shirt with Distressed Archive Print",
    cardTitleZh: "定制复古黑灰重磅T恤 / 做旧档案图案印花",
    image: "assets/products/tshirts/vintage-black-gray-heavyweight-tshirt/01-front-view.png",
    hoverImage: "assets/products/tshirts/vintage-black-gray-heavyweight-tshirt/02-back-view.png",
    shortEn: "250GSM vintage charcoal compact cotton jersey T-shirt with garment wash, dropped-shoulder relaxed fit and botanical archive screen print for streetwear brand development.",
    shortZh: "250GSM复古炭灰紧密精梳棉汗布T恤，成衣水洗做旧，宽松落肩微长版型，搭配植物档案感丝网印花，适合街头男装系列开发。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["250GSM cotton", "Vintage charcoal", "Archive print", "Garment wash"],
    tagsZh: ["250GSM纯棉", "复古炭灰", "档案图案", "成衣水洗"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/vintage-black-gray-heavyweight-tshirt/01-front-view.png"],
      ["Back product view", "背面产品图", "assets/products/tshirts/vintage-black-gray-heavyweight-tshirt/02-back-view.png"],
      ["Front archive print detail", "正面档案印花细节", "assets/products/tshirts/vintage-black-gray-heavyweight-tshirt/03-front-print-detail.png"],
      ["Back archive print detail", "背面档案印花细节", "assets/products/tshirts/vintage-black-gray-heavyweight-tshirt/04-back-print-detail.png"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% cotton compact combed single jersey", "100%棉紧密精梳单面平纹针织汗布"],
      ["Weight", "克重", "250GSM reference", "参考250GSM"],
      ["Wash", "水洗", "Vintage charcoal garment wash with pigment wash and enzyme wash direction", "复古炭灰成衣水洗，可评估涂料洗和酵素洗方向"],
      ["Fit", "版型", "Men's oversized relaxed fit with dropped shoulder, straight body, wider sleeve and slightly longer length", "男装宽松落肩微长版，直筒衣身、宽胸、宽袖，不做过短方盒版"],
      ["Collar", "领口", "300-320G 1x1 rib crew neck with shoulder tape or cotton tape reinforcement", "约300-320G高密1x1罗纹圆领，建议肩缝加透明肩带或棉带稳定肩型"],
      ["Print", "印花", "High-density screen print with off-white, gray-white and small rust-red accents", "高密度丝网印花，可评估骨白、灰白和少量锈红点缀"]
    ],
    features: [
      ["Vintage charcoal wash", "复古炭灰水洗", "The garment wash gives the T-shirt a faded archive look while keeping the fabric clean and wearable.", "成衣水洗做出炭灰褪色和旧化效果，同时保持整体干净耐穿。"],
      ["Botanical archive graphic", "植物档案图案", "The botanical scan, measuring lines, small numbers and distressed texture create a technical archive visual.", "植物扫描、测量线、数字和做旧肌理形成技术档案感视觉。"],
      ["Relaxed streetwear shape", "街头宽松轮廓", "Dropped shoulders, a wide chest and a slightly longer body make it suitable for streetwear drops and brand series.", "落肩、宽胸和微长衣身更适合街头男装上新和品牌系列开发。"],
      ["Sample-first print control", "先打样确认印花", "Fine lines and small text should be checked by sample before bulk production to keep the artwork clear.", "细线、小字和做旧裂纹建议先打样确认，再安排大货生产。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 250GSM +/-5%", "目标250GSM +/-5%"],
      ["Shrinkage", "缩水率", "Pre-shrink and garment wash should control shrinkage before bulk", "建议预缩和成衣洗水后控制缩水"],
      ["Wash color", "水洗颜色", "Vintage charcoal color should be approved by sample before production", "复古炭灰颜色需按确认样控制"],
      ["Print detail", "印花细节", "Archive lines, botanical texture and small characters should remain clear after wash testing", "档案线条、植物纹理和小字细节需水洗测试后保持清晰"],
      ["Collar and shoulder", "领口与肩部", "Rib collar, shoulder tape and double-needle stitching should stay flat after washing", "罗纹领、肩带加固和双针车缝水洗后需保持平整"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "music-tour-heavyweight-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Music Tour Heavyweight T-Shirt",
    titleZh: "音乐巡演重磅T恤",
    cardTitleEn: "Custom Music Tour Heavyweight T-Shirt with Embroidered Chest Logo and Back Tour Graphic",
    cardTitleZh: "定制音乐巡演重磅T恤 / 胸前平绣与后背巡演图案",
    image: "assets/products/tshirts/music-tour-heavyweight-tshirt/01-front-view.jpg",
    hoverImage: "assets/products/tshirts/music-tour-heavyweight-tshirt/02-back-view.jpg",
    shortEn: "260-300GSM washed black cotton T-shirt with boxy drop-shoulder fit, embroidered chest logo and breathable discharge-style back tour graphic.",
    shortZh: "260-300GSM水洗黑重磅棉T恤，宽松箱型落肩版型，前胸平绣小Logo，后背巡演大图可评估拔印和水浆结合工艺。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "embroidery", "garment-wash", "rib-trim"],
    tagsEn: ["260-300GSM cotton", "Chest embroidery", "Back tour print", "Vintage wash"],
    tagsZh: ["260-300GSM纯棉", "胸前平绣", "后背巡演图案", "复古水洗"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/music-tour-heavyweight-tshirt/01-front-view.jpg"],
      ["Back product view", "背面产品图", "assets/products/tshirts/music-tour-heavyweight-tshirt/02-back-view.jpg"],
      ["Back print detail", "后背印花细节", "assets/products/tshirts/music-tour-heavyweight-tshirt/03-back-print-detail.jpg"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% combed cotton heavyweight single or double jersey", "100%精梳棉重磅单纱或双纱平纹汗布"],
      ["Weight", "克重", "260-300GSM reference", "参考260-300GSM"],
      ["Wash", "水洗", "Light acid wash or vintage black garment wash", "轻微炭洗 / 复古黑成衣水洗"],
      ["Fit", "版型", "Men's oversized boxy fit with dropped shoulder, wide chest and slightly cropped body", "男装宽松箱型落肩版，宽胸围、微短衣长，街头感更强"],
      ["Craft", "工艺", "Flat embroidery at chest; discharge and water-based screen print can be reviewed for back graphic", "胸前平绣，后背大图可评估拔印和水浆丝网印花"],
      ["Collar", "领口", "2.5cm double-layer 1x1 rib collar with neck tape and double-needle topstitching", "约2.5cm双层1x1罗纹领，后领通肩压条和双针压线"]
    ],
    features: [
      ["Tour graphic direction", "巡演图案方向", "The back layout is suitable for music, club, event and streetwear capsule graphics.", "后背版面适合音乐巡演、俱乐部、活动限定和街头品牌胶囊图案。"],
      ["Embroidery plus print", "绣花加印花组合", "A small embroidered chest logo keeps the front clean while the back carries the main visual.", "正面小面积平绣保持简洁，后背大图负责主视觉。"],
      ["Breathable back print", "透气后背印花", "For large-area artwork, discharge or water-based print should be reviewed to reduce stiffness.", "大面积后背图案建议评估拔印或水浆，减少硬板和不透气感。"],
      ["Boxy streetwear fit", "箱型街头版型", "Dropped shoulder and a cropped boxy body create the American streetwear proportion.", "落肩和微短箱型衣身更接近美式街头比例。"]
    ],
    quality: [
      ["Embroidery position", "绣花位置", "Chest logo placement and thread color should match the approved sample", "胸前Logo位置和绣线颜色按确认样匹配"],
      ["Back print clarity", "后背印花清晰度", "Red and white outline details should stay sharp after wash testing", "红白描边细节需水洗测试后保持清晰"],
      ["Collar stability", "领口稳定", "Rib collar and neck tape should resist deformation after repeated washing", "罗纹领和后领压条需保证多次水洗后不松垮"],
      ["Seam strength", "车缝强度", "Shoulder, armhole and hem stitching should be checked for pulling resistance", "肩缝、袖笼和下摆车缝需检查耐拉扯"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "american-vintage-acid-wash-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "American Vintage Acid Wash T-Shirt",
    titleZh: "美式复古酸洗T恤",
    cardTitleEn: "Custom American Vintage Acid Wash T-Shirt with Distressed Athletic Graphic",
    cardTitleZh: "定制美式复古酸洗T恤 / 做旧运动图案印花",
    image: "assets/products/tshirts/american-vintage-acid-wash-tshirt/01-front-view.jpg",
    hoverImage: "assets/products/tshirts/american-vintage-acid-wash-tshirt/02-back-view.jpg",
    shortEn: "260-300GSM acid-washed cotton T-shirt with American vintage oversized fit, distressed front logo and large athletic back graphic.",
    shortZh: "260-300GSM酸洗做旧重磅棉T恤，美式复古宽松版型，前胸小标和后背运动风大图适合街头上新开发。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["260-300GSM cotton", "Acid wash", "Athletic graphic", "Oversized fit"],
    tagsZh: ["260-300GSM纯棉", "酸洗做旧", "运动图案", "宽松版型"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/american-vintage-acid-wash-tshirt/01-front-view.jpg"],
      ["Back product view", "背面产品图", "assets/products/tshirts/american-vintage-acid-wash-tshirt/02-back-view.jpg"],
      ["Front logo detail", "胸前小标细节", "assets/products/tshirts/american-vintage-acid-wash-tshirt/03-front-logo-detail.jpg"],
      ["Back graphic detail", "后背图案细节", "assets/products/tshirts/american-vintage-acid-wash-tshirt/04-back-print-detail.jpg"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% combed cotton, 16S or 21S yarn can be reviewed", "100%精梳棉，可评估16S或21S纱线方向"],
      ["Weight", "克重", "260-300GSM heavyweight reference", "参考260-300GSM重磅面料"],
      ["Wash", "水洗", "Acid wash, mineral wash and enzyme wash can be sampled", "可按酸洗、矿物洗和酵素洗方向打样"],
      ["Print", "印花", "Discharge or water-based screen print for soft distressed graphic", "可评估拔印或水浆丝印，做出柔软做旧图案"],
      ["Fit", "版型", "American vintage oversized fit with dropped shoulder, boxy chest and straight sleeve", "美式复古宽松版，落肩、宽身、袖口平直挺括"]
    ],
    features: [
      ["American vintage mood", "美式复古氛围", "The washed gray-black base and athletic artwork work well for vintage sports and streetwear projects.", "灰黑斑驳底色配合运动图案，适合复古运动和街头男装项目。"],
      ["Soft old-print effect", "柔软旧化印花", "Discharge or water-based print helps the graphic feel integrated with the washed body.", "拔印或水浆有助于让图案和水洗底色融合，不像厚胶硬板。"],
      ["Durable collar build", "耐穿领口结构", "A wider rib collar and reinforced neck tape help the collar keep shape after repeated wear.", "加宽罗纹领和后领压条能提升多次穿洗后的稳定度。"],
      ["Easy brand adaptation", "适合品牌改图", "Logo text, color, print placement and wash shade can be adjusted from reference artwork.", "文字Logo、颜色、印花位置和水洗色阶都可按参考图调整。"]
    ],
    quality: [
      ["Wash consistency", "水洗一致性", "Acid wash shade should be controlled by approved sample and bulk panels", "酸洗色阶需按确认样和大货布片控制"],
      ["Print handfeel", "印花手感", "Large print should remain breathable and not overly thick", "大面积印花需保持透气，避免过厚"],
      ["Shrinkage", "缩水率", "Enzyme wash and pre-shrink testing should control shrinkage before delivery", "酵素洗和预缩测试后再确认缩水率"],
      ["Collar recovery", "领口回弹", "Rib collar should recover after stretching and washing", "罗纹领拉伸和水洗后需保持回弹"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "black-serpent-sun-badge-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Black Serpent Sun Badge T-Shirt",
    titleZh: "黑巨蛇太阳徽章T恤",
    cardTitleEn: "Custom Black Serpent Sun Badge T-Shirt with Vintage Crack Print",
    cardTitleZh: "定制黑巨蛇太阳徽章T恤 / 复古裂纹印花",
    image: "assets/products/tshirts/black-serpent-sun-badge-tshirt/01-front-view.jpg",
    hoverImage: "assets/products/tshirts/black-serpent-sun-badge-tshirt/02-back-view.jpg",
    shortEn: "260-300GSM mineral-washed cotton T-shirt with oversized boxy fit, serpent sun badge artwork and breathable distressed crack screen print.",
    shortZh: "260-300GSM矿物洗重磅棉T恤，宽松箱型版型，蛇形太阳徽章图案可做水浆、拔印或复古裂纹丝印效果。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["260-300GSM cotton", "Mineral wash", "Serpent badge", "Crack print"],
    tagsZh: ["260-300GSM纯棉", "矿物洗", "巨蛇徽章", "裂纹印花"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/black-serpent-sun-badge-tshirt/01-front-view.jpg"],
      ["Back product view", "背面产品图", "assets/products/tshirts/black-serpent-sun-badge-tshirt/02-back-view.jpg"],
      ["Serpent print detail", "巨蛇图案细节", "assets/products/tshirts/black-serpent-sun-badge-tshirt/03-serpent-print-detail.jpg"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% cotton, open-end or double-yarn jersey can be reviewed", "100%棉，可评估气流纺或双纱平纹汗布"],
      ["Weight", "克重", "260-300GSM reference", "参考260-300GSM"],
      ["Wash", "水洗", "Acid wash or mineral wash for uneven vintage gray-black surface", "酸洗或矿物洗，做出不均匀灰黑复古表面"],
      ["Print", "印花", "Water-based, discharge or crack screen print can be sampled", "水浆、拔印或裂纹丝印可按样衣评估"],
      ["Collar", "领口", "3.5cm thicker rib collar with double-needle stitching and neck tape", "约3.5cm加厚罗纹领，双针车缝和肩颈拉坎条加固"]
    ],
    features: [
      ["Serpent badge artwork", "巨蛇徽章图案", "The serpent and sun badge gives the style a dark vintage sports-club direction.", "蛇形和太阳徽章让款式更偏暗黑复古运动俱乐部方向。"],
      ["Heavy acid wash base", "重磅酸洗底色", "A heavier cotton base keeps the garment structured after mineral wash.", "重磅棉底布能在矿物洗后保持挺括有型。"],
      ["Crack print option", "裂纹印花方案", "Crack print can create an aged badge look while still staying breathable.", "裂纹印花能做出老徽章质感，同时保持较好的透气性。"],
      ["Oversized boxy cut", "宽松箱型剪裁", "Wide chest, moderate length and relaxed sleeves match current streetwear proportions.", "宽胸、适中衣长和宽松袖型符合当下街头比例。"]
    ],
    quality: [
      ["Badge clarity", "徽章清晰度", "Serpent lines and circular badge text should remain visible after wash", "蛇形线条和圆形徽章文字水洗后需保持清晰"],
      ["Wash shade", "水洗色阶", "Gray-black mineral wash should be approved by sample", "灰黑矿物洗色阶按确认样控制"],
      ["Collar strength", "领口强度", "Thick rib collar should stay flat and not twist after washing", "加厚罗纹领水洗后需平整不扭"],
      ["Print durability", "印花耐洗", "Crack print effect should be tested to avoid uncontrolled peeling", "裂纹效果需测试，避免非预期大面积脱落"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "distressed-gothic-hardware-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Distressed Gothic Hardware T-Shirt",
    titleZh: "破洞哥特重工T恤",
    cardTitleEn: "Custom Distressed Gothic Hardware T-Shirt with Chain and Safety Pin Detail",
    cardTitleZh: "定制破洞哥特重工T恤 / 链条五金与解构破洞",
    image: "assets/products/tshirts/distressed-gothic-hardware-tshirt/01-front-view.jpg",
    hoverImage: "assets/products/tshirts/distressed-gothic-hardware-tshirt/02-back-view.jpg",
    shortEn: "280-320GSM washed black heavyweight T-shirt with gothic graphic, distressed holes, safety pins and removable chain hardware direction.",
    shortZh: "280-320GSM水洗黑重磅T恤，哥特图案、定位破洞、别针和链条五金组合，适合暗黑高街重工款开发。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "digital-print", "garment-wash", "rib-trim"],
    tagsEn: ["280-320GSM cotton", "Gothic graphic", "Hardware detail", "Hand distressed"],
    tagsZh: ["280-320GSM纯棉", "哥特图案", "链条五金", "手工破洞"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/distressed-gothic-hardware-tshirt/01-front-view.jpg"],
      ["Back product view", "背面产品图", "assets/products/tshirts/distressed-gothic-hardware-tshirt/02-back-view.jpg"],
      ["Hardware and print detail", "五金与印花细节", "assets/products/tshirts/distressed-gothic-hardware-tshirt/03-hardware-print-detail.jpg"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% combed cotton or cotton-poly blend can be reviewed", "可评估100%精梳棉或棉涤混纺重磅面料"],
      ["Weight", "克重", "280-320GSM reference", "参考280-320GSM"],
      ["Wash", "水洗", "Acid wash, mineral wash and enzyme wash for black-gray distressed effect", "酸洗、矿物洗和酵素洗做黑灰破旧效果"],
      ["Craft", "工艺", "Screen print or DTG graphic, hand-distressed holes, safety pins and detachable chain hardware", "丝印或数码直喷图案，手工破洞，别针和可拆卸链条五金"],
      ["Fit", "版型", "Oversized drop-shoulder boxy fit with wide sleeve and slightly extended hem", "宽松落肩箱型版，宽袖，下摆可略微加长"]
    ],
    features: [
      ["Heavy craft statement", "重工视觉款", "Distressing, pins and chain hardware create a strong dark streetwear statement piece.", "破洞、别针和链条五金让款式更适合作为暗黑高街视觉款。"],
      ["Removable hardware option", "可拆卸五金方案", "For washing and shipping, chain hardware can be developed with snap or D-ring attachment.", "为方便洗涤和出货，链条可评估暗扣或D扣可拆卸方案。"],
      ["Distressed hole placement", "破洞定位", "Hole position should be sampled to avoid affecting seam strength and wearing comfort.", "破洞位置需打样确认，避免影响车缝强度和穿着舒适度。"],
      ["Gothic print route", "哥特印花路线", "Metallic ink, puff or reflective detail can be reviewed by artwork and target cost.", "金属浆、发泡或反光细节可按图案和目标成本评估。"]
    ],
    quality: [
      ["Hardware safety", "五金安全", "Pins and chains should be checked for sharp edges, rust resistance and secure attachment", "别针和链条需检查边缘、耐锈和固定牢度"],
      ["Hole durability", "破洞耐用度", "Distressed holes should keep the intended shape after wash testing", "破洞位置需水洗测试后保持设计形态"],
      ["Print and wash", "印花与水洗", "Graphic color and metallic effects should be approved after wash testing", "图案颜色和金属效果需水洗测试后确认"],
      ["Weight support", "承重能力", "Fabric weight should support hardware without pulling the body out of shape", "面料克重要能承托五金，避免衣身被拉变形"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "studded-fake-two-piece-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Studded Fake Two-Piece T-Shirt",
    titleZh: "铆钉假两件T恤",
    cardTitleEn: "Custom Studded Fake Two-Piece T-Shirt with Layered Hem and Graphic Print",
    cardTitleZh: "定制铆钉假两件T恤 / 金属铆钉与叠穿下摆",
    image: "assets/products/tshirts/studded-fake-two-piece-tshirt/01-front-view.jpg",
    hoverImage: "assets/products/tshirts/studded-fake-two-piece-tshirt/02-back-view.jpg",
    shortEn: "280-320GSM acid-wash cotton T-shirt with boxy cropped fit, graphic print, metal studs and white layered hem for high-street styling.",
    shortZh: "280-320GSM酸洗重磅棉T恤，微短宽体版型，图案印花、金属铆钉和白色拼接下摆形成假两件叠穿效果。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "digital-print", "puff-print", "garment-wash", "rib-trim"],
    tagsEn: ["280-320GSM cotton", "Stud detail", "Layered hem", "Acid wash"],
    tagsZh: ["280-320GSM纯棉", "铆钉细节", "假两件下摆", "酸洗做旧"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/studded-fake-two-piece-tshirt/01-front-view.jpg"],
      ["Back product view", "背面产品图", "assets/products/tshirts/studded-fake-two-piece-tshirt/02-back-view.jpg"],
      ["Stud and print detail", "铆钉与印花细节", "assets/products/tshirts/studded-fake-two-piece-tshirt/03-stud-print-detail.jpg"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% heavyweight cotton single jersey", "100%重磅全棉单面汗布"],
      ["Weight", "克重", "280-320GSM reference", "参考280-320GSM"],
      ["Wash", "水洗", "Acid wash or mud wash for vintage faded surface", "酸洗或泥洗磨旧，做复古磨白和斑驳质感"],
      ["Craft", "工艺", "Graphic print, puff or applique letters, metal studs and layered white cotton hem", "图案印花、发泡或贴布字母，金属铆钉和白色棉布拼接下摆"],
      ["Fit", "版型", "High-street oversized cropped boxy fit with narrow dropped shoulder and wide half sleeves", "高街宽松微短箱型版，窄落肩、宽五分袖"]
    ],
    features: [
      ["Fake two-piece structure", "假两件结构", "The white underlayer hem creates a layered styling effect without requiring two garments.", "白色下摆拼接做出叠穿层次，不需要真的两件衣服。"],
      ["Studded edge detail", "边缘铆钉细节", "Mechanical stud setting around sleeve or hem edges can strengthen the high-street look.", "袖口或下摆机械打钉能强化高街重工视觉。"],
      ["Mixed craft artwork", "混合工艺图案", "Graphic print, puff print, applique or rhinestone/stud details can be combined after sample review.", "图案印花、发泡、贴布或铆钉烫钻细节可按样衣组合评估。"],
      ["Structured heavyweight body", "重磅挺括衣身", "The heavier cotton base supports studs and layered hem without collapsing.", "重磅棉底布能支撑铆钉和假两件下摆，不容易塌。"]
    ],
    quality: [
      ["Stud attachment", "铆钉牢度", "Studs should pass pull testing and avoid sharp backs inside the garment", "铆钉需做拉力测试，并避免内侧有尖锐背面"],
      ["Layered hem", "拼接下摆", "White underlayer should stay flat and not twist after wash", "白色拼接下摆水洗后需平整不扭"],
      ["Wash contrast", "水洗层次", "Acid wash should not stain the white layered fabric unless confirmed by sample", "酸洗需避免污染白色拼接层，除非样衣确认做旧效果"],
      ["Print surface", "印花表面", "Puff or applique letters should be checked for cracking and peeling after wash", "发泡或贴布字母需检查水洗后开裂和脱落"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "cyberpunk-heavyweight-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Cyberpunk Heavyweight T-Shirt",
    titleZh: "赛博朋克重磅T恤",
    cardTitleEn: "Custom Cyberpunk Heavyweight T-Shirt with Neon Skull Graphic",
    cardTitleZh: "定制赛博朋克重磅T恤 / 霓虹骷髅图案",
    image: "assets/products/tshirts/cyberpunk-heavyweight-tshirt/01-front-view.png",
    hoverImage: "assets/products/tshirts/cyberpunk-heavyweight-tshirt/02-back-view.png",
    shortEn: "280-300GSM deep indigo washed cotton T-shirt with oversized boxy fit, neon skull screen print and optional puff or reflective print detail.",
    shortZh: "280-300GSM深靛蓝复古水洗重磅棉T恤，宽松箱型版型，赛博霓虹骷髅图案可评估丝印、厚板、反光或夜光细节。",
    filters: ["tshirts", "crew-neck", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "puff-print", "garment-wash", "rib-trim"],
    tagsEn: ["280-300GSM cotton", "Cyberpunk graphic", "Puff print", "Vintage wash"],
    tagsZh: ["280-300GSM纯棉", "赛博图案", "发泡印花", "复古水洗"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/tshirts/cyberpunk-heavyweight-tshirt/01-front-view.png"],
      ["Back product view", "背面产品图", "assets/products/tshirts/cyberpunk-heavyweight-tshirt/02-back-view.png"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% combed long-staple cotton single jersey", "100%精梳长绒棉单面针织汗布"],
      ["Weight", "克重", "280-300GSM reference", "参考280-300GSM"],
      ["Wash", "水洗", "Deep indigo vintage wash or enzyme wash", "深靛蓝复古水洗或酵素洗"],
      ["Print", "印花", "High-precision screen print with optional puff, reflective or glow ink detail", "高精度丝网印，可评估厚板、发泡、反光或夜光浆细节"],
      ["Fit", "版型", "Oversized boxy fit with dropped shoulder, wide sleeve and structured crew neck", "宽松箱型落肩版，宽袖，高克重罗纹圆领"]
    ],
    features: [
      ["Cyberpunk visual", "赛博朋克视觉", "The neon skull artwork is suitable for Y2K, techwear and cyber streetwear drops.", "霓虹骷髅图案适合Y2K、机能和赛博街头系列。"],
      ["Raised print option", "立体印花方案", "Puff or high-density ink can add raised handfeel to the lightning and metal-effect areas.", "闪电和金属质感区域可评估发泡或厚板浆，增加立体触感。"],
      ["Indigo wash body", "靛蓝水洗底布", "Vintage wash softens the body and gives the T-shirt a worn-in tech-retro effect.", "复古水洗让衣身更柔软，同时带出科技复古旧感。"],
      ["Boxy streetwear fit", "箱型街头版型", "A wide rectangular body supports the strong front graphic without looking tight.", "宽松矩形衣身能承托强视觉图案，不会显得贴身。"]
    ],
    quality: [
      ["Neon color match", "霓虹颜色匹配", "Blue and cyan print color should be approved by strike-off sample", "蓝青色印花需按印花打样确认"],
      ["Puff height", "发泡高度", "Raised ink height should be controlled to avoid cracking after wash", "发泡或厚板高度需控制，避免水洗后开裂"],
      ["Wash shade", "水洗色阶", "Deep indigo wash should keep the intended vintage effect without heavy staining", "深靛蓝水洗需保持预期旧感，避免重污染"],
      ["Collar recovery", "领口回弹", "High-density rib collar should stay tight after repeated washing", "高密罗纹领需保证反复水洗后不松垮"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "washed-charcoal-camo-logo-hooded-tshirt",
    productId: "tshirts",
    categoryEn: "Custom T-Shirts",
    categoryZh: "T恤定制",
    titleEn: "Washed Charcoal Camo Graphic Hooded T-Shirt",
    titleZh: "水洗炭黑迷彩图案短袖连帽T恤",
    cardTitleEn: "Custom Washed Charcoal Short Sleeve Hooded T-Shirt with Camo Graphic Print",
    cardTitleZh: "定制水洗炭黑短袖连帽T恤 / 迷彩图案印花",
    image: "assets/products/tshirts/washed-charcoal-camo-logo-hooded-tshirt/01-front-view.webp",
    hoverImage: "assets/products/tshirts/washed-charcoal-camo-logo-hooded-tshirt/02-back-view.webp",
    shortEn: "280GSM washed charcoal cotton short sleeve hooded T-shirt with oversized boxy fit, double-layer hood and large olive camo terrain graphic.",
    shortZh: "280GSM水洗炭黑纯棉短袖连帽T恤，宽松箱型版型、双层帽结构，搭配橄榄绿迷彩地形大图。",
    filters: ["tshirts", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash"],
    tagsEn: ["280GSM cotton", "Short sleeve hood", "Washed charcoal", "Camo print"],
    tagsZh: ["280GSM纯棉", "短袖连帽", "水洗炭黑", "迷彩图案"],
    gallery: [
      ["Front hooded T-shirt view", "正面短袖连帽T恤", "assets/products/tshirts/washed-charcoal-camo-logo-hooded-tshirt/01-front-view.webp"],
      ["Back hooded T-shirt view", "背面短袖连帽T恤", "assets/products/tshirts/washed-charcoal-camo-logo-hooded-tshirt/02-back-view.webp"],
      ["Camo logo print detail", "迷彩Logo印花细节", "assets/products/tshirts/washed-charcoal-camo-logo-hooded-tshirt/03-print-detail.webp"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", "100% cotton heavyweight single jersey", "100%纯棉重磅单面针织汗布"],
      ["Weight", "克重", "280GSM reference, 260-280GSM can be reviewed", "参考280GSM，可评估260-280GSM"],
      ["Wash", "水洗", "Washed charcoal black with enzyme wash and light vintage effect", "水洗炭黑，酵素洗加轻做旧效果"],
      ["Fit", "版型", "Oversized boxy relaxed fit with dropped shoulder and wide short sleeves", "宽松箱型休闲版型，落肩宽短袖"],
      ["Hood", "帽子结构", "Double-layer self-fabric hood with center seam, no drawcord and no eyelets", "双层本布帽，中缝结构，无抽绳无鸡眼"],
      ["Print", "印花", "Water-based or discharge-effect screen print with olive camo terrain lines and small red accents", "水浆或拔染效果丝印，橄榄绿迷彩地形线条加小红色点缀"]
    ],
    features: [
      ["Short sleeve hooded silhouette", "短袖连帽廓形", "This style keeps the comfort of a T-shirt but adds a hood structure for a stronger streetwear look.", "这款保留T恤的舒适感，同时加入帽子结构，更有街头廓形感。"],
      ["Washed charcoal surface", "水洗炭黑表面", "Enzyme wash and light vintage finishing give the black body a worn-in surface without losing structure.", "酵素洗和轻做旧让黑色衣身有旧感，同时保留面料骨感。"],
      ["Terrain camo artwork", "地形迷彩图案", "The olive terrain graphic uses thin lines and worn texture, so ink thickness and wash testing should be controlled.", "橄榄绿地形图案包含细线和做旧肌理，需要控制墨层厚度并做水洗测试。"],
      ["No-drawcord hood detail", "无抽绳帽子细节", "The clean no-drawcord hood avoids extra hardware and keeps the silhouette simple for brand customization.", "无抽绳帽子减少五金细节，让廓形更干净，适合品牌定制。"]
    ],
    quality: [
      ["GSM tolerance", "克重公差", "Target 280GSM +/-5%", "目标280GSM +/-5%"],
      ["Shrinkage", "缩水率", "Target within +/-3% after garment wash testing", "成衣洗水测试后目标控制在+/-3%以内"],
      ["Wash consistency", "洗水一致性", "Washed charcoal shade and vintage effect should match the approved sample across sizes", "水洗炭黑色差和做旧效果需按确认样控制"],
      ["Print durability", "印花耐洗", "Thin terrain lines and logo edges should stay clear after wash testing", "细地形线条和Logo边缘水洗后需保持清晰"],
      ["Hood construction", "帽子结构", "Double-layer hood seam, hood opening and neck seam should stay flat and balanced", "双层帽中缝、帽口和领圈车缝需平整对称"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  }
];

const hoodieBatchQuality = [
  ["GSM tolerance", "克重公差", "Target +/-5%, confirmed by approved bulk fabric", "目标+/-5%，按确认大货面料标准"],
  ["Shrinkage", "缩水率", "Pre-shrink, wash test and final size chart confirmation before bulk", "大货前做预缩、水洗测试并按最终尺码表确认"],
  ["Wash consistency", "洗水一致性", "Washed color, edge fading and vintage effect should follow the approved sample", "水洗颜色、骨位泛白和做旧效果按确认样控制"],
  ["Craft placement", "工艺位置", "Artwork, embroidery, patch and panel positions should be checked on sample before production", "印花、刺绣、贴布和拼接位置需先在样衣确认"],
  ["Sewing strength", "车缝牢度", "Shoulder, sleeve, hood, pocket and rib joints should be reinforced where needed", "肩缝、袖笼、帽口、袋口和罗纹拼接按需要加固"],
  ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
];

function makeHoodieBatchItem(item) {
  const base = `assets/products/hoodies/${item.id}`;
  return {
    id: item.id,
    productId: "hoodies",
    categoryEn: "Custom Hoodies",
    categoryZh: "卫衣定制",
    titleEn: item.titleEn,
    titleZh: item.titleZh,
    cardTitleEn: item.cardTitleEn,
    cardTitleZh: item.cardTitleZh,
    image: `${base}/${item.image}`,
    hoverImage: `${base}/${item.hoverImage}`,
    shortEn: item.shortEn,
    shortZh: item.shortZh,
    filters: ["hoodies", "oem", "custom", "test", "repeat", ...item.filters],
    tagsEn: item.tagsEn,
    tagsZh: item.tagsZh,
    gallery: item.gallery.map(([en, zh, file]) => [en, zh, `${base}/${file}`]),
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考 3-7 天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考 7-20 天，按数量和工艺确认"],
      ["Fabric", "面料", item.fabricEn, item.fabricZh],
      ["Weight", "克重", item.weightEn, item.weightZh],
      ["Fit", "版型", item.fitEn, item.fitZh],
      ["Craft", "工艺", item.craftEn, item.craftZh]
    ],
    features: item.features,
    quality: hoodieBatchQuality
  };
}

productItems.push(...[
  {
    id: "washed-oversized-boxy-hoodie",
    titleEn: "Washed Heavyweight Tonal Embroidery Hoodie",
    titleZh: "重磅水洗同色刺绣连帽卫衣",
    cardTitleEn: "Custom Heavyweight Washed Hoodie with Tonal Embroidery",
    cardTitleZh: "定制重磅洗水连帽卫衣 / 同色刺绣多色系列",
    image: "01-front-black.webp",
    hoverImage: "02-back-black.webp",
    shortEn: "420GSM brushed cotton fleece hoodie with oversized boxy fit, double-layer hood, tonal chest embroidery and garment-wash color options.",
    shortZh: "420GSM重磅抓绒卫衣，宽松箱型版型、双层帽、左胸同色刺绣，可做黑色、灰色和橄榄色洗水系列。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "embroidery", "garment-wash", "rib-trim"],
    tagsEn: ["420GSM fleece", "Washed colors", "Tonal embroidery", "Boxy fit"],
    tagsZh: ["420GSM抓绒", "洗水多色", "同色刺绣", "箱型版"],
    fabricEn: "100% cotton brushed fleece, or 80% cotton / 20% polyester for better stability",
    fabricZh: "100%棉重磅抓绒卫衣布，也可用80%棉 / 20%涤提升稳定性",
    weightEn: "420GSM reference, 400-450GSM can be reviewed",
    weightZh: "参考420GSM，可评估400-450GSM",
    fitEn: "Oversized boxy fit with dropped shoulder, slightly shorter body and large hood",
    fitZh: "落肩宽松箱型版型，衣长略短，大帽型",
    craftEn: "Tonal flat embroidery, garment wash, pre-shrink and heavy rib cuffs",
    craftZh: "同色平绣、成衣洗水、预缩定型和重磅罗纹袖口",
    gallery: [
      ["Black front view", "黑色正面", "01-front-black.webp"],
      ["Black back view", "黑色背面", "02-back-black.webp"],
      ["Gray front view", "灰色正面", "03-front-gray.webp"],
      ["Gray back view", "灰色背面", "04-back-gray.webp"],
      ["Olive front view", "橄榄色正面", "05-front-olive.webp"],
      ["Olive back view", "橄榄色背面", "06-back-olive.webp"],
      ["Three-color lineup", "三色系列展示", "07-color-lineup.webp"]
    ],
    features: [
      ["Multi-color sample direction", "多色系列方向", "Black, heather grey and dust olive can be developed as one color program for brand drops.", "黑色、麻灰和灰橄榄可作为同系列配色开发。"],
      ["Clean streetwear silhouette", "干净街头廓形", "The wide body, dropped shoulder and controlled body length keep the hoodie wide but not overly long.", "宽身、落肩和控制衣长，让卫衣宽松但不拖沓。"],
      ["Tonal embroidery", "同色刺绣", "Small low-contrast chest embroidery gives the style a quieter premium detail.", "低对比左胸小刺绣让款式更克制高级。"]
    ]
  },
  {
    id: "deconstructed-panel-washed-hoodie",
    titleEn: "Washed Deconstructed Panel Hoodie",
    titleZh: "水洗解构拼接连帽卫衣",
    cardTitleEn: "Custom Washed Deconstructed Hoodie with Tonal Applique Panels",
    cardTitleZh: "定制水洗解构连帽卫衣 / 同色贴布拼接",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "460-500GSM heavyweight washed hoodie with deconstructed panel construction, tonal applique chest detail and structured oversized hood.",
    shortZh: "460-500GSM重磅洗水连帽卫衣，解构拼接结构、同色贴布胸标和立体大帽型。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "applique", "embroidery", "garment-wash", "rib-trim"],
    tagsEn: ["Deconstructed panels", "Washed charcoal", "Applique", "Heavy rib"],
    tagsZh: ["解构拼接", "水洗炭黑", "贴布", "重磅罗纹"],
    fabricEn: "100% combed cotton heavyweight French terry or brushed fleece; 80/20 cotton-poly can be reviewed for cost control",
    fabricZh: "100%精梳棉重磅毛圈或抓绒卫衣布，也可评估80/20棉涤成本版",
    weightEn: "460-500GSM premium reference, 420-450GSM cost-optimized version",
    weightZh: "高端版参考460-500GSM，成本版可做420-450GSM",
    fitEn: "Oversized boxy fit with dropped shoulder, wide sleeve and double-layer hood",
    fitZh: "宽松箱型版型，落肩宽袖，双层大帽",
    craftEn: "Garment wash, enzyme wash, panel splicing, tonal applique and reinforced kangaroo pocket",
    craftZh: "成衣洗水、酵素洗、异形拼接、同色贴布和袋鼠袋加固",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"],
      ["Tonal applique detail", "同色贴布细节", "03-logo-detail.webp"]
    ],
    features: [
      ["Deconstructed panel layout", "解构拼接结构", "Irregular panels around the body, sleeves, pocket and back create an engineered streetwear look.", "前后身、袖片和口袋区域的不规则拼接形成结构感。"],
      ["Washed charcoal surface", "水洗炭黑表面", "Garment wash and enzyme finish soften the heavy body while creating natural fading at seams.", "成衣水洗和酵素后整让重磅面料柔软，并在骨位形成自然旧感。"],
      ["Layered tonal badge", "同色层次胸标", "Tonal fabric applique and embroidery can add detail without making the logo too loud.", "同色贴布和绣花能增加细节，同时保持低调。"]
    ]
  },
  {
    id: "washed-distressed-panel-hoodie",
    titleEn: "Raw-Edge Washed Patchwork Hoodie",
    titleZh: "毛边水洗拼接连帽卫衣",
    cardTitleEn: "Custom Raw-Edge Washed Hoodie with Patchwork Panels",
    cardTitleZh: "定制毛边水洗连帽卫衣 / 解构拼接结构",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "450GSM washed charcoal cotton hoodie with geometric panel construction, raw-edge details, tonal stitching and heavy streetwear fit.",
    shortZh: "450GSM水洗炭黑纯棉卫衣，几何拼接、轻毛边、同色明线和重磅街头廓形。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "applique", "garment-wash", "rib-trim"],
    tagsEn: ["450GSM cotton", "Raw edge", "Panel construction", "Washed charcoal"],
    tagsZh: ["450GSM纯棉", "毛边", "拼接结构", "水洗炭黑"],
    fabricEn: "100% cotton heavyweight fleece or French terry with brushed cotton interior",
    fabricZh: "100%棉重磅卫衣毛圈/抓毛布，内里厚实柔软",
    weightEn: "450GSM +/-5% reference",
    weightZh: "参考450GSM +/-5%",
    fitEn: "Oversized relaxed boxy fit with dropped shoulder, wide sleeves and double-layer hood",
    fitZh: "宽松箱型版型，落肩宽袖，双层帽",
    craftEn: "Garment wash, controlled raw edge, layered panels, tonal double-needle stitching and reinforced pocket",
    craftZh: "成衣水洗、控制毛边、叠层拼接、同色双针明线和口袋加固",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"],
      ["Panel detail board", "拼接细节展示", "03-panel-detail.webp"]
    ],
    features: [
      ["Panel-first design", "拼接为核心", "The style is built around fabric, panel cutting, wash and stitch detail rather than a large print.", "这款核心是面料、裁片、水洗和车线，而不是大面积印花。"],
      ["Controlled raw edge", "可控毛边", "Raw edges should be fixed internally so the visual remains distressed without unlimited fraying.", "毛边内层需固定，做到有做旧感但不无限散边。"],
      ["Heavy construction", "重磅结构", "Shoulder, hood and pocket stress points should be reinforced because the fabric and panels add weight.", "面料和拼接增加重量，肩部、帽口和袋口需重点加固。"]
    ]
  },
  {
    id: "gray-distressed-panel-hoodie",
    titleEn: "Graphite Gray Reconstructed Hoodie",
    titleZh: "石墨灰解构做旧连帽卫衣",
    cardTitleEn: "Custom Graphite Gray Reconstructed Hoodie with Raw-Edge Panels",
    cardTitleZh: "定制石墨灰解构连帽卫衣 / 可控毛边拼接",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "460GSM gray-black reconstructed hoodie with layered panel splicing, controlled distressing, raw-edge details and vintage wash.",
    shortZh: "460GSM灰黑解构拼接卫衣，叠层拼接、可控做旧、毛边细节和复古洗水。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "applique", "garment-wash", "rib-trim"],
    tagsEn: ["460GSM fleece", "Gray wash", "Raw edge", "Patchwork"],
    tagsZh: ["460GSM卫衣布", "灰色洗水", "毛边", "拼接"],
    fabricEn: "100% combed cotton heavyweight French terry or fleece with matching cotton rib",
    fabricZh: "100%精梳棉重磅毛圈或抓绒卫衣布，搭配棉质罗纹",
    weightEn: "460GSM +/-20GSM reference; 480GSM can be reviewed for a heavier version",
    weightZh: "参考460GSM +/-20GSM，可评估480GSM重磅版本",
    fitEn: "Oversized boxy fit with slightly cropped body, drop shoulder and wide sleeve",
    fitZh: "宽松箱型略短版，落肩宽袖",
    craftEn: "Garment dyed vintage wash, irregular panel splicing, double-needle topstitching and controlled distressing",
    craftZh: "成衣染色复古洗、异形拼接、双针装饰线和可控做旧",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"]
    ],
    features: [
      ["Industrial reconstruction", "工业解构感", "Gray-black panels, outer seams and raw edges give the hoodie a controlled reconstructed look.", "灰黑拼片、外露缝位和毛边形成可控解构感。"],
      ["Vintage graphite wash", "石墨灰洗水", "Garment wash can create subtle shade difference between panels and natural seam fading.", "成衣洗水可让不同裁片有轻微色差，并在骨位自然泛白。"],
      ["Production balance", "适合大货控制", "Panel count should stay reasonable so the design keeps complexity without making production unstable.", "拼接数量需控制，保留复杂感的同时保证大货稳定。"]
    ]
  },
  {
    id: "black-gray-destroyed-distressed-hoodie",
    titleEn: "Acid Wash Destroyed Patchwork Hoodie",
    titleZh: "酸洗磨破拼接做旧连帽卫衣",
    cardTitleEn: "Custom Acid Wash Destroyed Hoodie with Raw-Edge Patchwork",
    cardTitleZh: "定制酸洗磨破连帽卫衣 / 毛边拼接贴布",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "420-500GSM black gray heavyweight cotton hoodie with acid wash, manual distressing, raw-edge patchwork and tonal graphic print.",
    shortZh: "420-500GSM黑灰重磅纯棉卫衣，酸洗雪花、手工磨破、毛边拼接和同色图案印花。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "applique", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["Acid wash", "Destroyed edge", "Patchwork", "Heavy cotton"],
    tagsZh: ["酸洗雪花", "磨破毛边", "拼接贴布", "重磅纯棉"],
    fabricEn: "100% cotton high-density French terry; cotton rib or cotton-spandex rib for better recovery",
    fabricZh: "100%棉高密度毛圈布，罗纹可用纯棉或棉氨提升回弹",
    weightEn: "420-500GSM heavyweight reference",
    weightZh: "参考420-500GSM重磅范围",
    fitEn: "Oversized destroyed hoodie with dropped shoulder, wide body and structured hood",
    fitZh: "宽松做旧连帽版型，落肩宽身，帽型立体",
    craftEn: "Acid wash, enzyme stone wash, manual distressing, raw-edge patchwork and tone-on-tone print",
    craftZh: "酸洗雪花、酵素石磨、手工磨破、毛边拼接和同色印花",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"]
    ],
    features: [
      ["Destroyed vintage wash", "重度复古做旧", "Acid wash and enzyme stone wash create strong black-gray variation and seam fading.", "酸洗和酵素石磨形成强烈黑灰层次和骨位泛白。"],
      ["Raw-edge construction", "毛边解构结构", "Exposed edges and patchwork should be stitched down to keep the distressed look controlled.", "外露毛边和贴布需要固定，保持做旧视觉同时控制散边。"],
      ["Tone-on-tone print option", "同色印花方案", "A low-contrast plastisol or water-based print can sit on the patch without overpowering the garment.", "低对比胶浆或水浆印花可落在贴布上，不抢整体做旧感。"]
    ]
  },
  {
    id: "red-oversized-zip-hoodie",
    titleEn: "Red Streetwear Oversized Zip Hoodie",
    titleZh: "红色街头宽松拉链连帽卫衣",
    cardTitleEn: "Custom Red Streetwear Zip Hoodie with Oversized Fit",
    cardTitleZh: "定制红色街头拉链卫衣 / 宽松连帽版型",
    image: "01-model-collage.webp",
    hoverImage: "02-side-model.webp",
    shortEn: "Red oversized zip hoodie direction with relaxed streetwear fit, full front zip, large hood, rib trims and clean development presentation.",
    shortZh: "红色宽松拉链卫衣方向，街头休闲版型、前中全拉链、大帽型、罗纹收口和完整开发展示。",
    filters: ["cotton-fleece", "oversized", "boxy-fit", "zip-up", "rib-trim"],
    tagsEn: ["Zip hoodie", "Red colorway", "Oversized fit", "Rib trim"],
    tagsZh: ["拉链卫衣", "红色款", "宽松版型", "罗纹收口"],
    fabricEn: "Heavyweight cotton fleece or cotton-poly fleece, final hand feel confirmed by sample",
    fabricZh: "重磅棉卫衣布或棉涤卫衣布，最终手感按样衣确认",
    weightEn: "420-460GSM reference for structured zip hoodie",
    weightZh: "参考420-460GSM，适合有结构感的拉链卫衣",
    fitEn: "Oversized zip hoodie with relaxed shoulder, wide sleeve and layered styling proportion",
    fitZh: "宽松拉链连帽版型，肩部自然放量，袖型宽松，适合叠穿比例",
    craftEn: "Full front zip, double-layer hood, kangaroo pockets, rib cuffs and clean stitching",
    craftZh: "前中全拉链、双层帽、袋鼠袋、罗纹袖口和干净车缝",
    gallery: [
      ["Model collage", "上身组合图", "01-model-collage.webp"],
      ["Side model view", "侧面上身图", "02-side-model.webp"],
      ["Development board", "开发展示图", "03-development-board.webp"],
      ["Packaging set reference", "包装展示参考", "04-packaging-set.webp"]
    ],
    features: [
      ["Strong color statement", "醒目红色单品", "The red colorway works well as a statement style for a small streetwear drop.", "红色适合作为街头系列里的主推视觉款。"],
      ["Zip-up structure", "拉链结构", "Full-zip construction needs stable front placket sewing so the zipper stays straight after washing.", "全拉链结构需要门襟车缝稳定，保证洗后拉链顺直。"],
      ["Sample-ready direction", "适合快速打样", "With simpler craft than destroyed wash styles, this design can be assessed quickly by fabric weight, zipper and fit.", "相比重做旧款工艺更简单，可先按克重、拉链和版型快速评估。"]
    ]
  },
  {
    id: "green-distressed-raw-edge-hoodie",
    titleEn: "Vintage Green Raw-Edge Puff Print Hoodie",
    titleZh: "复古绿毛边发泡印花连帽卫衣",
    cardTitleEn: "Custom Vintage Green Hoodie with Raw-Edge Patch and Puff Print",
    cardTitleZh: "定制复古绿连帽卫衣 / 毛边贴布发泡印花",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "Vintage green heavyweight hoodie with acid wash, raw-edge patchwork, tonal puff print and oversized streetwear fit.",
    shortZh: "复古绿色重磅卫衣，酸洗做旧、毛边贴布、同色发泡印花和宽松街头版型。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "applique", "puff-print", "garment-wash", "rib-trim"],
    tagsEn: ["Vintage green", "Raw edge", "Puff print", "Acid wash"],
    tagsZh: ["复古绿色", "毛边", "发泡印花", "酸洗"],
    fabricEn: "100% cotton heavyweight fleece recommended; high cotton blend can be reviewed for stability",
    fabricZh: "推荐100%棉重磅卫衣布，也可评估高棉混纺提升稳定性",
    weightEn: "400-550GSM range, 450GSM+ recommended for premium weight",
    weightZh: "参考400-550GSM，建议450GSM以上更有重磅感",
    fitEn: "Oversized drop-shoulder hoodie with wide sleeve and double-layer hood",
    fitZh: "落肩宽松连帽版型，宽袖，双层加厚帽",
    craftEn: "Acid wash, garment dye, raw-edge patches, tonal puff print and rough double-needle stitching",
    craftZh: "酸洗、成衣染、毛边贴布、同色发泡印花和粗犷双线车缝",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"]
    ],
    features: [
      ["Vintage forest color", "复古森林绿", "Garment dye and acid wash give the green body a worn vintage surface.", "成衣染和酸洗让绿色衣身形成自然旧化表面。"],
      ["Raw-edge patchwork", "毛边贴布", "Back patches use same-tone fabric with loose edge details for a deconstructed look.", "后背同色贴布配合毛边和线头形成解构感。"],
      ["Low-contrast puff print", "低对比发泡印花", "Tone-on-tone puff print adds texture while staying mature and not overly loud.", "同色发泡增加肌理，视觉成熟不张扬。"]
    ]
  },
  {
    id: "washed-forest-deconstructed-patchwork-hoodie",
    titleEn: "Forest Green Deconstructed Patchwork Hoodie",
    titleZh: "森林绿解构拼接做旧连帽卫衣",
    cardTitleEn: "Custom Forest Green Deconstructed Hoodie with Patchwork and Loose Thread Details",
    cardTitleZh: "定制森林绿解构连帽卫衣 / 拼接散线细节",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "430GSM forest green French terry hoodie with garment dye, heavy vintage wash, deconstructed patchwork, controlled raw edges and tonal puff print.",
    shortZh: "430GSM森林绿毛圈卫衣，成衣染重水洗、解构拼接、可控毛边和同色轻发泡印花。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "applique", "puff-print", "garment-wash", "rib-trim"],
    tagsEn: ["430GSM terry", "Forest green", "Patchwork", "Loose thread"],
    tagsZh: ["430GSM毛圈", "森林绿", "拼接", "散线细节"],
    fabricEn: "100% cotton 430GSM heavyweight French terry recommended; 80/20 can be reviewed for cost",
    fabricZh: "推荐100%棉430GSM重磅毛圈布，也可评估80/20棉涤成本版",
    weightEn: "420-450GSM range, 430GSM preferred",
    weightZh: "参考420-450GSM，首选430GSM",
    fitEn: "Oversized boxy fit with dropped shoulder, large double-layer hood and wide body",
    fitZh: "宽松箱型版型，落肩、大双层帽、宽身",
    craftEn: "Garment dye, heavy vintage wash, same-fabric patchwork, controlled raw edge, loose thread and tonal puff print",
    craftZh: "成衣染、重水洗、同布拼接、可控毛边、装饰散线和同色发泡印花",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"],
      ["Patch detail", "拼接细节", "03-patch-detail.webp"],
      ["Front patch detail", "前片拼接细节", "04-front-patch-detail.webp"],
      ["Wide detail view", "细节横图", "05-wide-detail.webp"]
    ],
    features: [
      ["Production-ready distressing", "可大货落地的做旧", "Raw edges are controlled with internal stitching, so the style keeps design detail while remaining wearable.", "毛边通过内层固定，既有设计感也适合实际穿着和大货控制。"],
      ["Same-fabric panels", "同布拼接", "Using the same body fabric for patches allows subtle color differences after wash without looking mismatched.", "同布拼片水洗后产生自然色差，不会显得材质突兀。"],
      ["Tonal puff detail", "同色轻发泡", "A low-height puff print gives texture without making the hoodie stiff.", "轻发泡增加肌理，同时避免衣身过硬。"]
    ]
  },
  {
    id: "navy-rugby-collar-half-zip-sweatshirt",
    titleEn: "Navy Rugby Collar Half-Zip Sweatshirt",
    titleZh: "藏蓝复古运动翻领半拉链卫衣",
    cardTitleEn: "Custom Navy Rugby-Collar Half-Zip Sweatshirt with Embroidery and Back Print",
    cardTitleZh: "定制藏蓝翻领半拉链卫衣 / 前胸刺绣后背印花",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "400GSM navy half-zip sweatshirt with rugby-inspired contrast collar, relaxed oversized fit, chest embroidery and technical back print.",
    shortZh: "400GSM藏蓝色半拉链翻领卫衣，复古运动撞色领、宽松版型、前胸刺绣和后背技术图案印花。",
    filters: ["cotton-fleece", "oversized", "zip-up", "embroidery", "screen-print", "rib-trim"],
    tagsEn: ["Half zip", "Rugby collar", "Embroidery", "Back print"],
    tagsZh: ["半拉链", "翻领", "刺绣", "后背印花"],
    fabricEn: "80% cotton / 20% polyester heavyweight French terry or light brushed fleece",
    fabricZh: "80%棉 / 20%涤重磅毛圈布或轻抓毛卫衣布",
    weightEn: "380-420GSM range, 400GSM recommended",
    weightZh: "参考380-420GSM，推荐400GSM",
    fitEn: "Unisex relaxed oversized fit with raglan sleeve, boxy body and rib hem",
    fitZh: "男女同款宽松版型，插肩袖、短宽身型和罗纹下摆",
    craftEn: "Contrast knit collar, half zip, chest embroidery, screen print and optional local embroidery on back artwork",
    craftZh: "撞色针织翻领、半拉链、前胸刺绣、丝网印花和后背局部刺绣",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"],
      ["Chest logo detail", "前胸Logo细节", "03-chest-logo-detail.webp"],
      ["Collar detail", "翻领细节", "04-collar-detail.webp"],
      ["Front print detail", "前片印花细节", "05-front-print-detail.webp"],
      ["Back print detail", "后背图案细节", "06-back-print-detail.webp"]
    ],
    features: [
      ["Rugby-inspired collar", "复古运动翻领", "The grey collar with red and white stripe gives the sweatshirt a retro sport direction.", "灰色红白条翻领让卫衣更偏复古运动风。"],
      ["Half-zip structure", "半拉链结构", "Front placket and zipper alignment should be clean so the collar sits flat.", "前中门襟和拉链需要顺直，保证翻领平服。"],
      ["Mixed craft artwork", "组合工艺图案", "Chest embroidery and back screen print can be combined for a richer but controlled finish.", "前胸刺绣和后背丝印组合，细节更丰富但成本可控。"]
    ]
  },
  {
    id: "smoke-gray-washed-zip-hoodie",
    titleEn: "Smoke Gray Washed Patchwork Zip Hoodie",
    titleZh: "烟灰水洗拼接拉链连帽卫衣",
    cardTitleEn: "Custom Smoke Gray Washed Zip Hoodie with Patchwork and Crack Print",
    cardTitleZh: "定制烟灰水洗拉链卫衣 / 贴布裂纹印花",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "450GSM smoke gray cropped boxy zip hoodie with mineral wash, metal zipper, patch details and vintage crack screen print.",
    shortZh: "450GSM烟灰色短宽拉链卫衣，矿物洗水、金属开尾拉链、贴布细节和复古裂纹丝网印花。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "zip-up", "applique", "screen-print", "garment-wash", "rib-trim"],
    tagsEn: ["450GSM fleece", "Zip hoodie", "Mineral wash", "Crack print"],
    tagsZh: ["450GSM卫衣布", "拉链卫衣", "矿物洗水", "裂纹印花"],
    fabricEn: "100% cotton heavyweight fleece, or 80/20 cotton-poly for improved stability",
    fabricZh: "100%棉重磅卫衣布，也可用80/20棉涤提升稳定性",
    weightEn: "420-460GSM range, 450GSM recommended",
    weightZh: "参考420-460GSM，推荐450GSM",
    fitEn: "Unisex cropped boxy oversized fit with dropped shoulder, wide body and large hood",
    fitZh: "男女同款短宽箱型版型，落肩宽身，大帽型",
    craftEn: "Mineral wash, open-end metal zipper, slash pockets, patch panels, crack screen print and light embroidery option",
    craftZh: "矿物洗水、金属开尾拉链、斜插口袋、贴布、裂纹丝印和局部刺绣可选",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"],
      ["Rib and zipper detail", "罗纹拉链细节", "03-rib-zip-detail.webp"],
      ["Graphic detail", "图案细节", "04-graphic-detail.webp"],
      ["Model fit reference", "上身版型参考", "05-model-fit.webp"]
    ],
    features: [
      ["Cropped boxy proportion", "短宽比例", "The style should stay wide horizontally and controlled vertically, not a long oversized hoodie.", "重点是横向宽、纵向短，不做成长款宽松卫衣。"],
      ["Washed smoke gray finish", "烟灰洗水效果", "Mineral wash creates uneven charcoal fading that suits patch and distress details.", "矿物洗水形成炭灰不均匀褪色，适合贴布和做旧细节。"],
      ["Patch and crack print", "贴布裂纹印花", "Bone-white and antique-yellow crack print can be placed with raw-edge patches for layered texture.", "骨白和古董黄裂纹印花可与毛边贴布叠加，增强层次。"]
    ]
  },
  {
    id: "black-contrast-stitch-zip-hoodie",
    titleEn: "Black Contrast Stitch Graphic Zip Hoodie",
    titleZh: "黑色撞色明线图案拉链连帽卫衣",
    cardTitleEn: "Custom Black Graphic Zip Hoodie with Contrast Stitching and Embroidery",
    cardTitleZh: "定制黑色图案拉链卫衣 / 撞色明线前胸刺绣",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "450GSM black oversized zip hoodie with bone-white contrast stitching, antique brass zipper, chest embroidery and retro back screen print.",
    shortZh: "450GSM黑色宽松拉链卫衣，骨白撞色明线、古铜金属拉链、前胸刺绣和复古后背丝网印花。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "zip-up", "embroidery", "screen-print", "rib-trim"],
    tagsEn: ["Contrast stitch", "Zip hoodie", "Embroidery", "Back print"],
    tagsZh: ["撞色明线", "拉链卫衣", "刺绣", "后背印花"],
    fabricEn: "100% cotton 450GSM heavyweight fleece; 80/20 cotton-poly can be reviewed for stability",
    fabricZh: "100%棉450GSM重磅卫衣布，也可评估80/20棉涤稳定版",
    weightEn: "420-460GSM range, 450GSM recommended",
    weightZh: "参考420-460GSM，推荐450GSM",
    fitEn: "Unisex oversized zip hoodie with drop shoulder, slightly cropped boxy body and wide sleeves",
    fitZh: "男女同款宽松拉链卫衣，落肩、略短箱型身、宽袖",
    craftEn: "Chest embroidery, three-color back screen print, contrast topstitching, antique brass zipper and rivet details",
    craftZh: "前胸刺绣、三色后背丝印、撞色明线、古铜拉链和铆钉细节",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"],
      ["Chest embroidery detail", "前胸刺绣细节", "03-chest-embroidery-detail.webp"],
      ["Back print detail", "后背印花细节", "04-back-print-detail.webp"]
    ],
    features: [
      ["Contrast stitch language", "撞色明线设计", "Bone-white stitching around the hood, zipper, pocket and seams is a key design feature.", "帽边、拉链、口袋和拼缝的骨白明线是核心设计点。"],
      ["Embroidery plus print", "刺绣加印花组合", "The chest uses high-density embroidery while the back graphic stays practical through screen print.", "前胸做高密刺绣，后背大图用丝网印花更适合大货。"],
      ["Hardware consistency", "五金统一", "Antique brass zipper and rivets should stay in one color family for a cohesive finish.", "古铜拉链和铆钉需保持同色系，整体更完整。"]
    ]
  },
  {
    id: "charcoal-gradient-hoodie",
    titleEn: "Charcoal Gradient Tonal Embroidery Hoodie",
    titleZh: "碳灰渐变同色刺绣连帽卫衣",
    cardTitleEn: "Custom Charcoal Gradient Hoodie with Tonal Chest Embroidery",
    cardTitleZh: "定制碳灰渐变连帽卫衣 / 同色胸标刺绣",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "440GSM charcoal gradient hoodie with oversized boxy fit, double-layer hood, tonal embroidery and clean garment-dye wash effect.",
    shortZh: "440GSM碳灰色渐变连帽卫衣，宽松箱型版型、双层帽、同色刺绣和干净成衣渐变洗水。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "embroidery", "garment-wash", "rib-trim"],
    tagsEn: ["Gradient wash", "Tonal embroidery", "440GSM fleece", "Boxy fit"],
    tagsZh: ["渐变洗水", "同色刺绣", "440GSM卫衣布", "箱型版"],
    fabricEn: "100% cotton or 80/20 cotton-poly heavyweight fleece with dense surface",
    fabricZh: "100%棉或80/20棉涤重磅卫衣布，表面紧密低毛羽",
    weightEn: "420-460GSM range, 440GSM preferred",
    weightZh: "参考420-460GSM，首选440GSM",
    fitEn: "Unisex oversized boxy fit with dropped shoulder, large sleeve and structured hood",
    fitZh: "男女同款宽松箱型版型，落肩、大袖肥、立体帽型",
    craftEn: "Garment dye, gradient spray or section dye, enzyme wash, tonal flat embroidery and clean rib finish",
    craftZh: "成衣染、渐变喷染或分区染、酵素洗、同色平绣和干净罗纹后整",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"],
      ["Embroidery detail", "刺绣细节", "03-embroidery-detail.webp"]
    ],
    features: [
      ["Quiet gradient finish", "克制渐变效果", "The upper smoky charcoal transitions into deeper charcoal near hem and cuffs without a hard line.", "上身烟灰逐渐过渡到下摆深炭灰，避免明显分界线。"],
      ["Minimal branding", "极简Logo", "Small tonal embroidery keeps the hoodie premium and clean rather than graphic-heavy.", "小面积同色刺绣让款式更高级干净。"],
      ["Clean wash control", "干净洗水控制", "The style should avoid heavy holes or raw edges so the gradient remains the main visual.", "这款不建议做重破洞或毛边，让渐变成为主视觉。"]
    ]
  },
  {
    id: "misty-purple-gradient-hoodie",
    titleEn: "Misty Purple Gradient Tonal Embroidery Hoodie",
    titleZh: "雾霾紫渐变同色刺绣连帽卫衣",
    cardTitleEn: "Custom Misty Purple Gradient Hoodie with Tonal Chest Embroidery",
    cardTitleZh: "定制雾霾紫渐变连帽卫衣 / 同色胸标刺绣",
    image: "01-front-view.webp",
    hoverImage: "02-back-view.webp",
    shortEn: "440GSM misty purple gradient hoodie with oversized boxy fit, double-layer hood, tonal embroidery and soft garment wash.",
    shortZh: "440GSM雾霾紫渐变连帽卫衣，宽松箱型版型、双层帽、同色刺绣和柔和成衣洗水。",
    filters: ["heavyweight-fleece", "cotton-fleece", "oversized", "boxy-fit", "embroidery", "garment-wash", "rib-trim"],
    tagsEn: ["Misty purple", "Gradient dye", "Tonal embroidery", "Boxy fit"],
    tagsZh: ["雾霾紫", "渐变染", "同色刺绣", "箱型版"],
    fabricEn: "100% cotton, or 80% cotton / 20% polyester heavyweight fleece with low-pilling surface",
    fabricZh: "100%棉，或80%棉 / 20%涤重磅卫衣布，表面细腻低毛羽",
    weightEn: "420-460GSM range, 440GSM preferred",
    weightZh: "参考420-460GSM，首选440GSM",
    fitEn: "Unisex oversized boxy hoodie with dropped shoulder, wide sleeve and large double-layer hood",
    fitZh: "男女同款宽松箱型连帽版型，落肩、宽袖、大双层帽",
    craftEn: "Light purple garment dye, gradient spray or section dye, soft wash and tonal embroidery",
    craftZh: "浅雾紫成衣染、渐变喷染或分区染、柔软洗和同色刺绣",
    gallery: [
      ["Front product view", "正面产品图", "01-front-view.webp"],
      ["Back product view", "背面产品图", "02-back-view.webp"],
      ["Embroidery detail", "刺绣细节", "03-embroidery-detail.webp"]
    ],
    features: [
      ["Soft purple gradient", "柔和紫色渐变", "The color should move from misty purple to deeper grey-purple without a harsh boundary.", "颜色从雾霾紫自然过渡到深灰紫，避免硬分界。"],
      ["Premium quiet finish", "高级克制后整", "Light enzyme or soft wash keeps the color gentle and avoids overly distressed effects.", "轻酵素或柔软洗让颜色更柔和，不做重破坏。"],
      ["Structured hood shape", "立体帽型", "A double-layer hood and controlled body length help the soft colorway keep a strong shape.", "双层帽和控制衣长，让柔和配色也有廓形支撑。"]
    ]
  }
].map(makeHoodieBatchItem));

productItems.push(
  {
    id: "green-v-neck-mesh-team-jersey",
    productId: "teamwear",
    categoryEn: "Custom Teamwear",
    categoryZh: "球服定制",
    titleEn: "Green V-Neck Mesh Team Jersey",
    titleZh: "绿色V领网眼球服",
    image: "assets/products/teamwear/green-v-neck-mesh-team-jersey/01-front-view.jpg",
    hoverImage: "assets/products/teamwear/green-v-neck-mesh-team-jersey/02-back-view.jpg",
    shortEn: "Dark green oversized team jersey with retro V-neck collar, bird-eye mesh, gold puff print or silicone heat-transfer artwork, plus embroidery or applique badge options.",
    shortZh: "深绿色宽松球服，复古V领结构、鸟眼网布，可评估金色发泡印花或硅胶烫标，并可加刺绣/贴布章仔。",
    filters: ["teamwear", "oem", "custom", "test", "repeat", "v-neck", "team-fit", "oversized", "performance-mesh", "bird-eye-mesh", "puff-print", "screen-print", "heat-transfer", "embroidery"],
    tagsEn: ["V-neck jersey", "Bird-eye mesh", "Gold puff print", "Oversized fit"],
    tagsZh: ["V领球服", "鸟眼网布", "金色发泡印花", "宽松版型"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/teamwear/green-v-neck-mesh-team-jersey/01-front-view.jpg"],
      ["Back product view", "背面产品图", "assets/products/teamwear/green-v-neck-mesh-team-jersey/02-back-view.jpg"],
      ["Gold artwork detail", "金色图案细节", "assets/products/teamwear/green-v-neck-mesh-team-jersey/03-gold-graphic-detail.jpg"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考3-7天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考7-20天，按数量和工艺确认"],
      ["Fabric", "面料", "Polyester bird-eye mesh or jacquard double mesh", "涤纶鸟眼网布或提花双层网布"],
      ["Composition", "成分", "100% polyester, or 92% polyester / 8% spandex can be reviewed", "100%涤纶，或92%涤纶 / 8%氨纶可评估"],
      ["Weight", "克重", "220-280GSM reference by fabric direction", "按面料方向参考220-280GSM"],
      ["Fit", "版型", "Oversized boxy fit with dropped shoulder and wide straight sleeves", "落肩宽松箱型版，宽直袖"],
      ["Craft", "工艺", "Gold puff print, silicone heat transfer, embroidery or applique patch can be reviewed", "可评估金色发泡印花、硅胶烫标、刺绣或贴布章仔"]
    ],
    features: [
      ["Retro V-neck team silhouette", "复古V领队服廓形", "The no-button V-neck placket and rib collar create a sport jersey look that also works for streetwear capsules.", "无扣V领门襟配罗纹领，既有运动队服感，也适合街头系列开发。"],
      ["Breathable mesh fabric", "透气网眼面料", "Bird-eye mesh or jacquard mesh can support breathable wearing comfort while keeping enough body for oversized styling.", "鸟眼网布或提花网布兼顾透气穿着和廓形支撑，适合宽松版型。"],
      ["Gold artwork craft route", "金色图案工艺方向", "Gold puff print, matte silicone heat transfer or embroidery/applique can be selected after reviewing artwork size and texture requirements.", "可根据图案尺寸和肌理要求，选择金色发泡印花、哑光硅胶烫标或刺绣/贴布方案。"],
      ["Team name and number customization", "队名号码定制", "Names, numbers, chest badges and sleeve marks can be placed after confirming the size chart and artwork files.", "队名、号码、胸章和袖标位置可在确认尺码表与图稿后安排。"]
    ],
    quality: [
      ["Mesh stability", "网布稳定性", "Fabric weight and stretch should be confirmed by approved sample before bulk", "大货前按确认样确认克重和弹力"],
      ["Print durability", "印花耐洗", "Puff print or heat transfer should pass wash testing based on final artwork", "发泡印花或烫标按最终图稿做水洗测试"],
      ["Collar recovery", "领口回弹", "Rib collar and V-neck opening should stay flat and balanced", "罗纹领和V领门襟需要平服对称"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "retro-sport-applique-polo-jersey",
    productId: "teamwear",
    categoryEn: "Custom Teamwear",
    categoryZh: "球服定制",
    titleEn: "Retro Sport Applique Polo Jersey",
    titleZh: "复古运动贴布Polo球服",
    image: "assets/products/teamwear/retro-sport-applique-polo-jersey/01-front-view.png",
    hoverImage: "assets/products/teamwear/retro-sport-applique-polo-jersey/02-chest-badge-detail.png",
    shortEn: "Blue retro sport polo jersey with striped rib collar, applique number, embroidered badge and heavyweight pique or cotton-touch performance fabric options.",
    shortZh: "蓝色复古运动Polo球服，撞色罗纹领、贴布号码、徽章刺绣，可评估重磅珠地布或棉感运动网布。",
    filters: ["teamwear", "oem", "custom", "test", "repeat", "polo-collar", "team-fit", "oversized", "pique-knit", "performance-mesh", "embroidery", "tackle-twill", "screen-print", "heat-transfer"],
    tagsEn: ["Polo collar", "Applique number", "Embroidery badge", "Pique fabric"],
    tagsZh: ["Polo翻领", "贴布号码", "徽章刺绣", "珠地布"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/teamwear/retro-sport-applique-polo-jersey/01-front-view.png"],
      ["Chest badge detail", "胸章细节", "assets/products/teamwear/retro-sport-applique-polo-jersey/02-chest-badge-detail.png"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考3-7天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考7-20天，按数量和工艺确认"],
      ["Fabric", "面料", "Heavyweight cotton-poly pique or cotton-touch performance mesh", "重磅棉涤珠地布或棉感运动网布"],
      ["Composition", "成分", "65% cotton / 35% polyester, or 100% polyester performance mesh", "65%棉 / 35%涤纶，或100%涤纶运动网布"],
      ["Weight", "克重", "180-240GSM reference by fabric direction", "按面料方向参考180-240GSM"],
      ["Fit", "版型", "Relaxed boxy fit with dropped shoulder, wider chest and mid-length sleeve", "宽松箱型版，落肩、宽胸围、中长袖"],
      ["Craft", "工艺", "Embroidery badge, applique number, puff or screen print and stripe rib collar can be reviewed", "可评估徽章刺绣、贴布号码、发泡/丝印和撞色罗纹领"]
    ],
    features: [
      ["Sport polo collar structure", "运动Polo领结构", "The striped collar and cuff can use yarn-dyed rib to keep the retro teamwear look clean.", "领口和袖口可用色织罗纹，保持复古队服视觉更干净。"],
      ["Applique and badge artwork", "贴布与徽章图案", "Large numbers can use tackle twill or applique, while the chest badge can use flat embroidery or chenille depending on texture target.", "大号码可做贴布字母/贴布绣，胸章可按质感目标选择平绣或毛巾绣。"],
      ["Pique or performance fabric route", "珠地或运动面料路线", "Cotton-poly pique feels more casual, while polyester performance mesh is lighter and easier for active teamwear.", "棉涤珠地更偏休闲质感，涤纶运动网布更轻便，适合运动队服方向。"],
      ["Brand capsule friendly", "适合品牌系列开发", "The style works for club collections, sport-inspired streetwear, team events and brand capsule projects.", "适合俱乐部系列、运动街头风、团队活动服和品牌胶囊系列开发。"]
    ],
    quality: [
      ["Rib stripe alignment", "罗纹条纹对位", "Collar and cuff stripe width should match approved sample", "领口和袖口条纹宽度按确认样控制"],
      ["Applique edge control", "贴布边缘控制", "Applique edges and embroidery density should be checked before bulk", "贴布边缘和刺绣密度大货前确认"],
      ["Fabric shrinkage", "面料缩率", "Pique fabric should be pre-tested for shrinkage and twisting", "珠地布需先测试缩率和扭斜"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "blokecore-football-collar-jersey",
    productId: "teamwear",
    categoryEn: "Custom Teamwear",
    categoryZh: "球服定制",
    titleEn: "Blokecore Football Collar Jersey",
    titleZh: "Blokecore复古足球翻领球服",
    image: "assets/products/teamwear/blokecore-football-collar-jersey/01-front-view.jpg",
    hoverImage: "assets/products/teamwear/blokecore-football-collar-jersey/02-back-view.jpg",
    shortEn: "Blue blokecore football-collar jersey with full sublimation print, contrast rib collar, back number and optional badge embroidery or silicone heat transfer.",
    shortZh: "蓝色Blokecore复古足球翻领球服，满版升华印花、撞色罗纹领、后背号码，可评估徽章刺绣或硅胶烫标。",
    filters: ["teamwear", "oem", "custom", "test", "repeat", "polo-collar", "team-fit", "oversized", "sublimation", "screen-print", "heat-transfer", "embroidery", "performance-mesh", "interlock-knit", "quick-dry"],
    tagsEn: ["Full sublimation", "Football collar", "Back number", "Quick-dry fabric"],
    tagsZh: ["满版升华", "足球翻领", "后背号码", "速干面料"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/teamwear/blokecore-football-collar-jersey/01-front-view.jpg"],
      ["Back product view", "背面产品图", "assets/products/teamwear/blokecore-football-collar-jersey/02-back-view.jpg"],
      ["Front logo detail", "前胸Logo细节", "assets/products/teamwear/blokecore-football-collar-jersey/03-front-logo-detail.jpg"],
      ["Badge detail", "徽章细节", "assets/products/teamwear/blokecore-football-collar-jersey/04-badge-detail.jpg"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考3-7天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考7-20天，按数量和工艺确认"],
      ["Fabric", "面料", "Polyester bird-eye mesh, performance mesh or matte interlock", "涤纶鸟眼布、运动网布或哑光双面布"],
      ["Composition", "成分", "100% polyester, or 95% polyester / 5% spandex can be reviewed", "100%涤纶，或95%涤纶 / 5%氨纶可评估"],
      ["Weight", "克重", "220-240GSM reference", "参考220-240GSM"],
      ["Fit", "版型", "US/EU oversized streetwear fit with relaxed straight hem", "适合海外品牌的宽松街头版，直筒下摆"],
      ["Craft", "工艺", "Full sublimation print, puff or screen print, badge embroidery and contrast rib collar", "满版升华印花、发泡/丝印、徽章刺绣和撞色罗纹领"]
    ],
    features: [
      ["Blokecore football style", "Blokecore足球风格", "The open football collar, contrast rib and back number create a retro football look for streetwear collections.", "开口足球翻领、撞色罗纹和后背号码，形成适合街头系列的复古足球视觉。"],
      ["Full sublimation artwork", "满版升华图案", "Sublimation is suitable for geometric patterns and large color areas because it keeps the hand feel light.", "升华印花适合几何纹理和大面积颜色，手感更轻，不容易堆墨。"],
      ["Badge and logo options", "徽章与Logo方案", "Chest badge can be reviewed for embroidery patch, silicone heat transfer or high-density print depending on budget and texture.", "胸章可按预算和质感评估刺绣章、硅胶烫标或高密度印花。"],
      ["Teamwear plus streetwear use", "队服与街头两用", "The style can serve clubs, events, brand drops and sport-inspired casual collections.", "可用于俱乐部、活动服、品牌上新和运动街头休闲系列。"]
    ],
    quality: [
      ["Sublimation color match", "升华颜色确认", "Color should be checked on actual fabric before bulk production", "大货前需要在实际面料上确认颜色"],
      ["Collar shape", "领型控制", "Rib collar opening and V placket should stay balanced after sewing", "罗纹翻领和V口门襟车缝后需保持平衡"],
      ["Number placement", "号码位置", "Back number size and placement should follow confirmed artwork proof", "后背号码尺寸和位置按确认图稿执行"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  }
);

productItems.push(
  {
    id: "flame-logo-wide-leg-sweatpants",
    productId: "sweatpants",
    categoryEn: "Custom Sweatpants",
    categoryZh: "卫裤定制",
    titleEn: "Faded Black Flame Logo Wide-Leg Sweatpants",
    titleZh: "火焰Logo宽腿卫裤",
    image: "assets/products/sweatpants/flame-logo-wide-leg-sweatpants/01-front-view.png",
    hoverImage: "assets/products/sweatpants/flame-logo-wide-leg-sweatpants/02-back-view.png",
    shortEn: "Faded black heavyweight French terry sweatpants with relaxed wide-leg fit, washed vintage surface, side flame artwork and small gothic logo print.",
    shortZh: "褪色黑重磅毛圈卫裤，宽松直筒宽腿版型，成衣洗水做旧，外侧火焰图案与小Logo印花。",
    filters: ["sweatpants", "oem", "custom", "test", "repeat", "wide-leg", "straight-leg", "open-hem", "french-terry", "garment-wash", "screen-print", "rib-trim"],
    tagsEn: ["Wide-leg fit", "French terry", "Garment wash", "Leg screen print"],
    tagsZh: ["宽腿版型", "毛圈面料", "成衣洗水", "腿部丝印"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/sweatpants/flame-logo-wide-leg-sweatpants/01-front-view.png"],
      ["Back product view", "背面产品图", "assets/products/sweatpants/flame-logo-wide-leg-sweatpants/02-back-view.png"],
      ["Flame logo detail", "火焰Logo细节", "assets/products/sweatpants/flame-logo-wide-leg-sweatpants/03-waist-print-detail.png"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考3-7天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考7-20天，按数量和工艺确认"],
      ["Fabric", "面料", "Heavyweight French terry sweatpants fabric", "重磅毛圈卫裤布"],
      ["Composition", "成分", "100% cotton, or 80% cotton / 20% polyester can be reviewed", "100%棉，或80%棉 / 20%涤纶可评估"],
      ["Weight", "克重", "380-420GSM reference, 400GSM recommended", "参考380-420GSM，建议400GSM"],
      ["Fit", "版型", "Relaxed wide-leg straight sweatpants with natural mid waist", "中腰宽松直筒宽腿卫裤版型"],
      ["Craft", "工艺", "Garment wash, distressed screen print, multi-needle waistband and reinforced pocket opening", "成衣洗水、做旧丝印、多道腰头压线与口袋加固"]
    ],
    features: [
      ["Faded black wash surface", "褪色黑洗水效果", "Enzyme wash, snow wash or light stone wash can be reviewed to create a natural worn black surface.", "可评估酵素洗、雪花洗或轻石磨，做出自然褪色黑和旧化层次。"],
      ["Side flame artwork", "侧缝火焰图案", "The flame artwork runs along the outside leg seam, so placement should be checked from both front and back before bulk.", "火焰图案沿外侧缝纵向排列，大货前需要同时确认正面和背面的衔接位置。"],
      ["Heavy relaxed shape", "重磅宽松廓形", "The straight wide-leg pattern keeps enough thigh and knee room without turning into a tight jogger silhouette.", "直筒宽腿版型保留大腿和膝围空间，避免做成紧身束脚裤效果。"],
      ["Clean open hem", "平口裤脚", "Open hem with double-needle finishing keeps the pants casual and heavy rather than sporty.", "平口裤脚配双针卷边，更偏重磅街头感，不做运动裤式束脚。"]
    ],
    quality: [
      ["Wash consistency", "洗水一致性", "Faded black shade should match approved sample across sizes", "褪色黑效果按确认样控制"],
      ["Print durability", "印花耐洗", "Distressed flame print should stay clear after wash testing", "做旧火焰印花水洗后需保持层次清楚"],
      ["Waistband recovery", "腰头回弹", "Elastic waistband should keep recovery after wear and wash", "松紧腰穿着和水洗后需保持回弹"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  },
  {
    id: "skull-graphic-wide-leg-sweatpants",
    productId: "sweatpants",
    categoryEn: "Custom Sweatpants",
    categoryZh: "卫裤定制",
    titleEn: "Faded Black Skull Graphic Wide-Leg Sweatpants",
    titleZh: "骷髅图案宽腿卫裤",
    image: "assets/products/sweatpants/skull-graphic-wide-leg-sweatpants/01-front-view.png",
    hoverImage: "assets/products/sweatpants/skull-graphic-wide-leg-sweatpants/02-back-view.png",
    shortEn: "Heavyweight black washed sweatpants with oversized wide-leg shape, large distressed skull leg print, small skull embroidery badge and adjustable hem drawcord.",
    shortZh: "重磅黑色洗水卫裤，宽松宽腿版型，前腿大面积骷髅做旧印花，小骷髅刺绣章，裤脚可做抽绳调节。",
    filters: ["sweatpants", "oem", "custom", "test", "repeat", "wide-leg", "adjustable-hem", "french-terry", "brushed-fleece", "garment-wash", "screen-print", "embroidery", "rib-trim"],
    tagsEn: ["420GSM reference", "Skull leg print", "Embroidery badge", "Adjustable hem"],
    tagsZh: ["参考420GSM", "骷髅腿部印花", "刺绣章", "可调脚口"],
    gallery: [
      ["Front product view", "正面产品图", "assets/products/sweatpants/skull-graphic-wide-leg-sweatpants/01-front-view.png"],
      ["Back product view", "背面产品图", "assets/products/sweatpants/skull-graphic-wide-leg-sweatpants/02-back-view.png"],
      ["Large skull print detail", "大骷髅印花细节", "assets/products/sweatpants/skull-graphic-wide-leg-sweatpants/03-skull-print-detail.png"],
      ["Embroidery badge detail", "刺绣章细节", "assets/products/sweatpants/skull-graphic-wide-leg-sweatpants/04-embroidery-badge-detail.png"]
    ],
    specs: [
      ["MOQ", "起订量", "From 200 pcs", "200件起"],
      ["Sampling", "打样时间", "3-7 days reference", "参考3-7天"],
      ["Bulk lead time", "大货周期", "7-20 days, confirmed by quantity and craft", "参考7-20天，按数量和工艺确认"],
      ["Fabric", "面料", "Heavyweight cotton French terry or fleece sweatpants fabric", "重磅棉毛圈或轻抓绒卫裤布"],
      ["Composition", "成分", "100% cotton preferred, or 80% cotton / 20% polyester can be reviewed", "优先100%棉，或80%棉 / 20%涤纶可评估"],
      ["Weight", "克重", "400-450GSM reference, 420GSM recommended", "参考400-450GSM，建议420GSM"],
      ["Fit", "版型", "Unisex oversized relaxed wide-leg sweatpants with adjustable hem", "男女同款宽松宽腿卫裤，可调节脚口"],
      ["Craft", "工艺", "Distressed screen print, small embroidery badge, garment wash and adjustable hem drawcord", "做旧丝网印花、小面积刺绣章、成衣洗水和脚口抽绳"]
    ],
    features: [
      ["Large skull leg graphic", "大骷髅腿部图案", "The large front-leg artwork can use 2-3 color distressed screen print to keep the vintage rock effect controlled.", "前腿大图可做2-3色做旧丝印，保持复古摇滚成衣效果，同时控制手感厚度。"],
      ["Embroidery badge layer", "刺绣章工艺层次", "A small skull badge can be made with flat embroidery or high-density embroidery for a richer craft mix.", "小骷髅Logo可做电脑平绣或高密度刺绣章，增加工艺层次。"],
      ["Adjustable hem option", "可调节裤脚", "Drawcord and stopper at the hem allow the style to switch between a natural wide-leg look and a slightly tightened opening.", "裤脚抽绳和调节扣可以在自然宽腿和轻微束脚之间切换。"],
      ["Washed streetwear finish", "洗水街头后整", "Garment dye, enzyme wash or snow wash can make the print, embroidery and body fabric look more naturally aged.", "成衣染、酵素洗或雪花洗可以让印花、刺绣和裤身更自然做旧。"]
    ],
    quality: [
      ["Print hand feel", "印花手感", "Large print should avoid excessive ink thickness on 420GSM fabric", "420GSM面料上的大面积印花需避免胶浆过厚"],
      ["Embroidery edge", "刺绣包边", "Small skull badge edge should stay clean without loose threads", "小骷髅刺绣章边缘需要干净无散线"],
      ["Hem hardware", "脚口五金", "Drawcord stopper and elastic opening should be tested for pull strength", "抽绳调节扣和脚口松紧需测试拉力"],
      ["Measurement tolerance", "尺寸误差", "+/- 1.5 cm reference, confirm by final size chart", "参考+/-1.5cm，按最终尺码表确认"]
    ]
  }
);

const productFilterMap = {
  hoodies: ["hoodies", "oem", "custom", "test", "repeat"],
  tshirts: ["tshirts", "oem", "custom", "test", "repeat"],
  sweatpants: ["sweatpants", "oem", "custom", "test", "repeat"],
  teamwear: ["teamwear", "oem", "custom", "test", "repeat"],
  "baseball-jackets": ["baseball-jackets", "oem", "custom", "test", "repeat"],
  jackets: ["jackets", "oem", "custom", "repeat"]
};

const catalogCategoryOptions = [
  ["all", "All Products", "全部男装"],
  ["hoodies", "Hoodies", "卫衣"],
  ["tshirts", "T-Shirts / Polo", "T恤 / Polo"],
  ["sweatpants", "Sweatpants", "卫裤"],
  ["teamwear", "Jerseys / Teamwear", "球服 / 队服"],
  ["baseball-jackets", "Baseball / Varsity Jackets", "棒球服"],
  ["jackets", "Jackets & Outerwear", "夹克外套"]
].map(([value, en, zh]) => ({ value, en, zh }));

const salesFilterOptions = [
  ["oem", "OEM Services", "OEM 代工"],
  ["custom", "Photo / Sample Custom", "来图来样定制"],
  ["test", "Test Orders", "测款单"],
  ["repeat", "Repeat Production", "爆款返单"]
].map(([value, en, zh]) => ({ value, en, zh }));

const catalogFilterRows = {
  all: [
    {
      group: "craft",
      labelEn: "Techniques",
      labelZh: "工艺",
      options: [
        ["screen-print", "Printing", "印花"],
        ["embroidery", "Embroidery", "刺绣"],
        ["heat-transfer", "Heat Transfer", "热转印"],
        ["garment-wash", "Wash / Vintage", "水洗做旧"],
        ["applique", "Patch / Applique", "章仔 / 贴布"],
        ["rhinestone", "Rhinestone / Hotfix", "烫钻 / 烫图"]
      ]
    },
    {
      group: "fit",
      labelEn: "Fit",
      labelZh: "版型",
      options: [
        ["oversized", "Oversized", "宽松"],
        ["regular-fit", "Regular Fit", "常规"],
        ["slim-fit", "Slim Fit", "修身"],
        ["team-fit", "Team Fit", "队服版型"],
        ["outerwear-fit", "Outerwear Fit", "外套版型"]
      ]
    },
    {
      group: "fabric",
      labelEn: "Fabric",
      labelZh: "面料",
      options: [
        ["cotton-jersey", "Cotton Jersey", "针织棉"],
        ["pique-knit", "Pique / Polo Knit", "珠地 / Polo布"],
        ["french-terry", "French Terry", "毛圈"],
        ["brushed-fleece", "Brushed Fleece", "抓绒"],
        ["performance-mesh", "Mesh / Performance", "网眼 / 运动面料"],
        ["woven-special", "Woven / Special Fabric", "梭织 / 特殊面料"]
      ]
    }
  ],
  hoodies: [
    {
      group: "craft",
      labelEn: "Techniques",
      labelZh: "工艺",
      options: [
        ["screen-print", "Screen Print", "丝网印花"],
        ["puff-print", "Puff Print", "发泡印花"],
        ["embroidery", "Embroidery", "刺绣"],
        ["applique", "Applique / Patch", "贴布 / 章仔"],
        ["garment-wash", "Garment Wash", "成衣水洗"],
        ["heat-transfer", "Heat Transfer Label", "热转印标"]
      ]
    },
    {
      group: "fit",
      labelEn: "Fit",
      labelZh: "版型",
      options: [
        ["oversized", "Oversized Drop Shoulder", "落肩宽松"],
        ["regular-fit", "Regular Pullover", "常规套头"],
        ["zip-up", "Zip Hoodie", "拉链连帽"],
        ["boxy-fit", "Boxy Fit", "短宽版"],
        ["set-program", "Set Program", "套装版型"]
      ]
    },
    {
      group: "fabric",
      labelEn: "Fabric",
      labelZh: "面料",
      options: [
        ["heavyweight-fleece", "Heavyweight Fleece", "重磅抓绒"],
        ["french-terry", "French Terry", "毛圈"],
        ["cotton-fleece", "Cotton Fleece", "棉感抓绒"],
        ["rib-trim", "Rib Trim", "罗纹辅料"],
        ["sherpa-lining", "Sherpa / Lining", "羊羔绒 / 里布"]
      ]
    }
  ],
  tshirts: [
    {
      group: "craft",
      labelEn: "Techniques",
      labelZh: "工艺",
      options: [
        ["screen-print", "Screen Print", "丝网印花"],
        ["digital-print", "Digital / DTG Print", "数码直喷"],
        ["embroidery", "Logo Embroidery", "Logo刺绣"],
        ["garment-wash", "Garment Wash", "成衣水洗"],
        ["heat-transfer", "Heat Transfer", "热转印"],
        ["puff-print", "Puff Print", "发泡印花"],
        ["crew-neck", "Crew Neck", "圆领"],
        ["v-neck", "V-Neck", "V领"],
        ["polo-collar", "Polo Collar", "Polo领"],
        ["henley-neck", "Henley Neck", "亨利领"]
      ]
    },
    {
      group: "fit",
      labelEn: "Fit",
      labelZh: "版型",
      options: [
        ["oversized", "Oversized Tee", "宽松T恤"],
        ["regular-fit", "Regular Fit", "常规版"],
        ["slim-fit", "Slim Fit", "修身版"],
        ["polo-fit", "Polo Fit", "Polo版型"],
        ["boxy-fit", "Boxy Fit", "短宽版"]
      ]
    },
    {
      group: "fabric",
      labelEn: "Fabric",
      labelZh: "面料",
      options: [
        ["heavyweight-jersey", "Heavyweight Jersey", "重磅汗布"],
        ["cotton-jersey", "Cotton Jersey", "针织棉"],
        ["pique-knit", "Pique Knit", "珠地布"],
        ["interlock-knit", "Interlock Knit", "双面布"],
        ["performance-mesh", "Performance Polyester", "运动速干面料"],
        ["stretch-cotton", "Cotton / Spandex", "棉氨弹力"]
      ]
    }
  ],
  sweatpants: [
    {
      group: "craft",
      labelEn: "Techniques",
      labelZh: "工艺",
      options: [
        ["screen-print", "Leg Print", "腿部印花"],
        ["embroidery", "Embroidery", "刺绣"],
        ["applique", "Patch Detail", "章仔细节"],
        ["garment-wash", "Wash Effect", "水洗效果"],
        ["contrast-piping", "Contrast Piping", "撞色滚条"]
      ]
    },
    {
      group: "fit",
      labelEn: "Fit",
      labelZh: "版型",
      options: [
        ["jogger-fit", "Jogger Fit", "束脚版"],
        ["straight-leg", "Straight Leg", "直筒"],
        ["wide-leg", "Wide Leg", "宽腿"],
        ["adjustable-hem", "Adjustable Hem", "可调脚口"],
        ["cargo-fit", "Cargo Pocket", "工装口袋"],
        ["open-hem", "Open Hem", "开脚口"]
      ]
    },
    {
      group: "fabric",
      labelEn: "Fabric",
      labelZh: "面料",
      options: [
        ["french-terry", "French Terry", "毛圈"],
        ["brushed-fleece", "Brushed Fleece", "抓绒"],
        ["heavy-jersey", "Heavy Jersey", "重磅针织"],
        ["rib-trim", "Rib Cuff / Waistband", "罗纹脚口 / 腰头"],
        ["stretch-cotton", "Cotton Blend Stretch", "棉混纺弹力"]
      ]
    }
  ],
  teamwear: [
    {
      group: "craft",
      labelEn: "Techniques",
      labelZh: "工艺",
      options: [
        ["sublimation", "Full Sublimation", "全件升华"],
        ["screen-print", "Screen Print Logo", "丝印Logo"],
        ["puff-print", "Puff Print", "发泡印花"],
        ["heat-transfer", "Names / Numbers", "号码 / 名字烫印"],
        ["tackle-twill", "Tackle Twill", "贴布字母"],
        ["embroidery", "Embroidery Patch", "刺绣章仔"]
      ]
    },
    {
      group: "fit",
      labelEn: "Fit",
      labelZh: "版型",
      options: [
        ["v-neck", "V-Neck Jersey", "V领球衣"],
        ["polo-collar", "Polo Collar", "Polo翻领"],
        ["crew-neck", "Crew Neck", "圆领"],
        ["raglan-sleeve", "Raglan Sleeve", "插肩袖"],
        ["set-in-sleeve", "Set-in Sleeve", "正肩袖"],
        ["oversized", "Oversized Teamwear", "宽松队服"],
        ["team-fit", "Team Fit", "队服版型"]
      ]
    },
    {
      group: "fabric",
      labelEn: "Fabric",
      labelZh: "面料",
      options: [
        ["performance-mesh", "Poly Mesh", "涤纶网眼"],
        ["bird-eye-mesh", "Bird-eye Mesh", "鸟眼布"],
        ["pique-knit", "Pique / Polo Fabric", "珠地布 / Polo布"],
        ["interlock-knit", "Interlock Performance", "双面运动布"],
        ["stretch-poly", "Poly / Spandex", "涤氨弹力"],
        ["quick-dry", "Quick-dry Fabric", "速干面料"]
      ]
    }
  ],
  "baseball-jackets": [
    {
      group: "craft",
      labelEn: "Techniques",
      labelZh: "工艺",
      options: [
        ["chenille-patch", "Chenille Patch", "毛巾绣章"],
        ["embroidery", "Direct Embroidery", "直接刺绣"],
        ["tackle-twill", "Tackle Twill Letters", "贴布字母"],
        ["applique", "Felt / Applique", "毛毡贴布"],
        ["snap-button", "Snap Button Detail", "四合扣细节"],
        ["laser-emboss", "Laser Emboss / HF Lines", "激光压花 / 高周波压线"],
        ["reflective-piping", "Reflective Piping", "反光包边"],
        ["zipper-hardware", "Zipper / Hardware", "拉链 / 五金"],
        ["water-repellent", "Water-repellent Finish", "拒水整理"],
        ["satin-print", "Satin Print", "缎面印花"]
      ]
    },
    {
      group: "fit",
      labelEn: "Fit",
      labelZh: "版型",
      options: [
        ["varsity-fit", "Varsity Fit", "棒球服版型"],
        ["oversized", "Oversized Street Fit", "街头宽松"],
        ["regular-fit", "Regular Jacket", "常规外套"],
        ["contrast-sleeve", "Contrast Sleeve", "撞色袖"],
        ["rib-trim", "Rib Collar / Cuff / Hem", "领口袖口下摆罗纹"],
        ["lined-jacket", "Lined Jacket", "夹里外套"]
      ]
    },
    {
      group: "fabric",
      labelEn: "Fabric",
      labelZh: "面料",
      options: [
        ["melton-wool", "Melton / Wool Blend", "麦尔登 / 毛呢混纺"],
        ["leather-sleeve", "PU / Leather Sleeve", "PU / 皮袖"],
        ["suede", "Suede / Micro Suede", "麂皮 / 仿麂皮"],
        ["quilted-lining", "Quilted Lining", "绗缝里布"],
        ["nylon-poly", "Nylon / Polyester", "尼龙 / 涤纶"],
        ["satin", "Satin", "缎面"],
        ["poly-lining", "Poly Lining", "涤纶里布"],
        ["rib-knit", "Rib Knit", "罗纹针织"],
        ["cotton-twill", "Cotton Twill", "棉斜纹"]
      ]
    }
  ],
  jackets: [
    {
      group: "craft",
      labelEn: "Techniques",
      labelZh: "工艺",
      options: [
        ["embroidery", "Embroidery", "刺绣"],
        ["patch-label", "Patch / Label", "章仔 / 标牌"],
        ["heat-transfer", "Heat Transfer", "热转印"],
        ["quilting", "Quilting / Lining", "绗棉 / 夹里"],
        ["zipper-hardware", "Zipper / Hardware", "拉链 / 五金"],
        ["garment-wash", "Garment Wash", "成衣水洗"]
      ]
    },
    {
      group: "fit",
      labelEn: "Fit",
      labelZh: "版型",
      options: [
        ["regular-fit", "Regular Jacket", "常规外套"],
        ["workwear-fit", "Workwear Fit", "工装版"],
        ["bomber-fit", "Bomber Fit", "飞行夹克"],
        ["coach-jacket", "Coach Jacket", "教练夹克"],
        ["light-shell", "Light Shell", "轻薄外壳"],
        ["outerwear-fit", "Layering Fit", "叠穿版型"]
      ]
    },
    {
      group: "fabric",
      labelEn: "Fabric",
      labelZh: "面料",
      options: [
        ["cotton-twill", "Cotton Twill", "棉斜纹"],
        ["canvas", "Canvas", "帆布"],
        ["corduroy", "Corduroy", "灯芯绒"],
        ["nylon-poly", "Nylon / Polyester", "尼龙 / 涤纶"],
        ["poly-lining", "Lining Fabric", "里布"],
        ["woven-special", "Special Fabric", "特殊面料"]
      ]
    }
  ]
};

Object.values(catalogFilterRows).forEach((rows) => {
  rows.forEach((row) => {
    row.options = row.options.map(([value, en, zh]) => ({ value, en, zh }));
  });
});

const styleFilterMap = {
  hoodies: [
    ["oversized", "boxy-fit", "heavyweight-fleece", "cotton-fleece", "embroidery", "garment-wash", "rib-trim"],
    ["oversized", "boxy-fit", "heavyweight-fleece", "cotton-fleece", "applique", "embroidery", "garment-wash", "rib-trim"],
    ["oversized", "boxy-fit", "heavyweight-fleece", "cotton-fleece", "applique", "garment-wash", "rib-trim"],
    ["oversized", "boxy-fit", "heavyweight-fleece", "cotton-fleece", "applique", "garment-wash", "rib-trim"],
    ["oversized", "boxy-fit", "heavyweight-fleece", "cotton-fleece", "applique", "screen-print", "garment-wash", "rib-trim"],
    ["zip-up", "oversized", "boxy-fit", "cotton-fleece", "rib-trim"]
  ],
  tshirts: [
    ["polo-fit", "pique-knit", "embroidery", "woven-label"],
    ["oversized", "cotton-jersey", "screen-print", "digital-print"],
    ["regular-fit", "cotton-jersey", "woven-label"],
    ["regular-fit", "cotton-jersey", "screen-print", "heat-transfer"],
    ["regular-fit", "cotton-jersey", "pique-knit", "custom"],
    ["regular-fit", "stretch-cotton", "woven-label"],
    ["oversized", "boxy-fit", "cotton-jersey", "heavyweight-jersey", "screen-print", "digital-print", "garment-wash"],
    ["oversized", "boxy-fit", "cotton-jersey", "heavyweight-jersey", "screen-print", "garment-wash", "rib-trim"],
    ["oversized", "boxy-fit", "cotton-jersey", "heavyweight-jersey", "screen-print", "digital-print", "rib-trim"],
    ["oversized", "boxy-fit", "cotton-jersey", "heavyweight-jersey", "screen-print", "garment-wash"]
  ],
  sweatpants: [
    ["straight-leg", "french-terry", "contrast-piping", "screen-print"],
    ["jogger-fit", "brushed-fleece", "embroidery"],
    ["set-program", "french-terry", "rib-trim", "applique"],
    ["wide-leg", "heavy-jersey", "garment-wash"],
    ["regular-fit", "brushed-fleece", "garment-wash"],
    ["open-hem", "rib-trim", "french-terry"]
  ],
  teamwear: [
    ["v-neck", "performance-mesh", "heat-transfer", "screen-print"],
    ["team-fit", "performance-mesh", "screen-print", "sublimation"],
    ["team-fit", "interlock-knit", "sublimation"],
    ["regular-fit", "quick-dry", "screen-print", "heat-transfer"],
    ["team-fit", "stretch-poly", "custom"],
    ["team-fit", "bird-eye-mesh", "repeat"]
  ],
  "baseball-jackets": [
    ["varsity-fit", "melton-wool", "chenille-patch", "embroidery", "rib-knit"],
    ["contrast-sleeve", "leather-sleeve", "snap-button", "rib-trim"],
    ["oversized", "satin", "satin-print", "applique"],
    ["regular-fit", "cotton-twill", "tackle-twill", "rib-knit"],
    ["lined-jacket", "poly-lining", "snap-button", "repeat"],
    ["varsity-fit", "rib-knit", "snap-button"],
    ["oversized", "nylon-poly", "reflective-piping", "zipper-hardware", "water-repellent", "rib-knit"]
  ],
  jackets: [
    ["regular-fit", "corduroy", "zipper-hardware"],
    ["light-shell", "nylon-poly", "patch-label"],
    ["workwear-fit", "canvas", "cotton-twill", "patch-label"],
    ["coach-jacket", "nylon-poly", "heat-transfer"],
    ["regular-fit", "woven-special", "embroidery"],
    ["outerwear-fit", "poly-lining", "quilting"]
  ]
};

const crafts = [
  ["embroidery", "Embroidery", "刺绣", "Logo, patch, towel, applique and raised embroidery can be reviewed by artwork and sample.", "Logo、章仔、毛巾绣、贴布绣和立体绣可按图案和样衣评估。", "assets/craft-generated/raised-embroidery.png"],
  ["printing", "Printing", "印花", "Puff, rubber, water-based, digital and high-density print directions can be checked by fabric.", "发泡、胶浆、水浆、数码、厚板等印花可根据面料确认。", "assets/craft-generated/puff-print.png"],
  ["washing", "Washing & Distress", "水洗做旧", "Garment wash, tie-dye, abrasion and vintage effects can be developed by target hand feel.", "成衣水洗、扎染、磨烂和做旧效果可按手感目标开发。", "assets/craft-generated/tie-dye-distressed.png"],
  ["rhinestones", "Rhinestone & Sequin", "烫钻 / 珠片", "Reflective decoration, hotfix rhinestones and sequin embroidery for suitable fabrics.", "适合需要闪面装饰的烫钻、珠片和组合工艺。", "assets/craft-generated/hotfix-rhinestones.png"],
  ["bonding", "Bonding & Special Surface", "压胶 / 特殊表面", "Bonding, flock, embossing and dimensional surface effects can be confirmed by sample.", "压胶、植绒、压花和立体表面效果可按样衣确认。", "assets/craft-generated/3d-embossing.png"],
  ["finishing", "Buttons, Pressing & Packing", "锁眼钉扣 / 整烫包装", "Buttonhole, snap button, pressing, folding, bagging and carton details before shipment.", "锁眼、钉扣、四合扣、整烫、折叠、入袋和装箱细节。", "assets/company/pressing-detail.jpg"]
];

const cases = [
  ["Baseball jacket sample direction", "棒球服样衣开发方向", "assets/hero-carousel/baseball-production.png", "Patch embroidery, rib trim, snap button and lining details can be reviewed before bulk production.", "章仔刺绣、罗纹、四合扣和里布细节可在大货前确认。"],
  ["Hoodie and sweatpants set", "卫衣卫裤套装方向", "review-assets/pdf-images/menswear-p14-106-402x1148.jpg", "Suitable for test orders, color programs and repeat production after sample approval.", "适合测款、配色系列和样衣确认后的返单生产。"],
  ["T-shirt and polo color program", "T恤 / Polo 多色系列", "review-assets/pdf-images/menswear-p03-10-1023x769.jpg", "A stable category for brand basics, corporate wear and private-label orders.", "适合品牌基础款、企业工装和贴牌订单。"],
  ["Teamwear with logo placement", "球服Logo位置确认", "assets/company/jersey-teamwear.png", "Numbers, names, logos and color-blocking can be prepared by artwork and size ratio.", "号码、名字、Logo和拼色可按图案文件与尺码配比准备。"]
];

const articles = [
  ["What to prepare before asking for a hoodie quote", "卫衣询价前需要准备什么", "Send reference photos, size chart, fabric weight, logo artwork, quantity and target delivery date.", "提供参考图、尺码表、面料克重、Logo文件、数量和目标交期。"],
  ["CMT, OEM and ODM: which route fits your order?", "CMT、OEM、ODM怎么选", "Choose the route by how complete your design, pattern, material plan and packaging requirements are.", "根据设计、纸样、面料方案和包装要求的完整程度来选择合作方式。"],
  ["How to confirm craft details for bulk production", "大货前如何确认工艺细节", "Artwork size, color, placement, sample approval and written comments help reduce production risk.", "图案尺寸、颜色、位置、样衣确认和文字修改意见能降低生产风险。"]
];

function currentLang() {
  return document.documentElement.dataset.lang || "en";
}

function t(en, zh) {
  return currentLang() === "zh" ? zh : en;
}

function createLang(en, zh) {
  return `<span class="lang-en">${en}</span><span class="lang-zh">${zh}</span>`;
}

function productUrl(id) {
  return `products.html?category=${encodeURIComponent(id)}`;
}

function productItemUrl(id) {
  return `product.html?item=${encodeURIComponent(id)}`;
}

function productFilters(product) {
  return [...new Set([product.id, ...(productFilterMap[product.id] || [])])].join(" ");
}

function styleFilters(product, index) {
  return [...new Set([
    product.id,
    ...(productFilterMap[product.id] || []),
    ...((styleFilterMap[product.id] || [])[index] || [])
  ])].join(" ");
}

const productDisplayTitleOverrides = {
  "future-academy-heavyweight-oversized-hoodie": {
    en: "Custom Future Academy Heavyweight Hoodie with Front & Back Graphic",
    zh: "定制未来学院风重磅连帽卫衣 / 前后幅图案印花"
  },
  "future-street-tech-zip-hoodie": {
    en: "Custom Future Tech Zip Hoodie with Sleeve Graphic and Chest Embroidery",
    zh: "定制未来机能拉链连帽卫衣 / 袖部图案与胸前刺绣"
  },
  "vintage-garage-car-heavyweight-tshirt": {
    en: "Custom Vintage Garage Car Heavyweight T-Shirt with Distressed Screen Print",
    zh: "定制复古车库汽车重磅T恤 / 做旧丝网印花"
  },
  "track-code-tech-varsity-jacket": {
    en: "Custom Tech Code Varsity Jacket with Chenille Patches and PU Sleeves",
    zh: "定制科技线路棒球服 / 毛巾绣章仔与PU袖"
  },
  "black-gray-patchwork-varsity-jacket": {
    en: "Custom Black & Gray Varsity Jacket with Chenille Letter Patches",
    zh: "定制黑灰拼接棒球服 / 毛巾绣字母章仔"
  },
  "retro-patchwork-varsity-jacket": {
    en: "Custom Retro Orange Varsity Jacket with Chenille and Twill Applique",
    zh: "定制复古橙黑棒球服 / 毛巾绣与贴布绣"
  },
  "urban-utility-varsity-jacket": {
    en: "Custom Urban Utility Varsity Jacket with Reflective Piping",
    zh: "定制城市机能棒球服 / 反光条与防泼面料"
  },
  "dark-green-patchwork-varsity-jacket": {
    en: "Custom Dark Green Varsity Jacket with City-Grid Back Artwork",
    zh: "定制墨绿色拼接棒球服 / 城市图案后背工艺"
  },
  "navy-vintage-college-varsity-jacket": {
    en: "Custom Navy College Varsity Jacket with Chenille Badge System",
    zh: "定制海军蓝学院风棒球服 / 毛巾绣章仔系统"
  },
  "western-racing-suede-varsity-jacket": {
    en: "Custom Western Racing Varsity Jacket with Suede-Look Body and Patch Artwork",
    zh: "定制西部赛车棒球服 / 麂皮质感与章仔图案"
  },
  "vintage-outdoor-heavy-wool-varsity-jacket": {
    en: "Custom Olive Outdoor Varsity Jacket with Heavy Wool Body and Cargo Pockets",
    zh: "定制橄榄绿户外棒球服 / 重磅羊毛与工装口袋"
  },
  "black-heavyweight-street-varsity-jacket": {
    en: "Custom Black Heavyweight Varsity Jacket with Tonal Chenille Artwork",
    zh: "定制黑色重磅棒球服 / 同色毛巾绣章仔"
  },
  "navy-retro-satin-varsity-jacket": {
    en: "Custom Navy Satin Varsity Jacket with Retro Club Embroidery",
    zh: "定制海军蓝缎面棒球服 / 复古俱乐部刺绣"
  },
  "washed-heavyweight-street-tshirt": {
    en: "Custom Washed Black Heavyweight T-Shirt with High-Density Distressed Print",
    zh: "定制水洗黑重磅T恤 / 高密度仿旧印花"
  },
  "heavyweight-vintage-tshirt": {
    en: "Custom Off-White Heavyweight T-Shirt with Architectural Line-Art Print",
    zh: "定制米白重磅T恤 / 建筑线稿印花"
  },
  "vintage-college-heavyweight-washed-tshirt": {
    en: "Custom Vintage College Washed T-Shirt with Distressed Athletic Graphic",
    zh: "定制复古学院运动T恤 / 水洗仿旧图案"
  },
  "black-gray-vintage-denim-workwear-jacket": {
    en: "Custom Black Gray Denim Workwear Jacket with Vintage Washed Finish",
    zh: "定制黑灰牛仔工装夹克 / 复古洗水后整"
  },
  "vintage-heavy-washed-canvas-workwear-jacket": {
    en: "Custom Heavy Washed Canvas Workwear Jacket with Multi-Pocket Construction",
    zh: "定制重磅水洗帆布夹克 / 多口袋工装结构"
  },
  "washed-distressed-pullover-hoodie": {
    en: "Custom Washed Distressed Graphic Pullover Hoodie",
    zh: "定制水洗做旧图案套头卫衣 / 复古印花工艺"
  },
  "burgundy-heavyweight-pullover-hoodie": {
    en: "Custom Burgundy Heavyweight Graphic Hoodie with Rib Detail",
    zh: "定制酒红重磅图案连帽卫衣 / 前幅印花与罗纹细节"
  },
  "series-washed-heavyweight-tshirt": {
    en: "Custom Washed Heavyweight T-Shirt Series with Architectural Back Print",
    zh: "定制水洗重磅T恤系列 / 建筑线稿后背印花"
  },
  "vintage-washed-colorblock-tshirt": {
    en: "Custom Vintage Washed Colorblock T-Shirt with Athletic Club Graphic",
    zh: "定制复古水洗拼色T恤 / 学院运动图案"
  },
  "urban-memory-archive-vintage-tshirt": {
    en: "Custom Urban Archive Vintage T-Shirt with Crack Screen Print",
    zh: "定制城市档案复古T恤 / 裂纹丝网印花"
  },
  "art-association-heavyweight-washed-tshirt": {
    en: "Custom Art Society Washed T-Shirt with Back Graphic",
    zh: "定制艺术社团水洗T恤 / 后背艺术图案"
  },
  "vintage-motor-club-tshirt": {
    en: "Custom Vintage Motor Club T-Shirt with Faded Wash and Crack Print",
    zh: "定制复古机车俱乐部T恤 / 成衣染洗裂纹印花"
  },
  "smoke-gray-tech-graphic-tshirt": {
    en: "Custom Smoke Gray Signal Core T-Shirt with Tech Graphic Print",
    zh: "定制烟灰信号核心T恤 / 科技图案印花"
  },
  "vintage-cream-analog-signal-tshirt": {
    en: "Custom Vintage Cream Analog Signal T-Shirt with Archive Graphic",
    zh: "定制奶油白模拟信号T恤 / 档案图案印花"
  },
  "white-portrait-back-graphic-tshirt": {
    en: "Custom White Heavyweight T-Shirt with Portrait Back Graphic",
    zh: "定制白色重磅T恤 / 人物后背大图"
  },
  "dark-streetwear-heavyweight-tshirt": {
    en: "Custom Dark Streetwear Heavyweight T-Shirt with Distressed Screen Print",
    zh: "定制暗黑街头重磅T恤 / 做旧丝网印花"
  },
  "vintage-black-gray-heavyweight-tshirt": {
    en: "Custom Vintage Black Gray Heavyweight T-Shirt with Distressed Archive Print",
    zh: "定制复古黑灰重磅T恤 / 做旧档案图案印花"
  },
  "music-tour-heavyweight-tshirt": {
    en: "Custom Music Tour Heavyweight T-Shirt with Embroidered Chest Logo and Back Tour Graphic",
    zh: "定制音乐巡演重磅T恤 / 胸前平绣与后背巡演图案"
  },
  "american-vintage-acid-wash-tshirt": {
    en: "Custom American Vintage Acid Wash T-Shirt with Distressed Athletic Graphic",
    zh: "定制美式复古酸洗T恤 / 做旧运动图案印花"
  },
  "black-serpent-sun-badge-tshirt": {
    en: "Custom Black Serpent Sun Badge T-Shirt with Vintage Crack Print",
    zh: "定制黑巨蛇太阳徽章T恤 / 复古裂纹印花"
  },
  "distressed-gothic-hardware-tshirt": {
    en: "Custom Distressed Gothic Hardware T-Shirt with Chain and Safety Pin Detail",
    zh: "定制破洞哥特重工T恤 / 链条五金与解构破洞"
  },
  "studded-fake-two-piece-tshirt": {
    en: "Custom Studded Fake Two-Piece T-Shirt with Layered Hem and Graphic Print",
    zh: "定制铆钉假两件T恤 / 金属铆钉与叠穿下摆"
  },
  "cyberpunk-heavyweight-tshirt": {
    en: "Custom Cyberpunk Heavyweight T-Shirt with Neon Skull Graphic",
    zh: "定制赛博朋克重磅T恤 / 霓虹骷髅图案"
  },
  "green-v-neck-mesh-team-jersey": {
    en: "Custom Green V-Neck Mesh Team Jersey with Gold Puff Print",
    zh: "定制绿色V领网眼球服 / 金色发泡印花"
  },
  "retro-sport-applique-polo-jersey": {
    en: "Custom Retro Sport Polo Jersey with Applique Number and Embroidered Badge",
    zh: "定制复古运动Polo球服 / 贴布号码与徽章刺绣"
  },
  "blokecore-football-collar-jersey": {
    en: "Custom Blokecore Football Collar Jersey with Sublimation Print",
    zh: "定制Blokecore复古足球翻领球服 / 满版升华印花"
  },
  "flame-logo-wide-leg-sweatpants": {
    en: "Custom Faded Black Flame Logo Wide-Leg Sweatpants with Distressed Leg Print",
    zh: "定制火焰Logo宽腿卫裤 / 洗水做旧腿部印花"
  },
  "skull-graphic-wide-leg-sweatpants": {
    en: "Custom Faded Black Skull Graphic Wide-Leg Sweatpants with Distressed Screen Print and Embroidery Badge",
    zh: "定制骷髅图案宽腿卫裤 / 做旧丝印与刺绣章"
  },
  "washed-charcoal-camo-logo-hooded-tshirt": {
    en: "Custom Washed Charcoal Hooded T-Shirt with Camo Graphic Print",
    zh: "定制水洗炭黑短袖连帽T恤 / 迷彩图案印花"
  },
  "washed-oversized-boxy-hoodie": {
    en: "Custom Washed Heavyweight Hoodie with Tonal Embroidery Color Series",
    zh: "定制重磅水洗连帽卫衣 / 同色刺绣多色系列"
  },
  "deconstructed-panel-washed-hoodie": {
    en: "Custom Washed Deconstructed Hoodie with Tonal Applique Panels",
    zh: "定制水洗解构连帽卫衣 / 同色贴布拼接"
  },
  "washed-distressed-panel-hoodie": {
    en: "Custom Raw-Edge Washed Patchwork Hoodie",
    zh: "定制毛边水洗拼接连帽卫衣 / 解构裁片结构"
  },
  "gray-distressed-panel-hoodie": {
    en: "Custom Graphite Gray Reconstructed Hoodie with Raw-Edge Panels",
    zh: "定制石墨灰解构连帽卫衣 / 毛边拼接做旧"
  },
  "black-gray-destroyed-distressed-hoodie": {
    en: "Custom Acid Wash Destroyed Hoodie with Raw-Edge Patchwork",
    zh: "定制酸洗磨破连帽卫衣 / 毛边拼接贴布"
  },
  "red-oversized-zip-hoodie": {
    en: "Custom Red Oversized Zip Hoodie with Clean Streetwear Fit",
    zh: "定制红色宽松拉链连帽卫衣 / 街头廓形开发"
  },
  "green-distressed-raw-edge-hoodie": {
    en: "Custom Vintage Green Hoodie with Raw-Edge Patch and Puff Print",
    zh: "定制复古绿连帽卫衣 / 毛边贴布发泡印花"
  },
  "washed-forest-deconstructed-patchwork-hoodie": {
    en: "Custom Forest Green Deconstructed Hoodie with Loose Thread Details",
    zh: "定制森林绿解构连帽卫衣 / 拼接散线细节"
  },
  "navy-rugby-collar-half-zip-sweatshirt": {
    en: "Custom Navy Rugby-Collar Half-Zip Sweatshirt with Embroidery and Back Print",
    zh: "定制藏蓝翻领半拉链卫衣 / 前胸刺绣后背印花"
  },
  "smoke-gray-washed-zip-hoodie": {
    en: "Custom Smoke Gray Washed Zip Hoodie with Patchwork and Crack Print",
    zh: "定制烟灰水洗拉链连帽卫衣 / 贴布裂纹印花"
  },
  "black-contrast-stitch-zip-hoodie": {
    en: "Custom Black Zip Hoodie with Contrast Stitching and Chest Embroidery",
    zh: "定制黑色撞色明线拉链卫衣 / 前胸刺绣与后背印花"
  },
  "charcoal-gradient-hoodie": {
    en: "Custom Charcoal Gradient Hoodie with Tonal Chest Embroidery",
    zh: "定制碳灰渐变连帽卫衣 / 同色胸标刺绣"
  },
  "misty-purple-gradient-hoodie": {
    en: "Custom Misty Purple Gradient Hoodie with Tonal Chest Embroidery",
    zh: "定制雾霾紫渐变连帽卫衣 / 同色胸标刺绣"
  }
};

function madeToOrderCatalogTitle(item, product) {
  const productTypeEn = product.navEn.replace(/^Custom\s+/i, "");
  const titleOverride = productDisplayTitleOverrides[item.id];
  const titleEnBase = titleOverride?.en || item.cardTitleEn || (item.titleEn.startsWith("Custom ")
    ? `${item.titleEn} | OEM/ODM Made to Order`
    : `Custom ${item.titleEn} | OEM/ODM ${productTypeEn} Made to Order`);
  const titleZhBase = item.titleZh.startsWith("定制") ? item.titleZh : `定制${item.titleZh}`;
  const titleZhBaseWithCraft = titleOverride?.zh || item.cardTitleZh || titleZhBase;
  const titleZhSuffix = " / OEM ODM 来图来样";
  const titleEn = /OEM\s*\/?\s*ODM/i.test(titleEnBase)
    ? titleEnBase
    : `${titleEnBase} | OEM/ODM From Photo or Sample`;
  const titleZh = titleZhBaseWithCraft.includes(titleZhSuffix)
    ? titleZhBaseWithCraft
    : `${titleZhBaseWithCraft}${titleZhSuffix}`;
  return { titleEn, titleZh };
}

function productHoverImage(item) {
  const galleryImages = (item.gallery || [])
    .map((entry) => entry[2])
    .filter(Boolean);
  return item.hoverImage || galleryImages.find((image) => image !== item.image) || item.image;
}

function productCardImages(style) {
  const hasHoverImage = style.hoverImage && style.hoverImage !== style.image;
  return `
    <img class="product-main-img" src="${style.image}" alt="${style.titleEn}" loading="lazy">
    ${hasHoverImage ? `<img class="product-hover-img" src="${style.hoverImage}" alt="" aria-hidden="true" loading="lazy">` : ""}
  `;
}

function catalogStyleItems() {
  return productItems.map((item) => {
    const product = products.find((entry) => entry.id === item.productId) || products[0];
    const title = madeToOrderCatalogTitle(item, product);
    return {
      id: item.id,
      product,
      titleEn: title.titleEn,
      titleZh: title.titleZh,
      image: item.image,
      hoverImage: productHoverImage(item),
      bodyEn: item.shortEn,
      bodyZh: item.shortZh,
      url: productItemUrl(item.id),
      filters: [...new Set([item.productId, ...(productFilterMap[item.productId] || []), ...(item.filters || [])])].join(" ")
    };
  });
}

function activeProductFiltersByGroup() {
  return [...document.querySelectorAll("[data-filter-value].is-active")].reduce((active, button) => {
    active[button.dataset.filterGroup] = button.dataset.filterValue;
    return active;
  }, {});
}

function selectedCatalogCategory() {
  const selected = document.querySelector('[data-filter-group="category"].is-active')?.dataset.filterValue;
  if (selected) return selected;

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || params.get("type");
  return catalogCategoryOptions.some((option) => option.value === category) ? category : "all";
}

function catalogCategoryCopy(category) {
  if (category && category !== "all") {
    const item = products.find((entry) => entry.id === category);
    if (item) {
      return {
        titleEn: item.titleEn,
        titleZh: item.titleZh,
        headingEn: `${item.navEn} made-to-order OEM/ODM style references`,
        headingZh: `${item.navZh} OEM/ODM 定制款式参考`
      };
    }
  }

  return {
    titleEn: "Custom Men's Apparel",
    titleZh: "男装定制产品",
    headingEn: "Made-to-order OEM/ODM men's apparel project reference",
    headingZh: "男装 OEM/ODM 定制接单项目参考"
  };
}

function catalogCategoryIntro(category) {
  const item = products.find((entry) => entry.id === category);
  const firstStyle = catalogStyleItems().find((style) => style.product.id === category);
  const image = firstStyle?.image || item?.image || "assets/company/menswear-display.jpg";
  const base = {
    titleEn: "Men's apparel OEM/ODM made to order",
    titleZh: "男装 OEM/ODM 按单定制",
    bodyEn: "Send reference photos, samples, size chart, artwork and target quantity. We review fabric, fit, craft and production route before sampling.",
    bodyZh: "发送参考图、样衣、尺码表、图案文件和目标数量，我们先评估面料、版型、工艺和生产方式，再进入打样。",
    points: [
      ["Photo / sample review", "图片 / 样衣评估"],
      ["Sampling and fit comments", "打样与版型修改"],
      ["Bulk production after approval", "确认样后安排大货"]
    ],
    image
  };

  const intros = {
    hoodies: {
      titleEn: "Custom hoodies from reference photo to approved sample",
      titleZh: "卫衣从参考图到确认样定制",
      bodyEn: "Pullover hoodies, zip hoodies and fleece sets can be developed by fabric weight, silhouette, rib quality, print placement and embroidery details.",
      bodyZh: "套头卫衣、拉链卫衣和卫衣套装，可按克重、廓形、罗纹品质、印花位置和刺绣细节开发。",
      points: [
        ["Heavy fleece / French terry", "重磅抓绒 / 毛圈"],
        ["Oversized and boxy fit", "宽松 / 箱型版型"],
        ["Print, embroidery and wash finish", "印花、刺绣、水洗后整"]
      ],
      image
    },
    tshirts: {
      titleEn: "Custom T-shirts and polos for brand drops",
      titleZh: "T恤 / Polo 品牌定制开发",
      bodyEn: "Heavyweight tees, washed tees, graphic tees and polo shirts can be reviewed by fabric GSM, collar structure, artwork size and finish.",
      bodyZh: "重磅T恤、水洗T恤、图案T恤和Polo衫，可按克重、领口结构、图案尺寸和后整效果评估。",
      points: [
        ["Heavy cotton jersey", "重磅针织棉"],
        ["Screen print and placement print", "丝网印花 / 定位印花"],
        ["Garment wash and vintage finish", "成衣水洗 / 复古做旧"]
      ],
      image
    },
    sweatpants: {
      titleEn: "Custom sweatpants and casual pants development",
      titleZh: "卫裤 / 休闲裤定制开发",
      bodyEn: "Joggers, sweatpants and casual pants can be developed with waistband, drawcord, pocket, side panel, wash and fit details confirmed by sample.",
      bodyZh: "束脚裤、卫裤和休闲裤，可按腰头、抽绳、口袋、侧拼、洗水和版型细节打样确认。",
      points: [
        ["Jogger and loose fit", "束脚 / 宽松版型"],
        ["Elastic waist and drawcord", "松紧腰 / 抽绳"],
        ["Pocket and side-panel details", "口袋 / 侧拼细节"]
      ],
      image
    },
    teamwear: {
      titleEn: "Custom jerseys and teamwear project development",
      titleZh: "球服 / 队服定制项目开发",
      bodyEn: "Team jerseys, sport tops and uniform projects can be reviewed by breathable fabric, color blocking, names, numbers and logo placement.",
      bodyZh: "球衣、运动上衣和队服项目，可按透气面料、拼色裁片、名字、号码和Logo位置确认。",
      points: [
        ["Mesh and breathable panels", "网眼 / 透气拼片"],
        ["Names, numbers and logos", "名字、号码、Logo"],
        ["Team color matching", "团队配色确认"]
      ],
      image
    },
    "baseball-jackets": {
      titleEn: "Custom varsity jackets with complex craft details",
      titleZh: "复杂工艺棒球服定制开发",
      bodyEn: "Varsity jackets can be developed with contrast sleeves, rib trims, snap buttons, lining, chenille patch, embroidery, PU or wool-blend fabric.",
      bodyZh: "棒球服可按撞色袖、罗纹、四合扣、里布、毛巾绣章仔、刺绣、PU皮袖或毛呢面料开发。",
      points: [
        ["PU / wool-blend / nylon body", "PU / 毛呢 / 尼龙面料"],
        ["Chenille patch and embroidery", "毛巾绣章仔 / 刺绣"],
        ["Rib, snap and lining details", "罗纹、按扣、里布细节"]
      ],
      image
    },
    jackets: {
      titleEn: "Custom jackets and outerwear built by sample",
      titleZh: "夹克 / 外套按样衣定制开发",
      bodyEn: "Work jackets, denim jackets and casual outerwear can be reviewed by fabric structure, lining, zipper, pocket, washing and construction details.",
      bodyZh: "工装夹克、牛仔夹克和休闲外套，可按面料结构、里布、拉链、口袋、洗水和车缝结构评估。",
      points: [
        ["Workwear and denim structures", "工装 / 牛仔结构"],
        ["Zipper, lining and pocket review", "拉链、里布、口袋确认"],
        ["Wash and special fabric handling", "洗水 / 特殊面料处理"]
      ],
      image
    }
  };

  return intros[category] || base;
}

function updateCatalogIntro(category = selectedCatalogCategory()) {
  const intro = catalogCategoryIntro(category);
  document.querySelectorAll("[data-catalog-intro-title]").forEach((target) => {
    target.innerHTML = createLang(intro.titleEn, intro.titleZh);
  });
  document.querySelectorAll("[data-catalog-intro-copy]").forEach((target) => {
    target.innerHTML = createLang(intro.bodyEn, intro.bodyZh);
  });
  document.querySelectorAll("[data-catalog-intro-points]").forEach((target) => {
    target.innerHTML = intro.points.map(([en, zh]) => `<span>${createLang(en, zh)}</span>`).join("");
  });
  document.querySelectorAll("[data-catalog-intro-image]").forEach((target) => {
    target.src = intro.image;
    target.alt = currentLang() === "zh" ? intro.titleZh : intro.titleEn;
  });
}

function updateCatalogCopy(category = selectedCatalogCategory()) {
  const copy = catalogCategoryCopy(category);
  document.querySelectorAll("[data-catalog-title]").forEach((target) => {
    target.innerHTML = createLang(copy.titleEn, copy.titleZh);
  });
  document.querySelectorAll("[data-catalog-heading]").forEach((target) => {
    target.innerHTML = createLang(copy.headingEn, copy.headingZh);
  });
  document.querySelectorAll("[data-catalog-breadcrumb-current]").forEach((target) => {
    target.innerHTML = category === "all" ? createLang("All", "全部") : createLang(copy.titleEn, copy.titleZh);
  });
  updateCatalogIntro(category);
}

function filterButtonHTML(row, option, activeValue) {
  const active = option.value === activeValue ? " class=\"is-active\"" : "";
  return `<button type="button"${active} data-filter-group="${row.group}" data-filter-value="${option.value}"><span></span>${createLang(option.en, option.zh)}</button>`;
}

function filterRowHTML(row, active) {
  const currentValue = row.options.some((option) => option.value === active[row.group]) ? active[row.group] : "";
  return `
    <div class="filter-label">${createLang(row.labelEn, row.labelZh)}</div>
    <div class="filter-options">
      ${row.options.map((option) => filterButtonHTML(row, option, currentValue)).join("")}
    </div>
  `;
}

function renderProductFilters(category = selectedCatalogCategory(), preservedFilters) {
  const target = document.querySelector("[data-dynamic-product-filter]");
  if (!target) return;

  const active = {
    ...activeProductFiltersByGroup(),
    ...(preservedFilters || {}),
    category
  };

  const rows = [
    {
      group: "category",
      labelEn: "Category",
      labelZh: "品类",
      options: catalogCategoryOptions
    },
    ...(catalogFilterRows[category] || catalogFilterRows.all),
    {
      group: "sales",
      labelEn: "Order Type",
      labelZh: "接单方式",
      options: salesFilterOptions
    }
  ];

  target.innerHTML = rows.map((row) => filterRowHTML(row, active)).join("");
}

function renderHeader() {
  const target = document.getElementById("site-header");
  if (!target) return;

  const nav = [
    {
      href: "products.html",
      en: "Products",
      zh: "产品/商品",
      children: products.map((item) => ({ href: productUrl(item.id), en: item.navEn, zh: item.navZh }))
    },
    {
      href: "how-to-start.html",
      en: "Start",
      zh: "如何开始",
      children: [
        ["Send Reference", "发送参考图", "how-to-start.html#reference"],
        ["Sample Development", "样衣开发", "sample-development.html"],
        ["RFQ Checklist", "询价资料清单", "support.html#rfq-checklist"]
      ].map(([en, zh, href]) => ({ en, zh, href }))
    },
    {
      href: "production.html",
      en: "Production",
      zh: "生产",
      children: [
        ["Factory Scale", "工厂规模", "production.html#scale"],
        ["Production Flow", "生产流程", "production.html#flow"],
        ["Quality Control", "质量控制", "production.html#quality"],
        ["Certificates & Documents", "证书资料预留", "certificates.html"],
        ["Oversized & Loose Fit", "宽松版型生产", "oversized-fit.html"],
        ["Extended Size Grading", "加大码与放码", "extended-sizes.html"],
        ["Stacked Hem Details", "堆叠裤脚细节", "stacked-details.html"],
        ["Slim & Structured Fit", "修身结构版型", "slim-fit.html"],
        ["Quality Control Statement", "质量控制声明", "quality-control.html"],
        ["Factory Videos", "工厂视频", "videos.html"]
      ].map(([en, zh, href]) => ({ en, zh, href }))
    },
    {
      href: "services.html",
      en: "Services",
      zh: "服务",
      children: [
        ["OEM / ODM", "OEM / ODM", "services.html#oem-odm"],
        ["CMT Manufacturing", "CMT 来料加工", "services.html#cmt"],
        ["FOB Orders", "FOB 外贸订单", "services.html#fob"],
        ["Best-Fit Buyers", "适合客户", "services.html#workwear"],
        ["Washing & Finishing", "水洗与后整", "washing-services.html"],
        ["Size & Fit Guide", "尺码版型指南", "size-fit-guide.html"],
        ["Printing Services", "印花服务", "printing-services.html"],
        ["Design Support", "设计支持", "design-support.html"],
        ["Fabric & Trims", "面料辅料", "fabric-sourcing.html"],
        ["Factory Videos", "工厂视频", "videos.html"]
      ].map(([en, zh, href]) => ({ en, zh, href }))
    },
    {
      href: "craft.html",
      en: "Craft",
      zh: "工艺",
      children: crafts.map(([id, en, zh]) => ({ href: `craft.html#${id}`, en, zh }))
    },
    {
      href: "support.html",
      en: "Support",
      zh: "支持",
      children: [
        ["FAQ", "常见问题", "faq.html"],
        ["Custom Guides", "定制科普", "support.html#guides"],
        ["Sample Development", "样衣开发", "sample-development.html"],
        ["Size & Fit Guide", "尺码版型指南", "size-fit-guide.html"],
        ["Inquiry Checklist", "询价清单", "support.html#rfq-checklist"]
      ].map(([en, zh, href]) => ({ en, zh, href }))
    },
    {
      href: "about.html",
      en: "About",
      zh: "关于",
      children: [
        ["Company Profile", "公司简介", "about.html#profile"],
        ["Company News", "公司动态", "company-news.html"],
        ["Xiyi Story", "喜艺故事", "founder-story.html"],
        ["Factory Photos", "工厂图片", "about.html#photos"],
        ["Factory Visits & Photos", "工厂参观与图片", "exhibition.html"],
        ["Social Responsibility", "社会责任", "social-responsibility.html"],
        ["Advantages", "核心优势", "about.html#advantages"],
        ["Quality Control Statement", "质量控制声明", "quality-control.html"]
      ].map(([en, zh, href]) => ({ en, zh, href }))
    },
    {
      href: "contact.html",
      en: "Contact",
      zh: "联系我们",
      children: [
        ["Phone", "电话", "contact.html#phone"],
        ["WhatsApp / WeChat", "WhatsApp / 微信", "contact.html#whatsapp"],
        ["Email", "邮箱", "contact.html#email"],
        ["Factory Address", "工厂地址", "contact.html#address"],
        ["Inquiry Template", "询价消息模板", "contact.html#inquiry-template"]
      ].map(([en, zh, href]) => ({ en, zh, href }))
    }
  ];

  target.innerHTML = `
    <header class="site-header">
      <div class="top-strip">
        <div class="header-shell top-strip-inner">
          <p>${createLang("Humen source factory for men's OEM/ODM apparel", "虎门男装源头工厂，支持来图来样、CMT、FOB")}</p>
          <div class="top-links">
            <span>${createLang("Welcome", "欢迎咨询")}</span>
            <button class="text-button" type="button" data-lang-toggle>${createLang("中文", "English")}</button>
          </div>
        </div>
      </div>
      <div class="nav-band">
        <div class="header-shell nav-shell">
          <a class="brand" href="index.html" aria-label="Dongguan Xiyi Apparel">
            <span class="brand-mark">XY</span>
            <span class="brand-copy">
              <strong>${createLang("XIYI APPAREL", "喜艺服饰")}</strong>
              <small>OEM / ODM</small>
            </span>
          </a>
          <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle>
            <span></span><span></span><span></span>
          </button>
          <nav class="main-nav" aria-label="Primary navigation" data-main-nav>
            ${nav.map((item) => `
              <div class="nav-item">
                <a href="${item.href}">${createLang(item.en, item.zh)}</a>
                <button class="submenu-toggle" type="button" aria-label="Open submenu">+</button>
                <div class="dropdown">
                  ${item.children.map((child) => `<a href="${child.href}">${createLang(child.en, child.zh)}</a>`).join("")}
                </div>
              </div>
            `).join("")}
          </nav>
          <div class="header-actions">
            <button class="search-button" type="button" aria-label="Search" data-search-toggle>⌕</button>
            <a class="header-contact" href="contact.html">${createLang("Contact", "联系")}</a>
          </div>
        </div>
        <div class="search-panel" data-search-panel>
          <div class="header-shell search-shell">
            <input type="search" data-search-input placeholder="Search products, craft, OEM..." aria-label="Search products">
            <button type="button" class="primary-mini" data-search-go>${createLang("Search", "搜索")}</button>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  const target = document.getElementById("site-footer");
  if (!target) return;
  target.innerHTML = `
    <footer class="site-footer">
      <div class="footer-cta">
        <div>
          <span>${createLang("Ready to review your menswear order?", "准备沟通你的男装订单？")}</span>
          <h2>${createLang("Send photos, samples or tech packs for a quick project review.", "发送图片、样衣或工艺单，我们先帮你判断项目。")}</h2>
        </div>
        <a class="footer-cta-button" href="https://wa.me/${contact.whatsapp}">WhatsApp</a>
      </div>
      <div class="footer-main">
        <div>
          <a class="footer-brand" href="index.html"><span class="brand-mark">XY</span><strong>${createLang("Dongguan Xiyi Apparel Co., Ltd.", "东莞市喜艺服饰有限公司")}</strong></a>
          <p>${createLang("Men's apparel OEM/ODM factory in Humen, Dongguan. Custom by image, sample and tech pack.", "东莞虎门男装OEM/ODM工厂，支持来图来样和工艺单定制。")}</p>
        </div>
        <div>
          <h3>${createLang("Products", "产品")}</h3>
          ${products.slice(0, 6).map((item) => `<a href="${productUrl(item.id)}">${createLang(item.navEn, item.navZh)}</a>`).join("")}
        </div>
        <div>
          <h3>${createLang("Manufacturer", "工厂能力")}</h3>
          <a href="production.html#scale">${createLang("Factory Scale", "工厂规模")}</a>
          <a href="production.html#flow">${createLang("Production Flow", "生产流程")}</a>
          <a href="certificates.html">${createLang("Certificates & Documents", "证书资料预留")}</a>
          <a href="quality-control.html">${createLang("Quality Control Statement", "质量控制声明")}</a>
          <a href="sample-development.html">${createLang("Sample Development", "样衣开发")}</a>
          <a href="faq.html">${createLang("FAQ", "常见问题")}</a>
          <a href="washing-services.html">${createLang("Washing & Finishing", "水洗与后整")}</a>
          <a href="fabric-sourcing.html">${createLang("Fabric & Trims", "面料辅料")}</a>
          <a href="social-responsibility.html">${createLang("Social Responsibility", "社会责任")}</a>
          <a href="craft.html">${createLang("Craft Capabilities", "工艺能力")}</a>
          <a href="support.html#rfq-checklist">${createLang("RFQ Checklist", "询价清单")}</a>
        </div>
        <div>
          <h3>${createLang("Contact", "联系方式")}</h3>
          <p><strong>Phone / WhatsApp / WeChat</strong><br>${contact.phone}</p>
          <p><strong>Email</strong><br>${contact.email}</p>
          <p><strong>${createLang("Address", "地址")}</strong><br>${createLang(contact.addressEn, contact.addressZh)}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Copyright © 2026 Dongguan Xiyi Apparel Co., Ltd.</span>
        <span>${createLang("Final MOQ, pricing, schedule and craft feasibility are confirmed by actual style.", "最终起订量、价格、周期和工艺可行性以实际款式确认为准。")}</span>
      </div>
    </footer>
  `;
}

function renderFloatingContact() {
  const wrap = document.createElement("div");
  wrap.className = "floating-contact";
  wrap.innerHTML = `
    <a href="tel:${contact.phoneRaw}"><span>☎</span>${createLang("Call", "电话")}</a>
    <a href="https://wa.me/${contact.whatsapp}"><span>•</span>WhatsApp</a>
    <a href="mailto:${contact.email}"><span>✉</span>${createLang("Email", "邮箱")}</a>
  `;
  document.body.appendChild(wrap);
}

function renderInquiryPopup() {
  if (localStorage.getItem("xiyiPopupClosed") === "yes") return;
  const popup = document.createElement("aside");
  popup.className = "inquiry-popup reveal is-visible";
  popup.setAttribute("aria-label", "Quick inquiry reminder");
  popup.innerHTML = `
    <button type="button" class="popup-close" data-popup-close aria-label="Close">×</button>
    <strong>${createLang("Fast streetwear project review", "快速评估街头服装项目")}</strong>
    <p>${createLang("Send reference photos, target quantity, fabric idea and craft notes. We first review whether the style fits our sampling and bulk production route.", "发送参考图、目标数量、面料想法和工艺要求，我们先判断是否适合打样和大货生产。")}</p>
    <a href="https://wa.me/${contact.whatsapp}">WhatsApp</a>
  `;
  document.body.appendChild(popup);
}

function renderProductCards() {
  document.querySelectorAll("[data-product-cards]").forEach((target) => {
    const mode = target.dataset.cardMode || "categories";

    if (mode === "styles") {
      target.innerHTML = catalogStyleItems().map((style) => `
        <article class="product-card catalog-style-card reveal" data-product-card data-product-id="${style.product.id}" data-product-filters="${style.filters}">
          <a class="product-image" href="${style.url}">
            ${productCardImages(style)}
          </a>
          <div class="product-body">
            <span>${createLang(style.product.navEn, style.product.navZh)}</span>
            <h3><a href="${style.url}">${createLang(style.titleEn, style.titleZh)}</a></h3>
            <p>${createLang(style.bodyEn, style.bodyZh)}</p>
          </div>
        </article>
      `).join("");
      return;
    }

    const limit = Number(target.dataset.limit || products.length);
    target.innerHTML = products.slice(0, limit).map((item) => `
      <article class="product-card reveal" data-product-card data-product-id="${item.id}" data-product-filters="${productFilters(item)}">
        <a class="product-image" href="${productUrl(item.id)}">
          <img src="${item.image}" alt="${item.titleEn}" loading="lazy">
        </a>
        <div class="product-body">
          <span>${createLang(item.navEn, item.navZh)}</span>
          <h3><a href="${productUrl(item.id)}">${createLang(item.titleEn, item.titleZh)}</a></h3>
          <p>${createLang(item.shortEn, item.shortZh)}</p>
          <div class="tag-row">
            ${item.tagsEn.slice(0, 3).map((tag, index) => `<em>${createLang(tag, item.tagsZh[index])}</em>`).join("")}
          </div>
          <a class="text-arrow" href="${productUrl(item.id)}">${createLang("View styles", "查看款式")} <span>></span></a>
        </div>
      </article>
    `).join("");
  });
}

function renderProductSidebar() {
  document.querySelectorAll("[data-product-sidebar]").forEach((target) => {
    const params = new URLSearchParams(window.location.search);
    const item = productItems.find((entry) => entry.id === params.get("item"));
    const active = params.get("type") || item?.productId || "";
    target.innerHTML = `
      <div class="sidebar-box">
        <h3>${createLang("Product Categories", "产品分类")}</h3>
        ${products.map((item) => `<a class="${active === item.id ? "is-active" : ""}" href="${productUrl(item.id)}">${createLang(item.navEn, item.navZh)}</a>`).join("")}
      </div>
      <div class="sidebar-box">
        <h3>${createLang("Order Routes", "接单方式")}</h3>
        <a href="services.html#oem-odm">OEM / ODM</a>
        <a href="services.html#cmt">CMT</a>
        <a href="services.html#fob">FOB</a>
        <a href="services.html#workwear">${createLang("Best-Fit Buyers", "适合客户")}</a>
      </div>
    `;
  });
}

function updateProductHero(eyebrowEn, eyebrowZh, titleEn, titleZh, bodyEn, bodyZh) {
  const hero = document.querySelector(".page-hero .page-shell");
  if (!hero) return;

  hero.innerHTML = `
    <span class="eyebrow">${createLang(eyebrowEn, eyebrowZh)}</span>
    <h1>${createLang(titleEn, titleZh)}</h1>
    <p>${createLang(bodyEn, bodyZh)}</p>
  `;
}

function renderUploadedProductDetail(target, item) {
  const product = products.find((entry) => entry.id === item.productId) || products[0];
  const displayTitle = madeToOrderCatalogTitle(item, product);
  document.title = `${displayTitle.titleEn} | Dongguan Xiyi Apparel`;
  updateProductHero(
    "Product Detail",
    "产品详情",
    displayTitle.titleEn,
    displayTitle.titleZh,
    "Made-to-order OEM/ODM hoodie reference. Final price, fabric and lead time are confirmed by sample, artwork and order quantity.",
    "定制 OEM/ODM 卫衣产品参考。最终价格、面料和周期按样衣、图案和订单数量确认。"
  );
  const breadcrumb = document.querySelector(".breadcrumb .page-shell");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span> / </span>
      <a href="products.html">${createLang("Products", "产品")}</a>
      <span> / </span>
      <a href="${productUrl(product.id)}">${createLang(product.navEn, product.navZh)}</a>
      <span> / </span>
      <span>${createLang(displayTitle.titleEn, displayTitle.titleZh)}</span>
    `;
  }

  target.innerHTML = `
    <div class="item-detail-hero reveal">
      <div class="item-gallery">
        <div class="item-main-photo">
          <img src="${item.image}" alt="${item.titleEn}">
        </div>
        <div class="item-thumb-grid">
          ${item.gallery.map(([en, zh, image]) => `
            <figure>
              <img src="${image}" alt="${en}" loading="lazy">
              <figcaption>${createLang(en, zh)}</figcaption>
            </figure>
          `).join("")}
        </div>
      </div>
      <div class="item-detail-copy">
        <p class="eyebrow">${createLang(product.navEn, product.navZh)}</p>
        <h1>${createLang(displayTitle.titleEn, displayTitle.titleZh)}</h1>
        <p>${createLang(item.shortEn, item.shortZh)}</p>
        <div class="tag-row large">
          ${item.tagsEn.map((tag, index) => `<em>${createLang(tag, item.tagsZh[index])}</em>`).join("")}
        </div>
        <div class="item-order-summary">
          <div><span>MOQ</span><strong>${createLang("From 200 pcs", "200件起")}</strong></div>
          <div><span>${createLang("Sample", "打样")}</span><strong>${createLang("3-7 days", "3-7天")}</strong></div>
          <div><span>${createLang("Bulk", "大货")}</span><strong>${createLang("7-20 days", "7-20天")}</strong></div>
        </div>
        <a class="primary-button" href="https://wa.me/${contact.whatsapp}">${createLang("Send inquiry", "发送询价")}</a>
      </div>
    </div>

    <section class="content-section item-section reveal">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">${createLang("Product Specifications", "产品参数")}</p>
          <h2>${createLang("Key information for sampling and quotation.", "打样和报价需要看的核心信息。")}</h2>
        </div>
        <span class="result-count">${createLang("Made to order", "按单定制")}</span>
      </div>
      <div class="spec-table item-spec-table">
        ${item.specs.map(([en, zh, valueEn, valueZh]) => `
          <div><span>${createLang(en, zh)}</span><strong>${createLang(valueEn, valueZh)}</strong></div>
        `).join("")}
      </div>
    </section>

    <section class="content-section item-section reveal">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">${createLang("Fabric, Fit & Craft", "面料、版型与工艺")}</p>
          <h2>${createLang("Development points we can review before sampling.", "打样前可以确认的开发重点。")}</h2>
        </div>
      </div>
      <div class="item-feature-grid">
        ${item.features.map(([en, zh, bodyEn, bodyZh]) => `
          <article>
            <h3>${createLang(en, zh)}</h3>
            <p>${createLang(bodyEn, bodyZh)}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="content-section detail-info-grid reveal">
      <div>
        <p class="eyebrow">${createLang("Quality Reference", "质量参考")}</p>
        <h2>${createLang("QC points for premium streetwear orders.", "高级街头卫衣订单的质检重点。")}</h2>
        <p>${createLang("The following points are references for discussion. Final standards should be confirmed by sample, size chart and written comments before bulk production.", "以下为沟通参考，最终标准建议在大货前通过样衣、尺码表和书面意见确认。")}</p>
      </div>
      <div class="spec-table">
        ${item.quality.map(([en, zh, valueEn, valueZh]) => `
          <div><span>${createLang(en, zh)}</span><strong>${createLang(valueEn, valueZh)}</strong></div>
        `).join("")}
      </div>
    </section>

    <section class="content-section product-cta reveal">
      <div>
        <h2>${createLang("Send artwork or a sample for review", "发送图案或样衣来评估")}</h2>
        <p>${createLang("We can review fabric weight, fit, artwork craft, MOQ, sampling and bulk lead time before quotation.", "报价前可先评估克重、版型、图案工艺、起订量、打样和大货周期。")}</p>
      </div>
      <a class="primary-button" href="https://wa.me/${contact.whatsapp}">WhatsApp</a>
    </section>
  `;
}

function renderUploadedProductDetailReference(target, item) {
  const product = products.find((entry) => entry.id === item.productId) || products[0];
  const displayTitle = madeToOrderCatalogTitle(item, product);
  document.title = `${displayTitle.titleEn} | Dongguan Xiyi Apparel`;
  updateProductHero(
    "Product Detail",
    "产品详情",
    displayTitle.titleEn,
    displayTitle.titleZh,
    "Made-to-order OEM/ODM style reference. Final price, fabric and lead time are confirmed by sample, artwork and order quantity.",
    "OEM/ODM 按单定制款式参考。最终价格、面料和周期按样衣、图案和订单数量确认。"
  );

  const breadcrumb = document.querySelector(".breadcrumb .page-shell");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span> / </span>
      <a href="products.html">${createLang("Products", "产品")}</a>
      <span> / </span>
      <a href="${productUrl(product.id)}">${createLang(product.navEn, product.navZh)}</a>
      <span> / </span>
      <span>${createLang(displayTitle.titleEn, displayTitle.titleZh)}</span>
    `;
  }

  const specPair = (key, fallbackEn, fallbackZh) => {
    const row = item.specs.find((entry) => entry[0] === key);
    return row ? [row[2], row[3]] : [fallbackEn, fallbackZh];
  };

  const attributeRows = [
    ["Category", "产品分类", product.navEn, product.navZh],
    ["Supply Type", "供应类型", "OEM / ODM / CMT made to order", "OEM / ODM / CMT 按单定制"],
    ["MOQ", "起订量", ...specPair("MOQ", "From 200 pcs", "200件起")],
    ["Sample Time", "打样时间", ...specPair("Sampling", "3-7 days reference", "参考 3-7 天")],
    ["Bulk Lead Time", "大货周期", ...specPair("Bulk lead time", "7-20 days, confirmed by order", "7-20 天，按订单确认")],
    ["Fabric", "面料", ...specPair("Fabric", "Heavyweight brushed fleece", "重磅抓绒卫衣布")],
    ["Composition", "成分", ...specPair("Composition", "80% cotton / 20% polyester", "80%棉 / 20%聚酯纤维")],
    ["Weight", "克重", ...specPair("Weight", "420GSM reference", "420GSM 参考")],
    ["Fit", "版型", ...specPair("Fit", "Dropped shoulder oversized fit", "落肩宽松版型")],
    ["Craft", "工艺", ...specPair("Craft", "Artwork craft confirmed by file or sample", "工艺按图稿或样衣确认")]
  ];

  target.innerHTML = `
    <article class="reference-product-detail reveal">
      <h1 class="reference-product-title">${createLang(displayTitle.titleEn, displayTitle.titleZh)}</h1>
      <div class="reference-product-grid">
        <div class="reference-gallery">
          <div class="reference-main-media">
            <img src="${item.image}" alt="${item.titleEn}">
          </div>
          <div class="reference-thumb-row">
            ${item.gallery.map(([en, zh, image]) => `
              <figure>
                <img src="${image}" alt="${en}" loading="lazy">
                <figcaption>${createLang(en, zh)}</figcaption>
              </figure>
            `).join("")}
          </div>
        </div>
        <aside class="reference-product-panel">
          <h2>${createLang("Product Details", "产品参数")}</h2>
          <p>${createLang(item.shortEn, item.shortZh)}</p>
          <div class="reference-attr-table">
            ${attributeRows.map(([en, zh, valueEn, valueZh]) => `
              <div>
                <span>${createLang(en, zh)}</span>
                <strong>${createLang(valueEn, valueZh)}</strong>
              </div>
            `).join("")}
          </div>
          <div class="tag-row large">
            ${item.tagsEn.map((tag, index) => `<em>${createLang(tag, item.tagsZh[index])}</em>`).join("")}
          </div>
          <div class="reference-actions">
            <a class="primary-button" href="https://wa.me/${contact.whatsapp}">${createLang("Contact Now", "立即询价")}</a>
            <a class="ghost-button dark" href="mailto:${contact.email}">${createLang("Email Factory", "邮件联系")}</a>
          </div>
        </aside>
      </div>
    </article>

    <section class="reference-info-section reveal">
      <div class="reference-tab-title">${createLang("Detail Information", "详情信息")}</div>
      <div class="reference-info-grid">
        <article>
          <h2>${createLang(`Made-to-order ${product.navEn.replace(/^Custom\s+/i, "").toLowerCase()} development reference`, `按单定制${product.navZh.replace(/定制$/, "")}开发参考`)}</h2>
          <p>${createLang("This style is prepared as an OEM/ODM reference for sampling and quotation. Final fabric, craft, measurements, color and lead time should be confirmed by sample, artwork files and order quantity.", "此款作为 OEM/ODM 打样和报价参考。最终面料、工艺、尺寸、颜色和交期，需要根据样衣、图稿文件和订单数量确认。")}</p>
        </article>
        <article>
          <h2>${createLang("Factory review points", "工厂评估重点")}</h2>
          <p>${createLang("We can review garment weight, fit direction, print or embroidery placement, rib quality, washing finish and packing requirements before production.", "生产前可评估克重、版型方向、印花或刺绣位置、罗纹品质、水洗后整效果和包装要求。")}</p>
        </article>
      </div>
    </section>

    <section class="reference-info-section reveal">
      <div class="reference-tab-title">${createLang("Product Images", "产品图片")}</div>
      <div class="reference-photo-grid">
        ${item.gallery.map(([en, zh, image]) => `
          <figure>
            <img src="${image}" alt="${en}" loading="lazy">
            <figcaption>${createLang(en, zh)}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>

    <section class="reference-info-section reveal">
      <div class="reference-tab-title">${createLang("Fabric, Fit & Craft", "面料、版型与工艺")}</div>
      <div class="item-feature-grid">
        ${item.features.map(([en, zh, bodyEn, bodyZh]) => `
          <article>
            <h3>${createLang(en, zh)}</h3>
            <p>${createLang(bodyEn, bodyZh)}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="reference-info-section reveal">
      <div class="reference-tab-title">${createLang("Quality Reference", "质检参考")}</div>
      <div class="spec-table item-spec-table">
        ${item.quality.map(([en, zh, valueEn, valueZh]) => `
          <div><span>${createLang(en, zh)}</span><strong>${createLang(valueEn, valueZh)}</strong></div>
        `).join("")}
      </div>
    </section>

    <section class="product-cta reveal">
      <div>
        <h2>${createLang("Send artwork, size chart or sample for factory review", "发送图稿、尺码表或样衣给工厂评估")}</h2>
        <p>${createLang("We will help check whether the product can be sampled, how to make the craft, and what information is needed for quotation.", "我们会先帮你判断是否适合打样、工艺怎么做，以及报价还需要哪些资料。")}</p>
      </div>
      <a class="primary-button" href="https://wa.me/${contact.whatsapp}">WhatsApp</a>
    </section>
  `;
}

function catalogProductCardHTML(style) {
  return `
    <article class="product-card catalog-style-card reveal" data-product-card data-product-id="${style.product.id}" data-product-filters="${style.filters}">
      <a class="product-image" href="${style.url}">
        ${productCardImages(style)}
      </a>
      <div class="product-body">
        <span>${createLang(style.product.navEn, style.product.navZh)}</span>
        <h3><a href="${style.url}">${createLang(style.titleEn, style.titleZh)}</a></h3>
        <p>${createLang(style.bodyEn, style.bodyZh)}</p>
      </div>
    </article>
  `;
}

function renderCategoryCatalogReference(target, item) {
  document.body.dataset.productMode = "category";
  document.title = `${item.titleEn} | Dongguan Xiyi Apparel`;

  const copy = catalogCategoryCopy(item.id);
  const intro = catalogCategoryIntro(item.id);
  const styles = catalogStyleItems();
  const breadcrumb = document.querySelector(".breadcrumb .page-shell");
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span> / </span>
      <a href="products.html">All</a>
      <span> / </span>
      <span>${createLang(copy.titleEn, copy.titleZh)}</span>
    `;
  }

  target.innerHTML = `
    <div class="category-catalog-shell">
      <div class="quick-search reveal" data-product-filter>
        <div class="quick-search-title">${createLang("Quick Search", "快速筛选")}</div>
        <div class="quick-search-table" data-dynamic-product-filter></div>
      </div>

      <div class="catalog-title-row reveal">
        <h1 data-catalog-title>${createLang(copy.titleEn, copy.titleZh)}</h1>
      </div>

      <section class="catalog-category-intro reveal" data-catalog-intro>
        <div class="catalog-intro-copy">
          <span class="eyebrow">${createLang("Made-to-order OEM/ODM", "OEM/ODM 按单定制")}</span>
          <h2 data-catalog-intro-title>${createLang(intro.titleEn, intro.titleZh)}</h2>
          <p data-catalog-intro-copy>${createLang(intro.bodyEn, intro.bodyZh)}</p>
          <div class="catalog-intro-points" data-catalog-intro-points>
            ${intro.points.map(([en, zh]) => `<span>${createLang(en, zh)}</span>`).join("")}
          </div>
        </div>
      </section>

      <div class="catalog-list-heading reveal">
        <strong data-catalog-heading>${createLang(copy.headingEn, copy.headingZh)}</strong>
      </div>

      <div class="catalog-result-bar reveal">
        <span data-product-result-count>0 results</span>
        <div class="catalog-view-controls" aria-label="Display mode">
          <span>View</span>
          <button type="button" aria-label="List view" data-catalog-view="list">☰</button>
          <button type="button" aria-label="Grid view" class="is-active" data-catalog-view="grid">▦</button>
        </div>
      </div>

      <div class="product-grid catalog-products" data-product-cards data-card-mode="category-reference">
        ${styles.map((style) => catalogProductCardHTML(style)).join("")}
      </div>
    </div>
  `;

  renderProductFilters(item.id, { category: item.id });
  updateCatalogCopy(item.id);
  updateProductCatalog();
}

function renderProductDetail() {
  const target = document.querySelector("[data-product-detail]");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const uploadedItem = productItems.find((entry) => entry.id === params.get("item"));
  if (uploadedItem) {
    renderUploadedProductDetailReference(target, uploadedItem);
    return;
  }

  const id = params.get("type") || products[0].id;
  const item = products.find((product) => product.id === id) || products[0];
  renderCategoryCatalogReference(target, item);
}

function renderCraftCards() {
  document.querySelectorAll("[data-craft-cards]").forEach((target) => {
    target.innerHTML = crafts.map(([id, en, zh, bodyEn, bodyZh, image]) => `
      <article class="craft-card reveal" id="${id}">
        <img src="${image}" alt="${en}" loading="lazy">
        <div>
          <span>${createLang(en, zh)}</span>
          <h3>${createLang(en, zh)}</h3>
          <p>${createLang(bodyEn, bodyZh)}</p>
        </div>
      </article>
    `).join("");
  });
}

function renderCases() {
  document.querySelectorAll("[data-case-cards]").forEach((target) => {
    const homepageCases = [
      ["Canada 10,000 pcs fleece hoodie order", "加拿大 10000 件抓绒卫衣订单", "assets/products/hoodies/washed-oversized-boxy-hoodie/07-color-lineup.webp", "A bulk fleece hoodie program showing our ability to support repeatable streetwear production after sample approval.", "抓绒卫衣大货项目，体现样衣确认后承接街头服饰批量生产和返单的能力。"],
      ["USA 1,800 pcs custom varsity jacket order", "美国 1800 件定制棒球服订单", "assets/hero-carousel/baseball-production.png", "Custom varsity jacket production with patch embroidery, rib trim, snap buttons, lining and bulk workmanship control.", "定制棒球服生产，重点确认贴布绣、罗纹、四合扣、里布和大货做工稳定性。"],
      ["Heavyweight T-shirt development program", "重磅 T 恤开发项目", "assets/products/tshirts/series-washed-heavyweight-tshirt/10-color-lineup.webp", "Heavy cotton jersey, garment wash, screen print and color program development for streetwear brand drops.", "围绕重磅棉汗布、水洗、丝网印和多色系列，适合街头品牌上新开发。"],
      ["Photo-to-sample streetwear development", "来图打样街头男装开发", "assets/hero-carousel/sample-development.png", "Many projects begin with only photos or original samples. We review fabric, fit, craft and cost direction before sampling.", "很多项目从图片或原样开始，我们先评估面料、版型、工艺和成本方向，再进入打样。"]
    ];
    target.innerHTML = homepageCases.map(([en, zh, image, bodyEn, bodyZh]) => `
      <article class="case-card reveal">
        <img src="${image}" alt="${en}" loading="lazy">
        <div>
          <span>${createLang("Order Experience", "订单经验")}</span>
          <h3>${createLang(en, zh)}</h3>
          <p>${createLang(bodyEn, bodyZh)}</p>
        </div>
      </article>
    `).join("");
  });
}

function renderArticles() {
  document.querySelectorAll("[data-guide-cards]").forEach((target) => {
    const buyerGuides = [
      ["What to send before asking for a streetwear quote", "街头服装询价前需要准备什么", "Send reference photos, target quantity, fabric idea, artwork, craft requirements, size range and delivery target.", "建议提供参考图、目标数量、面料想法、图案文件、工艺要求、尺码段和目标交期。"],
      ["How we turn a photo into a production-ready sample", "我们如何把一张图转成可生产样衣", "We review style structure, fabric, fit, craft placement and cost direction, then create a sample route for confirmation.", "我们会评估款式结构、面料、版型、工艺位置和成本方向，再整理打样路线给客户确认。"],
      ["How to confirm craft details before bulk production", "大货前如何确认工艺细节", "Artwork size, color, placement, sample approval and written comments help reduce bulk production risk.", "图案尺寸、颜色、位置、样衣确认和文字修改意见，都能帮助降低大货风险。"]
    ];
    target.innerHTML = buyerGuides.map(([en, zh, bodyEn, bodyZh]) => `
      <article class="guide-card reveal">
        <span>${createLang("Buyer Guide", "买家指南")}</span>
        <h3>${createLang(en, zh)}</h3>
        <p>${createLang(bodyEn, bodyZh)}</p>
        <a class="text-arrow" href="support.html#guides">${createLang("Read guide", "查看指南")} <span>></span></a>
      </article>
    `).join("");
  });
}

function applyLanguage(lang) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  localStorage.setItem("xiyiLanguage", lang);
  renderProductFilters();
  updateProductCatalog();
}

function activeProductFilters() {
  return [...document.querySelectorAll("[data-filter-value].is-active")]
    .map((button) => button.dataset.filterValue)
    .filter((value) => value !== "all");
}

function updateProductCatalog() {
  const cards = [...document.querySelectorAll("[data-product-card]")];
  if (!cards.length) return;

  const filters = activeProductFilters();
  updateCatalogCopy(selectedCatalogCategory());
  let visibleCount = 0;

  cards.forEach((card) => {
    const values = (card.dataset.productFilters || "").split(/\s+/);
    const visible = filters.every((filter) => values.includes(filter));
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  document.querySelectorAll("[data-product-result-count]").forEach((target) => {
    target.textContent = currentLang() === "zh" ? `${visibleCount} 个结果` : `${visibleCount} results`;
  });
}

function setCatalogView(view) {
  document.querySelectorAll("[data-product-cards]").forEach((grid) => {
    grid.classList.toggle("is-list-view", view === "list");
  });
  document.querySelectorAll("[data-catalog-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.catalogView === view);
  });
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const menuButton = event.target.closest("[data-menu-toggle]");
    if (menuButton) {
      const nav = document.querySelector("[data-main-nav]");
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    }

    if (event.target.closest("[data-lang-toggle]")) {
      applyLanguage(currentLang() === "en" ? "zh" : "en");
    }

    if (event.target.closest("[data-search-toggle]")) {
      document.querySelector("[data-search-panel]")?.classList.toggle("is-open");
      document.querySelector("[data-search-input]")?.focus();
    }

    if (event.target.closest("[data-search-go]")) {
      goSearch();
    }

    if (event.target.closest("[data-popup-close]")) {
      localStorage.setItem("xiyiPopupClosed", "yes");
      event.target.closest(".inquiry-popup")?.remove();
    }

    const filterButton = event.target.closest("[data-filter-value]");
    if (filterButton) {
      const group = filterButton.dataset.filterGroup;
      const value = filterButton.dataset.filterValue;
      const sameGroupButtons = document.querySelectorAll(`[data-filter-group="${group}"]`);
      const wasActive = filterButton.classList.contains("is-active");

      if (group === "category") {
        const nextCategory = wasActive && value !== "all" ? "all" : value;
        const { sales } = activeProductFiltersByGroup();
        renderProductFilters(nextCategory, { sales });
        updateProductCatalog();
        return;
      }

      sameGroupButtons.forEach((button) => button.classList.remove("is-active"));
      filterButton.classList.toggle("is-active", !wasActive);
      updateProductCatalog();
    }

    const viewButton = event.target.closest("[data-catalog-view]");
    if (viewButton) {
      setCatalogView(viewButton.dataset.catalogView);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.matches("[data-search-input]")) {
      goSearch();
    }
  });
}

function goSearch() {
  const input = document.querySelector("[data-search-input]");
  const keyword = input?.value.trim();
  if (keyword) window.location.href = `products.html?keyword=${encodeURIComponent(keyword)}`;
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((item) => item.classList.add("is-visible"));
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((item) => observer.observe(item));
}

function initLanguage() {
  applyLanguage(localStorage.getItem("xiyiLanguage") || "en");
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderHeader();
  renderFooter();
  renderFloatingContact();
  renderInquiryPopup();
  renderProductCards();
  updateProductCatalog();
  renderProductSidebar();
  renderProductDetail();
  renderCraftCards();
  renderCases();
  renderArticles();
  bindEvents();
  setupReveal();
});
