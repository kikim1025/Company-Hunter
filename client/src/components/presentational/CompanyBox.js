import React from 'react';
import Company from './Company';

class CompanyBox extends React.Component {

    // direct redux to dispatch action for retrieving server data
    componentDidMount = () => {
        console.log(this.props);
        this.props.getData(); 
    };

    render() {
        return ( 
            <main>
                {   !this.props.data
                    ?   <section>retrieving data...</section>
                    :   <section>
                            {
                                this.props.data.map((c, i) => (
                                    <Company company={c} key={i} />
                                ))
                            }
                        </section>
                }
            </main>
        );
    };
};

export default CompanyBox;