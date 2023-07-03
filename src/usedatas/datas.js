import { GetFlowers, GetUsers } from "../api/api";
import firstBg from "../assets/images/bg-1.webp";
import secondBg from "../assets/images/bg-2.webp";
import thirdBg from "../assets/images/bg-4.jpeg";

export const slidesArr = [
  {
    url: firstBg,
    title: "time to blossom",
  },
  {
    url: secondBg,
    title: "florist dream",
  },
  {
    url: thirdBg,  
    title: "perfect bouquet",
  },
];

export const flowersLimitThree = [
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/custom-icon-1.png",
  },
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/custom-icon-3.png",
  },
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/custom-icon-2.png",
  },
];

export const daffodilFlowersBg = [
  {
    src: "https://i.pinimg.com/originals/5c/a2/83/5ca283379ede90c51d4b591311851c05.jpg",
  },
  {
    src: "https://wallpapercave.com/wp/wp5808776.jpg",
  },
  {
    src: "https://on-desktop.com/wps/Nature___Flowers_Bright_beautiful_flowers_forget-me-_066024_.jpg",
  },
];

export const langDaffodilFlowers = {
  uz: [
    "Bu har bir floristning orzusi ushaladi",
    "Bizning ajoyib gullar dizaynimiz",
    "Bu gul do'konida hamma narsa bor",
  ],
  ru: [
    "Это мечта любого флориста",
    "Наши прекрасные цветочные композиции",
    "В этом цветочном магазине есть все",
  ],
  en: [
    "It's every florist's dream come true",
    "Our Lovely flower designs",
    "This flower shop has everything",
  ],
};

export const galleryofWorksImages = [
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-1.jpg",
  },
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-2.jpg",
  },
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-3.jpg",
  },
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-4.jpg",
  },
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-5.jpg",
  },
  {
    src: "https://rosebud.qodeinteractive.com/wp-content/uploads/2018/02/h2-gallery-img-6.jpg",
  },
];

export const fakeMarigoldsFlower = [
  {
    url: "https://i.pinimg.com/originals/de/60/39/de6039b3cdb759648786ffb78b8b9174.jpg",
  },
  {
    url: "https://vsegda-pomnim.com/uploads/posts/2022-04/1649817152_44-vsegda-pomnim-com-p-zheltie-tsveti-foto-49.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/07/06/19/57/marigold-1501173_1280.jpg",
  },
];

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "uz";

export const cartPage = {
  sum : lang == 'en' ? 'sum' : lang=='ru' ? 'сум' :"so'm",
  common: lang == "en" ? "common" : lang == "ru" ? "общий" : "umumiy",
  products:
    lang == "en" ? "products" : lang == "ru" ? "продукты" : "mahsulotlar",
  delivery:
    lang == "en" ? "delivery" : lang == "ru" ? "доставка" : "yetkazib berish",
  toPay: lang == "en" ? "to pay" : lang == "ru" ? "платить" : "to'lash uchun",
  goToCheckout:
    lang == "en"
      ? "Go to checkout"
      : lang == "ru"
      ? "Перейти к оформлению заказа"
      : "To'lov sahifasiga o'tish",
};




export const loginPage = {
  login : lang == 'en' ? 'Login' : lang=='ru' ? 'Вход на сайт' : 'Tizimga kirish',
  phonenumber : lang=='en' ? 'Phone number' : lang == 'ru' ? 'Номер телефона' : 'Telefon raqam',
  donthaveanaccount : lang == 'en' ? "Don't have an account" : lang=='ru' ? 'Нет учетной записи' : "Akkauntingiz yo'qmi",
  register : lang == 'en' ? "Register" : lang=='ru' ? "Pегистр" : "Ro'yxatdan o'tish",
  invalidPhone : lang == 'en' ? 'must be an Uzbek number' : lang == 'ru' ? 'должен быть узбекский номер' : "O'zbekiston nomeri bo'lishi kerak",
  notfoundaccount : lang=='en' ? 'Your account was not found, please register!' : lang=='ru' ? 'Ваша учетная запись не найдена, пожалуйста, зарегистрируйтесь!' : "Sizning akkauntingiz topilmadi, ro'yxatdan o'ting!",
  successfulylogined : lang == 'en' ? 'You  are successfuly logged!' : lang =='ru' ? 'Вы успешно авторизованы!' : 'Muvofaqqiyatli tizimga kirdingiz!'
}




export const registerPage = {
  register : lang == 'en' ? 'Register' : lang=='ru' ? 'Регистр' : "Roʻyxatdan oʻtish",
  enteryouremail : lang =='en' ? 'Enter your email' : lang =='ru' ? 'Введите ваше email' : "Emailingzni kiriting",
  enteryourname : lang =='en' ? 'Enter your name' : lang =='ru' ? 'Введите ваше имя' : "Ismingizni kiriting",
  enteryourphone : lang =='en' ? 'Enter your phone number' : lang =='ru' ? 'Введите свой номер телефона' : "Telefon raqamingizni kiriting",
  enteryourwebsite : lang =='en' ? 'Enter your website' : lang =='ru' ? 'Введите свой веб-сайт' : "Websaytingzni kiriting",
  uploadphoto : lang == 'en' ? 'Upload your photo' : lang == 'ru' ? 'Загрузить свое фото' : 'Rasmingizni yuklang',
  requiredNameAndPhone : lang == 'en' ? 'phone and username are required!' : lang == 'ru' ? 'телефон и имя обязательны!' : 'Ism va telefon raqam talab qilinadi!',
  invalidemail : lang == 'en' ? 'Invalid email!' : lang == 'ru' ? 'Неверный email' : "Noto'g'ri email!",
  successfulyregistered : lang == 'en' ? 'You have successfully registered!' : lang == 'ru' ? 'Вы успешно зарегистрировались!' : "Movofaqiyatli ro'yxatdan o'tdingiz!",
  erroroccured : lang ==  'en' ? 'Error occured!' : lang == 'ru' ? 'Произошла ошибка!' : "Xatolik yuz berdi!",
  doyouhaveanaccount : lang ==  'en' ? 'Do you have an account' : lang == 'ru' ? 'У тебя есть аккаунт' : "Akkauntingiz bormi",
  invalidmp4 : lang ==  'en' ? 'You can\'nt upload mp4 file' : lang == 'ru' ? 'Вы не можете загрузить файл mp4' : "mp4 file yuklay olmaysiz",
  invalidfile : lang ==  'en' ? 'You can upload only image file' : lang == 'ru' ? 'Вы можете загрузить только файл изображения' : "Faqat rasm yuklay olasiz",
  imageuploaded : lang ==  'en' ? 'Image uploaded' : lang == 'ru' ? 'Изображение загружено' : "Rasm yuklandi",
}

export const  erroroccured = lang ==  'en' ? 'Error occured!' : lang == 'ru' ? 'Произошла ошибка!' : "Xatolik yuz berdi!"
 
export const checkOutPageDatas = {
  setorder : lang == 'en' ? "Set order" : lang == 'ru' ? "Оформить заказ" : "Buyurtma berish",
  personalInformation : lang=='en' ? 'Personal Information' : lang == 'ru' ? 'Личные данные' : 'Shaxsiy ma\'lumotlarim',
  deliveryaddress  : lang=='en' ? 'Delivery address' : lang == 'ru' ? 'Адрес доставки' : 'Yetkazish manzili',
  address : lang == 'en' ? 'Address' : lang == 'ru' ? 'Адрес' : 'Manzil',
  comment : lang == 'en' ? 'Comment' : lang == 'ru' ? 'комментария' : 'Izoh',
  payment : lang == 'en' ? 'Type of payment' : lang == 'ru' ? 'Тип оплаты' : "To'lov turi",
  options : [
    {type : 'spot', text : 'Наличный'}, 
    {type : 'payme', text : 'Payme'},
  ],
  total : lang =='en' ? 'Total' : lang =='ru' ? 'Итого' : 'To\'plam',
  orderPrice : lang == 'en' ? 'Order price' : lang == 'ru' ? 'Стоимость заказа' : 'Buyurtma narxi',
  deliveryPrice : lang == 'en' ? 'Delivery price' : lang == 'ru' ? 'Стоимость доставки' : 'Yetkazish narxi',
  totalPrice : lang == 'en' ? 'Total price' : lang == 'ru' ? 'Общая сумма' : 'Umumiy narx',
  acccept : lang == 'en' ? 'Accept' : lang == 'ru' ? 'Подтвердить' :'Qabul qilish',
  requiredNameAndAddressAndPhone : lang == 'en' ? 'Phone, Name, Address are required' : lang == 'ru' ? 'Телефон, Имя, Адрес обязательны' : 'Telefon, Ism, Manzil talab qilinadi',
  successCheckouted : lang == 'en' ? 'Order sent successfully!' :  lang == 'ru' ? 'Заказ успешно отправлен!' : 'Buyurtma muvafaqqiyatli yuborildi!'
} 





export const FlowerByIdDatas = {
  buyNow : lang == 'en' ? 'Buy now' : lang == 'ru' ? 'купить сейчас' : "Hoziroq xarid qilish"
}

export const notFoundFlowers = lang == 'en' ? 'Not Found Flowers' : lang == 'ru' ? 'Не найденные цветы' : 'Gullar topilmadi'
export const notFoundComments = lang == 'en' ? 'Not Found Comments' : lang == 'ru' ? 'Не найдено комментариев' : 'Izohlar topilmadi'
export const notFoundBlogs = lang == 'en' ? 'Not Found Blogs' : lang == 'ru' ? 'Не найдено блоги' : 'Идщпдфк topilmadi'
export const CommentsTitle = lang == 'en' ? 'Comments' : lang == 'ru' ? 'Комментарии' : 'Izohlar'
export const successfulyAddedComment = lang == 'en' ? 'Comment added successfully' : lang=='ru' ? 'Комментарий успешно добавлен' : 'Izoh muvofaqqiyatli qo\'shildi'
export const successfulyUpdatedComment = lang == 'en' ? 'Comment updated successfully' : lang=='ru' ? 'Комментарий успешно изменен' : "Izoh muvofaqqiyatli o'zgartirildi"
export const successfulyDeletedComment = lang == 'en' ? 'Comment deleted successfully' : lang=='ru' ? 'Комментарий успешно удален' : "Izoh muvofaqqiyatli o'chirildi"
export const enterYourComment = lang == 'en' ? 'Enter your comment' : lang=='ru' ? 'Введите свой комментарий' : "Izohingizni kiriting"
export const saveText = lang == 'en' ? 'Save' : lang=='ru' ? 'Сохранять' : "Saqlash"
export const sendText = lang == 'en' ? 'Send' : lang=='ru' ? 'Отправлять' : "yuborish"

export const column = lang == 'en' ? 'column' : lang =='ru' ? 'столбец' : 'ustun'
export const allText = lang == 'en' ? "all" : lang =='ru' ? 'Все' : 'Barchasi'
export const byAdmin = lang== 'en' ? 'By admin' : lang == 'ru' ? 'От администратора' : 'Admin tomonidan'
export const amazingFlowerArrangment = lang == 'en'  ? "amazing flower arrangment to give as a present" : lang == 'ru' ? 'замечательная цветочная композиция для подарка' : "sovg'a sifatida berish uchun ajoyib gul aranjirovkasi"
export const cancel = lang == 'en' ? 'Cancel' : lang == 'ru' ? 'Отмена' : 'Bekor qilish'
export const updateText = lang == 'en' ? 'Update' : lang == 'ru' ? 'Обновлять' : 'Yangilash'
export const updateImage = lang == 'en' ? 'Update image' : lang == 'ru' ? 'Обновление изображения' : 'Rasm yangilash'
export const successfulyupdated = lang == 'en' ? 'Successfuly updated' : lang == 'ru' ? 'Успешно обновлено' : 'Muvofaqqiyatli yangilandi'
export const searchproducts = lang == 'en' ? 'Search Products...' : lang == 'ru' ? 'Поиск продуктов...' : 'Mahsulotlarni qidirish...'
export const showing = lang == 'en' ? 'Showing' : lang == 'ru' ? 'Показывая' : "Ko'rsatish"
