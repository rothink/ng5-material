import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatInputModule, 
    MatProgressSpinnerModule,
    MatCardModule, 
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
} from '@angular/material';

@NgModule({
    imports : [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatProgressSpinnerModule, 
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatCheckboxModule
    ],
    exports : [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatProgressSpinnerModule, 
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}