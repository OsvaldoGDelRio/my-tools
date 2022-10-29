import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
[x: string]: any;

  constructor(private fb: FormBuilder, private clipboardApi: ClipboardService) { }

    /*
    {
    "@context":"http://schema.org/",
    "@type":"ContactPage",
    "image":"https://www.rainwaterlv.com/wp-content/themes/rainwaterlv/images/logo.png",
		"name":"Rain of Las Vegas",
    "mainEntityOfPage":{
      "@type":"WebPage",
      "@id":"https://www.rainwaterlv.com/contact/"
      },
      "headline":"Contact",
      "description":"Contact Rain Water Conditioners. Feel free to call the office during business hours for free estimates or more information. You may also stop by our showroom during regular business hours for more information. After hours please use the form below. Rain of Las Vegas, 3448 S Decatur Blvd, Las Vegas, NV 89102, (702)213-9474, Monday 7:00 am – 4:30 pm, Tuesday 7:00 am – 4:30 pm, Wednesday 7:00 am – 4:30 pm, Thursday 7:00 am – 4:30 pm, Friday 7:00 am – 4:00 pm, Saturday 8:00 am – 1:00 pm, Sunday Appointment Only, Service Calls MON – SAT, 24 HOUR EMERGENCY SERVICE.",
      "publisher":{
        "@type":"organization",
        "name":"Rain of Las Vegas",
        "url":"https://www.rainwaterlv.com/"
        }
  }
    */

    public business: any[] = [{
      "@context": "http://schema.org",
      "@type": "ContactPage",
        name: '',
        image: '',
        mainEntityOfPage: {}
    }];

    public mainEntity: any[] = [{
      "@type":"WebPage",
        ["@id"]:'',
        headline: '',
        description:'',
        publisher:{}
    }];

    public publisher: any[] = [{  
      "@type":"organization",
        name: '',
        url:''
    }];
    
    jsonSchema: any = {};
    
    form: any = [];

    public qaItem: any[] = [];

    ngOnInit(): void {
      this.updateProfile();
    }
  
    updateProfile() {
      this.jsonSchema = '';
      this.mainEntity[0].publisher = this.publisher[0];
      this.business[0].mainEntityOfPage = this.mainEntity[0];
      this.jsonSchema = this.business[0];
    }
  
    copySCHEMA() {
      this.clipboardApi.copyFromContent(JSON.stringify(this.jsonSchema));
    }
  
    copySCHEMATAG() {
      this.clipboardApi.copyFromContent('<script type="application/ld+json">' + JSON.stringify(this.jsonSchema) + '</script>' );
    }
  
  }