import styled from "styled-components";

const TodosWrapper =styled.div`
    tr{
        transition: 0.7s;
       
        &:hover{
            background-color: blue !important;
            cursor: pointer !important;
        }
    }
`;

export default TodosWrapper;