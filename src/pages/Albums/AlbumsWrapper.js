import styled from 'styled-components'

const AlbumsWrapper = styled.div`
    margin: 20px;
   
    .card {
        width: 300px;
        display: flex ;
        height: 200px;
        margin-bottom: 10px;
        transition: 1s;

        &:hover {
            background-color: blue !important;
            color: white;
            transform: rotate(10deg);
        }

        h4 {
            padding: 10px;
        }
    }
`;

export default AlbumsWrapper;