const axios = require('axios');
const { getCTAccessToken } = require('../middleware/commercetools.js');
const { CTP_PROJECT_KEY, CTP_API_URL } = process.env;

// Получение всех продуктов
const getAllProducts = async (req, res) => { 
  try {
    const token = await getCTAccessToken(); // токен доступа

    const response = await axios.get( // запрос в комерстулз апи
      `${CTP_API_URL}/${CTP_PROJECT_KEY}/products?limit=100&staged=true`,
      {
        headers: { 
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const products = response.data.results.map((product) => {
      const masterData = product.masterData;
      const current = masterData.current;
      const masterVariant = current.masterVariant; // Image url

      const priceObj = masterVariant.price;
      const price = priceObj ? (priceObj.value.centAmount / 100) : null;
      const currency = priceObj ? priceObj.value.currencyCode : '';

      return { // Возвращаем все пропсы для компонентов с коммерстулз
        id: product.id,
        key: product.key,
        name: current.name?.['en-GB'] || '',
        description: current.description?.['en-GB'] || '',
        slug: current.slug?.en || '',
        categories: current.categories?.map(cat => cat.id),
        productTypeId: product.productType.id,
        createdAt: product.createdAt,
        lastModifiedAt: product.lastModifiedAt,
        imageUrl: masterVariant?.images?.[0]?.url || '',
        price: price !== null ? `${price} ${currency}` : 'N/A',
      };
    });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};

module.exports = {
  getAllProducts,
};