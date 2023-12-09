# Toplantı Yönetim Uygulaması

Bu proje, İskenderun Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisi Mert Gezici'nin görsel programlama vize projesidir. Kullanıcıların toplantılar oluşturmasına ve katılımcıların uygun zamanlarını belirlemesine olanak tanıyan bir web uygulamasıdır.

## Özellikler

- Kullanıcılar toplantılar oluşturabilir ve her bir toplantı için bir erişim kodu alabilir.
- Katılımcılar toplantı erişim kodunu kullanarak toplantıları arayabilir ve katılabilir.
- Her katılımcı, uygun zamanlarını ekleyebilir ve diğer katılımcıların uygun zamanlarını görebilir.
- Google Takvim'e uygun tarihleri ekleyebilirsiniz.

## Kullanılan Teknolojiler

- React.js
- react-hot-toast

## Kullanım Kılavuzu

1. **Toplantı Oluşturma:**
   - Bir toplantı oluşturmak için, başlık ve açıklama girerek uygun bir tarih seçmelisiniz.
   - Oluşturduğunuz toplantıya random oluşturulan parola ile erişebileceksiniz.

2. **Toplantı Parolası:**
   - Toplantı oluşturduktan sonra, oluşturulan parolayı not etmekte fayda var. Bu parola, toplantıya katılım için gereklidir ve daha sonra erişmek istediğinizde kullanılacaktır.

3. **Toplantı Arama:**
   - Sağ tarafta bulunan arama alanına parolayı girerek ilgili toplantıya erişebilirsiniz.
   
4. **Toplantı Detayları:**
   - İlk oluşturan kişinin ismi ve uygun tarih görüntülenir. Buradan kendi isminize uygun tarihi ekleyebilirsiniz.

5. **Uygun Tarih Bulma:**
   - Tüm kullanıcıların kayıtlı tarihleri çakışırsa, uygulama size uygun tarihi bildirir.
   - Tarihler çakışmazsa, uygun bir tarih bulunamadığı belirtilir.

6. **Ana Menüye Dönme:**
   - Bir toplantıya kayıt olduktan sonra, yeni bir toplantı oluşturabilir veya farklı bir toplantıya katılmak için kırmızı butona basarak ana menüye dönebilirsiniz.

7. **Google Takvim Entegrasyonu:**
   - Toplantıya kayıtlı kişilerin belirlediği tarihleri Google Takviminize eklemek için tarihlerin sağında bulunan mavi butona basabilirsiniz. Bu buton sizi ilgili Google Takvim sayfasına yönlendirecektir.
   
## Yayın

Bu projeyi şu adresten Canlı Olarak inceleyebilirsiniz: [Toplantı Yönetim Uygulaması Demo](https://mertgezici.com/meetHub)

## Kendi Localhost'unuzda Çalıştırmak İçin

1. Projeyi indirin.
2. Terminalde projenin olduğu dosyaya gelerek ilgili komutu çalıştırın:
   npm run dev
