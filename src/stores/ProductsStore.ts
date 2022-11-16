import type { ProdctDetail, ProductCard, ProductFilters, SimpleKeyValue } from "@/types/index"
import { defineStore } from 'pinia'
import axios from "axios"

interface HomeState {
  productDetail: null | ProdctDetail,
  productsList: null | ProductCard[],
  productFilters: ProductFilters,
  varieties: SimpleKeyValue[],
  productIndices: number[],
  currentProductIndex: number
}
export const useProductsStore = defineStore('productStore', {
  state: (): HomeState => ({
    productDetail: null,
    varieties: [],
    productsList: null,
    productFilters: {
      sort_type: "",
      title: "",
      price: {
        min_price: 0,
        max_price: 0,
      },
      onlyAvailable: false,
      category: "",
    },
    productIndices: [],
    currentProductIndex: 0
  }),
  getters: {
    getproductDetail: (state) => state.productDetail,
    getProductsList: (state) => state.productsList,
    getProductVarieties: (state) => state.varieties
  },
  actions: {
    createUniqeVarieties(attrLenght: number) {
      // reset varieties
      this.varieties = []
      this.productIndices = new Array(attrLenght).fill(0)
      for (let i = 0; i < attrLenght; i++) {
        const uniqueType = [
          ...new Set(this.productDetail?.varieties.map((obj) => obj.attributes[i].pivot.value)),
        ];
        if (this.productDetail)
          this.varieties.push({
            name: this.productDetail?.varieties[0].attributes[i].name,
            label: this.productDetail?.varieties[0].attributes[i].label,
            value: uniqueType,
          })
      }
    },
    calculateProductIndices(i: number, curDepth: number) {
      let perv = this.productIndices[curDepth]
      this.productIndices[curDepth] = i
      if (curDepth + 1 != this.varieties.length) {
        let sum = 0
        sum += ((this.productIndices[curDepth] ** (this.varieties.length - curDepth - 1)) * this.varieties[curDepth + 1].value.length)
        this.currentProductIndex = sum
      }
      // last one 
      // this.productIndices[this.varieties.length - 1]
    },
    addToCart() {
      console.log(this.productDetail?.varieties[this.currentProductIndex + this.productIndices[this.varieties.length - 1]].quantity)
      if (!(this.productDetail?.varieties[this.currentProductIndex + this.productIndices[this.varieties.length - 1]].quantity)) {
      }
    },
    async callProductsListFromAPI() {
      const { data } = await axios.get("/products");
      this.productsList = data.data.products.data
    },
    async callProductsDetailFromAPI(id: string | string[]) {
      const { data } = await axios.get(`/products/${id}`);
      this.productDetail = data.data.product
      if (this.productDetail)
        this.productDetail.relatedProducts = data.data.relatedProducts
      let j = this.productDetail?.varieties[0].attributes.length
      if (j)
        this.createUniqeVarieties(j)
    },
    makeQuery() {
      let stringQuery = ""
      let filter = this.productFilters
      if (filter.title) {
        stringQuery += `&title=${filter.title}`
      }
      if (filter.sort_type) {
        stringQuery += `&sort=${filter.sort_type}`
      }
      if (filter.price.min_price || filter.price.min_price) {
        stringQuery += `&min_price=${filter.price.min_price}`
        stringQuery += `&max_price=${filter.price.max_price}`
      }
      if (filter.category) {
        stringQuery += `&category_id=${filter.category}`
      }
      if (filter.onlyAvailable) {
        stringQuery += `&available = ${+filter.sort_type}`
      }
      this.productsList = null
      return stringQuery != "/products?version=new2" ? this.callFilteredProducts(stringQuery) : this.callProductsListFromAPI()
    },
    async callFilteredProducts(query: string) {
      const { data } = await axios.get(`/products?version=new2${query}`);
      this.productsList = data.data.products.data
    },


  },
})
