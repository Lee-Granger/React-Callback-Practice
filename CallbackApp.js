import React from 'react';
import Card from './Card';

class CallbackApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: ""
        }
    }

    petAnimal(name){
        const newMessage = "You just pet the " + name + "!";
        this.setState({message: newMessage});
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <div>
                    <Card title="Cow" petAnimal = {(name) => {this.petAnimal(name)}}></Card>
                    <Card title="Pig" petAnimal = {(name) => {this.petAnimal(name)}}></Card>
                </div>
                <div>
                    <Card title="Horse" petAnimal = {(name) => {this.petAnimal(name)}}></Card>
                    <Card title="Llama" petAnimal = {(name) => {this.petAnimal(name)}}></Card>
                </div>
            </div>
        )
    }
}

export default CallbackApp;