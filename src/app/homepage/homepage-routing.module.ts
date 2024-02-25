import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage.component";
import { Specialmovie1Component } from "./specialmovie1/specialmovie1.component";
import { Specialmovie2Component } from "./specialmovie2/specialmovie2.component";
import { Specialmovie3Component } from "./specialmovie3/specialmovie3.component";

const routes: Routes = [
    {
      path: 'homepage', component: HomepageComponent, children: [
        {path:'specialmovie1',component:Specialmovie1Component},
        {path:'specialmovie2',component:Specialmovie2Component},
        {path:'specialmovie3',component:Specialmovie3Component}
      ]
    }
  ];
  export const HomepageRoutingModule = RouterModule.forChild(routes);