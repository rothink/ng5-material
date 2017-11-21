import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatIconModule, MatSidenavModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatToolbarModule} from '@angular/material';

@NgModule({
    imports : [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatProgressSpinnerModule, 
        MatCardModule,
        MatMenuModule,
        MatToolbarModule
    ],
    exports : [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatProgressSpinnerModule, 
        MatCardModule,
        MatMenuModule,
        MatToolbarModule
    ]
})
export class MaterialModule {}