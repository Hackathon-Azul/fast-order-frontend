export default function formatDate(price: number): string {
    if (!price) return ''
    return new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
    }).format(price)
  }