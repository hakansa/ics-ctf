import React from "react";

import "../../App.css";

export default function Information() {
  return (
    <div className="info-text1">
      <h2 style={{ textAlign: "center" }}>
        ICSCTF Kurallar ve Yasaklanan Eylemler:
      </h2>
      <p style={{ textAlign: "center" }}>
        ● Erişim bilgileri verilen, soru amaçlı hazırlanmış yarışma kapsamı
        dışında herhangi bir sunucuya ya da makineye saldırmak.
      </p>
      <p style={{ textAlign: "center" }}>
        ● CTF altyapısına DoS saldırıları gerçekleştirmek.
      </p>
      <p style={{ textAlign: "center" }}>
        ● Kasıtlı olarak diğer takımların CTF bayraklarını bulmasını engellemek.
      </p>
      <p style={{ textAlign: "center" }}>● Bayrakların değiştirilmesi.</p>
      <p style={{ textAlign: "center" }}>
        ● Yarışma sona ermeden sorularla ve bayraklarla alakalı bilgi paylaşımı.
      </p>
      <p style={{ textAlign: "center" }}>
        ● CTF altyapısına erişimi başka biriyle paylaşmak.
      </p>
      <p style={{ textAlign: "center" }}>
        ● Başka takımlardan sorular hakkında bilgi çalmaya çalışmak.
      </p>
      <p style={{ textAlign: "center" }}>● Puan tablosunun değiştirilmesi.</p>
      <p style={{ textAlign: "center" }}>
        Yarışma yetkilileriyle iletişime geçmeniz gereken durumlar:
      </p>
      <p style={{ textAlign: "center" }}>
        ● Eğer bayrağı bulduğunuzu düşünüyorsanız ve sistem tarafından
        reddediliyor ise yarışma yetkilileriyle iletişime geçebilirsiniz.
      </p>
      <p style={{ textAlign: "center" }}>
        ● Takımınızla ilgili puan tablosunda herhangi bir hata yapıldığını
        düşünüyorsanız yarışma yetkilileriyle iletişime geçebilirsiniz..
      </p>
      <p style={{ textAlign: "center" }}>
        ● Sorularla alakalı teknik bir hata yaşamanız durumunda hatayı detaylı
        bir şekilde yarışma yetkililerine bildirmeniz beklenmektedir.
      </p>
    </div>
  );
}
