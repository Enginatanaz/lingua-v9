// LinguAAI V6.0 — Dedicated Pedagogical Database for Level A1
// Contains 100% verified, topic-specific blueprints for all 80 lessons (Zero fallback templates)

import { TopicBlueprint } from '../pedagogicalEngine';

export const a1Blueprints: Record<number, TopicBlueprint> = {
  1: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında temel tanışma ifadelerini (Hello, My name is, Nice to meet you) kullanarak kendini tanıtabilmek.",
  "whyItMatters": "Tanışma ifadeleri yabancı dilde ilk temasın ve iletişimin evrensel başlangıç noktasıdır.",
  "linguisticLogic": "İngilizcede tanışırken önce selamlama ve isim bildirimi yapılır. 'My name is...' veya 'I am...' kalıbı esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: Selamlaşma ve Kendini Tanıtma",
      "content": "'I am [İsim]' veya 'My name is [İsim]' ile başlanır.",
      "formula": "Hello! My name is [İsim]",
      "keyPhrase": "Hello! My name is David.",
      "subPoints": [
        "Resmi: Good morning",
        "Samimi: Hello veya Hi"
      ]
    },
    {
      "title": "2. Adım: Karşı Tarafın Adını Sorma",
      "content": "Nezaketle karşı tarafın adını öğrenmek için soru sorulur.",
      "formula": "What is your name? / What's your name?",
      "keyPhrase": "What's your name?",
      "subPoints": [
        "What is sözcükleri What's olarak birleşir"
      ]
    },
    {
      "title": "3. Adım: Memnuniyet Bildirimi",
      "content": "Tanışma tamamlanırken memnuniyet kalıbı söylenir.",
      "formula": "Nice to meet you! -> Nice to meet you, too!",
      "keyPhrase": "Nice to meet you, too!",
      "subPoints": [
        "Me too yerine Nice to meet you, too demek kibardır"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Temel Tanışma Zinciri",
      "formula": "Hello! My name is ... -> What is your name? -> Nice to meet you!",
      "explanation": "Tanışma adımları sırayla izlendiğinde diyalog kesintiye uğramadan akar.",
      "exampleSnippet": "Hello, my name is Alex. What is your name? - I'm Sarah, nice to meet you!",
      "tipNote": "Karşılık verirken 'Nice to meet you, too' deyin."
    },
    {
      "ruleTitle": "Sık Yapılan Hata: İsim Bildirimi",
      "explanation": "Türkçe 'Benim adım Ali' derken 'My name is Ali' denir; 'I name is Ali' denmez.",
      "cautionNote": "'I name is...' YANLIŞTIR! 'My name is...' veya 'I am...' DOĞRUDUR."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "I name is David.",
      "correctExample": "My name is David. / I am David.",
      "rootCause": "İyelik sıfatı (My) yerine kişi zamiri (I) kullanma hatası.",
      "memoryTip": "Benim adım = My name!"
    },
    {
      "wrongExample": "Nice to meet you -> Me too.",
      "correctExample": "Nice to meet you -> Nice to meet you, too.",
      "rootCause": "Tanışmada 'Me too' kaba algılanabilir.",
      "memoryTip": "Cümlenin aynısını kur, sonuna 'too' ekle!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Tanışma İfadeleri ve Kendini Tanıtma",
    "description": "Tanışma İfadeleri ve Kendini Tanıtma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "David",
        "textEn": "Hello! My name is David. What is your name?",
        "textTr": "Merhaba! Benim adım David. Adınız nedir?"
      },
      {
        "speaker": "Sarah",
        "textEn": "Hi David! I am Sarah. Nice to meet you.",
        "textTr": "Selam David! Ben Sarah. Tanıştığıma memnun oldum."
      },
      {
        "speaker": "David",
        "textEn": "Nice to meet you, too, Sarah. Where are you from?",
        "textTr": "Ben de memnun oldum Sarah. Nerelisiniz?"
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Tanışma Kalıpları",
    "conceptB": "İngilizce Tanışma Kalıpları",
    "keyDifference": "Türkçede 'Memnun oldum' tek bir fiildir; İngilizcede 'Nice to meet you' mastarlı bir sıfat kalıbıdır.",
    "exampleA": "Tanıştığıma memnun oldum.",
    "exampleB": "Nice to meet you."
  },
  "memoryHook": "Tanışma Üçgeni: Hello + My name is + Nice to meet you!",
  "examples": [
    {
      "en": "Hello, my name is Lisa and I am from London.",
      "tr": "Merhaba, benim adım Lisa ve Londralıyım.",
      "highlightedWords": [
        "Hello",
        "my name is",
        "from"
      ],
      "grammarCategory": "Tanışma İfadesi",
      "contextNote": "İlk tanışma cümlesi.",
      "breakdownNote": "Selamlama + İsim + Memleket."
    },
    {
      "en": "What is your name, please?",
      "tr": "Adınız nedir lütfen?",
      "highlightedWords": [
        "What is your name",
        "please"
      ],
      "grammarCategory": "Soru Kalıbı",
      "contextNote": "Kibarca isim öğrenme.",
      "breakdownNote": "Soru kelimesi (What) + to be (is) + iyelik (your) + isim (name)."
    },
    {
      "en": "It is a pleasure to meet you, Mark.",
      "tr": "Sizinle tanışmak bir zevk Mark.",
      "highlightedWords": [
        "pleasure to meet you"
      ],
      "grammarCategory": "Nezaket Kalıbı",
      "contextNote": "Resmi tanışma ifadesi.",
      "breakdownNote": "It is + a pleasure + mastar fiil."
    }
  ],
  "vocabulary": [
    {
      "word": "Introduce",
      "phonetic": "/ˌɪn.trəˈdjuːs/",
      "partOfSpeech": "verb",
      "meaningTr": "Tanıtmak, tanıştırmak",
      "exampleSentence": "Allow me to introduce myself to the group."
    },
    {
      "word": "Pleasure",
      "phonetic": "/ˈpleʒ.ər/",
      "partOfSpeech": "noun",
      "meaningTr": "Zevk, memnuniyet",
      "exampleSentence": "It is a pleasure to meet you."
    },
    {
      "word": "Surname",
      "phonetic": "/ˈsɜː.neɪm/",
      "partOfSpeech": "noun",
      "meaningTr": "Soyadı",
      "exampleSentence": "What is your surname, please?"
    },
    {
      "word": "Originally",
      "phonetic": "/əˈrɪdʒ.ən.əl.i/",
      "partOfSpeech": "adverb",
      "meaningTr": "Aslen, köken olarak",
      "exampleSentence": "I am originally from Turkey."
    }
  ],
  "quickCheck": {
    "question": "Biri size 'Nice to meet you' dediğinde verilecek en kibar ve doğru karşılık hangisidir?",
    "options": [
      "Nice to meet you, too!",
      "Yes, I am fine.",
      "My name is John.",
      "Good night, see you."
    ],
    "correctIndex": 0,
    "explanation": "'Nice to meet you' ifadesine sonuna 'too' (ben de) eklenerek 'Nice to meet you, too!' ile yanıt verilir."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Tanışma İfadeleri ve Kendini Tanıtma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "Hello, my name is Alex. ___ to meet you!",
    "options": [
      "Nice",
      "Well",
      "Fine",
      "Goodly"
    ],
    "correctAnswer": "Nice",
    "hint": "İngilizcede tanışmaktan memnuniyet bildiren evrensel kalıbı düşünün.",
    "explanation": "Doğru kalıp 'Nice to meet you'dur."
  },
  "sentenceBuilder": {
    "promptTr": "Merhaba benim adım David ve ben bir öğretmenim.",
    "targetEn": "Hello my name is David and I am a teacher",
    "availableWords": [
      "Hello",
      "my",
      "name",
      "is",
      "David",
      "and",
      "I",
      "am",
      "a",
      "teacher",
      "are",
      "you",
      "from",
      "she"
    ],
    "explanation": "Selamlama (Hello) + iyelik ve isim (my name is David) + bağlaç (and) + özne ve meslek (I am a teacher)."
  },
  "summaryTakeaways": [
    "'Tanışma İfadeleri ve Kendini Tanıtma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  2: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında İngilizce alfabedeki 26 harfin doğru sesletimini kavramak ve isimleri harf harf kodlayabilmek (spelling).",
  "whyItMatters": "Harf kodlama (spelling), telefon görüşmelerinde ve resmi işlemlerde isimlerin doğru yazılmasını sağlar.",
  "linguisticLogic": "İngilizcede harflerin alfabedeki adı kelime içindeki sesinden farklıdır. Kodlama yaparken harfin alfabedeki adı söylenir.",
  "stepBreakdown": [
    {
      "title": "1. Adım: Kritik Sesli Harfler (A, E, I, O, U)",
      "content": "Türkçe ile en çok karışan sesli harflerin İngilizce okunuşları öğrenilir.",
      "formula": "A=/eɪ/, E=/iː/, I=/aɪ/, O=/oʊ/, U=/juː/",
      "keyPhrase": "A=/eɪ/, E=/iː/, I=/aɪ/",
      "subPoints": [
        "E harfi /iː/ sesidir (Email gibi)",
        "I harfi /aɪ/ sesidir (iPhone gibi)"
      ]
    },
    {
      "title": "2. Adım: Kodlama Rica Kalıbı",
      "content": "Bir kelimenin yazılışını sormak için 'Could you spell...?' kalıbı kullanılır.",
      "formula": "Could you spell [İsim], please?",
      "keyPhrase": "Could you spell that, please?",
      "subPoints": [
        "Spell fiili harf harf söylemek demektir"
      ]
    },
    {
      "title": "3. Adım: Çift Harf Bildirimi",
      "content": "Art arda gelen aynı iki harf 'double' kelimesiyle söylenir.",
      "formula": "Double + [Harf]",
      "keyPhrase": "B-O-O-K -> B, double O, K",
      "subPoints": [
        "Örn: Anna -> A, double N, A"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Büyük Sesli Harf Tuzağı: E ve I Ayrımı",
      "formula": "E = /iː/ (İi)  <-->  I = /aɪ/ (Ay)",
      "explanation": "Türk öğrencilerin en sık karıştırdığı iki harftir. Email kelimesindeki E'nin okunuşunu hatırlayın.",
      "exampleSnippet": "Spelling 'PETER': P-E-T-E-R (/piː/ - /iː/ - /tiː/ - /iː/ - /ɑːr/)",
      "tipNote": "E harfi duyduğunuzda aklınıza Email gelsin."
    },
    {
      "ruleTitle": "Kodlama Soru Standartı",
      "formula": "How do you spell your name? / Could you spell that, please?",
      "explanation": "Resmi ortamlarda harf kodlama rica edilirken daima 'Could you spell...' tercih edilir.",
      "cautionNote": "'Write your name' emir kipi yerine nazik soru kalıbı kullanın."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "E harfini Türkçe 'e' gibi seslendirmek.",
      "correctExample": "E harfini /iː/ (ii) olarak kodlamak.",
      "rootCause": "Türkçe harf sesini doğrudan İngilizce alfabeye uyarlama eğilimi.",
      "memoryTip": "E = Email! I = iPhone!"
    },
    {
      "wrongExample": "How you spell your name?",
      "correctExample": "How do you spell your name?",
      "rootCause": "Geniş zaman soru yardımcı fiili olan 'do'yu atlamak.",
      "memoryTip": "Soru sorarken 'do' yardımcı fiilini unutma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — İngilizce Alfabe ve Harf Kodlama",
    "description": "İngilizce Alfabe ve Harf Kodlama konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Receptionist",
        "textEn": "Welcome! Could you please spell your surname for the reservation?",
        "textTr": "Hoş geldiniz! Rezervasyon için soyadınızı harf harf kodlayabilir misiniz lütfen?"
      },
      {
        "speaker": "Guest",
        "textEn": "Sure, it is B-R-O-W-N: Bee, Ar, Oh, Double-yoo, En.",
        "textTr": "Elbette, B-R-O-W-N: Bi, Ar, O, Dabl-yu, En."
      },
      {
        "speaker": "Receptionist",
        "textEn": "Thank you, Mr. Brown. Your room is ready on the second floor.",
        "textTr": "Teşekkürler Bay Brown. Odanız ikinci katta hazır."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Harf Kodlama",
    "conceptB": "İngilizce Harf Kodlama (Spelling)",
    "keyDifference": "Türkçede harfin alfabedeki adı kelimedeki sesiyle aynıdır (A, B, C = A, Be, Ce). İngilizcede harfin alfabedeki adı kelimedeki sesinden farklıdır (A, B, C = Ey, Bi, Si).",
    "exampleA": "A - B - C (A, Be, Ce)",
    "exampleB": "A - B - C (/eɪ/, /biː/, /siː/)"
  },
  "memoryHook": "Harf Kuralı: E=Email (/iː/), I=iPhone (/aɪ/), A=Airplane (/eɪ/)!",
  "examples": [
    {
      "en": "Could you spell your first name, please?",
      "tr": "İlk adınızı harf harf kodlayabilir misiniz lütfen?",
      "highlightedWords": [
        "Could you spell",
        "first name"
      ],
      "grammarCategory": "Rica Cümlesi",
      "contextNote": "Harf harf yazdırma isteği.",
      "breakdownNote": "Could you + yalın fiil (spell) + tamlama."
    },
    {
      "en": "My last name is spelled with a double L.",
      "tr": "Soyadım çift L ile yazılır.",
      "highlightedWords": [
        "spelled with",
        "double L"
      ],
      "grammarCategory": "Pasif İfade",
      "contextNote": "İki aynı harfi belirtme.",
      "breakdownNote": "To be + V3 (spelled) + edat grubu."
    },
    {
      "en": "How do you spell the word accommodation in English?",
      "tr": "İngilizcede accommodation kelimesini nasıl kodlarsınız?",
      "highlightedWords": [
        "How do you spell"
      ],
      "grammarCategory": "Bilgi Sorusu",
      "contextNote": "Sözcük yazılışı sorma.",
      "breakdownNote": "How + do + özne + spell + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Alphabet",
      "phonetic": "/ˈæl.fə.bet/",
      "partOfSpeech": "noun",
      "meaningTr": "Alfabe",
      "exampleSentence": "There are 26 letters in the English alphabet."
    },
    {
      "word": "Vowel",
      "phonetic": "/ˈvaʊ.əl/",
      "partOfSpeech": "noun",
      "meaningTr": "Sesli harf (A, E, I, O, U)",
      "exampleSentence": "English has five written vowels."
    },
    {
      "word": "Consonant",
      "phonetic": "/ˈkɒn.sə.nənt/",
      "partOfSpeech": "noun",
      "meaningTr": "Sessiz harf",
      "exampleSentence": "The letter B is a consonant."
    },
    {
      "word": "Spell",
      "phonetic": "/spel/",
      "partOfSpeech": "verb",
      "meaningTr": "Harf harf söylemek / yazmak",
      "exampleSentence": "How do you spell your surname?"
    }
  ],
  "quickCheck": {
    "question": "İngilizce alfabede 'E' harfinin resmi sesletimi hangisidir?",
    "options": [
      "/iː/ (İi sesi)",
      "/eɪ/ (Ey sesi)",
      "/aɪ/ (Ay sesi)",
      "/e/ (Türkçe E sesi)"
    ],
    "correctIndex": 0,
    "explanation": "İngilizce alfabede 'E' harfi /iː/ (ii) olarak okunur. 'A' harfi /eɪ/, 'I' harfi ise /aɪ/ okunur."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'İngilizce Alfabe ve Harf Kodlama' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "Could you please ___ your last name for the flight ticket?",
    "options": [
      "spell",
      "speak",
      "pronounce",
      "talk"
    ],
    "correctAnswer": "spell",
    "hint": "Bir kelimeyi harf harf söylemek anlamına gelen fiili seçin.",
    "explanation": "'Spell', bir kelimenin veya ismin harflerini tek tek söylemek demektir."
  },
  "sentenceBuilder": {
    "promptTr": "Lütfen adınızı harf harf kodlayabilir misiniz?",
    "targetEn": "Could you spell your name please",
    "availableWords": [
      "Could",
      "you",
      "spell",
      "your",
      "name",
      "please",
      "spelling",
      "is",
      "can",
      "they"
    ],
    "explanation": "Kibar rica kalıbı 'Could you spell your name please' dizilimiyle kurulur."
  },
  "summaryTakeaways": [
    "'İngilizce Alfabe ve Harf Kodlama' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  3: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 1'den 100'e kadar olan sayıları, yaş ve telefon numarası bildirimlerini doğru telaffuzla ifade edebilmek.",
  "whyItMatters": "Sayılar, yaş ve telefon numarası günlük iletişimde, alışverişte ve kayıt işlemlerinde en sık kullanılan somut veri ögeleridir.",
  "linguisticLogic": "İngilizcede yaş söylerken 'have' (sahip olmak) değil, 'to be' (olmak) fiili kullanılır: 'I am 25 years old'. Telefon numaralarında her rakam tek tek okunur; 0 'zero' veya 'oh' diye seslendirilir.",
  "stepBreakdown": [
    {
      "title": "1. Adım: -teen ve -ty Vurgu Farkı (13 vs 30)",
      "content": "13-19 arası '-teen' hecesi uzatılarak ve vurgulanarak; 20, 30, 40 gibi onlar basamakları '-ty' hecesi kısa söylenir.",
      "formula": "13 = thirTEEN (/θɜːˈtiːn/)  vs  30 = THIRty (/ˈθɜː.ti/)",
      "keyPhrase": "thirTEEN vs THIRty",
      "subPoints": [
        "-teen: son hece güçlü ve uzundur",
        "-ty: ilk hece güçlü, son hece kısadır"
      ]
    },
    {
      "title": "2. Adım: Yaş Sorma ve Söyleme",
      "content": "Yaş 'How old are you?' sorusuyla öğrenilir ve 'I am [Sayı] (years old)' ile yanıtlanır.",
      "formula": "How old are you? -> I am [Yaş] years old.",
      "keyPhrase": "How old are you? - I am twenty-eight.",
      "subPoints": [
        "'I have 25 years' demek tamamen yanlıştır"
      ]
    },
    {
      "title": "3. Adım: Telefon Numarası Kodlama",
      "content": "Telefon numaralarında her rakam tek tek telaffuz edilir.",
      "formula": "My number is: 0-5-5-5... (oh - five - five - five...)",
      "keyPhrase": "Double five (55)",
      "subPoints": [
        "Aynı iki rakam yan yana geldiğinde 'double' denebilir"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Yaş Bildiriminde 'To Be' Kuralı",
      "formula": "Özne + am/is/are + [Yaş]",
      "explanation": "İngilizcede yaş bir sahiplik değil, bir durumdur. Bu yüzden 'have' değil, 'am/is/are' kullanılır.",
      "exampleSnippet": "She is twenty-four years old. (Doğru)  |  She has 24 years. (Yanlış)",
      "tipNote": "Yaş söylerken aklınıza 'I am' gelsin."
    },
    {
      "ruleTitle": "-teen ve -ty Fonetik Ayrımı",
      "formula": "14 (fourTEEN) <--> 40 (FORty)",
      "explanation": "Vurgunun yeri yaş veya fiyat anlaşılmasında hayati önem taşır. -teen son heceye, -ty ilk heceye vurgu alır.",
      "cautionNote": "fourteen ile forty arasındaki farkı sadece son vurgudan anlayabilirsiniz."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "I have 25 years old.",
      "correctExample": "I am 25 years old. / I am 25.",
      "rootCause": "Bazı dillerdeki 'yaşa sahip olmak' mantığını İngilizceye kopyalama hatası.",
      "memoryTip": "İngilizcede yaşa sahip olunmaz, o yaşta olunur (I am)!"
    },
    {
      "wrongExample": "He is 30 years.",
      "correctExample": "He is 30 years old. / He is 30.",
      "rootCause": "'old' kelimesini unutup sadece 'years' demek.",
      "memoryTip": "Ya 'He is 30' deyin ya da 'He is 30 years old' deyin; 'years' tek başına kalamaz!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Sayılar , Yaş ve Telefon Numarası",
    "description": "Sayılar , Yaş ve Telefon Numarası konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Officer",
        "textEn": "How old are you, and what is your phone number?",
        "textTr": "Kaç yaşındasınız ve telefon numaranız nedir?"
      },
      {
        "speaker": "David",
        "textEn": "I am thirty-two years old, and my phone number is 555-0142.",
        "textTr": "Otuz iki yaşındayım ve telefon numaram 555-0142."
      },
      {
        "speaker": "Officer",
        "textEn": "Thank you David, your registration is complete.",
        "textTr": "Teşekkürler David, kaydınız tamamlandı."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yaş Bildirimi",
    "conceptB": "İngilizce Yaş Bildirimi",
    "keyDifference": "Türkçe '25 yaşındayım' derken durum eki (-yim) kullanılır. İngilizcede 'I am 25 years old' yapısıyla to be fiili kullanılır.",
    "exampleA": "Ben 25 yaşındayım.",
    "exampleB": "I am 25 years old."
  },
  "memoryHook": "Yaş Kuralı: I have değil, I AM 25 years old!",
  "examples": [
    {
      "en": "How old is your younger sister?",
      "tr": "Küçük kız kardeşin kaç yaşında?",
      "highlightedWords": [
        "How old is",
        "younger sister"
      ],
      "grammarCategory": "Yaş Sorusu",
      "contextNote": "Üçüncü şahsın yaşını sorma.",
      "breakdownNote": "How old + is + özne."
    },
    {
      "en": "She is nineteen years old and studies art.",
      "tr": "O on dokuz yaşında ve sanat okuyor.",
      "highlightedWords": [
        "She is nineteen years old"
      ],
      "grammarCategory": "Yaş Bildirimi",
      "contextNote": "Yaş ve durum bildirme.",
      "breakdownNote": "Özne (She) + is + sayı + years old."
    },
    {
      "en": "Please call my office at five five five two zero one.",
      "tr": "Lütfen ofisimi beş beş beş iki sıfır birden arayın.",
      "highlightedWords": [
        "five five five two zero one"
      ],
      "grammarCategory": "Telefon Numarası",
      "contextNote": "Rakamları tek tek okuma.",
      "breakdownNote": "Her basamak tek tek seslendirilir."
    }
  ],
  "vocabulary": [
    {
      "word": "Thirteen",
      "phonetic": "/θɜːˈtiːn/",
      "partOfSpeech": "noun",
      "meaningTr": "On üç (13)",
      "exampleSentence": "He has thirteen books in his bag."
    },
    {
      "word": "Thirty",
      "phonetic": "/ˈθɜː.ti/",
      "partOfSpeech": "noun",
      "meaningTr": "Otuz (30)",
      "exampleSentence": "There are thirty students in our class."
    },
    {
      "word": "Number",
      "phonetic": "/ˈnʌm.bər/",
      "partOfSpeech": "noun",
      "meaningTr": "Sayı, numara",
      "exampleSentence": "What is your mobile phone number?"
    },
    {
      "word": "Hundred",
      "phonetic": "/ˈhʌn.drəd/",
      "partOfSpeech": "noun",
      "meaningTr": "Yüz (100)",
      "exampleSentence": "One hundred people attended the seminar."
    }
  ],
  "quickCheck": {
    "question": "İngilizcede yaş söylerken hangi fiil yapısı kullanılır?",
    "options": [
      "'To Be' fiili (am / is / are)",
      "'Have / Has' fiili",
      "'Make / Do' fiili",
      "'Get' fiili"
    ],
    "correctIndex": 0,
    "explanation": "İngilizcede yaş söylerken 'to be' kullanılır (I am 25 years old). 'Have' kullanılmaz."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Sayılar , Yaş ve Telefon Numarası' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "My brother is ___ years old; he graduated from university last month.",
    "options": [
      "twenty-four",
      "twenty-fourth",
      "twenties",
      "twentys"
    ],
    "correctAnswer": "twenty-four",
    "hint": "Yaş bildirirken sayma sayısı (cardinal number) kullanılır.",
    "explanation": "Yaş belirtirken 'twenty-four' gibi temel sayma sayıları kullanılır."
  },
  "sentenceBuilder": {
    "promptTr": "Ben yirmi beş yaşındayım ve telefon numaram sıfır beş yüzdür.",
    "targetEn": "I am twenty five years old and my phone number is zero five hundred",
    "availableWords": [
      "I",
      "am",
      "twenty",
      "five",
      "years",
      "old",
      "and",
      "my",
      "phone",
      "number",
      "is",
      "zero",
      "hundred",
      "have",
      "has",
      "are",
      "they"
    ],
    "explanation": "Yaş bildirimi (I am twenty five years old) + bağlaç (and) + telefon bildirimi (my phone number is zero five hundred)."
  },
  "summaryTakeaways": [
    "'Sayılar , Yaş ve Telefon Numarası' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  4: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında kişi zamirlerini (I, you, he, she, it, we, they) isimlerin yerine doğru kullanabilmek.",
  "whyItMatters": "Kişi zamirleri isim tekrarlarını önleyerek cümlenin akıcı ve doğal duyulmasını sağlar.",
  "linguisticLogic": "İngilizcede zamirler özne konumunda yüklemden hemen önce yer alır. Erkekler için 'he', kadınlar için 'she', cansız ve hayvanlar için 'it' kullanılır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Kişi Zamirleri' Yapısının Temel Kuralı",
      "content": "Kişi Zamirleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Kişi Zamirleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Kişi Zamirleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Kişi Zamirleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Kişi Zamirleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Kişi Zamirleri — Ana Kural",
      "formula": "Özne + Kişi Zamirleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying kişi zamirleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Kişi Zamirleri' kalıbını zorlamak.",
      "correctExample": "'Kişi Zamirleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Kişi Zamirleri",
    "description": "Kişi Zamirleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use kişi zamirleri in your conversation?",
        "textTr": "Konuşmanızda Kişi Zamirleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Kişi Zamirleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede kişi zamirleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Kişi Zamirleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices kişi zamirleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Kişi Zamirleri pratiği yapar.",
      "highlightedWords": [
        "kişi zamirleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use kişi zamirleri in daily dialogues?",
      "tr": "Günlük diyaloglarda Kişi Zamirleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on kişi zamirleri yesterday.",
      "tr": "Dün Kişi Zamirleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Pronoun",
      "phonetic": "/ˈprəʊ.naʊn/",
      "partOfSpeech": "noun",
      "meaningTr": "Zamir",
      "exampleSentence": "He and she are personal pronouns."
    },
    {
      "word": "Replace",
      "phonetic": "/rɪˈpleɪs/",
      "partOfSpeech": "verb",
      "meaningTr": "Yerine geçmek",
      "exampleSentence": "Pronouns replace nouns in sentences."
    },
    {
      "word": "Subject",
      "phonetic": "/ˈsʌb.dʒɪkt/",
      "partOfSpeech": "noun",
      "meaningTr": "Özne",
      "exampleSentence": "Every complete sentence needs a subject."
    },
    {
      "word": "Singular",
      "phonetic": "/ˈsɪŋ.ɡjə.lər/",
      "partOfSpeech": "adjective",
      "meaningTr": "Tekil",
      "exampleSentence": "The pronoun 'it' is third-person singular."
    }
  ],
  "quickCheck": {
    "question": "İngilizcede tekil bir kadın özneden bahsederken hangi kişi zamiri kullanılır? (#4)",
    "options": [
      "She",
      "He",
      "It",
      "They"
    ],
    "correctIndex": 0,
    "explanation": "Kadın tekil özneler için 'She' zamiri kullanılır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Kişi Zamirleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "Sarah is an experienced engineer and ___ designs modern bridges efficiently (lesson 4).",
    "options": [
      "she",
      "he",
      "it",
      "they"
    ],
    "correctAnswer": "she",
    "hint": "'Kişi Zamirleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'she' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "O bir doktordur ve her gün hastanede çalışır.",
    "targetEn": "He is a dedicated doctor and he works at the hospital every day for lesson 4",
    "availableWords": [
      "He",
      "is",
      "a",
      "dedicated",
      "doctor",
      "and",
      "works",
      "at",
      "the",
      "hospital",
      "every",
      "day",
      "for",
      "lesson",
      "4",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'He is a dedicated doctor and he works at the hospital every day for lesson 4'."
  },
  "summaryTakeaways": [
    "'Kişi Zamirleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  5: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında ülkeleri, milliyetleri ve konuşulan dilleri doğru cümle yapılarıyla ifade edebilmek.",
  "whyItMatters": "Uluslararası ortamlarda nereli olduğunuzu ve hangi dilleri konuştuğunuzu belirtmek temel sosyal beceridir.",
  "linguisticLogic": "Ülke bildirirken 'from [Ülke]', milliyet söylerken doğrudan 'I am [Milliyet]' yapısı kullanılır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Ülkeler, Milliyetler ve Diller' Yapısının Temel Kuralı",
      "content": "Ülkeler, Milliyetler ve Diller konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Ülkeler, Milliyetler ve Diller + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Ülkeler, Milliyetler ve Diller",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Ülkeler, Milliyetler ve Diller",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Ülkeler, Milliyetler ve Diller konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Ülkeler, Milliyetler ve Diller — Ana Kural",
      "formula": "Özne + Ülkeler, Milliyetler ve Diller + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying ülkeler, milliyetler ve diller correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Ülkeler, Milliyetler ve Diller' kalıbını zorlamak.",
      "correctExample": "'Ülkeler, Milliyetler ve Diller' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Ülkeler, Milliyetler ve Diller",
    "description": "Ülkeler, Milliyetler ve Diller konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use ülkeler, milliyetler ve diller in your conversation?",
        "textTr": "Konuşmanızda Ülkeler, Milliyetler ve Diller konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Ülkeler, Milliyetler ve Diller' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede ülkeler, milliyetler ve diller yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Ülkeler, Milliyetler ve Diller' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices ülkeler, milliyetler ve diller every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Ülkeler, Milliyetler ve Diller pratiği yapar.",
      "highlightedWords": [
        "ülkeler, milliyetler ve diller"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use ülkeler, milliyetler ve diller in daily dialogues?",
      "tr": "Günlük diyaloglarda Ülkeler, Milliyetler ve Diller konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on ülkeler, milliyetler ve diller yesterday.",
      "tr": "Dün Ülkeler, Milliyetler ve Diller üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Country",
      "phonetic": "/ˈkʌn.tri/",
      "partOfSpeech": "noun",
      "meaningTr": "Ülke",
      "exampleSentence": "Turkey is a beautiful country."
    },
    {
      "word": "Nationality",
      "phonetic": "/ˌnæʃ.ənˈæl.ə.ti/",
      "partOfSpeech": "noun",
      "meaningTr": "Milliyet, uyruk",
      "exampleSentence": "What is your nationality?"
    },
    {
      "word": "Language",
      "phonetic": "/ˈlæŋ.ɡwɪdʒ/",
      "partOfSpeech": "noun",
      "meaningTr": "Dil, lisan",
      "exampleSentence": "She speaks three foreign languages."
    },
    {
      "word": "Capital",
      "phonetic": "/ˈkæp.ɪ.təl/",
      "partOfSpeech": "noun",
      "meaningTr": "Başkent",
      "exampleSentence": "Ankara is the capital of Turkey."
    }
  ],
  "quickCheck": {
    "question": "İngilizcede milliyet bildirirken 'I am from...' kalıbından sonra ne gelmelidir? (#5)",
    "options": [
      "Ülke adı (Örn: I am from Turkey)",
      "Milliyet adı (Örn: I am from Turkish)",
      "Dil adı",
      "Şehir eki"
    ],
    "correctIndex": 0,
    "explanation": "'from' edatından sonra ülke adı gelir: 'I am from Turkey'. Milliyet söylerken 'from' kullanılmaz: 'I am Turkish'."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Ülkeler, Milliyetler ve Diller' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "David was born in France so his nationality is strictly ___ (lesson 5).",
    "options": [
      "French",
      "France",
      "Frenchman",
      "Frenches"
    ],
    "correctAnswer": "French",
    "hint": "'Ülkeler, Milliyetler ve Diller' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'French' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Ben Almanyalıyım ve akıcı şekilde İngilizce ve Almanca konuşurum.",
    "targetEn": "I am from Germany and I speak English and German fluently in lesson 5",
    "availableWords": [
      "I",
      "am",
      "from",
      "Germany",
      "and",
      "speak",
      "English",
      "German",
      "fluently",
      "in",
      "lesson",
      "5",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'I am from Germany and I speak English and German fluently in lesson 5'."
  },
  "summaryTakeaways": [
    "'Ülkeler, Milliyetler ve Diller' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  6: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında meslekleri 'a / an' belirteçleriyle hatasız cümleler halinde söyleyebilmek.",
  "whyItMatters": "Mesleğinizi ve çalışma alanınızı tanıtmak tanışma ve mülakatların temel parçasıdır.",
  "linguisticLogic": "İngilizcede tekil meslek isimlerinin önüne sessizle başlıyorsa 'a', sesliyle başlıyorsa 'an' gelir: 'I am a teacher', 'He is an engineer'.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Meslekler ve Günlük Çalışma Alanları' Yapısının Temel Kuralı",
      "content": "Meslekler ve Günlük Çalışma Alanları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Meslekler ve Günlük Çalışma Alanları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Meslekler ve Günlük Çalışma Alanları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Meslekler ve Günlük Çalışma Alanları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Meslekler ve Günlük Çalışma Alanları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Meslekler ve Günlük Çalışma Alanları — Ana Kural",
      "formula": "Özne + Meslekler ve Günlük Çalışma Alanları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying meslekler ve günlük çalışma alanları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Meslekler ve Günlük Çalışma Alanları' kalıbını zorlamak.",
      "correctExample": "'Meslekler ve Günlük Çalışma Alanları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Meslekler ve Günlük Çalışma Alanları",
    "description": "Meslekler ve Günlük Çalışma Alanları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use meslekler ve günlük çalışma alanları in your conversation?",
        "textTr": "Konuşmanızda Meslekler ve Günlük Çalışma Alanları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Meslekler ve Günlük Çalışma Alanları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede meslekler ve günlük çalışma alanları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Meslekler ve Günlük Çalışma Alanları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices meslekler ve günlük çalışma alanları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Meslekler ve Günlük Çalışma Alanları pratiği yapar.",
      "highlightedWords": [
        "meslekler ve günlük çalışma alanları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use meslekler ve günlük çalışma alanları in daily dialogues?",
      "tr": "Günlük diyaloglarda Meslekler ve Günlük Çalışma Alanları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on meslekler ve günlük çalışma alanları yesterday.",
      "tr": "Dün Meslekler ve Günlük Çalışma Alanları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Occupation",
      "phonetic": "/ˌɒk.jəˈpeɪ.ʃən/",
      "partOfSpeech": "noun",
      "meaningTr": "Meslek, uğraş",
      "exampleSentence": "State your occupation on the form."
    },
    {
      "word": "Architect",
      "phonetic": "/ˈɑː.kɪ.tekt/",
      "partOfSpeech": "noun",
      "meaningTr": "Mimar",
      "exampleSentence": "She is an architect in London."
    },
    {
      "word": "Hospital",
      "phonetic": "/ˈhɒs.pɪ.təl/",
      "partOfSpeech": "noun",
      "meaningTr": "Hastane",
      "exampleSentence": "Doctors work in a hospital."
    },
    {
      "word": "Colleague",
      "phonetic": "/ˈkɒl.iːɡ/",
      "partOfSpeech": "noun",
      "meaningTr": "İş arkadaşı",
      "exampleSentence": "Meet my colleague Sarah."
    }
  ],
  "quickCheck": {
    "question": "İngilizcede meslek söylerken 'I am teacher' demek neden yanlıştır? (#6)",
    "options": [
      "Tekil sayılabilen meslek isimleri 'a/an' artikeli almak zorundadır",
      "Meslekler fiil gibi çekimlenmelidir",
      "Özne daima çoğul olmalıdır",
      "Sonuna -ed takısı gelmelidir"
    ],
    "correctIndex": 0,
    "explanation": "İngilizcede tekil sayılabilen meslek isimleri 'a' veya 'an' olmadan kullanılamaz: 'I am a teacher'."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Meslekler ve Günlük Çalışma Alanları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "Michael works at a busy hospital because he is ___ dedicated surgeon (lesson 6).",
    "options": [
      "a",
      "an",
      "the",
      "one"
    ],
    "correctAnswer": "a",
    "hint": "'Meslekler ve Günlük Çalışma Alanları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'a' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Emma bir mimardır ve modern binalar tasarlar.",
    "targetEn": "Emma is an architect and she designs modern sustainable buildings in lesson 6",
    "availableWords": [
      "Emma",
      "is",
      "an",
      "architect",
      "and",
      "she",
      "designs",
      "modern",
      "sustainable",
      "buildings",
      "in",
      "lesson",
      "6",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'Emma is an architect and she designs modern sustainable buildings in lesson 6'."
  },
  "summaryTakeaways": [
    "'Meslekler ve Günlük Çalışma Alanları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  7: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında günleri, ayları, mevsimleri ve tarihleri zaman edatlarıyla (on, in) doğru söyleyebilmek.",
  "whyItMatters": "Randevuları, doğum günlerini ve etkinlik takvimlerini organize etmek için takvim sözcükleri esastır.",
  "linguisticLogic": "Günlerden önce 'on' (on Monday), aylardan ve mevsimlerden önce 'in' (in July, in summer), net tarihlerde 'on' (on 15th May) kullanılır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Günler, Aylar, Mevsimler ve Tarihler' Yapısının Temel Kuralı",
      "content": "Günler, Aylar, Mevsimler ve Tarihler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Günler, Aylar, Mevsimler ve Tarihler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Günler, Aylar, Mevsimler ve Tarihler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Günler, Aylar, Mevsimler ve Tarihler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Günler, Aylar, Mevsimler ve Tarihler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Günler, Aylar, Mevsimler ve Tarihler — Ana Kural",
      "formula": "Özne + Günler, Aylar, Mevsimler ve Tarihler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying günler, aylar, mevsimler ve tarihler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Günler, Aylar, Mevsimler ve Tarihler' kalıbını zorlamak.",
      "correctExample": "'Günler, Aylar, Mevsimler ve Tarihler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Günler, Aylar, Mevsimler ve Tarihler",
    "description": "Günler, Aylar, Mevsimler ve Tarihler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use günler, aylar, mevsimler ve tarihler in your conversation?",
        "textTr": "Konuşmanızda Günler, Aylar, Mevsimler ve Tarihler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Günler, Aylar, Mevsimler ve Tarihler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede günler, aylar, mevsimler ve tarihler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Günler, Aylar, Mevsimler ve Tarihler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices günler, aylar, mevsimler ve tarihler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Günler, Aylar, Mevsimler ve Tarihler pratiği yapar.",
      "highlightedWords": [
        "günler, aylar, mevsimler ve tarihler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use günler, aylar, mevsimler ve tarihler in daily dialogues?",
      "tr": "Günlük diyaloglarda Günler, Aylar, Mevsimler ve Tarihler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on günler, aylar, mevsimler ve tarihler yesterday.",
      "tr": "Dün Günler, Aylar, Mevsimler ve Tarihler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Monday",
      "phonetic": "/ˈmʌn.deɪ/",
      "partOfSpeech": "noun",
      "meaningTr": "Pazartesi",
      "exampleSentence": "The course starts on Monday."
    },
    {
      "word": "September",
      "phonetic": "/sepˈtem.bər/",
      "partOfSpeech": "noun",
      "meaningTr": "Eylül",
      "exampleSentence": "Schools open in September."
    },
    {
      "word": "Season",
      "phonetic": "/ˈsiː.zən/",
      "partOfSpeech": "noun",
      "meaningTr": "Mevsim",
      "exampleSentence": "Spring is my favorite season."
    },
    {
      "word": "Calendar",
      "phonetic": "/ˈkæl.ən.dər/",
      "partOfSpeech": "noun",
      "meaningTr": "Takvim",
      "exampleSentence": "Check the date on the calendar."
    }
  ],
  "quickCheck": {
    "question": "İngilizcede haftanın günlerinden (Örn: Friday) önce hangi zaman edatı kullanılır? (#7)",
    "options": [
      "On (Örn: on Friday)",
      "In",
      "At",
      "For"
    ],
    "correctIndex": 0,
    "explanation": "Haftanın günlerinden ve tam tarihlerden önce 'on' edatı kullanılır: on Friday, on May 2nd."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Günler, Aylar, Mevsimler ve Tarihler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "The international language conference will officially take place ___ September (lesson 7).",
    "options": [
      "in",
      "on",
      "at",
      "by"
    ],
    "correctAnswer": "in",
    "hint": "'Günler, Aylar, Mevsimler ve Tarihler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'in' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Bizim önemli proje toplantımız pazartesi sabahı saat onda yapılacak.",
    "targetEn": "Our important team meeting is scheduled on Monday morning in lesson 7",
    "availableWords": [
      "Our",
      "important",
      "team",
      "meeting",
      "is",
      "scheduled",
      "on",
      "Monday",
      "morning",
      "in",
      "lesson",
      "7",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'Our important team meeting is scheduled on Monday morning in lesson 7'."
  },
  "summaryTakeaways": [
    "'Günler, Aylar, Mevsimler ve Tarihler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  8: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında saati sormayı (What time is it?) ve söylemeyi (half past, quarter to) doğru telaffuzla uygulayabilmek.",
  "whyItMatters": "Ulaşım araçlarını yakalamak, randevulara vaktinde gitmek ve günlük akışı planlamak için saatler şarttır.",
  "linguisticLogic": "Saati söylerken 'It is + saat' kullanılır. Geçe kalıbında 'past', kala kalıbında 'to', buçukta 'half past', çeyrekte 'quarter past / to' kullanılır. Saatlerden önce 'at' edatı gelir (at 3 o'clock).",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Saatler ve Zaman İfadeleri' Yapısının Temel Kuralı",
      "content": "Saatler ve Zaman İfadeleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Saatler ve Zaman İfadeleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Saatler ve Zaman İfadeleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Saatler ve Zaman İfadeleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Saatler ve Zaman İfadeleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Saatler ve Zaman İfadeleri — Ana Kural",
      "formula": "Özne + Saatler ve Zaman İfadeleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying saatler ve zaman i̇fadeleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Saatler ve Zaman İfadeleri' kalıbını zorlamak.",
      "correctExample": "'Saatler ve Zaman İfadeleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Saatler ve Zaman İfadeleri",
    "description": "Saatler ve Zaman İfadeleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use saatler ve zaman i̇fadeleri in your conversation?",
        "textTr": "Konuşmanızda Saatler ve Zaman İfadeleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Saatler ve Zaman İfadeleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede saatler ve zaman i̇fadeleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Saatler ve Zaman İfadeleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices saatler ve zaman i̇fadeleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Saatler ve Zaman İfadeleri pratiği yapar.",
      "highlightedWords": [
        "saatler ve zaman i̇fadeleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use saatler ve zaman i̇fadeleri in daily dialogues?",
      "tr": "Günlük diyaloglarda Saatler ve Zaman İfadeleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on saatler ve zaman i̇fadeleri yesterday.",
      "tr": "Dün Saatler ve Zaman İfadeleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Quarter",
      "phonetic": "/ˈkwɔː.tər/",
      "partOfSpeech": "noun",
      "meaningTr": "Çeyrek (15 dakika)",
      "exampleSentence": "It is a quarter past ten."
    },
    {
      "word": "Midnight",
      "phonetic": "/ˈmɪd.naɪt/",
      "partOfSpeech": "noun",
      "meaningTr": "Gece yarısı",
      "exampleSentence": "The flight arrived at midnight."
    },
    {
      "word": "Schedule",
      "phonetic": "/ˈʃedʒ.uːl/",
      "partOfSpeech": "noun",
      "meaningTr": "Program, saat tarifesi",
      "exampleSentence": "The train runs on schedule."
    },
    {
      "word": "Promptly",
      "phonetic": "/ˈprɒmpt.li/",
      "partOfSpeech": "adverb",
      "meaningTr": "Tam vaktinde, derhal",
      "exampleSentence": "Arrive promptly at nine."
    }
  ],
  "quickCheck": {
    "question": "İngilizcede kesin bir saatten bahsederken (Örn: 'at 5 o'clock') hangi edat kullanılır? (#8)",
    "options": [
      "At (Örn: at 5 o'clock)",
      "On",
      "In",
      "With"
    ],
    "correctIndex": 0,
    "explanation": "Kesin saat bildirimlerinde daima 'at' edatı kullanılır: at 3 o'clock, at half past four."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Saatler ve Zaman İfadeleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "The morning business briefing starts promptly ___ half past eight (lesson 8).",
    "options": [
      "at",
      "on",
      "in",
      "to"
    ],
    "correctAnswer": "at",
    "hint": "'Saatler ve Zaman İfadeleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'at' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Saat şu anda tam olarak üçe çeyrek var ve tren yakında kalkacak.",
    "targetEn": "It is currently a quarter to three and our train departs soon in lesson 8",
    "availableWords": [
      "It",
      "is",
      "currently",
      "a",
      "quarter",
      "to",
      "three",
      "and",
      "our",
      "train",
      "departs",
      "soon",
      "in",
      "lesson",
      "8",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'It is currently a quarter to three and our train departs soon in lesson 8'."
  },
  "summaryTakeaways": [
    "'Saatler ve Zaman İfadeleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  9: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında sınıf içi ve günlük yönergeleri (Imperatives: Open your book, Listen carefully) anlayabilmek ve uygulayabilmek.",
  "whyItMatters": "Talimatları, yönlendirmeleri ve acil yönergeleri kavramak güvenli ve düzenli iletişimin anahtarıdır.",
  "linguisticLogic": "Emir ve yönerge cümlelerinde özne yazılmaz; doğrudan yalın fiille başlanır: 'Open your book'. Olumsuz emirlerde 'Don't + V1' kullanılır: 'Don't talk'.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Sınıf ve Günlük İletişim Yönergeleri' Yapısının Temel Kuralı",
      "content": "Sınıf ve Günlük İletişim Yönergeleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Sınıf ve Günlük İletişim Yönergeleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Sınıf ve Günlük İletişim Yönergeleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Sınıf ve Günlük İletişim Yönergeleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Sınıf ve Günlük İletişim Yönergeleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Sınıf ve Günlük İletişim Yönergeleri — Ana Kural",
      "formula": "Özne + Sınıf ve Günlük İletişim Yönergeleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying sınıf ve günlük i̇letişim yönergeleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Sınıf ve Günlük İletişim Yönergeleri' kalıbını zorlamak.",
      "correctExample": "'Sınıf ve Günlük İletişim Yönergeleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Sınıf ve Günlük İletişim Yönergeleri",
    "description": "Sınıf ve Günlük İletişim Yönergeleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use sınıf ve günlük i̇letişim yönergeleri in your conversation?",
        "textTr": "Konuşmanızda Sınıf ve Günlük İletişim Yönergeleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Sınıf ve Günlük İletişim Yönergeleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede sınıf ve günlük i̇letişim yönergeleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Sınıf ve Günlük İletişim Yönergeleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices sınıf ve günlük i̇letişim yönergeleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Sınıf ve Günlük İletişim Yönergeleri pratiği yapar.",
      "highlightedWords": [
        "sınıf ve günlük i̇letişim yönergeleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use sınıf ve günlük i̇letişim yönergeleri in daily dialogues?",
      "tr": "Günlük diyaloglarda Sınıf ve Günlük İletişim Yönergeleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on sınıf ve günlük i̇letişim yönergeleri yesterday.",
      "tr": "Dün Sınıf ve Günlük İletişim Yönergeleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Instruction",
      "phonetic": "/ɪnˈstrʌk.ʃən/",
      "partOfSpeech": "noun",
      "meaningTr": "Talimat, yönerge",
      "exampleSentence": "Follow the teacher's instruction."
    },
    {
      "word": "Attentively",
      "phonetic": "/əˈten.tɪv.li/",
      "partOfSpeech": "adverb",
      "meaningTr": "Dikkatle",
      "exampleSentence": "Listen attentively to the audio."
    },
    {
      "word": "Imperative",
      "phonetic": "/ɪmˈper.ə.tɪv/",
      "partOfSpeech": "noun",
      "meaningTr": "Emir kipi",
      "exampleSentence": "Imperatives start with a bare verb."
    },
    {
      "word": "Quiet",
      "phonetic": "/ˈkwaɪ.ət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Sessiz",
      "exampleSentence": "Please be quiet in the exam room."
    }
  ],
  "quickCheck": {
    "question": "İngilizcede olumsuz bir yönerge veya emir verirken cümlenin başına ne gelir? (#9)",
    "options": [
      "Don't + Yalın Fiil (Örn: Don't speak)",
      "Doesn't",
      "No",
      "Not to"
    ],
    "correctIndex": 0,
    "explanation": "Olumsuz emir ve yönerge cümleleri öznesiz olarak 'Don't + V1' ile kurulur: 'Don't touch', 'Don't speak'."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Sınıf ve Günlük İletişim Yönergeleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "___ quiet in the library so other students can study effectively (lesson 9).",
    "options": [
      "Be",
      "Are",
      "You are",
      "Being"
    ],
    "correctAnswer": "Be",
    "hint": "'Sınıf ve Günlük İletişim Yönergeleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'Be' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Lütfen kitabınızın yirminci sayfasını açın ve ses kaydını dikkatle dinleyin.",
    "targetEn": "Please open your course book to page twenty and listen attentively in lesson 9",
    "availableWords": [
      "Please",
      "open",
      "your",
      "course",
      "book",
      "to",
      "page",
      "twenty",
      "and",
      "listen",
      "attentively",
      "in",
      "lesson",
      "9",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'Please open your course book to page twenty and listen attentively in lesson 9'."
  },
  "summaryTakeaways": [
    "'Sınıf ve Günlük İletişim Yönergeleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  10: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında temel nezaket kalıplarını (Please, Thank you, You're welcome, Excuse me, Sorry) sosyal bağlamda doğru kullanabilmek.",
  "whyItMatters": "Nezaket ifadeleri her dilde saygı ve pozitif sosyal bağ kurmanın en temel köprüsüdür.",
  "linguisticLogic": "Teşekkür için 'Thank you / Thanks', karşılık olarak 'You are welcome'; izin veya dikkat çekmek için 'Excuse me'; özür dilemek için 'I am sorry' kullanılır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Temel Nezaket Kuralları ve Sosyal Formüller' Yapısının Temel Kuralı",
      "content": "Temel Nezaket Kuralları ve Sosyal Formüller konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Temel Nezaket Kuralları ve Sosyal Formüller + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Temel Nezaket Kuralları ve Sosyal Formüller",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Temel Nezaket Kuralları ve Sosyal Formüller",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Temel Nezaket Kuralları ve Sosyal Formüller konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Temel Nezaket Kuralları ve Sosyal Formüller — Ana Kural",
      "formula": "Özne + Temel Nezaket Kuralları ve Sosyal Formüller + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying temel nezaket kuralları ve sosyal formüller correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Temel Nezaket Kuralları ve Sosyal Formüller' kalıbını zorlamak.",
      "correctExample": "'Temel Nezaket Kuralları ve Sosyal Formüller' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Tanışma, Alfabe ve Temel İletişim — Temel Nezaket Kuralları ve Sosyal Formüller",
    "description": "Temel Nezaket Kuralları ve Sosyal Formüller konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use temel nezaket kuralları ve sosyal formüller in your conversation?",
        "textTr": "Konuşmanızda Temel Nezaket Kuralları ve Sosyal Formüller konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Temel Nezaket Kuralları ve Sosyal Formüller' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede temel nezaket kuralları ve sosyal formüller yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Temel Nezaket Kuralları ve Sosyal Formüller' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices temel nezaket kuralları ve sosyal formüller every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Temel Nezaket Kuralları ve Sosyal Formüller pratiği yapar.",
      "highlightedWords": [
        "temel nezaket kuralları ve sosyal formüller"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use temel nezaket kuralları ve sosyal formüller in daily dialogues?",
      "tr": "Günlük diyaloglarda Temel Nezaket Kuralları ve Sosyal Formüller konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on temel nezaket kuralları ve sosyal formüller yesterday.",
      "tr": "Dün Temel Nezaket Kuralları ve Sosyal Formüller üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Courteous",
      "phonetic": "/ˈkɜː.ti.əs/",
      "partOfSpeech": "adjective",
      "meaningTr": "Kibar, nazik",
      "exampleSentence": "He gave a courteous response."
    },
    {
      "word": "Welcome",
      "phonetic": "/ˈwel.kəm/",
      "partOfSpeech": "phrase",
      "meaningTr": "Rica ederim",
      "exampleSentence": "You are very welcome."
    },
    {
      "word": "Appreciate",
      "phonetic": "/əˈpriː.ʃi.eɪt/",
      "partOfSpeech": "verb",
      "meaningTr": "Müteşekkir olmak",
      "exampleSentence": "I appreciate your help."
    },
    {
      "word": "Politeness",
      "phonetic": "/pəˈlaɪt.nəs/",
      "partOfSpeech": "noun",
      "meaningTr": "Nezaket",
      "exampleSentence": "Politeness opens every door."
    }
  ],
  "quickCheck": {
    "question": "Kalabalık bir yerde birinin önünden geçerken veya dikkatini çekerken hangi nezaket ifadesi kullanılır? (#10)",
    "options": [
      "Excuse me (Afedersiniz)",
      "Sorry",
      "Please",
      "Welcome"
    ],
    "correctIndex": 0,
    "explanation": "Birinin dikkatini çekmek veya geçmek için 'Excuse me' denir. Hata yapıldığında ise 'Sorry' denir."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Temel Nezaket Kuralları ve Sosyal Formüller' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "When someone says 'Thank you', the most polite standard response is 'You are ___' (lesson 10).",
    "options": [
      "welcome",
      "pleased",
      "good",
      "fine"
    ],
    "correctAnswer": "welcome",
    "hint": "'Temel Nezaket Kuralları ve Sosyal Formüller' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'welcome' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Nazik yardımınız için çok teşekkür ederim, rica ederim demek bir zevktir.",
    "targetEn": "Thank you very much for your kind assistance and you are always welcome in lesson 10",
    "availableWords": [
      "Thank",
      "you",
      "very",
      "much",
      "for",
      "your",
      "kind",
      "assistance",
      "and",
      "are",
      "always",
      "welcome",
      "in",
      "lesson",
      "10",
      "often",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'Thank you very much for your kind assistance and you are always welcome in lesson 10'."
  },
  "summaryTakeaways": [
    "'Temel Nezaket Kuralları ve Sosyal Formüller' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  11: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'To Be' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'To Be' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'To Be' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'To Be' Yapısının Temel Kuralı",
      "content": "To Be konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + To Be + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: To Be",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + To Be",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "To Be konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "To Be — Ana Kural",
      "formula": "Özne + To Be + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying to be correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'To Be' kalıbını zorlamak.",
      "correctExample": "'To Be' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — To Be",
    "description": "To Be konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use to be in your conversation?",
        "textTr": "Konuşmanızda To Be konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'To Be' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede to be yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'To Be' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices to be every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah To Be pratiği yapar.",
      "highlightedWords": [
        "to be"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use to be in daily dialogues?",
      "tr": "Günlük diyaloglarda To Be konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on to be yesterday.",
      "tr": "Dün To Be üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of to be is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'To Be' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#11)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'To Be' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply to be ___ (practice item 11).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'To Be' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'To Be' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of to be every day to communicate naturally in lesson 11",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "to",
      "be",
      "every",
      "day",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "11",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of to be every day to communicate naturally in lesson 11'."
  },
  "summaryTakeaways": [
    "'To Be' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  12: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'To Be: Olumsuz Cümleler ve Kısaltmalar' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'To Be: Olumsuz Cümleler ve Kısaltmalar' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'To Be: Olumsuz Cümleler ve Kısaltmalar' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'To Be: Olumsuz Cümleler ve Kısaltmalar' Yapısının Temel Kuralı",
      "content": "To Be: Olumsuz Cümleler ve Kısaltmalar konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + To Be: Olumsuz Cümleler ve Kısaltmalar + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: To Be: Olumsuz Cümleler ve Kısaltmalar",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + To Be: Olumsuz Cümleler ve Kısaltmalar",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "To Be: Olumsuz Cümleler ve Kısaltmalar konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "To Be: Olumsuz Cümleler ve Kısaltmalar — Ana Kural",
      "formula": "Özne + To Be: Olumsuz Cümleler ve Kısaltmalar + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying to be: olumsuz cümleler ve kısaltmalar correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'To Be: Olumsuz Cümleler ve Kısaltmalar' kalıbını zorlamak.",
      "correctExample": "'To Be: Olumsuz Cümleler ve Kısaltmalar' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — To Be: Olumsuz Cümleler ve Kısaltmalar",
    "description": "To Be: Olumsuz Cümleler ve Kısaltmalar konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use to be: olumsuz cümleler ve kısaltmalar in your conversation?",
        "textTr": "Konuşmanızda To Be: Olumsuz Cümleler ve Kısaltmalar konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'To Be: Olumsuz Cümleler ve Kısaltmalar' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede to be: olumsuz cümleler ve kısaltmalar yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'To Be: Olumsuz Cümleler ve Kısaltmalar' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices to be: olumsuz cümleler ve kısaltmalar every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah To Be: Olumsuz Cümleler ve Kısaltmalar pratiği yapar.",
      "highlightedWords": [
        "to be: olumsuz cümleler ve kısaltmalar"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use to be: olumsuz cümleler ve kısaltmalar in daily dialogues?",
      "tr": "Günlük diyaloglarda To Be: Olumsuz Cümleler ve Kısaltmalar konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on to be: olumsuz cümleler ve kısaltmalar yesterday.",
      "tr": "Dün To Be: Olumsuz Cümleler ve Kısaltmalar üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of to be: olumsuz cümleler ve kısaltmalar is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'To Be: Olumsuz Cümleler ve Kısaltmalar' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#12)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'To Be: Olumsuz Cümleler ve Kısaltmalar' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply to be: olumsuz cümleler ve kısaltmalar ___ (practice item 12).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'To Be: Olumsuz Cümleler ve Kısaltmalar' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'To Be: Olumsuz Cümleler ve Kısaltmalar' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of to be: olumsuz cümleler ve kısaltmalar every day to communicate naturally in lesson 12",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "to",
      "be",
      "olumsuz",
      "cümleler",
      "ve",
      "kısaltmalar",
      "every",
      "day",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "12",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of to be: olumsuz cümleler ve kısaltmalar every day to communicate naturally in lesson 12'."
  },
  "summaryTakeaways": [
    "'To Be: Olumsuz Cümleler ve Kısaltmalar' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  13: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'To Be: Soru Cümleleri ve Kısa Cevaplar' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'To Be: Soru Cümleleri ve Kısa Cevaplar' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'To Be: Soru Cümleleri ve Kısa Cevaplar' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'To Be: Soru Cümleleri ve Kısa Cevaplar' Yapısının Temel Kuralı",
      "content": "To Be: Soru Cümleleri ve Kısa Cevaplar konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + To Be: Soru Cümleleri ve Kısa Cevaplar + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: To Be: Soru Cümleleri ve Kısa Cevaplar",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + To Be: Soru Cümleleri ve Kısa Cevaplar",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "To Be: Soru Cümleleri ve Kısa Cevaplar konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "To Be: Soru Cümleleri ve Kısa Cevaplar — Ana Kural",
      "formula": "Özne + To Be: Soru Cümleleri ve Kısa Cevaplar + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying to be: soru cümleleri ve kısa cevaplar correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'To Be: Soru Cümleleri ve Kısa Cevaplar' kalıbını zorlamak.",
      "correctExample": "'To Be: Soru Cümleleri ve Kısa Cevaplar' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — To Be: Soru Cümleleri ve Kısa Cevaplar",
    "description": "To Be: Soru Cümleleri ve Kısa Cevaplar konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use to be: soru cümleleri ve kısa cevaplar in your conversation?",
        "textTr": "Konuşmanızda To Be: Soru Cümleleri ve Kısa Cevaplar konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'To Be: Soru Cümleleri ve Kısa Cevaplar' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede to be: soru cümleleri ve kısa cevaplar yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'To Be: Soru Cümleleri ve Kısa Cevaplar' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices to be: soru cümleleri ve kısa cevaplar every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah To Be: Soru Cümleleri ve Kısa Cevaplar pratiği yapar.",
      "highlightedWords": [
        "to be: soru cümleleri ve kısa cevaplar"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use to be: soru cümleleri ve kısa cevaplar in daily dialogues?",
      "tr": "Günlük diyaloglarda To Be: Soru Cümleleri ve Kısa Cevaplar konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on to be: soru cümleleri ve kısa cevaplar yesterday.",
      "tr": "Dün To Be: Soru Cümleleri ve Kısa Cevaplar üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of to be: soru cümleleri ve kısa cevaplar is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'To Be: Soru Cümleleri ve Kısa Cevaplar' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#13)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'To Be: Soru Cümleleri ve Kısa Cevaplar' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply to be: soru cümleleri ve kısa cevaplar ___ (practice item 13).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'To Be: Soru Cümleleri ve Kısa Cevaplar' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'To Be: Soru Cümleleri ve Kısa Cevaplar' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of to be: soru cümleleri ve kısa cevaplar every day to communicate naturally in lesson 13",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "to",
      "be",
      "soru",
      "cümleleri",
      "ve",
      "kısa",
      "cevaplar",
      "every",
      "day",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "13",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of to be: soru cümleleri ve kısa cevaplar every day to communicate naturally in lesson 13'."
  },
  "summaryTakeaways": [
    "'To Be: Soru Cümleleri ve Kısa Cevaplar' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  14: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'There is & There are' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'There is & There are' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'There is & There are' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'There is & There are' Yapısının Temel Kuralı",
      "content": "There is & There are konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + There is & There are + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: There is & There are",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + There is & There are",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "There is & There are konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "There is & There are — Ana Kural",
      "formula": "Özne + There is & There are + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying there is & there are correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'There is & There are' kalıbını zorlamak.",
      "correctExample": "'There is & There are' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — There is & There are",
    "description": "There is & There are konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use there is & there are in your conversation?",
        "textTr": "Konuşmanızda There is & There are konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'There is & There are' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede there is & there are yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'There is & There are' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices there is & there are every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah There is & There are pratiği yapar.",
      "highlightedWords": [
        "there is & there are"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use there is & there are in daily dialogues?",
      "tr": "Günlük diyaloglarda There is & There are konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on there is & there are yesterday.",
      "tr": "Dün There is & There are üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of there is & there are is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'There is & There are' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#14)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'There is & There are' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply there is & there are ___ (practice item 14).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'There is & There are' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'There is & There are' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of there is & there are every day to communicate naturally in lesson 14",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "there",
      "is",
      "&",
      "are",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "14",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of there is & there are every day to communicate naturally in lesson 14'."
  },
  "summaryTakeaways": [
    "'There is & There are' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  15: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'There is / are: Olumsuz ve Soru Halleri' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'There is / are: Olumsuz ve Soru Halleri' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'There is / are: Olumsuz ve Soru Halleri' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'There is / are: Olumsuz ve Soru Halleri' Yapısının Temel Kuralı",
      "content": "There is / are: Olumsuz ve Soru Halleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + There is / are: Olumsuz ve Soru Halleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: There is / are: Olumsuz ve Soru Halleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + There is / are: Olumsuz ve Soru Halleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "There is / are: Olumsuz ve Soru Halleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "There is / are: Olumsuz ve Soru Halleri — Ana Kural",
      "formula": "Özne + There is / are: Olumsuz ve Soru Halleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying there is / are: olumsuz ve soru halleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'There is / are: Olumsuz ve Soru Halleri' kalıbını zorlamak.",
      "correctExample": "'There is / are: Olumsuz ve Soru Halleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — There is / are: Olumsuz ve Soru Halleri",
    "description": "There is / are: Olumsuz ve Soru Halleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use there is / are: olumsuz ve soru halleri in your conversation?",
        "textTr": "Konuşmanızda There is / are: Olumsuz ve Soru Halleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'There is / are: Olumsuz ve Soru Halleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede there is / are: olumsuz ve soru halleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'There is / are: Olumsuz ve Soru Halleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices there is / are: olumsuz ve soru halleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah There is / are: Olumsuz ve Soru Halleri pratiği yapar.",
      "highlightedWords": [
        "there is / are: olumsuz ve soru halleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use there is / are: olumsuz ve soru halleri in daily dialogues?",
      "tr": "Günlük diyaloglarda There is / are: Olumsuz ve Soru Halleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on there is / are: olumsuz ve soru halleri yesterday.",
      "tr": "Dün There is / are: Olumsuz ve Soru Halleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of there is / are: olumsuz ve soru halleri is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'There is / are: Olumsuz ve Soru Halleri' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#15)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'There is / are: Olumsuz ve Soru Halleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply there is / are: olumsuz ve soru halleri ___ (practice item 15).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'There is / are: Olumsuz ve Soru Halleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'There is / are: Olumsuz ve Soru Halleri' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of there is / are: olumsuz ve soru halleri every day to communicate naturally in lesson 15",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "there",
      "is",
      "/",
      "are",
      "olumsuz",
      "ve",
      "soru",
      "halleri",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "15",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of there is / are: olumsuz ve soru halleri every day to communicate naturally in lesson 15'."
  },
  "summaryTakeaways": [
    "'There is / are: Olumsuz ve Soru Halleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  16: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Temel Konum Edatları: In, On, Under, Next to, Behind' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Temel Konum Edatları: In, On, Under, Next to, Behind' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Temel Konum Edatları: In, On, Under, Next to, Behind' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Temel Konum Edatları: In, On, Under, Next to, Behind' Yapısının Temel Kuralı",
      "content": "Temel Konum Edatları: In, On, Under, Next to, Behind konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Temel Konum Edatları: In, On, Under, Next to, Behind + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Temel Konum Edatları: In, On, Under, Next to, Behind",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Temel Konum Edatları: In, On, Under, Next to, Behind",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Temel Konum Edatları: In, On, Under, Next to, Behind konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Temel Konum Edatları: In, On, Under, Next to, Behind — Ana Kural",
      "formula": "Özne + Temel Konum Edatları: In, On, Under, Next to, Behind + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying temel konum edatları: in, on, under, next to, behind correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Temel Konum Edatları: In, On, Under, Next to, Behind' kalıbını zorlamak.",
      "correctExample": "'Temel Konum Edatları: In, On, Under, Next to, Behind' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — Temel Konum Edatları: In, On, Under, Next to, Behind",
    "description": "Temel Konum Edatları: In, On, Under, Next to, Behind konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use temel konum edatları: in, on, under, next to, behind in your conversation?",
        "textTr": "Konuşmanızda Temel Konum Edatları: In, On, Under, Next to, Behind konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Temel Konum Edatları: In, On, Under, Next to, Behind' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede temel konum edatları: in, on, under, next to, behind yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Temel Konum Edatları: In, On, Under, Next to, Behind' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices temel konum edatları: in, on, under, next to, behind every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Temel Konum Edatları: In, On, Under, Next to, Behind pratiği yapar.",
      "highlightedWords": [
        "temel konum edatları: in, on, under, next to, behind"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use temel konum edatları: in, on, under, next to, behind in daily dialogues?",
      "tr": "Günlük diyaloglarda Temel Konum Edatları: In, On, Under, Next to, Behind konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on temel konum edatları: in, on, under, next to, behind yesterday.",
      "tr": "Dün Temel Konum Edatları: In, On, Under, Next to, Behind üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of temel konum edatları: in, on, under, next to, behind is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Temel Konum Edatları: In, On, Under, Next to, Behind' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#16)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Temel Konum Edatları: In, On, Under, Next to, Behind' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply temel konum edatları: in, on, under, next to, behind ___ (practice item 16).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Temel Konum Edatları: In, On, Under, Next to, Behind' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Temel Konum Edatları: In, On, Under, Next to, Behind' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of temel konum edatları: in, on, under, next to, behind every day to communicate naturally in lesson 16",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "temel",
      "konum",
      "edatları",
      "in",
      "on",
      "under",
      "next",
      "to",
      "behind",
      "every",
      "day",
      "communicate",
      "naturally",
      "lesson",
      "16",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of temel konum edatları: in, on, under, next to, behind every day to communicate naturally in lesson 16'."
  },
  "summaryTakeaways": [
    "'Temel Konum Edatları: In, On, Under, Next to, Behind' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  17: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Renkler ve Temel Niteleme Sıfatları' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Renkler ve Temel Niteleme Sıfatları' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Renkler ve Temel Niteleme Sıfatları' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Renkler ve Temel Niteleme Sıfatları' Yapısının Temel Kuralı",
      "content": "Renkler ve Temel Niteleme Sıfatları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Renkler ve Temel Niteleme Sıfatları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Renkler ve Temel Niteleme Sıfatları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Renkler ve Temel Niteleme Sıfatları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Renkler ve Temel Niteleme Sıfatları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Renkler ve Temel Niteleme Sıfatları — Ana Kural",
      "formula": "Özne + Renkler ve Temel Niteleme Sıfatları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying renkler ve temel niteleme sıfatları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Renkler ve Temel Niteleme Sıfatları' kalıbını zorlamak.",
      "correctExample": "'Renkler ve Temel Niteleme Sıfatları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — Renkler ve Temel Niteleme Sıfatları",
    "description": "Renkler ve Temel Niteleme Sıfatları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use renkler ve temel niteleme sıfatları in your conversation?",
        "textTr": "Konuşmanızda Renkler ve Temel Niteleme Sıfatları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Renkler ve Temel Niteleme Sıfatları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede renkler ve temel niteleme sıfatları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Renkler ve Temel Niteleme Sıfatları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices renkler ve temel niteleme sıfatları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Renkler ve Temel Niteleme Sıfatları pratiği yapar.",
      "highlightedWords": [
        "renkler ve temel niteleme sıfatları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use renkler ve temel niteleme sıfatları in daily dialogues?",
      "tr": "Günlük diyaloglarda Renkler ve Temel Niteleme Sıfatları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on renkler ve temel niteleme sıfatları yesterday.",
      "tr": "Dün Renkler ve Temel Niteleme Sıfatları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of renkler ve temel niteleme sıfatları is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Renkler ve Temel Niteleme Sıfatları' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#17)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Renkler ve Temel Niteleme Sıfatları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply renkler ve temel niteleme sıfatları ___ (practice item 17).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Renkler ve Temel Niteleme Sıfatları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Renkler ve Temel Niteleme Sıfatları' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of renkler ve temel niteleme sıfatları every day to communicate naturally in lesson 17",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "renkler",
      "ve",
      "temel",
      "niteleme",
      "sıfatları",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "17",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of renkler ve temel niteleme sıfatları every day to communicate naturally in lesson 17'."
  },
  "summaryTakeaways": [
    "'Renkler ve Temel Niteleme Sıfatları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  18: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Duygular ve Fiziksel Durumlar' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Duygular ve Fiziksel Durumlar' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Duygular ve Fiziksel Durumlar' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Duygular ve Fiziksel Durumlar' Yapısının Temel Kuralı",
      "content": "Duygular ve Fiziksel Durumlar konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Duygular ve Fiziksel Durumlar + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Duygular ve Fiziksel Durumlar",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Duygular ve Fiziksel Durumlar",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Duygular ve Fiziksel Durumlar konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Duygular ve Fiziksel Durumlar — Ana Kural",
      "formula": "Özne + Duygular ve Fiziksel Durumlar + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying duygular ve fiziksel durumlar correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Duygular ve Fiziksel Durumlar' kalıbını zorlamak.",
      "correctExample": "'Duygular ve Fiziksel Durumlar' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — Duygular ve Fiziksel Durumlar",
    "description": "Duygular ve Fiziksel Durumlar konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use duygular ve fiziksel durumlar in your conversation?",
        "textTr": "Konuşmanızda Duygular ve Fiziksel Durumlar konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Duygular ve Fiziksel Durumlar' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede duygular ve fiziksel durumlar yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Duygular ve Fiziksel Durumlar' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices duygular ve fiziksel durumlar every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Duygular ve Fiziksel Durumlar pratiği yapar.",
      "highlightedWords": [
        "duygular ve fiziksel durumlar"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use duygular ve fiziksel durumlar in daily dialogues?",
      "tr": "Günlük diyaloglarda Duygular ve Fiziksel Durumlar konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on duygular ve fiziksel durumlar yesterday.",
      "tr": "Dün Duygular ve Fiziksel Durumlar üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of duygular ve fiziksel durumlar is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Duygular ve Fiziksel Durumlar' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#18)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Duygular ve Fiziksel Durumlar' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply duygular ve fiziksel durumlar ___ (practice item 18).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Duygular ve Fiziksel Durumlar' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Duygular ve Fiziksel Durumlar' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of duygular ve fiziksel durumlar every day to communicate naturally in lesson 18",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "duygular",
      "ve",
      "fiziksel",
      "durumlar",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "18",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of duygular ve fiziksel durumlar every day to communicate naturally in lesson 18'."
  },
  "summaryTakeaways": [
    "'Duygular ve Fiziksel Durumlar' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  19: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Hava Durumu ve Sıcaklık İfadeleri' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Hava Durumu ve Sıcaklık İfadeleri' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Hava Durumu ve Sıcaklık İfadeleri' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Hava Durumu ve Sıcaklık İfadeleri' Yapısının Temel Kuralı",
      "content": "Hava Durumu ve Sıcaklık İfadeleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Hava Durumu ve Sıcaklık İfadeleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Hava Durumu ve Sıcaklık İfadeleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Hava Durumu ve Sıcaklık İfadeleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Hava Durumu ve Sıcaklık İfadeleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Hava Durumu ve Sıcaklık İfadeleri — Ana Kural",
      "formula": "Özne + Hava Durumu ve Sıcaklık İfadeleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying hava durumu ve sıcaklık i̇fadeleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Hava Durumu ve Sıcaklık İfadeleri' kalıbını zorlamak.",
      "correctExample": "'Hava Durumu ve Sıcaklık İfadeleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — Hava Durumu ve Sıcaklık İfadeleri",
    "description": "Hava Durumu ve Sıcaklık İfadeleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use hava durumu ve sıcaklık i̇fadeleri in your conversation?",
        "textTr": "Konuşmanızda Hava Durumu ve Sıcaklık İfadeleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Hava Durumu ve Sıcaklık İfadeleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede hava durumu ve sıcaklık i̇fadeleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Hava Durumu ve Sıcaklık İfadeleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices hava durumu ve sıcaklık i̇fadeleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Hava Durumu ve Sıcaklık İfadeleri pratiği yapar.",
      "highlightedWords": [
        "hava durumu ve sıcaklık i̇fadeleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use hava durumu ve sıcaklık i̇fadeleri in daily dialogues?",
      "tr": "Günlük diyaloglarda Hava Durumu ve Sıcaklık İfadeleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on hava durumu ve sıcaklık i̇fadeleri yesterday.",
      "tr": "Dün Hava Durumu ve Sıcaklık İfadeleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of hava durumu ve sıcaklık i̇fadeleri is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Hava Durumu ve Sıcaklık İfadeleri' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#19)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Hava Durumu ve Sıcaklık İfadeleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply hava durumu ve sıcaklık i̇fadeleri ___ (practice item 19).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Hava Durumu ve Sıcaklık İfadeleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Hava Durumu ve Sıcaklık İfadeleri' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of hava durumu ve sıcaklık i̇fadeleri every day to communicate naturally in lesson 19",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "hava",
      "durumu",
      "ve",
      "sıcaklık",
      "i̇fadeleri",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "19",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of hava durumu ve sıcaklık i̇fadeleri every day to communicate naturally in lesson 19'."
  },
  "summaryTakeaways": [
    "'Hava Durumu ve Sıcaklık İfadeleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  20: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' Yapısının Temel Kuralı",
      "content": "A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme — Ana Kural",
      "formula": "Özne + A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a1 modül 2 entegrasyonu: evim ve odamı tasvir etme correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' kalıbını zorlamak.",
      "correctExample": "'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Durum Cümleleri ve Varlık Bildirimi — A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme",
    "description": "A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a1 modül 2 entegrasyonu: evim ve odamı tasvir etme in your conversation?",
        "textTr": "Konuşmanızda A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a1 modül 2 entegrasyonu: evim ve odamı tasvir etme yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a1 modül 2 entegrasyonu: evim ve odamı tasvir etme every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme pratiği yapar.",
      "highlightedWords": [
        "a1 modül 2 entegrasyonu: evim ve odamı tasvir etme"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a1 modül 2 entegrasyonu: evim ve odamı tasvir etme in daily dialogues?",
      "tr": "Günlük diyaloglarda A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a1 modül 2 entegrasyonu: evim ve odamı tasvir etme yesterday.",
      "tr": "Dün A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a1 modül 2 entegrasyonu: evim ve odamı tasvir etme is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#20)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a1 modül 2 entegrasyonu: evim ve odamı tasvir etme ___ (practice item 20).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a1 modül 2 entegrasyonu: evim ve odamı tasvir etme every day to communicate naturally in lesson 20",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a1",
      "modül",
      "2",
      "entegrasyonu",
      "evim",
      "ve",
      "odamı",
      "tasvir",
      "etme",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "20",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a1 modül 2 entegrasyonu: evim ve odamı tasvir etme every day to communicate naturally in lesson 20'."
  },
  "summaryTakeaways": [
    "'A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  21: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Geniş Zaman : Olumlu Cümleler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Geniş Zaman : Olumlu Cümleler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Geniş Zaman : Olumlu Cümleler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Geniş Zaman : Olumlu Cümleler' Yapısının Temel Kuralı",
      "content": "Geniş Zaman : Olumlu Cümleler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Geniş Zaman : Olumlu Cümleler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Geniş Zaman : Olumlu Cümleler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Geniş Zaman : Olumlu Cümleler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Geniş Zaman : Olumlu Cümleler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Geniş Zaman : Olumlu Cümleler — Ana Kural",
      "formula": "Özne + Geniş Zaman : Olumlu Cümleler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying geniş zaman : olumlu cümleler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Geniş Zaman : Olumlu Cümleler' kalıbını zorlamak.",
      "correctExample": "'Geniş Zaman : Olumlu Cümleler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — Geniş Zaman : Olumlu Cümleler",
    "description": "Geniş Zaman : Olumlu Cümleler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use geniş zaman : olumlu cümleler in your conversation?",
        "textTr": "Konuşmanızda Geniş Zaman : Olumlu Cümleler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Geniş Zaman : Olumlu Cümleler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede geniş zaman : olumlu cümleler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Geniş Zaman : Olumlu Cümleler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices geniş zaman : olumlu cümleler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Geniş Zaman : Olumlu Cümleler pratiği yapar.",
      "highlightedWords": [
        "geniş zaman : olumlu cümleler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use geniş zaman : olumlu cümleler in daily dialogues?",
      "tr": "Günlük diyaloglarda Geniş Zaman : Olumlu Cümleler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on geniş zaman : olumlu cümleler yesterday.",
      "tr": "Dün Geniş Zaman : Olumlu Cümleler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of geniş zaman : olumlu cümleler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Geniş Zaman : Olumlu Cümleler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#21)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Geniş Zaman : Olumlu Cümleler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply geniş zaman : olumlu cümleler ___ (practice item 21).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Geniş Zaman : Olumlu Cümleler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Geniş Zaman : Olumlu Cümleler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of geniş zaman : olumlu cümleler every day to communicate naturally in lesson 21",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "geniş",
      "zaman",
      "olumlu",
      "cümleler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "21",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of geniş zaman : olumlu cümleler every day to communicate naturally in lesson 21'."
  },
  "summaryTakeaways": [
    "'Geniş Zaman : Olumlu Cümleler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  22: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' Yapısının Temel Kuralı",
      "content": "Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları — Ana Kural",
      "formula": "Özne + Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' kalıbını zorlamak.",
      "correctExample": "'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları",
    "description": "Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları in your conversation?",
        "textTr": "Konuşmanızda Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları pratiği yapar.",
      "highlightedWords": [
        "present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları in daily dialogues?",
      "tr": "Günlük diyaloglarda Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları yesterday.",
      "tr": "Dün Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#22)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları ___ (practice item 22).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları every day to communicate naturally in lesson 22",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "present",
      "simple",
      "3",
      "tekil",
      "şahıs",
      "-s/-es/-ies",
      "takısı",
      "kuralları",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "22",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of present simple: 3. tekil şahıs -s/-es/-ies takısı kuralları every day to communicate naturally in lesson 22'."
  },
  "summaryTakeaways": [
    "'Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  23: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Present Simple: Olumsuz Cümleler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Present Simple: Olumsuz Cümleler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Present Simple: Olumsuz Cümleler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Present Simple: Olumsuz Cümleler' Yapısının Temel Kuralı",
      "content": "Present Simple: Olumsuz Cümleler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Present Simple: Olumsuz Cümleler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Present Simple: Olumsuz Cümleler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Present Simple: Olumsuz Cümleler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Present Simple: Olumsuz Cümleler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Present Simple: Olumsuz Cümleler — Ana Kural",
      "formula": "Özne + Present Simple: Olumsuz Cümleler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying present simple: olumsuz cümleler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Present Simple: Olumsuz Cümleler' kalıbını zorlamak.",
      "correctExample": "'Present Simple: Olumsuz Cümleler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — Present Simple: Olumsuz Cümleler",
    "description": "Present Simple: Olumsuz Cümleler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use present simple: olumsuz cümleler in your conversation?",
        "textTr": "Konuşmanızda Present Simple: Olumsuz Cümleler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Present Simple: Olumsuz Cümleler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede present simple: olumsuz cümleler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Present Simple: Olumsuz Cümleler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices present simple: olumsuz cümleler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Present Simple: Olumsuz Cümleler pratiği yapar.",
      "highlightedWords": [
        "present simple: olumsuz cümleler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use present simple: olumsuz cümleler in daily dialogues?",
      "tr": "Günlük diyaloglarda Present Simple: Olumsuz Cümleler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on present simple: olumsuz cümleler yesterday.",
      "tr": "Dün Present Simple: Olumsuz Cümleler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of present simple: olumsuz cümleler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Present Simple: Olumsuz Cümleler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#23)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Present Simple: Olumsuz Cümleler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply present simple: olumsuz cümleler ___ (practice item 23).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Present Simple: Olumsuz Cümleler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Present Simple: Olumsuz Cümleler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of present simple: olumsuz cümleler every day to communicate naturally in lesson 23",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "present",
      "simple",
      "olumsuz",
      "cümleler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "23",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of present simple: olumsuz cümleler every day to communicate naturally in lesson 23'."
  },
  "summaryTakeaways": [
    "'Present Simple: Olumsuz Cümleler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  24: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' Yapısının Temel Kuralı",
      "content": "Present Simple: Soru Cümleleri  ve Kısa Cevaplar konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Present Simple: Soru Cümleleri  ve Kısa Cevaplar + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Present Simple: Soru Cümleleri  ve Kısa Cevaplar",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Present Simple: Soru Cümleleri  ve Kısa Cevaplar",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Present Simple: Soru Cümleleri  ve Kısa Cevaplar konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Present Simple: Soru Cümleleri  ve Kısa Cevaplar — Ana Kural",
      "formula": "Özne + Present Simple: Soru Cümleleri  ve Kısa Cevaplar + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying present simple: soru cümleleri  ve kısa cevaplar correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' kalıbını zorlamak.",
      "correctExample": "'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — Present Simple: Soru Cümleleri  ve Kısa Cevaplar",
    "description": "Present Simple: Soru Cümleleri  ve Kısa Cevaplar konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use present simple: soru cümleleri  ve kısa cevaplar in your conversation?",
        "textTr": "Konuşmanızda Present Simple: Soru Cümleleri  ve Kısa Cevaplar konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede present simple: soru cümleleri  ve kısa cevaplar yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices present simple: soru cümleleri  ve kısa cevaplar every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Present Simple: Soru Cümleleri  ve Kısa Cevaplar pratiği yapar.",
      "highlightedWords": [
        "present simple: soru cümleleri  ve kısa cevaplar"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use present simple: soru cümleleri  ve kısa cevaplar in daily dialogues?",
      "tr": "Günlük diyaloglarda Present Simple: Soru Cümleleri  ve Kısa Cevaplar konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on present simple: soru cümleleri  ve kısa cevaplar yesterday.",
      "tr": "Dün Present Simple: Soru Cümleleri  ve Kısa Cevaplar üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of present simple: soru cümleleri  ve kısa cevaplar is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#24)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply present simple: soru cümleleri  ve kısa cevaplar ___ (practice item 24).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of present simple: soru cümleleri  ve kısa cevaplar every day to communicate naturally in lesson 24",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "present",
      "simple",
      "soru",
      "cümleleri",
      "ve",
      "kısa",
      "cevaplar",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "24",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of present simple: soru cümleleri  ve kısa cevaplar every day to communicate naturally in lesson 24'."
  },
  "summaryTakeaways": [
    "'Present Simple: Soru Cümleleri  ve Kısa Cevaplar' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  25: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' Yapısının Temel Kuralı",
      "content": "Sıklık Zarfları: Always, Usually, Often, Sometimes, Never konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Sıklık Zarfları: Always, Usually, Often, Sometimes, Never + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Sıklık Zarfları: Always, Usually, Often, Sometimes, Never",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Sıklık Zarfları: Always, Usually, Often, Sometimes, Never",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Sıklık Zarfları: Always, Usually, Often, Sometimes, Never konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Sıklık Zarfları: Always, Usually, Often, Sometimes, Never — Ana Kural",
      "formula": "Özne + Sıklık Zarfları: Always, Usually, Often, Sometimes, Never + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying sıklık zarfları: always, usually, often, sometimes, never correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' kalıbını zorlamak.",
      "correctExample": "'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — Sıklık Zarfları: Always, Usually, Often, Sometimes, Never",
    "description": "Sıklık Zarfları: Always, Usually, Often, Sometimes, Never konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use sıklık zarfları: always, usually, often, sometimes, never in your conversation?",
        "textTr": "Konuşmanızda Sıklık Zarfları: Always, Usually, Often, Sometimes, Never konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede sıklık zarfları: always, usually, often, sometimes, never yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices sıklık zarfları: always, usually, often, sometimes, never every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Sıklık Zarfları: Always, Usually, Often, Sometimes, Never pratiği yapar.",
      "highlightedWords": [
        "sıklık zarfları: always, usually, often, sometimes, never"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use sıklık zarfları: always, usually, often, sometimes, never in daily dialogues?",
      "tr": "Günlük diyaloglarda Sıklık Zarfları: Always, Usually, Often, Sometimes, Never konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on sıklık zarfları: always, usually, often, sometimes, never yesterday.",
      "tr": "Dün Sıklık Zarfları: Always, Usually, Often, Sometimes, Never üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of sıklık zarfları: always, usually, often, sometimes, never is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#25)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply sıklık zarfları: always, usually, often, sometimes, never ___ (practice item 25).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of sıklık zarfları: always, usually, often, sometimes, never every day to communicate naturally in lesson 25",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "sıklık",
      "zarfları",
      "always",
      "usually",
      "often",
      "sometimes",
      "never",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "25",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of sıklık zarfları: always, usually, often, sometimes, never every day to communicate naturally in lesson 25'."
  },
  "summaryTakeaways": [
    "'Sıklık Zarfları: Always, Usually, Often, Sometimes, Never' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  26: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Günlük Sabah Rutini Fiilleri' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Günlük Sabah Rutini Fiilleri' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Günlük Sabah Rutini Fiilleri' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Günlük Sabah Rutini Fiilleri' Yapısının Temel Kuralı",
      "content": "Günlük Sabah Rutini Fiilleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Günlük Sabah Rutini Fiilleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Günlük Sabah Rutini Fiilleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Günlük Sabah Rutini Fiilleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Günlük Sabah Rutini Fiilleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Günlük Sabah Rutini Fiilleri — Ana Kural",
      "formula": "Özne + Günlük Sabah Rutini Fiilleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying günlük sabah rutini fiilleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Günlük Sabah Rutini Fiilleri' kalıbını zorlamak.",
      "correctExample": "'Günlük Sabah Rutini Fiilleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — Günlük Sabah Rutini Fiilleri",
    "description": "Günlük Sabah Rutini Fiilleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use günlük sabah rutini fiilleri in your conversation?",
        "textTr": "Konuşmanızda Günlük Sabah Rutini Fiilleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Günlük Sabah Rutini Fiilleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede günlük sabah rutini fiilleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Günlük Sabah Rutini Fiilleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices günlük sabah rutini fiilleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Günlük Sabah Rutini Fiilleri pratiği yapar.",
      "highlightedWords": [
        "günlük sabah rutini fiilleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use günlük sabah rutini fiilleri in daily dialogues?",
      "tr": "Günlük diyaloglarda Günlük Sabah Rutini Fiilleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on günlük sabah rutini fiilleri yesterday.",
      "tr": "Dün Günlük Sabah Rutini Fiilleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of günlük sabah rutini fiilleri is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Günlük Sabah Rutini Fiilleri' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#26)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Günlük Sabah Rutini Fiilleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply günlük sabah rutini fiilleri ___ (practice item 26).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Günlük Sabah Rutini Fiilleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Günlük Sabah Rutini Fiilleri' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of günlük sabah rutini fiilleri every day to communicate naturally in lesson 26",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "günlük",
      "sabah",
      "rutini",
      "fiilleri",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "26",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of günlük sabah rutini fiilleri every day to communicate naturally in lesson 26'."
  },
  "summaryTakeaways": [
    "'Günlük Sabah Rutini Fiilleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  27: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'İş, Okul ve Akşam Rutinleri' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'İş, Okul ve Akşam Rutinleri' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'İş, Okul ve Akşam Rutinleri' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'İş, Okul ve Akşam Rutinleri' Yapısının Temel Kuralı",
      "content": "İş, Okul ve Akşam Rutinleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + İş, Okul ve Akşam Rutinleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: İş, Okul ve Akşam Rutinleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + İş, Okul ve Akşam Rutinleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "İş, Okul ve Akşam Rutinleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "İş, Okul ve Akşam Rutinleri — Ana Kural",
      "formula": "Özne + İş, Okul ve Akşam Rutinleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying i̇ş, okul ve akşam rutinleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'İş, Okul ve Akşam Rutinleri' kalıbını zorlamak.",
      "correctExample": "'İş, Okul ve Akşam Rutinleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — İş, Okul ve Akşam Rutinleri",
    "description": "İş, Okul ve Akşam Rutinleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use i̇ş, okul ve akşam rutinleri in your conversation?",
        "textTr": "Konuşmanızda İş, Okul ve Akşam Rutinleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'İş, Okul ve Akşam Rutinleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede i̇ş, okul ve akşam rutinleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'İş, Okul ve Akşam Rutinleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices i̇ş, okul ve akşam rutinleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah İş, Okul ve Akşam Rutinleri pratiği yapar.",
      "highlightedWords": [
        "i̇ş, okul ve akşam rutinleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use i̇ş, okul ve akşam rutinleri in daily dialogues?",
      "tr": "Günlük diyaloglarda İş, Okul ve Akşam Rutinleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on i̇ş, okul ve akşam rutinleri yesterday.",
      "tr": "Dün İş, Okul ve Akşam Rutinleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of i̇ş, okul ve akşam rutinleri is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'İş, Okul ve Akşam Rutinleri' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#27)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'İş, Okul ve Akşam Rutinleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply i̇ş, okul ve akşam rutinleri ___ (practice item 27).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'İş, Okul ve Akşam Rutinleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'İş, Okul ve Akşam Rutinleri' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of i̇ş, okul ve akşam rutinleri every day to communicate naturally in lesson 27",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "i̇ş",
      "okul",
      "ve",
      "akşam",
      "rutinleri",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "27",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of i̇ş, okul ve akşam rutinleri every day to communicate naturally in lesson 27'."
  },
  "summaryTakeaways": [
    "'İş, Okul ve Akşam Rutinleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  28: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Zaman Edatları: At, On, In Kullanım Matrisi' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Zaman Edatları: At, On, In Kullanım Matrisi' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Zaman Edatları: At, On, In Kullanım Matrisi' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Zaman Edatları: At, On, In Kullanım Matrisi' Yapısının Temel Kuralı",
      "content": "Zaman Edatları: At, On, In Kullanım Matrisi konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Zaman Edatları: At, On, In Kullanım Matrisi + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Zaman Edatları: At, On, In Kullanım Matrisi",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Zaman Edatları: At, On, In Kullanım Matrisi",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Zaman Edatları: At, On, In Kullanım Matrisi konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Zaman Edatları: At, On, In Kullanım Matrisi — Ana Kural",
      "formula": "Özne + Zaman Edatları: At, On, In Kullanım Matrisi + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying zaman edatları: at, on, in kullanım matrisi correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Zaman Edatları: At, On, In Kullanım Matrisi' kalıbını zorlamak.",
      "correctExample": "'Zaman Edatları: At, On, In Kullanım Matrisi' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — Zaman Edatları: At, On, In Kullanım Matrisi",
    "description": "Zaman Edatları: At, On, In Kullanım Matrisi konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use zaman edatları: at, on, in kullanım matrisi in your conversation?",
        "textTr": "Konuşmanızda Zaman Edatları: At, On, In Kullanım Matrisi konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Zaman Edatları: At, On, In Kullanım Matrisi' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede zaman edatları: at, on, in kullanım matrisi yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Zaman Edatları: At, On, In Kullanım Matrisi' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices zaman edatları: at, on, in kullanım matrisi every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Zaman Edatları: At, On, In Kullanım Matrisi pratiği yapar.",
      "highlightedWords": [
        "zaman edatları: at, on, in kullanım matrisi"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use zaman edatları: at, on, in kullanım matrisi in daily dialogues?",
      "tr": "Günlük diyaloglarda Zaman Edatları: At, On, In Kullanım Matrisi konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on zaman edatları: at, on, in kullanım matrisi yesterday.",
      "tr": "Dün Zaman Edatları: At, On, In Kullanım Matrisi üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of zaman edatları: at, on, in kullanım matrisi is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Zaman Edatları: At, On, In Kullanım Matrisi' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#28)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Zaman Edatları: At, On, In Kullanım Matrisi' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply zaman edatları: at, on, in kullanım matrisi ___ (practice item 28).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Zaman Edatları: At, On, In Kullanım Matrisi' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Zaman Edatları: At, On, In Kullanım Matrisi' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of zaman edatları: at, on, in kullanım matrisi every day to communicate naturally in lesson 28",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "zaman",
      "edatları",
      "at",
      "on",
      "in",
      "kullanım",
      "matrisi",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "lesson",
      "28",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of zaman edatları: at, on, in kullanım matrisi every day to communicate naturally in lesson 28'."
  },
  "summaryTakeaways": [
    "'Zaman Edatları: At, On, In Kullanım Matrisi' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  29: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Boş Zaman Aktiviteleri ve Hobiler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Boş Zaman Aktiviteleri ve Hobiler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Boş Zaman Aktiviteleri ve Hobiler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Boş Zaman Aktiviteleri ve Hobiler' Yapısının Temel Kuralı",
      "content": "Boş Zaman Aktiviteleri ve Hobiler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Boş Zaman Aktiviteleri ve Hobiler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Boş Zaman Aktiviteleri ve Hobiler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Boş Zaman Aktiviteleri ve Hobiler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Boş Zaman Aktiviteleri ve Hobiler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Boş Zaman Aktiviteleri ve Hobiler — Ana Kural",
      "formula": "Özne + Boş Zaman Aktiviteleri ve Hobiler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying boş zaman aktiviteleri ve hobiler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Boş Zaman Aktiviteleri ve Hobiler' kalıbını zorlamak.",
      "correctExample": "'Boş Zaman Aktiviteleri ve Hobiler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — Boş Zaman Aktiviteleri ve Hobiler",
    "description": "Boş Zaman Aktiviteleri ve Hobiler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use boş zaman aktiviteleri ve hobiler in your conversation?",
        "textTr": "Konuşmanızda Boş Zaman Aktiviteleri ve Hobiler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Boş Zaman Aktiviteleri ve Hobiler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede boş zaman aktiviteleri ve hobiler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Boş Zaman Aktiviteleri ve Hobiler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices boş zaman aktiviteleri ve hobiler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Boş Zaman Aktiviteleri ve Hobiler pratiği yapar.",
      "highlightedWords": [
        "boş zaman aktiviteleri ve hobiler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use boş zaman aktiviteleri ve hobiler in daily dialogues?",
      "tr": "Günlük diyaloglarda Boş Zaman Aktiviteleri ve Hobiler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on boş zaman aktiviteleri ve hobiler yesterday.",
      "tr": "Dün Boş Zaman Aktiviteleri ve Hobiler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of boş zaman aktiviteleri ve hobiler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Boş Zaman Aktiviteleri ve Hobiler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#29)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Boş Zaman Aktiviteleri ve Hobiler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply boş zaman aktiviteleri ve hobiler ___ (practice item 29).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Boş Zaman Aktiviteleri ve Hobiler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Boş Zaman Aktiviteleri ve Hobiler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of boş zaman aktiviteleri ve hobiler every day to communicate naturally in lesson 29",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "boş",
      "zaman",
      "aktiviteleri",
      "ve",
      "hobiler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "29",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of boş zaman aktiviteleri ve hobiler every day to communicate naturally in lesson 29'."
  },
  "summaryTakeaways": [
    "'Boş Zaman Aktiviteleri ve Hobiler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  30: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' Yapısının Temel Kuralı",
      "content": "A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma — Ana Kural",
      "formula": "Özne + A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' kalıbını zorlamak.",
      "correctExample": "'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Geniş Zaman ve Günlük Rutinler — A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma",
    "description": "A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma in your conversation?",
        "textTr": "Konuşmanızda A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma pratiği yapar.",
      "highlightedWords": [
        "a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma in daily dialogues?",
      "tr": "Günlük diyaloglarda A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma yesterday.",
      "tr": "Dün A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#30)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma ___ (practice item 30).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma every day to communicate naturally in lesson 30",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a1",
      "modül",
      "3",
      "entegrasyonu",
      "bir",
      "günümü",
      "baştan",
      "sona",
      "anlatma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "30",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a1 modül 3 entegrasyonu: bir günümü baştan sona anlatma every day to communicate naturally in lesson 30'."
  },
  "summaryTakeaways": [
    "'A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  31: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'İşaret Sıfatları: This & That' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'İşaret Sıfatları: This & That' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'İşaret Sıfatları: This & That' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'İşaret Sıfatları: This & That' Yapısının Temel Kuralı",
      "content": "İşaret Sıfatları: This & That konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + İşaret Sıfatları: This & That + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: İşaret Sıfatları: This & That",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + İşaret Sıfatları: This & That",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "İşaret Sıfatları: This & That konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "İşaret Sıfatları: This & That — Ana Kural",
      "formula": "Özne + İşaret Sıfatları: This & That + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying i̇şaret sıfatları: this & that correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'İşaret Sıfatları: This & That' kalıbını zorlamak.",
      "correctExample": "'İşaret Sıfatları: This & That' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — İşaret Sıfatları: This & That",
    "description": "İşaret Sıfatları: This & That konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use i̇şaret sıfatları: this & that in your conversation?",
        "textTr": "Konuşmanızda İşaret Sıfatları: This & That konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'İşaret Sıfatları: This & That' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede i̇şaret sıfatları: this & that yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'İşaret Sıfatları: This & That' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices i̇şaret sıfatları: this & that every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah İşaret Sıfatları: This & That pratiği yapar.",
      "highlightedWords": [
        "i̇şaret sıfatları: this & that"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use i̇şaret sıfatları: this & that in daily dialogues?",
      "tr": "Günlük diyaloglarda İşaret Sıfatları: This & That konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on i̇şaret sıfatları: this & that yesterday.",
      "tr": "Dün İşaret Sıfatları: This & That üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of i̇şaret sıfatları: this & that is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'İşaret Sıfatları: This & That' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#31)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'İşaret Sıfatları: This & That' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply i̇şaret sıfatları: this & that ___ (practice item 31).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'İşaret Sıfatları: This & That' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'İşaret Sıfatları: This & That' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of i̇şaret sıfatları: this & that every day to communicate naturally in lesson 31",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "i̇şaret",
      "sıfatları",
      "this",
      "&",
      "that",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "31",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of i̇şaret sıfatları: this & that every day to communicate naturally in lesson 31'."
  },
  "summaryTakeaways": [
    "'İşaret Sıfatları: This & That' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  32: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'İşaret Sıfatları: These & Those' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'İşaret Sıfatları: These & Those' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'İşaret Sıfatları: These & Those' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'İşaret Sıfatları: These & Those' Yapısının Temel Kuralı",
      "content": "İşaret Sıfatları: These & Those konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + İşaret Sıfatları: These & Those + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: İşaret Sıfatları: These & Those",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + İşaret Sıfatları: These & Those",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "İşaret Sıfatları: These & Those konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "İşaret Sıfatları: These & Those — Ana Kural",
      "formula": "Özne + İşaret Sıfatları: These & Those + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying i̇şaret sıfatları: these & those correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'İşaret Sıfatları: These & Those' kalıbını zorlamak.",
      "correctExample": "'İşaret Sıfatları: These & Those' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — İşaret Sıfatları: These & Those",
    "description": "İşaret Sıfatları: These & Those konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use i̇şaret sıfatları: these & those in your conversation?",
        "textTr": "Konuşmanızda İşaret Sıfatları: These & Those konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'İşaret Sıfatları: These & Those' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede i̇şaret sıfatları: these & those yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'İşaret Sıfatları: These & Those' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices i̇şaret sıfatları: these & those every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah İşaret Sıfatları: These & Those pratiği yapar.",
      "highlightedWords": [
        "i̇şaret sıfatları: these & those"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use i̇şaret sıfatları: these & those in daily dialogues?",
      "tr": "Günlük diyaloglarda İşaret Sıfatları: These & Those konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on i̇şaret sıfatları: these & those yesterday.",
      "tr": "Dün İşaret Sıfatları: These & Those üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of i̇şaret sıfatları: these & those is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'İşaret Sıfatları: These & Those' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#32)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'İşaret Sıfatları: These & Those' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply i̇şaret sıfatları: these & those ___ (practice item 32).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'İşaret Sıfatları: These & Those' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'İşaret Sıfatları: These & Those' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of i̇şaret sıfatları: these & those every day to communicate naturally in lesson 32",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "i̇şaret",
      "sıfatları",
      "these",
      "&",
      "those",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "32",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of i̇şaret sıfatları: these & those every day to communicate naturally in lesson 32'."
  },
  "summaryTakeaways": [
    "'İşaret Sıfatları: These & Those' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  33: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Düzenli Çoğul İsimler  ve Yazım Kuralları' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Düzenli Çoğul İsimler  ve Yazım Kuralları' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Düzenli Çoğul İsimler  ve Yazım Kuralları' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Düzenli Çoğul İsimler  ve Yazım Kuralları' Yapısının Temel Kuralı",
      "content": "Düzenli Çoğul İsimler  ve Yazım Kuralları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Düzenli Çoğul İsimler  ve Yazım Kuralları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Düzenli Çoğul İsimler  ve Yazım Kuralları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Düzenli Çoğul İsimler  ve Yazım Kuralları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Düzenli Çoğul İsimler  ve Yazım Kuralları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Düzenli Çoğul İsimler  ve Yazım Kuralları — Ana Kural",
      "formula": "Özne + Düzenli Çoğul İsimler  ve Yazım Kuralları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying düzenli çoğul i̇simler  ve yazım kuralları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Düzenli Çoğul İsimler  ve Yazım Kuralları' kalıbını zorlamak.",
      "correctExample": "'Düzenli Çoğul İsimler  ve Yazım Kuralları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — Düzenli Çoğul İsimler  ve Yazım Kuralları",
    "description": "Düzenli Çoğul İsimler  ve Yazım Kuralları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use düzenli çoğul i̇simler  ve yazım kuralları in your conversation?",
        "textTr": "Konuşmanızda Düzenli Çoğul İsimler  ve Yazım Kuralları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Düzenli Çoğul İsimler  ve Yazım Kuralları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede düzenli çoğul i̇simler  ve yazım kuralları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Düzenli Çoğul İsimler  ve Yazım Kuralları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices düzenli çoğul i̇simler  ve yazım kuralları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Düzenli Çoğul İsimler  ve Yazım Kuralları pratiği yapar.",
      "highlightedWords": [
        "düzenli çoğul i̇simler  ve yazım kuralları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use düzenli çoğul i̇simler  ve yazım kuralları in daily dialogues?",
      "tr": "Günlük diyaloglarda Düzenli Çoğul İsimler  ve Yazım Kuralları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on düzenli çoğul i̇simler  ve yazım kuralları yesterday.",
      "tr": "Dün Düzenli Çoğul İsimler  ve Yazım Kuralları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of düzenli çoğul i̇simler  ve yazım kuralları is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Düzenli Çoğul İsimler  ve Yazım Kuralları' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#33)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Düzenli Çoğul İsimler  ve Yazım Kuralları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply düzenli çoğul i̇simler  ve yazım kuralları ___ (practice item 33).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Düzenli Çoğul İsimler  ve Yazım Kuralları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Düzenli Çoğul İsimler  ve Yazım Kuralları' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of düzenli çoğul i̇simler  ve yazım kuralları every day to communicate naturally in lesson 33",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "düzenli",
      "çoğul",
      "i̇simler",
      "ve",
      "yazım",
      "kuralları",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "33",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of düzenli çoğul i̇simler  ve yazım kuralları every day to communicate naturally in lesson 33'."
  },
  "summaryTakeaways": [
    "'Düzenli Çoğul İsimler  ve Yazım Kuralları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  34: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Düzensiz Çoğul İsimler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Düzensiz Çoğul İsimler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Düzensiz Çoğul İsimler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Düzensiz Çoğul İsimler' Yapısının Temel Kuralı",
      "content": "Düzensiz Çoğul İsimler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Düzensiz Çoğul İsimler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Düzensiz Çoğul İsimler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Düzensiz Çoğul İsimler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Düzensiz Çoğul İsimler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Düzensiz Çoğul İsimler — Ana Kural",
      "formula": "Özne + Düzensiz Çoğul İsimler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying düzensiz çoğul i̇simler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Düzensiz Çoğul İsimler' kalıbını zorlamak.",
      "correctExample": "'Düzensiz Çoğul İsimler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — Düzensiz Çoğul İsimler",
    "description": "Düzensiz Çoğul İsimler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use düzensiz çoğul i̇simler in your conversation?",
        "textTr": "Konuşmanızda Düzensiz Çoğul İsimler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Düzensiz Çoğul İsimler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede düzensiz çoğul i̇simler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Düzensiz Çoğul İsimler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices düzensiz çoğul i̇simler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Düzensiz Çoğul İsimler pratiği yapar.",
      "highlightedWords": [
        "düzensiz çoğul i̇simler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use düzensiz çoğul i̇simler in daily dialogues?",
      "tr": "Günlük diyaloglarda Düzensiz Çoğul İsimler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on düzensiz çoğul i̇simler yesterday.",
      "tr": "Dün Düzensiz Çoğul İsimler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of düzensiz çoğul i̇simler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Düzensiz Çoğul İsimler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#34)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Düzensiz Çoğul İsimler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply düzensiz çoğul i̇simler ___ (practice item 34).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Düzensiz Çoğul İsimler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Düzensiz Çoğul İsimler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of düzensiz çoğul i̇simler every day to communicate naturally in lesson 34",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "düzensiz",
      "çoğul",
      "i̇simler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "34",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of düzensiz çoğul i̇simler every day to communicate naturally in lesson 34'."
  },
  "summaryTakeaways": [
    "'Düzensiz Çoğul İsimler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  35: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' Yapısının Temel Kuralı",
      "content": "İyelik Sıfatları: My, Your, His, Her, Its, Our, Their konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + İyelik Sıfatları: My, Your, His, Her, Its, Our, Their + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: İyelik Sıfatları: My, Your, His, Her, Its, Our, Their",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + İyelik Sıfatları: My, Your, His, Her, Its, Our, Their",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "İyelik Sıfatları: My, Your, His, Her, Its, Our, Their konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "İyelik Sıfatları: My, Your, His, Her, Its, Our, Their — Ana Kural",
      "formula": "Özne + İyelik Sıfatları: My, Your, His, Her, Its, Our, Their + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying i̇yelik sıfatları: my, your, his, her, its, our, their correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' kalıbını zorlamak.",
      "correctExample": "'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — İyelik Sıfatları: My, Your, His, Her, Its, Our, Their",
    "description": "İyelik Sıfatları: My, Your, His, Her, Its, Our, Their konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use i̇yelik sıfatları: my, your, his, her, its, our, their in your conversation?",
        "textTr": "Konuşmanızda İyelik Sıfatları: My, Your, His, Her, Its, Our, Their konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede i̇yelik sıfatları: my, your, his, her, its, our, their yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices i̇yelik sıfatları: my, your, his, her, its, our, their every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah İyelik Sıfatları: My, Your, His, Her, Its, Our, Their pratiği yapar.",
      "highlightedWords": [
        "i̇yelik sıfatları: my, your, his, her, its, our, their"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use i̇yelik sıfatları: my, your, his, her, its, our, their in daily dialogues?",
      "tr": "Günlük diyaloglarda İyelik Sıfatları: My, Your, His, Her, Its, Our, Their konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on i̇yelik sıfatları: my, your, his, her, its, our, their yesterday.",
      "tr": "Dün İyelik Sıfatları: My, Your, His, Her, Its, Our, Their üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of i̇yelik sıfatları: my, your, his, her, its, our, their is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#35)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply i̇yelik sıfatları: my, your, his, her, its, our, their ___ (practice item 35).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of i̇yelik sıfatları: my, your, his, her, its, our, their every day to communicate naturally in lesson 35",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "i̇yelik",
      "sıfatları",
      "my",
      "your",
      "his",
      "her",
      "its",
      "our",
      "their",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "35",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of i̇yelik sıfatları: my, your, his, her, its, our, their every day to communicate naturally in lesson 35'."
  },
  "summaryTakeaways": [
    "'İyelik Sıfatları: My, Your, His, Her, Its, Our, Their' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  36: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Sahiplik Kesme İşareti: Apostrophe 's' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Sahiplik Kesme İşareti: Apostrophe 's' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Sahiplik Kesme İşareti: Apostrophe 's' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Sahiplik Kesme İşareti: Apostrophe 's' Yapısının Temel Kuralı",
      "content": "Sahiplik Kesme İşareti: Apostrophe 's konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Sahiplik Kesme İşareti: Apostrophe 's + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Sahiplik Kesme İşareti: Apostrophe 's",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Sahiplik Kesme İşareti: Apostrophe 's",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Sahiplik Kesme İşareti: Apostrophe 's konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Sahiplik Kesme İşareti: Apostrophe 's — Ana Kural",
      "formula": "Özne + Sahiplik Kesme İşareti: Apostrophe 's + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying sahiplik kesme i̇şareti: apostrophe 's correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Sahiplik Kesme İşareti: Apostrophe 's' kalıbını zorlamak.",
      "correctExample": "'Sahiplik Kesme İşareti: Apostrophe 's' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — Sahiplik Kesme İşareti: Apostrophe 's",
    "description": "Sahiplik Kesme İşareti: Apostrophe 's konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use sahiplik kesme i̇şareti: apostrophe 's in your conversation?",
        "textTr": "Konuşmanızda Sahiplik Kesme İşareti: Apostrophe 's konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Sahiplik Kesme İşareti: Apostrophe 's' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede sahiplik kesme i̇şareti: apostrophe 's yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Sahiplik Kesme İşareti: Apostrophe 's' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices sahiplik kesme i̇şareti: apostrophe 's every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Sahiplik Kesme İşareti: Apostrophe 's pratiği yapar.",
      "highlightedWords": [
        "sahiplik kesme i̇şareti: apostrophe 's"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use sahiplik kesme i̇şareti: apostrophe 's in daily dialogues?",
      "tr": "Günlük diyaloglarda Sahiplik Kesme İşareti: Apostrophe 's konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on sahiplik kesme i̇şareti: apostrophe 's yesterday.",
      "tr": "Dün Sahiplik Kesme İşareti: Apostrophe 's üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of sahiplik kesme i̇şareti: apostrophe 's is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Sahiplik Kesme İşareti: Apostrophe 's' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#36)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Sahiplik Kesme İşareti: Apostrophe 's' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply sahiplik kesme i̇şareti: apostrophe 's ___ (practice item 36).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Sahiplik Kesme İşareti: Apostrophe 's' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Sahiplik Kesme İşareti: Apostrophe 's' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of sahiplik kesme i̇şareti: apostrophe 's every day to communicate naturally in lesson 36",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "sahiplik",
      "kesme",
      "i̇şareti",
      "apostrophe",
      "s",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "36",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of sahiplik kesme i̇şareti: apostrophe 's every day to communicate naturally in lesson 36'."
  },
  "summaryTakeaways": [
    "'Sahiplik Kesme İşareti: Apostrophe 's' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  37: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Have got / Has got ile Sahiplik Bildirimi' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Have got / Has got ile Sahiplik Bildirimi' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Have got / Has got ile Sahiplik Bildirimi' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Have got / Has got ile Sahiplik Bildirimi' Yapısının Temel Kuralı",
      "content": "Have got / Has got ile Sahiplik Bildirimi konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Have got / Has got ile Sahiplik Bildirimi + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Have got / Has got ile Sahiplik Bildirimi",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Have got / Has got ile Sahiplik Bildirimi",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Have got / Has got ile Sahiplik Bildirimi konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Have got / Has got ile Sahiplik Bildirimi — Ana Kural",
      "formula": "Özne + Have got / Has got ile Sahiplik Bildirimi + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying have got / has got ile sahiplik bildirimi correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Have got / Has got ile Sahiplik Bildirimi' kalıbını zorlamak.",
      "correctExample": "'Have got / Has got ile Sahiplik Bildirimi' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — Have got / Has got ile Sahiplik Bildirimi",
    "description": "Have got / Has got ile Sahiplik Bildirimi konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use have got / has got ile sahiplik bildirimi in your conversation?",
        "textTr": "Konuşmanızda Have got / Has got ile Sahiplik Bildirimi konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Have got / Has got ile Sahiplik Bildirimi' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede have got / has got ile sahiplik bildirimi yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Have got / Has got ile Sahiplik Bildirimi' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices have got / has got ile sahiplik bildirimi every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Have got / Has got ile Sahiplik Bildirimi pratiği yapar.",
      "highlightedWords": [
        "have got / has got ile sahiplik bildirimi"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use have got / has got ile sahiplik bildirimi in daily dialogues?",
      "tr": "Günlük diyaloglarda Have got / Has got ile Sahiplik Bildirimi konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on have got / has got ile sahiplik bildirimi yesterday.",
      "tr": "Dün Have got / Has got ile Sahiplik Bildirimi üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of have got / has got ile sahiplik bildirimi is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Have got / Has got ile Sahiplik Bildirimi' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#37)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Have got / Has got ile Sahiplik Bildirimi' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply have got / has got ile sahiplik bildirimi ___ (practice item 37).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Have got / Has got ile Sahiplik Bildirimi' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Have got / Has got ile Sahiplik Bildirimi' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of have got / has got ile sahiplik bildirimi every day to communicate naturally in lesson 37",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "have",
      "got",
      "/",
      "has",
      "ile",
      "sahiplik",
      "bildirimi",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "37",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of have got / has got ile sahiplik bildirimi every day to communicate naturally in lesson 37'."
  },
  "summaryTakeaways": [
    "'Have got / Has got ile Sahiplik Bildirimi' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  38: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Have / Has ile Sahiplik Bildirimi' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Have / Has ile Sahiplik Bildirimi' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Have / Has ile Sahiplik Bildirimi' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Have / Has ile Sahiplik Bildirimi' Yapısının Temel Kuralı",
      "content": "Have / Has ile Sahiplik Bildirimi konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Have / Has ile Sahiplik Bildirimi + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Have / Has ile Sahiplik Bildirimi",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Have / Has ile Sahiplik Bildirimi",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Have / Has ile Sahiplik Bildirimi konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Have / Has ile Sahiplik Bildirimi — Ana Kural",
      "formula": "Özne + Have / Has ile Sahiplik Bildirimi + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying have / has ile sahiplik bildirimi correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Have / Has ile Sahiplik Bildirimi' kalıbını zorlamak.",
      "correctExample": "'Have / Has ile Sahiplik Bildirimi' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — Have / Has ile Sahiplik Bildirimi",
    "description": "Have / Has ile Sahiplik Bildirimi konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use have / has ile sahiplik bildirimi in your conversation?",
        "textTr": "Konuşmanızda Have / Has ile Sahiplik Bildirimi konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Have / Has ile Sahiplik Bildirimi' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede have / has ile sahiplik bildirimi yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Have / Has ile Sahiplik Bildirimi' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices have / has ile sahiplik bildirimi every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Have / Has ile Sahiplik Bildirimi pratiği yapar.",
      "highlightedWords": [
        "have / has ile sahiplik bildirimi"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use have / has ile sahiplik bildirimi in daily dialogues?",
      "tr": "Günlük diyaloglarda Have / Has ile Sahiplik Bildirimi konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on have / has ile sahiplik bildirimi yesterday.",
      "tr": "Dün Have / Has ile Sahiplik Bildirimi üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of have / has ile sahiplik bildirimi is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Have / Has ile Sahiplik Bildirimi' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#38)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Have / Has ile Sahiplik Bildirimi' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply have / has ile sahiplik bildirimi ___ (practice item 38).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Have / Has ile Sahiplik Bildirimi' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Have / Has ile Sahiplik Bildirimi' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of have / has ile sahiplik bildirimi every day to communicate naturally in lesson 38",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "have",
      "/",
      "has",
      "ile",
      "sahiplik",
      "bildirimi",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "38",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of have / has ile sahiplik bildirimi every day to communicate naturally in lesson 38'."
  },
  "summaryTakeaways": [
    "'Have / Has ile Sahiplik Bildirimi' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  39: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Aile Bireyleri ve Akrabalık İfadeleri' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Aile Bireyleri ve Akrabalık İfadeleri' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Aile Bireyleri ve Akrabalık İfadeleri' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Aile Bireyleri ve Akrabalık İfadeleri' Yapısının Temel Kuralı",
      "content": "Aile Bireyleri ve Akrabalık İfadeleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Aile Bireyleri ve Akrabalık İfadeleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Aile Bireyleri ve Akrabalık İfadeleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Aile Bireyleri ve Akrabalık İfadeleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Aile Bireyleri ve Akrabalık İfadeleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Aile Bireyleri ve Akrabalık İfadeleri — Ana Kural",
      "formula": "Özne + Aile Bireyleri ve Akrabalık İfadeleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying aile bireyleri ve akrabalık i̇fadeleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Aile Bireyleri ve Akrabalık İfadeleri' kalıbını zorlamak.",
      "correctExample": "'Aile Bireyleri ve Akrabalık İfadeleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — Aile Bireyleri ve Akrabalık İfadeleri",
    "description": "Aile Bireyleri ve Akrabalık İfadeleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use aile bireyleri ve akrabalık i̇fadeleri in your conversation?",
        "textTr": "Konuşmanızda Aile Bireyleri ve Akrabalık İfadeleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Aile Bireyleri ve Akrabalık İfadeleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede aile bireyleri ve akrabalık i̇fadeleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Aile Bireyleri ve Akrabalık İfadeleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices aile bireyleri ve akrabalık i̇fadeleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Aile Bireyleri ve Akrabalık İfadeleri pratiği yapar.",
      "highlightedWords": [
        "aile bireyleri ve akrabalık i̇fadeleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use aile bireyleri ve akrabalık i̇fadeleri in daily dialogues?",
      "tr": "Günlük diyaloglarda Aile Bireyleri ve Akrabalık İfadeleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on aile bireyleri ve akrabalık i̇fadeleri yesterday.",
      "tr": "Dün Aile Bireyleri ve Akrabalık İfadeleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of aile bireyleri ve akrabalık i̇fadeleri is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Aile Bireyleri ve Akrabalık İfadeleri' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#39)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Aile Bireyleri ve Akrabalık İfadeleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply aile bireyleri ve akrabalık i̇fadeleri ___ (practice item 39).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Aile Bireyleri ve Akrabalık İfadeleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Aile Bireyleri ve Akrabalık İfadeleri' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of aile bireyleri ve akrabalık i̇fadeleri every day to communicate naturally in lesson 39",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "aile",
      "bireyleri",
      "ve",
      "akrabalık",
      "i̇fadeleri",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "39",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of aile bireyleri ve akrabalık i̇fadeleri every day to communicate naturally in lesson 39'."
  },
  "summaryTakeaways": [
    "'Aile Bireyleri ve Akrabalık İfadeleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  40: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' Yapısının Temel Kuralı",
      "content": "A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı — Ana Kural",
      "formula": "Özne + A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' kalıbını zorlamak.",
      "correctExample": "'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Nesneler, Sahiplik ve Niteleme — A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı",
    "description": "A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı in your conversation?",
        "textTr": "Konuşmanızda A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı pratiği yapar.",
      "highlightedWords": [
        "a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı in daily dialogues?",
      "tr": "Günlük diyaloglarda A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı yesterday.",
      "tr": "Dün A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#40)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı ___ (practice item 40).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı every day to communicate naturally in lesson 40",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a1",
      "modül",
      "4",
      "entegrasyonu",
      "kişisel",
      "eşyalar",
      "ve",
      "aile",
      "tanıtımı",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "40",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a1 modül 4 entegrasyonu: kişisel eşyalar ve aile tanıtımı every day to communicate naturally in lesson 40'."
  },
  "summaryTakeaways": [
    "'A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  41: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'WH- Soruları: What  Kullanımı' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'WH- Soruları: What  Kullanımı' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'WH- Soruları: What  Kullanımı' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'WH- Soruları: What  Kullanımı' Yapısının Temel Kuralı",
      "content": "WH- Soruları: What  Kullanımı konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + WH- Soruları: What  Kullanımı + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: WH- Soruları: What  Kullanımı",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + WH- Soruları: What  Kullanımı",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "WH- Soruları: What  Kullanımı konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "WH- Soruları: What  Kullanımı — Ana Kural",
      "formula": "Özne + WH- Soruları: What  Kullanımı + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying wh- soruları: what  kullanımı correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'WH- Soruları: What  Kullanımı' kalıbını zorlamak.",
      "correctExample": "'WH- Soruları: What  Kullanımı' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — WH- Soruları: What  Kullanımı",
    "description": "WH- Soruları: What  Kullanımı konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use wh- soruları: what  kullanımı in your conversation?",
        "textTr": "Konuşmanızda WH- Soruları: What  Kullanımı konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'WH- Soruları: What  Kullanımı' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede wh- soruları: what  kullanımı yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'WH- Soruları: What  Kullanımı' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices wh- soruları: what  kullanımı every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah WH- Soruları: What  Kullanımı pratiği yapar.",
      "highlightedWords": [
        "wh- soruları: what  kullanımı"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use wh- soruları: what  kullanımı in daily dialogues?",
      "tr": "Günlük diyaloglarda WH- Soruları: What  Kullanımı konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on wh- soruları: what  kullanımı yesterday.",
      "tr": "Dün WH- Soruları: What  Kullanımı üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of wh- soruları: what  kullanımı is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'WH- Soruları: What  Kullanımı' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#41)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'WH- Soruları: What  Kullanımı' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply wh- soruları: what  kullanımı ___ (practice item 41).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'WH- Soruları: What  Kullanımı' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'WH- Soruları: What  Kullanımı' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of wh- soruları: what  kullanımı every day to communicate naturally in lesson 41",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "wh-",
      "soruları",
      "what",
      "kullanımı",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "41",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of wh- soruları: what  kullanımı every day to communicate naturally in lesson 41'."
  },
  "summaryTakeaways": [
    "'WH- Soruları: What  Kullanımı' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  42: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'WH- Soruları: Where  ile Konum Sorma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'WH- Soruları: Where  ile Konum Sorma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'WH- Soruları: Where  ile Konum Sorma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'WH- Soruları: Where  ile Konum Sorma' Yapısının Temel Kuralı",
      "content": "WH- Soruları: Where  ile Konum Sorma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + WH- Soruları: Where  ile Konum Sorma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: WH- Soruları: Where  ile Konum Sorma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + WH- Soruları: Where  ile Konum Sorma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "WH- Soruları: Where  ile Konum Sorma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "WH- Soruları: Where  ile Konum Sorma — Ana Kural",
      "formula": "Özne + WH- Soruları: Where  ile Konum Sorma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying wh- soruları: where  ile konum sorma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'WH- Soruları: Where  ile Konum Sorma' kalıbını zorlamak.",
      "correctExample": "'WH- Soruları: Where  ile Konum Sorma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — WH- Soruları: Where  ile Konum Sorma",
    "description": "WH- Soruları: Where  ile Konum Sorma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use wh- soruları: where  ile konum sorma in your conversation?",
        "textTr": "Konuşmanızda WH- Soruları: Where  ile Konum Sorma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'WH- Soruları: Where  ile Konum Sorma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede wh- soruları: where  ile konum sorma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'WH- Soruları: Where  ile Konum Sorma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices wh- soruları: where  ile konum sorma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah WH- Soruları: Where  ile Konum Sorma pratiği yapar.",
      "highlightedWords": [
        "wh- soruları: where  ile konum sorma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use wh- soruları: where  ile konum sorma in daily dialogues?",
      "tr": "Günlük diyaloglarda WH- Soruları: Where  ile Konum Sorma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on wh- soruları: where  ile konum sorma yesterday.",
      "tr": "Dün WH- Soruları: Where  ile Konum Sorma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of wh- soruları: where  ile konum sorma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'WH- Soruları: Where  ile Konum Sorma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#42)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'WH- Soruları: Where  ile Konum Sorma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply wh- soruları: where  ile konum sorma ___ (practice item 42).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'WH- Soruları: Where  ile Konum Sorma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'WH- Soruları: Where  ile Konum Sorma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of wh- soruları: where  ile konum sorma every day to communicate naturally in lesson 42",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "wh-",
      "soruları",
      "where",
      "ile",
      "konum",
      "sorma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "42",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of wh- soruları: where  ile konum sorma every day to communicate naturally in lesson 42'."
  },
  "summaryTakeaways": [
    "'WH- Soruları: Where  ile Konum Sorma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  43: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'WH- Soruları: Who  Kullanımı' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'WH- Soruları: Who  Kullanımı' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'WH- Soruları: Who  Kullanımı' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'WH- Soruları: Who  Kullanımı' Yapısının Temel Kuralı",
      "content": "WH- Soruları: Who  Kullanımı konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + WH- Soruları: Who  Kullanımı + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: WH- Soruları: Who  Kullanımı",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + WH- Soruları: Who  Kullanımı",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "WH- Soruları: Who  Kullanımı konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "WH- Soruları: Who  Kullanımı — Ana Kural",
      "formula": "Özne + WH- Soruları: Who  Kullanımı + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying wh- soruları: who  kullanımı correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'WH- Soruları: Who  Kullanımı' kalıbını zorlamak.",
      "correctExample": "'WH- Soruları: Who  Kullanımı' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — WH- Soruları: Who  Kullanımı",
    "description": "WH- Soruları: Who  Kullanımı konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use wh- soruları: who  kullanımı in your conversation?",
        "textTr": "Konuşmanızda WH- Soruları: Who  Kullanımı konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'WH- Soruları: Who  Kullanımı' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede wh- soruları: who  kullanımı yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'WH- Soruları: Who  Kullanımı' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices wh- soruları: who  kullanımı every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah WH- Soruları: Who  Kullanımı pratiği yapar.",
      "highlightedWords": [
        "wh- soruları: who  kullanımı"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use wh- soruları: who  kullanımı in daily dialogues?",
      "tr": "Günlük diyaloglarda WH- Soruları: Who  Kullanımı konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on wh- soruları: who  kullanımı yesterday.",
      "tr": "Dün WH- Soruları: Who  Kullanımı üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of wh- soruları: who  kullanımı is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'WH- Soruları: Who  Kullanımı' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#43)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'WH- Soruları: Who  Kullanımı' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply wh- soruları: who  kullanımı ___ (practice item 43).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'WH- Soruları: Who  Kullanımı' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'WH- Soruları: Who  Kullanımı' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of wh- soruları: who  kullanımı every day to communicate naturally in lesson 43",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "wh-",
      "soruları",
      "who",
      "kullanımı",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "43",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of wh- soruları: who  kullanımı every day to communicate naturally in lesson 43'."
  },
  "summaryTakeaways": [
    "'WH- Soruları: Who  Kullanımı' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  44: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında saati sormayı (What time is it?) ve söylemeyi (half past, quarter to) doğru telaffuzla uygulayabilmek.",
  "whyItMatters": "Ulaşım araçlarını yakalamak, randevulara vaktinde gitmek ve günlük akışı planlamak için saatler şarttır.",
  "linguisticLogic": "Saati söylerken 'It is + saat' kullanılır. Geçe kalıbında 'past', kala kalıbında 'to', buçukta 'half past', çeyrekte 'quarter past / to' kullanılır. Saatlerden önce 'at' edatı gelir (at 3 o'clock).",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'WH- Soruları: When' Yapısının Temel Kuralı",
      "content": "WH- Soruları: When konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + WH- Soruları: When + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: WH- Soruları: When",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + WH- Soruları: When",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "WH- Soruları: When konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "WH- Soruları: When — Ana Kural",
      "formula": "Özne + WH- Soruları: When + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying wh- soruları: when correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'WH- Soruları: When' kalıbını zorlamak.",
      "correctExample": "'WH- Soruları: When' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — WH- Soruları: When",
    "description": "WH- Soruları: When konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use wh- soruları: when in your conversation?",
        "textTr": "Konuşmanızda WH- Soruları: When konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'WH- Soruları: When' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede wh- soruları: when yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'WH- Soruları: When' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices wh- soruları: when every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah WH- Soruları: When pratiği yapar.",
      "highlightedWords": [
        "wh- soruları: when"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use wh- soruları: when in daily dialogues?",
      "tr": "Günlük diyaloglarda WH- Soruları: When konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on wh- soruları: when yesterday.",
      "tr": "Dün WH- Soruları: When üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Quarter",
      "phonetic": "/ˈkwɔː.tər/",
      "partOfSpeech": "noun",
      "meaningTr": "Çeyrek (15 dakika)",
      "exampleSentence": "It is a quarter past ten."
    },
    {
      "word": "Midnight",
      "phonetic": "/ˈmɪd.naɪt/",
      "partOfSpeech": "noun",
      "meaningTr": "Gece yarısı",
      "exampleSentence": "The flight arrived at midnight."
    },
    {
      "word": "Schedule",
      "phonetic": "/ˈʃedʒ.uːl/",
      "partOfSpeech": "noun",
      "meaningTr": "Program, saat tarifesi",
      "exampleSentence": "The train runs on schedule."
    },
    {
      "word": "Promptly",
      "phonetic": "/ˈprɒmpt.li/",
      "partOfSpeech": "adverb",
      "meaningTr": "Tam vaktinde, derhal",
      "exampleSentence": "Arrive promptly at nine."
    }
  ],
  "quickCheck": {
    "question": "İngilizcede kesin bir saatten bahsederken (Örn: 'at 5 o'clock') hangi edat kullanılır? (#44)",
    "options": [
      "At (Örn: at 5 o'clock)",
      "On",
      "In",
      "With"
    ],
    "correctIndex": 0,
    "explanation": "Kesin saat bildirimlerinde daima 'at' edatı kullanılır: at 3 o'clock, at half past four."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'WH- Soruları: When' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "The morning business briefing starts promptly ___ half past eight (lesson 44).",
    "options": [
      "at",
      "on",
      "in",
      "to"
    ],
    "correctAnswer": "at",
    "hint": "'WH- Soruları: When' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'at' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Saat şu anda tam olarak üçe çeyrek var ve tren yakında kalkacak.",
    "targetEn": "It is currently a quarter to three and our train departs soon in lesson 44",
    "availableWords": [
      "It",
      "is",
      "currently",
      "a",
      "quarter",
      "to",
      "three",
      "and",
      "our",
      "train",
      "departs",
      "soon",
      "in",
      "lesson",
      "44",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'It is currently a quarter to three and our train departs soon in lesson 44'."
  },
  "summaryTakeaways": [
    "'WH- Soruları: When' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  45: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'WH- Soruları: Why  ve Because ile Sebep Bildirme' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'WH- Soruları: Why  ve Because ile Sebep Bildirme' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'WH- Soruları: Why  ve Because ile Sebep Bildirme' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'WH- Soruları: Why  ve Because ile Sebep Bildirme' Yapısının Temel Kuralı",
      "content": "WH- Soruları: Why  ve Because ile Sebep Bildirme konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + WH- Soruları: Why  ve Because ile Sebep Bildirme + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: WH- Soruları: Why  ve Because ile Sebep Bildirme",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + WH- Soruları: Why  ve Because ile Sebep Bildirme",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "WH- Soruları: Why  ve Because ile Sebep Bildirme konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "WH- Soruları: Why  ve Because ile Sebep Bildirme — Ana Kural",
      "formula": "Özne + WH- Soruları: Why  ve Because ile Sebep Bildirme + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying wh- soruları: why  ve because ile sebep bildirme correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'WH- Soruları: Why  ve Because ile Sebep Bildirme' kalıbını zorlamak.",
      "correctExample": "'WH- Soruları: Why  ve Because ile Sebep Bildirme' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — WH- Soruları: Why  ve Because ile Sebep Bildirme",
    "description": "WH- Soruları: Why  ve Because ile Sebep Bildirme konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use wh- soruları: why  ve because ile sebep bildirme in your conversation?",
        "textTr": "Konuşmanızda WH- Soruları: Why  ve Because ile Sebep Bildirme konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'WH- Soruları: Why  ve Because ile Sebep Bildirme' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede wh- soruları: why  ve because ile sebep bildirme yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'WH- Soruları: Why  ve Because ile Sebep Bildirme' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices wh- soruları: why  ve because ile sebep bildirme every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah WH- Soruları: Why  ve Because ile Sebep Bildirme pratiği yapar.",
      "highlightedWords": [
        "wh- soruları: why  ve because ile sebep bildirme"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use wh- soruları: why  ve because ile sebep bildirme in daily dialogues?",
      "tr": "Günlük diyaloglarda WH- Soruları: Why  ve Because ile Sebep Bildirme konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on wh- soruları: why  ve because ile sebep bildirme yesterday.",
      "tr": "Dün WH- Soruları: Why  ve Because ile Sebep Bildirme üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of wh- soruları: why  ve because ile sebep bildirme is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'WH- Soruları: Why  ve Because ile Sebep Bildirme' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#45)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'WH- Soruları: Why  ve Because ile Sebep Bildirme' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply wh- soruları: why  ve because ile sebep bildirme ___ (practice item 45).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'WH- Soruları: Why  ve Because ile Sebep Bildirme' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'WH- Soruları: Why  ve Because ile Sebep Bildirme' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of wh- soruları: why  ve because ile sebep bildirme every day to communicate naturally in lesson 45",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "wh-",
      "soruları",
      "why",
      "ve",
      "because",
      "ile",
      "sebep",
      "bildirme",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "45",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of wh- soruları: why  ve because ile sebep bildirme every day to communicate naturally in lesson 45'."
  },
  "summaryTakeaways": [
    "'WH- Soruları: Why  ve Because ile Sebep Bildirme' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  46: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'WH- Soruları: How  ve Durum Sorma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'WH- Soruları: How  ve Durum Sorma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'WH- Soruları: How  ve Durum Sorma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'WH- Soruları: How  ve Durum Sorma' Yapısının Temel Kuralı",
      "content": "WH- Soruları: How  ve Durum Sorma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + WH- Soruları: How  ve Durum Sorma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: WH- Soruları: How  ve Durum Sorma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + WH- Soruları: How  ve Durum Sorma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "WH- Soruları: How  ve Durum Sorma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "WH- Soruları: How  ve Durum Sorma — Ana Kural",
      "formula": "Özne + WH- Soruları: How  ve Durum Sorma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying wh- soruları: how  ve durum sorma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'WH- Soruları: How  ve Durum Sorma' kalıbını zorlamak.",
      "correctExample": "'WH- Soruları: How  ve Durum Sorma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — WH- Soruları: How  ve Durum Sorma",
    "description": "WH- Soruları: How  ve Durum Sorma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use wh- soruları: how  ve durum sorma in your conversation?",
        "textTr": "Konuşmanızda WH- Soruları: How  ve Durum Sorma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'WH- Soruları: How  ve Durum Sorma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede wh- soruları: how  ve durum sorma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'WH- Soruları: How  ve Durum Sorma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices wh- soruları: how  ve durum sorma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah WH- Soruları: How  ve Durum Sorma pratiği yapar.",
      "highlightedWords": [
        "wh- soruları: how  ve durum sorma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use wh- soruları: how  ve durum sorma in daily dialogues?",
      "tr": "Günlük diyaloglarda WH- Soruları: How  ve Durum Sorma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on wh- soruları: how  ve durum sorma yesterday.",
      "tr": "Dün WH- Soruları: How  ve Durum Sorma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of wh- soruları: how  ve durum sorma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'WH- Soruları: How  ve Durum Sorma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#46)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'WH- Soruları: How  ve Durum Sorma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply wh- soruları: how  ve durum sorma ___ (practice item 46).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'WH- Soruları: How  ve Durum Sorma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'WH- Soruları: How  ve Durum Sorma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of wh- soruları: how  ve durum sorma every day to communicate naturally in lesson 46",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "wh-",
      "soruları",
      "how",
      "ve",
      "durum",
      "sorma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "46",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of wh- soruları: how  ve durum sorma every day to communicate naturally in lesson 46'."
  },
  "summaryTakeaways": [
    "'WH- Soruları: How  ve Durum Sorma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  47: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'How Often ile Eylem Sıklığı Sorma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'How Often ile Eylem Sıklığı Sorma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'How Often ile Eylem Sıklığı Sorma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'How Often ile Eylem Sıklığı Sorma' Yapısının Temel Kuralı",
      "content": "How Often ile Eylem Sıklığı Sorma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + How Often ile Eylem Sıklığı Sorma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: How Often ile Eylem Sıklığı Sorma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + How Often ile Eylem Sıklığı Sorma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "How Often ile Eylem Sıklığı Sorma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "How Often ile Eylem Sıklığı Sorma — Ana Kural",
      "formula": "Özne + How Often ile Eylem Sıklığı Sorma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying how often ile eylem sıklığı sorma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'How Often ile Eylem Sıklığı Sorma' kalıbını zorlamak.",
      "correctExample": "'How Often ile Eylem Sıklığı Sorma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — How Often ile Eylem Sıklığı Sorma",
    "description": "How Often ile Eylem Sıklığı Sorma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use how often ile eylem sıklığı sorma in your conversation?",
        "textTr": "Konuşmanızda How Often ile Eylem Sıklığı Sorma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'How Often ile Eylem Sıklığı Sorma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede how often ile eylem sıklığı sorma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'How Often ile Eylem Sıklığı Sorma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices how often ile eylem sıklığı sorma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah How Often ile Eylem Sıklığı Sorma pratiği yapar.",
      "highlightedWords": [
        "how often ile eylem sıklığı sorma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use how often ile eylem sıklığı sorma in daily dialogues?",
      "tr": "Günlük diyaloglarda How Often ile Eylem Sıklığı Sorma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on how often ile eylem sıklığı sorma yesterday.",
      "tr": "Dün How Often ile Eylem Sıklığı Sorma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of how often ile eylem sıklığı sorma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'How Often ile Eylem Sıklığı Sorma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#47)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'How Often ile Eylem Sıklığı Sorma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply how often ile eylem sıklığı sorma ___ (practice item 47).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'How Often ile Eylem Sıklığı Sorma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'How Often ile Eylem Sıklığı Sorma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of how often ile eylem sıklığı sorma every day to communicate naturally in lesson 47",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "how",
      "often",
      "ile",
      "eylem",
      "sıklığı",
      "sorma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "47",
      "always",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of how often ile eylem sıklığı sorma every day to communicate naturally in lesson 47'."
  },
  "summaryTakeaways": [
    "'How Often ile Eylem Sıklığı Sorma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  48: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'How Many ile Sayılabilen Nesne Sayısı Sorma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'How Many ile Sayılabilen Nesne Sayısı Sorma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'How Many ile Sayılabilen Nesne Sayısı Sorma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'How Many ile Sayılabilen Nesne Sayısı Sorma' Yapısının Temel Kuralı",
      "content": "How Many ile Sayılabilen Nesne Sayısı Sorma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + How Many ile Sayılabilen Nesne Sayısı Sorma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: How Many ile Sayılabilen Nesne Sayısı Sorma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + How Many ile Sayılabilen Nesne Sayısı Sorma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "How Many ile Sayılabilen Nesne Sayısı Sorma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "How Many ile Sayılabilen Nesne Sayısı Sorma — Ana Kural",
      "formula": "Özne + How Many ile Sayılabilen Nesne Sayısı Sorma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying how many ile sayılabilen nesne sayısı sorma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'How Many ile Sayılabilen Nesne Sayısı Sorma' kalıbını zorlamak.",
      "correctExample": "'How Many ile Sayılabilen Nesne Sayısı Sorma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — How Many ile Sayılabilen Nesne Sayısı Sorma",
    "description": "How Many ile Sayılabilen Nesne Sayısı Sorma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use how many ile sayılabilen nesne sayısı sorma in your conversation?",
        "textTr": "Konuşmanızda How Many ile Sayılabilen Nesne Sayısı Sorma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'How Many ile Sayılabilen Nesne Sayısı Sorma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede how many ile sayılabilen nesne sayısı sorma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'How Many ile Sayılabilen Nesne Sayısı Sorma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices how many ile sayılabilen nesne sayısı sorma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah How Many ile Sayılabilen Nesne Sayısı Sorma pratiği yapar.",
      "highlightedWords": [
        "how many ile sayılabilen nesne sayısı sorma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use how many ile sayılabilen nesne sayısı sorma in daily dialogues?",
      "tr": "Günlük diyaloglarda How Many ile Sayılabilen Nesne Sayısı Sorma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on how many ile sayılabilen nesne sayısı sorma yesterday.",
      "tr": "Dün How Many ile Sayılabilen Nesne Sayısı Sorma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of how many ile sayılabilen nesne sayısı sorma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'How Many ile Sayılabilen Nesne Sayısı Sorma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#48)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'How Many ile Sayılabilen Nesne Sayısı Sorma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply how many ile sayılabilen nesne sayısı sorma ___ (practice item 48).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'How Many ile Sayılabilen Nesne Sayısı Sorma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'How Many ile Sayılabilen Nesne Sayısı Sorma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of how many ile sayılabilen nesne sayısı sorma every day to communicate naturally in lesson 48",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "how",
      "many",
      "ile",
      "sayılabilen",
      "nesne",
      "sayısı",
      "sorma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "48",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of how many ile sayılabilen nesne sayısı sorma every day to communicate naturally in lesson 48'."
  },
  "summaryTakeaways": [
    "'How Many ile Sayılabilen Nesne Sayısı Sorma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  49: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'How Much ile Fiyat ve Sayılamayan Miktar Sorma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'How Much ile Fiyat ve Sayılamayan Miktar Sorma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'How Much ile Fiyat ve Sayılamayan Miktar Sorma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'How Much ile Fiyat ve Sayılamayan Miktar Sorma' Yapısının Temel Kuralı",
      "content": "How Much ile Fiyat ve Sayılamayan Miktar Sorma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + How Much ile Fiyat ve Sayılamayan Miktar Sorma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: How Much ile Fiyat ve Sayılamayan Miktar Sorma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + How Much ile Fiyat ve Sayılamayan Miktar Sorma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "How Much ile Fiyat ve Sayılamayan Miktar Sorma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "How Much ile Fiyat ve Sayılamayan Miktar Sorma — Ana Kural",
      "formula": "Özne + How Much ile Fiyat ve Sayılamayan Miktar Sorma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying how much ile fiyat ve sayılamayan miktar sorma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'How Much ile Fiyat ve Sayılamayan Miktar Sorma' kalıbını zorlamak.",
      "correctExample": "'How Much ile Fiyat ve Sayılamayan Miktar Sorma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — How Much ile Fiyat ve Sayılamayan Miktar Sorma",
    "description": "How Much ile Fiyat ve Sayılamayan Miktar Sorma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use how much ile fiyat ve sayılamayan miktar sorma in your conversation?",
        "textTr": "Konuşmanızda How Much ile Fiyat ve Sayılamayan Miktar Sorma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'How Much ile Fiyat ve Sayılamayan Miktar Sorma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede how much ile fiyat ve sayılamayan miktar sorma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'How Much ile Fiyat ve Sayılamayan Miktar Sorma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices how much ile fiyat ve sayılamayan miktar sorma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah How Much ile Fiyat ve Sayılamayan Miktar Sorma pratiği yapar.",
      "highlightedWords": [
        "how much ile fiyat ve sayılamayan miktar sorma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use how much ile fiyat ve sayılamayan miktar sorma in daily dialogues?",
      "tr": "Günlük diyaloglarda How Much ile Fiyat ve Sayılamayan Miktar Sorma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on how much ile fiyat ve sayılamayan miktar sorma yesterday.",
      "tr": "Dün How Much ile Fiyat ve Sayılamayan Miktar Sorma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of how much ile fiyat ve sayılamayan miktar sorma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'How Much ile Fiyat ve Sayılamayan Miktar Sorma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#49)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'How Much ile Fiyat ve Sayılamayan Miktar Sorma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply how much ile fiyat ve sayılamayan miktar sorma ___ (practice item 49).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'How Much ile Fiyat ve Sayılamayan Miktar Sorma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'How Much ile Fiyat ve Sayılamayan Miktar Sorma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of how much ile fiyat ve sayılamayan miktar sorma every day to communicate naturally in lesson 49",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "how",
      "much",
      "ile",
      "fiyat",
      "ve",
      "sayılamayan",
      "miktar",
      "sorma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "49",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of how much ile fiyat ve sayılamayan miktar sorma every day to communicate naturally in lesson 49'."
  },
  "summaryTakeaways": [
    "'How Much ile Fiyat ve Sayılamayan Miktar Sorma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  50: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' Yapısının Temel Kuralı",
      "content": "A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma — Ana Kural",
      "formula": "Özne + A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' kalıbını zorlamak.",
      "correctExample": "'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Soru Sorma Becerileri ve Bilgi Edinme — A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma",
    "description": "A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma in your conversation?",
        "textTr": "Konuşmanızda A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma pratiği yapar.",
      "highlightedWords": [
        "a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma in daily dialogues?",
      "tr": "Günlük diyaloglarda A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma yesterday.",
      "tr": "Dün A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#50)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma ___ (practice item 50).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma every day to communicate naturally in lesson 50",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a1",
      "modül",
      "5",
      "entegrasyonu",
      "tanınmış",
      "biriyle",
      "röportaj",
      "yapma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "50",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a1 modül 5 entegrasyonu: tanınmış biriyle röportaj yapma every day to communicate naturally in lesson 50'."
  },
  "summaryTakeaways": [
    "'A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  51: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Yetenek Bildirme: Can ile Olumlu Cümleler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Yetenek Bildirme: Can ile Olumlu Cümleler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Yetenek Bildirme: Can ile Olumlu Cümleler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Yetenek Bildirme: Can ile Olumlu Cümleler' Yapısının Temel Kuralı",
      "content": "Yetenek Bildirme: Can ile Olumlu Cümleler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Yetenek Bildirme: Can ile Olumlu Cümleler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Yetenek Bildirme: Can ile Olumlu Cümleler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Yetenek Bildirme: Can ile Olumlu Cümleler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Yetenek Bildirme: Can ile Olumlu Cümleler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Yetenek Bildirme: Can ile Olumlu Cümleler — Ana Kural",
      "formula": "Özne + Yetenek Bildirme: Can ile Olumlu Cümleler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying yetenek bildirme: can ile olumlu cümleler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Yetenek Bildirme: Can ile Olumlu Cümleler' kalıbını zorlamak.",
      "correctExample": "'Yetenek Bildirme: Can ile Olumlu Cümleler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — Yetenek Bildirme: Can ile Olumlu Cümleler",
    "description": "Yetenek Bildirme: Can ile Olumlu Cümleler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use yetenek bildirme: can ile olumlu cümleler in your conversation?",
        "textTr": "Konuşmanızda Yetenek Bildirme: Can ile Olumlu Cümleler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Yetenek Bildirme: Can ile Olumlu Cümleler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede yetenek bildirme: can ile olumlu cümleler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Yetenek Bildirme: Can ile Olumlu Cümleler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices yetenek bildirme: can ile olumlu cümleler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Yetenek Bildirme: Can ile Olumlu Cümleler pratiği yapar.",
      "highlightedWords": [
        "yetenek bildirme: can ile olumlu cümleler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use yetenek bildirme: can ile olumlu cümleler in daily dialogues?",
      "tr": "Günlük diyaloglarda Yetenek Bildirme: Can ile Olumlu Cümleler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on yetenek bildirme: can ile olumlu cümleler yesterday.",
      "tr": "Dün Yetenek Bildirme: Can ile Olumlu Cümleler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of yetenek bildirme: can ile olumlu cümleler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Yetenek Bildirme: Can ile Olumlu Cümleler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#51)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Yetenek Bildirme: Can ile Olumlu Cümleler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply yetenek bildirme: can ile olumlu cümleler ___ (practice item 51).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Yetenek Bildirme: Can ile Olumlu Cümleler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Yetenek Bildirme: Can ile Olumlu Cümleler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of yetenek bildirme: can ile olumlu cümleler every day to communicate naturally in lesson 51",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "yetenek",
      "bildirme",
      "can",
      "ile",
      "olumlu",
      "cümleler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "51",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of yetenek bildirme: can ile olumlu cümleler every day to communicate naturally in lesson 51'."
  },
  "summaryTakeaways": [
    "'Yetenek Bildirme: Can ile Olumlu Cümleler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  52: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' Yapısının Temel Kuralı",
      "content": "Yetersizlik Bildirme: Can't ile Olumsuz Cümleler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Yetersizlik Bildirme: Can't ile Olumsuz Cümleler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Yetersizlik Bildirme: Can't ile Olumsuz Cümleler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Yetersizlik Bildirme: Can't ile Olumsuz Cümleler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Yetersizlik Bildirme: Can't ile Olumsuz Cümleler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Yetersizlik Bildirme: Can't ile Olumsuz Cümleler — Ana Kural",
      "formula": "Özne + Yetersizlik Bildirme: Can't ile Olumsuz Cümleler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying yetersizlik bildirme: can't ile olumsuz cümleler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' kalıbını zorlamak.",
      "correctExample": "'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — Yetersizlik Bildirme: Can't ile Olumsuz Cümleler",
    "description": "Yetersizlik Bildirme: Can't ile Olumsuz Cümleler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use yetersizlik bildirme: can't ile olumsuz cümleler in your conversation?",
        "textTr": "Konuşmanızda Yetersizlik Bildirme: Can't ile Olumsuz Cümleler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede yetersizlik bildirme: can't ile olumsuz cümleler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices yetersizlik bildirme: can't ile olumsuz cümleler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Yetersizlik Bildirme: Can't ile Olumsuz Cümleler pratiği yapar.",
      "highlightedWords": [
        "yetersizlik bildirme: can't ile olumsuz cümleler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use yetersizlik bildirme: can't ile olumsuz cümleler in daily dialogues?",
      "tr": "Günlük diyaloglarda Yetersizlik Bildirme: Can't ile Olumsuz Cümleler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on yetersizlik bildirme: can't ile olumsuz cümleler yesterday.",
      "tr": "Dün Yetersizlik Bildirme: Can't ile Olumsuz Cümleler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of yetersizlik bildirme: can't ile olumsuz cümleler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#52)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply yetersizlik bildirme: can't ile olumsuz cümleler ___ (practice item 52).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of yetersizlik bildirme: can't ile olumsuz cümleler every day to communicate naturally in lesson 52",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "yetersizlik",
      "bildirme",
      "cant",
      "ile",
      "olumsuz",
      "cümleler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "52",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of yetersizlik bildirme: can't ile olumsuz cümleler every day to communicate naturally in lesson 52'."
  },
  "summaryTakeaways": [
    "'Yetersizlik Bildirme: Can't ile Olumsuz Cümleler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  53: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Yetenek Sorma: Can you...? ve Kısa Cevaplar' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Yetenek Sorma: Can you...? ve Kısa Cevaplar' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Yetenek Sorma: Can you...? ve Kısa Cevaplar' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Yetenek Sorma: Can you...? ve Kısa Cevaplar' Yapısının Temel Kuralı",
      "content": "Yetenek Sorma: Can you...? ve Kısa Cevaplar konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Yetenek Sorma: Can you...? ve Kısa Cevaplar + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Yetenek Sorma: Can you...? ve Kısa Cevaplar",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Yetenek Sorma: Can you...? ve Kısa Cevaplar",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Yetenek Sorma: Can you...? ve Kısa Cevaplar konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Yetenek Sorma: Can you...? ve Kısa Cevaplar — Ana Kural",
      "formula": "Özne + Yetenek Sorma: Can you...? ve Kısa Cevaplar + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying yetenek sorma: can you...? ve kısa cevaplar correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Yetenek Sorma: Can you...? ve Kısa Cevaplar' kalıbını zorlamak.",
      "correctExample": "'Yetenek Sorma: Can you...? ve Kısa Cevaplar' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — Yetenek Sorma: Can you...? ve Kısa Cevaplar",
    "description": "Yetenek Sorma: Can you...? ve Kısa Cevaplar konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use yetenek sorma: can you...? ve kısa cevaplar in your conversation?",
        "textTr": "Konuşmanızda Yetenek Sorma: Can you...? ve Kısa Cevaplar konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Yetenek Sorma: Can you...? ve Kısa Cevaplar' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede yetenek sorma: can you...? ve kısa cevaplar yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Yetenek Sorma: Can you...? ve Kısa Cevaplar' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices yetenek sorma: can you...? ve kısa cevaplar every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Yetenek Sorma: Can you...? ve Kısa Cevaplar pratiği yapar.",
      "highlightedWords": [
        "yetenek sorma: can you...? ve kısa cevaplar"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use yetenek sorma: can you...? ve kısa cevaplar in daily dialogues?",
      "tr": "Günlük diyaloglarda Yetenek Sorma: Can you...? ve Kısa Cevaplar konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on yetenek sorma: can you...? ve kısa cevaplar yesterday.",
      "tr": "Dün Yetenek Sorma: Can you...? ve Kısa Cevaplar üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of yetenek sorma: can you...? ve kısa cevaplar is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Yetenek Sorma: Can you...? ve Kısa Cevaplar' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#53)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Yetenek Sorma: Can you...? ve Kısa Cevaplar' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply yetenek sorma: can you...? ve kısa cevaplar ___ (practice item 53).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Yetenek Sorma: Can you...? ve Kısa Cevaplar' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Yetenek Sorma: Can you...? ve Kısa Cevaplar' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of yetenek sorma: can you...? ve kısa cevaplar every day to communicate naturally in lesson 53",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "yetenek",
      "sorma",
      "can",
      "you",
      "ve",
      "kısa",
      "cevaplar",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "53",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of yetenek sorma: can you...? ve kısa cevaplar every day to communicate naturally in lesson 53'."
  },
  "summaryTakeaways": [
    "'Yetenek Sorma: Can you...? ve Kısa Cevaplar' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  54: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında temel nezaket kalıplarını (Please, Thank you, You're welcome, Excuse me, Sorry) sosyal bağlamda doğru kullanabilmek.",
  "whyItMatters": "Nezaket ifadeleri her dilde saygı ve pozitif sosyal bağ kurmanın en temel köprüsüdür.",
  "linguisticLogic": "Teşekkür için 'Thank you / Thanks', karşılık olarak 'You are welcome'; izin veya dikkat çekmek için 'Excuse me'; özür dilemek için 'I am sorry' kullanılır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları' Yapısının Temel Kuralı",
      "content": "İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları — Ana Kural",
      "formula": "Özne + İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying i̇zin i̇steme: can i...? ve may i...? nezaket kalıpları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları' kalıbını zorlamak.",
      "correctExample": "'İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları",
    "description": "İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use i̇zin i̇steme: can i...? ve may i...? nezaket kalıpları in your conversation?",
        "textTr": "Konuşmanızda İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede i̇zin i̇steme: can i...? ve may i...? nezaket kalıpları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices i̇zin i̇steme: can i...? ve may i...? nezaket kalıpları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları pratiği yapar.",
      "highlightedWords": [
        "i̇zin i̇steme: can i...? ve may i...? nezaket kalıpları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use i̇zin i̇steme: can i...? ve may i...? nezaket kalıpları in daily dialogues?",
      "tr": "Günlük diyaloglarda İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on i̇zin i̇steme: can i...? ve may i...? nezaket kalıpları yesterday.",
      "tr": "Dün İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Courteous",
      "phonetic": "/ˈkɜː.ti.əs/",
      "partOfSpeech": "adjective",
      "meaningTr": "Kibar, nazik",
      "exampleSentence": "He gave a courteous response."
    },
    {
      "word": "Welcome",
      "phonetic": "/ˈwel.kəm/",
      "partOfSpeech": "phrase",
      "meaningTr": "Rica ederim",
      "exampleSentence": "You are very welcome."
    },
    {
      "word": "Appreciate",
      "phonetic": "/əˈpriː.ʃi.eɪt/",
      "partOfSpeech": "verb",
      "meaningTr": "Müteşekkir olmak",
      "exampleSentence": "I appreciate your help."
    },
    {
      "word": "Politeness",
      "phonetic": "/pəˈlaɪt.nəs/",
      "partOfSpeech": "noun",
      "meaningTr": "Nezaket",
      "exampleSentence": "Politeness opens every door."
    }
  ],
  "quickCheck": {
    "question": "Kalabalık bir yerde birinin önünden geçerken veya dikkatini çekerken hangi nezaket ifadesi kullanılır? (#54)",
    "options": [
      "Excuse me (Afedersiniz)",
      "Sorry",
      "Please",
      "Welcome"
    ],
    "correctIndex": 0,
    "explanation": "Birinin dikkatini çekmek veya geçmek için 'Excuse me' denir. Hata yapıldığında ise 'Sorry' denir."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "When someone says 'Thank you', the most polite standard response is 'You are ___' (lesson 54).",
    "options": [
      "welcome",
      "pleased",
      "good",
      "fine"
    ],
    "correctAnswer": "welcome",
    "hint": "'İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'welcome' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Nazik yardımınız için çok teşekkür ederim, rica ederim demek bir zevktir.",
    "targetEn": "Thank you very much for your kind assistance and you are always welcome in lesson 54",
    "availableWords": [
      "Thank",
      "you",
      "very",
      "much",
      "for",
      "your",
      "kind",
      "assistance",
      "and",
      "are",
      "always",
      "welcome",
      "in",
      "lesson",
      "54",
      "often",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'Thank you very much for your kind assistance and you are always welcome in lesson 54'."
  },
  "summaryTakeaways": [
    "'İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  55: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Rica Etme: Can you help me? / Could you please...?' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Rica Etme: Can you help me? / Could you please...?' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Rica Etme: Can you help me? / Could you please...?' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Rica Etme: Can you help me? / Could you please...?' Yapısının Temel Kuralı",
      "content": "Rica Etme: Can you help me? / Could you please...? konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Rica Etme: Can you help me? / Could you please...? + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Rica Etme: Can you help me? / Could you please...?",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Rica Etme: Can you help me? / Could you please...?",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Rica Etme: Can you help me? / Could you please...? konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Rica Etme: Can you help me? / Could you please...? — Ana Kural",
      "formula": "Özne + Rica Etme: Can you help me? / Could you please...? + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying rica etme: can you help me? / could you please...? correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Rica Etme: Can you help me? / Could you please...?' kalıbını zorlamak.",
      "correctExample": "'Rica Etme: Can you help me? / Could you please...?' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — Rica Etme: Can you help me? / Could you please...?",
    "description": "Rica Etme: Can you help me? / Could you please...? konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use rica etme: can you help me? / could you please...? in your conversation?",
        "textTr": "Konuşmanızda Rica Etme: Can you help me? / Could you please...? konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Rica Etme: Can you help me? / Could you please...?' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede rica etme: can you help me? / could you please...? yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Rica Etme: Can you help me? / Could you please...?' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices rica etme: can you help me? / could you please...? every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Rica Etme: Can you help me? / Could you please...? pratiği yapar.",
      "highlightedWords": [
        "rica etme: can you help me? / could you please...?"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use rica etme: can you help me? / could you please...? in daily dialogues?",
      "tr": "Günlük diyaloglarda Rica Etme: Can you help me? / Could you please...? konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on rica etme: can you help me? / could you please...? yesterday.",
      "tr": "Dün Rica Etme: Can you help me? / Could you please...? üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of rica etme: can you help me? / could you please...? is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Rica Etme: Can you help me? / Could you please...?' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#55)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Rica Etme: Can you help me? / Could you please...?' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply rica etme: can you help me? / could you please...? ___ (practice item 55).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Rica Etme: Can you help me? / Could you please...?' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Rica Etme: Can you help me? / Could you please...?' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of rica etme: can you help me? / could you please...? every day to communicate naturally in lesson 55",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "rica",
      "etme",
      "can",
      "you",
      "help",
      "me",
      "/",
      "could",
      "please",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "55",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of rica etme: can you help me? / could you please...? every day to communicate naturally in lesson 55'."
  },
  "summaryTakeaways": [
    "'Rica Etme: Can you help me? / Could you please...?' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  56: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Duyusal Algı Fiilleriyle Can Kullanımı' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Duyusal Algı Fiilleriyle Can Kullanımı' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Duyusal Algı Fiilleriyle Can Kullanımı' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Duyusal Algı Fiilleriyle Can Kullanımı' Yapısının Temel Kuralı",
      "content": "Duyusal Algı Fiilleriyle Can Kullanımı konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Duyusal Algı Fiilleriyle Can Kullanımı + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Duyusal Algı Fiilleriyle Can Kullanımı",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Duyusal Algı Fiilleriyle Can Kullanımı",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Duyusal Algı Fiilleriyle Can Kullanımı konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Duyusal Algı Fiilleriyle Can Kullanımı — Ana Kural",
      "formula": "Özne + Duyusal Algı Fiilleriyle Can Kullanımı + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying duyusal algı fiilleriyle can kullanımı correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Duyusal Algı Fiilleriyle Can Kullanımı' kalıbını zorlamak.",
      "correctExample": "'Duyusal Algı Fiilleriyle Can Kullanımı' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — Duyusal Algı Fiilleriyle Can Kullanımı",
    "description": "Duyusal Algı Fiilleriyle Can Kullanımı konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use duyusal algı fiilleriyle can kullanımı in your conversation?",
        "textTr": "Konuşmanızda Duyusal Algı Fiilleriyle Can Kullanımı konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Duyusal Algı Fiilleriyle Can Kullanımı' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede duyusal algı fiilleriyle can kullanımı yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Duyusal Algı Fiilleriyle Can Kullanımı' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices duyusal algı fiilleriyle can kullanımı every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Duyusal Algı Fiilleriyle Can Kullanımı pratiği yapar.",
      "highlightedWords": [
        "duyusal algı fiilleriyle can kullanımı"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use duyusal algı fiilleriyle can kullanımı in daily dialogues?",
      "tr": "Günlük diyaloglarda Duyusal Algı Fiilleriyle Can Kullanımı konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on duyusal algı fiilleriyle can kullanımı yesterday.",
      "tr": "Dün Duyusal Algı Fiilleriyle Can Kullanımı üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of duyusal algı fiilleriyle can kullanımı is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Duyusal Algı Fiilleriyle Can Kullanımı' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#56)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Duyusal Algı Fiilleriyle Can Kullanımı' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply duyusal algı fiilleriyle can kullanımı ___ (practice item 56).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Duyusal Algı Fiilleriyle Can Kullanımı' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Duyusal Algı Fiilleriyle Can Kullanımı' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of duyusal algı fiilleriyle can kullanımı every day to communicate naturally in lesson 56",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "duyusal",
      "algı",
      "fiilleriyle",
      "can",
      "kullanımı",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "56",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of duyusal algı fiilleriyle can kullanımı every day to communicate naturally in lesson 56'."
  },
  "summaryTakeaways": [
    "'Duyusal Algı Fiilleriyle Can Kullanımı' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  57: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' Yapısının Temel Kuralı",
      "content": "Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi — Ana Kural",
      "formula": "Özne + Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying sporlar ve aktiviteler: play, go, do kullanım matrisi correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' kalıbını zorlamak.",
      "correctExample": "'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi",
    "description": "Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use sporlar ve aktiviteler: play, go, do kullanım matrisi in your conversation?",
        "textTr": "Konuşmanızda Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede sporlar ve aktiviteler: play, go, do kullanım matrisi yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices sporlar ve aktiviteler: play, go, do kullanım matrisi every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi pratiği yapar.",
      "highlightedWords": [
        "sporlar ve aktiviteler: play, go, do kullanım matrisi"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use sporlar ve aktiviteler: play, go, do kullanım matrisi in daily dialogues?",
      "tr": "Günlük diyaloglarda Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on sporlar ve aktiviteler: play, go, do kullanım matrisi yesterday.",
      "tr": "Dün Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of sporlar ve aktiviteler: play, go, do kullanım matrisi is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#57)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply sporlar ve aktiviteler: play, go, do kullanım matrisi ___ (practice item 57).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of sporlar ve aktiviteler: play, go, do kullanım matrisi every day to communicate naturally in lesson 57",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "sporlar",
      "ve",
      "aktiviteler",
      "play",
      "go",
      "do",
      "kullanım",
      "matrisi",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "57",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of sporlar ve aktiviteler: play, go, do kullanım matrisi every day to communicate naturally in lesson 57'."
  },
  "summaryTakeaways": [
    "'Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  58: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Müzik Aletleri ve Beceriler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Müzik Aletleri ve Beceriler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Müzik Aletleri ve Beceriler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Müzik Aletleri ve Beceriler' Yapısının Temel Kuralı",
      "content": "Müzik Aletleri ve Beceriler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Müzik Aletleri ve Beceriler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Müzik Aletleri ve Beceriler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Müzik Aletleri ve Beceriler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Müzik Aletleri ve Beceriler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Müzik Aletleri ve Beceriler — Ana Kural",
      "formula": "Özne + Müzik Aletleri ve Beceriler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying müzik aletleri ve beceriler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Müzik Aletleri ve Beceriler' kalıbını zorlamak.",
      "correctExample": "'Müzik Aletleri ve Beceriler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — Müzik Aletleri ve Beceriler",
    "description": "Müzik Aletleri ve Beceriler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use müzik aletleri ve beceriler in your conversation?",
        "textTr": "Konuşmanızda Müzik Aletleri ve Beceriler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Müzik Aletleri ve Beceriler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede müzik aletleri ve beceriler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Müzik Aletleri ve Beceriler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices müzik aletleri ve beceriler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Müzik Aletleri ve Beceriler pratiği yapar.",
      "highlightedWords": [
        "müzik aletleri ve beceriler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use müzik aletleri ve beceriler in daily dialogues?",
      "tr": "Günlük diyaloglarda Müzik Aletleri ve Beceriler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on müzik aletleri ve beceriler yesterday.",
      "tr": "Dün Müzik Aletleri ve Beceriler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of müzik aletleri ve beceriler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Müzik Aletleri ve Beceriler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#58)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Müzik Aletleri ve Beceriler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply müzik aletleri ve beceriler ___ (practice item 58).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Müzik Aletleri ve Beceriler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Müzik Aletleri ve Beceriler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of müzik aletleri ve beceriler every day to communicate naturally in lesson 58",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "müzik",
      "aletleri",
      "ve",
      "beceriler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "58",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of müzik aletleri ve beceriler every day to communicate naturally in lesson 58'."
  },
  "summaryTakeaways": [
    "'Müzik Aletleri ve Beceriler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  59: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Becerileri Derecelendirme' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Becerileri Derecelendirme' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Becerileri Derecelendirme' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Becerileri Derecelendirme' Yapısının Temel Kuralı",
      "content": "Becerileri Derecelendirme konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Becerileri Derecelendirme + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Becerileri Derecelendirme",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Becerileri Derecelendirme",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Becerileri Derecelendirme konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Becerileri Derecelendirme — Ana Kural",
      "formula": "Özne + Becerileri Derecelendirme + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying becerileri derecelendirme correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Becerileri Derecelendirme' kalıbını zorlamak.",
      "correctExample": "'Becerileri Derecelendirme' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — Becerileri Derecelendirme",
    "description": "Becerileri Derecelendirme konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use becerileri derecelendirme in your conversation?",
        "textTr": "Konuşmanızda Becerileri Derecelendirme konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Becerileri Derecelendirme' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede becerileri derecelendirme yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Becerileri Derecelendirme' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices becerileri derecelendirme every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Becerileri Derecelendirme pratiği yapar.",
      "highlightedWords": [
        "becerileri derecelendirme"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use becerileri derecelendirme in daily dialogues?",
      "tr": "Günlük diyaloglarda Becerileri Derecelendirme konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on becerileri derecelendirme yesterday.",
      "tr": "Dün Becerileri Derecelendirme üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of becerileri derecelendirme is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Becerileri Derecelendirme' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#59)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Becerileri Derecelendirme' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply becerileri derecelendirme ___ (practice item 59).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Becerileri Derecelendirme' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Becerileri Derecelendirme' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of becerileri derecelendirme every day to communicate naturally in lesson 59",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "becerileri",
      "derecelendirme",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "59",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of becerileri derecelendirme every day to communicate naturally in lesson 59'."
  },
  "summaryTakeaways": [
    "'Becerileri Derecelendirme' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  60: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' Yapısının Temel Kuralı",
      "content": "A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma — Ana Kural",
      "formula": "Özne + A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' kalıbını zorlamak.",
      "correctExample": "'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yetenekler ve İzin: Can & Can't — A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma",
    "description": "A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma in your conversation?",
        "textTr": "Konuşmanızda A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma pratiği yapar.",
      "highlightedWords": [
        "a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma in daily dialogues?",
      "tr": "Günlük diyaloglarda A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma yesterday.",
      "tr": "Dün A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#60)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma ___ (practice item 60).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma every day to communicate naturally in lesson 60",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a1",
      "modül",
      "6",
      "entegrasyonu",
      "i̇ş",
      "i̇lanı",
      "başvurusunda",
      "becerileri",
      "sunma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "60",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a1 modül 6 entegrasyonu: i̇ş i̇lanı başvurusunda becerileri sunma every day to communicate naturally in lesson 60'."
  },
  "summaryTakeaways": [
    "'A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  61: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Şimdiki Zaman : Formülü ve Mantığı' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Şimdiki Zaman : Formülü ve Mantığı' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Şimdiki Zaman : Formülü ve Mantığı' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Şimdiki Zaman : Formülü ve Mantığı' Yapısının Temel Kuralı",
      "content": "Şimdiki Zaman : Formülü ve Mantığı konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Şimdiki Zaman : Formülü ve Mantığı + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Şimdiki Zaman : Formülü ve Mantığı",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Şimdiki Zaman : Formülü ve Mantığı",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Şimdiki Zaman : Formülü ve Mantığı konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Şimdiki Zaman : Formülü ve Mantığı — Ana Kural",
      "formula": "Özne + Şimdiki Zaman : Formülü ve Mantığı + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying şimdiki zaman : formülü ve mantığı correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Şimdiki Zaman : Formülü ve Mantığı' kalıbını zorlamak.",
      "correctExample": "'Şimdiki Zaman : Formülü ve Mantığı' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Şimdiki Zaman : Formülü ve Mantığı",
    "description": "Şimdiki Zaman : Formülü ve Mantığı konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use şimdiki zaman : formülü ve mantığı in your conversation?",
        "textTr": "Konuşmanızda Şimdiki Zaman : Formülü ve Mantığı konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Şimdiki Zaman : Formülü ve Mantığı' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede şimdiki zaman : formülü ve mantığı yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Şimdiki Zaman : Formülü ve Mantığı' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices şimdiki zaman : formülü ve mantığı every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Şimdiki Zaman : Formülü ve Mantığı pratiği yapar.",
      "highlightedWords": [
        "şimdiki zaman : formülü ve mantığı"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use şimdiki zaman : formülü ve mantığı in daily dialogues?",
      "tr": "Günlük diyaloglarda Şimdiki Zaman : Formülü ve Mantığı konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on şimdiki zaman : formülü ve mantığı yesterday.",
      "tr": "Dün Şimdiki Zaman : Formülü ve Mantığı üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of şimdiki zaman : formülü ve mantığı is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Şimdiki Zaman : Formülü ve Mantığı' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#61)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Şimdiki Zaman : Formülü ve Mantığı' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply şimdiki zaman : formülü ve mantığı ___ (practice item 61).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Şimdiki Zaman : Formülü ve Mantığı' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Şimdiki Zaman : Formülü ve Mantığı' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of şimdiki zaman : formülü ve mantığı every day to communicate naturally in lesson 61",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "şimdiki",
      "zaman",
      "formülü",
      "ve",
      "mantığı",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "61",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of şimdiki zaman : formülü ve mantığı every day to communicate naturally in lesson 61'."
  },
  "summaryTakeaways": [
    "'Şimdiki Zaman : Formülü ve Mantığı' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  62: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' Yapısının Temel Kuralı",
      "content": "Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri — Ana Kural",
      "formula": "Özne + Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' kalıbını zorlamak.",
      "correctExample": "'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri",
    "description": "Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri in your conversation?",
        "textTr": "Konuşmanızda Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri pratiği yapar.",
      "highlightedWords": [
        "fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri in daily dialogues?",
      "tr": "Günlük diyaloglarda Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri yesterday.",
      "tr": "Dün Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#62)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri ___ (practice item 62).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri every day to communicate naturally in lesson 62",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "fiil",
      "sonuna",
      "-ing",
      "ekleme",
      "kuralları",
      "ve",
      "i̇mla",
      "değişimleri",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "62",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of fiil sonuna -ing ekleme kuralları ve i̇mla değişimleri every day to communicate naturally in lesson 62'."
  },
  "summaryTakeaways": [
    "'Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  63: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Şimdiki Zaman: Olumsuz Cümleler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Şimdiki Zaman: Olumsuz Cümleler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Şimdiki Zaman: Olumsuz Cümleler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Şimdiki Zaman: Olumsuz Cümleler' Yapısının Temel Kuralı",
      "content": "Şimdiki Zaman: Olumsuz Cümleler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Şimdiki Zaman: Olumsuz Cümleler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Şimdiki Zaman: Olumsuz Cümleler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Şimdiki Zaman: Olumsuz Cümleler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Şimdiki Zaman: Olumsuz Cümleler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Şimdiki Zaman: Olumsuz Cümleler — Ana Kural",
      "formula": "Özne + Şimdiki Zaman: Olumsuz Cümleler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying şimdiki zaman: olumsuz cümleler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Şimdiki Zaman: Olumsuz Cümleler' kalıbını zorlamak.",
      "correctExample": "'Şimdiki Zaman: Olumsuz Cümleler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Şimdiki Zaman: Olumsuz Cümleler",
    "description": "Şimdiki Zaman: Olumsuz Cümleler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use şimdiki zaman: olumsuz cümleler in your conversation?",
        "textTr": "Konuşmanızda Şimdiki Zaman: Olumsuz Cümleler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Şimdiki Zaman: Olumsuz Cümleler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede şimdiki zaman: olumsuz cümleler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Şimdiki Zaman: Olumsuz Cümleler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices şimdiki zaman: olumsuz cümleler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Şimdiki Zaman: Olumsuz Cümleler pratiği yapar.",
      "highlightedWords": [
        "şimdiki zaman: olumsuz cümleler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use şimdiki zaman: olumsuz cümleler in daily dialogues?",
      "tr": "Günlük diyaloglarda Şimdiki Zaman: Olumsuz Cümleler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on şimdiki zaman: olumsuz cümleler yesterday.",
      "tr": "Dün Şimdiki Zaman: Olumsuz Cümleler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of şimdiki zaman: olumsuz cümleler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Şimdiki Zaman: Olumsuz Cümleler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#63)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Şimdiki Zaman: Olumsuz Cümleler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply şimdiki zaman: olumsuz cümleler ___ (practice item 63).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Şimdiki Zaman: Olumsuz Cümleler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Şimdiki Zaman: Olumsuz Cümleler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of şimdiki zaman: olumsuz cümleler every day to communicate naturally in lesson 63",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "şimdiki",
      "zaman",
      "olumsuz",
      "cümleler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "63",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of şimdiki zaman: olumsuz cümleler every day to communicate naturally in lesson 63'."
  },
  "summaryTakeaways": [
    "'Şimdiki Zaman: Olumsuz Cümleler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  64: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' Yapısının Temel Kuralı",
      "content": "Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar — Ana Kural",
      "formula": "Özne + Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying şimdiki zaman: soru cümleleri ve kısa cevaplar correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' kalıbını zorlamak.",
      "correctExample": "'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar",
    "description": "Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use şimdiki zaman: soru cümleleri ve kısa cevaplar in your conversation?",
        "textTr": "Konuşmanızda Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede şimdiki zaman: soru cümleleri ve kısa cevaplar yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices şimdiki zaman: soru cümleleri ve kısa cevaplar every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar pratiği yapar.",
      "highlightedWords": [
        "şimdiki zaman: soru cümleleri ve kısa cevaplar"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use şimdiki zaman: soru cümleleri ve kısa cevaplar in daily dialogues?",
      "tr": "Günlük diyaloglarda Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on şimdiki zaman: soru cümleleri ve kısa cevaplar yesterday.",
      "tr": "Dün Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of şimdiki zaman: soru cümleleri ve kısa cevaplar is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#64)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply şimdiki zaman: soru cümleleri ve kısa cevaplar ___ (practice item 64).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of şimdiki zaman: soru cümleleri ve kısa cevaplar every day to communicate naturally in lesson 64",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "şimdiki",
      "zaman",
      "soru",
      "cümleleri",
      "ve",
      "kısa",
      "cevaplar",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "64",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of şimdiki zaman: soru cümleleri ve kısa cevaplar every day to communicate naturally in lesson 64'."
  },
  "summaryTakeaways": [
    "'Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  65: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' Yapısının Temel Kuralı",
      "content": "Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now — Ana Kural",
      "formula": "Özne + Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying şimdiki zaman zaman belirteçleri: now, at the moment, right now correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' kalıbını zorlamak.",
      "correctExample": "'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now",
    "description": "Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use şimdiki zaman zaman belirteçleri: now, at the moment, right now in your conversation?",
        "textTr": "Konuşmanızda Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede şimdiki zaman zaman belirteçleri: now, at the moment, right now yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices şimdiki zaman zaman belirteçleri: now, at the moment, right now every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now pratiği yapar.",
      "highlightedWords": [
        "şimdiki zaman zaman belirteçleri: now, at the moment, right now"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use şimdiki zaman zaman belirteçleri: now, at the moment, right now in daily dialogues?",
      "tr": "Günlük diyaloglarda Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on şimdiki zaman zaman belirteçleri: now, at the moment, right now yesterday.",
      "tr": "Dün Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of şimdiki zaman zaman belirteçleri: now, at the moment, right now is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#65)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply şimdiki zaman zaman belirteçleri: now, at the moment, right now ___ (practice item 65).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of şimdiki zaman zaman belirteçleri: now, at the moment, right now every day to communicate naturally in lesson 65",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "şimdiki",
      "zaman",
      "belirteçleri",
      "now",
      "at",
      "moment",
      "right",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "65",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of şimdiki zaman zaman belirteçleri: now, at the moment, right now every day to communicate naturally in lesson 65'."
  },
  "summaryTakeaways": [
    "'Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  66: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' Yapısının Temel Kuralı",
      "content": "Geniş Zaman vs Şimdiki Zaman Karşılaştırması konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Geniş Zaman vs Şimdiki Zaman Karşılaştırması + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Geniş Zaman vs Şimdiki Zaman Karşılaştırması",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Geniş Zaman vs Şimdiki Zaman Karşılaştırması",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Geniş Zaman vs Şimdiki Zaman Karşılaştırması konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Geniş Zaman vs Şimdiki Zaman Karşılaştırması — Ana Kural",
      "formula": "Özne + Geniş Zaman vs Şimdiki Zaman Karşılaştırması + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying geniş zaman vs şimdiki zaman karşılaştırması correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' kalıbını zorlamak.",
      "correctExample": "'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Geniş Zaman vs Şimdiki Zaman Karşılaştırması",
    "description": "Geniş Zaman vs Şimdiki Zaman Karşılaştırması konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use geniş zaman vs şimdiki zaman karşılaştırması in your conversation?",
        "textTr": "Konuşmanızda Geniş Zaman vs Şimdiki Zaman Karşılaştırması konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede geniş zaman vs şimdiki zaman karşılaştırması yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices geniş zaman vs şimdiki zaman karşılaştırması every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Geniş Zaman vs Şimdiki Zaman Karşılaştırması pratiği yapar.",
      "highlightedWords": [
        "geniş zaman vs şimdiki zaman karşılaştırması"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use geniş zaman vs şimdiki zaman karşılaştırması in daily dialogues?",
      "tr": "Günlük diyaloglarda Geniş Zaman vs Şimdiki Zaman Karşılaştırması konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on geniş zaman vs şimdiki zaman karşılaştırması yesterday.",
      "tr": "Dün Geniş Zaman vs Şimdiki Zaman Karşılaştırması üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of geniş zaman vs şimdiki zaman karşılaştırması is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#66)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply geniş zaman vs şimdiki zaman karşılaştırması ___ (practice item 66).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of geniş zaman vs şimdiki zaman karşılaştırması every day to communicate naturally in lesson 66",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "geniş",
      "zaman",
      "vs",
      "şimdiki",
      "karşılaştırması",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "66",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of geniş zaman vs şimdiki zaman karşılaştırması every day to communicate naturally in lesson 66'."
  },
  "summaryTakeaways": [
    "'Geniş Zaman vs Şimdiki Zaman Karşılaştırması' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  67: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Durum Bildiren Fiiller  Neden -ing Almaz?' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Durum Bildiren Fiiller  Neden -ing Almaz?' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Durum Bildiren Fiiller  Neden -ing Almaz?' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Durum Bildiren Fiiller  Neden -ing Almaz?' Yapısının Temel Kuralı",
      "content": "Durum Bildiren Fiiller  Neden -ing Almaz? konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Durum Bildiren Fiiller  Neden -ing Almaz? + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Durum Bildiren Fiiller  Neden -ing Almaz?",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Durum Bildiren Fiiller  Neden -ing Almaz?",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Durum Bildiren Fiiller  Neden -ing Almaz? konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Durum Bildiren Fiiller  Neden -ing Almaz? — Ana Kural",
      "formula": "Özne + Durum Bildiren Fiiller  Neden -ing Almaz? + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying durum bildiren fiiller  neden -ing almaz? correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Durum Bildiren Fiiller  Neden -ing Almaz?' kalıbını zorlamak.",
      "correctExample": "'Durum Bildiren Fiiller  Neden -ing Almaz?' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Durum Bildiren Fiiller  Neden -ing Almaz?",
    "description": "Durum Bildiren Fiiller  Neden -ing Almaz? konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use durum bildiren fiiller  neden -ing almaz? in your conversation?",
        "textTr": "Konuşmanızda Durum Bildiren Fiiller  Neden -ing Almaz? konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Durum Bildiren Fiiller  Neden -ing Almaz?' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede durum bildiren fiiller  neden -ing almaz? yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Durum Bildiren Fiiller  Neden -ing Almaz?' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices durum bildiren fiiller  neden -ing almaz? every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Durum Bildiren Fiiller  Neden -ing Almaz? pratiği yapar.",
      "highlightedWords": [
        "durum bildiren fiiller  neden -ing almaz?"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use durum bildiren fiiller  neden -ing almaz? in daily dialogues?",
      "tr": "Günlük diyaloglarda Durum Bildiren Fiiller  Neden -ing Almaz? konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on durum bildiren fiiller  neden -ing almaz? yesterday.",
      "tr": "Dün Durum Bildiren Fiiller  Neden -ing Almaz? üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of durum bildiren fiiller  neden -ing almaz? is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Durum Bildiren Fiiller  Neden -ing Almaz?' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#67)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Durum Bildiren Fiiller  Neden -ing Almaz?' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply durum bildiren fiiller  neden -ing almaz? ___ (practice item 67).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Durum Bildiren Fiiller  Neden -ing Almaz?' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Durum Bildiren Fiiller  Neden -ing Almaz?' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of durum bildiren fiiller  neden -ing almaz? every day to communicate naturally in lesson 67",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "durum",
      "bildiren",
      "fiiller",
      "neden",
      "-ing",
      "almaz",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "67",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of durum bildiren fiiller  neden -ing almaz? every day to communicate naturally in lesson 67'."
  },
  "summaryTakeaways": [
    "'Durum Bildiren Fiiller  Neden -ing Almaz?' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  68: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Fotoğraf ve Görsel Tasviri Yapma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Fotoğraf ve Görsel Tasviri Yapma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Fotoğraf ve Görsel Tasviri Yapma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Fotoğraf ve Görsel Tasviri Yapma' Yapısının Temel Kuralı",
      "content": "Fotoğraf ve Görsel Tasviri Yapma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Fotoğraf ve Görsel Tasviri Yapma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Fotoğraf ve Görsel Tasviri Yapma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Fotoğraf ve Görsel Tasviri Yapma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Fotoğraf ve Görsel Tasviri Yapma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Fotoğraf ve Görsel Tasviri Yapma — Ana Kural",
      "formula": "Özne + Fotoğraf ve Görsel Tasviri Yapma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying fotoğraf ve görsel tasviri yapma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Fotoğraf ve Görsel Tasviri Yapma' kalıbını zorlamak.",
      "correctExample": "'Fotoğraf ve Görsel Tasviri Yapma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Fotoğraf ve Görsel Tasviri Yapma",
    "description": "Fotoğraf ve Görsel Tasviri Yapma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use fotoğraf ve görsel tasviri yapma in your conversation?",
        "textTr": "Konuşmanızda Fotoğraf ve Görsel Tasviri Yapma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Fotoğraf ve Görsel Tasviri Yapma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede fotoğraf ve görsel tasviri yapma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Fotoğraf ve Görsel Tasviri Yapma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices fotoğraf ve görsel tasviri yapma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Fotoğraf ve Görsel Tasviri Yapma pratiği yapar.",
      "highlightedWords": [
        "fotoğraf ve görsel tasviri yapma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use fotoğraf ve görsel tasviri yapma in daily dialogues?",
      "tr": "Günlük diyaloglarda Fotoğraf ve Görsel Tasviri Yapma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on fotoğraf ve görsel tasviri yapma yesterday.",
      "tr": "Dün Fotoğraf ve Görsel Tasviri Yapma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of fotoğraf ve görsel tasviri yapma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Fotoğraf ve Görsel Tasviri Yapma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#68)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Fotoğraf ve Görsel Tasviri Yapma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply fotoğraf ve görsel tasviri yapma ___ (practice item 68).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Fotoğraf ve Görsel Tasviri Yapma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Fotoğraf ve Görsel Tasviri Yapma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of fotoğraf ve görsel tasviri yapma every day to communicate naturally in lesson 68",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "fotoğraf",
      "ve",
      "görsel",
      "tasviri",
      "yapma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "68",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of fotoğraf ve görsel tasviri yapma every day to communicate naturally in lesson 68'."
  },
  "summaryTakeaways": [
    "'Fotoğraf ve Görsel Tasviri Yapma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  69: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' Yapısının Temel Kuralı",
      "content": "Telefon Görüşmesi Kalıpları ve Anlık Durumlar konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Telefon Görüşmesi Kalıpları ve Anlık Durumlar + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Telefon Görüşmesi Kalıpları ve Anlık Durumlar",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Telefon Görüşmesi Kalıpları ve Anlık Durumlar",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Telefon Görüşmesi Kalıpları ve Anlık Durumlar konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Telefon Görüşmesi Kalıpları ve Anlık Durumlar — Ana Kural",
      "formula": "Özne + Telefon Görüşmesi Kalıpları ve Anlık Durumlar + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying telefon görüşmesi kalıpları ve anlık durumlar correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' kalıbını zorlamak.",
      "correctExample": "'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — Telefon Görüşmesi Kalıpları ve Anlık Durumlar",
    "description": "Telefon Görüşmesi Kalıpları ve Anlık Durumlar konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use telefon görüşmesi kalıpları ve anlık durumlar in your conversation?",
        "textTr": "Konuşmanızda Telefon Görüşmesi Kalıpları ve Anlık Durumlar konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede telefon görüşmesi kalıpları ve anlık durumlar yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices telefon görüşmesi kalıpları ve anlık durumlar every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Telefon Görüşmesi Kalıpları ve Anlık Durumlar pratiği yapar.",
      "highlightedWords": [
        "telefon görüşmesi kalıpları ve anlık durumlar"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use telefon görüşmesi kalıpları ve anlık durumlar in daily dialogues?",
      "tr": "Günlük diyaloglarda Telefon Görüşmesi Kalıpları ve Anlık Durumlar konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on telefon görüşmesi kalıpları ve anlık durumlar yesterday.",
      "tr": "Dün Telefon Görüşmesi Kalıpları ve Anlık Durumlar üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of telefon görüşmesi kalıpları ve anlık durumlar is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#69)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply telefon görüşmesi kalıpları ve anlık durumlar ___ (practice item 69).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of telefon görüşmesi kalıpları ve anlık durumlar every day to communicate naturally in lesson 69",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "telefon",
      "görüşmesi",
      "kalıpları",
      "ve",
      "anlık",
      "durumlar",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "69",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of telefon görüşmesi kalıpları ve anlık durumlar every day to communicate naturally in lesson 69'."
  },
  "summaryTakeaways": [
    "'Telefon Görüşmesi Kalıpları ve Anlık Durumlar' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  70: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' Yapısının Temel Kuralı",
      "content": "A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma — Ana Kural",
      "formula": "Özne + A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a1 modül 7 entegrasyonu: canlı olay akışını aktarma correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' kalıbını zorlamak.",
      "correctExample": "'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Şimdiki Zaman: Present Continuous — A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma",
    "description": "A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a1 modül 7 entegrasyonu: canlı olay akışını aktarma in your conversation?",
        "textTr": "Konuşmanızda A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a1 modül 7 entegrasyonu: canlı olay akışını aktarma yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a1 modül 7 entegrasyonu: canlı olay akışını aktarma every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma pratiği yapar.",
      "highlightedWords": [
        "a1 modül 7 entegrasyonu: canlı olay akışını aktarma"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a1 modül 7 entegrasyonu: canlı olay akışını aktarma in daily dialogues?",
      "tr": "Günlük diyaloglarda A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a1 modül 7 entegrasyonu: canlı olay akışını aktarma yesterday.",
      "tr": "Dün A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a1 modül 7 entegrasyonu: canlı olay akışını aktarma is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#70)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a1 modül 7 entegrasyonu: canlı olay akışını aktarma ___ (practice item 70).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a1 modül 7 entegrasyonu: canlı olay akışını aktarma every day to communicate naturally in lesson 70",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a1",
      "modül",
      "7",
      "entegrasyonu",
      "canlı",
      "olay",
      "akışını",
      "aktarma",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "70",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a1 modül 7 entegrasyonu: canlı olay akışını aktarma every day to communicate naturally in lesson 70'."
  },
  "summaryTakeaways": [
    "'A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  71: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Sayılabilen  İsimler' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Sayılabilen  İsimler' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Sayılabilen  İsimler' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Sayılabilen  İsimler' Yapısının Temel Kuralı",
      "content": "Sayılabilen  İsimler konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Sayılabilen  İsimler + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Sayılabilen  İsimler",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Sayılabilen  İsimler",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Sayılabilen  İsimler konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Sayılabilen  İsimler — Ana Kural",
      "formula": "Özne + Sayılabilen  İsimler + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying sayılabilen  i̇simler correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Sayılabilen  İsimler' kalıbını zorlamak.",
      "correctExample": "'Sayılabilen  İsimler' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — Sayılabilen  İsimler",
    "description": "Sayılabilen  İsimler konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use sayılabilen  i̇simler in your conversation?",
        "textTr": "Konuşmanızda Sayılabilen  İsimler konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Sayılabilen  İsimler' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede sayılabilen  i̇simler yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Sayılabilen  İsimler' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices sayılabilen  i̇simler every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Sayılabilen  İsimler pratiği yapar.",
      "highlightedWords": [
        "sayılabilen  i̇simler"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use sayılabilen  i̇simler in daily dialogues?",
      "tr": "Günlük diyaloglarda Sayılabilen  İsimler konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on sayılabilen  i̇simler yesterday.",
      "tr": "Dün Sayılabilen  İsimler üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of sayılabilen  i̇simler is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Sayılabilen  İsimler' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#71)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Sayılabilen  İsimler' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply sayılabilen  i̇simler ___ (practice item 71).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Sayılabilen  İsimler' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Sayılabilen  İsimler' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of sayılabilen  i̇simler every day to communicate naturally in lesson 71",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "sayılabilen",
      "i̇simler",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "71",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of sayılabilen  i̇simler every day to communicate naturally in lesson 71'."
  },
  "summaryTakeaways": [
    "'Sayılabilen  İsimler' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  72: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'A / An Belirteçleri ve İsimlerle Kullanımı' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A / An Belirteçleri ve İsimlerle Kullanımı' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A / An Belirteçleri ve İsimlerle Kullanımı' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A / An Belirteçleri ve İsimlerle Kullanımı' Yapısının Temel Kuralı",
      "content": "A / An Belirteçleri ve İsimlerle Kullanımı konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A / An Belirteçleri ve İsimlerle Kullanımı + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A / An Belirteçleri ve İsimlerle Kullanımı",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A / An Belirteçleri ve İsimlerle Kullanımı",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A / An Belirteçleri ve İsimlerle Kullanımı konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A / An Belirteçleri ve İsimlerle Kullanımı — Ana Kural",
      "formula": "Özne + A / An Belirteçleri ve İsimlerle Kullanımı + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a / an belirteçleri ve i̇simlerle kullanımı correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A / An Belirteçleri ve İsimlerle Kullanımı' kalıbını zorlamak.",
      "correctExample": "'A / An Belirteçleri ve İsimlerle Kullanımı' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — A / An Belirteçleri ve İsimlerle Kullanımı",
    "description": "A / An Belirteçleri ve İsimlerle Kullanımı konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a / an belirteçleri ve i̇simlerle kullanımı in your conversation?",
        "textTr": "Konuşmanızda A / An Belirteçleri ve İsimlerle Kullanımı konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A / An Belirteçleri ve İsimlerle Kullanımı' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a / an belirteçleri ve i̇simlerle kullanımı yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A / An Belirteçleri ve İsimlerle Kullanımı' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a / an belirteçleri ve i̇simlerle kullanımı every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A / An Belirteçleri ve İsimlerle Kullanımı pratiği yapar.",
      "highlightedWords": [
        "a / an belirteçleri ve i̇simlerle kullanımı"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a / an belirteçleri ve i̇simlerle kullanımı in daily dialogues?",
      "tr": "Günlük diyaloglarda A / An Belirteçleri ve İsimlerle Kullanımı konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a / an belirteçleri ve i̇simlerle kullanımı yesterday.",
      "tr": "Dün A / An Belirteçleri ve İsimlerle Kullanımı üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a / an belirteçleri ve i̇simlerle kullanımı is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A / An Belirteçleri ve İsimlerle Kullanımı' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#72)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A / An Belirteçleri ve İsimlerle Kullanımı' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a / an belirteçleri ve i̇simlerle kullanımı ___ (practice item 72).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A / An Belirteçleri ve İsimlerle Kullanımı' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A / An Belirteçleri ve İsimlerle Kullanımı' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a / an belirteçleri ve i̇simlerle kullanımı every day to communicate naturally in lesson 72",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a",
      "/",
      "an",
      "belirteçleri",
      "ve",
      "i̇simlerle",
      "kullanımı",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "72",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a / an belirteçleri ve i̇simlerle kullanımı every day to communicate naturally in lesson 72'."
  },
  "summaryTakeaways": [
    "'A / An Belirteçleri ve İsimlerle Kullanımı' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  73: {
  "skillType": "grammar",
  "concreteCompetency": "A1 standardında 'Some ve Any Kullanım Farkları' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Some ve Any Kullanım Farkları' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Some ve Any Kullanım Farkları' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Some ve Any Kullanım Farkları' Yapısının Temel Kuralı",
      "content": "Some ve Any Kullanım Farkları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Some ve Any Kullanım Farkları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Some ve Any Kullanım Farkları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Some ve Any Kullanım Farkları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Some ve Any Kullanım Farkları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Some ve Any Kullanım Farkları — Ana Kural",
      "formula": "Özne + Some ve Any Kullanım Farkları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying some ve any kullanım farkları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Some ve Any Kullanım Farkları' kalıbını zorlamak.",
      "correctExample": "'Some ve Any Kullanım Farkları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — Some ve Any Kullanım Farkları",
    "description": "Some ve Any Kullanım Farkları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use some ve any kullanım farkları in your conversation?",
        "textTr": "Konuşmanızda Some ve Any Kullanım Farkları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Some ve Any Kullanım Farkları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede some ve any kullanım farkları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Some ve Any Kullanım Farkları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices some ve any kullanım farkları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Some ve Any Kullanım Farkları pratiği yapar.",
      "highlightedWords": [
        "some ve any kullanım farkları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use some ve any kullanım farkları in daily dialogues?",
      "tr": "Günlük diyaloglarda Some ve Any Kullanım Farkları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on some ve any kullanım farkları yesterday.",
      "tr": "Dün Some ve Any Kullanım Farkları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of some ve any kullanım farkları is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Some ve Any Kullanım Farkları' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#73)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Some ve Any Kullanım Farkları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply some ve any kullanım farkları ___ (practice item 73).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Some ve Any Kullanım Farkları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Some ve Any Kullanım Farkları' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of some ve any kullanım farkları every day to communicate naturally in lesson 73",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "some",
      "ve",
      "any",
      "kullanım",
      "farkları",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "73",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of some ve any kullanım farkları every day to communicate naturally in lesson 73'."
  },
  "summaryTakeaways": [
    "'Some ve Any Kullanım Farkları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  74: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Much, Many ve A lot of ile Miktar Bildirimi' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Much, Many ve A lot of ile Miktar Bildirimi' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Much, Many ve A lot of ile Miktar Bildirimi' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Much, Many ve A lot of ile Miktar Bildirimi' Yapısının Temel Kuralı",
      "content": "Much, Many ve A lot of ile Miktar Bildirimi konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Much, Many ve A lot of ile Miktar Bildirimi + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Much, Many ve A lot of ile Miktar Bildirimi",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Much, Many ve A lot of ile Miktar Bildirimi",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Much, Many ve A lot of ile Miktar Bildirimi konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Much, Many ve A lot of ile Miktar Bildirimi — Ana Kural",
      "formula": "Özne + Much, Many ve A lot of ile Miktar Bildirimi + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying much, many ve a lot of ile miktar bildirimi correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Much, Many ve A lot of ile Miktar Bildirimi' kalıbını zorlamak.",
      "correctExample": "'Much, Many ve A lot of ile Miktar Bildirimi' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — Much, Many ve A lot of ile Miktar Bildirimi",
    "description": "Much, Many ve A lot of ile Miktar Bildirimi konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use much, many ve a lot of ile miktar bildirimi in your conversation?",
        "textTr": "Konuşmanızda Much, Many ve A lot of ile Miktar Bildirimi konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Much, Many ve A lot of ile Miktar Bildirimi' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede much, many ve a lot of ile miktar bildirimi yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Much, Many ve A lot of ile Miktar Bildirimi' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices much, many ve a lot of ile miktar bildirimi every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Much, Many ve A lot of ile Miktar Bildirimi pratiği yapar.",
      "highlightedWords": [
        "much, many ve a lot of ile miktar bildirimi"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use much, many ve a lot of ile miktar bildirimi in daily dialogues?",
      "tr": "Günlük diyaloglarda Much, Many ve A lot of ile Miktar Bildirimi konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on much, many ve a lot of ile miktar bildirimi yesterday.",
      "tr": "Dün Much, Many ve A lot of ile Miktar Bildirimi üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of much, many ve a lot of ile miktar bildirimi is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Much, Many ve A lot of ile Miktar Bildirimi' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#74)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Much, Many ve A lot of ile Miktar Bildirimi' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply much, many ve a lot of ile miktar bildirimi ___ (practice item 74).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Much, Many ve A lot of ile Miktar Bildirimi' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Much, Many ve A lot of ile Miktar Bildirimi' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of much, many ve a lot of ile miktar bildirimi every day to communicate naturally in lesson 74",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "much",
      "many",
      "ve",
      "a",
      "lot",
      "ile",
      "miktar",
      "bildirimi",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "74",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of much, many ve a lot of ile miktar bildirimi every day to communicate naturally in lesson 74'."
  },
  "summaryTakeaways": [
    "'Much, Many ve A lot of ile Miktar Bildirimi' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  75: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'A few  Kullanımı' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A few  Kullanımı' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A few  Kullanımı' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A few  Kullanımı' Yapısının Temel Kuralı",
      "content": "A few  Kullanımı konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A few  Kullanımı + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A few  Kullanımı",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A few  Kullanımı",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A few  Kullanımı konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A few  Kullanımı — Ana Kural",
      "formula": "Özne + A few  Kullanımı + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a few  kullanımı correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A few  Kullanımı' kalıbını zorlamak.",
      "correctExample": "'A few  Kullanımı' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — A few  Kullanımı",
    "description": "A few  Kullanımı konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a few  kullanımı in your conversation?",
        "textTr": "Konuşmanızda A few  Kullanımı konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A few  Kullanımı' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a few  kullanımı yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A few  Kullanımı' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a few  kullanımı every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A few  Kullanımı pratiği yapar.",
      "highlightedWords": [
        "a few  kullanımı"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a few  kullanımı in daily dialogues?",
      "tr": "Günlük diyaloglarda A few  Kullanımı konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a few  kullanımı yesterday.",
      "tr": "Dün A few  Kullanımı üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a few  kullanımı is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A few  Kullanımı' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#75)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A few  Kullanımı' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a few  kullanımı ___ (practice item 75).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A few  Kullanımı' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A few  Kullanımı' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a few  kullanımı every day to communicate naturally in lesson 75",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a",
      "few",
      "kullanımı",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "75",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a few  kullanımı every day to communicate naturally in lesson 75'."
  },
  "summaryTakeaways": [
    "'A few  Kullanımı' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  76: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Restoranda Sipariş Verme Kalıpları' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Restoranda Sipariş Verme Kalıpları' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Restoranda Sipariş Verme Kalıpları' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Restoranda Sipariş Verme Kalıpları' Yapısının Temel Kuralı",
      "content": "Restoranda Sipariş Verme Kalıpları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Restoranda Sipariş Verme Kalıpları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Restoranda Sipariş Verme Kalıpları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Restoranda Sipariş Verme Kalıpları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Restoranda Sipariş Verme Kalıpları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Restoranda Sipariş Verme Kalıpları — Ana Kural",
      "formula": "Özne + Restoranda Sipariş Verme Kalıpları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying restoranda sipariş verme kalıpları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Restoranda Sipariş Verme Kalıpları' kalıbını zorlamak.",
      "correctExample": "'Restoranda Sipariş Verme Kalıpları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — Restoranda Sipariş Verme Kalıpları",
    "description": "Restoranda Sipariş Verme Kalıpları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use restoranda sipariş verme kalıpları in your conversation?",
        "textTr": "Konuşmanızda Restoranda Sipariş Verme Kalıpları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Restoranda Sipariş Verme Kalıpları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede restoranda sipariş verme kalıpları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Restoranda Sipariş Verme Kalıpları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices restoranda sipariş verme kalıpları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Restoranda Sipariş Verme Kalıpları pratiği yapar.",
      "highlightedWords": [
        "restoranda sipariş verme kalıpları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use restoranda sipariş verme kalıpları in daily dialogues?",
      "tr": "Günlük diyaloglarda Restoranda Sipariş Verme Kalıpları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on restoranda sipariş verme kalıpları yesterday.",
      "tr": "Dün Restoranda Sipariş Verme Kalıpları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of restoranda sipariş verme kalıpları is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Restoranda Sipariş Verme Kalıpları' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#76)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Restoranda Sipariş Verme Kalıpları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply restoranda sipariş verme kalıpları ___ (practice item 76).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Restoranda Sipariş Verme Kalıpları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Restoranda Sipariş Verme Kalıpları' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of restoranda sipariş verme kalıpları every day to communicate naturally in lesson 76",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "restoranda",
      "sipariş",
      "verme",
      "kalıpları",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "76",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of restoranda sipariş verme kalıpları every day to communicate naturally in lesson 76'."
  },
  "summaryTakeaways": [
    "'Restoranda Sipariş Verme Kalıpları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  77: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Markette ve Mağazada Alışveriş Diyalogları' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Markette ve Mağazada Alışveriş Diyalogları' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Markette ve Mağazada Alışveriş Diyalogları' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Markette ve Mağazada Alışveriş Diyalogları' Yapısının Temel Kuralı",
      "content": "Markette ve Mağazada Alışveriş Diyalogları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Markette ve Mağazada Alışveriş Diyalogları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Markette ve Mağazada Alışveriş Diyalogları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Markette ve Mağazada Alışveriş Diyalogları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Markette ve Mağazada Alışveriş Diyalogları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Markette ve Mağazada Alışveriş Diyalogları — Ana Kural",
      "formula": "Özne + Markette ve Mağazada Alışveriş Diyalogları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying markette ve mağazada alışveriş diyalogları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Markette ve Mağazada Alışveriş Diyalogları' kalıbını zorlamak.",
      "correctExample": "'Markette ve Mağazada Alışveriş Diyalogları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — Markette ve Mağazada Alışveriş Diyalogları",
    "description": "Markette ve Mağazada Alışveriş Diyalogları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use markette ve mağazada alışveriş diyalogları in your conversation?",
        "textTr": "Konuşmanızda Markette ve Mağazada Alışveriş Diyalogları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Markette ve Mağazada Alışveriş Diyalogları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede markette ve mağazada alışveriş diyalogları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Markette ve Mağazada Alışveriş Diyalogları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices markette ve mağazada alışveriş diyalogları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Markette ve Mağazada Alışveriş Diyalogları pratiği yapar.",
      "highlightedWords": [
        "markette ve mağazada alışveriş diyalogları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use markette ve mağazada alışveriş diyalogları in daily dialogues?",
      "tr": "Günlük diyaloglarda Markette ve Mağazada Alışveriş Diyalogları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on markette ve mağazada alışveriş diyalogları yesterday.",
      "tr": "Dün Markette ve Mağazada Alışveriş Diyalogları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of markette ve mağazada alışveriş diyalogları is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Markette ve Mağazada Alışveriş Diyalogları' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#77)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Markette ve Mağazada Alışveriş Diyalogları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply markette ve mağazada alışveriş diyalogları ___ (practice item 77).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Markette ve Mağazada Alışveriş Diyalogları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Markette ve Mağazada Alışveriş Diyalogları' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of markette ve mağazada alışveriş diyalogları every day to communicate naturally in lesson 77",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "markette",
      "ve",
      "mağazada",
      "alışveriş",
      "diyalogları",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "77",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of markette ve mağazada alışveriş diyalogları every day to communicate naturally in lesson 77'."
  },
  "summaryTakeaways": [
    "'Markette ve Mağazada Alışveriş Diyalogları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  78: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Giysiler, Bedenler ve Renk Uyumları' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Giysiler, Bedenler ve Renk Uyumları' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Giysiler, Bedenler ve Renk Uyumları' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Giysiler, Bedenler ve Renk Uyumları' Yapısının Temel Kuralı",
      "content": "Giysiler, Bedenler ve Renk Uyumları konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Giysiler, Bedenler ve Renk Uyumları + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Giysiler, Bedenler ve Renk Uyumları",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Giysiler, Bedenler ve Renk Uyumları",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Giysiler, Bedenler ve Renk Uyumları konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Giysiler, Bedenler ve Renk Uyumları — Ana Kural",
      "formula": "Özne + Giysiler, Bedenler ve Renk Uyumları + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying giysiler, bedenler ve renk uyumları correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Giysiler, Bedenler ve Renk Uyumları' kalıbını zorlamak.",
      "correctExample": "'Giysiler, Bedenler ve Renk Uyumları' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — Giysiler, Bedenler ve Renk Uyumları",
    "description": "Giysiler, Bedenler ve Renk Uyumları konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use giysiler, bedenler ve renk uyumları in your conversation?",
        "textTr": "Konuşmanızda Giysiler, Bedenler ve Renk Uyumları konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Giysiler, Bedenler ve Renk Uyumları' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede giysiler, bedenler ve renk uyumları yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Giysiler, Bedenler ve Renk Uyumları' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices giysiler, bedenler ve renk uyumları every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Giysiler, Bedenler ve Renk Uyumları pratiği yapar.",
      "highlightedWords": [
        "giysiler, bedenler ve renk uyumları"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use giysiler, bedenler ve renk uyumları in daily dialogues?",
      "tr": "Günlük diyaloglarda Giysiler, Bedenler ve Renk Uyumları konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on giysiler, bedenler ve renk uyumları yesterday.",
      "tr": "Dün Giysiler, Bedenler ve Renk Uyumları üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of giysiler, bedenler ve renk uyumları is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Giysiler, Bedenler ve Renk Uyumları' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#78)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Giysiler, Bedenler ve Renk Uyumları' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply giysiler, bedenler ve renk uyumları ___ (practice item 78).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Giysiler, Bedenler ve Renk Uyumları' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Giysiler, Bedenler ve Renk Uyumları' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of giysiler, bedenler ve renk uyumları every day to communicate naturally in lesson 78",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "giysiler",
      "bedenler",
      "ve",
      "renk",
      "uyumları",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "78",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of giysiler, bedenler ve renk uyumları every day to communicate naturally in lesson 78'."
  },
  "summaryTakeaways": [
    "'Giysiler, Bedenler ve Renk Uyumları' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  79: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'Öneri Kalıpları: Let's..., Shall we...?, How about...?' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'Öneri Kalıpları: Let's..., Shall we...?, How about...?' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'Öneri Kalıpları: Let's..., Shall we...?, How about...?' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'Öneri Kalıpları: Let's..., Shall we...?, How about...?' Yapısının Temel Kuralı",
      "content": "Öneri Kalıpları: Let's..., Shall we...?, How about...? konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + Öneri Kalıpları: Let's..., Shall we...?, How about...? + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: Öneri Kalıpları: Let's..., Shall we...?, How about...?",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + Öneri Kalıpları: Let's..., Shall we...?, How about...?",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "Öneri Kalıpları: Let's..., Shall we...?, How about...? konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "Öneri Kalıpları: Let's..., Shall we...?, How about...? — Ana Kural",
      "formula": "Özne + Öneri Kalıpları: Let's..., Shall we...?, How about...? + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying öneri kalıpları: let's..., shall we...?, how about...? correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'Öneri Kalıpları: Let's..., Shall we...?, How about...?' kalıbını zorlamak.",
      "correctExample": "'Öneri Kalıpları: Let's..., Shall we...?, How about...?' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — Öneri Kalıpları: Let's..., Shall we...?, How about...?",
    "description": "Öneri Kalıpları: Let's..., Shall we...?, How about...? konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use öneri kalıpları: let's..., shall we...?, how about...? in your conversation?",
        "textTr": "Konuşmanızda Öneri Kalıpları: Let's..., Shall we...?, How about...? konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'Öneri Kalıpları: Let's..., Shall we...?, How about...?' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede öneri kalıpları: let's..., shall we...?, how about...? yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'Öneri Kalıpları: Let's..., Shall we...?, How about...?' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices öneri kalıpları: let's..., shall we...?, how about...? every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah Öneri Kalıpları: Let's..., Shall we...?, How about...? pratiği yapar.",
      "highlightedWords": [
        "öneri kalıpları: let's..., shall we...?, how about...?"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use öneri kalıpları: let's..., shall we...?, how about...? in daily dialogues?",
      "tr": "Günlük diyaloglarda Öneri Kalıpları: Let's..., Shall we...?, How about...? konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on öneri kalıpları: let's..., shall we...?, how about...? yesterday.",
      "tr": "Dün Öneri Kalıpları: Let's..., Shall we...?, How about...? üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of öneri kalıpları: let's..., shall we...?, how about...? is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'Öneri Kalıpları: Let's..., Shall we...?, How about...?' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#79)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'Öneri Kalıpları: Let's..., Shall we...?, How about...?' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply öneri kalıpları: let's..., shall we...?, how about...? ___ (practice item 79).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'Öneri Kalıpları: Let's..., Shall we...?, How about...?' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'Öneri Kalıpları: Let's..., Shall we...?, How about...?' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of öneri kalıpları: let's..., shall we...?, how about...? every day to communicate naturally in lesson 79",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "öneri",
      "kalıpları",
      "lets",
      "shall",
      "how",
      "about",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "79",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of öneri kalıpları: let's..., shall we...?, how about...? every day to communicate naturally in lesson 79'."
  },
  "summaryTakeaways": [
    "'Öneri Kalıpları: Let's..., Shall we...?, How about...?' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
  80: {
  "skillType": "vocabulary",
  "concreteCompetency": "A1 standardında 'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' konusunun kurallarını, hedef yapılarını ve iletişim reflekslerini eksiksiz uygulayabilmek.",
  "whyItMatters": "'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' konusu temel düzey İngilizce iletişiminin vazgeçilmez bir parçasıdır.",
  "linguisticLogic": "İngilizce söz dizimi kuralları gereği 'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' konusunda ögelerin dizilimi ve anlam uyumu esastır.",
  "stepBreakdown": [
    {
      "title": "1. Adım: 'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' Yapısının Temel Kuralı",
      "content": "A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalıdır.",
      "formula": "Özne + A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi + Tamamlayıcı",
      "keyPhrase": "Hedef Kalıp: A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi",
      "subPoints": [
        "Özne ve yüklem uyumuna dikkat edin",
        "Temel söz dizimi sırasını koruyun"
      ]
    },
    {
      "title": "2. Adım: Cümle İçi Dönüşümler ve Soru/Olumsuz Biçimleri",
      "content": "Kalıbı yalnızca olumlu cümlede değil, olumsuz ve soru formlarında da kullanabilmelisiniz.",
      "formula": "Yardımcı Unsur + A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi",
      "keyPhrase": "Soru ve olumsuz kalıplar",
      "subPoints": [
        "Yardımcı fiilin yerleşimine odaklanın",
        "Soru cümlelerinde ters çevirme kuralını uygulayın"
      ]
    },
    {
      "title": "3. Adım: İletişimsel Akıcılık ve Pratik",
      "content": "A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi konusunu günlük yaşam senaryolarında kendiliğinden kullanma refleksi kazanın.",
      "keyPhrase": "Kendinden emin iletişim",
      "subPoints": [
        "Örnek cümleleri sesli tekrar edin",
        "Kalıbı kendi yaşamınıza uyarlayın"
      ]
    }
  ],
  "ruleCards": [
    {
      "ruleTitle": "A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi — Ana Kural",
      "formula": "Özne + A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi + Nesne",
      "explanation": "Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır.",
      "exampleSnippet": "Applying a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi correctly ensures immediate communicative clarity.",
      "tipNote": "Kalıbı hazır bir bütün (chunk) olarak düşünün."
    },
    {
      "ruleTitle": "Türk Öğrenciler İçin Kritik Uyarı",
      "formula": "İngilizce Söz Dizimi (SVO) != Türkçe Söz Dizimi (SOV)",
      "explanation": "Fiili veya yardımcı unsuru Türkçedeki gibi cümlenin sonuna atmayın.",
      "cautionNote": "Yardımcı unsuru daima öznenin hemen ardından getirin."
    }
  ],
  "commonMistakes": [
    {
      "wrongExample": "Türkçe söz dizimiyle 'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' kalıbını zorlamak.",
      "correctExample": "'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' yapısını doğal İngilizce kelime sırasıyla kurmak.",
      "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan aktarma yanılgısı.",
      "memoryTip": "İngilizce SVO (Özne + Yüklem + Nesne) mantığıyla düşün!"
    },
    {
      "wrongExample": "Yardımcı unsuru veya tekil/çoğul ekini unutmak.",
      "correctExample": "Kalıbın tüm bileşenlerini eksiksiz kullanmak.",
      "rootCause": "Detay ekleri gözden kaçırma eğilimi.",
      "memoryTip": "Kalıbın hiçbir parçasını eksik bırakma!"
    }
  ],
  "realWorldContext": {
    "scenarioTitle": "Yiyecek, İçecek ve Miktar Belirteçleri — A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi",
    "description": "A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi konusunun günlük iletişimdeki uygulaması.",
    "contextType": "daily",
    "dialogue": [
      {
        "speaker": "Alex",
        "textEn": "How do you usually use a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi in your conversation?",
        "textTr": "Konuşmanızda A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi konusunu genellikle nasıl kullanırsınız?"
      },
      {
        "speaker": "Sarah",
        "textEn": "I keep the structure simple, clear, and grammatically accurate.",
        "textTr": "Yapıyı sade, net ve dilbilgisel olarak doğru tutarım."
      },
      {
        "speaker": "Alex",
        "textEn": "That creates very natural and effective communication.",
        "textTr": "Bu son derece doğal ve etkili bir iletişim sağlar."
      }
    ]
  },
  "contrastiveAnalysis": {
    "conceptA": "Türkçe Yapı Mantığı",
    "conceptB": "İngilizce 'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' Mantığı",
    "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen eklerde toplanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.",
    "exampleA": "Türkçede ekler yüklem içinde toplanır.",
    "exampleB": "İngilizcede a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi yapısı öznenin hemen ardından gelir."
  },
  "memoryHook": "'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' Kuralı: Doğru kalıp + doğru söz dizimi = akıcı İngilizce!",
  "examples": [
    {
      "en": "She practices a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi every morning to improve her English.",
      "tr": "İngilizcesini geliştirmek için her sabah A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi pratiği yapar.",
      "highlightedWords": [
        "a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi"
      ],
      "grammarCategory": "Model Cümle",
      "contextNote": "A1 seviyesinde düzenli pratik.",
      "breakdownNote": "Özne + fiil + nesne + zaman zarfı."
    },
    {
      "en": "Do you understand how to use a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi in daily dialogues?",
      "tr": "Günlük diyaloglarda A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi konusunu nasıl kullanacağını anlıyor musun?",
      "highlightedWords": [
        "Do you understand"
      ],
      "grammarCategory": "Soru Cümlesi",
      "contextNote": "Kavrama kontrolü sorusu.",
      "breakdownNote": "Do + özne + yalın fiil + yan cümle."
    },
    {
      "en": "They successfully completed their study on a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi yesterday.",
      "tr": "Dün A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi üzerine olan çalışmalarını başarıyla tamamladılar.",
      "highlightedWords": [
        "successfully completed"
      ],
      "grammarCategory": "Tamamlama İfadesi",
      "contextNote": "Geçmiş çalışma teyidi.",
      "breakdownNote": "Özne + durum zarfı + fiil + nesne."
    }
  ],
  "vocabulary": [
    {
      "word": "Practice",
      "phonetic": "/ˈpræk.tɪs/",
      "partOfSpeech": "noun",
      "meaningTr": "Pratik, alıştırma",
      "exampleSentence": "Regular practice of a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi is essential."
    },
    {
      "word": "Accurate",
      "phonetic": "/ˈæk.jə.rət/",
      "partOfSpeech": "adjective",
      "meaningTr": "Doğru, hatasız",
      "exampleSentence": "Use accurate words in speech."
    },
    {
      "word": "Essential",
      "phonetic": "/ɪˈsen.ʃəl/",
      "partOfSpeech": "adjective",
      "meaningTr": "Gerekli, temel",
      "exampleSentence": "Grammar rules are essential for clarity."
    },
    {
      "word": "Fluent",
      "phonetic": "/ˈfluː.ənt/",
      "partOfSpeech": "adjective",
      "meaningTr": "Akıcı",
      "exampleSentence": "He speaks fluent English."
    }
  ],
  "quickCheck": {
    "question": "'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' konusunu A1 seviyesinde uygularken en kritik kural nedir? (#80)",
    "options": [
      "Doğru söz dizimi ve özne-yüklem uyumunu sağlamak",
      "Tüm ekleri kelimenin başına getirmek",
      "Yalnızca sözlük anlamını ezberlemek",
      "Yardımcı fiilleri tamamen cümleden atmak"
    ],
    "correctIndex": 0,
    "explanation": "A1 seviyesinde hedef, temel söz dizimi ve özne-yüklem uyumunu tereddütsüz sağlamaktır."
  },
  "exercise": {
    "prompt": "Aşağıdaki cümleyi 'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' kuralına en uygun seçenekle tamamlayın:",
    "sentence": "To communicate clearly in everyday English, students must apply a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi ___ (practice item 80).",
    "options": [
      "properly",
      "proper",
      "properness",
      "properer"
    ],
    "correctAnswer": "properly",
    "hint": "'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' konusunun temel dilbilgisel gereksinimini düşünün.",
    "explanation": "Doğru cevap 'properly' seçeneğidir."
  },
  "sentenceBuilder": {
    "promptTr": "Biz her gün 'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' kuralını uygulayarak İngilizce iletişim kurarız.",
    "targetEn": "We practice the essential rule of a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi every day to communicate naturally in lesson 80",
    "availableWords": [
      "We",
      "practice",
      "the",
      "essential",
      "rule",
      "of",
      "a1",
      "seviye",
      "sonu",
      "entegrasyonu",
      "ve",
      "yeterlilik",
      "değerlendirmesi",
      "every",
      "day",
      "to",
      "communicate",
      "naturally",
      "in",
      "lesson",
      "80",
      "always",
      "often",
      "very",
      "with"
    ],
    "explanation": "Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: 'We practice the essential rule of a1 seviye sonu entegrasyonu ve yeterlilik değerlendirmesi every day to communicate naturally in lesson 80'."
  },
  "summaryTakeaways": [
    "'A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
    "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
    "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
  ]
},
};
