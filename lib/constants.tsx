
import { ModuleId, ChapterId, Chapter, Question, ModuleData } from './types';

export const CHAPTER1_QUESTIONS: Record<string, Question[]> = {
  [ModuleId.MatterIntro]: [
    {
      id: 'c1_m1_1',
      question: 'מהי הטענה המרכזית של מודל החלקיקים?',
      options: ['חומרים הם גושים רציפים ללא רווחים', 'כל החומרים בנויים מחלקיקים זעירים וביניהם ריק', 'רק גזים בנויים מחלקיקים', 'חלקיקים נעים רק כאשר מחממים אותם'],
      correctAnswer: 1,
      explanation: 'על פי המודל, כל חומר בנוי מחלקיקים וביניהם קיים ריק (רווח).',
      category: ModuleId.MatterIntro
    },
    {
      id: 'c1_m1_2',
      question: 'האם אוויר נחשב לחומר?',
      options: ['לא, כי אי אפשר לראות אותו', 'כן, כי יש לו מסה והוא תופס מקום', 'רק אם הוא נמצא בתוך בלון', 'לא, אוויר הוא אנרגיה'],
      correctAnswer: 1,
      explanation: 'אוויר הוא תערובת של גזים, יש לו מסה והוא תופס נפח, לכן הוא חומר.',
      category: ModuleId.MatterIntro
    },
    {
      id: 'q1',
      question: 'חלקיקי חומר שהיו מסודרים, קרובים זה לזה ונעו בתנודות במקומם, החלו להתרחק זה מזה, והחליפו מקומות בתנועת החלקה. איזה תהליך עבר החומר?',
      options: ['עיבוי (התעבות) כתוצאה מהתחממות החומר', 'עיבוי (התעבות) כתוצאה מהתקררות החומר', 'התכה (היתוך) כתוצאה מהתחממות החומר', 'התאדות (אידוי) כתוצאה מהתחממות החומר'],
      correctAnswer: 2,
      explanation: 'חומר שעובר ממצב מסודר (מוצק) לתנועת החלקה (נוזל) עובר תהליך של התכה (היתוך).',
      category: ModuleId.MatterIntro
    }
  ],
  [ModuleId.ParticleModel]: [
    {
      id: 'c1_pm_1',
      question: 'מה קיים ברווחים שבין חלקיקי החומר?',
      options: ['אוויר', 'מים', 'ריק (כלום)', 'גז שקוף'],
      correctAnswer: 2,
      explanation: 'בין החלקיקים אין כלום - זהו ריק.',
      category: ModuleId.ParticleModel
    },
    {
      id: 'c1_pm_2',
      question: 'באילו מצבי צבירה פועלים כוחות משיכה בין החלקיקים?',
      options: ['רק במוצק', 'רק בנוזל', 'בכל מצבי הצבירה (מוצק, נוזל וגז)', 'אף פעם לא'],
      correctAnswer: 2,
      explanation: 'בכל מצבי הצבירה קיימים כוחות משיכה, אך עוצמתם משתנה.',
      category: ModuleId.ParticleModel
    },
    {
      id: 'q5_a',
      question: 'תלמידים הניחו על שולחן למשך שבוע בקבוק סגור ומלא באוויר. מה נכון לומר על חלקיקי האוויר?',
      options: ['חלקיקי האוויר מפוזרים בכל נפח הבקבוק', 'חלקיקי האוויר מצויים רק בחלק העליון', 'חלקיקי האוויר מצויים רק על הקרקעית', 'חלקיקי האוויר מצטופפים סמוך לפייה'],
      correctAnswer: 0,
      explanation: 'במצב גז, החלקיקים נעים בחופשיות וממלאים את כל נפח הכלי בו הם נמצאים.',
      category: ModuleId.ParticleModel
    },
    {
      id: 'q2',
      question: 'כאשר חומר הנמצא בכלי סגור עובר ממצב צבירה אחד לאחר עקב קירור, אין שינוי ב:',
      options: ['כוחות המשיכה בין החלקיקים', 'סוג התנועה של החלקיקים', 'מהירות ממוצעת של החלקיקים', 'מסה של החלקיקים'],
      correctAnswer: 3,
      explanation: 'במהלך שינוי מצב צבירה, כמות החומר (ומסת החלקיקים הבודדים) לא משתנה.',
      category: ModuleId.ParticleModel
    },
    {
      id: 'q7_2',
      question: 'בלון אטום מנופח באדי מים הוכנס למקפיא. כעבור זמן נראו טיפות. איזה היגד מסביר את הקטנת נפח הבלון?',
      options: [
        'חלקיקי אדי מים הפכו לטיפות מים',
        'חלקיקי האדים התכווצו ואיבדו מנפחם',
        'מספר חלקיקי המים קטן',
        'המרחקים בין חלקיקי המים קטנו (מעבר מגז לנוזל)'
      ],
      correctAnswer: 3,
      explanation: 'במעבר פאזה מגז לנוזל, החלקיקים מתקרבים מאוד זה לזה, מה שמקטין את הנפח הכולל.',
      category: ModuleId.ParticleModel
    }
  ],
  [ModuleId.Compression]: [
    {
      id: 'c1_comp_1',
      question: 'מדוע ניתן לדחוס גז בקלות אך נוזל כמעט ולא?',
      options: ['כי חלקיקי הגז קטנים יותר', 'כי בנפח של גז יש הרבה ריק (רווחים גדולים)', 'כי חלקיקי הנוזל דוחים זה את זה', 'כי חלקיקי הגז קלים יותר'],
      correctAnswer: 1,
      explanation: 'בגז הרווחים גדולים מאוד, ולכן ניתן לקרב את החלקיקי זה לזה.',
      category: ModuleId.Compression
    },
    {
      id: 'q13_d',
      question: 'מכיוון שיש מרווחים גדולים בין חלקיקי הגז, הרי שניתן:',
      options: ['לחמם אותו בקלות', 'לדחוס אותו בקלות', 'לשנות את צבעו', 'להפוך אותו למוצק מיד'],
      correctAnswer: 1,
      explanation: 'האפשרות להקטין את המרווחים הגדולים היא המאפשרת דחיסה.',
      category: ModuleId.Compression
    },
    {
      id: 'q11',
      question: 'כאשר שואבים אוויר מקופסת פח, דפנות הקופסה מתעוותים והקופסה נמעכת. מה ההסבר?',
      options: ['דפנות הקופסה נעשות גמישות מהשאיבה', 'לחץ האוויר מחוץ לקופסה גדול מלחץ האוויר שבתוכה', 'הריק שבקופסה מושך את הדפנות פנימה', 'טמפרטורת האוויר בקופסה יורדת'],
      correctAnswer: 1,
      explanation: 'מעיכת הקופסה נגרמת מההפרש בין הלחץ החיצוני (החזק) לפני הלחץ הפנימי (שנחלש מחוסר חלקיקים).',
      category: ModuleId.Compression
    }
  ],
  [ModuleId.Diffusion]: [
    {
      id: 'c1_diff_1',
      question: 'באיזה מצב צבירה תתרחש פעפוע (דיפוזיה) בצורה המהירה ביותר?',
      options: ['מוצק', 'נוזל', 'גז', 'בכולם באותה מהירות'],
      correctAnswer: 2,
      explanation: 'בגז החלקיקים נעים מהר יותר והמרחקים גדולים, לכן הערבוב מהיר יותר.',
      category: ModuleId.Diffusion
    },
    {
      id: 'q6_a',
      question: 'דורון בדק בושם ב-25 מעלות וב-4 מעלות. עבור איזה בושם הזמן עד הרחתו היה קצר יותר?',
      options: ['הבושם שנשמר ב-25 מעלות', 'הבושם שנשמר ב-4 מעלות'],
      correctAnswer: 0,
      explanation: 'בטמפרטורה גבוהה החלקיקים נעים מהר יותר ולכן הפעפוע (התפשטות הריח) מהיר יותר.',
      category: ModuleId.Diffusion
    },
    {
      id: 'q4_a',
      question: 'באיזה כלי פעפוע של גז צבעוני יהיה מהיר יותר?',
      options: ['כלי א: שיש בו ריק', 'כלי ב: שיש בו אוויר'],
      correctAnswer: 0,
      explanation: 'בריק אין חלקיקי אוויר "שיפריעו" ויתנגשו בחלקיקי הגז הצבעוני, לכן הוא יתקדם מהר יותר.',
      category: ModuleId.Diffusion
    }
  ],
  [ModuleId.SurfaceTension]: [
    {
      id: 'c1_st_1',
      question: 'מה גורם להיווצרות מתח פנים בנוזל?',
      options: ['לחץ האוויר מלמעלה', 'כוחות המשיכה שבין חלקיקי הנוזל', 'הטמפרטורה של הנוזל', 'כוח המשיכה של כדור הארץ'],
      correctAnswer: 1,
      explanation: 'מתח פנים נוצר בגלל כוחות המשיכה שבין חלקיקי הנוזל המושכים זה את זה.',
      category: ModuleId.SurfaceTension
    }
  ],
  [ModuleId.VolumeBasics]: [
    {
      id: 'c1_m3_1',
      question: 'כיצד מומלץ למדוד נפח של נוזל?',
      options: ['בעזרת סרגל', 'בעזרת משורה', 'בעזרת מאזניים', 'בעזרת טרמומטר'],
      correctAnswer: 1,
      explanation: 'כדי לדייק, יש להסתכל תמיד בתחתית הקעור בגובה העיניים.',
      category: ModuleId.VolumeBasics
    },
    {
      id: 'q18',
      question: 'שתי קבוצות בנו משורה מכוס. קבוצה א סימנה לפי סרגל, קבוצה ב הוסיפה כל פעם 10 מ"ל וסימנה. מי בנה כלי למדידת נפח?',
      options: ['קבוצה א', 'קבוצה ב', 'שתיהן', 'אף אחת'],
      correctAnswer: 1,
      explanation: 'נפח תלוי בכמות החומר הנשפכת, לא בגובה הגיאומטרי (אלא אם הכלי הוא גליל מושלם). לכן מדידה לפי מנות נפח ידועות היא הנכונה.',
      category: ModuleId.VolumeBasics
    }
  ],
  [ModuleId.PhaseTransitions]: [
    {
      id: 'pt1',
      question: 'מה קורה לטמפרטורת המים בזמן שהם רותחים (הופכים לגז)?',
      options: ['היא ממשיכה לעלות', 'היא נשארת קבועה ב-100 מעלות', 'היא יורדת', 'היא משתנה לסירוגין'],
      correctAnswer: 1,
      explanation: 'במהלך מעבר פאזה, הטמפרטורה נשארת קבועה עד שכל החומר משנה את מצב צבירתו.',
      category: ModuleId.PhaseTransitions
    },
    {
      id: 'pt2',
      question: 'איך נקרא המעבר הישיר ממוצק לגז (כמו בקרח יבש)?',
      options: ['התאדות', 'התעבות', 'המראה (סובלימציה)', 'היתוך'],
      correctAnswer: 2,
      explanation: 'המראה היא תהליך בו חומר עובר ממוצק לגז מבלי להפוך לנוזל בדרך.',
      category: ModuleId.PhaseTransitions
    },
    {
      id: 'pt3',
      question: 'מהו תהליך ה"ריבוץ" (דפוזיציה)?',
      options: ['ממוצק לנוזל', 'מנוזל לגז', 'מגז למוצק', 'מגז לנוזל'],
      correctAnswer: 2,
      explanation: 'ריבוץ הוא התהליך ההפוך להמראה - מעבר ישיר מגז למוצק.',
      category: ModuleId.PhaseTransitions
    },
    {
      id: 'q15',
      question: 'התיכו קוביית בדיל לבדיל נוזלי בכלי סגור. מה קרה למסת הבדיל?',
      options: ['המסה גדלה', 'המסה קטנה', 'המסה לא השתנתה'],
      correctAnswer: 2,
      explanation: 'שינוי מצב צבירה לא משנה את כמות החומר, ולכן המסה נשארת קבועה.',
      category: ModuleId.PhaseTransitions
    }
  ],
  [ModuleId.Summary]: [
    {
      id: 'sum_1',
      question: 'בניסוי עם שלוש צלחות (מים, כוהל, אצטון), אחרי 5 שעות האצטון נעלם לגמרי. מה ההסבר המדעי?',
      options: [
        'האצטון התקלקל',
        'כוחות המשיכה בין חלקיקי האצטון הם החלשים ביותר',
        'חלקיקי האצטון קטנים יותר',
        'האצטון הפך למוצק'
      ],
      correctAnswer: 1,
      explanation: 'כוחות משיכה חלשים מאפשרים לחלקיקים להשתחרר מהנוזל ולהתאדות מהר יותר.',
      category: ModuleId.Summary
    },
    {
      id: 'sum_2',
      question: 'מה יקרה לגולה בשלושה נוזלים (שמן, סבון, דבש)?',
      options: [
        'היא תצוף בכולם',
        'היא תשקע הכי לאט בדבש כי הוא הכי צמיג (כוחות משיכה חזקים)',
        'היא תשקע הכי מהר בדבש',
        'הצמיגות לא משפיעה על השקיעה'
      ],
      correctAnswer: 1,
      explanation: 'צמיגות גבוהה (התנגדות לזרימה) נגרמת מכוחות משיכה חזקים בין החלקיקים, מה שמעכב את תנועת הגולה.',
      category: ModuleId.Summary
    }
  ]
};

export const DENSITY_DATA = [
  { material: "זהב", density: 19.3 },
  { material: "ברזל", density: 7.8 },
  { material: "זכוכית", density: 2.5 },
  { material: "מים", density: 1.0 },
  { material: "קרח", density: 0.9 },
  { material: "קלקר", density: 0.02 }
];

export const MASS_WEIGHT_COMPARISON = [
  { criteria: "תכונה", mass: "כמות החומר (קבוע)", weight: "כוח הכבידה (משתנה)" },
  { criteria: "מכשיר", mass: "מאזני כפות", weight: "מד כוח / קפיץ" },
  { criteria: "יחידות", mass: "ק\"ג, גרם", weight: "ניוטון (N)" }
];

export const INTRO_QUESTIONS: Question[] = [
  {
    id: 'i1',
    question: 'מה מהבאים הוא "גוף"?',
    options: ['ברזל', 'כדורגל', 'מים', 'פלסטיק'],
    correctAnswer: 1,
    explanation: 'כדורגל הוא גוף כי יש לו צורה מוגדרת והוא עשוי מחומר. ברזל, מים ופלסטיק הם שמות של חומרים.',
    category: ModuleId.Intro
  },
  {
    id: 'i2',
    question: 'מה ההבדל העיקרי בין גוף לחומר?',
    options: ['גוף הוא גדול וחומר הוא קטן', 'גוף הוא בעל צורה וגבולות, וחומר הוא מרכיב הגוף', 'חומר תמיד מוצק וגוף תמיד נוזל', 'אין הבדל'],
    correctAnswer: 1,
    explanation: 'גוף הוא חפץ בעל צורה, וחומר הוא מה שהגוף עשוי ממנו.',
    category: ModuleId.Intro
  }
];

export const VOLUME_QUESTIONS: Question[] = [
  {
    id: 'v1',
    question: 'מהו נפח של גוף?',
    options: ['כמות החומר ממנו הוא עשוי', 'המקום שהגוף תופס במרחב', 'כוח המשיכה הפועל על הגוף', 'הצורה החיצונית של הגוף'],
    correctAnswer: 1,
    explanation: 'נפח מוגדר בדיוק כמקום שגוף תופס במרחב.',
    category: ModuleId.Volume
  },
  {
    id: 'v2',
    question: 'כמה מ"ל יש ב-2.5 ליטר?',
    options: ['25 מ"ל', '250 מ"ל', '2,500 מ"ל', '0.0025 מ"ל'],
    correctAnswer: 2,
    explanation: 'כדי לעבור מליטר למ"ל כופלים ב-1,000. לכן 2.5 * 1000 = 2,500.',
    category: ModuleId.Volume
  },
  {
    id: 'v3',
    question: 'מהי הדרך הנכונה למדוד נפח של מפתח מתכת?',
    options: ['אורך x רוחב x גובה', 'שימוש במאזני כפות', 'שיטת דחיקת המים במשורה', 'מד כוח'],
    correctAnswer: 2,
    explanation: 'מפתח הוא גוף בעל צורה לא הנדסית, לכן משתמשים בדחיקת מים.',
    category: ModuleId.Volume
  },
  {
    id: 'v4',
    question: 'סנטימטר מעוקב (סמ"ק) אחד שווה בדיוק ל:',
    options: ['1 ליטר', '1 מ"ל', '10 מ"ל', '1 ק"ג'],
    correctAnswer: 1,
    explanation: 'זוהי יחידת מידה זהה: 1 סמ"ק = 1 מ"ל.',
    category: ModuleId.Volume
  }
];

export const MASS_WEIGHT_QUESTIONS: Question[] = [
  {
    id: 'mw1',
    question: 'איפה המסה של אסטרונאוט תהיה גדולה יותר?',
    options: ['על כדור הארץ', 'על הירח', 'בחלל הריק', 'המסה תהיה זהה בכל מקום'],
    correctAnswer: 3,
    explanation: 'מסה היא כמות החומר והיא לא משתנה (אלא אם הורדנו או הוספנו חומר לגוף).',
    category: ModuleId.MassWeight
  },
  {
    id: 'mw2',
    question: 'מהו המכשיר למדידת משקל?',
    options: ['מאזני כפות', 'משורה', 'מאזני קפיץ (מד כוח)', 'מולטימטר'],
    correctAnswer: 2,
    explanation: 'משקל הוא כוח, ולכן מודדים אותו בעזרת מאזני קפיץ (דינמומטר).',
    category: ModuleId.MassWeight
  },
  {
    id: 'mw3',
    question: 'מהי יחידת המידה של משקל בפיזיקה?',
    options: ['קילוגרם', 'גרם', 'ניוטון', 'ליטר'],
    correctAnswer: 2,
    explanation: 'משקל הוא כוח הכבידה, ובפיזיקה כוח נמדד בניוטון (N).',
    category: ModuleId.MassWeight
  }
];

export const DENSITY_QUESTIONS: Question[] = [
  {
    id: 'd1',
    question: 'אם צפיפות המים היא 1 גרם/סמ"ק, מה יקרה לשמן שצפיפותו 0.9 גרם/סמ"ק?',
    options: ['הוא ישקע לקרקעית', 'הוא יצוף על פני המים', 'הוא יתמוסס מיד', 'הוא יהפוך לגז'],
    correctAnswer: 1,
    explanation: 'גוף בעל צפיפות נמוכה יותר מהנוזל יצוף עליו.',
    category: ModuleId.Density
  },
  {
    id: 'd2',
    question: 'איך מחשבים צפיפות?',
    options: ['מסה כפול נפח', 'נפח חלקי מסה', 'מסה חלקי נפח', 'אורך כפול רוחב'],
    correctAnswer: 2,
    explanation: 'הנוסחה לצפיפות היא מסה חלקי נפח (d = m/V).',
    category: ModuleId.Density
  },
  {
    id: 'd3',
    question: 'לשני גופים העשויים מאותו חומר בדיוק יש:',
    options: ['אותה מסה תמיד', 'אותו נפח תמיד', 'אותה צפיפות תמיד', 'אותו משקל תמיד'],
    correctAnswer: 2,
    explanation: 'צפיפות היא תכונה מזהה של חומר, לכן לכל כמות של אותו חומר תהיה אותה צפיפות.',
    category: ModuleId.Density
  }
];

export const CHAPTERS: Chapter[] = [
  {
    id: ChapterId.Chapter1,
    title: 'פרק 1: עולם החומר',
    subtitle: 'מודל החלקיקים ותופעות בחומר',
    description: 'נלמד על מודל החלקיקים המסביר את מבנה החומר, מצבי צבירה, פעפוע ודחיסה.',
    icon: 'test-tube',
    modules: [
      { id: ModuleId.MatterIntro, title: 'מהו חומר?', description: 'הכרת אבני הבניין היסודיות.', icon: 'atom-symbol' },
      { id: ModuleId.ParticleModel, title: 'מודל החלקיקים', description: 'איך בנוי החומר ומה קורה בתוכו.', icon: 'milky-way' },
      { id: ModuleId.Compression, title: 'דחיסה בחומר', description: 'למה גז נדחס ונוזל לא?', icon: 'syringe' },
      { id: ModuleId.Diffusion, title: 'פעפוע (דיפוזיה)', description: 'איך חומרים מתערבבים מעצמם?', icon: 'tornado' },
      { id: ModuleId.SurfaceTension, title: 'מתח פנים', description: 'מדוע חרקים הולכים על מים?', icon: 'droplet' },
      { id: ModuleId.PhaseTransitions, title: 'מצבי צבירה ומעברים', description: 'איך חומר משנה את פניו?', icon: 'thermometer' },
      { id: ModuleId.VolumeBasics, title: 'מדידת נפח', description: 'איך מודדים מקום?', icon: 'straight-ruler' },
      { id: ModuleId.Summary, title: 'מבחן פרק 1', description: 'בדיקת ידע על עולם החומר.', icon: 'graduation-cap' }
    ]
  },
  {
    id: ChapterId.Chapter2,
    title: 'פרק 2: גוף וחומר',
    subtitle: 'מדידות ותכונות פיזיקליות',
    description: 'מסה, משקל, צפיפות וציפה. ההבדלים הקריטיים והנוסחאות.',
    icon: 'building-construction',
    modules: [
      { id: ModuleId.Intro, title: 'מהו גוף ומהו חומר?', description: 'הבדלה בין העצם לחומר ממנו הוא עשוי.', icon: 'building-construction' },
      { id: ModuleId.Volume, title: 'נפח ומדידתו', description: 'שיטות מדידה מתקדמות ויחידות.', icon: 'straight-ruler' },
      { id: ModuleId.MassWeight, title: 'מסה מול משקל', description: 'כמות חומר מול כוח כבידה.', icon: 'balance-scale' },
      { id: ModuleId.Density, title: 'צפיפות וציפה', description: 'למה דברים צפים? הנוסחה d=m/V.', icon: 'ship' },
      { id: ModuleId.Summary, title: 'מבחן פרק 2', description: 'בדיקת מוכנות למבחן הגדול.', icon: 'graduation-cap' }
    ]
  }
];

export const FINAL_EXAM_QUESTIONS: Question[] = [
  ...INTRO_QUESTIONS,
  ...VOLUME_QUESTIONS,
  ...MASS_WEIGHT_QUESTIONS,
  ...DENSITY_QUESTIONS,
];
