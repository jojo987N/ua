import {initializeApp} from 'firebase/app'
import {addDoc, getFirestore, collection, getDocs, doc, deleteDoc, orderBy, query, limit,
where, onSnapshot, serverTimestamp, updateDoc, Timestamp} from 'firebase/firestore'
// import { users } from './datatablesource';

import { getAuth } from 'firebase/auth';


 const firebaseConfig = {

    // apiKey: "AIzaSyBKG5-vG_pBdRdKHX30UYUF9_F7SOt8Co4",
  
    // authDomain: "uber-eats-a4c19.firebaseapp.com",
  
    // projectId: "uber-eats-a4c19",
  
    // storageBucket: "uber-eats-a4c19.appspot.com",
  
    // messagingSenderId: "976827322571",
  
    // appId: "1:976827322571:web:8ba517048bb9928f938b4e"

    apiKey: "AIzaSyDrKqjM-fKGWBqj0-wpOOrIbeVlViEW-3c",
    authDomain: "good-food-c84d4.firebaseapp.com",
    projectId: "good-food-c84d4",
    storageBucket: "good-food-c84d4.appspot.com",
    messagingSenderId: "716731554402",
    appId: "1:716731554402:web:bc8a1748f6cdd6885e8f3b",
    measurementId: "G-VLK10R4D2P"
  
  };


  export const firebaseApp = initializeApp(firebaseConfig);

  export const auth = getAuth(firebaseApp)

  

  export const db = getFirestore()

  export const restaurantsCol = collection(db, 'restaurants')
  export const categoriesCol = collection(db, 'categories')

  export const ordersCol = collection(db, 'orders')

  export const usersCol = collection(db, 'users')
  

  export const getRestaurantsFromFirebase = () => {

    const restos = []
  
    return getDocs(restaurantsCol)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
  
         // restaurants.push(doc.data())
        
         if(doc)
         restos.push({
           restaurantId: doc.id,
           ...doc.data()
         })


        })
        return restos
      })
      //.then(()=> setRestaurantData(restaurants))
  }


  export const getOrders = (setOrders)=>{
    
    const orders = []
    const unsuscribe = onSnapshot(ordersCol, (snapshot)=>{

      snapshot.docs.forEach((doc)=>{
         
        //if(doc.data().createdAt && doc.data().status === 'pending'){

      //console.log(doc.data().orderId)
      // console.log("eette")
       orders.push(doc.data())
       // }


      })
       // console.log(orders)
       setOrders(orders)
    })

  }

 // getOrders()

 export const getOrdersFromFirebase = ()=>{

  const orders=[]

 // const q= query(ordersCol, orderBy('createdAt', 'desc'), limit(5))

  return getDocs(ordersCol).then(snapshot=>{

     snapshot.docs.forEach((doc) => {

       // console.log(doc.data().createdAt)
        orders.push({...doc.data(), id: doc.id})
      })
      return orders
  })
 }

 export const getOrdersFromFirebaseQuery = ()=>{

  const orders=[]

 //const q= query(ordersCol, orderBy('createdAt', 'desc'), limit(5))

  return getDocs(ordersCol).then(snapshot=>{

     snapshot.docs.forEach((doc) => {

       // console.log(doc.data().createdAt)
        orders.push({...doc.data(), id: doc.id})
      })
      return orders
  })
 }



// getOrdersFromFirebase().then(orders => console.log(orders))

  //console.log('bonjour')

export const productsCol = collection(db, 'products')

 export const getFoods = ()=>{

  const foods=[]
  
  const q= query(productsCol, orderBy('createdAt', 'desc'))

  return getDocs(q).then(snapshot=>{

     snapshot.docs.forEach((doc) => {

       // console.log(doc.data().createdAt)
        foods.push({...doc.data(), id: doc.id })

      })

      return foods

  })

 }

 //getFoods()

  

 const addProducts = () => {

  getDocs(restaurantsCol)
    .then(snapshot => snapshot.docs.forEach((doc) => {

      doc.data().dishes.forEach((dishe) => {
         
        if('name' in dishe)
        addDoc(productsCol, {
          restaurantID: doc.id,
          ...dishe ,
          createdAt: serverTimestamp()      
        }).then(()=>console.log("ADDED"))

      })

    }))
}

//addProducts()

export const addProduct = (name, description, price) => {

  return addDoc(productsCol, {
    restaurantID: auth.currentUser?.uid,
    name,
    description,
    price,
    createdAt: serverTimestamp()      
  }) 
}


export const getRestaurantById = (uid)=>{

  const q= query(restaurantsCol, where('managerId', '==', uid))

  return getDocs(q).then((snapshot) => {

    if(snapshot.docs[0])
    return {...snapshot.docs[0].data(), restaurantId: snapshot.docs[0].id}
    
  })
   
}


export const updateOrder = (order_Id, status, deliveryTime)=>{
  //0AiZlUQoHPIgS91AppRp

  //READY_FOR_PICKUP
  //const docRef = doc(db, 'orders', "0AiZlUQoHPIgS91AppRp")
   
  const docRef = doc(db, 'orders', order_Id)

  updateDoc(docRef, {
     
    status: status,
    deliveryTime: deliveryTime
  })
  .then(()=> console.log('good'))

}

export const updateProduct = (product_id, image)=>{

  const docRef = doc(db, 'products', product_id)

  updateDoc(docRef, {
     
    image: image,
    
  })
  .then(()=> console.log('good'))
}

const getOrder = ()=>{
  getDocs(ordersCol)
  .then(snapshot => {
    console.log(snapshot.docs[0].data())
  })
}


export const getCategoriesTest = () => {

  const categories = []

  return getDocs(restaurantsCol)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {

        //console.log(doc.data().categories)
        doc.data().categories.forEach(categorie =>{
          console.log(categorie.title)
         categories.push(categorie.title)
          //console.log(snapshot.docs[Math.floor(Math.random()*7)].data().image_url)

          // categories.push({
          //   restaurantId: doc.id,
          //   name: categorie.title,
          //   image: snapshot.docs[Math.floor(Math.random()*7)].data().image_url
   
          // })


          // addDoc(categoriesCol, {
          //   restaurantId: doc.id,
          //   name: categorie.title,
          //   image: snapshot.docs[Math.floor(Math.random()*7)].data().image_url
   
          // }) 


        })
        
      //  categories.push({
      //    restaurantId: doc.id,
      //    name: categorie.title,

      //  })

      })
      return categories
    })
    //.then(()=> setRestaurantData(restaurants))
}

 

//getCategoriesTest()

// Populate Foods with categories

// getFoods().then(foods => {

//   foods.forEach(food => {

//     getDocs(categoriesCol)
//       .then(snapshot => {

//         console.log(typeof snapshot.docs.map(doc => doc.id)[Math.floor(Math.random() * 15)])
//         updateDoc(doc(db, 'products', food.id), {

//           categorieId: snapshot.docs.map(doc => doc.id)[Math.floor(Math.random()*15)],

//         })
//         .then(()=> console.log('good'))

//       })

//   })


// })

export const getCategories = ()=>{

  const categories=[]
  
  return getDocs(categoriesCol).then(snapshot=>{

     snapshot.docs.forEach((doc) => {

       // console.log(doc.data().createdAt)
       categories.push({...doc.data(), id: doc.id })

      })

      return categories

  })

 }

//  const addUsers = () => {

   
//       users.forEach(user => {

//         addDoc(usersCol, user).then(()=>console.log("ADDED"))
//       }) 
// }
//addUsers()

export const getUsersFromFirebase = () => {

  const users = []

  return getDocs(usersCol)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {

       // restaurants.push(doc.data())
      
       users.push({
         userId: doc.id,
         ...doc.data()
       })

      })
      return users
    })
    //.then(()=> setRestaurantData(restaurants))
}


export const getUsersRoleFromFirebase = () => {

  const users = []

  const q= query(usersCol, where('Role', '==', "admin"))
  return getDocs(usersCol)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {

       // restaurants.push(doc.data())
      
       users.push({
         userId: doc.id,
         ...doc.data()
       })

      })
      return users
    })
    //.then(()=> setRestaurantData(restaurants))
}


export const updateUsersFromFirebase = () => {

  return getDocs(usersCol)
    .then((snapshot) => {
      snapshot.docs.forEach((docc) => {
     
       updateDoc(doc(db, 'users', docc.id), {
        Status: "active",
      })
      .then(()=> console.log('good'))

      })
       
    })
    //.then(()=> setRestaurantData(restaurants))
}
//updateUsersFromFirebase()

export const updateDriversFromFirebase = () => {

  const q= query(usersCol, where('Role', '==', "driver"))

  return getDocs(q)
    .then((snapshot) => {
      snapshot.docs.forEach((docc) => {
     
       updateDoc(doc(db, 'users', docc.id), {
        driverStatus: ["online", "offline"][Math.floor(Math.random()*2)],
      })
      .then(()=> console.log('good'))

      })
       
    })
    //.then(()=> setRestaurantData(restaurants))
}

//updateDriversFromFirebase()

export const updateOrdersFromFirebase = ()=>{

  // const q= query(ordersCol, orderBy('createdAt', 'desc'), limit(5))

  return getDocs(ordersCol).then(snapshot=>{

     snapshot.docs.forEach((docc) => {

       // orders.push({...doc.data(), id: doc.id})

        updateDoc(doc(db, 'orders', docc.id), {
          orderType: ["pickup", "delivery"][Math.floor(Math.random()*2)],
        })
        .then(()=> console.log('good'))


      })
       
  })
 }

 //updateOrdersFromFirebase()

 export const getEarnings = ()=>{

   return getOrdersFromFirebase()
   .then(orders => {

    // console.log(orders.filter(order => order.Restaurant.name === "Orange & Seafood")
    // //.length
    // .map(order => (
    //   {
    //     name: order.Restaurant.name, 
    //     cost: order.User.items.reduce((a,v)=> a + v.price, 0)
      
      
    //   }
      
    //   ))
    // //[0].User.items.reduce((a,v)=> a + v.price, 0)
    // )
     
   return orders.reduce((a, v, i)=>{

      // console.log(a, i)

    a[v.Restaurant.name] = (a[v.Restaurant.name] || 0 ) + v.User.items.reduce((a,v)=> a + v.price, 0) 
    
    return a

   },{})

    

  }

   )}

    // getEarnings().then(restaurantsEarnings => {
    //   console.log(Object.keys(restaurantsEarnings).map((restaurant, index) => ({id: index, restaurant:restaurant, earnings:restaurantsEarnings[restaurant]}) ))
    // })

    // export const couponsCol = collection(db, 'coupons')

    // export const addCoupons = (coupons)=>{

    //   restaurants.forEach((restaurant)=>{
    //     addDoc(restaurantsCol, restaurant)
    //     .then(()=>console.log("ajouté"))
    //    })
    // }

     // A supprimé

  //    function makeid(length) {
  //     var result           = '';
  //     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //     var charactersLength = characters.length;
  //     for ( var i = 0; i < length; i++ ) {
  //       result += characters.charAt(Math.floor(Math.random() * 
  //  charactersLength));
  //    }
  //    return result;
  // }
  
  // console.log(makeid(15));




 
