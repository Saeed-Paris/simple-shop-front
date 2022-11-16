export interface ProductCard {
    id: number
    title: string
    major_image: {
        url: string
    }
    price: number
    slug: string
}
export interface Attribute {
    name: string
    label: string
    pivot: {
        value: string
    }
}
export interface VarietiesIndices {

}
export interface SimpleKeyValue {
    name: string,
    label: string,
    value: string[],
}
export interface VarietiesDepth {
    cur: number,
    max: number
}
export interface Attributes {
    quantity: number
    attributes: Attribute[]
}
export interface ProdctDetail extends ProductCard {
    varieties: Attributes[]
    specifications: Specification[]
    relatedProducts: ProductCard[]

}

export interface ProductFilters {
    sort_type: string
    title: string
    price: {
        min_price: number
        max_price: number
    }
    onlyAvailable: boolean
    category: string
}

export interface Specification {
    name: string
    label: string
    pivot: {
        specification_value: {
            value?: null | string
        }
    }
}
