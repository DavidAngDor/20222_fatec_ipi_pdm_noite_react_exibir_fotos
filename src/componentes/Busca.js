import React, {Component} from 'react'
import {InputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'

export default class Busca extends Component{
    state = {
        termoDeBusca: ""
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
    }

    render() {
        return (
            // .flex.flex-column
            <div className="flex flex-column">
                {/* span.p-input-icon-left.w-full */}
                <span className="p-input-icon-left w-full">
                    {/* i.pi.pi-search */}
                    <i className="pi pi-search"></i>
                    <InputText              
                        className="w-full" 
                        placeholder={this.props.dica} 
                        onChange={this.onTermoAlterado}
                        // value={this.state.value}
                    />
                </span>
                <Button label="Ok" className="p-button-outlined mt-2"/>
            </div>
        )
    }
}

Busca.defaultProps = {
    dica: "Digite algo que você deseja ver..."
}