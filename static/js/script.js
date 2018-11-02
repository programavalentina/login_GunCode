
$(document).ready(inicializarElementos);


function acep(){
    var respuesta = confirm ("ELIMINAR REGISTRO?")
    return respuesta;
}
function inicializarElementos(){
    
    $('#tbl_clientes tr').on('click', function(){
        //var dato = $(this).find('td:first').html();
        //$("#myModal").modal('show'); 
        var dato6 = $(this).find('td:nth-child(1)').html();
        $('#txt_nit').val(dato6);
        var dato1 = $(this).find('td:nth-child(2)').html();
        $('#txt_nombres').val(dato1);
        var dato2 = $(this).find('td:nth-child(3)').html();
        $('#txt_apellidos').val(dato2);
        var dato3 = $(this).find('td:nth-child(5)').html();
        $('#txt_telefono').val(dato3);
        var dato4 = $(this).find('td:nth-child(6)').html();
        $('#txt_correo').val(dato4);
        var idd = $(this).attr("data-idcliente");
        $('#txt_id').val(idd);        
        var idg = $(this).attr("data-idg");
        $('#drop_genero').val(idg);
    });
    
    $('#tbl_empleados tr').on('click', function(){
        //var dato = $(this).find('td:first').html();
        //$("#myModal").modal('show'); 
        var dato6 = $(this).find('td:nth-child(1)').html();
        $('#txt_dpi').val(dato6);
        var dato1 = $(this).find('td:nth-child(2)').html();
        $('#txt_nombres').val(dato1);
        var dato2 = $(this).find('td:nth-child(3)').html();
        $('#txt_apellidos').val(dato2);
        var dato3 = $(this).find('td:nth-child(4)').html();
        $('#txt_direccion').val(dato3);
        var dato4 = $(this).find('td:nth-child(5)').html();
        $('#txt_telefono').val(dato4);
        var dato7 = $(this).find('td:nth-child(7)').html();
        $('#txt_fn').val(dato7);
        var dato8 = $(this).find('td:nth-child(9)').html();
        $('#txt_il').val(dato8);
        var puesto = $(this).attr("data-idp");
        $('#drop_puesto').val(puesto);
        var genero = $(this).attr("data-idg");
        $('#drop_genero').val(genero);
        var idd = $(this).attr("data-idempleados");
        $('#txt_id').val(idd);        
    });
    
    $('#tbl_marcas tr').on('click', function(){
        //var dato = $(this).find('td:first').html();
        //$("#myModal").modal('show'); 
        var dato6 = $(this).find('td:nth-child(1)').html();
        $('#txt_id').val(dato6);
        var dato1 = $(this).find('td:nth-child(2)').html();
        $('#txt_marca').val(dato1);        
    });
    $('#tbl_proveedores tr').on('click', function(){
        //var dato = $(this).find('td:first').html();
        //$("#myModal").modal('show'); 
        var dato1 = $(this).find('td:nth-child(1)').html();
        $('#txt_proveedor').val(dato1);
        var dato2 = $(this).find('td:nth-child(2)').html();
        $('#txt_nit').val(dato2);
        var dato3 = $(this).find('td:nth-child(3)').html();
        $('#txt_direccion').val(dato3);
        var dato4 = $(this).find('td:nth-child(4)').html();
        $('#txt_telefono').val(dato4);
        var idd = $(this).attr("data-idproveedor");
        $('#txt_id').val(idd);        
    });
    
    $('#tbl_puestos tr').on('click', function(){
        //var dato = $(this).find('td:first').html();
        //$("#myModal").modal('show'); 
        var dato6 = $(this).find('td:nth-child(1)').html();
        $('#txt_id').val(dato6);
        var dato1 = $(this).find('td:nth-child(2)').html();
        $('#txt_puesto').val(dato1);        
    });
    
}