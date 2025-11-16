
import type { QuizQuestion, Language } from '../types';

const questions: { [key in Language]: QuizQuestion[] } = {
  english: [
    {
      id: 1,
      question: "What is the most important thing to keep secret for UPI payments?",
      options: ["Phone Number", "UPI PIN", "Name", "QR Code"],
      correctAnswerIndex: 1,
      explanation: {
        correct: "Your UPI PIN is like your ATM PIN. It authorizes payments from your account. Never share it with anyone.",
        incorrect: [
          "Your phone number is often public and needed to receive payments.",
          "Your UPI PIN is the secret key. Never share it.",
          "Your name is not a secret and is often displayed to confirm payments.",
          "A QR code is for receiving money and is safe to share."
        ],
      },
    },
    {
      id: 2,
      question: "What should you do if someone calls and asks for your OTP to win a lottery?",
      options: ["Share the OTP to get the prize", "Ask them to call later", "Disconnect the call immediately", "Share only half the OTP"],
      correctAnswerIndex: 2,
      explanation: {
        correct: "This is a common scam. Never share your OTP. Disconnect the call immediately and block the number.",
        incorrect: [
          "Sharing OTP will lead to money being stolen from your account. It's a scam.",
          "Engaging with scammers is risky. It's best to disconnect immediately.",
          "This is a scam. Any engagement is risky.",
          "Sharing any part of an OTP is dangerous. Never do it."
        ]
      },
    },
    {
        id: 3,
        question: "To receive money using UPI, you need to...",
        options: ["Enter your UPI PIN", "Scan a QR code", "Share your UPI ID or QR code", "Approve a payment request"],
        correctAnswerIndex: 2,
        explanation: {
            correct: "To receive money, you just need to share your UPI ID or show your QR code. You NEVER need to enter your PIN to receive money.",
            incorrect: [
                "You only enter your UPI PIN to SEND money, not to receive it. This is a common scam.",
                "Scanning a QR code is for SENDING money, not receiving.",
                "Sharing your details is the correct way to receive funds.",
                "You only approve requests to SEND money."
            ],
        },
    },
    {
        id: 4,
        question: "When scanning a QR code at a shop, what should you verify before entering your PIN?",
        options: ["The shopkeeper's age", "The name of the shop displayed on the app", "The color of the QR code", "The time of day"],
        correctAnswerIndex: 1,
        explanation: {
            correct: "After scanning, your app will show the name of the person or shop. Always verify it's the correct one before proceeding.",
            incorrect: [
                "The shopkeeper's age is irrelevant to the payment.",
                "Verifying the recipient's name is crucial to avoid paying the wrong person.",
                "The color of the QR code does not matter.",
                "The time of day is irrelevant to the payment verification."
            ],
        },
    },
    {
      id: 5,
      question: "Which of these is a safe digital habit?",
      options: ["Saving your UPI PIN in your phone contacts", "Using public WiFi for financial transactions", "Regularly checking your transaction history", "Sharing your PIN with a trusted friend"],
      correctAnswerIndex: 2,
      explanation: {
          correct: "Regularly checking your transaction history helps you spot any unauthorized payments quickly.",
          incorrect: [
              "Never write down or save your PIN anywhere. It should only be in your memory.",
              "Public WiFi can be insecure. Avoid using it for financial transactions.",
              "Never share your PIN with anyone, no matter how much you trust them."
          ],
      },
    }
  ],
  hindi: [
    {
      id: 1,
      question: "UPI भुगतान के लिए सबसे महत्वपूर्ण चीज़ क्या है जिसे गुप्त रखना चाहिए?",
      options: ["फ़ोन नंबर", "UPI पिन", "नाम", "QR कोड"],
      correctAnswerIndex: 1,
      explanation: {
        correct: "आपका UPI पिन आपके एटीएम पिन की तरह है। यह आपके खाते से भुगतान को अधिकृत करता है। इसे कभी किसी के साथ साझा न करें।",
        incorrect: [
          "आपका फ़ोन नंबर अक्सर सार्वजनिक होता है और भुगतान प्राप्त करने के लिए आवश्यक होता है।",
          "आपका UPI पिन गुप्त कुंजी है। इसे कभी साझा न करें।",
          "आपका नाम कोई रहस्य नहीं है और भुगतान की पुष्टि के लिए अक्सर प्रदर्शित किया जाता है।",
          "QR कोड पैसे प्राप्त करने के लिए होता है और इसे साझा करना सुरक्षित है।"
        ],
      },
    },
    {
      id: 2,
      question: "यदि कोई आपको लॉटरी जीतने के लिए आपका OTP मांगने के लिए कॉल करता है तो आपको क्या करना चाहिए?",
      options: ["पुरस्कार पाने के लिए OTP साझा करें", "उन्हें बाद में कॉल करने के लिए कहें", "तुरंत कॉल काट दें", "केवल आधा OTP साझा करें"],
      correctAnswerIndex: 2,
      explanation: {
        correct: "यह एक आम घोटाला है। अपना OTP कभी साझा न करें। तुरंत कॉल काट दें और नंबर को ब्लॉक कर दें।",
        incorrect: [
          "OTP साझा करने से आपके खाते से पैसे चोरी हो जाएंगे। यह एक घोटाला है।",
          "धोखेबाजों से बात करना जोखिम भरा है। तुरंत कॉल काट देना सबसे अच्छा है।",
          "यह एक घोटाला है। कोई भी बातचीत जोखिम भरी है।",
          "OTP का कोई भी हिस्सा साझा करना खतरनाक है। ऐसा कभी न करें।"
        ]
      },
    },
    {
      id: 3,
      question: "UPI का उपयोग करके पैसे प्राप्त करने के लिए, आपको...",
      options: ["अपना UPI पिन दर्ज करना होगा", "एक QR कोड स्कैन करना होगा", "अपनी UPI आईडी या QR कोड साझा करना होगा", "एक भुगतान अनुरोध को मंजूरी देनी होगी"],
      correctAnswerIndex: 2,
      explanation: {
          correct: "पैसे प्राप्त करने के लिए, आपको बस अपनी UPI आईडी साझा करनी होगी या अपना QR कोड दिखाना होगा। पैसे प्राप्त करने के लिए आपको कभी भी अपना पिन दर्ज करने की आवश्यकता नहीं होती है।",
          incorrect: [
              "आप केवल पैसे भेजने के लिए अपना UPI पिन दर्ज करते हैं, प्राप्त करने के लिए नहीं। यह एक आम घोटाला है।",
              "QR कोड स्कैन करना पैसे भेजने के लिए है, प्राप्त करने के लिए नहीं।",
              "धन प्राप्त करने का सही तरीका अपनी जानकारी साझा करना है।",
              "आप केवल पैसे भेजने के अनुरोधों को मंजूरी देते हैं।"
          ],
      },
    },
    {
      id: 4,
      question: "किसी दुकान पर QR कोड स्कैन करते समय, अपना पिन दर्ज करने से पहले आपको क्या सत्यापित करना चाहिए?",
      options: ["दुकानदार की उम्र", "ऐप पर प्रदर्शित दुकान का नाम", "QR कोड का रंग", "दिन का समय"],
      correctAnswerIndex: 1,
      explanation: {
          correct: "स्कैन करने के बाद, आपका ऐप व्यक्ति या दुकान का नाम दिखाएगा। आगे बढ़ने से पहले हमेशा सत्यापित करें कि यह सही है।",
          incorrect: [
              "दुकानदार की उम्र भुगतान के लिए अप्रासंगिक है।",
              "गलत व्यक्ति को भुगतान करने से बचने के लिए प्राप्तकर्ता के नाम का सत्यापन महत्वपूर्ण है।",
              "QR कोड का रंग कोई मायने नहीं रखता।",
              "भुगतान सत्यापन के लिए दिन का समय अप्रासंगिक है।"
          ],
      },
    },
    {
      id: 5,
      question: "इनमें से कौन सी एक सुरक्षित डिजिटल आदत है?",
      options: ["अपना UPI पिन अपने फोन संपर्कों में सहेजना", "वित्तीय लेनदेन के लिए सार्वजनिक वाईफाई का उपयोग करना", "नियमित रूप से अपने लेनदेन के इतिहास की जांच करना", "अपने पिन को एक विश्वसनीय दोस्त के साथ साझा करना"],
      correctAnswerIndex: 2,
      explanation: {
          correct: "नियमित रूप से अपने लेनदेन के इतिहास की जांच करने से आपको किसी भी अनधिकृत भुगतान को जल्दी से पहचानने में मदद मिलती है।",
          incorrect: [
              "अपना पिन कभी भी कहीं भी लिखकर या सहेजकर न रखें। यह केवल आपकी याद में होना चाहिए।",
              "सार्वजनिक वाईफाई असुरक्षित हो सकता है। वित्तीय लेनदेन के लिए इसका उपयोग करने से बचें।",
              "अपना पिन कभी किसी के साथ साझा न करें, चाहे आप उन पर कितना भी भरोसा क्यों न करें।"
          ],
      },
    }
  ],
  telugu: [
    {
      id: 1,
      question: "UPI చెల్లింపుల కోసం రహస్యంగా ఉంచవలసిన ముఖ్యమైన విషయం ఏమిటి?",
      options: ["ఫోను నంబరు", "UPI పిన్", "పేరు", "QR కోడ్"],
      correctAnswerIndex: 1,
      explanation: {
        correct: "మీ UPI పిన్ మీ ATM పిన్ లాంటిది. ఇది మీ ఖాతా నుండి చెల్లింపులను అధికారం చేస్తుంది. దీన్ని ఎవరితోనూ పంచుకోవద్దు.",
        incorrect: [
          "మీ ఫోన్ నంబర్ తరచుగా పబ్లిక్‌గా ఉంటుంది మరియు చెల్లింపులు స్వీకరించడానికి అవసరం.",
          "మీ UPI పిన్ రహస్య కీ. దాన్ని ఎప్పుడూ పంచుకోవద్దు.",
          "మీ పేరు రహస్యం కాదు మరియు చెల్లింపులను నిర్ధారించడానికి తరచుగా ప్రదర్శించబడుతుంది.",
          "QR కోడ్ డబ్బు స్వీకరించడానికి మరియు పంచుకోవడం సురక్షితం."
        ],
      },
    },
    {
      id: 2,
      question: "ఎవరైనా లాటరీ గెలవడానికి మీ OTP అడిగితే మీరు ఏమి చేయాలి?",
      options: ["బహుమతి పొందడానికి OTPని పంచుకోండి", "తర్వాత కాల్ చేయమని వారిని అడగండి", "వెంటనే కాల్ డిస్‌కనెక్ట్ చేయండి", "సగం OTPని మాత్రమే పంచుకోండి"],
      correctAnswerIndex: 2,
      explanation: {
        correct: "ఇది ఒక సాధారణ స్కామ్. మీ OTPని ఎప్పుడూ పంచుకోవద్దు. వెంటనే కాల్ డిస్‌కనెక్ట్ చేసి, నంబర్‌ను బ్లాక్ చేయండి.",
        incorrect: [
          "OTPని పంచుకోవడం వల్ల మీ ఖాతా నుండి డబ్బు దొంగిలించబడుతుంది. ఇది ఒక స్కామ్.",
          "మోసగాళ్లతో మాట్లాడటం ప్రమాదకరం. వెంటనే డిస్‌కనెక్ట్ చేయడం ఉత్తమం.",
          "ఇది ఒక స్కామ్. ఏదైనా నిమగ్నత ప్రమాదకరం.",
          "OTPలో ఏ భాగాన్ని పంచుకోవడం ప్రమాదకరం. అలా ఎప్పుడూ చేయవద్దు."
        ]
      },
    },
    {
      id: 3,
      question: "UPI ఉపయోగించి డబ్బు స్వీకరించడానికి, మీరు...",
      options: ["మీ UPI పిన్‌ను నమోదు చేయాలి", "ఒక QR కోడ్‌ను స్కాన్ చేయాలి", "మీ UPI ID లేదా QR కోడ్‌ను పంచుకోవాలి", "ఒక చెల్లింపు అభ్యర్థనను ఆమోదించాలి"],
      correctAnswerIndex: 2,
      explanation: {
          correct: "డబ్బు స్వీకరించడానికి, మీరు మీ UPI IDని పంచుకోవాలి లేదా మీ QR కోడ్‌ను చూపించాలి. డబ్బు స్వీకరించడానికి మీరు ఎప్పుడూ మీ పిన్‌ను నమోదు చేయనవసరం లేదు.",
          incorrect: [
              "మీరు డబ్బు పంపడానికి మాత్రమే మీ UPI పిన్‌ను నమోదు చేస్తారు, స్వీకరించడానికి కాదు. ఇది ఒక సాధారణ స్కామ్.",
              "QR కోడ్‌ను స్కాన్ చేయడం డబ్బు పంపడానికి, స్వీకరించడానికి కాదు.",
              "నిధులను స్వీకరించడానికి మీ వివరాలను పంచుకోవడం సరైన మార్గం.",
              "మీరు డబ్బు పంపడానికి మాత్రమే అభ్యర్థనలను ఆమోదిస్తారు."
          ],
      },
    },
    {
      id: 4,
      question: "ఒక దుకాణంలో QR కోడ్‌ను స్కాన్ చేస్తున్నప్పుడు, మీ పిన్‌ను నమోదు చేయడానికి ముందు మీరు ఏమి ధృవీకరించాలి?",
      options: ["దుకాణదారుడి వయస్సు", "యాప్‌లో ప్రదర్శించబడే దుకాణం పేరు", "QR కోడ్ యొక్క రంగు", "రోజు సమయం"],
      correctAnswerIndex: 1,
      explanation: {
          correct: "స్కాన్ చేసిన తర్వాత, మీ యాప్ వ్యక్తి లేదా దుకాణం పేరును చూపుతుంది. కొనసాగడానికి ముందు ఇది సరైనదేనని ఎల్లప్పుడూ ధృవీకరించండి.",
          incorrect: [
              "దుకాణదారుడి వయస్సు చెల్లింపుకు సంబంధం లేదు.",
              "తప్పు వ్యక్తికి చెల్లించకుండా ఉండటానికి గ్రహీత పేరును ధృవీకరించడం చాలా ముఖ్యం.",
              "QR కోడ్ రంగు పట్టింపు లేదు.",
              "చెల్లింపు ధృవీకరణకు రోజు సమయం సంబంధం లేదు."
          ],
      },
    },
    {
      id: 5,
      question: "వీటిలో సురక్షితమైన డిజిటల్ అలవాటు ఏది?",
      options: ["మీ UPI పిన్‌ను మీ ఫోన్ పరిచయాలలో సేవ్ చేయడం", "ఆర్థిక లావాదేవీల కోసం పబ్లిక్ వైఫైని ఉపయోగించడం", "మీ లావాదేవీల చరిత్రను క్రమం తప్పకుండా తనిఖీ చేయడం", "మీ పిన్‌ను విశ్వసనీయ స్నేహితుడితో పంచుకోవడం"],
      correctAnswerIndex: 2,
      explanation: {
          correct: "మీ లావాదేవీల చరిత్రను క్రమం తప్పకుండా తనిఖీ చేయడం ఏదైనా అనధికార చెల్లింపులను త్వరగా గుర్తించడంలో మీకు సహాయపడుతుంది.",
          incorrect: [
              "మీ పిన్‌ను ఎక్కడా వ్రాసి లేదా సేవ్ చేయవద్దు. ఇది మీ జ్ఞాపకశక్తిలో మాత్రమే ఉండాలి.",
              "పబ్లిక్ వైఫై అసురక్షితంగా ఉండవచ్చు. ఆర్థిక లావాదేవీల కోసం దీనిని ఉపయోగించడం మానుకోండి.",
              "మీరు ఎంతగా విశ్వసించినా మీ పిన్‌ను ఎవరితోనూ పంచుకోవద్దు."
          ],
      },
    }
  ]
};

export const getRandomizedQuestions = (language: Language): QuizQuestion[] => {
  const langQuestions = questions[language];
  return [...langQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
};
