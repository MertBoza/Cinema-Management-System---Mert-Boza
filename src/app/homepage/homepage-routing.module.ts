import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./homepage.component";

const routes: Routes = [
    {
      path: 'homepage', component: HomepageComponent, children: []
    }
  ];
  export const HomepageRoutingModule = RouterModule.forChild(routes);