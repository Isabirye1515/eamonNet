import { Blog, ConnectionSignal, Home, ImageStoreLocal, ServiceDesk, UserSpeaker } from "@carbon/icons-react";
import { Column, Grid, Header, HeaderGlobalAction, HeaderName } from "@carbon/react"
import { HeaderGlobalBar } from "carbon-components-react";
import { useNavigate } from "react-router-dom";


const Heading = ()=>{
    const navigate = useNavigate();
    return(
        <Grid>
            <Column sm={4} md={8} lg={16}>
        
                <Header >
                    <HeaderName prefix="EAMON DREADS" ><h4></h4></HeaderName>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction>
                            <Home size={20} onClick={() => navigate("/")} aria-label="Home" class="m-5" />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction>
                            <Blog size={20} onClick={() => navigate("/blog")} aria-label="Blog" class="m-5" />
                        </HeaderGlobalAction>
                                                <HeaderGlobalAction>
                            <ServiceDesk size={20} onClick={() => navigate("/services")} aria-label="Home" class="m-5" />
                        </HeaderGlobalAction>
                                                <HeaderGlobalAction>
                            <UserSpeaker size={20} onClick={() => navigate("/benefit")} aria-label="Speach" class="m-5" />
                        </HeaderGlobalAction>

                                                <HeaderGlobalAction>
                            <ImageStoreLocal size={20}  onClick={()=>navigate("/gallery")} aria-label="gallery" class="m-5" />
                        </HeaderGlobalAction>

                                                <HeaderGlobalAction>
                            <ConnectionSignal  onClick={()=>navigate("/contact")} size={20} aria-label="contact"  class="m-5" />
                        </HeaderGlobalAction>


                    </HeaderGlobalBar>





                </Header>
            
            </Column>
        </Grid>
    )

}
export default Heading;