export const SITE_INFO = {
  name: "Photons Food Processing Engineers",
  shortName: "Photons Food",
  tagline: "Precision Engineering for Perfect Rice",
  subTagline: "We understand every step along the value chain from harvested paddy to packed rice",
  founded: "1984",
  address: "Brahmnagudem Village, East Godavari District, Andhra Pradesh, India - 534 302",
  phone: "+91 94401 77799",
  altPhone: "+91 98481 77799",
  email: "info@photonsfood.com",
  altEmail: "info@photonsfood.in",
  whatsapp: "919440177799",
  logo: "/uploads/2024/09/Photons-Logo.png",
  isoCertificate: "/uploads/2024/09/ISO-certificate-Photons-food.png",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  },
  stats: [
    { number: "40+", label: "Years of Experience", suffix: "Years" },
    { number: "500+", label: "Projects Completed", suffix: "Plants" },
    { number: "100%", label: "Client Satisfaction", suffix: "Rated" },
    { number: "50+", label: "Skilled Engineers", suffix: "Experts" }
  ]
};

export const CLIENT_LOGOS = [
  { name: "Pattabi Mills", logo: "/uploads/2024/10/pattabi-mills.png" },
  { name: "Client Partner 1", logo: "/uploads/2024/09/1.png" },
  { name: "Client Partner 2", logo: "/uploads/2024/09/4.png" },
  { name: "Client Partner 3", logo: "/uploads/2024/09/5.png" },
  { name: "Client Partner 4", logo: "/uploads/2024/09/6.png" },
  { name: "Client Partner 5", logo: "/uploads/2024/09/7.png" },
  { name: "Client Partner 6", logo: "/uploads/2024/09/8.png" },
  { name: "Client Partner 7", logo: "/uploads/2024/10/Untitled-design-5.png" },
  { name: "Client Partner 8", logo: "/uploads/2024/10/Untitled-design-6.png" }
];

export const PRODUCTS = [
  {
    id: 393,
    slug: "dryers",
    name: "Dryers",
    category: "Grain Drying",
    heroTitle: "Revolutionizes Rice Milling With Advanced Suction Dryers",
    shortDesc: "High-performance industrial suction and LSU paddy dryers engineered for uniform moisture reduction and maximum milling yield.",
    fullDesc: `Photons Foods revolutionizes rice milling with its cutting-edge Suction Dryers, setting new standards in efficiency and grain quality. Our suction drying technology delivers exceptional moisture extraction while maintaining the physical integrity of grain kernels, drastically reducing broken grains during hulling and polishing.`,
    coverImage: "/uploads/2024/09/DJI_0163-scaled.jpg",
    specs: [
      { label: "Capacities Available", value: "16 Tons, 24 Tons, 32 Tons, 48 Tons & 64 Tons Batch" },
      { label: "Fuel Compatibility", value: "Husk-fired Furnace, Biomass, Steam Heat Exchanger" },
      { label: "Moisture Reduction", value: "3% to 4% per cycle with controlled thermal gradient" },
      { label: "Construction", value: "Heavy-duty Galvanized Steel / SS 304 Contact Parts" },
      { label: "Blower System", value: "High-efficiency Backward Curved Dynamic Suction Blowers" }
    ],
    tabs: [
      {
        title: "Suction Drying Mechanism",
        content: "Unlike conventional blowing systems that risk localized hot spots, our suction airflow pulls warm air uniformly across the grain column, achieving homogeneous moisture evacuation without thermal stress."
      },
      {
        title: "Thermal Efficiency",
        content: "Optimized heat exchanger coils maximize thermal transfer from steam or furnace flue gases, reducing fuel and energy consumption by up to 28% compared to standard dryers."
      },
      {
        title: "Automated Control",
        content: "Integrated digital temperature monitors and automatic grain discharge speed controls prevent over-drying and maintain head rice yield (HRY)."
      },
      {
        title: "Low Breakage Yield",
        content: "Gentle tumbling dynamics ensure that the delicate bran layers remain undamaged, leading to premium grade translucent parboiled or raw rice."
      }
    ]
  },
  {
    id: 395,
    slug: "parboiling",
    name: "Parboiling Systems",
    category: "Hydro-thermal Processing",
    heroTitle: "Innovative Parboiling Machines For Superior Rice Processing",
    shortDesc: "State-of-the-art steam parboiling plants engineered for optimal starch gelatinization, vibrant translucent color, and high kernel strength.",
    fullDesc: `At Photons Foods, our Parboiling Systems integrate hydrothermal precision with energy efficiency. By carefully managing steam saturation, soaking temperatures, and pressure levels, our plants ensure complete starch gelatinization across every kernel, delivering consistent parboiled rice with zero white belly.`,
    coverImage: "/uploads/2024/09/Photon-layout-3-1.png",
    specs: [
      { label: "Plant Capacity", value: "50 TPD to 500 TPD Continuous / Semi-Continuous" },
      { label: "Steam Pressure", value: "3.5 to 5.0 kg/cm² regulated through PID valves" },
      { label: "Water Circulation", value: "High-rate pressurized recirculation with heat recovery" },
      { label: "Vessel Material", value: "Food Grade Stainless Steel (SS 304 / SS 316)" },
      { label: "Drainage Time", value: "Rapid pneumatic bottom gate discharge (< 90 seconds)" }
    ],
    tabs: [
      {
        title: "Precision Gelatinization",
        content: "Accurately calibrated steam injection cooks the starch uniformly, locking in vital nutrients and strengthening the kernel structure against breakage during milling."
      },
      {
        title: "Water & Energy Conservation",
        content: "Closed-loop condensate and hot water recovery systems reuse thermal energy, significantly reducing boiler load and freshwater intake."
      },
      {
        title: "Automated Cycling",
        content: "Centralized PLC automation handles sequential filling, pre-steaming, hot soaking, pressure cooking, and rapid pneumatic discharge with zero manual intervention."
      },
      {
        title: "Odor-Free Processing",
        content: "Advanced aeration and temperature profiling eliminate bacterial fermentation during soaking, ensuring fresh aroma and spotless grain clarity."
      }
    ]
  },
  {
    id: 397,
    slug: "cleaners",
    name: "Pre Cooker",
    category: "Pre-Treatment",
    heroTitle: "Efficient Pre Cooker For Enhanced Rice Processing",
    shortDesc: "Continuous steam pre-cookers that prime paddy grain prior to main parboiling, speeding up process cycles and enhancing moisture uptake.",
    fullDesc: `The Photons Foods Pre Cooker machine is engineered to condition raw paddy with controlled pre-heating and initial steam softening. This essential pre-treatment ensures rapid, uniform water absorption during the subsequent soaking cycle, shortening batch processing times and saving substantial steam energy.`,
    coverImage: "/uploads/2024/09/DJI_0159-scaled.jpg",
    specs: [
      { label: "Throughput", value: "10 to 60 Tons per Hour continuous flow" },
      { label: "Steam Distribution", value: "Multi-point rotary steam nozzles with non-clog orifices" },
      { label: "Drive Mechanism", value: "Variable frequency geared motor drive with direct coupling" },
      { label: "Shell Material", value: "Corrosion-resistant heavy gauge stainless steel" }
    ],
    tabs: [
      {
        title: "Accelerated Hydration",
        content: "Pre-steaming opens up the grain husk micro-pores, allowing soaking water to penetrate the kernel core in half the standard time."
      },
      {
        title: "Continuous Material Flow",
        content: "Heavy-duty internal stainless steel flights gently propel paddy while ensuring maximum steam contact without grain crushing."
      },
      {
        title: "Steam Consumption Reduction",
        content: "By pre-heating paddy with low-pressure flash steam, overall boiler steam demand in subsequent cooking phases is cut by up to 20%."
      },
      {
        title: "Hygienic Design",
        content: "Fully welded food-grade steel casing with quick-access cleanout hatches prevents residue buildup and simplifies sanitization."
      }
    ]
  },
  {
    id: 399,
    slug: "storage-bins",
    name: "Paddy Bins & Storage Silos",
    category: "Storage & Conditioning",
    heroTitle: "Advanced Storage Bins For Efficient Rice Handling & Tempering",
    shortDesc: "Modular galvanized and stainless steel grain storage bins, tempering hoppers, and buffer silos engineered for optimal grain conditioning.",
    fullDesc: `Proper grain resting and tempering between drying passes is crucial to prevent internal kernel stress cracks. Photons Foods Storage Bins and Silos are custom engineered with computerized aeration grids, level sensing, and mass-flow cone discharge to maintain grain quality and streamline plant logistics.`,
    coverImage: "/uploads/2024/09/DJI_0163-scaled.jpg",
    specs: [
      { label: "Storage Capacity", value: "25 Tons to 500 Tons per hopper/silo unit" },
      { label: "Aeration System", value: "High-flow perforated conical ducting with axial ventilation" },
      { label: "Level Monitoring", value: "Capacitance / Radar continuous level sensors" },
      { label: "Discharge Gates", value: "Pneumatic rack-and-pinion slide gates with manual override" }
    ],
    tabs: [
      {
        title: "Moisture Equalization",
        content: "Engineered tempering chambers allow moisture within the grain kernel to migrate evenly from core to surface, preventing fissuring and maximizing head rice recovery."
      },
      {
        title: "Mass-Flow Discharge",
        content: "Steep 60-degree conical bottoms with anti-bridging geometry ensure true first-in, first-out (FIFO) grain movement without dead corners."
      },
      {
        title: "Corrosion Resistant",
        content: "Fabricated with heavy zinc-coated galvanized corrugated steel sheets or 304-grade stainless steel for enduring outdoor durability."
      },
      {
        title: "Safety & Access",
        content: "Equipped with external spiral caged stairways, roof inspection walkways, explosion relief vents, and sampling ports."
      }
    ]
  },
  {
    id: 401,
    slug: "online-moisture-indicators",
    name: "Online Dryers & Moisture Indicators",
    category: "Monitoring & Quality Control",
    heroTitle: "Efficient Online Dryers & Real-Time Moisture Sensing Systems",
    shortDesc: "High-precision inline moisture sensors and micro-dryer conditioning units that continuously monitor and calibrate paddy moisture during processing.",
    fullDesc: `Eliminate guesswork and over-drying losses with Photons Foods Online Moisture Indicators. Utilizing high-frequency dielectric resonance sensors, our systems continuously sample grain streams in real time, instantly communicating with the central PLC to adjust dryer burner output and elevator speeds automatically.`,
    coverImage: "/uploads/2024/09/DJI_0159-scaled.jpg",
    specs: [
      { label: "Measurement Range", value: "9.0% to 35.0% Moisture Content (MC)" },
      { label: "Accuracy", value: "± 0.2% moisture calibration against standard air-oven method" },
      { label: "Sampling Rate", value: "Continuous real-time flow sampling (60 readings / min)" },
      { label: "Output Interfaces", value: "RS-485 Modbus, 4-20mA analog, Ethernet SCADA integration" }
    ],
    tabs: [
      {
        title: "Real-Time Feedback",
        content: "Instantaneous readout of grain moisture and temperature prevents both under-drying (spoilage risk) and over-drying (weight & profit loss)."
      },
      {
        title: "Automatic Dryer Control",
        content: "Directly modulates hot air damper actuators and discharge gate timing to achieve target moisture within ±0.3% across entire production runs."
      },
      {
        title: "Non-Destructive Sensing",
        content: "Continuous capacitive flow cell samples passing paddy streams non-invasively without interrupting production line flow."
      },
      {
        title: "Historical Data Logging",
        content: "Cloud and SCADA-compatible data logging allows mill managers to track drying curves, batch histories, and energy utilization over time."
      }
    ]
  },
  {
    id: 403,
    slug: "conveying-and-elevating-equipment",
    name: "Conveyors & Elevators",
    category: "Material Handling",
    heroTitle: "Intelligent Conveying & Elevating Equipment For Gentle Grain Transfer",
    shortDesc: "Heavy-duty bucket elevators, trough belt conveyors, screw augers, and drag chain conveyors engineered for zero grain breakage and continuous duty.",
    fullDesc: `Grain handling efficiency dictates the throughput and yield of any modern rice mill. Photons Foods manufactures a comprehensive line of heavy-duty bucket elevators and enclosed belt conveyors designed specifically for gentle grain handling, low power consumption, and minimal maintenance down-time.`,
    coverImage: "/uploads/2024/09/Photon-layout-3-1.png",
    specs: [
      { label: "Handling Capacity", value: "10 TPH to 200 TPH custom engineered" },
      { label: "Elevator Belting", value: "Oil and heat resistant multi-ply rubberized polyester belt" },
      { label: "Buckets", value: "High-density seamless Polyethylene / Nylon / Pressed Steel" },
      { label: "Safety Devices", value: "Zero-speed switch, belt misalignment sensor, backstop clutch" }
    ],
    tabs: [
      {
        title: "Zero Breakage Design",
        content: "Slow-speed, high-volume elevator buckets and low-friction transition chutes cushion grain impacts, eliminating kernel cracking during vertical transport."
      },
      {
        title: "Self-Cleaning Boot",
        content: "Curved elevator boot design with minimal dead space prevents grain cross-contamination and bacterial growth during variety changeovers."
      },
      {
        title: "Energy Efficient Drives",
        content: "Direct hollow-shaft shaft-mounted gearboxes paired with IE3 / IE4 premium efficiency electric motors reduce power consumption by up to 22%."
      },
      {
        title: "Dust-Tight Enclosures",
        content: "Precision CNC laser cut casings with neoprene gasketed flanges maintain negative pressure, ensuring a clean, dust-free milling environment."
      }
    ]
  },
  {
    id: 756,
    slug: "final-steel-cooker",
    name: "Final Steel Cooker",
    category: "Hydro-thermal Processing",
    heroTitle: "Durable Final Steel Cooker For Precision Rice Parboiling",
    shortDesc: "High-pressure stainless steel cooking vessels designed for deep, uniform steam penetration and flawless gelatinization of difficult paddy varieties.",
    fullDesc: `The Final Steel Cooker from Photons Foods represents the pinnacle of hydrothermal vessel engineering. Fabricated with thick-gauge boiler quality steel and clad in food-grade SS 304, our cookers deliver deep steam penetration under controlled high pressure, ensuring complete cooking consistency even on thick-hulled and long-grain varieties.`,
    coverImage: "/uploads/2024/09/DJI_0159-scaled.jpg",
    specs: [
      { label: "Operating Pressure", value: "Up to 6.0 Bar design pressure tested at 1.5x rating" },
      { label: "Discharge Gate", value: "High-speed pneumatic quick-dump butterfly / slide door" },
      { label: "Steam Inlets", value: "Surround multi-tier internal steam manifolds with check valves" },
      { label: "Vessel Volume", value: "3.5 m³ to 18 m³ batch sizes" }
    ],
    tabs: [
      {
        title: "Steam-Based Gelatinization",
        content: "High-pressure saturated steam penetrates deep into every grain, completely eliminating chalkiness while imparting uniform amber translucency."
      },
      {
        title: "Automated Pressure Profiling",
        content: "Proportional steam control valves regulate heating ramp rates and hold times to match specific paddy varieties and moisture conditions."
      },
      {
        title: "Rapid Cycle Times",
        content: "Automated pneumatic top loading and bottom discharge gates allow full batch cycles in under 12 minutes, maximizing daily mill throughput."
      },
      {
        title: "Long Lifespan & Safety",
        content: "Equipped with dual ASME certified pressure safety relief valves, interlocked safety doors, and anti-corrosive stainless contact components."
      }
    ]
  },
  {
    id: 758,
    slug: "cooler",
    name: "Cooler",
    category: "Grain Conditioning",
    heroTitle: "Efficient Coolers For Optimal Post-Drying Grain Stabilization",
    shortDesc: "Forced-draft counterflow and crossflow coolers that bring hot dried paddy down to ambient temperature, eliminating condensation during milling.",
    fullDesc: `Hot paddy directly from dryers must be rapidly and uniformly cooled before storage or milling to prevent internal condensation, moisture rebound, and microbial degradation. Photons Foods Coolers utilize high-volume low-velocity ambient airflow to safely stabilize grain temperatures within minutes.`,
    coverImage: "/uploads/2024/09/DJI_0163-scaled.jpg",
    specs: [
      { label: "Cooling Capacity", value: "15 TPH to 80 TPH continuous flow" },
      { label: "Air Volume", value: "High-efficiency aerofoil centrifugal fan (10,000 to 45,000 CFM)" },
      { label: "Temperature Drop", value: "Cools hot grain from 60°C down to within 3°C of ambient" },
      { label: "Discharge Grid", value: "Reciprocating hydraulic grid for uniform column descent" }
    ],
    tabs: [
      {
        title: "Rapid Cooling System",
        content: "High-volume ambient air sweeps across the descending grain bed, transferring heat away rapidly without causing sudden thermal shock or stress cracks."
      },
      {
        title: "Controlled Airflow Distribution",
        content: "Internal baffled louvers ensure uniform air velocity across the entire cross-section, guaranteeing consistent discharge temperature."
      },
      {
        title: "Prevents Moisture Rebound",
        content: "Removing latent heat immediately stops moisture migration inside storage bins, preventing hopper sweating and mold development."
      },
      {
        title: "Integrated Dust Extraction",
        content: "Top-mounted cyclone aspiration hoods capture loose chaff and micro-dust during cooling, improving overall plant hygiene."
      }
    ]
  },
  {
    id: 765,
    slug: "soaking-tanks",
    name: "Soaking Tanks",
    category: "Hydro-thermal Processing",
    heroTitle: "High-Performance Soaking Tanks For Enhanced Rice Preparation",
    shortDesc: "Corrosion-resistant stainless steel soaking tanks with automated warm water circulation and pneumatic bottom discharge.",
    fullDesc: `Optimal soaking is the foundation of quality parboiled rice. Photons Foods Soaking Tanks are engineered with advanced hot water injection manifolds, precision temperature sensors, and rapid draining grids that achieve uniform moisture saturation throughout the batch in record time without souring.`,
    coverImage: "/uploads/2024/09/Photon-layout-3-1.png",
    specs: [
      { label: "Tank Capacity", value: "10 Tons to 60 Tons per tank unit" },
      { label: "Material of Construction", value: "AISI 304 Stainless Steel with smooth internal polish" },
      { label: "Water Heating", value: "Direct steam sparging or external plate heat exchanger" },
      { label: "Drainage", value: "High-capacity perforated stainless strainer false bottom" }
    ],
    tabs: [
      {
        title: "Stainless Steel Construction",
        content: "Constructed from thick SS 304 plates with reinforced structural ribs, offering unmatched resistance to hot water corrosion and acidic fermentation."
      },
      {
        title: "Automated Water Circulation",
        content: "Continuous bottom-to-top water recirculation maintains uniform soaking temperature across all levels of the tank, preventing uneven batches."
      },
      {
        title: "Shortened Soaking Cycles",
        content: "Precision thermal control at 65°C to 72°C reduces soaking time from traditional 24 hours down to just 3 to 4 hours without off-flavors."
      },
      {
        title: "Fast Draining & Emptying",
        content: "Perforated bottom strainers allow rapid water evacuation in under 3 minutes, readying paddy for immediate transfer to the cooker."
      }
    ]
  },
  {
    id: 767,
    slug: "automation",
    name: "Automation Systems",
    category: "Plant Automation & SCADA",
    heroTitle: "Smart Automation Machines For Streamlined Rice Milling",
    shortDesc: "Complete turnkey PLC, HMI, and SCADA automation architectures that digitize and synchronize your entire rice processing operation.",
    fullDesc: `Transform your rice milling facility into an intelligent, data-driven plant with Photons Foods Automation Solutions. From automatic grain routing and dryer burner modulation to batch tracking, power monitoring, and remote mobile supervision, our smart control panels maximize plant uptime, safety, and profitability.`,
    coverImage: "/uploads/2024/09/DJI_0159-scaled.jpg",
    specs: [
      { label: "PLC Hardware", value: "Siemens S7-1500 / Allen-Bradley / Schneider Electric" },
      { label: "SCADA Software", value: "Wonderware / WinCC / Ignition SCADA with customized plant UI" },
      { label: "Connectivity", value: "Profinet, Modbus TCP, OPC UA, Cloud IoT Gateway" },
      { label: "Control Cabinet", value: "IP55 / NEMA 4 double-door dust-proof panel with air conditioning" }
    ],
    tabs: [
      {
        title: "Integrated PLC, HMI & SCADA",
        content: "Centralized industrial touchscreens provide comprehensive plant visualization, real-time machine status, motor current draw, and alarm management."
      },
      {
        title: "Automated Process Sequences",
        content: "One-touch recipe selection automatically coordinates elevator interlocks, valve positions, steam pressures, and dryer speeds for flawless batch runs."
      },
      {
        title: "Data Logging & Diagnostics",
        content: "Continuous logging of throughput, fuel usage, moisture levels, and runtime hours enables predictive maintenance and deep operational insights."
      },
      {
        title: "Remote Monitoring & Mobile Alerts",
        content: "Secure cloud access allows mill owners and chief engineers to monitor live plant KPIs, production tallies, and critical alerts directly from their smartphones."
      }
    ]
  }
];

export const ABOUT_DATA = {
  heroTitle: "Leading the Way in Paddy Processing Innovation",
  story: `At the crossroads of tradition and innovation, Photons Food Processing Engineers has been revolutionizing rice milling since 1984. Based in Brahmnagudem Village, East Godavari District, Andhra Pradesh—the heartland of India's rice granary—we have grown into one of the country's most trusted manufacturers of heavy-duty grain handling and processing machinery.`,
  vision: "To be the global benchmark in grain processing technology by pioneering energy-efficient, zero-waste machinery that maximizes yield for rice millers worldwide.",
  mission: "To engineer precision machinery that preserves grain quality, drastically reduces operational energy costs, and empowers agro-industrial enterprises with intelligent automation.",
  values: [
    { title: "Precision Engineering", desc: "Every component is designed with micro-tolerance laser cutting, dynamic balancing, and certified food-grade materials." },
    { title: "Sustainable Efficiency", desc: "Our thermal and airflow innovations reduce steam and electricity consumption by up to 28% across processing lines." },
    { title: "Customer-Centric Innovation", desc: "We design tailored solutions addressing the distinct requirements of diverse paddy varieties and regional climates." },
    { title: "Lifetime Reliability", desc: "Robust industrial builds tested for continuous 24/7 harvest season operations with minimal maintenance overhead." }
  ],
  milestones: [
    {
      year: "1985–1990",
      title: "Launch of Semi-Automatic Systems",
      desc: "Photons introduced manually operated semi-automatic rice milling systems, helping mills improve productivity and operational efficiency.",
      keyAchievement: "Transition from traditional milling methods to semi-automated operations.",
      callouts: ["SEMI-AUTOMATIC", "MANUAL CONTROLS", "PRODUCTIVITY BOOST"],
      image: "/milestones/01_1985-1990_Launch_of_Semi-Automatic_Systems_ORIGINAL.png"
    },
    {
      year: "1990–1995",
      title: "Introduction of Husk-Fired Boilers",
      desc: "Photons developed eco-friendly husk-fired boiler systems that utilized rice husk as a renewable fuel source, helping reduce energy costs.",
      keyAchievement: "Sustainable energy solutions for rice mills.",
      callouts: ["ECO-FRIENDLY", "RENEWABLE FUEL", "ENERGY SAVINGS"],
      image: "/milestones/02_1990-1995_Introduction_of_Husk-Fired_Boilers_ORIGINAL.png"
    },
    {
      year: "1995–2000",
      title: "Batch Parboiling System Developments",
      desc: "Photons introduced advanced batch parboiling systems to improve grain quality, consistency, and overall processing efficiency.",
      keyAchievement: "Enhanced rice quality through controlled parboiling processes.",
      callouts: ["BATCH PARBOILING", "GRAIN QUALITY", "CONSISTENCY"],
      image: "/milestones/03_1995-2000_Batch_Parboiling_System_Developments_ORIGINAL.png"
    },
    {
      year: "2000–2005",
      title: "Transition to Fully Automated Systems",
      desc: "Photons launched fully automated parboiling solutions designed to streamline operations and minimize manual intervention.",
      keyAchievement: "Increased plant productivity and operational reliability.",
      callouts: ["PROCESS CONTROL", "AUTOMATION", "PERFORMANCE AUTOMATION"],
      image: "/milestones/04_2000-2005_Transition_to_Fully_Automated_Systems_ORIGINAL.png"
    },
    {
      year: "2005–2010",
      title: "Precision Drying Technology",
      desc: "Photons developed precision-controlled drying systems with advanced temperature management for uniform grain drying and reduced damage.",
      keyAchievement: "Improved product quality and reduced post-processing losses.",
      callouts: ["TEMPERATURE CONTROL", "REAL TIME SENSORS", "REDUCED DAMAGE"],
      image: "/milestones/05_2005-2010_Precision_Drying_Technology_ORIGINAL.png"
    },
    {
      year: "2010–2015",
      title: "Introduction of Fluidized Bed Dryers",
      desc: "Photons introduced high-performance fluidized bed dryers capable of delivering faster, more uniform, and energy-efficient drying.",
      keyAchievement: "Significant reduction in drying time with improved consistency.",
      callouts: ["UNIFORM HEAT DISTRIBUTION", "ENERGY EFFICIENT DESIGN", "CONSISTENT DRYING PERFORMANCE"],
      image: "/milestones/06_2010-2015_Introduction_of_Fluidized_Bed_Dryers_ORIGINAL.png"
    },
    {
      year: "2015–2020",
      title: "Heat Recovery Systems",
      desc: "Photons implemented energy-efficient heat recovery solutions that captured and reused waste heat, reducing steam consumption and operating costs.",
      keyAchievement: "Enhanced energy efficiency across rice processing plants.",
      callouts: ["REDUCED STEAM", "REDUCED OPERATING COST", "REUSED WASTE HEAT"],
      image: "/milestones/07_2015-2020_Heat_Recovery_Systems_ORIGINAL.png"
    },
    {
      year: "2020–2026",
      title: "AI-Based Automation & IoT Monitoring",
      desc: "Photons integrated Artificial Intelligence and IoT-enabled monitoring systems to provide real-time insights, predictive maintenance, and optimized plant performance.",
      keyAchievement: "Smart manufacturing solutions shaping the future of rice milling.",
      callouts: ["REAL-TIME INSIGHTS", "CLOUD CONNECTIVITY", "IOT SENSORS"],
      image: "/milestones/08_2020-2026_AI-Based_Automation_and_IoT_Monitoring_ORIGINAL.png"
    },
    {
      year: "2020–2026",
      title: "Advanced Engineering & Automation Systems",
      desc: "Photons advanced its machinery range with Jumbo Dryers, Air Damper Systems, Dust Scrubber Systems, and Paraboiled Dryers with Pneumatic Discharge. Built for higher efficiency, cleaner operations, smoother discharge, and smarter plant automation.",
      keyAchievement: "Future-ready systems for improved performance, precision, and productivity.",
      callouts: ["JUMBO DRYERS", "AIR DAMPER SYSTEMS", "DUST SCRUBBERS", "PNEUMATIC DISCHARGE"],
      image: "/milestones/08_2020-2026_AI-Based_Automation_and_IoT_Monitoring_ORIGINAL.png"
    }
  ]
};

export const ACHIEVEMENTS_DATA = {
  title: "Achievements & Milestones",
  subtitle: "Discover the milestones, certifications, and industry recognitions that reflect our dedication, innovation, and commitment to excellence.",
  iso: {
    title: "ISO 9001:2015 Certified",
    desc: "At Photons Foods, we take pride in our steadfast commitment to quality and engineering excellence, validated through our certified ISO 9001:2015 Quality Management System.",
    certificateImg: "/uploads/2024/09/ISO-certificate-Photons-food.png"
  },
  highlights: [
    { number: "500+", title: "Commercial Installations", desc: "Over five hundred high-capacity rice mills and processing plants powered by Photons machinery across India." },
    { number: "40+", title: "Years of Trust", desc: "Four decades of unyielding engineering leadership, trusted by generations of rice millers." },
    { number: "28%", title: "Energy Savings", desc: "Proprietary suction and heat exchanger designs saving millions in industrial fuel and power bills." },
    { number: "99.4%", title: "Head Rice Yield", desc: "Industry-leading gentle grain handling achieving maximum whole-kernel milling recovery rates." }
  ]
};

export const EVENTS_DATA = [
  {
    id: 1,
    title: "International Grain Tech Expo 2024",
    location: "Hyderabad, India",
    date: "November 2024",
    desc: "Showcasing Photons Food's next-generation SCADA smart automation and high-efficiency suction drying plants.",
    image: "/uploads/2024/09/DJI_0159-scaled.jpg"
  },
  {
    id: 2,
    title: "Agro Milling & Grain Processing Summit",
    location: "Vijayawada, Andhra Pradesh",
    date: "August 2024",
    desc: "Live demonstration of our continuous stainless steel parboiling vessels and online moisture indicators.",
    image: "/uploads/2024/09/Photon-layout-3-1.png"
  },
  {
    id: 3,
    title: "National Rice Millers Conference & Exhibition",
    location: "Kakinada, India",
    date: "February 2024",
    desc: "Keynote presentation on reducing milling breakage through gentle hydrothermal tempering and cooling.",
    image: "/uploads/2024/09/DJI_0163-scaled.jpg"
  }
];

export const BLOGS_DATA = [
  {
    id: 1,
    slug: "optimizing-paddy-drying-efficiency",
    title: "How Advanced Suction Drying Reduces Broken Rice & Boosts Milling Profits",
    date: "September 24, 2024",
    author: "Engineering Team",
    category: "Grain Technology",
    excerpt: "Learn how suction airflow dynamics prevent thermal micro-cracks during paddy drying, maximizing whole head rice yield.",
    image: "/uploads/2024/09/DJI_0163-scaled.jpg",
    content: `Rice milling profitability is overwhelmingly determined by Head Rice Yield (HRY)—the percentage of whole unbroken kernels after hulling and whitening. Traditional blow-type dryers often subject grains to uneven thermal blasts, creating moisture differentials between the kernel outer shell and core. This internal tension creates micro-fissures that shatter during milling.

With Photons Foods' Suction Drying System, warm air is drawn inward through the descending grain column under controlled negative pressure. This ensures:
1. Gradual, uniform moisture evacuation from core to hull.
2. No thermal hotspot formation.
3. Lower furnace heat requirements, saving substantial biomass or husk fuel.
4. Consistent moisture reduction across the entire batch within ±0.2%.`
  },
  {
    id: 2,
    slug: "modern-hydrothermal-parboiling-methods",
    title: "The Science of Modern Parboiling: Achieving Zero White-Belly and Premium Color",
    date: "September 18, 2024",
    author: "Photons R&D",
    category: "Hydro-thermal Processing",
    excerpt: "An in-depth look at pressure cooking, rapid hot soaking, and starch gelatinization parameters for export-grade parboiled rice.",
    image: "/uploads/2024/09/Photon-layout-3-1.png",
    content: `Parboiling is more than just cooking paddy—it is a sophisticated hydrothermal transformation that changes the crystal structure of rice starch into an amorphous, resilient matrix.

Key requirements for export-quality parboiled rice:
- Complete Gelatinization: Ensuring no chalky 'white belly' remains at the center of the grain.
- Controlled Steam Pressure: Utilizing 3.5 to 5.0 bar saturated steam in closed stainless steel pressure vessels.
- Odor Prevention: Rapid hot water soaking at 70°C prevents bacterial fermentation, giving the final rice a clean, neutral aroma.
- Nutrient Retention: Water-soluble vitamins in the bran layer are driven deep into the starchy endosperm, creating a more nutritious product.`
  },
  {
    id: 3,
    slug: "scada-plant-automation-in-rice-milling",
    title: "Why Modern Rice Mills Are Transitioning to Integrated PLC & SCADA Automation",
    date: "September 10, 2024",
    author: "Automation Division",
    category: "Plant Automation",
    excerpt: "Discover how digitized recipe controls, motor interlocks, and real-time grain moisture tracking increase milling capacity by 35%.",
    image: "/uploads/2024/09/DJI_0159-scaled.jpg",
    content: `Modern grain processing demands uncompromised consistency, rapid cycle turnaround, and tight energy management. Traditional manual mills rely heavily on operator intuition, resulting in wide batch-to-batch variations.

With Photons Smart Plant Automation:
- Automated Sequencing: Elevators, conveyors, soaking valves, and steam valves trigger in synchronized harmony.
- Real-time Diagnostics: Motor overload warnings, belt slip detection, and bin level indicators prevent costly choke-ups.
- Cloud Supervision: Mill owners can view daily production tallies, boiler steam consumption, and dryer performance directly on smartphone dashboards.`
  }
];
