import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatIconModule, MatSidenavModule, MatInputModule, MatProgressSpinnerModule, MatCardModule} from '@angular/material';

@NgModule({
    imports : [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatProgressSpinnerModule, 
        MatCardModule
    ],
    exports : [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatProgressSpinnerModule, 
        MatCardModule
    ]
})
export class MaterialModule {}