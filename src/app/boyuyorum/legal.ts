// Boyuyorum — Legal text data (TR + EN).
// Content mirrors the in-app Localizable.xcstrings / strings.xml for legal-submission parity.

export type LegalLocale = "tr" | "en";

export type LegalSection = "about" | "privacy" | "terms" | "kvkk";

export const legalTitles: Record<LegalSection, Record<LegalLocale, string>> = {
  about: { tr: "Hakkımızda", en: "About" },
  privacy: { tr: "Gizlilik Politikası", en: "Privacy Policy" },
  terms: { tr: "Kullanım Koşulları", en: "Terms of Use" },
  kvkk: { tr: "KVKK Aydınlatma Metni", en: "Data Protection Notice" },
};

export const legalBodies: Record<LegalSection, Record<LegalLocale, string>> = {
  about: {
    tr: `Boyuyorum, çocuklar için tasarlanmış bir boyama uygulamasıdır.

Uygulamamız:
• 10 farklı kategoride 180'den fazla boyanabilir resim
• Çizginin dışına taşmayan kolay boyama deneyimi
• Parmakla basit, eğlenceli etkileşim
• Yatay ekran desteği (iPhone + iPad)
• Çocuk dostu arayüz ve güvenli içerik
• Tamamen reklam destekli, ücretsiz

Yaş aralığı: 3+

Hedefimiz, çocukların yaratıcılığını özgürce ifade edebilmesi için güvenli, samimi ve eğlenceli bir dijital deneyim sunmaktır.

Geliştiren: TITECH YAZILIM LİMİTED ŞİRKETİ
İletişim: destek@titechyazilim.com

Sürüm 1.0
© 2026 TITECH YAZILIM LİMİTED ŞİRKETİ`,
    en: `Boyuyorum is a coloring application designed for children.

Our app offers:
• More than 180 colorable pictures across 10 different categories
• Easy coloring experience that stays within the lines
• Simple, fun interaction with your finger
• Landscape screen support (iPhone + iPad)
• Child-friendly interface and safe content
• Completely free, supported by ads

Age range: 3+

Our goal is to provide a safe, warm, and fun digital experience where children can freely express their creativity.

Developer: TITECH YAZILIM LİMİTED ŞİRKETİ
Contact: destek@titechyazilim.com

Version 1.0
© 2026 TITECH YAZILIM LİMİTED ŞİRKETİ`,
  },

  privacy: {
    tr: `Son güncelleme: 20.04.2026

Boyuyorum olarak, çocuk kullanıcıların gizliliğine büyük önem veriyoruz. Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.

1. TOPLADIĞIMIZ VERİLER

Uygulamamız şu verileri TOPLAMAZ:
• Kişisel bilgiler (isim, email, telefon)
• Konum verisi
• Kamera veya mikrofon
• Rehber / kişiler
• Hesap oluşturma / giriş gerektirmez

Uygulamamız şu verileri cihazınızda LOKAL OLARAK saklar:
• Boyadığınız eserler (galeri)
• Tercih ayarları (ses açık/kapalı gibi)
• Reklam gösterim sayısı

Bu veriler sunucularımıza gönderilmez. Tamamen cihazınızda kalır.

2. REKLAMLAR

Uygulama, ücretsiz olarak sunulduğundan reklamları Google AdMob aracılığıyla göstermektedir. AdMob, çocuklara yönelik uygulama olarak ayarlanmıştır ve kişiselleştirilmiş reklam göstermez (child-directed treatment).

AdMob'un gizlilik politikası: https://policies.google.com/privacy

3. VERİ SAHİBİ HAKLARI

Uygulamada saklanan tüm veriler sizin kontrolünüzdedir:
• Galeri → tüm eserleri silme seçeneği
• Ayarlar → verileri temizleme
• Uygulamayı silerseniz tüm veriler silinir

4. ÇOCUKLAR (13 YAŞ ALTI)

Uygulamamız COPPA (Children's Online Privacy Protection Act) ve KVKK uyumludur. 13 yaş altı kullanıcılardan kişisel veri toplamayız.

5. DEĞİŞİKLİKLER

Bu politikayı güncelleyebiliriz. Güncel sürüm her zaman uygulama içinden ve bu sayfadan ulaşılabilir.

6. İLETİŞİM

Soru ve talepleriniz için: destek@titechyazilim.com
TITECH YAZILIM LİMİTED ŞİRKETİ
Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul`,
    en: `Last updated: 20.04.2026

At Boyuyorum, we take the privacy of child users very seriously. This policy explains how your data is collected, used, and protected.

1. DATA WE COLLECT

Our app does NOT collect:
• Personal information (name, email, phone)
• Location data
• Camera or microphone
• Contacts
• No account creation / sign-in required

Our app stores the following data LOCALLY on your device only:
• Your colored artworks (gallery)
• Preferences (e.g., sound on/off)
• Ad display counter

This data is never sent to our servers. It stays entirely on your device.

2. ADVERTISING

As the app is provided for free, ads are shown via Google AdMob. AdMob is configured as a child-directed app and does not serve personalized ads (child-directed treatment).

AdMob privacy policy: https://policies.google.com/privacy

3. YOUR RIGHTS

All data stored in the app is under your control:
• Gallery → delete all artworks option
• Settings → clear data
• Deleting the app removes all data

4. CHILDREN (UNDER 13)

Our app complies with COPPA (Children's Online Privacy Protection Act) and equivalent regulations. We do not collect personal data from users under 13.

5. CHANGES

We may update this policy. The current version is always available within the app and on this page.

6. CONTACT

For questions and requests: destek@titechyazilim.com
TITECH YAZILIM LİMİTED ŞİRKETİ
Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul, Türkiye`,
  },

  terms: {
    tr: `Son güncelleme: 20.04.2026

Bu Kullanım Koşulları ("Koşullar"), Boyuyorum uygulamasını ("Uygulama") kullanımınızı düzenler.

1. KABUL

Uygulamayı indirerek ve kullanarak bu Koşulları kabul etmiş sayılırsınız. Çocukların kullanımı için velilerin bu koşulları okuması önerilir.

2. KULLANIM LİSANSI

Uygulamayı:
• Kişisel, ticari olmayan amaçlarla kullanabilirsiniz
• Kendi cihazınızda sınırsız sayıda resim boyayabilirsiniz
• Eserlerinizi fotoğraflarınıza kaydedebilirsiniz

Uygulamayı:
• Kopyalamayacak, dağıtmayacak, değiştirmeyeceksiniz
• Tersine mühendislik yapmayacaksınız
• Kötüye kullanım için kullanmayacaksınız

3. İÇERİK

Uygulamadaki tüm grafikler, tasarımlar, karakterler ve kodlar Boyuyorum'a aittir. Tüm hakları saklıdır.

4. REKLAMLAR

Uygulama ücretsizdir ve gelirimizi reklamlardan elde ederiz. Reklamlar üçüncü taraflardan (Google AdMob) gelir ve bunların içeriğinden sorumlu değiliz, ancak çocuklara uygun reklam gösterimi için gerekli teknik önlemler alınmıştır.

5. GARANTİ REDDİ

Uygulama "olduğu gibi" sunulur. Kesintisiz, hatasız veya tüm cihazlarda mükemmel çalışacağını garanti etmeyiz.

6. SORUMLULUK SINIRI

Uygulamanın kullanımından doğabilecek dolaylı zararlardan sorumlu değiliz.

7. DEĞİŞİKLİKLER

Bu koşulları dilediğimiz zaman güncelleyebiliriz. Önemli değişikliklerde uygulama içinde bilgilendirme yapılır.

8. UYGULANACAK HUKUK

Bu Koşullar Türkiye Cumhuriyeti kanunlarına tabidir.

9. İLETİŞİM

destek@titechyazilim.com
TITECH YAZILIM LİMİTED ŞİRKETİ`,
    en: `Last updated: 20.04.2026

These Terms of Use ("Terms") govern your use of the Boyuyorum application ("App").

1. ACCEPTANCE

By downloading and using the App, you accept these Terms. Parents are encouraged to read these terms for children's use.

2. LICENSE

You may:
• Use the App for personal, non-commercial purposes
• Color unlimited pictures on your own device
• Save your artworks to your Photos

You may not:
• Copy, distribute, or modify the App
• Reverse-engineer the App
• Use the App for abusive or unlawful purposes

3. CONTENT

All graphics, designs, characters, and code in the App belong to Boyuyorum. All rights reserved.

4. ADVERTISING

The App is free and funded by advertising. Ads are served by third parties (Google AdMob); we are not responsible for their content, but the necessary technical measures are in place to show child-appropriate ads.

5. DISCLAIMER

The App is provided "as is". We do not warrant that it will be uninterrupted, error-free, or work perfectly on every device.

6. LIMITATION OF LIABILITY

We are not liable for indirect damages arising from use of the App.

7. CHANGES

We may update these Terms at any time. You will be notified in-app for important changes.

8. GOVERNING LAW

These Terms are governed by the laws of the Republic of Türkiye.

9. CONTACT

destek@titechyazilim.com
TITECH YAZILIM LİMİTED ŞİRKETİ`,
  },

  kvkk: {
    tr: `KVKK AYDINLATMA METNİ

6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, veri sorumlusu sıfatıyla aşağıdaki bilgiler tarafınızla paylaşılmaktadır.

1. VERİ SORUMLUSU

Veri sorumlusu: TITECH YAZILIM LİMİTED ŞİRKETİ
Uygulama: Boyuyorum
İletişim: destek@titechyazilim.com
Adres: Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul

2. KİŞİSEL VERİ İŞLEMİYORUZ

Uygulamamız kullanıcılardan KVKK kapsamında kişisel veri TOPLAMAZ:
• İsim, soyisim, doğum tarihi talep edilmez
• E-posta veya telefon bilgisi alınmaz
• Konum bilgisi kullanılmaz
• Kamera / mikrofon erişimi istenmez
• Kullanıcı hesabı / giriş yoktur

3. CİHAZDA SAKLANAN VERİLER

Uygulama yalnızca cihazınızda lokal olarak:
• Boyadığınız eserler (galeri)
• Uygulama içi tercihler (ses açık/kapalı)
• Reklam gösterim sayısı (uygulama içi istatistik)

Bu veriler sunucularımıza AKTARILMAZ, üçüncü taraflarla PAYLAŞILMAZ. Uygulamayı silerseniz tüm veriler silinir.

4. REKLAMLAR (GOOGLE ADMOB)

Uygulama içinde Google AdMob reklamları gösterilir. AdMob:
• Çocuklara yönelik uygulama olarak ayarlanmıştır
• Kişiselleştirilmemiş reklam kullanır
• Cihaz tanımlayıcıları için reklam ölçümü yapabilir (iOS ATT izin istenebilir)

AdMob gizlilik politikası: https://policies.google.com/privacy

5. HAKLARINIZ (KVKK Md. 11)

KVKK kapsamında:
• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse bilgi talep etme
• Düzeltme / silme / yok etme isteme
• İşlenme nedenleri hakkında bilgi alma
hakkınız bulunmaktadır.

Başvuru: destek@titechyazilim.com

6. GÜVENLİK

Cihazdaki verileri korumak için iOS ve Android işletim sistemlerinin sunduğu sandbox ve disk şifreleme mekanizmalarını kullanırız. Sunucularımıza aktarılan kişisel veri yoktur.

7. DEĞİŞİKLİKLER

Bu metin güncellenebilir. Güncel sürümü her zaman uygulama içinden ve bu sayfadan görebilirsiniz.`,
    en: `DATA PROTECTION NOTICE

In accordance with data protection regulations (KVKK in Türkiye, GDPR in the EU, and equivalent laws elsewhere), the following information is shared with you as the data controller.

1. DATA CONTROLLER

Data Controller: TITECH YAZILIM LİMİTED ŞİRKETİ
Application: Boyuyorum
Contact: destek@titechyazilim.com
Address: Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul, Türkiye

2. WE DO NOT PROCESS PERSONAL DATA

Our app does NOT collect personal data:
• No name, surname, or date of birth requested
• No email or phone number collected
• No location data used
• No camera / microphone access requested
• No user account / sign-in

3. DATA STORED LOCALLY ON DEVICE

The app only stores locally on your device:
• Your colored artworks (gallery)
• In-app preferences (sound on/off)
• Ad-display counter (in-app statistic)

This data is NOT transferred to our servers and NOT shared with third parties. Deleting the app removes all data.

4. ADVERTISING (GOOGLE ADMOB)

Google AdMob ads are shown in the app. AdMob:
• Is configured as a child-directed app
• Uses non-personalized advertising
• May use device identifiers for ad measurement (iOS ATT permission may be requested)

AdMob privacy policy: https://policies.google.com/privacy

5. YOUR RIGHTS

Under applicable data protection laws, you have the right to:
• Learn whether your personal data is being processed
• Request information if it is
• Request correction, deletion, or destruction
• Be informed of the reasons for processing

Request: destek@titechyazilim.com

6. SECURITY

We use the sandbox and disk-encryption mechanisms provided by iOS and Android operating systems to protect data on the device. No personal data is transferred to our servers.

7. CHANGES

This notice may be updated. The current version is always available inside the app and on this page.`,
  },
};
