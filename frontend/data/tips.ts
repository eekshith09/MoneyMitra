
import type { Language } from '../types';

export const tips: { [key in Language]: { title: string; content: string }[] } = {
  english: [
    { title: 'Fraud Alert!', content: 'Never share your UPI PIN with anyone. No bank or app will ever ask for it.' },
    { title: 'Savings Tip', content: 'Try to save at least ₹50 every day. It becomes ₹1500 in a month!' },
    { title: 'Income Boost', content: 'Drive during peak hours (8-10 AM & 5-8 PM) to get more rides.' },
    { title: 'UPI Safety', content: 'Always check the recipient\'s name on the screen before entering your PIN.' },
    { title: 'QR Code Safety', content: 'Only scan QR codes from trusted shops. Be careful with codes sent on WhatsApp.' },
    { title: 'Fuel Savings', content: 'Maintaining a steady speed can save you up to ₹500 in fuel costs every month.' },
  ],
  hindi: [
    { title: 'धोखाधड़ी चेतावनी!', content: 'अपना UPI पिन कभी किसी के साथ साझा न करें। कोई भी बैंक या ऐप इसे कभी नहीं मांगेगा।' },
    { title: 'बचत टिप', content: 'हर दिन कम से कम ₹50 बचाने की कोशिश करें। यह एक महीने में ₹1500 हो जाता है!' },
    { title: 'आय बढ़ाएं', content: 'अधिक सवारी पाने के लिए पीक आवर्स (सुबह 8-10 और शाम 5-8) में ड्राइव करें।' },
    { title: 'UPI सुरक्षा', content: 'अपना पिन दर्ज करने से पहले हमेशा स्क्रीन पर प्राप्तकर्ता का नाम जांचें।' },
    { title: 'QR कोड सुरक्षा', content: 'केवल विश्वसनीय दुकानों से QR कोड स्कैन करें। व्हाट्सएप पर भेजे गए कोड से सावधान रहें।' },
    { title: 'ईंधन की बचत', content: 'एक स्थिर गति बनाए रखने से आप हर महीने ईंधन लागत में ₹500 तक बचा सकते हैं।' },
  ],
  telugu: [
    { title: 'మోసం హెచ్చరిక!', content: 'మీ UPI పిన్‌ను ఎవరితోనూ పంచుకోవద్దు. ఏ బ్యాంక్ లేదా యాప్ దానిని ఎప్పుడూ అడగదు.' },
    { title: 'పొదుపు చిట్కా', content: 'ప్రతిరోజూ కనీసం ₹50 ఆదా చేయడానికి ప్రయత్నించండి. ఇది ఒక నెలలో ₹1500 అవుతుంది!' },
    { title: 'ఆదాయం పెంచుకోండి', content: 'ఎక్కువ రైడ్‌లు పొందడానికి పీక్ అవర్స్‌లో (ఉదయం 8-10 & సాయంత్రం 5-8) డ్రైవ్ చేయండి.' },
    { title: 'UPI భద్రత', content: 'మీ పిన్‌ను నమోదు చేసే ముందు ఎల్లప్పుడూ స్క్రీన్‌పై స్వీకర్త పేరును తనిఖీ చేయండి.' },
    { title: 'QR కోడ్ భద్రత', content: 'విశ్వసనీయ దుకాణాల నుండి మాత్రమే QR కోడ్‌లను స్కాన్ చేయండి. వాట్సాప్‌లో పంపిన కోడ్‌లతో జాగ్రత్తగా ఉండండి.' },
    { title: 'ఇంధన పొదుపు', content: 'స్థిరమైన వేగాన్ని పాటించడం వల్ల ప్రతి నెలా ఇంధన ఖర్చులలో ₹500 వరకు ఆదా చేయవచ్చు.' },
  ],
};
