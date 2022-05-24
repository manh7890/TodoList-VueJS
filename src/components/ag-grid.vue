<template>
<div class="grid-container">
<ag-grid-vue
    style="width: 620px; height: 300px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :defaultColDef="defaultColDef"
    :groupMultiAutoColumn="groupMultiAutoColumn"
    :rowGroupPanelShow="rowGroupPanelShow"
  >
  
  </ag-grid-vue>
  
</div>
  <button class="test-btn" v-on:click="test">test</button>
  <button class="test-btn" v-on:click="testUpdateData">testUpdateData</button>
</template>

<script>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
export default {

  name: "Aggrid",
  data() {
    return {
      groupMultiAutoColumn:true,
      columnDefs: null,
      rowData: null,
      rowGroupPanelShow:"always",
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        sortable: true,
        resizable: true,
        
      },

    };
  },
  methods:{
    testUpdateData(){
      let data = {
          
              "fileId": "013NJUP3LTJXV4V4O3WFBK6BOCDHASZCYP",
              "macroInfo": {
                  "module": "Module1",
                  "function": ""
              },
              "updateInfo": {
                  "tab": "DATA",
                  "range": "A2:C4",
                  "data": [
                      [
                          11000,
                          "MHNPN004",
                          "Tháng 11 "
                      ],
                      [
                          300,
                          "MHNPN007",
                          "Tháng 11 "
                      ],
                      [
                          384.561,
                          "MHNPN009",
                          "Tháng 03 "
                      ]
                  ]
              }
         
      };
      let api = "http://localhost/ms-integration/MSIUpdateDataAndRunMacro";
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      };
      fetch(api,options)
      .then(function (response) {
            // console.log(response.json())
            let response2 = response.clone();
            return response2.json();
            })
      .then(response2=>console.log(response2))
      .catch(err=>{
            console.log("Có Lỗi :" + err.message)
            alert("Có Lỗi :" + err.message)
          })
    },
    test(){
      let data = {
        fileID: '013NJUP3LTJXV4V4O3WFBK6BOCDHASZCYP',
        macroInfo:["",""]
      };
      let api = "http://localhost/ms-integration/MSIMacroHandler";
      let options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      };
      fetch(api,options)
      .then(function (response) {
            // console.log(response.json())
            let response2 = response.clone();
            return response2.json();
            })
      .then(response2=>console.log(response2))
      .catch(err=>{
            console.log("Có Lỗi :" + err.message)
            alert("Có Lỗi :" + err.message)
          })
    }
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      { field: "id" ,sortable: true, filter: true ,enableRowGroup:true},
      { field: "text" ,sortable: true, filter: true ,enableRowGroup:true},
      { field: "checkstatus",sortable: true , filter: true,rowGroup:true ,enableRowGroup:true,hide:true},
    ];

    this.rowData = this.$store.state.todoList.data;
  },

};

</script>

<style>
    .test-btn{
      width: 100px;
      height:20px;
      display :block;
          margin: auto;
    }
    .grid-container{
        width: 100%;
        height:80%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
</style>