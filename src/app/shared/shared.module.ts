import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule,MatSidenavModule,MatButtonModule,MatIconModule,MatListModule,MatMenuModule,MatFormFieldModule,MatExpansionModule} from '@angular/material';

@NgModule({
    imports:[
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatFormFieldModule,
        MatExpansionModule
    ],
    exports:[
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatFormFieldModule,
        MatExpansionModule
    ]

})

export class SharedModule{

}