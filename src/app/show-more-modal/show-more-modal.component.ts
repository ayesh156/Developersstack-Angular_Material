import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-more-modal',
  templateUrl: './show-more-modal.component.html',
  styleUrl: './show-more-modal.component.scss'
})
export class ShowMoreModalComponent {
  constructor(public dialogRef: MatDialogRef<ShowMoreModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
