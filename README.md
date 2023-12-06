# Toplantı Yönetim Uygulaması

Bu proje, İskenderun Teknik Üniversitesi Bilgisayar Mühendisliği Öğrencisi 222523208 Numaralı Mert Gezici Adlı Öğrencinin Görsel Programlama Vize Projesidir. Bu proje kullanıcıların toplantılar oluşturmasına ve katılımcıların uygun zamanlarını belirlemesine olanak tanıyan bir web uygulamasıdır.

## Özellikler

- Kullanıcılar toplantılar oluşturabilir ve her bir toplantı için bir erişim kodu alabilir.
- Katılımcılar toplantı erişim kodunu kullanarak toplantıları arayabilir ve katılabilir.
- Her katılımcı, uygun zamanlarını ekleyebilir ve diğer katılımcıların uygun zamanlarını görebilir.
- Google Takvim'e uygun tarihleri ekleyebilirsiniz.

## Kullanılan Teknolojiler

- React.js
- react-hot-toast

## Kullanım Kılavuzu 

1. toplantı için başlık ve açıklama yazarak kendinize uygun tarihide ekleyerek bir toplantı oluşturursunuz.
2. toplantı oluştur butonuna bastığınızda tepede bir popup belirir ve sizin ve başkalarının oluşturduğunuz toplantıya katılması için random oluşturulmuş bir parola yazar. bu parolayı daha sonra kullanmak için not etmekte fayda vardır çünkü gizli bir paroladır ve daha sonra ulaşamayabilirsiniz.
3. sağ tarafta elinizde olan parolalar vasıtasıyla ulaşabileceğiniz bir arama yeri bulunur. oraya parolanızı girersiniz ve ilgili toplantıyla ilişkili veriler önünüze gelir
4. ilk başta oluşturan kişinin ismi ve ona uygun tarih görünür. bu bölümden kendi isminize özel size uygun tarihi yazıp ekleyebilirsiniz.
5. eğer ilgili toplantıya kayıt olmuş tüm kullanıların tarihleri çakışırsa uygulama size uygun tarihin hangi tarih olduğunu söyler. Aksi durumda ise uygun bir tarih bulunamadığını belirtir.
6. bir toplantıya kaydınızı oluşturduktan sonra dilerseniz yeni bir toplantı oluşturmak veya parolasına sahip olduğunuz başka bir toplantıya kayıt olmak için kırmızı butona basarak ana menüye sevk olabilirsiniz
7. toplantıya kayıtlı olan kişilerin belirlediği tarihleri google takviminize eklemek için tarihin sağında bulunan mavi butona basmanız ilgili google Takvimler sayfasına yönlendirilmenizi sağlar

## Yayın

https://meethubproject.netlify.app/

## Kendi localHostunuzda Çalıştırmak için

1. projeyi indirin
2. Terminale npm run dev yazdığınızda ilgili localhost adresinizde çalışacaktır