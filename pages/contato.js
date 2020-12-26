import React, { useState } from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import { Redirect, useHistory } from 'react-router-dom';
import { Jumbotron, Container, Form, FormGroup, Input, Label, Button } from 'reactstrap';


const Contato = () => {
    const [contato, setContato] = useState({
        nome: '',
        email: '',
        amsg: '',
        msg: ''
    });

    const onchangeInput = e => setContato({ ...contato, [e.target.name]: e.target.value });

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: '',
        formSuccess: false
    });


    const envMsg = async e => {
        e.preventDefault();
        console.log(contato);
        if (!validate()) return;
        setResponse({ formSave: true })

        try {
            const res = await fetch(`http://sibre2020-com-br.umbler.net/contato`, {
                method: `POST`,
                body: JSON.stringify(contato),
                headers: { 'Content-Type': 'application/json' }
            });

            const App = () => {
                const teste = useHistory();
            }

            

            const responseEnv = await res.json();

            console.log(responseEnv);
            if (responseEnv.error) {

                setResponse({
                    formSave: false,
                    type: 'success',
                    message: responseEnv.message
                });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: ' erro!',
                });
            }
        } catch (err) {
            setResponse({
                formSave: true,
                type: 'success',
                message: ' Mensagem enviada com sucesso!',
            });
           
            /* 
            if (!formSave) {
                return <Redirect to ={{
                    pathname: '/'}}/>
            } 
            */
        };
    };

    const validate = () => {
        if (!contato.nome) return setResponse({ type: 'error', message: 'Preencha o campo nome!' });
        if (!contato.email) return setResponse({ type: 'error', message: 'Preencha o campo e-mail!' });
        if (!contato.amsg) return setResponse({ type: 'error', message: 'Preencha o campo assunto da mensagem!' });
        if (!contato.msg) return setResponse({ type: 'error', message: 'Preencha o campo conteúdo da mensagem!' });

        return true;
    }

    return (<div>
        <Head>
            <title>Contato</title>
            <meta name='robots' content='index, follow' />
            <meta name="description" content="Entre em contato com a Segunda Igreja Batista no Recanto das Emas-DF"></meta>
            <meta name="author" content="Ernilson Daniel Lima de Souza" />
        </Head>
        <Menu />
        <Jumbotron fluid className="head-contato">
            <style>{`.head-contato{
                padding-top: 60px;
                padding-buttom:5px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`}</style>
            <Container>
                <h1 className="display-8 text-center">Contato</h1>
            </Container>
        </Jumbotron>

        <Jumbotron fluid className="form-contato">
            <style>{`.head-contato{
                padding-top: 60px;
                padding-buttom:5px;
                background-color: #fff;
                margin-bottom: 0ren ! important;
         }`}</style>
            <Container>

                <div className="row featurette">
                    <div className="col-md-6">
                        {response.type === 'success' ? <div className='alert alert-success'>{response.message}</div> : ""}
                        {response.type === 'error' ? <div className='alert alert-danger'>{response.message}</div> : ""}
                        <Form onSubmit={envMsg}>
                            <FormGroup>
                                <Label for="nome"><span className="text-danger">*</span> Nome:</Label>
                                <Input type="text" name="nome" id="nome" placeholder="Digite Seu Nome..."
                                    onChange={onchangeInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input type="email" name="email" id="email" placeholder="Digite Seu Email..."
                                    onChange={onchangeInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="amsg">Assunto da Mensagem:</Label>
                                <Input type="text" name="amsg" id="amgs" placeholder="Digite o assunto..."
                                    onChange={onchangeInput} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="msg"><span className="text-danger">*</span> Mensagem:</Label>
                                <Input type="textarea" name="msg" id="mgs" placeholder="Digite sua mensagem..."
                                    onChange={onchangeInput} />
                            </FormGroup>
                            {response.formSave ? <Button type="submit" outline color="warning" disabled>Enviar...
                                  </Button> : <Button type="submit" outline color="warning">Enviar</Button>}


                        </Form>
                    </div>
                    <div className="col-md-6"><br />
                        <h3 className="featurette-heading">Contribua com o Reino </h3>
                        <p className="lead">Banco-PagSeguro: Nº-290, Agência: 0001, Conta: 051116937,
                                Tipo: Conta de Pagamento, CNPJ: 186855200001/40 - Nº da Chave Pix Aleatório: 9738039b-806d-4fa59b85-261eb3d9d24.</p>
                        <hr />
                        <address>
                            <strong>Endereço</strong><br />
                            Quadra 105 Area Especial 01 <br />
                            Av. Vargem das Benção Recanto das Emas- DF<br />
                            (61)991323236 <br />
                        </address>
                    </div>

                </div>
            </Container>
        </Jumbotron>

    </div>)
}

export default Contato;