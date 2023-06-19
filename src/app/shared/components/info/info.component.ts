import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Type } from 'src/app/models/DialogType';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit{
  type = Type;
  constructor( 
    private dialogRef: MatDialogRef<InfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { 

    }
    ngOnInit(): void {
      if ( !this.data ){
        this.data = {
          text: '',
          type: Type.Success
        }
      }
    }
}
