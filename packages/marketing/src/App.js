import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Pricing, Landing } from './components';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

export default function App() {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}
