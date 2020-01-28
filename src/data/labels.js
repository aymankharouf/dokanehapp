const labels = {
  news: 'آخر الاخبار',
  offers: 'العروض',
  popular: 'اﻻكثر مبيعا',
  registerTitle: 'التسجيل ﻷول مرة',
  name: 'اﻻسم',
  mobile: 'الموبايل',
  password: 'كلمة السر',
  location: 'المنطقة',
  register: 'تسجيل',
  error: 'خطأ',
  noData: 'ﻻ يوجد بيانات',
  search: 'بحث',
  open_order_found: 'هناك طلبية سابقة لم يتم استلامها',
  auth_user_not_found: 'الرجاء التأكد من رقم الموبايل وكلمة المرور',
  auth_email_already_in_use: 'رقم الموبايل مسجل سابقا',
  auth_wrong_password: 'كلمة السر غير صحيحة',
  productOf: 'انتاج',
  orderBy: 'الترتيب حسب',
  new: 'جديد',
  offer: 'عرض',
  confirmOrder: 'اعتماد الطلب',
  basket: 'سلة المشتريات',
  confirm: 'اعتماد',
  orderDetails: 'تفاصيل الطلب',
  addToBasket: 'شراء',
  submit: 'موافق',
  banner: 'تنافس + تشارك = توفير',
  storeName: 'اسم المحل',
  storePlace: 'عنوان المحل',
  price: 'السعر',
  login: 'دخول',
  loginTitle: 'تسجيل دخول',
  relogin: 'عليك تسجيل الدخول أوﻻ',
  invalidPassword: 'كلمة السر غير صحيحة',
  invalidMobile: 'رقم الموبايل غير صحيح',
  mobilePlaceholder: 'رقم الموبايل مبتدئا ب07',
  passwordPlaceholder: 'كلمة السر من اربعة ارقام',
  newUser: 'مستخدم جديد',
  forgetPassword: 'نسيت كلمة السر',
  enterName: 'الرجاء ادخال اﻻسم',
  namePlaceholder: 'من 4-50 حرف',
  invalidName: 'اﻻسم غير صحيح',
  total: 'المجموع',
  fixedFees: 'رسوم الخدمة',
  discount: 'الخصم',
  net: 'الصافي',
  withDelivery: 'خدمة التوصيل',
  deliveryFees: 'رسوم التوصيل',
  enterPrice: 'الرجاء ادخال السعر',
  enterStore: 'الرجاء ادخال اسم المحل',
  invalidPrice: 'الرجاء التأكد من السعر المدخل',
  passwordRequest: 'طلب كلمة السر',
  send: 'ارسال',
  sendMessage: 'تم ارسال طلبك',
  allProducts: 'كل المنتجات',
  myOrders: 'طلباتي',
  inviteFriend: 'دعوة صديق',
  sendSuccess: 'تم الارسال',
  loginSuccess: 'اهلا وسهلا بك',
  registerSuccess: 'شكرا لتسجيلك معنا',
  confirmSuccess: 'تم ارسال الطلب',
  lessPricePlaceholder: 'ادخل سعرا اقل من السعر الحالي',
  pricePlaceholder:' ادخل سعر المنتج',
  logout: 'تسجيل خروج',
  mainPanelTitle: 'الوظائف المساندة',
  sendSuggestion: 'تقديم اقتراح',
  registerStoreOwner: 'انا صاحب محل، أود الاشتراك',
  registerStoreOwnerTitle: 'تسجيل صاحب محل',
  address: 'العنوان',
  notFoundPageTitle: 'الصفحة غير موجودة',
  notFoundPageError: 'حدث خطأ ... الصفحة غير موجودة',
  back: 'رجوع',
  myPrice: 'سعري',
  myPacks: 'منتجاتي',
  invalidOfferEnd: 'الرجاء التأكد من تاريخ انتهاء العرض',
  limitOverFlow: 'لقد تجاوزت الحد المسموح به للطلبات التي هي قيد التسليم',
  changePasswordSuccess: 'تم تغيير كلمة السر',
  changePassword: 'تغيير كلمة السر',
  oldPassword: 'كلمة السر الحالية',
  newPassword: 'كلمة السر الجديدة',
  addToBasketSuccess: 'تمت الاضافة الى السلة',
  alreadyInBasket: 'هذا المنتج موجود في السلة',
  basketIsNotEmpty: 'سلة المشتريات غير فارغة، قم بتفريغها اوﻻ',
  ratings: 'تقييمات المستخدمين',
  contactUsTitle: 'تواصل معنا',
  contactUsText: 'تواصل معنا بشكل مباشر بالاتصال على الرقم',
  facebookPage: 'أو من خلال صفحتنا على الفيسبوك',
  telNo: '0799982800',
  ratingSuccess: 'شكرا لتقييم المنتج، سوف تحصل على خصم في طلبك القادم',
  comment: 'التعليق',
  commentPlaceholder: 'اكتب تعليقا',
  ratingTitle: 'تقييم المنتج',
  commentNote: 'سوف تحصل على خصم خاص لقاء تقييم كل منتج تقوم بشرائه',
  blockedUser: 'نعتذر، لا يمكنك اتمام العملية',
  permission_denied: 'ليس لك صلاحية لاتمام هذه العملية',
  unknownError: 'خدث خطأ، يرجى المحاولة مرة أخرى',
  invalidPeriod: 'الرجاء التأكد من مدة العرض',
  offerDays: 'عرض لمدة(بالأيام)',
  confirmationText: 'هل انت متأكد من تنفيذ العملية؟',
  confirmationTitle: 'تأكيد العملية',
  isOffer: 'عرض؟',
  orderPrice: 'السعر عند الطلب',
  duplicateAlarms: 'لقد ارسلت بلاغا سابقا لنفس هذا المنتج ولم يعتمد بعد',
  deleteSuccess: 'تم الحذف',
  duplicatePasswordRequest: 'لقد ارسلت طلبا سابق بنسيان كلمة السر ولم يعالج بعد',
  quantity: 'الكمية',
  gram: 'غ',
  weightedPricesNote: '*هذا سعر تقديري، السعر يتحدد حسب الوزن الفعلي',
  ExceedPackLimit: 'لا يمكنك طلب كمية اكبر من هذا المنتج في الطلب الواحد',
  urgent: 'مستعجل',
  limitOverFlowNote: 'تجاوز لسقف الطلبات',
  helpPageTitle: 'توضيح',
  close: 'اغلاق',
  remain: 'المتبقي',
  changePriceNote: 'تغير السعر',
  unAvailableNote: 'لم يعد متوفر',
  ExceedPackLimitActiveOrders: 'لا يمكنك طلب كمية اكبر من هذا المنتج الى حين استلام طلبات سابقة لك',
  overPricedNote: 'بسبب ارتفاع الاسعار',
  allOffer: 'كامل العرض',
  status: 'الحالة',
  requested: 'الكمية المطلوبة',
  purchased: 'ما تم شراؤه',
  weight: 'الوزن',
  returned: 'المرتجع',
  currentPrice: 'السعر الحالي',
  offerUpTo: 'عرض حتى تاريخ',
  alternative: 'اسم البديل',
  category: 'الصنف',
  productName: 'اسم المنتج',
  packName: 'العبوة',
  unapprovedOrder: 'يوجد طلب سابق لم يتم اعتماده بعد، يمكنك تعديله',
  duplicateInvitation: 'يوجد دعوة سابقة لهذا الرقم',
  quantityPlaceholder: 'ادخل رقم اكبر من واحد',
  invalidQuantity: 'الرجاء التأكد من الكمية المدخلة',
  noDelivery: 'خدمة التوصيل غير متوفرة لمنطقتك حاليا',
  company: 'شركة',
  globalNotification: 'تنبيه عام',
  specialNotification: 'تنبيه خاص',
  notificationDetails: 'نص التنبيه',
  notifications: 'التنبيهات',
  bestPrice: 'افضل سعر',
  lastPrice: 'السعر آخر مرة',
  lastTime: 'آخر شراء',
  lastQuantity: 'الكمية آخر مرة',
  purchasedPacks: 'مشترياتي',
  otherProducts: 'بدائل اكثر طلبا وافضل تقييما',
  otherPacks: 'عبوات للمنتج ذات قيمة أعلى',
  otherOffers: 'عروض اخرى للمنتج',
  suggestions: 'اقتراحات لبدائل',
  favorites: 'المفضلة',
  inprocess: 'تنفيذ العملية',
  feesDeliveryHelp: 'لمزيد من المعلومات عن اﻻستلام والرسوم...',
  clickHere: 'اضغط هنا',
  advert: 'اعلان',
  unitPrice: 'سعر الوحدة',
  editSuccess: 'تم التعديل',
  duplicateOrderRequest: 'ارسلت سابقا طلب تعديل لطلب المشتريات هذا',
  merge: 'طلب دمج مع الطلب الذي قبله',
  edit: 'تعديل',
  editRequest: 'طلب تعديل',
  cancel: 'الغاء',
  cancelRequest : 'طلب الغاء',
  samePackWithDiffPrice: 'لا يمكن الدمج لوجود نفس المنتج في الطلبين لكن بسعرين مختلفين',
  samePackPurchasedByWeight: 'لا يمكن الدمج لوجود منتج تم شراؤه بالوزن في الطلب السابق',
  diffInDelivery: 'لا يمكن الدمج لاختلاف طريقة التسليم بين الطلبين',
  diffInUrgent: 'لا يمكن الدمج لاختلاف مؤشر الاستعجال بين الطلبين',
  notRead: 'غير مقروء',
  read: 'مقروء',
  followupOrders: 'متابعة الطلبات',
  customerInfo: 'معلومات العميل',
  customerCalls: 'الاتصال بالعميل',
  returnPacks: 'ارجاع مواد',
  deliver: 'تسليم',
  customerDetails: 'معلومات العميل',
  isOldAge: 'كبير السن',
  otherMobile: 'رقم موبايل بديل',
  deliveryInterval: 'فترة التسليم',
  returnOrder: 'ارجاع طلب',
  removeFavoriteSuccess: 'تم الحذف من المفضلة',
  addFavoriteSuccess: 'تم الاضافة للمفضلة',
  itemNotAvailable: 'لم يعد هذا المنتج متوفر',
  oldPrice: 'سابقا',
  newPrice: 'الحالي',
  priceHasChanged: 'حدث تغير في السعر',
  totalPrice: 'السعر الاجمالي',
  changeToNoDelivery: 'الغاء خدمة التوصيل',
  changeToWithDelivery: 'اضافة خدمة التوصيل',
  changeToNoUrgent: 'الغاء صفة الاستعجال',
  changeToUrgent: 'اضافة صفة الاستعجال',
  editOrder: 'تعديل الطلب',
  editBasket: 'تعديل الكميات',
  editBasketRequest: 'طلب تعديل الكميات',
  notifyDebit: 'ابلغني عند تفعيل الخدمة',
  debitRequest: 'الدفع لاحقا'
}

export default labels