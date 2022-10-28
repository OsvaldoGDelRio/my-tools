import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent implements OnInit {


  constructor(private sanitize: DomSanitizer, private http: HttpClient, private clipboardApi: ClipboardService) {}

  ngOnInit(): void {    
  }

   dataUrl: any = this.sanitize.sanitize(
    SecurityContext.RESOURCE_URL,
    this.sanitize.bypassSecurityTrustResourceUrl(
      'https://osvaldogdelrio.dev/'
    )
  );
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
 }

  superHTML: any = "";
  url: any = null;
  schemas: any = null;
  number: number = 0;
  nothing: boolean = false;
  html: any = null;

  getHTMLData(){
    this.schemas = null;
    this.nothing = false;
    const body = { 'url': this.url };
    let doc: any = "";
    this.http.post<any>('https://osvaldogdelrio.dev/scraping.php', JSON.stringify(body), this.httpOptions).subscribe(( response => {
    
    this.superHTML = response.result;
      const parser = new DOMParser();
      doc = parser.parseFromString(this.superHTML, "text/html");
      this.html = doc.querySelector(':root');
      if(this.html != null){
        let link = doc.querySelector('script[type="application/ld+json"]');
        if(link != null){
          this.schemas = JSON.parse(link.innerText);
          this.number = Object.keys(this.schemas['@graph']).length;
        } else {
          this.nothing = true;
        }
      }
    }))
  }
  


  

}
