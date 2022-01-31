/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package parcial2;


import java.util.ArrayList;


/**
 *
 * @author Rolax
 */
public class Parcial2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //LineaBlanca productoLb = new LineaBlanca("LB0001",1,"Lavadora",5000,true);
        //Electrodomestico productoEl = new Electrodomestico("EL0001",1,"Televisor",2500,true);
        
       // System.out.println(productoLb.idProducto());
        //System.out.println(productoEl.idProducto());
        Inventario inventario = new Inventario(new ArrayList<LineaBlanca>(), new ArrayList<Electrodomestico>());
        inventario.setVisible(true);
        
      
    
    }
    
}
