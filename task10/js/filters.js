export function applyFilters(products, keyword, category) {
    return products.filter(p => {
      const matchesCategory = category === 'all' || p.category === category;
      const matchesKeyword = p.name.toLowerCase().includes(keyword.toLowerCase());
      return matchesCategory && matchesKeyword;
    });
  }
  