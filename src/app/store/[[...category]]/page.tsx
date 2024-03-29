interface CategoryProps{
    params: {
        category: String
    }
}

export default function Category(props: CategoryProps) {
    const {category} = props.params

    return(
        <h1>Categoría dinámica: {category}</h1>
    )
}