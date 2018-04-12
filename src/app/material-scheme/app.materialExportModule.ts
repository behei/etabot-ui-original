import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
		MatButtonModule, 
		MatCheckboxModule,
		//MatInputModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		//MdFormFieldModule,
		MatToolbarModule,
		MatGridListModule,
		MatCardModule,
		MatIconModule,
	} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

import 'hammerjs';


@NgModule({
	declarations: [],
	imports: [
		BrowserAnimationsModule,
		MatButtonModule, 
		MatCheckboxModule,
		MatInputModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		//MdFormFieldModule,
		MatToolbarModule,
		MatGridListModule,
		MatCardModule,
		MatIconModule
		//MdFormFieldModule,
		],
	exports: [
		BrowserAnimationsModule,
		MatButtonModule, 
		MatCheckboxModule,
		MatInputModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		//MdFormFieldModule,
		MatToolbarModule,
		MatGridListModule,
		MatCardModule,
		MatIconModule
		//MdFormFieldModule
		],
	providers: [],
	bootstrap: []
})




export class materialExportModule { }