import { useState } from 'react';
import HeaderInstituicao from '../../header/headerInstituicao'
import DetalhesPedido from './detalhesPedido';
import './voluntarioInstituicao.css'
import Adicionar from './adicionar';

const VoluntarioPaginaInstituicao = () => {
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

    const [mostrarAdicionar, setMostrarAdicionar] = useState(false)

    const MostrarDetalhes = () => {
        setMostrarDetalhes(true)
    }

    const MostrarAdicionar = () => {
        setMostrarAdicionar(true)
    }

    return (
        <div className="pagina-voluntario-instituicao">
            <HeaderInstituicao/>
            <div className='conteudo-pagina-voluntario-instituicao'>
                <div className='titulo-geral-tabela'>
                    <h1>Lista de Atividades</h1>
                </div>
                <div className="tabela">
                    <div className="todos-os-titulos">
                        <div className="titulo-tabela">
                            <div className='nome-titulo'>
                                <p>Atividade</p>
                            </div>
                            <div className='nome-titulo'>
                                <p>Voluntario</p>
                            </div>
                            <div className='nome-titulo'>
                                <p>Status</p>
                            </div>
                            <div className='nome-titulo'>
                                <p>Data de Solicitação</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="itens-lista">
                        <div className="linha-itens">
                            <div className="item" onClick={MostrarDetalhes}>
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Joao</p>
                            </div>
                            <div className="item">
                                <p>Aguardando</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                         
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Joao</p>
                            </div>
                            <div className="item">
                                <p>Aguardando</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                         
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        <div className="linha-itens">
                            <div className="item">
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Fulano</p>
                            </div>
                            <div className="item">
                                <p>Em Andamento</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>


                        
                    </div>
                </div>

                <div className='botao-adicionar'>
                    <span onClick={MostrarAdicionar} >Adicionar</span>
                </div>

            </div>
            {mostrarDetalhes && <DetalhesPedido/>}
            {mostrarAdicionar && <Adicionar/> }
        </div>
    )
}


export default VoluntarioPaginaInstituicao