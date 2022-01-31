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
public abstract class Producto {
    private String nombrePro;
    private double precio;
    private boolean linea;
    
    public Producto(String nombrePro, double precio, boolean linea){
        this.nombrePro = nombrePro;
        this.precio = precio;
        this.linea = linea;
        
    }

    public String getNombrePro() {
        return nombrePro;
    }

    public void setNombrePro(String nombrePro) {
        this.nombrePro = nombrePro;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public boolean isLinea() {
        return linea;
    }

    public void setLinea(boolean linea) {
        this.linea = linea;
    }
   

    
    public abstract String idProducto(); 
}
