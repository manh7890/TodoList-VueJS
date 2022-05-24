import { createApp } from 'vue'
import {createStore}from 'vuex';
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import todoText from "./components/todoText.vue"
import Home from "./components/Home.vue"
import Aggrid from './components/ag-grid.vue'
import 'ag-grid-enterprise'
var Api= 'http://localhost/nana-framework/Task'
// fetch(Api)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function (data){
//         console.log(data)
        const store =createStore({
            state(){
                return {
                    // todoList: data,
                    todoList: [],
                }
            },
            mutations:{
                changeStatusInStore(state,payload){
                    state.todoList.data[payload.index].checkstatus=payload.newStatus
                },
                changeTextInStore(state,payload){
                    state.todoList.data[payload.index].text =payload.text;
                    
                },
                spliceTodoItem(state,payload){
                    state.todoList.data.splice(payload.index, payload.numberSplice);
                },
                changeDataOfTodoList(state,payload){
                    state.todoList=payload;
                },
            }
        })   
        
        const router = createRouter({
            history: createWebHashHistory(),
            routes: [
                { path: '/',name:"Home", component: Home },
                { path: '/todoText/:id',name:"TodoItem",  component: todoText },
                { path: '/Grouping',name:"Aggrid", component: Aggrid },
            ]
        })
        const app = createApp(App)
        app.use(router)
        
        app.use(store)
        app.mount('#app');
        
    // }).catch(function (err){
    //     console.log('có lỗi trong lúc fetch '+err)
    //     const store =createStore({
    //         state(){
    //             return {
    //                 todoList: [],
    //             }
    //         },
            
    //     })   
        
    //     const router = createRouter({
    //         history: createWebHashHistory(),
    //         routes: [
    //             { path: '/', component: Home },
    //             { path: '/todoText/:index', component: todoText, props: true },
    //         ]
    //     })
    //     const app = createApp(App)
    //     app.use(router)
        
    //     app.use(store)
    //     app.mount('#app');
    // })
    
        
    


//chuyển fetch sang Home dể tạo tính đong gói và có thể tái sử dụng componet
//học lại promise và callback(ok)
//todoItem truyền cả item xuống rồi lấy dữ liệu từ item luôn không cần gọi từ store (ok)
//emit viết ở methouds không viết luôn trên template (ok)
//sửa lại phần todorouter bên nanaframework không đê3r tên rõ nữa chỉ để model (vd o day la  todo) (ok)
//chuyển props về object có defaut (ok)
//không sửa trực tiếp dữ liệu mà dùng mutations của vuex (ok)