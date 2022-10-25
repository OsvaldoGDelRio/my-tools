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

    public questions: any[] = [{
      ques: '',
      answer: ''
    }];
    
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
    
    jsonSchema: any = {};
  
    public qaItem: any[] = [];

    ngOnInit(): void {
      this.setData();
      this.jsonSchema = this.getJsonObj();
    }
  
    updateProfile() {
      this.jsonSchema.mainEntity = [''];
      this.qaItem = [];
      this.questions.forEach(element => {
        this.qaItem.push(
          {
            "@type": "Question",
            "name": element.ques,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": element.answer
            }
          }
        );
      });
    
     this.jsonSchema.mainEntity = this.qaItem;
    }
  
    addAlias() {
      this.questions.push({
        ques: '',
        answer: ''
    })
    }
  
    copySCHEMA() {
      this.clipboardApi.copyFromContent(JSON.stringify(this.jsonSchema));
    }
  
    copySCHEMATAG() {
      this.clipboardApi.copyFromContent('<script type="application/ld+json">' + JSON.stringify(this.jsonSchema) + '</script>' );
    }
    
    deleteItem(i: any){
      this.questions.splice(i);
    }
  
  }