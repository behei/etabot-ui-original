import { Component, OnInit } from '@angular/core';
import { TermsConditionsFullComponent } from '../register-page/terms-conditions-full/terms-conditions-full.component';

@Component({
  selector: 'app-tospp',
  templateUrl: './tospp.component.html',
  styleUrls: ['./tospp.component.css']
})
export class TosppComponent implements OnInit {
  tospp_text: string;

  constructor() {

  }

  ngOnInit() {
      const tcfc_obj = new TermsConditionsFullComponent(null, null);
      this.tospp_text = tcfc_obj.tos_pp_text;
        console.log(this.tospp_text);

  }

}
