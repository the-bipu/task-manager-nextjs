import React from 'react';
import type { NextPage } from 'next';

import { IndexController } from '@/src/index/controller/IndexController';
import IndexView from '@/src/index/views/IndexView';


const IndexPage: NextPage = (props) => (
    <div>
        <IndexController {...props}>
            <IndexView />
        </IndexController>
    </div>
);

export default IndexPage;