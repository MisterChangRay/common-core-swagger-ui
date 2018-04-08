import { Component, Input, EventEmitter, Output,Host,Inject,forwardRef } from '@angular/core';
import { ApiDocService } from '../common/apiService';

@Component({
  selector: 'sider-component',
  templateUrl: './sider.component.html'
})
export class SiderComponent {
	@Output() showApiEvent = new EventEmitter();
	constructor(private apiDocService: ApiDocService) { }
	apis = []; //侧边栏数据
	selected = {index : 0};
	searchKey = '';
	apiInfo = {}; //API详情shuju

	//在main.component中显示API详情
	showApi(api) {
		this.apiInfo = this.apiInfo || {};
		this.apiInfo.api = api;
		this.showApiEvent.emit(this.apiInfo);
	}

	//判断当前选中是否为选中项目
	isSelected(index) {
		return index == this.selected.index || this.searchKey;
	}

	//设置选中项为当前选中项目
	selectIndex(index) {
		this.selected.index = index;
		console.log(this.selected)
	}

	 ngOnInit() {   
	    this.apiDocService.getApis().then(res => {
	      this.apis = this.apiDocService.parse(res);   
	      this.apiInfo = {
	      	apis : this.apis,
	      	voObjs : res.definitions
	      }
	    });   

	  }  

 
}
