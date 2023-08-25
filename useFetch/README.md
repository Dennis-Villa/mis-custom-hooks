# useFetchCategories y useFetch Hooks

Ejemplo de uso para useFetchCategories:
```
    const urlCategories = 'endpoint de una api que devuelve un arreglo de categorias';
    const { categories: [], loading: true, error: null } = useForm( urlCategories );
```

Ejemplos de uso para useFetch:
```
    const url = 'endpoint de una api que necesita una categoria';
    const category = 'una categoria valida para la api'; 
    const { data: null, loading: true, error: null } = useFetch( url, category );
```
o:
```
    const url = 'endpoint de una api que no necesita una categoria';
    const { data: null, loading: true, error: null } = useFetch( url );
```

// useFetch funciona tanto para peticiones que necesitan variar su categoria como para las que no