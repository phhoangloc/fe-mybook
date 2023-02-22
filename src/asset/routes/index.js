
import { Home } from "../../layout/home"
import { Admin } from "../../layout/admin"
import { Route, Switch } from "react-router-dom"
import { HomePage } from "../../layout/home/home"
import { Login } from "../../layout/home/user/login"
import { Book } from "../../layout/home/book"
const routes=[
    {
        path:"/admin",
        component:<Admin/>
    },
    {
        path:"/",
        component:<Home/>
    },

]
const homeroutes=[
    {
        path:"/user/login",
        component:<Login/>
    },
    {
        path:"/book",
        component:<Book/>
    },
    {
        path:"/",
        component:<HomePage/>
    }

]

const allRoutes= routes.map((item,index)=><Route key={index} path={item.path} component={()=>item.component}/>)

const SwitchCustomAllRoutes=
<Switch>
    {allRoutes}
</Switch>

const HomeRoutes= homeroutes.map((item,index)=><Route key={index} path={item.path} component={()=>item.component}/>)

const SwitchCustomHomeRoutes=
<Switch>
    {HomeRoutes}
</Switch>


export {SwitchCustomAllRoutes,SwitchCustomHomeRoutes}