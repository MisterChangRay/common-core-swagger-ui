import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import JSONFormatter from 'json-formatter-js'

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html'
})
export class MainComponent {
	api:any = {};
	tagId:Number = 0;
  popWindowId = 0;
  voObjs;
  objDefines = {};
  @ViewChild('objDefined') objDefinedContainer: ElementRef

  constructor() {
  }

  //解析定义类的名称
  getDefinName(str) {
    return str.replace(/^#.*\//, "");
  }

  //切换标签页
  showTag(tagId:Number) {
  	this.tagId = tagId;
  }

  ngOnInit() {
    
  }

  //显示API详情
  showApiDescription(apiInfo) {
  	this.api = apiInfo.api || {};
    this.voObjs = apiInfo.voObjs;
  }
 

  //参数列表中，如果参数为对象点击查看参数对象详情
  showObj(objName) {
    if(!objName || !objName.voObjName) return;

    objName = objName.voObjName;
    this.popWindowId = 1;

    this.objDefines = this.voObjs[this.getDefinName(objName)] || {};

    let el = this.objDefinedContainer.nativeElement 
    el.innerHTML = "";
    const formatter = new JSONFormatter(this.objDefines.properties);

    el.appendChild(formatter.render());
  } 




  parseParam(obj) {
    let res = {
      type : 1, //1普通文本 2A标签
      text : ""
    };
      //处理普通数组参数,基本类型
    if('array'.toLocaleLowerCase() == obj.type && obj.items) {
        if(obj.items.type) {
          res.text = obj.type + "<" + obj.items.type + ">";
        } else if(obj.items && obj.items.$ref) {  //处理对象数组参数
          obj.schema = {
            $ref : obj.items.$ref
          }
          res.type : 2;
          res.voObjName = obj.schema.$ref;
          res.text = obj.type + "<" + this.getDefinName(obj.schema.$ref)+ ">";
        }
    } else if(obj.schema && this.getDefinName(obj.schema.$ref)) {  //处理普通对象参数
        res.type : 2;
        res.voObjName = obj.schema.$ref;
        res.text = this.getDefinName(obj.schema.$ref);

    }  else { //普通数据类型
        res.text = obj.type;
    } 
    return res;
  }

    

  close() {
    this.popWindowId = 0;
  }




 
}
