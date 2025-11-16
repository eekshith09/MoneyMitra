
import type { Language } from '../types';

export const lessons = [
  {
    id: 1,
    title: {
      english: 'What is UPI?',
      hindi: 'UPI क्या है?',
      telugu: 'UPI అంటే ఏమిటి?',
    },
    duration: 5,
    coins: 50,
    category: 'UPI',
    difficulty: 'Beginner',
    steps: [
      {
        title: {
          english: 'Introduction to UPI',
          hindi: 'UPI का परिचय',
          telugu: 'UPI పరిచయం',
        },
        image: 'https://picsum.photos/seed/upi1/400/200',
        content: {
          english: 'UPI stands for Unified Payments Interface. It lets you send and receive money instantly from your bank account using just your phone.',
          hindi: 'UPI का मतलब यूनिफाइड पेमेंट्स इंटरफेस है। यह आपको सिर्फ अपने फोन का उपयोग करके तुरंत अपने बैंक खाते से पैसे भेजने और प्राप्त करने की सुविधा देता है।',
          telugu: 'UPI అంటే యూనిఫైడ్ పేమెంట్స్ ఇంటర్‌ఫేస్. ఇది మీ ఫోన్‌ను ఉపయోగించి మీ బ్యాంక్ ఖాతా నుండి తక్షణమే డబ్బు పంపడానికి మరియు స్వీకరించడానికి మిమ్మల్ని అనుమతిస్తుంది.',
        },
      },
      {
        title: {
          english: 'Benefits of UPI',
          hindi: 'UPI के लाभ',
          telugu: 'UPI యొక్క ప్రయోజనాలు',
        },
        image: 'https://picsum.photos/seed/upi2/400/200',
        content: {
          english: 'It is fast, secure, and works 24/7. You don\'t need to share your bank account details, only your UPI ID (like driver@okupi).',
          hindi: 'यह तेज़, सुरक्षित है, और 24/7 काम करता है। आपको अपने बैंक खाते का विवरण साझा करने की आवश्यकता नहीं है, केवल आपकी UPI आईडी (जैसे driver@okupi) की आवश्यकता है।',
          telugu: 'ఇది వేగవంతమైనది, సురక్షితమైనది మరియు 24/7 పనిచేస్తుంది. మీరు మీ బ్యాంక్ ఖాతా వివరాలను పంచుకోవాల్సిన అవసరం లేదు, కేవలం మీ UPI ID (ఉదాహరణకు driver@okupi) మాత్రమే.',
        },
      },
      {
        title: {
          english: 'Popular UPI Apps',
          hindi: 'लोकप्रिय UPI ऐप्स',
          telugu: 'ప్రసిద్ధ UPI యాప్‌లు',
        },
        image: 'https://picsum.photos/seed/upi3/400/200',
        content: {
          english: 'Many apps like Google Pay, PhonePe, and Paytm use UPI. You can use any of them to make payments.',
          hindi: 'Google Pay, PhonePe, और Paytm जैसे कई ऐप्स UPI का उपयोग करते हैं। आप भुगतान करने के लिए उनमें से किसी का भी उपयोग कर सकते हैं।',
          telugu: 'Google Pay, PhonePe, మరియు Paytm వంటి అనేక యాప్‌లు UPIని ఉపయోగిస్తాయి. చెల్లింపులు చేయడానికి మీరు వాటిలో దేనినైనా ఉపయోగించవచ్చు.',
        },
      },
    ],
  },
  {
    id: 2,
    title: {
      english: 'Creating UPI PIN',
      hindi: 'UPI पिन बनाना',
      telugu: 'UPI పిన్ సృష్టించడం',
    },
    duration: 7,
    coins: 60,
    category: 'Security',
    difficulty: 'Beginner',
    steps: [
       {
        title: {
          english: 'What is a UPI PIN?',
          hindi: 'UPI पिन क्या है?',
          telugu: 'UPI పిన్ అంటే ఏమిటి?',
        },
        image: 'https://picsum.photos/seed/pin1/400/200',
        content: {
          english: 'A UPI PIN is a 4 or 6-digit secret number you create. You must enter this PIN for every UPI transaction. It is like an ATM PIN.',
          hindi: 'UPI पिन एक 4 या 6 अंकों का गुप्त नंबर है जिसे आप बनाते हैं। आपको हर UPI लेनदेन के लिए यह पिन दर्ज करना होगा। यह एक एटीएम पिन की तरह है।',
          telugu: 'UPI పిన్ అనేది మీరు సృష్టించే 4 లేదా 6-అంకెల రహస్య సంఖ్య. ప్రతి UPI లావాదేవీకి మీరు ఈ పిన్‌ను నమోదు చేయాలి. ఇది ATM పిన్ లాంటిది.',
        },
      },
      {
        title: {
          english: 'Setting Your PIN',
          hindi: 'अपना पिन सेट करना',
          telugu: 'మీ పిన్‌ను సెట్ చేయడం',
        },
        image: 'https://picsum.photos/seed/pin2/400/200',
        content: {
          english: 'When you link a bank account to a UPI app for the first time, it will ask you to set a UPI PIN using your debit card details and an OTP.',
          hindi: 'जब आप पहली बार किसी बैंक खाते को UPI ऐप से लिंक करते हैं, तो यह आपको अपने डेबिट कार्ड विवरण और एक OTP का उपयोग करके UPI पिन सेट करने के लिए कहेगा।',
          telugu: 'మీరు మొదటిసారిగా బ్యాంక్ ఖాతాను UPI యాప్‌కి లింక్ చేసినప్పుడు, మీ డెబిట్ కార్డ్ వివరాలు మరియు OTPని ఉపయోగించి UPI పిన్‌ను సెట్ చేయమని మిమ్మల్ని అడుగుతుంది.',
        },
      },
       {
        title: {
          english: 'Keep it Secret!',
          hindi: 'इसे गुप्त रखें!',
          telugu: 'దీన్ని రహస్యంగా ఉంచండి!',
        },
        image: 'https://picsum.photos/seed/pin3/400/200',
        content: {
          english: 'NEVER share your UPI PIN with anyone. No bank employee, police officer, or app will ever ask for your PIN.',
          hindi: 'अपना UPI पिन कभी किसी के साथ साझा न करें। कोई भी बैंक कर्मचारी, पुलिस अधिकारी या ऐप कभी भी आपका पिन नहीं पूछेगा।',
          telugu: 'మీ UPI పిన్‌ను ఎవరితోనూ పంచుకోవద్దు. ఏ బ్యాంక్ ఉద్యోగి, పోలీసు అధికారి లేదా యాప్ మీ పిన్‌ను ఎప్పుడూ అడగరు.',
        },
      },
    ],
  },
  {
    id: 3,
    title: {
        english: 'Scanning QR Codes',
        hindi: 'QR कोड स्कैन करना',
        telugu: 'QR కోడ్‌లను స్కాన్ చేస్తోంది',
    },
    duration: 5,
    coins: 50,
    category: 'UPI',
    difficulty: 'Intermediate',
    steps: [
        {
            title: {
                english: 'What is a QR Code?',
                hindi: 'QR कोड क्या है?',
                telugu: 'QR కోడ్ అంటే ఏమిటి?',
            },
            image: 'https://picsum.photos/seed/qr1/400/200',
            content: {
                english: 'A QR code is a black and white square pattern. Shops use it to receive payments easily. You just need to scan it with your UPI app.',
                hindi: 'QR कोड एक काले और सफेद वर्गाकार पैटर्न है। दुकानें इसका उपयोग आसानी से भुगतान प्राप्त करने के लिए करती हैं। आपको बस इसे अपने UPI ऐप से स्कैन करना है।',
                telugu: 'QR కోడ్ అనేది నలుపు మరియు తెలుపు చదరపు నమూనా. దుకాణాలు సులభంగా చెల్లింపులను స్వీకరించడానికి దీనిని ఉపయోగిస్తాయి. మీరు మీ UPI యాప్‌తో దాన్ని స్కాన్ చేస్తే చాలు.',
            },
        },
        {
            title: {
                english: 'How to Scan',
                hindi: 'कैसे स्कैन करें',
                telugu: 'స్కాన్ చేయడం ఎలా',
            },
            image: 'https://picsum.photos/seed/qr2/400/200',
            content: {
                english: 'Open your UPI app and tap the "Scan" or "Scan QR" button. Point your phone\'s camera at the QR code.',
                hindi: 'अपना UPI ऐप खोलें और "स्कैन" या "स्कैन QR" बटन पर टैप करें। अपने फोन के कैमरे को QR कोड पर इंगित करें।',
                telugu: 'మీ UPI యాప్‌ని తెరిచి, "స్కాన్" లేదా "స్కాన్ QR" బటన్‌పై నొక్కండి. మీ ఫోన్ కెమెరాను QR కోడ్‌పై గురి పెట్టండి.',
            },
        },
        {
            title: {
                english: 'Enter Amount and Pay',
                hindi: 'राशि दर्ज करें और भुगतान करें',
                telugu: 'మొత్తం నమోదు చేసి చెల్లించండి',
            },
            image: 'https://picsum.photos/seed/qr3/400/200',
            content: {
                english: 'After scanning, the shop\'s name will appear. Enter the amount, then enter your secret UPI PIN to complete the payment.',
                hindi: 'स्कैन करने के बाद, दुकान का नाम दिखाई देगा। राशि दर्ज करें, फिर भुगतान पूरा करने के लिए अपना गुप्त UPI पिन दर्ज करें।',
                telugu: 'స్కాన్ చేసిన తర్వాత, దుకాణం పేరు కనిపిస్తుంది. మొత్తాన్ని నమోదు చేయండి, ఆపై చెల్లింపును పూర్తి చేయడానికి మీ రహస్య UPI పిన్‌ను నమోదు చేయండి.',
            },
        },
    ],
  },
  {
    id: 4,
    title: {
        english: 'Fraud Prevention',
        hindi: 'धोखाधड़ी से बचाव',
        telugu: 'మోసం నివారణ',
    },
    duration: 8,
    coins: 70,
    category: 'Security',
    difficulty: 'Advanced',
    steps: [
        {
            title: {
                english: 'Never Share PIN or OTP',
                hindi: 'पिन या ओटीपी कभी साझा न करें',
                telugu: 'పిన్ లేదా OTPని ఎప్పుడూ పంచుకోవద్దు',
            },
            image: 'https://picsum.photos/seed/fraud1/400/200',
            content: {
                english: 'The most important rule: Your UPI PIN and OTPs are secret. Anyone asking for them is a fraud.',
                hindi: 'सबसे महत्वपूर्ण नियम: आपका UPI पिन और OTP गुप्त हैं। उन्हें मांगने वाला कोई भी व्यक्ति धोखेबाज है।',
                telugu: 'అత్యంత ముఖ్యమైన నియమం: మీ UPI పిన్ మరియు OTPలు రహస్యం. వాటిని అడిగే ఎవరైనా మోసగాడు.',
            },
        },
        {
            title: {
                english: 'Beware of Fake Calls/SMS',
                hindi: 'फर्जी कॉल/एसएमएस से सावधान रहें',
                telugu: 'నకిలీ కాల్స్/SMSల పట్ల జాగ్రత్త వహించండి',
            },
            image: 'https://picsum.photos/seed/fraud2/400/200',
            content: {
                english: 'Fraudsters may call pretending to be from a bank or lottery. They will ask for your details to steal money. Do not believe them.',
                hindi: 'धोखेबाज बैंक या लॉटरी से होने का नाटक करके कॉल कर सकते हैं। वे पैसे चुराने के लिए आपका विवरण मांगेंगे। उन पर विश्वास न करें।',
                telugu: 'మోసగాళ్లు బ్యాంక్ లేదా లాటరీ నుండి వచ్చినట్లు నటిస్తూ కాల్ చేయవచ్చు. వారు డబ్బు దొంగిలించడానికి మీ వివరాలను అడుగుతారు. వారిని నమ్మవద్దు.',
            },
        },
        {
            title: {
                english: 'Check Before You Pay',
                hindi: 'भुगतान करने से पहले जांच लें',
                telugu: 'చెల్లించే ముందు తనిఖీ చేయండి',
            },
            image: 'https://picsum.photos/seed/fraud3/400/200',
            content: {
                english: 'When scanning a QR code or entering a UPI ID, always check if the name matches the person or shop you are paying.',
                hindi: 'QR कोड स्कैन करते समय या UPI आईडी दर्ज करते समय, हमेशा जांचें कि नाम उस व्यक्ति या दुकान से मेल खाता है जिसे आप भुगतान कर रहे हैं।',
                telugu: 'QR కోడ్‌ను స్కాన్ చేస్తున్నప్పుడు లేదా UPI IDని నమోదు చేస్తున్నప్పుడు, మీరు చెల్లిస్తున్న వ్యక్తి లేదా దుకాణం పేరుతో సరిపోలుతుందో లేదో ఎల్లప్పుడూ తనిఖీ చేయండి.',
            },
        },
    ],
  },
  {
    id: 5,
    title: {
        english: 'Checking Bank Balance',
        hindi: 'बैंक बैलेंस की जाँच',
        telugu: 'బ్యాంక్ బ్యాలెన్స్ తనిఖీ',
    },
    duration: 5,
    coins: 50,
    category: 'Banking',
    difficulty: 'Intermediate',
    steps: [
        {
            title: {
                english: 'Using Your UPI App',
                hindi: 'अपने UPI ऐप का उपयोग करना',
                telugu: 'మీ UPI యాప్‌ని ఉపయోగించడం',
            },
            image: 'https://picsum.photos/seed/bal1/400/200',
            content: {
                english: 'Most UPI apps have a "Check Balance" or "Bank Balance" option. Tap it, select your bank, and enter your UPI PIN to see your balance.',
                hindi: 'अधिकांश UPI ऐप्स में "बैलेंस जांचें" या "बैंक बैलेंस" का विकल्प होता है। इसे टैप करें, अपना बैंक चुनें, और अपना बैलेंस देखने के लिए अपना UPI पिन दर्ज करें।',
                telugu: 'చాలా UPI యాప్‌లలో "బ్యాలెన్స్ తనిఖీ" లేదా "బ్యాంక్ బ్యాలెన్స్" ఎంపిక ఉంటుంది. దాన్ని నొక్కండి, మీ బ్యాంక్‌ని ఎంచుకుని, మీ బ్యాలెన్స్‌ను చూడటానికి మీ UPI పిన్‌ను నమోదు చేయండి.',
            },
        },
        {
            title: {
                english: 'Missed Call Service',
                hindi: 'मिस्ड कॉल सेवा',
                telugu: 'మిస్డ్ కాల్ సర్వీస్',
            },
            image: 'https://picsum.photos/seed/bal2/400/200',
            content: {
                english: 'Many banks offer a missed call service. Save your bank\'s balance inquiry number and give a missed call from your registered mobile number to get an SMS with your balance.',
                hindi: 'कई बैंक मिस्ड कॉल सेवा प्रदान करते हैं। अपने बैंक का बैलेंस पूछताछ नंबर सहेजें और अपने पंजीकृत मोबाइल नंबर से मिस्ड कॉल दें ताकि आपको अपने बैलेंस के साथ एक एसएमएस मिल सके।',
                telugu: 'చాలా బ్యాంకులు మిస్డ్ కాల్ సేవను అందిస్తాయి. మీ బ్యాంక్ బ్యాలెన్స్ విచారణ నంబర్‌ను సేవ్ చేసి, మీ బ్యాలెన్స్‌తో SMS పొందడానికి మీ రిజిస్టర్డ్ మొబైల్ నంబర్ నుండి మిస్డ్ కాల్ ఇవ్వండి.',
            },
        },
        {
            title: {
                english: 'SMS Banking',
                hindi: 'एसएमएस बैंकिंग',
                telugu: 'SMS బ్యాంకింగ్',
            },
            image: 'https://picsum.photos/seed/bal3/400/200',
            content: {
                english: 'You can also send an SMS like "BAL" to your bank\'s designated number to receive your account balance.',
                hindi: 'आप अपने खाते की शेष राशि प्राप्त करने के लिए अपने बैंक के निर्धारित नंबर पर "BAL" जैसा एसएमएस भी भेज सकते हैं।',
                telugu: 'మీరు మీ ఖాతా బ్యాలెన్స్‌ను స్వీకరించడానికి మీ బ్యాంక్ యొక్క నిర్దేశిత నంబర్‌కు "BAL" వంటి SMS కూడా పంపవచ్చు.',
            },
        },
    ],
  }
];
