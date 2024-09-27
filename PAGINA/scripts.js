function mostrarDetalles(productoId) {
    const modal = new bootstrap.Modal(document.getElementById('detallesProductoModal'));

    let nombreProducto = '';
    let precioProducto = '';
    let caracteristicas = [];

    if (productoId === 'producto1') {
        nombreProducto = 'Audífonos Inalambricos TWS';
        precioProducto = 'Precio: $80.000';
        caracteristicas = [
            'Tactil',
            '4 horas + 4 horas de carga con caja',
            'Almohadillas',
            'Porcentaje en la pantalla',
            'Carga inversa a disposiivos'
        ];
    } else if (productoId === 'producto2') {
        nombreProducto = 'Audífonos Inalambricos';
        precioProducto = 'Precio: $40.000';
        caracteristicas = [
            'Tactil',
            'Hasta 3 horas de uso continuo + 4 horas de uso con caja'
            
        ];
    } else if (productoId === 'producto3') {
        nombreProducto = 'Cascos TA82';
        precioProducto = 'Precio: $150.000';
        caracteristicas = [
            'Conexión directa',
            'USB Bluetooth',
            'Diadema ajustable'
        ];
    } else if (productoId === 'producto4') {
        nombreProducto = 'Audífonos TWS';
        precioProducto = 'Precio: $50.000';
        caracteristicas = [
            'Tactil',
            'Batería en la pantalla',
            'Almohadillas'
        ];
    }
    else if (productoId === 'producto5') {
        nombreProducto = 'Audífonos Inalambricos Tipo Armadura';
        precioProducto = 'Precio: $80.000';
        caracteristicas = [
            'Tactil',
            'Hasta 3 horas de uso continuo + 4 horas de uso con caja',
            'Almohadillas para mas comodidad',
            'Batería en la pantalla',
            'Carga inversa para tus disposiivos'
        ];
    } else if (productoId === 'producto6') {
        nombreProducto = 'Lámpara Bluetooth';
        precioProducto = 'Precio: $65.000';
        caracteristicas = [
            'La luz no lastima la vista',
            'Altura ajustable'
        ];
    }else if (productoId === 'producto1b') {
        nombreProducto = 'Anillo con forma de corazon';
        precioProducto = 'Precio: $15.000';
        caracteristicas = [
            'Bellos colores',
            'Hermoso diseño'
        ];
    }else if (productoId === 'producto2b') {
        nombreProducto = 'Aretes Best Friends Forever';
        precioProducto = 'Precio: $10.000';
        caracteristicas = [
            'Colores: Azul, rojo, negro, amarillo'
        ];
    }else if (productoId === 'producto3b') {
        nombreProducto = 'Cadena de corazon';
        precioProducto = 'Precio: $25.000';
        caracteristicas = [
            'Materiales super cómodos y resistentes'
        ];
    }else if (productoId === 'producto4b') {
        nombreProducto = 'Collar de gatos estilo yingyang';
        precioProducto = 'Precio: $15.000';
        caracteristicas = [
            'Hermosos colores',
            'Gran comodidad'
        ];
    }else if (productoId === 'producto5b') {
        nombreProducto = 'Anillo con forma de gema';
        precioProducto = 'Precio: $20.000';
        caracteristicas = [
            'Combina con todo tipo de outfits',
            'Joya perfecta'
        ];
    }else if (productoId === 'producto6b') {
        nombreProducto = 'Cadena estilo yingyang';
        precioProducto = 'Precio: $15.000';
        caracteristicas = [
            'Precioso juego de joyas',
            'Combinacion perfecta'
        ];
    }else if (productoId === 'producto7b') {
        nombreProducto = 'Reloj Dior';
        precioProducto = 'Precio: $25.000';
        caracteristicas = [
            'Durabilidad garantizada'
        ];
    }else if (productoId === 'producto8b') {
        nombreProducto = 'Guayos de Futbol';
        precioProducto = 'Precio: $80.000';
        caracteristicas = [
            'Talla 41',
            'Material comodo y super resistente',
            'Protege el pie totalmente'
        ];
    }else if (productoId === 'producto9b') {
        nombreProducto = 'Riñonera';
        precioProducto = 'Precio: $40.000';
        caracteristicas = [
            'Materiales super resistentes'
        ];
    }else if (productoId === 'producto1c') {
        nombreProducto = 'Ancheta con motivo de Up';
        
        caracteristicas = [
            'Golosinas',
            'Globo de Up',
            'Caja de madera'
        ];
    }else if (productoId === 'producto2c') {
        nombreProducto = 'Ancheta Personalizable';
       
        caracteristicas = [
            'Globo personalizable',
            'Dulces',
            'Satinado'
        ];
    }else if (productoId === 'producto3c') {
        nombreProducto = 'Regalo para mamá con Vino Blanco';
        
        caracteristicas = [
            'Globos',
            'Vino Blanco',
            'Peluches',
            'Dulces'
        ];
    }else if (productoId === 'producto4c') {
        nombreProducto = 'Ancheta almohada de emociones';
        
        caracteristicas = [
            'Almohada de emociones',
            'Mini arco de globos',
            'Dulces'
        ];
    }else if (productoId === 'producto5c') {
        nombreProducto = 'Globo con motivo de Kuromi';
       
        caracteristicas = [
            'Globo de Kuromi',
            'Carta',
            'Afiches',
            'Dulces'
        ];
    }else if (productoId === 'producto6c') {
        nombreProducto = 'Globo de Doraemon y girasoles';
     
        caracteristicas = [
            'Girasoles',
            'Personalizable',
            'Dulces',
            'Satinado'
        ];
    }else if (productoId === 'producto7c') {
        nombreProducto = 'Oso de peluche';
      
        caracteristicas = [
            'Peluche',
            'Rosas Azules Brillantes de Liston'
        ];
    }else if (productoId === 'producto8c') {
        nombreProducto = 'Globo Personalizable Rosado';
       
        caracteristicas = [
            'Personalizable',
            'Peluche',
            'Duradero'
        ];
    }else if (productoId === 'producto9c') {
        nombreProducto = 'Ramo de flores con listones';
        
        caracteristicas = [
            'Duradero',
            'Hermosos Colores',
            'Reluciente'
        ];
    }


    // Actualizamos el modal con el nombre, características y precio
    document.getElementById('nombre-producto').innerText = nombreProducto;

    const lista = document.createElement('ul');
    caracteristicas.forEach(caracteristica => {
        const item = document.createElement('li');
        item.innerText = caracteristica;
        lista.appendChild(item);
    });

    const descripcion = document.getElementById('descripcion-producto');
    descripcion.innerHTML = '';  // Limpiamos el contenido previo
    descripcion.appendChild(lista);

    document.getElementById('precio-producto').innerText = precioProducto;

    modal.show();
}