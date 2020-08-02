import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
    const [categories, setCategories] = useState([])

    const initialValues = {
        name: '',
        color: '',
        description: '',
    }

    const [formValues, setformValues] = useState(initialValues);

    function setValue(valueToChange, value) {
        setformValues({
            ...formValues,
            [valueToChange]: value, //nome: 'valor',
        });

    }

    function handleChange(infodosEventos) {
        infodosEventos.preventDefault();
        const { value} = infodosEventos.target;
        setValue(
            infodosEventos.target.getAttribute('name'),
            value
        )
    }




    return (
        <PageDefault>
            <h1>Cadastrar Categoria: {formValues.name}</h1>

            <form
                style={{background:formValues.color}}
                onSubmit={function handleSubmit(infodosEventos) {
                    infodosEventos.preventDefault();
                    console.log('Tentativa de enviar o form');
                    setCategories([
                        ...categories,
                        formValues
                    ]);
                    setValue({name:'',color:'',description:''})


                }}>
                <div>
                    <label>
                        Nome da Categoria:
                    <input
                            type="text"
                            placeholder={formValues.name}
                            name="name"
                            onChange={handleChange}

                        />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição da Categoria
                        <textarea
                            type="text"
                            placeholder={formValues.description}
                            name="description"
                            onChange={handleChange}
                        />
                    </label>
                </div>



                <div>
                    <label>
                        Cor da Categoria
                        <input
                            type='color'
                            placeholder={formValues.color}
                            name="color"
                            onChange={handleChange}
                        />
                    </label>



                </div>





                <button>
                    Cadastrar
                </button>

            </form>

            <h2>Categorias Criadas</h2>
            <ul>
                {categories.map((category, index) => {
                    return (
                        <li key={`${category}${index} `}>
                            {category.name}
                        </li>
                    )
                })
                }



            </ul>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}



export default CadastroCategoria;