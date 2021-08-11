import styled from "styled-components";

const TodosWrapper =styled.div`
    tr{
        transition: 0.7s;
       
        &:hover{
            background-color: white !important;
            cursor: pointer;
        }
    }
`;

export default TodosWrapper;