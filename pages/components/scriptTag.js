import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Layout, Button, Banner, Toast, Stack, Frame } from '@shopify/polaris';
import { Context } from '@shopify/app-bridge-react';

class TestScriptTag extends React.Component {
    static contextType = Context;

    render() {
        return (
            console.log('teest_')
        );
    }
}

export default TestScriptTag;





