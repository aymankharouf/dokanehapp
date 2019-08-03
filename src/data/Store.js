import React, { createContext, useReducer, useEffect, useState } from 'react';
import Reducer from './Reducer'
import firebase from './firebase'

export const StoreContext = createContext()

const Store = props => {
  const randomColors = [
    {id: '0', name: 'red'},
    {id: '1', name: 'green'},
    {id: '2', name: 'blue'},
    {id: '3', name: 'pink'},
    {id: '4', name: 'yellow'},
    {id: '5', name: 'orange'},
    {id: '6', name: 'purple'},
    {id: '7', name: 'deeppurple'},
    {id: '8', name: 'lightblue'},
    {id: '9', name: 'teal'},
    {id: '10', name: 'lime'},
    {id: '11', name: 'deeporange'},
    {id: '12', name: 'gray'}
  ]
  const locations = [
    {id: '1', name: 'جبل النزهة'},
    {id: '2', name: 'ضاحية اﻻمير حسن'},
    {id: '3', name: 'عرجان'},
    {id: '4', name: 'جبل الحسين'},
    {id: '5', name: 'مخيم جبل الحسين'}
  ]
  const orderByList = [
    {id: '1', name: 'القيمة'},
    {id: '2', name: 'السعر'},
    {id: '3', name: 'المبيعات'},
    {id: '4', name: 'التقييم'},
    {id: '5', name: 'اﻻحدث'}
  ]
  const units = [
    {id: '1', name: 'حبة'},
    {id: '2', name: 'غرام'},
    {id: '3', name: 'كيلو غرام'}
  ]
  const orderStatus = [
    {id: 1, name: 'قيد التسليم'},
    {id: 2, name: 'تم اﻻستلام'},
    {id: 3, name: 'ملغي'}
  ]  
  const labels = {
    appTitle: 'حريص',
    news: 'آخر الاخبار',
    offers: 'العروض',
    popular: 'اﻻكثر مبيعا',
    registerTitle: 'التسجيل ﻷول مرة',
    name: 'اﻻسم',
    mobile: 'الموبايل',
    password: 'كلمة السر',
    location: 'الموقع',
    register: 'تسجيل',
    error: 'خطأ',
    not_found: 'ﻻ يوجد بيانات',
    search: 'بحث',
    password_placeholder: '4 ارقام',
    name_placeholder: 'من 4-50 حرف',
    mobile_placeholder: 'يجب ان يبدأ ب07',
    open_order_found: 'هناك طلبية سابقة لم يتم استلامها',
    auth_user_not_found: 'الرجاء التأكد من رقم الموبايل وكلمة المرور',
    auth_email_already_in_use: 'لقد سجلت سابقا برقم هذا الموبايل',
    auth_wrong_password: 'كلمة السر غير صحيحة'
  }
  const localData = localStorage.getItem('basket');
  const basket = localData ? JSON.parse(localData) : []
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  let sections = []
  let categories = []
  let trademarks = []
  let countries = []
  let stores = []
  let rating = []
  const initState = {sections, randomColors, categories, locations, countries, units, 
    labels, orderStatus, basket, orders, trademarks, orderByList, stores, rating}
  const [state, dispatch] = useReducer(Reducer, initState)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
      if (user){
        firebase.firestore().collection('orders').where('user', '==', user.uid).onSnapshot(docs => {
          let ordersArray = []
          docs.forEach(doc => {
            ordersArray.push({...doc.data(), id:doc.id})
          })
          setOrders(ordersArray)
        })  
        firebase.firestore().collection('rating').where('user', '==', user.uid).get().then(docs => {
          docs.forEach(doc => {
            rating.push({...doc.data(), id:doc.id})
          })
        })  
      }
    });
    firebase.firestore().collection('sections').get().then(docs => {
      docs.forEach(doc => {
        sections.push({...doc.data(), id:doc.id})
      })
    })  
    firebase.firestore().collection('categories').get().then(docs => {
      docs.forEach(doc => {
        categories.push({...doc.data(), id:doc.id})
      })
    })  
    firebase.firestore().collection('trademarks').get().then(docs => {
      docs.forEach(doc => {
        trademarks.push({...doc.data(), id:doc.id})
      })
    })  
    firebase.firestore().collection('countries').get().then(docs => {
      docs.forEach(doc => {
        countries.push({...doc.data(), id:doc.id})
      })
    })  
    firebase.firestore().collection('stores').get().then(docs => {
      docs.forEach(doc => {
        stores.push({...doc.data(), id:doc.id})
      })
    })  
    firebase.firestore().collection('products').where('status', '==', 1).onSnapshot(docs => {
      let productsArray = []
      docs.forEach(doc => {
        const minPrice = Math.min(...doc.data().stores.map(store => !store.offerEnd || new Date() <= store.offerEnd.toDate() ? store.price : store.oldPrice))
        productsArray.push({...doc.data(), id: doc.id, price: minPrice})
      })
      setProducts(productsArray)
    })
  }, []);
  return (
    <StoreContext.Provider value={{state, user, products, orders, dispatch}}>
      {props.children}
    </StoreContext.Provider>
  );
}
 
export default Store;

