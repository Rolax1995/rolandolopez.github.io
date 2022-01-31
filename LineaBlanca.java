/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package parcial2;

/**
 *
 * @author Rolax
 */
public class LineaBlanca extends Producto{
    private String codProducto; 
    private int cantidad;
    
    public LineaBlanca (String codProducto, int cantidad, String nombrePro, double precio, boolean linea){
     super(nombrePro, precio, linea);
     this.cantidad = cantidad;
     this.codProducto = codProducto;
    }

    public String getCodProducto() {
        return codProducto;
    }

    public void setCodProducto(String codProducto) {
        this.codProducto = codProducto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    
    @Override
 public String toString(){
        return "Producto{"+" codigo: "+ codProducto+", nombre-"+this.getNombrePro()+", cantidad "+cantidad+", linea "+this.isLinea()+" precio: "+this.getPrecio()+"}";
                
    }
    @Override
    public String idProducto(){
        return "Nombre producto: " + this.getNombrePro()+" precio : "+this.getPrecio()+ " cantidad "+cantidad+" codigo "+codProducto+" Linea "+this.isLinea();     
    }
}
