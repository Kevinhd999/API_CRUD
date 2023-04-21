import Product from "../models/productosModel"

export const obtenerProductos = async (req, res) => {
    
    const productos = await Product.findAll()
    res.json(productos)
}

export const obtenerProductoporId =async(req , res) =>{
    
    const producto = await Product.findByPk(req.params.id)
    res.json(producto)
};  

export const crearProducto =async(req , res) =>{
    const crearProducto = await Product.create(req.body);
    res.json ({message:"Proyecto Creado"});
};  

export const actiualizarProductoporId =async(req , res) =>{
    const producto = await Product.findByPk(req.params.id)
    console.log(producto)
    const actiualizarProductoporID = await producto.update(req.body)
    console.log(actiualizarProductoporID)

    res.json('actiualizarProductoporId')
};  

export const eliminarProductoporId =async(req , res) =>{

    const producto = await Product.findByPk(req.params.id)
    await producto.destroy()
    res.json('eliminarProductoporId')
};  


