/* ===================================================================
   PLANT STORE JAVASCRIPT - B.L VERDANTIX
   Complete JavaScript with 110+ Products Database
   =================================================================== */

// ===== PLANT DATABASE (110+ Products) =====
const plantsDatabase = [
    // XL-Plants (1-10)
    {id: 1, name: "Monstera Deliciosa", category: "XL-Plants", price: 1999, originalPrice: 2299, image: "https://img.sanishtech.com/u/c6334851570a738e487380a6abbb49cc.jpeg", description: "Large tropical plant with unique split leaves"},
    {id: 2, name: "Sansevieria Laurentii", category: "XL-Plants", price: 1899, originalPrice: 2199, image: "https://img.sanishtech.com/u/9c9d38474e4b33188015c10b27f73e8e.jpeg", description: "Air-purifying snake plant with yellow edges"},
    {id: 3, name: "Peace Lily Large", category: "XL-Plants", price: 1349, originalPrice: 1599, image: "https://img.sanishtech.com/u/c320d893358f27aa0fa79c01175991cf.jpeg", description: "Elegant flowering plant that thrives in low light"},
    {id: 4, name: "ZZ-Plant", category: "XL-Plants", price: 2599, originalPrice: 3049, image: "https://img.sanishtech.com/u/ac54d1239def5f1ad5c9421e0feb725b.jpeg", description: "Low-maintenance plant with glossy leaves"},
    {id: 5, name: "Areca Palm", category: "XL-Plants", price: 1699, originalPrice: 1999, image: "https://img.sanishtech.com/u/9390b5163c834502cf42da470b7a0169.jpeg", description: "Tropical palm that purifies indoor air"},
    {id: 6, name: "Aglaonema Strips", category: "XL-Plants", price: 2399, originalPrice: 2799, image: "https://img.sanishtech.com/u/fca01535a450e17dd73114d144376b9b.jpeg", description: "Colorful variegated foliage plant"},
    {id: 7, name: "Aglaonema Dove", category: "XL-Plants", price: 2399, originalPrice: 2599, image: "https://img.sanishtech.com/u/0f00ec0b292e49117da4592087d29dbf.jpeg", description: "Beautiful white and green leaves"},
    {id: 8, name: "Bird of Paradise Orange", category: "XL-Plants", price: 2999, originalPrice: 3299, image: "https://img.sanishtech.com/u/94f1c90eb3690c5aa60653a0748e994c.jpeg", description: "Tropical plant with vibrant orange flowers"},
    {id: 9, name: "Thuja Plant", category: "XL-Plants", price: 1899, originalPrice: 2199, image: "https://img.sanishtech.com/u/f7aa6bc51285e80d52a240e91796f81e.jpeg", description: "Fragrant evergreen shrub"},
    {id: 10, name: "China Doll Plant", category: "XL-Plants", price: 2349, originalPrice: 2799, image: "https://img.sanishtech.com/u/588b0b7bf786aad2494abccec1712b09.jpeg", description: "Compact plant with glossy leaves"},

    // Flowering Plants (11-20)
    {id: 11, name: "Peace Lily Small", category: "flowering", price: 799, originalPrice: 999, image: "https://img.sanishtech.com/u/dfcad373c0c09e8994aeb365e0b80792.jpeg", description: "Elegant white flowering plant"},
    {id: 12, name: "Anthurium Livium", category: "flowering", price: 1099, originalPrice: 1299, image: "https://img.sanishtech.com/u/194d211403f724a10fe203b5cb208e30.jpeg", description: "Tropical plant with glossy leaves"},
    {id: 13, name: "Anthurium Red", category: "flowering", price: 499, originalPrice: 799, image: "https://img.sanishtech.com/u/5ef2fe31a7d37b6996996b555611891a.jpeg", description: "Vibrant red heart-shaped flowers"},
    {id: 14, name: "Bird of Paradise", category: "flowering", price: 499, originalPrice: 799, image: "https://img.sanishtech.com/u/f69f2be3f99e76667b1169bca7cf9ef9.jpeg", description: "Exotic tropical flowering plant"},
    {id: 15, name: "Aglaonema Snow White", category: "flowering", price: 1099, originalPrice: 1499, image: "https://img.sanishtech.com/u/56e65a2cddce8ba47aff9ec9a03e123f.jpeg", description: "Air-purifying variegated plant"},
    {id: 16, name: "Poinsettia Pink", category: "flowering", price: 1399, originalPrice: 1599, image: "https://img.sanishtech.com/u/5a8097e4b459fb1d1c1dce80fd4f5b9c.jpeg", description: "Festive pink flowering plant"},
    {id: 17, name: "Christmas Cactus", category: "flowering", price: 299, originalPrice: 349, image: "https://img.sanishtech.com/u/a72bb2ba93dc09a0e642f11da79923e7.jpeg", description: "Colorful winter blooming cactus"},
    {id: 18, name: "Kalanchoe Yellow", category: "flowering", price: 449, originalPrice: 499, image: "https://img.sanishtech.com/u/27e24fd7684f0c15db722e58bd965095.jpeg", description: "Bright yellow flowering succulent"},
    {id: 19, name: "Aechmea Fasciata", category: "flowering", price: 1099, originalPrice: 1299, image: "https://img.sanishtech.com/u/5fa38fc6680ff1538e0af626ca8e3ad4.jpeg", description: "Tropical pink flowering bromeliad"},
    {id: 20, name: "Orchid Purple", category: "flowering", price: 899, originalPrice: 1099, image: "https://images.unsplash.com/photo-1519785129430-b2e8b5d27d6d?w=400", description: "Exotic purple orchid flowers"},

    // Indoor Plants (21-30)
    {id: 21, name: "Money Plant", category: "indoor", price: 199, originalPrice: 249, image: "https://img.sanishtech.com/u/a436f55017b043d7d43bf2b6b099a057.jpeg", description: "Lucky air purifying plant"},
    {id: 22, name: "Snake Plant", category: "indoor", price: 249, originalPrice: 299, image: "https://img.sanishtech.com/u/4d56d5c543a0d00a0c8948fe663e9a2b.jpeg", description: "Low maintenance oxygen producer"},
    {id: 23, name: "Peace Lily Indoor", category: "indoor", price: 329, originalPrice: 399, image: "https://img.sanishtech.com/u/31c619df2262bb6fabb7889441d966a3.jpeg", description: "Beautiful air purifier"},
    {id: 24, name: "Thuja Indoor", category: "indoor", price: 799, originalPrice: 999, image: "https://img.sanishtech.com/u/66aa0f7c6a4ab71604f8fdbc71fcd2f6.jpeg", description: "Compact indoor shrub"},
    {id: 25, name: "Sansevieria Golden", category: "indoor", price: 399, originalPrice: 499, image: "https://img.sanishtech.com/u/ab497827cfe8fbc7b3509ac9fb4b6365.jpeg", description: "Gold-edged snake plant"},
    {id: 26, name: "Areca Palm Indoor", category: "indoor", price: 599, originalPrice: 799, image: "https://img.sanishtech.com/u/2e5f1adffef864c7a19c9f6570b0d078.jpeg", description: "Elegant indoor palm"},
    {id: 27, name: "ZZ Plant Small", category: "indoor", price: 599, originalPrice: 799, image: "https://img.sanishtech.com/u/7eae24a6a329d663091de8aa8216adff.jpeg", description: "Drought tolerant beauty"},
    {id: 28, name: "Lucky Bamboo", category: "indoor", price: 299, originalPrice: 399, image: "https://img.sanishtech.com/u/77ad443eda459efd83c2380d77ea9f3f.jpeg", description: "Feng shui lucky plant"},
    {id: 29, name: "Aglaonema Red", category: "indoor", price: 699, originalPrice: 899, image: "https://img.sanishtech.com/u/e57bba4bf4b90f4022cb6156d79c44e8.jpeg", description: "Red Chinese evergreen"},
    {id: 30, name: "Philodendron", category: "indoor", price: 449, originalPrice: 599, image: "https://img.sanishtech.com/u/40318263a739dece3d2e2dd6ede3e693.jpeg", description: "Heart leaf climbing plant"},

    // Combo Pack (31-40)
    {id: 31, name: "Hibiscus Red", category: "Combo Pack", price: 249, originalPrice: 299, image: "https://img.sanishtech.com/u/5ef2fe31a7d37b6996996b555611891a.jpeg", description: "Red flowering hibiscus"},
    {id: 32, name: "Jasmine White", category: "Combo Pack", price: 279, originalPrice: 329, image: "https://img.sanishtech.com/u/f69f2be3f99e76667b1169bca7cf9ef9.jpeg", description: "Fragrant white jasmine"},
    {id: 33, name: "Bougainvillea", category: "Combo Pack", price: 329, originalPrice: 379, image: "https://images.unsplash.com/photo-1597868165956-03a6827955b1?w=400", description: "Vibrant climbing plant"},
    {id: 34, name: "Rose Plant", category: "Combo Pack", price: 299, originalPrice: 349, image: "https://img.sanishtech.com/u/4d56d5c543a0d00a0c8948fe663e9a2b.jpeg", description: "Classic garden rose"},
    {id: 35, name: "Marigold", category: "Combo Pack", price: 129, originalPrice: 169, image: "https://img.sanishtech.com/u/27e24fd7684f0c15db722e58bd965095.jpeg", description: "Bright orange flowers"},
    {id: 36, name: "Croton", category: "Combo Pack", price: 199, originalPrice: 249, image: "https://img.sanishtech.com/u/5fa38fc6680ff1538e0af626ca8e3ad4.jpeg", description: "Colorful foliage plant"},
    {id: 37, name: "Adenium Desert Rose", category: "Combo Pack", price: 449, originalPrice: 499, image: "https://img.sanishtech.com/u/a72bb2ba93dc09a0e642f11da79923e7.jpeg", description: "Succulent with beautiful flowers"},
    {id: 38, name: "Ixora", category: "Combo Pack", price: 219, originalPrice: 269, image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400", description: "Cluster flowering shrub"},
    {id: 39, name: "Bamboo Outdoor", category: "Combo Pack", price: 349, originalPrice: 399, image: "https://img.sanishtech.com/u/2e5f1adffef864c7a19c9f6570b0d078.jpeg", description: "Lucky bamboo outdoor variety"},
    {id: 40, name: "Ficus Tree", category: "Combo Pack", price: 399, originalPrice: 449, image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400", description: "Large foliage tree"},

    // Succulents (41-50)
    {id: 41, name: "Jade Plant", category: "succulents", price: 159, originalPrice: 199, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400", description: "Lucky money tree succulent"},
    {id: 42, name: "Echeveria", category: "succulents", price: 139, originalPrice: 179, image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400", description: "Rosette-shaped succulent"},
    {id: 43, name: "Haworthia", category: "succulents", price: 169, originalPrice: 209, image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=400", description: "Zebra striped succulent"},
    {id: 44, name: "Sedum", category: "succulents", price: 129, originalPrice: 169, image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400", description: "Ground cover succulent"},
    {id: 45, name: "Crassula", category: "succulents", price: 149, originalPrice: 189, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400", description: "Compact jade variety"},
    {id: 46, name: "Kalanchoe Pink", category: "succulents", price: 179, originalPrice: 219, image: "https://images.unsplash.com/photo-1542627088-4f3a6c793ea0?w=400", description: "Pink flowering succulent"},
    {id: 47, name: "String of Pearls", category: "succulents", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1524836500-4013e4f8a5d0?w=400", description: "Trailing bead plant"},
    {id: 48, name: "Lithops", category: "succulents", price: 219, originalPrice: 269, image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400", description: "Living stones succulent"},
    {id: 49, name: "Burro's Tail", category: "succulents", price: 189, originalPrice: 229, image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400", description: "Cascading succulent"},
    {id: 50, name: "Hens and Chicks", category: "succulents", price: 159, originalPrice: 199, image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=400", description: "Sempervivum rosettes"},

    // Seeds (51-60)
    {id: 51, name: "Tomato Seeds", category: "seeds", price: 49, originalPrice: 79, image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400", description: "Hybrid tomato variety"},
    {id: 52, name: "Chilli Seeds", category: "seeds", price: 59, originalPrice: 89, image: "https://images.unsplash.com/photo-1584093465478-d47eb2f47e5d?w=400", description: "Hot pepper seeds"},
    {id: 53, name: "Spinach Seeds", category: "seeds", price: 39, originalPrice: 69, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400", description: "Green leafy vegetable"},
    {id: 54, name: "Cucumber Seeds", category: "seeds", price: 49, originalPrice: 79, image: "https://images.unsplash.com/photo-1589621316382-008455b857cd?w=400", description: "Crisp salad cucumber"},
    {id: 55, name: "Radish Seeds", category: "seeds", price: 39, originalPrice: 69, image: "https://images.unsplash.com/photo-1604687943502-f1e9b0a7a3b1?w=400", description: "Fast growing root"},
    {id: 56, name: "Carrot Seeds", category: "seeds", price: 59, originalPrice: 89, image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400", description: "Orange root vegetable"},
    {id: 57, name: "Brinjal Seeds", category: "seeds", price: 49, originalPrice: 79, image: "https://images.unsplash.com/photo-1587411768418-f289fcb7f1dc?w=400", description: "Eggplant variety"},
    {id: 58, name: "Lettuce Seeds", category: "seeds", price: 69, originalPrice: 99, image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400", description: "Crispy salad greens"},
    {id: 59, name: "Beetroot Seeds", category: "seeds", price: 59, originalPrice: 89, image: "https://images.unsplash.com/photo-1581321368988-54c6db9ac271?w=400", description: "Red root vegetable"},
    {id: 60, name: "Pumpkin Seeds", category: "seeds", price: 79, originalPrice: 109, image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400", description: "Large gourd seeds"},

    // Medicinal Plants (61-70)
    {id: 61, name: "Aloe Vera", category: "medicinal", price: 179, originalPrice: 229, image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400", description: "Healing medicinal plant"},
    {id: 62, name: "Tulsi Holy Basil", category: "medicinal", price: 149, originalPrice: 199, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400", description: "Sacred medicinal herb"},
    {id: 63, name: "Neem Plant", category: "medicinal", price: 249, originalPrice: 299, image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400", description: "Powerful medicinal tree"},
    {id: 64, name: "Ashwagandha", category: "medicinal", price: 329, originalPrice: 379, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400", description: "Adaptogenic herb"},
    {id: 65, name: "Brahmi", category: "medicinal", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400", description: "Memory enhancing herb"},
    {id: 66, name: "Mint Plant", category: "medicinal", price: 99, originalPrice: 129, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400", description: "Fresh aromatic mint"},
    {id: 67, name: "Lemongrass", category: "medicinal", price: 129, originalPrice: 169, image: "https://images.unsplash.com/photo-1592324815007-c53e8b8e3bb5?w=400", description: "Citrus medicinal grass"},
    {id: 68, name: "Stevia", category: "medicinal", price: 189, originalPrice: 239, image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400", description: "Natural sugar substitute"},
    {id: 69, name: "Giloy", category: "medicinal", price: 279, originalPrice: 329, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400", description: "Immunity booster plant"},
    {id: 70, name: "Moringa", category: "medicinal", price: 299, originalPrice: 349, image: "https://images.unsplash.com/photo-1585320955476-5b47bb42b6e5?w=400", description: "Drumstick tree"},

    // Herbal Plants (71-80)
    {id: 71, name: "Basil", category: "herbal", price: 89, originalPrice: 119, image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400", description: "Sweet basil herb"},
    {id: 72, name: "Coriander", category: "herbal", price: 79, originalPrice: 109, image: "https://images.unsplash.com/photo-1592324815007-c53e8b8e3bb5?w=400", description: "Fresh coriander leaves"},
    {id: 73, name: "Parsley", category: "herbal", price: 99, originalPrice: 129, image: "https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=400", description: "Flat leaf parsley"},
    {id: 74, name: "Thyme", category: "herbal", price: 129, originalPrice: 159, image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400", description: "Aromatic cooking herb"},
    {id: 75, name: "Oregano", category: "herbal", price: 119, originalPrice: 149, image: "https://images.unsplash.com/photo-1593113646137-86c27ffc0df4?w=400", description: "Italian oregano"},
    {id: 76, name: "Rosemary", category: "herbal", price: 159, originalPrice: 199, image: "https://images.unsplash.com/photo-1629740067881-d36e799c6e66?w=400", description: "Woody aromatic herb"},
    {id: 77, name: "Sage", category: "herbal", price: 139, originalPrice: 179, image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=400", description: "Medicinal sage plant"},
    {id: 78, name: "Lavender", category: "herbal", price: 249, originalPrice: 299, image: "https://images.unsplash.com/photo-1583160373321-42d5c87fc06c?w=400", description: "Fragrant purple flowers"},
    {id: 79, name: "Chamomile", category: "herbal", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1601098577462-47dc7c16a219?w=400", description: "Calming tea herb"},
    {id: 80, name: "Lemon Balm", category: "herbal", price: 169, originalPrice: 209, image: "https://images.unsplash.com/photo-1593113646137-86c27ffc0df4?w=400", description: "Citrus scented herb"},

    // Garden Decor & Outdoor (81-90)
    {id: 81, name: "Monstera Small", category: "indoor", price: 449, originalPrice: 499, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400", description: "Swiss cheese plant"},
    {id: 82, name: "Calathea", category: "indoor", price: 329, originalPrice: 379, image: "https://images.unsplash.com/photo-1593482892540-73c9186d76d5?w=400", description: "Prayer plant"},
    {id: 83, name: "Boston Fern", category: "indoor", price: 259, originalPrice: 309, image: "https://images.unsplash.com/photo-1583881843752-0d5d2d95f144?w=400", description: "Lush green fern"},
    {id: 84, name: "Dracaena", category: "indoor", price: 379, originalPrice: 429, image: "https://images.unsplash.com/photo-1572688484281-e2a9a5e3c3c3?w=400", description: "Dragon tree"},
    {id: 85, name: "Syngonium", category: "indoor", price: 219, originalPrice: 269, image: "https://images.unsplash.com/photo-1509222796416-4b76d9df6239?w=400", description: "Arrowhead plant"},
    {id: 86, name: "Dieffenbachia", category: "indoor", price: 289, originalPrice: 339, image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400", description: "Dumb cane"},
    {id: 87, name: "Schefflera", category: "indoor", price: 349, originalPrice: 399, image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400", description: "Umbrella plant"},
    {id: 88, name: "Peperomia", category: "indoor", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400", description: "Radiator plant"},
    {id: 89, name: "Croton Indoor", category: "indoor", price: 269, originalPrice: 319, image: "https://images.unsplash.com/photo-1608626380485-cdd3ba4c0e91?w=400", description: "Colorful indoor variety"},
    {id: 90, name: "Rubber Plant", category: "indoor", price: 399, originalPrice: 449, image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400", description: "Large glossy leaves"},

    // More Flowering & Gifting (91-100)
    {id: 91, name: "Gerbera Daisy", category: "flowering", price: 229, originalPrice: 279, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400", description: "Colorful daisy flowers"},
    {id: 92, name: "Petunia", category: "flowering", price: 149, originalPrice: 189, image: "https://images.unsplash.com/photo-1597868165956-03a6827955b1?w=400", description: "Trumpet shaped blooms"},
    {id: 93, name: "Sunflower", category: "flowering", price: 179, originalPrice: 219, image: "https://images.unsplash.com/photo-1597848212624-e970ad7b089c?w=400", description: "Bright yellow giant"},
    {id: 94, name: "Dahlia", category: "flowering", price: 259, originalPrice: 309, image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400", description: "Pompom flowers"},
    {id: 95, name: "Zinnia", category: "flowering", price: 139, originalPrice: 179, image: "https://images.unsplash.com/photo-1599837825821-eed7ba0c3b5e?w=400", description: "Colorful garden blooms"},
    {id: 96, name: "Begonia", category: "flowering", price: 199, originalPrice: 249, image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400", description: "Shade loving flowers"},
    {id: 97, name: "Chrysanthemum", category: "flowering", price: 219, originalPrice: 269, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400", description: "Autumn blooming mums"},
    {id: 98, name: "Carnation", category: "flowering", price: 189, originalPrice: 229, image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400", description: "Ruffled fragrant flowers"},
    {id: 99, name: "Gardenia", category: "flowering", price: 329, originalPrice: 379, image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=400", description: "Fragrant white blooms"},
    {id: 100, name: "Hydrangea", category: "flowering", price: 399, originalPrice: 449, image: "https://images.unsplash.com/photo-1597868165956-03a6827955b1?w=400", description: "Large cluster flowers"},

    // Additional Plants (101-110)
    {id: 101, name: "Cactus Mix", category: "succulents", price: 179, originalPrice: 229, image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400", description: "Desert plant collection"},
    {id: 102, name: "Plumeria", category: "flowering", price: 449, originalPrice: 499, image: "https://images.unsplash.com/photo-1597868165956-03a6827955b1?w=400", description: "Temple flower"},
    {id: 103, name: "Pomegranate", category: "Combo Pack", price: 499, originalPrice: 549, image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400", description: "Fruit bearing plant"},
    {id: 104, name: "Lemon Plant", category: "Combo Pack", price: 549, originalPrice: 599, image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400", description: "Citrus tree"},
    {id: 105, name: "Guava Plant", category: "Combo Pack", price: 479, originalPrice: 529, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400", description: "Tropical fruit"},
    {id: 106, name: "Papaya Seeds", category: "seeds", price: 89, originalPrice: 119, image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=400", description: "Fast growing fruit"},
    {id: 107, name: "Mango Seeds", category: "seeds", price: 99, originalPrice: 129, image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400", description: "King of fruits"},
    {id: 108, name: "Strawberry Plant", category: "Combo Pack", price: 279, originalPrice: 329, image: "https://images.unsplash.com/photo-1597848212624-e970ad7b089c?w=400", description: "Berry bearing plant"},
    {id: 109, name: "Grape Vine", category: "Combo Pack", price: 599, originalPrice: 649, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400", description: "Climbing fruit vine"},
    {id: 110, name: "Bonsai Starter", category: "Gifting Pack", price: 899, originalPrice: 999, image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=400", description: "Miniature tree art"}
];

// ===== GLOBAL VARIABLES =====
let cart = [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let filteredProducts = [...plantsDatabase];
let selectedPaymentMethod = 'cod';

// ===== INITIALIZE ON PAGE LOAD =====
window.onload = function() {
    displayProducts(plantsDatabase);
    updateCartCount();
    console.log('🌿 Plant Store Loaded - 110+ Products Available!');
};

// ===== DISPLAY PRODUCTS =====
function displayProducts(products) {
    const grid = document.getElementById('products');
    
    if (products.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 60px; color: #999;">No products found 🔍</p>';
        return;
    }
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">
                    ₹${product.price}
                    <span>₹${product.originalPrice}</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(event, ${product.id})">
                    Add to Cart 🛒
                </button>
            </div>
        </div>
    `).join('');
}

// ===== VIEW PRODUCT =====
function viewProduct(id) {
    const product = plantsDatabase.find(p => p.id === id);
    console.log('Viewing product:', product.name);
    // You can add a product detail modal here if needed
}

// ===== ADD TO CART =====
function addToCart(event, productId) {
    event.stopPropagation();
    const product = plantsDatabase.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    updateCartCount();
    
    // Show success feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added! ✓';
    button.style.background = '#4caf50';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 1000);
    
    console.log(`${product.name} added to cart! 🌿`);
}

// ===== UPDATE CART COUNT =====
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// ===== SHOW CART =====
function showCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="padding: 40px; text-align: center; color: #999;">Your cart is empty 🛒<br><small>Start adding some plants!</small></p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                </div>
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span style="font-weight: 600;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }
    
    updateCartSummary();
    modal.classList.add('active');
}

// ===== UPDATE QUANTITY =====
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        showCart();
        updateCartCount();
    }
}

// ===== REMOVE FROM CART =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    showCart();
    updateCartCount();
}

// ===== UPDATE CART SUMMARY =====
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal >= 499 ? 0 : 50;
    const total = subtotal + delivery;
    
    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('delivery').textContent = delivery === 0 ? 'FREE ✨' : `₹${delivery}`;
    document.getElementById('total').textContent = `₹${total}`;
}

// ===== SHOW CHECKOUT =====
function showCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty! 🛒\n\nPlease add some plants before checkout.');
        return;
    }
    
    closeModal('cartModal');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = total >= 499 ? 0 : 50;
    document.getElementById('checkoutTotal').textContent = `₹${total + delivery}`;
    document.getElementById('checkoutModal').classList.add('active');
}

// ===== SELECT PAYMENT METHOD =====
function selectPayment(element, method) {
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedPaymentMethod = method;
}

// ===== PLACE ORDER =====
function placeOrder(event) {
    event.preventDefault();
    
    const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = total >= 499 ? 0 : 50;
    
    const order = {
        id: orderId,
        items: [...cart],
        total: total + delivery,
        status: 'Processing',
        paymentMethod: selectedPaymentMethod,
        date: new Date().toISOString(),
        tracking: [
            {step: 'Order Placed', completed: true, time: new Date().toLocaleString()},
            {step: 'Processing', completed: false},
            {step: 'Packed', completed: false},
            {step: 'Shipped', completed: false},
            {step: 'Out for Delivery', completed: false},
            {step: 'Delivered', completed: false}
        ]
    };
    
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    cart = [];
    updateCartCount();
    closeModal('checkoutModal');
    
    alert(`🎉 Order Placed Successfully!\n\n📦 Order ID: ${orderId}\n💰 Total: ₹${order.total}\n🚚 Payment: ${selectedPaymentMethod.toUpperCase()}\n\nYou can track your order anytime!`);
    
    // Auto-open tracking
    setTimeout(() => {
        document.getElementById('trackingId').value = orderId;
        showTrackOrder();
        trackOrder();
    }, 500);
}

// ===== SHOW TRACK ORDER =====
function showTrackOrder() {
    document.getElementById('trackModal').classList.add('active');
}

// ===== TRACK ORDER =====
function trackOrder() {
    const trackingId = document.getElementById('trackingId').value.trim();
    const resultDiv = document.getElementById('trackingResult');
    
    if (!trackingId) {
        alert('Please enter Order ID');
        return;
    }
    
    const order = orders.find(o => o.id === trackingId);
    
    if (!order) {
        resultDiv.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #ff6b6b;">
                <h3>❌ Order not found</h3>
                <p>Please check your Order ID and try again.</p>
            </div>
        `;
        return;
    }
    
    resultDiv.innerHTML = `
        <div class="order-status">
            <h3 style="margin-bottom: 10px;">📦 Order #${order.id}</h3>
            <p style="color: #666; margin-bottom: 20px;">Status: <strong style="color: #2d7a3e;">${order.status}</strong></p>
            <div class="status-timeline">
                ${order.tracking.map(step => `
                    <div class="status-step ${step.completed ? 'completed' : ''} ${step.step === order.status ? 'active' : ''}">
                        <strong>${step.step}</strong>
                        ${step.time ? `<div style="font-size: 13px; color: #666; margin-top: 5px;">${step.time}</div>` : ''}
                    </div>
                `).join('')}
            </div>
            <button class="cancel-order-btn" onclick="cancelOrder('${order.id}')">Cancel Order</button>
        </div>
    `;
}

// ===== CANCEL ORDER =====
function cancelOrder(orderId) {
    if (!confirm('Are you sure you want to cancel this order?')) return;
    
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = 'Cancelled';
        localStorage.setItem('orders', JSON.stringify(orders));
        alert('✅ Order cancelled successfully');
        trackOrder();
    }
}

// ===== SHOW MY ORDERS =====
function showMyOrders() {
    const modal = document.getElementById('ordersModal');
    const ordersList = document.getElementById('ordersList');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p style="padding: 40px; text-align: center; color: #999;">No orders yet 📦<br><small>Start shopping to see your orders here!</small></p>';
    } else {
        ordersList.innerHTML = [...orders].reverse().map(order => `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <div class="order-id">📦 Order #${order.id}</div>
                        <div style="font-size: 13px; color: #666; margin-top: 5px;">
                            ${new Date(order.date).toLocaleDateString('en-IN', {day: 'numeric', month: 'short', year: 'numeric'})}
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div class="order-status-badge ${order.status.toLowerCase()}">
                            ${order.status}
                        </div>
                        <div style="font-size: 18px; font-weight: bold; color: #2d7a3e; margin-top: 5px;">
                            ₹${order.total}
                        </div>
                    </div>
                </div>
                <div style="font-size: 14px; color: #666;">
                    🌱 ${order.items.length} item(s) • 💳 ${order.paymentMethod.toUpperCase()}
                </div>
                <button class="track-btn" style="margin-top: 15px;" onclick="trackOrderById('${order.id}')">
                    Track Order 🚚
                </button>
            </div>
        `).join('');
    }
    
    modal.classList.add('active');
}

// ===== TRACK ORDER BY ID =====
function trackOrderById(orderId) {
    closeModal('ordersModal');
    document.getElementById('trackingId').value = orderId;
    showTrackOrder();
    trackOrder();
}

// ===== FILTER BY CATEGORY =====
function filterByCategory(category) {
    document.getElementById('categoryFilter').value = category;
    applyFilters();
    
    // Scroll to products
    document.getElementById('products').scrollIntoView({behavior: 'smooth'});
}

// ===== APPLY FILTERS =====
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    const sortBy = document.getElementById('sortFilter').value;
    
    let filtered = [...plantsDatabase];
    
    // Category filter
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    // Price filter
    if (priceRange !== 'all') {
        if (priceRange === '1500+') {
            filtered = filtered.filter(p => p.price >= 1500);
        } else {
            const [min, max] = priceRange.split('-').map(x => parseInt(x));
            filtered = filtered.filter(p => p.price >= min && p.price <= max);
        }
    }
    
    // Sort
    switch(sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayProducts(filtered);
}

// ===== SEARCH PRODUCTS =====
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!query) {
        displayProducts(plantsDatabase);
        return;
    }
    
    const filtered = plantsDatabase.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    
    displayProducts(filtered);
    
    // Show feedback
    if (filtered.length === 0) {
        console.log('No results for:', query);
    } else {
        console.log(`Found ${filtered.length} products for:`, query);
    }
}

// ===== CLOSE MODAL =====
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ===== CLOSE MODAL ON OUTSIDE CLICK =====
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// ===== SEARCH ON ENTER KEY =====
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
});

console.log('✅ Plant Store JS Loaded - 110 Products Ready! 🌿');
