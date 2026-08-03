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
    image: "review-assets/pdf-images/menswear-p09-50-1234x1234.jpg",
    shortEn: "Pullover hoodies, zip hoodies, crewnecks, sets, rib details, drawcords, printing and embroidery.",
    shortZh: "套头卫衣、拉链卫衣、圆领卫衣、套装、罗纹、抽绳、印花和刺绣。",
    detailsEn: "Suitable for brand drops, streetwear collections, team programs and repeatable casualwear orders.",
    detailsZh: "适合品牌上新、街头休闲系列、团队项目和可持续返单的休闲男装订单。",
    tagsEn: ["Fleece", "French terry", "Embroidery", "Puff print"],
    tagsZh: ["抓绒", "毛圈", "刺绣", "发泡印花"],
    styles: [
      ["Zip hoodie with clean seams", "拉链连帽卫衣", "review-assets/pdf-images/menswear-p09-50-1234x1234.jpg"],
      ["Pullover hoodie shorts set", "套头卫衣短裤套装", "review-assets/pdf-images/menswear-p14-105-446x1180.jpg"],
      ["Zip hoodie sweat set", "拉链卫衣卫裤套装", "review-assets/pdf-images/menswear-p14-106-402x1148.jpg"],
      ["Half-zip graphic sweatshirt", "半拉链图案卫衣", "review-assets/pdf-images/menswear-p14-103-600x796.jpg"],
      ["Solid fleece hoodie set", "纯色抓绒卫衣套装", "review-assets/pdf-images/menswear-p14-107-745x742.jpg"],
      ["Washed hoodie set", "水洗卫衣套装", "review-assets/pdf-images/menswear-p15-118-744x743.jpg"]
    ]
  },
  {
    id: "tshirts",
    navEn: "Custom T-Shirts",
    navZh: "T恤定制",
    titleEn: "Custom T-Shirts & Polo Shirts",
    titleZh: "T恤 / Polo 衫定制",
    image: "review-assets/pdf-images/menswear-p03-10-1023x769.jpg",
    shortEn: "Basic tees, graphic tees, polo shirts, color programs, labels and logo craft placement.",
    shortZh: "基础T恤、图案T恤、Polo衫、颜色系列、领标和Logo工艺位置。",
    detailsEn: "A practical category for test orders, company uniforms, private-label programs and repeat production.",
    detailsZh: "适合测款单、企业工装、品牌贴牌和稳定返单的基础品类。",
    tagsEn: ["Cotton jersey", "Polo", "Screen print", "Private label"],
    tagsZh: ["针织棉", "Polo", "丝网印", "贴牌"],
    styles: [
      ["Polo color series", "Polo 多色系列", "review-assets/pdf-images/menswear-p03-10-1023x769.jpg"],
      ["Raglan basic T-shirt", "插肩基础T恤", "review-assets/pdf-images/menswear-p08-33-838x836.jpg"],
      ["Tie-dye crewneck T-shirt", "扎染圆领T恤", "review-assets/pdf-images/menswear-p08-34-1100x1100.jpg"],
      ["Print placement T-shirt", "定位印花T恤", "review-assets/pdf-images/menswear-p12-77-683x904.jpg"],
      ["Long-sleeve graphic tee", "长袖图案T恤", "review-assets/pdf-images/menswear-p08-35-369x480.jpg"],
      ["All-over print T-shirt", "满版印花T恤", "review-assets/pdf-images/menswear-p08-36-754x878.jpg"]
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
  }
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
    image: "assets/products/tshirts/vintage-garage-car-heavyweight-tshirt/01-main-front.webp",
    shortEn: "280GSM heavyweight cotton jersey T-shirt with oversized drop-shoulder fit, vintage garage car artwork, garment wash and distressed screen print direction.",
    shortZh: "280GSM 重磅棉单面汗布T恤，落肩宽松版型、复古车库汽车图案、成衣水洗和做旧丝网印花方向。",
    filters: ["tshirts", "oem", "custom", "test", "repeat", "cotton-jersey", "heavyweight-jersey", "oversized", "boxy-fit", "screen-print", "garment-wash", "embroidery", "rib-trim"],
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
  }
];

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
        ["sublimation", "Sublimation", "升华印花"],
        ["woven-label", "Neck Label / Hangtag", "领标 / 吊牌"]
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
        ["crew-neck", "Crew Neck", "圆领"],
        ["raglan-sleeve", "Raglan Sleeve", "插肩袖"],
        ["set-in-sleeve", "Set-in Sleeve", "正肩袖"],
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
    ["zip-up", "regular-fit", "heavyweight-fleece", "rib-trim", "embroidery"],
    ["regular-fit", "french-terry", "screen-print", "heat-transfer"],
    ["oversized", "set-program", "cotton-fleece", "puff-print", "embroidery"],
    ["boxy-fit", "cotton-fleece", "screen-print", "puff-print"],
    ["set-program", "french-terry", "rib-trim", "custom"],
    ["cotton-fleece", "screen-print", "puff-print", "heat-transfer"]
  ],
  tshirts: [
    ["polo-fit", "pique-knit", "embroidery", "woven-label"],
    ["oversized", "cotton-jersey", "screen-print", "digital-print"],
    ["regular-fit", "cotton-jersey", "woven-label"],
    ["regular-fit", "cotton-jersey", "screen-print", "heat-transfer"],
    ["regular-fit", "cotton-jersey", "pique-knit", "custom"],
    ["regular-fit", "stretch-cotton", "woven-label"]
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
    ["varsity-fit", "rib-knit", "snap-button"]
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
  return `product.html?type=${encodeURIComponent(id)}`;
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

function catalogStyleItems() {
  return productItems.map((item) => {
    const product = products.find((entry) => entry.id === item.productId) || products[0];
    return {
      id: item.id,
      product,
      titleEn: item.titleEn,
      titleZh: item.titleZh,
      image: item.image,
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
  return selected || "all";
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
        ["Corporate Wear", "企业工装", "services.html#workwear"],
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
    <strong>${createLang("Quick project review", "快速判断项目")}</strong>
    <p>${createLang("Send style photos, target quantity and craft notes. We can first review whether the style fits our production route.", "发送款式图片、目标数量和工艺要求，我们先判断是否适合生产。")}</p>
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
            <img src="${style.image}" alt="${style.titleEn}" loading="lazy">
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
        <a href="services.html#workwear">${createLang("Corporate Wear", "企业工装")}</a>
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
  document.title = `${item.titleEn} | Dongguan Xiyi Apparel`;
  updateProductHero(
    "Product Detail",
    "产品详情",
    item.titleEn,
    item.titleZh,
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
      <span>${createLang(item.titleEn, item.titleZh)}</span>
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
        <h1>${createLang(item.titleEn, item.titleZh)}</h1>
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
  document.title = `${item.titleEn} | Dongguan Xiyi Apparel`;
  updateProductHero(
    "Product Detail",
    "产品详情",
    item.titleEn,
    item.titleZh,
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
      <span>${createLang(item.titleEn, item.titleZh)}</span>
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
      <h1 class="reference-product-title">${createLang(item.titleEn, item.titleZh)}</h1>
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
          <h2>${createLang("Made-to-order hoodie development reference", "按单定制卫衣开发参考")}</h2>
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
  document.title = `${item.titleEn} | Dongguan Xiyi Apparel`;

  target.innerHTML = `
    <div class="detail-hero reveal">
      <div class="detail-copy">
        <p class="eyebrow">${createLang("Product Category", "产品分类")}</p>
        <h1>${createLang(item.titleEn, item.titleZh)}</h1>
        <p>${createLang(item.detailsEn, item.detailsZh)}</p>
        <div class="tag-row large">
          ${item.tagsEn.map((tag, index) => `<em>${createLang(tag, item.tagsZh[index])}</em>`).join("")}
        </div>
      </div>
      <div class="detail-main-image"><img src="${item.image}" alt="${item.titleEn}"></div>
    </div>
    <section class="content-section reveal">
      <div class="section-title-row">
        <div>
          <p class="eyebrow">${createLang("Style Gallery", "款式展示")}</p>
          <h2>${createLang("Multiple style slots are reserved for this category.", "此品类已预留多个款式展示位。")}</h2>
        </div>
        <span class="result-count">${item.styles.length} ${createLang("reference styles", "个参考款式")}</span>
      </div>
      <div class="style-grid">
        ${item.styles.map(([en, zh, image]) => `
          <article class="style-card">
            <img src="${image}" alt="${en}" loading="lazy">
            <h3>${createLang(en, zh)}</h3>
            <p>${createLang("Can be adjusted by sample, measurement, fabric, craft and target quantity.", "可根据样衣、尺寸、面料、工艺和目标数量调整。")}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="content-section detail-info-grid reveal">
      <div>
        <p class="eyebrow">${createLang("Production Notes", "生产确认点")}</p>
        <h2>${createLang("What we confirm before quotation and sampling.", "报价和打样前需要确认什么。")}</h2>
        <p>${createLang("Final feasibility, MOQ, pricing and lead time depend on fabric, trims, craft complexity, size ratio, packing and production schedule.", "最终可行性、起订量、价格和交期取决于面料、辅料、工艺复杂度、尺码配比、包装和生产排期。")}</p>
      </div>
      <div class="spec-table">
        <div><span>${createLang("Order type", "订单类型")}</span><strong>OEM / ODM / CMT / FOB</strong></div>
        <div><span>${createLang("Suitable quantity", "适合数量")}</span><strong>${createLang("200-300 pcs test order, regular bulk or repeat runs", "二三百件测款、常规批量或爆款返单")}</strong></div>
        <div><span>${createLang("Required files", "所需资料")}</span><strong>${createLang("Photo, sample, tech pack, artwork, size chart", "图片、样衣、工艺单、图案文件、尺码表")}</strong></div>
        <div><span>${createLang("Quality focus", "质量重点")}</span><strong>${createLang("Measurements, workmanship, craft placement, packing", "尺寸、做工、工艺位置、包装")}</strong></div>
      </div>
    </section>
    <section class="content-section product-cta reveal">
      <div>
        <h2>${createLang("Send this category for review", "把这个品类发来评估")}</h2>
        <p>${createLang("Share your reference images or sample notes. We will review fabric, craft, order quantity and production route first.", "发送参考图或样衣要求，我们先评估面料、工艺、数量和生产路径。")}</p>
      </div>
      <a class="primary-button" href="https://wa.me/${contact.whatsapp}">WhatsApp</a>
    </section>
  `;
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
    target.innerHTML = cases.map(([en, zh, image, bodyEn, bodyZh]) => `
      <article class="case-card reveal">
        <img src="${image}" alt="${en}" loading="lazy">
        <div>
          <span>${createLang("Case Slot", "案例预留")}</span>
          <h3>${createLang(en, zh)}</h3>
          <p>${createLang(bodyEn, bodyZh)}</p>
        </div>
      </article>
    `).join("");
  });
}

function renderArticles() {
  document.querySelectorAll("[data-guide-cards]").forEach((target) => {
    target.innerHTML = articles.map(([en, zh, bodyEn, bodyZh]) => `
      <article class="guide-card reveal">
        <span>${createLang("Guide", "定制科普")}</span>
        <h3>${createLang(en, zh)}</h3>
        <p>${createLang(bodyEn, bodyZh)}</p>
        <a class="text-arrow" href="support.html#guides">${createLang("Read guide", "查看科普")} <span>></span></a>
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
  if (!("IntersectionObserver" in window)) {
    elements.forEach((item) => item.classList.add("is-visible"));
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
