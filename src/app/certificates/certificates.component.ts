import { Component, Renderer2 } from '@angular/core';
import { certificatesData } from './certificate-data';
import { Title } from '@angular/platform-browser';


interface Certificate {
  name: string;
  category: string;
  photo: string;
  date: string;
  description: string;
  googleDriveLink: string;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  constructor(private renderer:Renderer2, private titleService: Title){
    this.renderer.setStyle(document.body, 'background-color', 'white');
    this.titleService.setTitle("Omkar's Certificates")
  }

  filteredCertificates: Certificate[] = certificatesData;


  onCategoryChange(event: Event) {
  const selectedValue = (event.target as HTMLSelectElement).value;
  if (selectedValue === 'all') {
    this.filteredCertificates = certificatesData;
  } else {
    this.filteredCertificates = certificatesData.filter(cert => cert.category === selectedValue);
  }
}
}


