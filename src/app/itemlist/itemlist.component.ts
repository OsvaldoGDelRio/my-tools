import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  constructor(private fb: FormBuilder, private clipboardApi: ClipboardService) { }

  private jsonLd: any = {};
  
  setData() {
    this.jsonLd = this.getObject();
  }

  getObject() {
    let object = {
      "@context": "http://schema.org",
      "@type": "itemList",
      "itemListElement": [],
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "name": ""
    };
    
    return object;
  }

  getJsonObj(){
    return this.jsonLd;
  }


  schemaForm = this.fb.group({
    name: ['', Validators.required],
    listOrder: ['ItemListOrderDescending'],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.schemaForm.get('aliases') as FormArray;
  }

  listOrder: any = {};
  
  jsonSchema: any = {};

  ngOnInit(): void {
    this.setData();
    this.listOrder = ["ItemListOrderDescending", "ItemListOrderAscending", "ItemListUnordered"];
    this.jsonSchema = this.getJsonObj();
  }

  updateProfile() {
    this.jsonSchema.name = this.schemaForm.value.name;
    this.jsonSchema.itemListElement = this.schemaForm.value.aliases;
    this.jsonSchema.itemListOrder = "https://schema.org/"+this.schemaForm.value.listOrder;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  copySCHEMA() {
    this.updateProfile();
    this.clipboardApi.copyFromContent(JSON.stringify(this.jsonSchema));
  }

  copySCHEMATAG() {
    this.updateProfile();
    this.clipboardApi.copyFromContent('<script type="application/ld+json">' + JSON.stringify(this.jsonSchema) + '</script>' );
  }
  
  deleteItem(i: any){
    this.aliases.removeAt(i);
  }

}