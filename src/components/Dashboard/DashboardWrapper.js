import  styled  from "styled-components";

const DashboardWrapper = styled.div`
    display: flex;

    .sidebar{
        flex-shrink: 0;
        width: 0;
        background-color: #001135;
        height: 100vh ;
        padding: 0;
        position: sticky !important;
        overflow: hidden;
        top: 0;
        transition: 0.7s;
        &.show{
            width: 300px;
            padding: 20px;
        }
        nav{
            li{
                a{
                    
                    .MuiButtonBase-root{
                        display: block !important;
                        padding: 10px 20px  !important;
                        border-radius: 6px  !important;
                        background-color: rgba(255, 255, 255, 0.3)  !important;
                        color: white !important;
                        margin-bottom: 10px  !important;
                        transition: 0.7s !important;
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3) !important;
                        min-width: 200px !important;
                        overflow: hidden !important;
                        &:hover{
                            background-color: #ffffff93 !important;
                            color: white !important;
                            transform: translate(10px);
                            border-radius: 30px 0 30px 0;
                }
                        
                    }
                  
                    &.active{
                        .MuiButtonBase-root{
                            background-color: #faa20b  !important;
                            color: white  !important;
                        }
                    }
                }
            }
        }

        ul {
            li {
                a{
                    display: block;
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    padding: 10px 20px;
                    border-radius: 10px;
                    background-color: white;
                    margin-bottom: 10px;
                    font-weight: bold;
                    transition-duration: 0.7s;
                    transition: 0.7s;
                    &.active{
                        background-color: red;
                        color: white !important;
                    }
                    &:hover{
                    background-color: #faa20b;
                    color: white !important;
                    transform: translate(10px);
                    border-radius: 30px 0 30px 0;
                }
              
                }
               
            }
        }

    
    }
   
    .rightside{
        flex: 1;
        position: relative;

        header{
            padding: 20px;
            position: sticky;
            top: 0;
            background-color: rgba(255, 255, 255, 0.486);
            z-index: 1000;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center;

           
            .logo2{
                    height: 60px !important;
                    width: 60px !important;
                    border-radius: 50%;
                    object-fit: cover;
                }
            .logo {
                height: 40px;
                margin-right: 20px;
            }
        }

        .content{
            padding: 20px;
        }
    }
    

`;

export default DashboardWrapper;