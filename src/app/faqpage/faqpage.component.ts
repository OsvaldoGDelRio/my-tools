  import { Component, OnInit } from '@angular/core';
  import { FormArray, FormBuilder, Validators } from '@angular/forms';
  import { ClipboardService } from 'ngx-clipboard';
  
  @Component({
    selector: 'app-faqpage',
    templateUrl: './faqpage.component.html',
    styleUrls: ['./faqpage.component.css']
  })
  export class FaqpageComponent implements OnInit {
  
    constructor(private fb: FormBuilder, private clipboardApi: ClipboardService) { }
  
    private jsonLd: any = {};
    
    setData() {
      this.jsonLd = this.getObject();
    }
  
    getObject() {
      let object = {
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
        ]
      };
      
      return object;
    }
  
    getJsonObj(){
      return this.jsonLd;
    }
  
    schemaForm = this.fb.group({
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });
  
    get aliases() {
      return this.schemaForm.get('aliases') as FormArray;
    }
  
    listOrder: any = {};
    
    jsonSchema: any = {};
  
    qaItem = {
      "@type": "Question",
      "name": "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ""
      }
      };

    ngOnInit(): void {
      this.setData();
      this.jsonSchema = this.getJsonObj();
    }
  
    updateProfile() {
   
      this.aliases.value.forEach(<any> {
          
      });

      this.jsonSchema.mainEntity.push();
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