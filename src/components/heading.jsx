import { Blog, ConnectionSignal, Home, ImageStoreLocal, ServiceDesk, UserProfile, UserSpeaker } from "@carbon/icons-react";
import { Column, Grid, Header, HeaderGlobalAction, HeaderName } from "@carbon/react"
import { HeaderGlobalBar } from "carbon-components-react";


const Heading = ()=>{
    return(
        <>
        <Grid>
            <Column sm={4} md={8} lg={16}>
        
                <Header >
                    <HeaderName prefix="EAMON DREADS" ><h4></h4></HeaderName>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction>
                            <Home size={20} aria-label="Home" class="m-5" />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction>
                            <Blog size={20} aria-label="Blog" class="m-5" />
                        </HeaderGlobalAction>
                                                <HeaderGlobalAction>
                            <ServiceDesk size={20} aria-label="Home" class="m-5" />
                        </HeaderGlobalAction>
                                                <HeaderGlobalAction>
                            <UserSpeaker size={20} aria-label="Home" class="m-5" />
                        </HeaderGlobalAction>

                                                <HeaderGlobalAction>
                            <ImageStoreLocal size={20} aria-label="Home" class="m-5" />
                        </HeaderGlobalAction>

                                                <HeaderGlobalAction>
                            <ConnectionSignal size={20} aria-label="Home"  class="m-5" />
                        </HeaderGlobalAction>

                                                <HeaderGlobalAction>
                            <UserProfile size={20} aria-label="Home" class="m-5"  />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>





                </Header>
            
            </Column>
        </Grid>
        </>
    )

}
export default Heading;