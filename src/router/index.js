import { createRouter, createWebHashHistory} from "vue-router";    
 const routes=[ {                                                  
    path:'/',                                                 
    name:'Home',                                              
    component: ()=> import ("/src/router/views/HomePage.vue")       
},{                                                  
    path:'/card',                                                 
    name:'Card',                                              
    component: ()=> import ("/src/router/views/CardPage.vue")       
},{                                                  
    path:'/menu',                                                 
    name:'Menu',                                              
    component: ()=> import ("/src/router/views/MenuPage.vue")       
}]                                                            
 const router =createRouter({                                      
     history:createWebHashHistory(),                               
     routes,                                                       
 })                                                                
 export default router; 