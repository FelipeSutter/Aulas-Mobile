import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../src/pages/Home";
import Sobre from "../src/pages/Sobre";
import Contato from "../src/pages/Contato";
import CustomDrawer from "../src/components/CustomDrawer";

const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveBackgroundColor: "#00dae5",
        drawerInactiveBackgroundColor: "#f1f1f1",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#000",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Início" }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{ title: "Sobre" }}
      />
      <Drawer.Screen
        name="Contato"
        component={Contato}
        options={{ title: "Contato" }}
      />
    </Drawer.Navigator>
  );
};

export default Router;
