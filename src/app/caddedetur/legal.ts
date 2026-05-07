// CaddedeTur — Legal text data (TR + EN).
// Content mirrors the in-app legal documents for App Store submission parity.

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
    tr: `CaddedeTur, İstanbul - Bağdat Caddesi başta olmak üzere belirli bir hizmet bölgesi içinde sosyal etkileşim sağlayan, konum tabanlı bir mobil uygulamadır.

Uygulamamız:
• Yakındaki kullanıcıları haritada gösterir
• Plaka veya isimle arama imkânı sunar
• Karşılıklı onayla arkadaşlık kurmayı sağlar
• Güvenli ve gerçek zamanlı mesajlaşma sunar
• Kullanıcı engelleme ve şikayet özellikleri içerir
• 18 yaş ve üzeri kullanıcılar için tasarlanmıştır

Hizmet Bölgesi:
Uygulama, başlangıç aşamasında yalnızca İstanbul - Bağdat Caddesi ve çevresindeki tanımlı bölge sınırları içinde aktif olarak çalışmaktadır. Bölge sınırları uygulama içinde harita üzerinde çizgi ile gösterilmektedir.

Gizlilik:
Konumunuz yalnızca hizmet bölgesi içinde olduğunuz sürece diğer kullanıcılara görünür kılınır. Bölge dışına çıktığınızda otomatik olarak görünmez olursunuz.

Geliştiren: TITECH YAZILIM LİMİTED ŞİRKETİ
İletişim: destek@titechyazilim.com
Web: titechyazilim.com

Sürüm 1.0
© 2026 TITECH YAZILIM LİMİTED ŞİRKETİ`,
    en: `CaddedeTur is a location-based mobile application offering social interaction within a defined service area, primarily Bağdat Caddesi in Istanbul.

Our app:
• Shows nearby users on the map
• Allows searching by license plate or name
• Enables friendship through mutual consent
• Provides secure, real-time messaging
• Includes user blocking and reporting features
• Is designed for users aged 18 and over

Service Area:
At launch, the application is active only within the defined boundaries of Bağdat Caddesi and its surroundings in Istanbul. The boundaries are shown as a line on the map inside the app.

Privacy:
Your location is only made visible to other users while you are within the service area. You automatically become invisible when you leave the area.

Developer: TITECH YAZILIM LİMİTED ŞİRKETİ
Contact: destek@titechyazilim.com
Web: titechyazilim.com

Version 1.0
© 2026 TITECH YAZILIM LİMİTED ŞİRKETİ`,
  },

  privacy: {
    tr: `Son güncelleme: 24.04.2026

CaddedeTur uygulamasını ("Uygulama") kullandığınız için teşekkür ederiz. Bu Gizlilik Politikası, TITECH YAZILIM LİMİTED ŞİRKETİ ("Şirket", "biz") tarafından kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.

Bu politika 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) ve Apple App Store Review Guidelines uyumlu olarak hazırlanmıştır.

1. TOPLANAN VERİLER

1.1 Hesap Bilgileri:
• Telefon numarası (kimlik doğrulama amacıyla, zorunlu)
• Ad ve soyad (zorunlu)
• E-posta adresi (zorunlu)
• Cinsiyet (zorunlu)
• Doğum tarihi (yaş kontrolü için zorunlu, 18+)
• Profil fotoğrafı (isteğe bağlı)

1.2 Araç Bilgileri (Tümü İsteğe Bağlı):
• Araç plakası
• Araç markası
• Araç rengi

1.3 Konum Verileri:
• Anlık GPS konumu (uygulama açıkken)
• Yakın çevre keşfi için yaklaşık konum bilgisi

1.4 İçerik ve Etkileşim Verileri:
• Diğer kullanıcılarla mesaj içerikleri
• Arkadaşlık istek geçmişi
• Engelleme ve şikayet kayıtları

1.5 Cihaz Bilgileri:
• Cihaz türü, model, işletim sistemi versiyonu
• Push notification token (FCM)
• Uygulama versiyonu ve dil ayarları

1.6 Kullanım Verileri (Firebase Analytics):
• Açılan ekranlar ve etkileşimler
• Çöküş raporları (Crashlytics, anonim)
• Oturum süresi ve sıklığı

2. KONUM VERİLERİ — ÖNEMLİ BİLGİLENDİRME

CaddedeTur, hizmetlerini yalnızca belirli bir coğrafi bölge (başlangıç aşamasında İstanbul - Bağdat Caddesi ve çevresi) içinde sunmaktadır. Konumunuz yalnızca bu hizmet bölgesinin sınırları içinde olduğu sürece diğer kullanıcılara görünür kılınır.

Hizmet bölgesi dışına çıktığınızda:
• Haritada konumunuz başka kullanıcılara gösterilmez
• Çevrimiçi durumunuz otomatik olarak pasif hale gelir
• Yakınlardaki kullanıcılar listesinden çıkarılırsınız
• Hizmet bölgesine geri döndüğünüzde görünürlüğünüz otomatik olarak yeniden aktifleşir

Hizmet bölgesinin görsel sınırları uygulamanın ana sayfasında harita üzerinde çizgiyle gösterilmektedir. Bu, uygulamanın bir gizlilik özelliği olarak tasarlanmıştır.

3. VERİLERİN KULLANIM AMAÇLARI

Toplanan veriler aşağıdaki amaçlarla işlenmektedir:
• Hesap oluşturma ve kimlik doğrulama (SMS OTP)
• Konum tabanlı sosyal etkileşim hizmetlerinin sunulması
• Kullanıcılar arası mesajlaşma altyapısının sağlanması
• Kullanıcı güvenliğinin sağlanması (engelleme, şikayet)
• Hizmet kalitesinin geliştirilmesi (anonim analitik)
• Yasal yükümlülüklerin yerine getirilmesi
• Bildirim gönderimi (push notifications)

4. ÜÇÜNCÜ TARAF HİZMETLER

Uygulamamız aşağıdaki üçüncü taraf altyapıları kullanmaktadır:

• Firebase Authentication (Google) — Telefon doğrulaması
• Cloud Firestore (Google) — Profil, mesaj, arkadaşlık verileri
• Firebase Cloud Messaging (Google) — Push bildirimler
• Firebase Crashlytics (Google) — Çöküş raporları (anonim)
• Firebase Analytics (Google) — Kullanım istatistikleri (anonim)
• Google Maps SDK — Harita görüntüleme
• SendGrid — İletişim formu mailleri (yalnızca destek mesajları için)

Tüm bu hizmetler kendi gizlilik politikalarına tabidir:
• Google: https://policies.google.com/privacy
• SendGrid: https://www.twilio.com/legal/privacy

5. VERİLERİN PAYLAŞIMI

Kişisel verileriniz aşağıdaki haller dışında üçüncü kişilerle paylaşılmaz:
• Yasal zorunluluklar (mahkeme kararı, yetkili makam talebi)
• Hizmet sağlayıcılarımız (Firebase, SendGrid - yalnızca hizmet sunumu için)
• Sizin açık rızanız ile

Diğer kullanıcılarla paylaşılan veriler:
• Adınız, profil fotoğrafınız, plakanız (gönüllü)
• Hizmet bölgesi içindeyken yaklaşık konumunuz
• Onayladığınız mesajlaşmalar yalnızca arkadaşlarınızla

6. VERİ SAHİBİ HAKLARI

KVKK Madde 11 ve GDPR kapsamında haklarınız:
• Verilerinizin işlenip işlenmediğini öğrenme
• Verilere erişim ve kopya talep etme
• Yanlış verilerin düzeltilmesini isteme
• Verilerinizin silinmesini talep etme (uygulamada "Hesabımı Sil" özelliği mevcuttur)
• Veri taşınabilirliği talebi
• Otomatik karar verme süreçlerine itiraz

Uygulamada **Ayarlar → Hesabımı Sil** menüsünden hesabınızı ve tüm verilerinizi anında silebilirsiniz.

7. VERİ GÜVENLİĞİ

Verileriniz Firebase'in endüstri standardı altyapısı üzerinde tutulmaktadır:
• Tüm trafik HTTPS/TLS ile şifrelidir
• Firestore ve Storage Security Rules ile erişim kontrolü
• Sunucu tarafı şifreleme (encryption at rest)
• Düzenli güvenlik denetimleri

8. VERİLERİN SAKLANMA SÜRESİ

• Aktif hesaplar: Hesap kapatılana kadar
• Silinen hesaplar: 30 gün içinde tüm veriler kalıcı olarak silinir
• Mesaj geçmişi: Hesap silinene kadar (silindikten sonra karşı tarafın kopyası kalabilir)
• Anonim analitik: 14 ay (Firebase Analytics varsayılan)

9. ÇOCUKLAR

CaddedeTur 18 yaşından küçük kullanıcılar için tasarlanmamıştır. Kayıt sırasında doğum tarihi kontrolü yapılır ve 18 yaşından küçükler kayıt olamaz. 18 yaş altı bir kullanıcının hesap oluşturduğunu tespit edersek hesap derhal silinir.

10. POLİTİKADAKİ DEĞİŞİKLİKLER

Bu politika güncellenebilir. Önemli değişikliklerde uygulama içinde bildirim yapılır. Güncel versiyon her zaman bu sayfadan ulaşılabilir.

11. İLETİŞİM

Soru, talep ve şikayetleriniz için:

E-posta: destek@titechyazilim.com
TITECH YAZILIM LİMİTED ŞİRKETİ
Acıbadem Mah. Çeçen Sk. Akasya AVM
No: 25 İç Kapı No: 426
Üsküdar / İstanbul`,
    en: `Last updated: 24.04.2026

Thank you for using CaddedeTur ("App"). This Privacy Policy explains how TITECH YAZILIM LİMİTED ŞİRKETİ ("Company", "we") collects, uses, stores, and protects your personal data.

This policy is prepared in compliance with Turkish KVKK (Personal Data Protection Law), the EU General Data Protection Regulation (GDPR), and the Apple App Store Review Guidelines.

1. DATA WE COLLECT

1.1 Account Information:
• Phone number (for authentication, mandatory)
• First and last name (mandatory)
• Email address (mandatory)
• Gender (mandatory)
• Date of birth (mandatory for age verification, 18+)
• Profile photo (optional)

1.2 Vehicle Information (All Optional):
• License plate
• Vehicle brand
• Vehicle color

1.3 Location Data:
• Real-time GPS location (while the app is open)
• Approximate location for nearby user discovery

1.4 Content and Interaction Data:
• Message contents with other users
• Friend request history
• Block and report records

1.5 Device Information:
• Device type, model, operating system version
• Push notification token (FCM)
• App version and language settings

1.6 Usage Data (Firebase Analytics):
• Screens viewed and interactions
• Crash reports (Crashlytics, anonymous)
• Session duration and frequency

2. LOCATION DATA — IMPORTANT NOTICE

CaddedeTur provides its services only within a defined geographic area (initially Bağdat Caddesi and its surroundings in Istanbul). Your location is made visible to other users only while you are within the boundaries of this service area.

When you leave the service area:
• Your location is no longer shown to other users on the map
• Your "online" status is automatically set to inactive
• You are removed from the nearby users list
• When you return to the service area, your visibility is automatically reactivated

The service area boundaries are shown as a line on the map inside the app. This is intentionally designed as a privacy feature.

3. PURPOSES OF DATA PROCESSING

Collected data is processed for the following purposes:
• Account creation and identity verification (SMS OTP)
• Provision of location-based social interaction services
• Provision of messaging infrastructure between users
• Ensuring user safety (block, report)
• Service quality improvement (anonymous analytics)
• Compliance with legal obligations
• Notification delivery (push notifications)

4. THIRD-PARTY SERVICES

Our app uses the following third-party infrastructure:

• Firebase Authentication (Google) — Phone verification
• Cloud Firestore (Google) — Profile, message, friendship data
• Firebase Cloud Messaging (Google) — Push notifications
• Firebase Crashlytics (Google) — Crash reports (anonymous)
• Firebase Analytics (Google) — Usage statistics (anonymous)
• Google Maps SDK — Map display
• SendGrid — Contact form emails (only for support messages)

All these services are subject to their own privacy policies:
• Google: https://policies.google.com/privacy
• SendGrid: https://www.twilio.com/legal/privacy

5. DATA SHARING

Your personal data is not shared with third parties except in the following cases:
• Legal obligations (court order, request from authorized authority)
• Our service providers (Firebase, SendGrid — only for service delivery)
• With your explicit consent

Data shared with other users:
• Your name, profile photo, license plate (voluntary)
• Your approximate location while in the service area
• Messages only with friends you have approved

6. DATA SUBJECT RIGHTS

Your rights under GDPR and KVKK Article 11:
• Learn whether your data is being processed
• Request access to and a copy of your data
• Request correction of inaccurate data
• Request deletion of your data ("Delete My Account" feature available in-app)
• Right to data portability
• Object to automated decision-making

You can instantly delete your account and all your data via **Settings → Delete My Account** in the app.

7. DATA SECURITY

Your data is stored on Firebase's industry-standard infrastructure:
• All traffic is encrypted via HTTPS/TLS
• Access control via Firestore and Storage Security Rules
• Server-side encryption at rest
• Regular security audits

8. DATA RETENTION

• Active accounts: Until the account is closed
• Deleted accounts: All data permanently deleted within 30 days
• Message history: Until the account is deleted (the other party may retain a copy)
• Anonymous analytics: 14 months (Firebase Analytics default)

9. CHILDREN

CaddedeTur is not designed for users under 18 years old. Date of birth is verified during registration, and users under 18 cannot register. If we detect an account created by a user under 18, the account is deleted immediately.

10. CHANGES TO THIS POLICY

This policy may be updated. You will be notified in-app for significant changes. The current version is always available on this page.

11. CONTACT

For questions, requests, and complaints:

Email: destek@titechyazilim.com
TITECH YAZILIM LİMİTED ŞİRKETİ
Acıbadem Mah. Çeçen Sk. Akasya AVM
No: 25 İç Kapı No: 426
Üsküdar / İstanbul, Türkiye`,
  },

  terms: {
    tr: `Son güncelleme: 24.04.2026

CaddedeTur uygulamasını ("Uygulama") kullanmadan önce lütfen bu Kullanım Koşullarını ("Koşullar") dikkatlice okuyunuz. Bu Koşullar, TITECH YAZILIM LİMİTED ŞİRKETİ ("Şirket", "biz") ile siz ("Kullanıcı") arasındaki yasal sözleşmeyi oluşturmaktadır. Uygulamayı indirerek veya kullanarak bu Koşulları kabul etmiş sayılırsınız.

1. GENEL KOŞULLAR

1.1 Yaş Sınırı: CaddedeTur yalnızca 18 yaşını doldurmuş bireyler tarafından kullanılabilir. Uygulamayı kullanarak 18 yaşında veya daha büyük olduğunuzu beyan ve taahhüt edersiniz. 18 yaşından küçüklerin tespit edilmesi halinde hesap derhal askıya alınır ve silinir.

1.2 Hesap Sorumluluğu: Hesap bilgilerinizin doğruluğundan ve hesabınız üzerinden yapılan tüm işlemlerden bizzat siz sorumlusunuz. Hesabınızın yetkisiz kullanıldığını fark ettiğinizde derhal destek@titechyazilim.com adresine bildiriniz.

2. HİZMET TANIMI

2.1 Platform: CaddedeTur, kullanıcıların birbirleriyle konum tabanlı sosyal etkileşim kurmasına olanak tanıyan bir mobil uygulamadır.

2.2 Hizmet Bölgesi: Uygulama, başlangıç aşamasında yalnızca İstanbul - Bağdat Caddesi ve çevresindeki tanımlı bölge sınırları içinde aktif olarak çalışmaktadır. Hizmet bölgesi dışında:
• Konumunuz haritada görünmez
• Çevrimiçi durumunuz pasif olur
• Yakındaki kullanıcı keşfi devre dışı kalır
• Mevcut arkadaşlarınızla mesajlaşmaya devam edebilirsiniz

2.3 Mesajlaşma: Sadece karşılıklı arkadaşlık onayı sonrası mesajlaşma başlatılabilir. Şirket, gönderilen mesajların içeriğinden sorumlu değildir.

2.4 Hizmetin Sürekliliği: Şirket, hizmetin kesintisiz olacağını garanti etmez. Bakım, güncelleme veya olağanüstü durumlar nedeniyle hizmete geçici olarak ara verilebilir.

3. KULLANICI YÜKÜMLÜLÜKLERİ

Kullanıcı olarak, Uygulamayı kullanırken:
• Yasalara ve kamu düzenine uymakla yükümlüsünüz
• Doğru, güncel ve eksiksiz bilgi vermek zorundasınız
• Sahte profil oluşturamazsınız
• Başkasının kimliğini, fotoğrafını veya bilgilerini izinsiz kullanamazsınız
• Tehdit, hakaret, taciz, ayrımcılık içeren mesaj gönderemezsiniz
• Pornografik, şiddet içeren veya yasadışı içerik paylaşamazsınız
• Reklam, spam, dolandırıcılık amaçlı mesaj gönderemezsiniz
• Otomatize araçlar (bot) kullanamazsınız
• Uygulamanın tersine mühendislik veya kopyalanması yasaktır

4. ENGELLEME VE ŞİKAYET

Uygulama, kullanıcılara karşılıklı engelleme ve şikayet etme hakkı tanır. Şirket, şikayetleri değerlendirme ve uygunsuz davranış tespiti halinde ilgili hesapları askıya alma veya kalıcı olarak kapatma hakkını saklı tutar.

5. İÇERİK POLİTİKASI

Aşağıdaki içerikler kesinlikle yasaktır:
• Cinsel içerikli mesaj veya görsel
• Şiddet, nefret söylemi, terör destekleyici içerik
• Telif hakkı ihlali içerik
• Kişisel veri ifşası (başkasının numarası, adresi vb.)
• Yanıltıcı veya dolandırıcılık içeren mesajlar
• İlaç, uyuşturucu, silah satışı

İhlal halinde hesap derhal kapatılır ve gerekirse yetkili makamlara bildirim yapılır.

6. FİKRİ MÜLKİYET

Uygulamadaki tüm logo, tasarım, içerik, kod ve marka hakları TITECH YAZILIM LİMİTED ŞİRKETİ'ne aittir. Uygulamayı kişisel ve ticari olmayan amaçla kullanma lisansı verilmiştir.

7. HESAP ASKIYA ALMA VE FESİH

Şirket, bu Koşulları ihlal eden hesapları önceden bildirim yapmaksızın askıya alma veya silme hakkını saklı tutar. Kullanıcı dilediği zaman uygulama içinden "Hesabımı Sil" özelliğiyle hesabını kapatabilir.

8. SORUMLULUK SINIRLAMASI

Şirket, Uygulamanın kullanımından doğacak doğrudan veya dolaylı zararlardan sorumlu değildir. Kullanıcılar arası etkileşimlerden ve fiziksel buluşmalardan kaynaklanan herhangi bir durumun sorumluluğu kullanıcılara aittir. Buluşmaları her zaman güvenli, kamuya açık alanlarda yapmanızı öneririz.

9. SUNULACAK HUKUK

Bu Koşullar Türkiye Cumhuriyeti yasalarına tabidir. İhtilaflarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.

10. KOŞULLARDA DEĞİŞİKLİK

Şirket bu Koşulları dilediği zaman güncelleyebilir. Önemli değişikliklerde uygulama içi bildirim yapılır.

11. İLETİŞİM

destek@titechyazilim.com
TITECH YAZILIM LİMİTED ŞİRKETİ
Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul`,
    en: `Last updated: 24.04.2026

Please read these Terms of Use ("Terms") carefully before using the CaddedeTur application ("App"). These Terms constitute a legal agreement between TITECH YAZILIM LİMİTED ŞİRKETİ ("Company", "we") and you ("User"). By downloading or using the App, you accept these Terms.

1. GENERAL TERMS

1.1 Age Limit: CaddedeTur may only be used by individuals who are at least 18 years old. By using the App, you represent and warrant that you are 18 years of age or older. Accounts found to be created by users under 18 will be suspended and deleted.

1.2 Account Responsibility: You are personally responsible for the accuracy of your account information and all activities performed through your account. Notify destek@titechyazilim.com immediately upon detecting any unauthorized use.

2. SERVICE DESCRIPTION

2.1 Platform: CaddedeTur is a mobile application that enables users to engage in location-based social interaction.

2.2 Service Area: The App operates only within the defined boundaries of Bağdat Caddesi and its surroundings in Istanbul. Outside the service area:
• Your location is not visible on the map
• Your online status becomes inactive
• Nearby user discovery is disabled
• You may continue messaging with existing friends

2.3 Messaging: Messaging can only be initiated after mutual friendship approval. The Company is not responsible for the content of messages sent.

2.4 Service Continuity: The Company does not guarantee uninterrupted service. Service may be temporarily suspended for maintenance, updates, or extraordinary circumstances.

3. USER OBLIGATIONS

As a User, when using the App, you must:
• Comply with applicable laws and public order
• Provide accurate, current, and complete information
• Not create fake profiles
• Not use another person's identity, photo, or information without consent
• Not send threatening, abusive, harassing, or discriminatory messages
• Not share pornographic, violent, or unlawful content
• Not send advertising, spam, or fraudulent messages
• Not use automated tools (bots)
• Not reverse-engineer or copy the App

4. BLOCKING AND REPORTING

The App grants users the right to mutually block and report each other. The Company reserves the right to evaluate reports and suspend or permanently close accounts upon detection of inappropriate behavior.

5. CONTENT POLICY

The following content is strictly prohibited:
• Sexual messages or imagery
• Violence, hate speech, terror-supporting content
• Copyright-infringing content
• Personal data disclosure (other people's phone numbers, addresses, etc.)
• Misleading or fraudulent messages
• Drug, narcotic, or weapon sales

In case of violation, the account is closed immediately and reported to relevant authorities if necessary.

6. INTELLECTUAL PROPERTY

All logos, designs, content, code, and trademark rights in the App belong to TITECH YAZILIM LİMİTED ŞİRKETİ. You are granted a license to use the App for personal, non-commercial purposes.

7. ACCOUNT SUSPENSION AND TERMINATION

The Company reserves the right to suspend or delete accounts violating these Terms without prior notice. The User may close their account at any time via the in-app "Delete My Account" feature.

8. LIMITATION OF LIABILITY

The Company is not liable for direct or indirect damages arising from the use of the App. Users are solely responsible for any situations arising from interactions or in-person meetings between users. We recommend always meeting in safe, public places.

9. GOVERNING LAW

These Terms are governed by the laws of the Republic of Türkiye. The Istanbul Courts and Enforcement Offices have jurisdiction over disputes.

10. CHANGES TO TERMS

The Company may update these Terms at any time. Significant changes will be communicated via in-app notification.

11. CONTACT

destek@titechyazilim.com
TITECH YAZILIM LİMİTED ŞİRKETİ
Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul, Türkiye`,
  },

  kvkk: {
    tr: `KVKK AYDINLATMA METNİ

6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, veri sorumlusu sıfatıyla aşağıdaki bilgiler tarafınızla paylaşılmaktadır.

1. VERİ SORUMLUSU

Veri Sorumlusu: TITECH YAZILIM LİMİTED ŞİRKETİ
Uygulama: CaddedeTur
İletişim: destek@titechyazilim.com
Adres: Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul

2. İŞLENEN KİŞİSEL VERİLER

Uygulamamız aşağıdaki kişisel veri kategorilerini işlemektedir:

• Kimlik Verileri: Ad, soyad, doğum tarihi, cinsiyet
• İletişim Verileri: Telefon numarası, e-posta adresi
• Konum Verileri: GPS konumu (yalnızca uygulama açıkken)
• Görsel Veriler: Profil fotoğrafı (isteğe bağlı)
• Araç Verileri: Plaka, marka, renk (isteğe bağlı)
• İşlem Verileri: Mesaj içerikleri, arkadaşlık istekleri
• Cihaz Verileri: Cihaz türü, OS sürümü, FCM token
• Kullanım Verileri: Anonim analitik ve çöküş raporları

3. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI

• Üyelik oluşturma ve kimlik doğrulama (KVKK m.5/2-c)
• Hizmetin sunulması (KVKK m.5/2-c)
• İletişim faaliyetleri (KVKK m.5/2-f)
• Yasal yükümlülüklerin yerine getirilmesi (KVKK m.5/2-a)
• Kullanıcı güvenliği ve dolandırıcılığın önlenmesi (KVKK m.5/2-f)
• Hizmet kalitesinin geliştirilmesi (açık rıza kapsamında)

4. KİŞİSEL VERİLERİN AKTARIMI

Verileriniz aşağıdaki üçüncü taraflarla paylaşılabilir:

• Google LLC (Firebase): Veritabanı, kimlik doğrulama, push bildirim, analitik
• Twilio Inc. (SendGrid): Yalnızca iletişim formu mailleri için
• Yetkili Kamu Kurumları: Yasal zorunluluk halinde

Bu hizmet sağlayıcılarla aramızda veri işleme sözleşmeleri (DPA) bulunmaktadır.

5. KİŞİSEL VERİLERİN AKTARIM ÜLKELERİ

Firebase ve diğer Google hizmetleri Avrupa Birliği veri merkezlerinde (europe-west1, eu-west) tutulmaktadır. Kişisel verileriniz GDPR uyumlu altyapı üzerinde işlenmektedir.

6. VERİ TOPLAMA YÖNTEMİ VE HUKUKİ SEBEP

Kişisel verileriniz uygulama içi formlar, GPS sensörü ve sunucu kayıtları aracılığıyla otomatik veya yarı otomatik yollarla; KVKK m.5/2-c (sözleşmenin kurulması) ve m.5/2-f (meşru menfaat) hukuki sebeplerine dayanılarak toplanmaktadır.

7. VERİ SAHİBİ HAKLARI (KVKK MADDE 11)

KVKK kapsamında her zaman Şirket'e başvurarak:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse buna ilişkin bilgi talep etme
• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
• Eksik veya yanlış işlenmişse düzeltilmesini isteme
• KVKK m.7'de öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme
• Düzeltilmesi/silinmesi/yok edilmesi halinde bunun aktarıldığı üçüncü kişilere bildirilmesini isteme
• Otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
• Kanuna aykırı olarak işlenmesi nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme

hakkına sahipsiniz.

Uygulama içinde **Ayarlar → Hesabımı Sil** menüsünden hesabınızı ve ilişkili tüm verilerinizi anında silebilirsiniz.

8. BAŞVURU YOLLARI

Yukarıdaki haklarınızı kullanmak için:
• E-posta: destek@titechyazilim.com
• Posta: Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul

Başvurularınız 30 gün içinde ücretsiz olarak yanıtlanır.

9. GÜVENLİK ÖNLEMLERİ

• Tüm trafik HTTPS/TLS ile şifrelenir
• Firestore ve Storage için detaylı güvenlik kuralları (Security Rules)
• Sunucu tarafı şifreleme (encryption at rest)
• Düzenli güvenlik denetimleri ve sızma testleri
• Personelin gizlilik taahhütleri

10. SAKLAMA SÜRELERİ

• Aktif hesap verileri: Hesap kapatılana kadar
• Silinen hesap verileri: 30 gün içinde tamamen silinir
• Yasal saklama yükümlülüğü olan veriler: Yasada öngörülen süreyle (örn. ticari iletişim 3 yıl)

11. DEĞİŞİKLİKLER

Bu metin güncellenebilir. Güncel sürüm her zaman uygulama içinden ve bu sayfadan görülebilir.`,
    en: `DATA PROTECTION NOTICE

In accordance with applicable data protection regulations (KVKK in Türkiye, GDPR in the EU, and equivalent laws), the following information is shared with you in our capacity as data controller.

1. DATA CONTROLLER

Data Controller: TITECH YAZILIM LİMİTED ŞİRKETİ
Application: CaddedeTur
Contact: destek@titechyazilim.com
Address: Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul, Türkiye

2. PERSONAL DATA PROCESSED

Our app processes the following categories of personal data:

• Identity Data: First name, last name, date of birth, gender
• Contact Data: Phone number, email address
• Location Data: GPS location (only while the app is open)
• Visual Data: Profile photo (optional)
• Vehicle Data: License plate, brand, color (optional)
• Transaction Data: Message contents, friend requests
• Device Data: Device type, OS version, FCM token
• Usage Data: Anonymous analytics and crash reports

3. PURPOSES OF PROCESSING

• Account creation and identity verification
• Service provision
• Communication activities
• Legal compliance
• User safety and fraud prevention
• Service quality improvement (under explicit consent)

4. DATA TRANSFER

Your data may be shared with the following third parties:

• Google LLC (Firebase): Database, authentication, push notifications, analytics
• Twilio Inc. (SendGrid): Only for contact form emails
• Authorized Public Institutions: In case of legal obligations

We have Data Processing Agreements (DPAs) in place with these service providers.

5. DATA TRANSFER COUNTRIES

Firebase and other Google services are hosted in European Union data centers (europe-west1, eu-west). Your personal data is processed on GDPR-compliant infrastructure.

6. DATA COLLECTION METHOD AND LEGAL BASIS

Your personal data is collected through in-app forms, the GPS sensor, and server logs by automated or semi-automated means; based on legal grounds of contract performance and legitimate interest.

7. DATA SUBJECT RIGHTS

Under GDPR and KVKK Article 11, by contacting the Company at any time you have the right to:

• Learn whether your personal data is being processed
• Request information if it is
• Learn the purpose of processing and whether it is used for that purpose
• Know the third parties to whom data has been transferred domestically or abroad
• Request correction if incomplete or inaccurate
• Request deletion or destruction under conditions provided in KVKK Art. 7
• Request notification of correction/deletion/destruction to third parties
• Object to a result arising against you through automated analysis
• Request compensation for damages caused by unlawful processing

You can instantly delete your account and all associated data via **Settings → Delete My Account** in the app.

8. APPLICATION CHANNELS

To exercise the above rights:
• Email: destek@titechyazilim.com
• Postal: Acıbadem Mah. Çeçen Sk. Akasya AVM No: 25 İç Kapı No: 426, Üsküdar / İstanbul, Türkiye

Your requests will be answered free of charge within 30 days.

9. SECURITY MEASURES

• All traffic is encrypted via HTTPS/TLS
• Detailed Security Rules for Firestore and Storage
• Server-side encryption at rest
• Regular security audits and penetration tests
• Staff confidentiality undertakings

10. RETENTION PERIODS

• Active account data: Until the account is closed
• Deleted account data: Permanently deleted within 30 days
• Data subject to legal retention obligations: For the period prescribed by law (e.g., commercial communications 3 years)

11. CHANGES

This notice may be updated. The current version is always available within the app and on this page.`,
  },
};
