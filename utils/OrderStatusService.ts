const OrderStatusService = {
    execute(status: string): string {
      switch(status) {
        case 'Waiting': 
          return '️Pedido na fila';
        case 'InProgress': 
          return '️Pedido em andamento';
        case 'Avaliable': 
          return '️Pedido disponível';
        case 'Canceled': 
          return '️Pedido cancelado';
        case 'Finished': 
          return 'Finalizado';
        default: 
          return 'Pedido na fila';
      }
    }
  }
  
  export default OrderStatusService;