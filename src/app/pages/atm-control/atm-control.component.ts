import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtmData } from 'src/app/models/AtmData';
import mock from '../../data/atms.json';

@Component({
  selector: 'app-atm-control',
  templateUrl: './atm-control.component.html',
  styleUrls: ['./atm-control.component.scss']
})
export class AtmControlComponent implements OnInit{
  atmObject!: AtmData | null;
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
  ){
  }

  ngOnInit(): void {
    this.activatedroute.queryParamMap.subscribe((params)=>{
      this.atmObject = this.getData( Number(params.get('id')) );
    });
  }

  getData( id: number ): AtmData | null{
    const atmList = [...mock];
    const updatedList = atmList.filter( (obj: AtmData) => obj.id === id);
    return updatedList.length > 0 ? updatedList[0] : null;
  }
}
