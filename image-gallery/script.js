
const BRAND_LIST = [
  { name: "BMW", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755432074/bmwlogo_jho17d.png" },
  { name: "Porsche", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755363237/porshelogo_nekdmp.png" },
  { name: "Mercedes-Benz", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755363234/mercedesbenzlogo_haeodu.png" },
  { name: "Rolls-Royce", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755363236/rollsroycelogo_avtgfb.png" },
  { name: "Audi", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755363235/audilogo_vuhw9q.png" },
  { name: "Aston Martin", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755363233/astonmartinlogo_mdshsf.png" },
  { name: "Ferrari", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755363235/ferrarilogo_yaszao.png" },
  { name: "Lamborghini", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755363236/lamborginilogo_eovdf0.png" },
  { name: "Bugatti", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755363233/bugattilogo_jq7q5r.png" },
  { name: "Nissan", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365109/nissanlogo_y78vk5.png" },
  { name: "Kia", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365080/kialogo_ycyo21.png" },
  { name: "MG", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365107/mglogo_po4at7.png" },
  { name: "Tata", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755411689/tatalogo_lujx9g.png" },
  { name: "Mahindra", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755411680/mahindralogo_gsblxr.webp" },
  { name: "Jaguar", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365083/jaguarlogo_kybfgp.png" },
  { name: "Bentley", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365609/bentleylogo_grhviu.png" },
  { name: "McLaren", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365151/mclarenlogo_arqdje.png" },
  { name: "Toyota", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365053/toyotalogo_mwowqn.png" },
  { name: "Hyundai", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365079/hyundailogo_sqdmfm.png" },
  { name: "Volkswagen", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365057/Volkswagenlogo_fx5vct.png" },
  { name: "Volvo", logo: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755365057/volvologo_w7mfzk.png" },
];


const CAR_DB = {
  "BMW": [
    { name: "M4 Competition", type: "Sports Coupe", power: "503 hp", drivetrain: "RWD", price: "$78,100", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755412910/m4_gennms.jpg" },
    { name: "X5 xDrive40i", type: "SUV", power: "375 hp", drivetrain: "AWD", price: "$65,700", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755434548/bmwx5drive40i_pl2rxc.jpg" },
    { name: "i4 M50", type: "Electric Sedan", power: "536 hp", drivetrain: "AWD", price: "$69,700", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755434549/i4m50_kmjk5i.jpg" },
    { name: "X3", type:"SUV", power:"194 hp",drivetrain:"RWD",price:"77.80 Lakhs", img:"https://res.cloudinary.com/dlwl3umy8/image/upload/v1755434552/x3_feekhc.jpg"},
    { name: "M5", type: "Sedan(Performance)", power: "717 bhp",drivetrain: "RWD and AWD",price: "1.99cr",img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755434549/m5_y451dk.jpg"},
    { name: "M8", type: "Sedan(Performance)", power: "620 hp",drivetrain: "AWD",price: "2.80cr",img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755434550/m8_qhnpmb.jpg"},
  ],
  "Porsche": [
    { name: "911 Carrera", type: "Sports", power: "379 hp", drivetrain: "RWD", price: "$114,400", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755438851/911carrera_yxul0a.jpg" },
    { name: "Taycan", type: "Electric", power: "402-751 hp", drivetrain: "AWD", price: "$90,900+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755438851/tycan_mtujtb.jpg"},
    { name: "Cayenne", type: "SUV", power: "348-729 hp", drivetrain: "AWD", price: "$79,200+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755438851/cayenne_txsfmp.jpg"},
    { name: "Macan", type: "Compact SUV", power: "250 hp", drivetrain: "AWD", price: "1 cr+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755438852/macan_adbe8b.jpg"},
    { name: "panamera", type: "Sedan", power: "700+ hp", drivetrain: "AWD", price: "2 cr+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755438851/panamera_hxcza7.jpg"},
    { name: "Tycan Turbo S", type: "Electric Sports Sedan", power: "750 hp", drivetrain: "AWD", price: "2 cr", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755438852/tycanturbos_mc45pr.jpg"},
  ],
  "Mercedes-Benz": [
    { name: "C-Class", type: "Sedan", power: "255 bhp (hybrid)", drivetrain: "RWD", price: "71 Lakh+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755454331/Cclass_woijyz.jpg" },
    { name: "GLE-Class", type: "SUV", power: "416-577 hp", drivetrain: "AWD", price: "1.20 cr+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755454334/GLEclass_bzzhzt.jpg"},
    { name: "S-Class", type: "Luxury Sedan", power: "416-577 hp", drivetrain: "AWD", price: "3.50 cr+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755454335/sclass_lbbcwd.jpg" },
    { name: "EQE", type: "Electric SUV", power: "340 hp", drivetrain: "AWD", price: "Still not launched", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755454334/eqe_tmlz3k.jpg"},
    { name: "GLA", type: "SUV", power: "---", drivetrain: "---", price: "---", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755454335/gla_ulkbws.jpg" },
    { name: "Maybach GLS", type: "Luxury SUV", power: "AMG engineered power,ultra premium luxury", drivetrain: "AWD", price: "1.40 cr+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755454334/maybachgls_zcsfzx.jpg" },
  ],
  "Rolls-Royce": [
    { name: "Phantom", type: "Ultra-luxury flagship sedan (standard & extended wheelbase)", power: "6.75 L twin-turbocharged V12 petrol (~563 hp / ~664 lb-ft)", drivetrain: "RWD", price: "₹ 8.99 Cr – ₹ 10.48 Cr", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755513129/phantom_jzqpyt.jpg" },
    { name: "Cullinan", type: "Ultra-luxury SUV", power: "6.75 L twin-turbo V12 petrol (standard); Black Badge variant: ~441 kW (~592 hp) ", drivetrain: "AWD", price: "₹ 6.95 Cr – ₹ 12.25 Cr (varies by variant and editions) ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755513127/cullinan_hy4ldb.jpg" },
    { name: " Ghost Series II", type: "Luxury sedan (standard & extended wheelbase)", power: "6.75 L twin-turbo V12 petrol, power output around standard Ghost; Black Badge variant tuned to ~592 hp ", drivetrain: "RWD,8 speed automatic", price: "₹ 8.99 Cr – ₹ 10.52 Cr", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755513123/ghost_series_II_v9keai.jpg" },
    { name: "Spectre", type: "All-electric luxury coupe (grand tourer)", power: "Dual electric motors,~430 kW (~577 hp)", drivetrain: "AWD", price: "~430 kW (~577 hp)", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755513127/spectre_k403nu.jpg" },
    { name: "Wraith", type: "Luxury coupe (discontinued but still noted)", power: "Around ~6.6 – 6.75 L V12 petrol (typical spec)", drivetrain: "RWD", price: "₹ 6.22 Cr – ₹ 7.21 Cr ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755513126/wraith_egrmlc.jpg" },
    { name: "Droptail", type: "Ultra-luxury, highly bespoke coach-built cabriolet (limited runs)", power: "6.75 L twin-turbo V12 petrol (BMW N74B68) ", drivetrain: "RWD", price: "Estimated at over US $30 million (~₹ 250 Cr+)", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755513126/droptail_xz7g3z.jpg"},
  ],
  "Audi": [
    { name: "Q3", type: "Compact luxury SUV", power: "Petrol/diesel engines (varies by variant)", drivetrain: "FWD/AWD depending on trim", price: " ₹45.24 – ₹55.64 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755779797/q3_ydurcc.jpg" },
    { name: "A4", type: " Premium midsize sedan", power: "Petrol/diesel", drivetrain: "FWD / AWD (Quattro available)", price: "₹47.93 – ₹57.11 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755779797/a4_sohvue.jpg"},
    { name: "Q5", type: "Executive Sedan", power: "Petrol or mild-hybrid petrol", drivetrain: "FWD (AWD in higher trims)", price: "₹66.05 – ₹72.43 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755779798/q5_b7pfgg.jpg" },
    { name: "A6", type: "Executive Sedan", power: " Petrol or mild-hybrid petrol", drivetrain: "FWD", price: "₹66.05 – ₹72.43 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755779797/a6_qwvpzg.jpg" },
    { name: "Q7", type: "Three-row luxury SUV", power: "Petrol/Diesel", drivetrain: "AWD", price: "₹90.48 – ₹99.81 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755779798/q7_qbra4r.jpg" },
    { name: "RS e-tron GT", type: "Performance electric sedan", power: "Dual electric motors", drivetrain: "AWD", price: "Around ₹2.05 Crore ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755779798/rsetrongt_ysubyn.jpg" },
  ],
  "Aston Martin": [
    { name: "DBX", type: "Luxury SUV", power: "Twin-turbo V8", drivetrain: "AWD", price: "₹3.82 – ₹4.63 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780080/dbx_zvo8mu.jpg" },
    { name: "Vantage", type: "Sports coupe/roadster", power: "Twin-turbo V8(~656hp)", drivetrain: "RWD", price: "~₹3.99 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780080/vantage_xxlz0e.jpg" },
    { name: "DB11", type: "Grand tourer coupe/convertible", power: "V8 or V12", drivetrain: "RWD", price: " ~₹3.79 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780078/db11_uqsdgt.jpg" },
    { name: "DB12", type: "Upgraded GT", power: "Enhanced V8/V12 options", drivetrain: "RWD", price: "~₹5.28 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780079/db12_h6lvak.jpg" },
    { name: "Vanquish", type: "Flagship super GT", power: "V12 (~824 bhp)", drivetrain: "RWD", price: "₹8.85 – ₹10.25 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780081/vanquish_tj1e4q.jpg" },
    { name: "Valhalla", type: "Plug-in hybrid supercar", power: "PHEV V6 + electric motors", drivetrain: "RWD", price: "Not yet officially announced, but spotted for India-bound interest", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780081/valhalla_c4qkuy.jpg" },
  ],
  "Ferrari": [
    { name: "Roma", type: "Elegant GT coupe", power: "V8 (~620 bhp)", drivetrain: "RWD", price: "₹3.76 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780311/roma_jtqgjr.jpg"},
    { name: "F8 Tributo", type: "Mid-engine sports coupe", power: "V8 (~710 bhp)", drivetrain: "RWD", price: "₹4.02 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780310/f8tributo_svlsoy.jpg" },
    { name: "296 GTB", type: "Plug-in hybrid supercar", power: "V6 + electric motor, combined ~830 bhp", drivetrain: "RWD", price: "₹5.40 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780309/296gtb_bihcy7.jpg" },
    { name: "SF90 Stradale", type: "Hybrid hypercar", power: "V8 + EV, ~1,000 bhp", drivetrain: "AWD", price: "₹7.50 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780312/sf90_x1xggi.jpg" },
    { name: "812 Superfast", type: "V12 front-engined GT", power: "V12 (~800 bhp)", drivetrain: "RWD", price: "₹5.75 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780310/812superfast_eozko0.jpg" },
    { name: "Purosangue", type: "Ferrari's first SUV", power: "V8 or V12", drivetrain: "AWD", price: "~₹10.50 – ₹12.07 Crore depending on source ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780312/purosangue_metlm3.jpg" },
  ],
  "Lamborghini": [
    { name: "Urus", type: "High performance SUV", power: "Twin-turbo V8 (~650 bhp)", drivetrain: "AWD", price: "₹4.18 – ₹5.39 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780573/urus_vkwdqg.jpg" },
    { name: "Huracan EVO", type: "Sports coupe/Spyder", power: "V10(~630 bhp)", drivetrain: "AWD", price: "₹4 – ₹4.99 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780568/huracanevo_sasdwm.jpg" },
    { name: "Temerario", type: "Hybrid supercar (successor to Huracán)", power: "Twin-turbo V8 + electric (~800 bhp)", drivetrain: "AWD", price: "₹6 – ₹7.50 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780569/temerario_pk4drh.jpg" },
    { name: "Revuelto", type: "Hybrid V12 flagship", power: "V12 + electric (~1,000 bhp)", drivetrain: "AWD", price: "₹8.89 – ₹10.49 Crore ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780568/revuelto_ln5ue8.jpg" },
  ],
  "Bugatti": [
    { name: "Chiron", type: "Hypercar", power: "W16,1500 hp", drivetrain: "AWD", price: "₹25+ Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780750/chiron_vnf6ix.jpg" },
    { name: "Mistral", type: "Ultra-limited roadster (99 units)", power: "Quad-turbo W16", drivetrain: "AWD", price: "₹45+ Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780751/mistral_ye0vuj.jpg" },
  ],
  "Nissan": [
    { name: "Magnite", type: "Subcompact SUV", power: "1.0 L petrol, optionally CNG", drivetrain: "FWD", price: "₹6.14 – ₹11.76 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780835/magnite_ewoqrg.jpg" },
    { name: "X-Trail", type: "MId size SUV", power: "Petrol (1.5 L)", drivetrain: "AWD", price: "₹49.92 – ₹59.22 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780836/xtrail_bxlvbi.jpg" },
  ],
  "Kia": [
    { name: "EV6", type: "Electric Crossover", power: "Dual-motor/Long-range EV", drivetrain: "AWD", price: "₹65.97 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780931/ev6_ro6brt.jpg" },
    { name: "Seltos", type: "Compact SUV", power: "1.5 L petrol/diesel, 1.4 L turbo petrol", drivetrain: "FWD/AWD", price: "₹11.19 – ₹20.56 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780934/seltos_caurea.jpg" },
    { name: "Sonet", type: "Compact SUV", power: "1.0 L turbo petrol, 1.2 L petrol, 1.5 L diesel", drivetrain: "FWD", price: "₹8 – ₹15.64 Lakh", img:  "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780934/sonet_awfkwr.jpg"},
    { name: "Carens", type: "MPV", power: "Petrol and Diesel", drivetrain: "FWD", price: "₹11.41 – ₹13.26 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780929/carens_ngnp6d.jpg" },
    { name: "Carens Clavis", type: "Premium MPV variant", power: "Petrol and Diesel", drivetrain: "FWD", price: "₹11.50 – ₹21.50 Lakh ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780930/carensclavis_akfha7.jpg" },
    { name: "EV9", type: "Electric 3-row SUV", power: "Electric", drivetrain: "AWD", price: "₹1.30 Crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755780932/ev9_hlk2nk.jpg" },
  ],
  "MG": [
    { name: "Comet EV", type: "Small Electric Hatch", power: "Electric", drivetrain: "FWD", price: "₹7.50 – ₹9.56 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755781193/comet_lsfa2u.jpg" },
    { name: "windsor EV", type: "Electric SUV", power: "Electric", drivetrain: "FWD", price: "₹14 – ₹18.39 Lakh ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755781194/windsorev_trkszx.jpg" },
    { name: "Astor", type: "Compact SUV", power: "Petrol", drivetrain: "FWD", price: "₹10 – ₹17.56 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755781180/astor_qguh80.jpg" },
    { name: "Hector", type: "Mid-Size-SUV", power: "Petrol/Diesel", drivetrain: "FWD", price: "₹14.50 – ₹22.45 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755781194/hector_webqyd.jpg" },
    { name: "ZS EV", type: "Compact electric SUV", power: "Electric", drivetrain: "FWD", price: "₹17.99 – ₹20.50 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755781198/zsev_b4ekva.jpg" },
    { name: "Cyberster", type: "Electric Roadster (launching)", power: "Electric", drivetrain: "RWD", price: "₹75 Lakh (est.) ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755781185/cyberster_rqef33.jpg" },
    { name: "M9", type: "Electric limousine", power: "Electric,548 km range", drivetrain: "FWD/AWD", price: "₹69.90 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755781191/m9_jary9h.jpg" },
  ],
  "Tata": [
    { name: "Altroz", type: "Premium hatchback", power: "Petrol, Diesel, and CNG options", drivetrain: "FWD", price: "Starts at ₹6.89 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527558/altroz_ox38k6.jpg" },
    { name: "Punch", type: "Subcompact crossover SUV", power: "1.2 L Petrol (Revotron I3) and CNG options", drivetrain: "FWD", price: "6-10 Lakhs", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527558/punch_yekidj.jpg" },
    { name: "Safari", type: "Mid-size SUV", power: "2.0 L Kryotec turbo-diesel engine", drivetrain: "FWD", price: "20-25 Lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527558/safari_j8h2qy.jpg" },
    { name: "Curv EV", type: "Mid size SUV", power: "45 kWh / 55 kWh LFP batteries, ~502–585 km range", drivetrain: "FWD", price: " Around ₹17.49 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527558/curvev_d50ms2.jpg" },
    { name: "Harrier EV", type: "Electric compact SUV", power: "65 kWh / 75 kWh LFP batteries; ~627 km range; up to 390 bhp, 504 Nm", drivetrain: "FWD and AWD", price: "₹21.49 lakh – ₹30.23 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527558/harrier_v9mcxb.jpg" },
    { name: "Nexon", type: "Compact SUV (available in ICE & EV)", power: "1.2 L turbo petrol (118 bhp, 170 Nm), 1.5 L diesel (113 bhp, 260 Nm),30 kWh or 40.5 kWh battery options, range up to ~465 km", drivetrain: "FWD", price: " ₹8.10 lakh – ₹15.50 lakh (ICE); EV ₹14.50 lakh – ₹19.99 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527558/nexon_vbhjgr.jpg" },
  ],
  "Mahindra": [
    { name: "BE 6", type: "Electric compact crossover SUV", power: "Electric motor — 231 hp (59 kWh) or 286 hp (79 kWh), torque 380 Nm", drivetrain: "RWD", price: "₹18.90 lakh – ₹26.90 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755517099/be6_qxmess.jpg" },
    { name: "XEV 9e", type: "Electric mid-size coupe-style crossover SUV", power: "Permanent magnet synchronous motor; battery options: 59 kWh (231 PS) or 79 kWh (286 PS); torque up to 380 Nm", drivetrain: "RWD", price: "₹21–22 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755517100/xev9e_anb687.jpg" },
    { name: "Scorpio-N", type: "Mid-size SUV", power: "Petrol (2.0 L mStallion turbo) and Diesel (2.2 L mHawk turbo) options ", drivetrain: "FWD and AWD", price: "₹13.99 lakh – ₹24.89 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755517099/scorpion_nwuxct.jpg" },
    { name: "Thar ROXX", type: "Off-road mid-size SUV (variant of Thar)", power: "Petrol and Diesel options typical of Thar range (e.g., 2.2 L), though specifics vary", drivetrain: "Likely 4×4 (consistent with Thar’s design) ", price: "₹12.99 lakh – ₹23.09 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755517099/tharroxx_cenee4.jpg" },
    { name: "XUV 3XO RevX", type: "ompact SUV (updated “RevX” trim of XUV 3XO)", power: "Petrol only (diesel variants removed in RevX)", drivetrain: "FWD", price: "Starts at ₹8.94 lakh", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755517100/xuv3xorevx_fmf1vl.jpg" },
    { name: "XUV 700", type: "XUV 700", power: "Petrol: 2.0 L mStallion turbocharged I4 — approx. 197 bhp, 380 Nm, Diesel: 2.2 L mHawk turbocharged I4 — entry variants ~153 bhp, 360 Nm; higher variants ~182 bhp, 420 Nm (manual), 450 Nm (automatic) ", drivetrain: "AWD", price: "30 Lakh+", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755517100/xuv700_vhdglu.jpg" },
  ],
  "Jaguar": [
    { name: "F-Type", type: "Sports", power: "444-575 hp", drivetrain: "RWD/AWD", price: "$77,900", img: unsplash('Jaguar F Type') },
  ],
  "Bentley": [
    { name: "Continental GT", type: "Grand Tourer", power: "542-650 hp", drivetrain: "AWD", price: "$235,000+", img: unsplash('Bentley Continental GT') },
  ],
  "McLaren": [
    { name: "GT", type: "Luxury Grand Tourer (coupé)", power: "4.0 L twin-turbo V8 petrol (~620 PS, ~630 Nm torque)", drivetrain: "RWD and dual clutch transmission", price: "₹4.50 crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527580/gt_u9adrw.jpg" },
    { name: "750S", type: "High-performance Supercar (coupé and Spider available", power: "4.0 L twin-turbo V8 petrol (~740 PS) ", drivetrain: "RWD; Spider has retractable roof with same performance as coupe", price: "₹5.91 crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527579/750s_fw8pay.jpg" },
    { name: "Artura", type: "Plug-in Hybrid Supercar (coupé and Spider)", power: "3.0 L twin-turbo V6 petrol + electric motor; combined output ~670 hp (~500 kW) and 720 Nm torque ", drivetrain: "RWD,8-speed dual-clutch gearbox", price: "₹1.99 – 2.27 crore (based on 2025 India estimates: ~₹1.99 crore for coupe, ~₹2.27 crore for Spider) ", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527579/artura_w70ruj.jpg" },
    { name: "Speedtail", type: "Ultra-limited Hybrid Hyper-GT (3-seater)", power: "Twin-turbo V8 + hybrid system; combined output ~1,036 hp (756 PS gas + 312 PS electric) ", drivetrain: "RWD,advanced carbon fibre chassis", price: "Not officially sold in India; globally priced around US $2.2 million (₹18–20 crore+) (inferred based on exclusivity)", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527581/speedtrail_hiu8ba.jpg" },
    { name: "W1", type: " Limited-edition Hybrid Hypercar (successor to the P1)", power: "4.0 L twin-turbo V8 + electric module (radial flux motor); combined output ~1,275 PS, ~1,340 Nm torque ", drivetrain: "RWD,8-speed dual-clutch transmission, mid-engine layout ", price: "Base price from £2 million (~₹22 crore)", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527580/w1_cqytfo.jpg" },
    { name: "720S", type: "Supercar (preceding generation to the 750S)", power: "4.0 L twin-turbo V8 petrol (in the 720S GT versions, though exact outputs vary) ", drivetrain: "RWD", price: "Discontinued in India; previously ranged around ₹5.35 – 5.80 crore", img: "https://res.cloudinary.com/dlwl3umy8/image/upload/v1755527579/720s_cyhslo.jpg" },
  ],
  "Toyota": [
    { name: "Supra", type: "Sports", power: "255-382 hp", drivetrain: "RWD", price: "$46,000", img: unsplash('Toyota Supra') },
  ],
  "Hyundai": [
    { name: "Ioniq 5", type: "Electric", power: "168-320 hp", drivetrain: "RWD/AWD", price: "$41,800", img: unsplash('Hyundai Ioniq 5') },
  ],
  "Volkswagen": [
    { name: "Golf R", type: "Hatch", power: "315 hp", drivetrain: "AWD", price: "$45,000", img: unsplash('Volkswagen Golf R') },
  ],
  "Volvo": [
    { name: "XC90 Recharge", type: "PHEV SUV", power: "455 hp", drivetrain: "AWD", price: "$73,000", img: unsplash('Volvo XC90 Recharge') },
  ],
};

function unsplash(query) {
  const encoded = encodeURIComponent(query + ' car');
  return `https://source.unsplash.com/800x600/?${encoded}`;
}

function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

function toggleHamburger(){
  const burger = qs('#hamburger');
  const nav = qs('#nav-links');
  if(!burger || !nav) return;
  burger.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
}


(function initHome(){
  if(!qs('.brands')) return; 
  toggleHamburger();

  const container = qs('.brands');
  const search = qs('#brand-search');

  function brandCard(brandObj){
    return `<article class="brand-card" data-brand="${brandObj.name}" tabindex="0" role="button" aria-label="Open ${brandObj.name}">
      <img class="brand-thumb" src="${brandObj.logo}" alt="${brandObj.name} logo"/>
      <div class="brand-name">${brandObj.name}</div>
    </article>`;
  }

  function render(list){
    container.innerHTML = list.map(brandCard).join('');
    qsa('.brand-card', container).forEach(card=>{
      const brand = card.getAttribute('data-brand');
      function open(){
        const url = `brand.html?brand=${encodeURIComponent(brand)}`;
        window.open(url, '_blank');
      }
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e)=>{ if(e.key==='Enter') open(); });
    });
  }

  render(BRAND_LIST);

  search.addEventListener('input', ()=>{
    const term = search.value.trim().toLowerCase();
    const filtered = BRAND_LIST.filter(b => b.name.toLowerCase().includes(term));
    render(filtered);
  });
})();


(function initBrand(){
  if(!qs('.models')) return; 
  toggleHamburger();

  const params = new URLSearchParams(location.search);
  const brand = params.get('brand');
  const titleEl = qs('#brand-title');
  const modelsWrap = qs('#models');
  const search = qs('#model-search');

  if(!brand || !CAR_DB[brand]){
    titleEl.textContent = "Brand not found";
    modelsWrap.innerHTML = `<p style="padding:18px;">We couldn't find that brand. <a href="index.html">Back to brands</a>.</p>`;
    return;
  }

  titleEl.textContent = brand;

  let models = CAR_DB[brand].slice();
  let visible = models.slice();

  function cardHTML(m, idx){
    return `<article class="model-card" data-idx="${idx}" tabindex="0" role="button" aria-label="Open ${m.name}">
      <img class="model-thumb" src="${m.img}" alt="${brand} ${m.name}"/>
      <div class="model-info">
        <div class="model-title">${m.name}</div>
        <div class="model-meta">${m.type} • ${m.power} • ${m.drivetrain} • ${m.price}</div>
      </div>
    </article>`;
  }

  function render(list){
    modelsWrap.innerHTML = list.map(cardHTML).join('');
    qsa('.model-card', modelsWrap).forEach(card=>{
      const idx = Number(card.getAttribute('data-idx'));
      card.addEventListener('click', () => openPanel(list[idx]));
    });
  }


  search.addEventListener('input', ()=>{
    const term = search.value.trim().toLowerCase();
    visible = models.filter(m =>
      [m.name, m.type, m.power, m.drivetrain, m.price].join(' ').toLowerCase().includes(term)
    );
    render(visible);
  });


  render(visible);


  const panel = qs('#car-panel');
  const pImg = qs('#panel-img');
  const pTitle = qs('#panel-title');
  const pType = qs('#panel-type');
  const pPower = qs('#panel-power');
  const pDrive = qs('#panel-drivetrain');
  const pPrice = qs('#panel-price');
  const pClose = qs('#panel-close');

  function openPanel(m) {
    pImg.src = m.img;
    pImg.alt = `${brand} ${m.name}`;
    pTitle.textContent = `${brand} ${m.name}`;
    pType.textContent = m.type;
    pPower.textContent = m.power;
    pDrive.textContent = m.drivetrain;
    pPrice.textContent = m.price;
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
  }

  function closePanel() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }

  pClose.addEventListener('click', closePanel);
  panel.addEventListener('click', (e) => {
    if (e.target === panel) closePanel();
  });
})();
