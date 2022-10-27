import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-localbusiness',
  templateUrl: './localbusiness.component.html',
  styleUrls: ['./localbusiness.component.css']
})
export class LocalbusinessComponent implements OnInit {

  constructor(private fb: FormBuilder, private clipboardApi: ClipboardService) { }

    public business: any[] = [{
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      name: '',
      url: '',
      description: '',
      image: '',
      telephone: '',
      priceRange: '',
      "address": {}
    }];

    public adress: any[] = [{  
      "@type": "PostalAddress",
      streetAddress: '',
      addressLocality: '',
      addressRegion: '',
      postalCode: '',
      addressCountry: "USA"
    }];
    
    jsonSchema: any = {};
    
    form: any = [];

    public qaItem: any[] = [];

    ngOnInit(): void {
      this.updateProfile();
    }
  
    updateProfile() {
      this.jsonSchema = '';
      this.business[0].address = this.adress[0];
      this.jsonSchema = this.business[0];
    }
  
    copySCHEMA() {
      this.clipboardApi.copyFromContent(JSON.stringify(this.jsonSchema));
    }
  
    copySCHEMATAG() {
      this.clipboardApi.copyFromContent('<script type="application/ld+json">' + JSON.stringify(this.jsonSchema) + '</script>' );
    }
  
  }