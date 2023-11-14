import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../src/pages/Home";
import Sobre from "../src/pages/Sobre";
import Contato from "../src/pages/Contato";

const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  );
};

export default Router;
